import type { Handler, HandlerEvent } from "@netlify/functions";
import nodemailer from "nodemailer";

interface ContactPayload {
  email: string;
  message: string;
  captchaToken?: string;
}

const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN ?? "";

const corsHeaders = (origin: string) => ({
  "Access-Control-Allow-Origin": ALLOWED_ORIGIN || origin,
  "Access-Control-Allow-Headers": "Content-Type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
});

const handler: Handler = async (event: HandlerEvent) => {
  const origin = event.headers["origin"] ?? "";

  if (event.httpMethod === "OPTIONS") {
    return {
      statusCode: 204,
      headers: corsHeaders(origin),
      body: "",
    };
  }

  if (event.httpMethod !== "POST") {
    return {
      statusCode: 405,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Método não permitido." }),
    };
  }

  let payload: ContactPayload;

  try {
    payload = JSON.parse(event.body ?? "{}");
  } catch {
    return {
      statusCode: 400,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Body inválido." }),
    };
  }

  const { email, message, captchaToken } = payload;

  if (!email?.trim() || !message?.trim()) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Campos obrigatórios: email, message." }),
    };
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "E-mail inválido." }),
    };
  }

  if (!captchaToken) {
    return {
      statusCode: 422,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Por favor, complete a validação do captcha." }),
    };
  }

  try {
    const recaptchaSecret = process.env.RECAPTCHA_SECRET_KEY;
    const googleVerifyUrl = `https://www.google.com/recaptcha/api/siteverify?secret=${recaptchaSecret}&response=${captchaToken}`;

    const response = await fetch(googleVerifyUrl, {
      method: "POST",
    });

    const verificationResult = await response.json() as { success: boolean };

    if (!verificationResult.success) {
      return {
        statusCode: 400,
        headers: corsHeaders(origin),
        body: JSON.stringify({ error: "Falha na validação do captcha (Google)." }),
      };
    }
  } catch (error) {
    console.error("Erro ao verificar captcha no Google:", error);
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: process.env.SMTP_SECURE === "true",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `<${process.env.SMTP_USER}>`,
      replyTo: email,
      to: process.env.CONTACT_EMAIL,
      subject: "[Gref Elétrica] Nova mensagem Landing Page",
      text: message,
      html: `
        <h2>Nova mensagem de contato</h2>
        <p><strong>E-mail:</strong> ${email}</p>
        <p><strong>Mensagem:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    });

    return {
      statusCode: 200,
      headers: corsHeaders(origin),
      body: JSON.stringify({ message: "E-mail enviado com sucesso." }),
    };
  } catch (error) {
    console.error("Erro ao enviar e-mail:", error);
    return {
      statusCode: 500,
      headers: corsHeaders(origin),
      body: JSON.stringify({ error: "Falha ao enviar o e-mail. Tente novamente mais tarde." }),
    };
  }
};

export { handler };
