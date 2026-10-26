import { NextResponse } from 'next/server';
import { enquirySchema } from '@/lib/validations/enquiry';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const result = enquirySchema.safeParse(body);

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          errors: result.error.flatten().fieldErrors,
        },
        { status: 400 }
      );
    }

    const data = result.data;

    // Server-side audit log
    console.log('[KA Interiors - New Client Enquiry]:', {
      timestamp: new Date().toISOString(),
      ...data,
    });

    // TODO: Connect external notification system:
    // 1. Resend or SendGrid API to notify info@kainteriors.in and principal designer (+91 87900 43355)
    // 2. Automated WhatsApp Business API notification to the client
    // 3. CRM sync (Zoho / HubSpot / Google Sheets webhook)

    return NextResponse.json(
      {
        success: true,
        message: 'Thank you. Your consultation request has been received. Our principal designer will contact you within 24 hours.',
        enquiryId: `KA-${Date.now().toString(36).toUpperCase()}`,
      },
      { status: 200 }
    );
  } catch (error) {
    console.error('[Enquiry API Error]:', error);
    return NextResponse.json(
      {
        success: false,
        message: 'Internal server error processing enquiry. Please call us directly at +91 87900 43355.',
      },
      { status: 500 }
    );
  }
}
