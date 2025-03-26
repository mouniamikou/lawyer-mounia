import { sendEmail } from "@/utils/mailer";
import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const data = await request.json();
    console.log(data);

    const { personalInfo, projectStatus } = data;

    // Create HTML content from form data
    const htmlContent = `
      <h1>New Installation Form Submission</h1>
      <p><strong>Name:</strong> ${personalInfo.firstName} ${personalInfo.lastName}</p>
      <p><strong>Email:</strong> ${personalInfo.email}</p>
      <p><strong>Phone:</strong> ${personalInfo.phone}</p>
      <p><strong>Current Country:</strong> ${personalInfo.currentCountry}</p>

      <p><strong>Project Status:</strong> ${projectStatus}</p>
      

      <p><strong>Visa Type:</strong> ${data.visaType}</p>
      <p><strong>Residency Status:</strong> ${data.residencyStatus}</p>
      <p><strong>Portuga Status:</strong> ${data.portugaStatus}</p>
      <p><strong>Needs:</strong> 
      administrative: ${data.needs.administrative},
      consultation: ${data.needs.consultation},
      other: ${data.needs.other},
     </p>
      <p><strong>Aima Date:</strong> ${data.aimaDate}</p>

      <p><strong>Submitted on:</strong> ${new Date().toLocaleString()}</p>
    `;

    // Create plain text version

    const textContent = `
    New Installation Service Request
    
    Personal Information:
    --------------------
    Name: ${personalInfo.firstName} ${personalInfo.lastName}
    Email: ${personalInfo.email}
    Phone: ${personalInfo.phone}
    Current Country: ${personalInfo.currentCountry}
    
    Project Status: ${projectStatus}
    
    Installation Details:
    -------------------
    Visa Type: ${data.visaType}
 
    projectStatus: ${data.projectStatus},
    residencyStatus: ${data.residencyStatus},  
    portugaStatus: ${data.portugaStatus},  '
    needs: {
      administrative: ${data.needs.administrative},
      consultation: ${data.needs.consultation},
      other: ${data.needs.other},
    },
    visaType: ${data.visaType}, 
    aimaDate: ${data.aimaDate},
  `;

    const result = await sendEmail(
      "New Installation Form Submission",
      htmlContent,
      textContent
    );

    if (result.success) {
      return NextResponse.json({
        success: true,
        message: "Installation form submitted successfully",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Failed to send email" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("Installation form error:", error);
    return NextResponse.json(
      { success: false, message: error.message },
      { status: 500 }
    );
  }
}
