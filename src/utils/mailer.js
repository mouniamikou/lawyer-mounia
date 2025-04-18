import nodemailer from "nodemailer";

// Create reusable transporter
const transporter = nodemailer.createTransport({
  host: "smtp-relay.brevo.com", // replace with your SMTP server
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "oussamahamdani1@gmail.com", // replace with your email
    pass: "6UIrLmkCFEabyHtB", // replace with your password
  },
});

export async function sendEmail(subject, htmlContent, text) {
  try {
    const info = await transporter.sendMail({
      from: " <mouniamikou@gmail.com>",
      to: "mouniamikou@gmail.com", // replace with recipient email
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
