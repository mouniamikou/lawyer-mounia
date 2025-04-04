import { sendEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Create HTML content from form data
    const htmlContent = `
      <h1>New Business Form Submission</h1>
      <p><strong>Name:</strong> ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}</p>
      <p><strong>Email:</strong> ${formData.personalInfo.email}</p>
      <p><strong>Phone:</strong> ${formData.personalInfo.phone}</p>
      <p><strong>Current Country:</strong> ${formData.personalInfo.currentCountry}</p>
      <p><strong>Business Type:</strong> ${formData.businessType}</p>
      <p><strong>Create Type:</strong> ${formData.createType}</p>
      <p><strong>Company Structure:</strong> ${formData.companyStructure}</p>
      <p><strong>Need Advice:</strong> ${formData.needAdvice}</p>
      <p><strong>Existing Business:</strong> {
      contracts: ${formData.existingBusiness.contracts},
      compliance: ${formData.existingBusiness.compliance},
      disputes: ${formData.existingBusiness.disputes},
      other: ${formData.existingBusiness.other},
      otherText: ${formData.existingBusiness.otherText}
    }</p>
      <p><strong>Business Sector:</strong> ${formData.businessSector}</p>
      <p><strong>Timeline:</strong> ${formData.timeline}</p>
      <p><strong>Other:</strong> ${formData.other}</p>
      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Create plain text version
    const textContent = `
      New Business Form Submission
        Personal Information:
    --------------------
    Name: ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}
    Email: ${formData.personalInfo.email}
    Phone: ${formData.personalInfo.phone}
    Current Country: ${formData.personalInfo.currentCountry}
    businessType: ${formData.businessType}
    createType: ${formData.createType}
    companyStructure: ${formData.companyStructure}
    needAdvice: ${formData.needAdvice}
    existingBusiness: {
      contracts: ${formData.existingBusiness.contracts},
      compliance: ${formData.existingBusiness.compliance},
      disputes: ${formData.existingBusiness.disputes},
      other: ${formData.existingBusiness.other},
      otherText: ${formData.existingBusiness.otherText},
    },
    businessSector: ${formData.businessSector}
    timeline: ${formData.timeline}
    other: ${formData.other}

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
