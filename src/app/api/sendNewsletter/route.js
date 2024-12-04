import nodemailer from "nodemailer";
import { render } from "@react-email/render";
import NewsletterConfirmation from "@/emails/newletteremail";

export async function POST(req) {
  const { to, name } = await req.json();

  const transporter = nodemailer.createTransport({
    host: "smtp.hostinger.com",
    secure: true,
    port: 465,
    auth: {
      user: "support@tokenailabs.com",
      pass: "Tokenailabs@2024#",
    },
    debug: true,
  });
  const emailHtml = await render(<NewsletterConfirmation name={name} />);

  try {
    // Send the email
    await transporter.sendMail({
      from: "support@tokenailabs.com",
      to,
      subject: "Subscribe Token Ai Labs Pvt Ltd ",
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
