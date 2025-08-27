import { NextResponse } from 'next/server';

export async function GET() {
  const contactEmail = process.env.CONTACT_EMAIL;
  
  if (!contactEmail) {
    return NextResponse.json({ error: 'Contact email not configured' }, { status: 500 });
  }

  return NextResponse.json({ 
    email: contactEmail,
    github: process.env.GITHUB_URL,
    gitlab: process.env.GITLAB_URL,
    linkedin: process.env.LINKEDIN_URL
  });
}
