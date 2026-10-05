import { Resend } from 'resend';

export type InquiryData = {
  name: string;
  email: string;
  company: string;
  role: string;
  inquiryType: string;
  message: string;
};

let resendClient: Resend | null = null;

// Created on first use so importing this module during prerender doesn't require RESEND_API_KEY.
function getResendClient(): Resend {
  if (!resendClient) {
    resendClient = new Resend(process.env.RESEND_API_KEY);
  }
  return resendClient;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

const FIELD_LABELS: Array<[keyof InquiryData, string]> = [
  ['name', 'Name'],
  ['email', 'Email'],
  ['company', 'Company'],
  ['role', 'Role'],
  ['inquiryType', 'Inquiry type'],
];

export async function sendInquiryNotification(data: InquiryData) {
  const rows = FIELD_LABELS.map(
    ([key, label]) =>
      `<tr><td style="padding:4px 12px 4px 0;color:#063b42;font-weight:600;white-space:nowrap;">${label}</td><td style="padding:4px 0;color:#102426;">${escapeHtml(data[key])}</td></tr>`,
  ).join('');

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;max-width:600px;">
      <p style="color:#0e7b83;font-weight:700;text-transform:uppercase;font-size:12px;letter-spacing:1px;">New website inquiry</p>
      <table style="border-collapse:collapse;margin:16px 0;">${rows}</table>
      <p style="color:#063b42;font-weight:600;margin-bottom:4px;">Message</p>
      <p style="color:#102426;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
    </div>
  `;

  const text = [
    'New website inquiry',
    '',
    ...FIELD_LABELS.map(([key, label]) => `${label}: ${data[key]}`),
    '',
    'Message:',
    data.message,
  ].join('\n');

  return getResendClient().emails.send({
    to: process.env.CONTACT_NOTIFICATION_TO!,
    from: process.env.CONTACT_NOTIFICATION_FROM!,
    replyTo: data.email,
    subject: `New website inquiry: ${data.inquiryType} (${data.company || data.name})`,
    html,
    text,
  });
}
