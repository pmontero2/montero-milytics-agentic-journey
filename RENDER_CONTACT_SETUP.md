# Render + correo + captcha (hCaptcha)

Objetivo: recibir formularios, validar captcha, enviar correo al admin y confirmación al cliente.

## 1) Variables en Render

- `HCAPTCHA_SECRET_KEY`: secreto de hCaptcha
- `RESEND_API_KEY`: API key de Resend
- `TO_EMAIL`: tu correo destino (ej. `info@tudominio.com`)
- `FROM_EMAIL`: remitente verificado (ej. `contacto@tudominio.com`)
- `ALLOWED_ORIGIN`: dominio del frontend (ej. `https://www.bmontero.com`)

## 2) Endpoint recomendado (`POST /contact`)

```ts
import express from "express";
import cors from "cors";
import { Resend } from "resend";

const app = express();
const resend = new Resend(process.env.RESEND_API_KEY);

app.use(express.json({ limit: "1mb" }));
app.use(cors({ origin: process.env.ALLOWED_ORIGIN, methods: ["POST"] }));

app.post("/contact", async (req, res) => {
  const {
    nombre,
    correo,
    telefono,
    objetivo,
    usa_ia,
    captcha_token,
    source,
  } = req.body ?? {};

  if (!nombre || !correo || !telefono || !captcha_token) {
    return res.status(400).json({ ok: false, error: "Missing fields" });
  }

  // Verificar hCaptcha en servidor
  const verifyResponse = await fetch("https://hcaptcha.com/siteverify", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      secret: process.env.HCAPTCHA_SECRET_KEY ?? "",
      response: captcha_token,
    }),
  });

  const verify = await verifyResponse.json();
  if (!verify.success) {
    return res.status(403).json({ ok: false, error: "Captcha invalid" });
  }

  // Correo para ti
  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: process.env.TO_EMAIL!,
    subject: `Nuevo contacto desde web (${source ?? "landing"})`,
    html: `
      <h2>Nuevo lead</h2>
      <p><b>Nombre:</b> ${nombre}</p>
      <p><b>Correo:</b> ${correo}</p>
      <p><b>Teléfono:</b> ${telefono}</p>
      <p><b>Usa IA:</b> ${usa_ia ?? "N/D"}</p>
      <p><b>Objetivo:</b> ${objetivo ?? "N/D"}</p>
    `,
  });

  // Autorespuesta al cliente
  await resend.emails.send({
    from: process.env.FROM_EMAIL!,
    to: correo,
    subject: "Recibimos tu mensaje - Brian Montero",
    html: `
      <p>Hola ${nombre},</p>
      <p>Gracias por contactarme. Recibí tu mensaje y te responderé pronto.</p>
      <p>Si es urgente, responde este correo con más contexto.</p>
    `,
  });

  return res.status(200).json({ ok: true });
});
```

## 3) Frontend (este repo)

- Ya se envía `captcha_token` en formularios.
- Ya existe protección adicional:
  - campo honeypot oculto
  - tiempo mínimo de llenado

Configura `VITE_CONTACT_API_URL` solo si en desarrollo no usas `/api/contact`.

