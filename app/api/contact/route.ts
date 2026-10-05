import { NextResponse } from 'next/server';
import { sendInquiryNotification, type InquiryData } from '@/lib/email';
import { inquiryTypes } from '@/lib/inquiry-types';

export const runtime = 'nodejs';

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function field(formData: FormData, name: string): string {
  const value = formData.get(name);
  return typeof value === 'string' ? value.trim() : '';
}

function validate(data: InquiryData): string | null {
  if (!data.name) return 'Name is required.';
  if (data.name.length > 200) return 'Name is too long.';
  if (!data.email || data.email.length > 254 || !EMAIL_PATTERN.test(data.email)) {
    return 'A valid email address is required.';
  }
  if (data.company.length > 200) return 'Company is too long.';
  if (data.role.length > 200) return 'Role is too long.';
  if (!(inquiryTypes as readonly string[]).includes(data.inquiryType)) {
    return 'Please select an inquiry type.';
  }
  if (!data.message) return 'Message is required.';
  if (data.message.length > 5000) return 'Message must be 5000 characters or fewer.';
  return null;
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid form submission.' }, { status: 400 });
  }

  // Honeypot: hidden from visitors. Bots that fill it get a success response and nothing is sent.
  if (field(formData, 'companyWebsite') !== '') {
    return NextResponse.json({ ok: true });
  }

  const data: InquiryData = {
    name: field(formData, 'name'),
    email: field(formData, 'email'),
    company: field(formData, 'company'),
    role: field(formData, 'role'),
    inquiryType: field(formData, 'inquiryType'),
    message: field(formData, 'message'),
  };

  const error = validate(data);
  if (error) {
    return NextResponse.json({ ok: false, error }, { status: 400 });
  }

  try {
    await sendInquiryNotification(data);
  } catch (err) {
    console.error('Failed to send inquiry notification email:', err);
    return NextResponse.json(
      { ok: false, error: 'Something went wrong sending your inquiry. Please try again.' },
      { status: 502 },
    );
  }

  return NextResponse.json({ ok: true });
}
