import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, company, email, city, services, budget, prefLanguage } = body;

    // Validate mandatory fields
    if (!name || !phone || !company) {
      return NextResponse.json(
        { success: false, error: 'Name, phone, and company are required.' },
        { status: 400 }
      );
    }

    // Process & log lead entry (In production, this forwards to Resend / SendGrid / WhatsApp webhook / CRM)
    console.log('[DCH Lead Captured]', {
      timestamp: new Date().toISOString(),
      name,
      phone: `+91 ${phone}`,
      company,
      email: email || 'N/A',
      city: city || 'N/A',
      services: services || [],
      budget: budget || 'Not specified',
      prefLanguage: prefLanguage || 'English',
    });

    return NextResponse.json({
      success: true,
      message: 'Thank you! Your growth inquiry has been received.',
      leadSummary: {
        name,
        company,
        services,
      },
    });
  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Internal Server Error. Please try again.' },
      { status: 500 }
    );
  }
}
