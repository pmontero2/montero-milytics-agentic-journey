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
const siteUrl = process.env.VITE_SITE_URL || "https://www.bmontero.com";
const brandImageUrl = "https://yzdbodnmvmswpvszzxpc.supabase.co/storage/v1/object/public/img/firmabzyblanca.png";
const emailLogoUrl = brandImageUrl;
const emailSignatureUrl = brandImageUrl;

const resend = resendApiKey ? new Resend(resendApiKey) : null;

function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function detailsRow(label: string, value: string) {
  return `
    <tr>
      <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #9ca3af; width: 180px; vertical-align: top; font-size: 14px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding: 12px 0; border-bottom: 1px solid #2a2a2a; color: #f3f4f6; font-size: 14px;">
        ${escapeHtml(value)}
      </td>
    </tr>
  `;
}

function getErrorMessage(error: unknown) {
  if (error instanceof Error && error.message) return error.message;
  if (typeof error === "string" && error.trim()) return error.trim();

  if (error && typeof error === "object") {
    const maybeMessage = (error as { message?: unknown }).message;
    if (typeof maybeMessage === "string" && maybeMessage.trim()) return maybeMessage.trim();

    const maybeName = (error as { name?: unknown }).name;
    const maybeStatusCode = (error as { statusCode?: unknown }).statusCode;
    if (typeof maybeName === "string" && typeof maybeStatusCode === "number") {
      return `${maybeName} (${maybeStatusCode})`;
    }
  }

  return "Error desconocido";
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

  const missingEnvVars = [
    !resendApiKey?.trim() ? "RESEND_API_KEY" : null,
    !contactToEmail?.trim() ? "CONTACT_TO_EMAIL" : null,
    !contactFromEmail?.trim() ? "CONTACT_FROM_EMAIL" : null,
    !hcaptchaSecret?.trim() ? "HCAPTCHA_SECRET_KEY" : null,
  ].filter(Boolean) as string[];

  if (missingEnvVars.length > 0 || !resend) {
    return res.status(500).json({
      ok: false,
      error: `Faltan variables: ${missingEnvVars.join(", ")}`,
    });
  }

  const verifiedContactToEmail = contactToEmail!.trim();
  const verifiedContactFromEmail = contactFromEmail!.trim();
  const resendClient = resend;

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
<!doctype html>
<html>
  <body style="margin: 0; padding: 0; background-color: #070707; font-family: Inter, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #070707; padding: 28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; background: #111111; border: 1px solid #242424; border-radius: 16px; overflow: hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #0a0a0a 0%, #151515 60%, #1f1f1f 100%); padding: 28px 28px 22px;">
                <img src="${emailLogoUrl}" alt="Brian Montero" width="170" style="display: block; margin-bottom: 18px;" />
                <p style="margin: 0; color: #facc15; font-weight: 700; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">
                  Nuevo lead recibido
                </p>
                <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 26px; line-height: 1.2;">
                  ${escapeHtml(subject)}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 28px 8px;">
                <p style="margin: 0 0 18px; color: #d1d5db; font-size: 15px; line-height: 1.6;">
                  Llegó una nueva solicitud desde tu sitio web. Estos son los datos del contacto:
                </p>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="border-collapse: collapse;">
                  ${detailsRow("Nombre", nombre)}
                  ${detailsRow("Correo", correo)}
                  ${detailsRow("Teléfono", telefono)}
                  ${body?.empresa ? detailsRow("Empresa / Rubro", body.empresa) : ""}
                  ${body?.usa_ia ? detailsRow("¿Usa IA actualmente?", body.usa_ia) : ""}
                  ${body?.objetivo ? detailsRow("Objetivo", body.objetivo) : ""}
                  ${body?.mensaje ? detailsRow("Mensaje", body.mensaje) : ""}
                  ${body?.source ? detailsRow("Fuente", body.source) : ""}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding: 0 28px 28px;">
                <a href="mailto:${escapeHtml(correo)}"
                  style="display: inline-block; background: #facc15; color: #111111; text-decoration: none; font-weight: 700; font-size: 14px; border-radius: 999px; padding: 12px 20px; margin-top: 18px;">
                  Responder contacto
                </a>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 28px 24px; border-top: 1px solid #242424;">
                <img src="${emailSignatureUrl}" alt="Firma Brian Montero" width="180" style="display: block; margin-bottom: 10px;" />
                <p style="margin: 0; color: #6b7280; font-size: 12px;">
                  Sistema de contacto automatizado · ${escapeHtml(siteUrl)}
                </p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;

  const clientHtml = `
<!doctype html>
<html>
  <body style="margin: 0; padding: 0; background-color: #070707; font-family: Inter, Arial, sans-serif;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color: #070707; padding: 28px 12px;">
      <tr>
        <td align="center">
          <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="max-width: 680px; background: #111111; border: 1px solid #242424; border-radius: 16px; overflow: hidden;">
            <tr>
              <td style="background: linear-gradient(135deg, #0a0a0a 0%, #151515 60%, #1f1f1f 100%); padding: 28px 28px 22px;">
                <img src="${emailLogoUrl}" alt="Brian Montero" width="170" style="display: block; margin-bottom: 18px;" />
                <p style="margin: 0; color: #facc15; font-weight: 700; font-size: 12px; letter-spacing: .08em; text-transform: uppercase;">
                  Confirmación de contacto
                </p>
                <h1 style="margin: 10px 0 0; color: #ffffff; font-size: 26px; line-height: 1.2;">
                  Recibí tu mensaje, ${escapeHtml(nombre)}
                </h1>
              </td>
            </tr>
            <tr>
              <td style="padding: 24px 28px;">
                <p style="margin: 0 0 12px; color: #e5e7eb; font-size: 15px; line-height: 1.7;">
                  Gracias por escribir. Ya tengo tu solicitud y revisaré personalmente la información que enviaste.
                </p>
                <p style="margin: 0 0 18px; color: #d1d5db; font-size: 15px; line-height: 1.7;">
                  Te responderé a la brevedad para coordinar próximos pasos.
                </p>
                <div style="margin-top: 18px; padding: 14px 16px; border-radius: 12px; border: 1px solid #2a2a2a; background-color: #0c0c0c;">
                  <p style="margin: 0; color: #9ca3af; font-size: 13px;">
                    Si quieres agregar contexto, responde este correo con más detalles de tu caso.
                  </p>
                </div>
              </td>
            </tr>
            <tr>
              <td style="padding: 16px 28px 26px; border-top: 1px solid #242424;">
                <p style="margin: 0; color: #ffffff; font-size: 14px; font-weight: 600;">Brian Montero</p>
                <p style="margin: 6px 0 0; color: #9ca3af; font-size: 12px;">IA aplicada y automatización de procesos</p>
                <img src="${emailSignatureUrl}" alt="Firma Brian Montero" width="180" style="display: block; margin-top: 12px;" />
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
  `;

  try {
    await resendClient.emails.send({
      from: verifiedContactFromEmail,
      to: verifiedContactToEmail,
      replyTo: correo,
      subject,
      html: detailsHtml,
    });

    await resendClient.emails.send({
      from: verifiedContactFromEmail,
      to: correo,
      subject: "Recibimos tu mensaje - Brian Montero",
      html: clientHtml,
    });

    return res.status(200).json({ ok: true });
  } catch (error) {
    console.error("[contact]", error);
    const debugMessage = getErrorMessage(error);
    return res.status(502).json({
      ok: false,
      error: `No se pudo enviar el correo. Detalle: ${debugMessage}`,
    });
  }
}
