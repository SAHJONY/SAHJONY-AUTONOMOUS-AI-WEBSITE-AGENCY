import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    console.log('Contact form submission:', body);
    // In production you would integrate with an email service (SendGrid, etc.)
    return NextResponse.json({ status: 'ok', message: 'Thanks for reaching out!' }, { status: 200 });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json({ status: 'error', message: 'Submission failed' }, { status: 500 });
  }
}
