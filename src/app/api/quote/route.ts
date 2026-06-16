import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import sgMail from '@sendgrid/mail';

export async function POST(request: Request) {
  try {
    const data = await request.json();
    // Verify reCAPTCHA token if present
    if (data.recaptchaToken) {
      const secret = process.env.RECAPTCHA_SECRET_KEY || '';
      const verificationRes = await fetch('https://www.google.com/recaptcha/api/siteverify', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: `secret=${secret}&response=${data.recaptchaToken}`,
      });
      const verificationData = await verificationRes.json();
      if (!verificationData.success) {
        console.error('reCAPTCHA verification failed', verificationData);
        return NextResponse.json({ error: 'reCAPTCHA verification failed' }, { status: 400 });
      }
    }

    // Supabase insert
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || '';
    const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || '';
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    const { error: supabaseErr } = await supabase.from('quotes').insert([data]);
    if (supabaseErr) {
      console.error('Supabase insert error:', supabaseErr);
      return NextResponse.json({ error: 'Failed to save quote' }, { status: 500 });
    }

    // Send email notification via SendGrid
    const sendgridApiKey = process.env.SENDGRID_API_KEY || '';
    const fromEmail = process.env.SENDGRID_FROM_EMAIL || '';
    if (sendgridApiKey && fromEmail) {
      sgMail.setApiKey(sendgridApiKey);
      const msg = {
        to: fromEmail,
        from: fromEmail,
        subject: `New Quote Request from ${data.name}`,
        text: `Name: ${data.name}\nEmail: ${data.email}\nPhone: ${data.phone}\nMessage: ${data.message}`,
      };
      try {
        await sgMail.send(msg);
      } catch (mailErr) {
        console.error('SendGrid error:', mailErr);
        // Continue; email failure shouldn't block the API response
      }
    }

    return NextResponse.json({ status: 'ok' }, { status: 200 });
  } catch (err) {
    console.error('Quote API error:', err);
    return NextResponse.json({ error: 'Failed to save quote' }, { status: 500 });
  }
}
