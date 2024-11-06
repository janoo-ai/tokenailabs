import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import Email from "@/emails/email";

export async function POST(req) {
  const { to, subject, text, name } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    secure: true,
    port: 465,
    auth: {
      user: "jaanu.lifeforce@gmail.com",
      pass: "mqywgjuojivfoesc",
    },
    debug: true,
  });
  const emailHtml = await render(
    <Email name={name} email={to} message={text} />
  );

  try {
    // Send the email
    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      subject,
      text,
      html: emailHtml,
    });

    return new Response(
      JSON.stringify({ message: "Email sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return new Response(
      JSON.stringify({ message: "Failed to send email", error }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
