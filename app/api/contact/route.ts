import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    github: process.env.GITHUB_URL,
    gitlab: process.env.GITLAB_URL,
    linkedin: process.env.LINKEDIN_URL,
  });
}

export async function POST(request: Request) {
  const { name, email, subject, message } = await request.json();
  const to = process.env.CONTACT_EMAIL;

  if (!to) {
    return NextResponse.json({ error: 'Contact email not configured' }, { status: 500 });
  }

  try {
    // @ts-expect-error: nodemailer module types are not installed
    const nodemailer = await import('nodemailer');

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === 'true',
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.SMTP_USER,
      to,
      replyTo: email,
      subject,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json({ error: 'Failed to send message' }, { status: 500 });
  }
}
