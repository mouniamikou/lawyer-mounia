import { sendEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Create HTML content from form data
    const htmlContent = `
      <h1>New Business Form Submission</h1>
      <p><strong>Name:</strong> ${formData.name || "Not provided"}</p>
      <p><strong>Email:</strong> ${formData.email || "Not provided"}</p>
      <p><strong>Phone:</strong> ${formData.phone || "Not provided"}</p>
      <p><strong>Business Type:</strong> ${formData.businessType || "Not provided"}</p>
      <p><strong>Message:</strong> ${formData.message || "Not provided"}</p>
      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Create plain text version
    const textContent = `
      New Business Form Submission
      Name: ${formData.name || "Not provided"}
      Email: ${formData.email || "Not provided"}
      Phone: ${formData.phone || "Not provided"}
      Business Type: ${formData.businessType || "Not provided"}
      Message: ${formData.message || "Not provided"}
      Submitted on: ${new Date().toLocaleString()}
    `;

    const result = await sendEmail(
      "New Business Form Submission",
      htmlContent,
      textContent
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Business form submitted successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Business form error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
