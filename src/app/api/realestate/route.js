import { sendEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const formData = await request.json();

    // Create HTML content from form data
    const htmlContent = `
      <h1>New Real Estate Form Submission</h1>
      <p><strong>Name:</strong> ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}</p>
      <p><strong>Email:</strong> ${formData.personalInfo.email}</p>
      <p><strong>Phone:</strong> ${formData.personalInfo.phone}</p>
      <p><strong>Current Country:</strong> ${formData.personalInfo.currentCountry}</p>
      <p><strong>Project Status:</strong> ${formData.projectStatus}</p>
      <p><strong>Transaction Type:</strong> ${formData.transactionType}</p>
      <p><strong>Budget:</strong> ${formData.budget}</p>
      <p><strong>Project Stage:</strong>  {
      searching: ${formData.projectStage.searching},
      identifiedProperty: ${formData.projectStage.identifiedProperty},
      submittedOffer: ${formData.projectStage.submittedOffer},
      offerAccepted: ${formData.projectStage.offerAccepted},
      promiseSigned: ${formData.projectStage.promiseSigned},
      deedSigned: ${formData.projectStage.deedSigned},
      promiseDate: ${formData.projectStage.promiseDate}, 
      deedDate: ${formData.projectStage.deedDate}
  }
      </p>
      <p><strong>Selling Stage:</strong> {
      considering: ${formData.sellingStage.considering},
      listed: ${formData.sellingStage.listed},
      offerAccepted: ${formData.sellingStage.offerAccepted},
      promiseSigned: ${formData.sellingStage.promiseSigned},
      deedSigned: ${formData.sellingStage.deedSigned},
      promiseDate: ${formData.sellingStage.promiseDate}, 
      deedDate: ${formData.sellingStage.deedDate} }
      </p>
      <p><strong>Other:</strong> ${formData.other}</p>
      <p><strong>Property Type:</strong> ${formData.propertyType}</p>
      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Create plain text version
    const textContent = `
      New Real Estate Form Submission
       Personal Information:
    --------------------
    Name: ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}
    Email: ${formData.personalInfo.email}
    Phone: ${formData.personalInfo.phone}
    Current Country: ${formData.personalInfo.currentCountry}
    projectStatus: ${formData.projectStatus},
    transactionType: ${formData.transactionType},
    budget: ${formData.budget},
    projectStage: {
      searching: ${formData.projectStage.searching},
      identifiedProperty: ${formData.projectStage.identifiedProperty},
      submittedOffer: ${formData.projectStage.submittedOffer},
      offerAccepted: ${formData.projectStage.offerAccepted},
      promiseSigned: ${formData.projectStage.promiseSigned},
      deedSigned: ${formData.projectStage.deedSigned},
      promiseDate: ${formData.projectStage.promiseDate},
      deedDate: ${formData.projectStage.deedDate},
    },
    sellingStage: {
      considering: ${formData.sellingStage.considering},
      listed: ${formData.sellingStage.listed},
      offerAccepted: ${formData.sellingStage.offerAccepted},
      promiseSigned: ${formData.sellingStage.promiseSigned},
      deedSigned: ${formData.sellingStage.deedSigned},
      promiseDate: ${formData.sellingStage.promiseDate},
      deedDate: ${formData.sellingStage.deedDate},
    },
    other: ${formData.other},
    propertyType: ${formData.propertyType},
   
      Submitted on: ${new Date().toLocaleString()}
    `;

    const result = await sendEmail(
      "New Real Estate Form Submission",
      htmlContent,
      textContent
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Real Estate form submitted successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Real Estate form error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
