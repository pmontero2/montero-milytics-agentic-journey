import type { VercelRequest, VercelResponse } from "@vercel/node";
import { Resend } from "resend";

type ContactBody = {
  nombre?: string;
  correo?: string;
  telefono?: string;
  usa_ia?: string;
  objetivo?: string;
  empresa?: string;
  mensaje?: string;
  proyecto_interes?: string;
  source?: string;
  captcha_token?: string;
  honeypot?: string;
  form_started_at?: number;
};

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL;
const hcaptchaSecret = process.env.HCAPTCHA_SECRET_KEY;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

async function verifyHCaptcha(token: string, remoteIp?: string) {
  const body = new URLSearchParams({
    secret: hcaptchaSecret || "",
    response: token,
  });
  if (remoteIp) body.set("remoteip", remoteIp);

  const response = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (!response.ok) return false;
  const data = (await response.json()) as { success?: boolean };
  return Boolean(data.success);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ ok: false, error: "Method not allowed" });
  }

  if (!resend || !contactToEmail || !contactFromEmail || !hcaptchaSecret) {
    return res.status(500).json({
      ok: false,
      error: "Faltan variables: RESEND_API_KEY, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL, HCAPTCHA_SECRET_KEY",
    });
  }

  const body = (typeof req.body === "string" ? JSON.parse(req.body) : req.body) as ContactBody;

  const nombre = (body?.nombre || "").trim();
  const correo = (body?.correo || "").trim().toLowerCase();
  const telefono = (body?.telefono || "").trim();
  const captchaToken = (body?.captcha_token || "").trim();
  const honeypot = (body?.honeypot || "").trim();
  const formStartedAt = Number(body?.form_started_at || 0);

  if (honeypot) {
    return res.status(400).json({ ok: false, error: "Solicitud inválida." });
  }

  if (formStartedAt > 0 && Date.now() - formStartedAt < 2000) {
    return res.status(400).json({ ok: false, error: "Formulario enviado demasiado rápido." });
  }

  if (!nombre || !correo || !telefono || !captchaToken) {
    return res.status(400).json({ ok: false, error: "Faltan campos obligatorios." });
  }

  const isCaptchaValid = await verifyHCaptcha(captchaToken, req.headers["x-forwarded-for"] as string | undefined);
  if (!isCaptchaValid) {
    return res.status(403).json({ ok: false, error: "Captcha inválido." });
  }

  const subject = body?.proyecto_interes
    ? `Nuevo lead de proyecto: ${body.proyecto_interes}`
    : "Nuevo lead desde landing";

  const detailsHtml = `
    <h2>Nuevo lead</h2>
    <p><b>Nombre:</b> ${escapeHtml(nombre)}</p>
    <p><b>Correo:</b> ${escapeHtml(correo)}</p>
    <p><b>Teléfono:</b> ${escapeHtml(telefono)}</p>
    ${body?.empresa ? `<p><b>Empresa/Rubro:</b> ${escapeHtml(body.empresa)}</p>` : ""}
    ${body?.usa_ia ? `<p><b>¿Usa IA?:</b> ${escapeHtml(body.usa_ia)}</p>` : ""}
    ${body?.objetivo ? `<p><b>Objetivo:</b> ${escapeHtml(body.objetivo)}</p>` : ""}
    ${body?.mensaje ? `<p><b>Mensaje:</b> ${escapeHtml(body.mensaje)}</p>` : ""}
    ${body?.source ? `<p><b>Fuente:</b> ${escapeHtml(body.source)}</p>` : ""}
  `;

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: correo,
      subject,
      html: detailsHtml,
    });

    await resend.emails.send({
      from: contactFromEmail,
      to: correo,
      subject: "Recibimos tu mensaje - Brian Montero",
      html: `
        <p>Hola ${escapeHtml(nombre)},</p>
        <p>Gracias por escribir. Recibí tu solicitud y te responderé pronto.</p>
        <p>Saludos,<br/>Brian Montero</p>
      `,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    return res.status(502).json({ ok: false, error: "No se pudo enviar el correo." });
  }
}
