import nodemailer from "nodemailer";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp.example.com", // replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "your-email@example.com", // replace with your email
    pass: "your-password", // replace with your password
  },
});

export async function sendEmail(subject, htmlContent, text) {
  try {
    const info = await transporter.sendMail({
      from: '"Your Company" <your-email@example.com>',
      to: "recipient@example.com", // replace with recipient email
      subject: subject,
      text: text,
      html: htmlContent,
    });

    console.log("Message sent: %s", info.messageId);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: error.message };
  }
}
