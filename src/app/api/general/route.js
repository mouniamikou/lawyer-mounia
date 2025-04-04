import { NextResponse } from "next/server";
import { sendEmail } from "@/utils/mailer";

export async function POST(req) {
  try {
    const formData = await req.json();

    // Determine subject based on service type
    let subject = "New Inquiry - ";
    switch (formData.serviceType) {
      case "installation":
        subject += "Installation in Portugal";
        break;
      case "realEstate":
        subject += "Real Estate Services";
        break;
      case "business":
        subject += "Business Services";
        break;
      case "other":
        subject += "General Inquiry";
        break;
      default:
        subject += "Website Contact Form";
    }

    // Create HTML content for the email
    const htmlContent = `
      <h1>New Inquiry from Website</h1>
      <h2>${subject}</h2>
      
      <h3>Personal Information</h3>
      <p><strong>Name:</strong> ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}</p>
      <p><strong>Email:</strong> ${formData.personalInfo.email}</p>
      <p><strong>Phone:</strong> ${formData.personalInfo.phone}</p>
      <p><strong>Current Country:</strong> ${formData.personalInfo.currentCountry}</p>
      
      ${formData.projectStatus ? `<p><strong>Project Status:</strong> ${formData.projectStatus}</p>` : ""}
      
      ${
        formData.serviceType === "installation" && formData.installation
          ? `
        <h3>Installation Details</h3>
        <p><strong>Visa Type:</strong> ${formData.installation.visaType || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${formData.installation.timeline || "Not specified"}</p>
        <p><strong>Family Size:</strong> ${formData.installation.familySize || "Not specified"}</p>
        <p><strong>Additional Information:</strong> ${formData.installation.additionalInfo || "None provided"}</p>
      `
          : ""
      }
      
      ${
        formData.serviceType === "realEstate" && formData.realEstate
          ? `
        <h3>Real Estate Details</h3>
        <p><strong>Property Type:</strong> ${formData.realEstate.propertyType || "Not specified"}</p>
        <p><strong>Budget:</strong> ${formData.realEstate.budget || "Not specified"}</p>
        <p><strong>Location:</strong> ${formData.realEstate.location || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${formData.realEstate.timeline || "Not specified"}</p>
        <p><strong>Additional Information:</strong> ${formData.realEstate.additionalInfo || "None provided"}</p>
      `
          : ""
      }
      
      ${
        formData.serviceType === "business" && formData.business
          ? `
        <h3>Business Details</h3>
        <p><strong>Business Type:</strong> ${formData.business.businessType || "Not specified"}</p>
        <p><strong>Timeline:</strong> ${formData.business.timeline || "Not specified"}</p>
        <p><strong>Investment Amount:</strong> ${formData.business.investmentAmount || "Not specified"}</p>
        <p><strong>Additional Information:</strong> ${formData.business.additionalInfo || "None provided"}</p>
      `
          : ""
      }
      
      ${
        formData.serviceType === "other" && formData.otherDetails
          ? `
        <h3>Other Details</h3>
        <p>${formData.otherDetails}</p>
      `
          : ""
      }
      
      ${
        formData.additionalInfo
          ? `
        <h3>Additional Information</h3>
        <p>${formData.additionalInfo}</p>
      `
          : ""
      }
      
      <p>This inquiry was submitted on ${new Date().toLocaleString()}</p>
    `;

    // Create plain text version
    const textContent = `
New Inquiry from Website
${subject}

Personal Information:
Name: ${formData.personalInfo.firstName} ${formData.personalInfo.lastName}
Email: ${formData.personalInfo.email}
Phone: ${formData.personalInfo.phone}
Current Country: ${formData.personalInfo.currentCountry}

${formData.projectStatus ? `Project Status: ${formData.projectStatus}` : ""}

${
  formData.serviceType === "installation" && formData.installation
    ? `
Installation Details:
Visa Type: ${formData.installation.visaType || "Not specified"}
Timeline: ${formData.installation.timeline || "Not specified"}
Family Size: ${formData.installation.familySize || "Not specified"}
Additional Information: ${formData.installation.additionalInfo || "None provided"}
`
    : ""
}

${
  formData.serviceType === "realEstate" && formData.realEstate
    ? `
Real Estate Details:
Property Type: ${formData.realEstate.propertyType || "Not specified"}
Budget: ${formData.realEstate.budget || "Not specified"}
Location: ${formData.realEstate.location || "Not specified"}
Timeline: ${formData.realEstate.timeline || "Not specified"}
Additional Information: ${formData.realEstate.additionalInfo || "None provided"}
`
    : ""
}

${
  formData.serviceType === "business" && formData.business
    ? `
Business Details:
Business Type: ${formData.business.businessType || "Not specified"}
Timeline: ${formData.business.timeline || "Not specified"}
Investment Amount: ${formData.business.investmentAmount || "Not specified"}
Additional Information: ${formData.business.additionalInfo || "None provided"}
`
    : ""
}

${
  formData.serviceType === "other" && formData.otherDetails
    ? `
Other Details:
${formData.otherDetails}
`
    : ""
}

${
  formData.additionalInfo
    ? `
Additional Information:
${formData.additionalInfo}
`
    : ""
}
 

This inquiry was submitted on ${new Date().toLocaleString()}
    `;

    // Use your existing mailer utility
    const result = await sendEmail(subject, htmlContent, textContent);

    if (!result.success) {
      throw new Error(result.error || "Failed to send email");
    }

    return NextResponse.json({
      success: true,
      message: "Email sent successfully",
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        success: false,
        error: "Failed to send email",
        details: error.message,
      },
      { status: 500 }
    );
  }
}
