'use client';

import { useState, type SyntheticEvent } from 'react';
import { CheckCircle2 } from 'lucide-react';
import { inquiryTypes } from '@/lib/inquiry-types';

type Status = 'idle' | 'sending' | 'sent' | 'error';

export function ContactForm() {
  const [status, setStatus] = useState<Status>('idle');
  const [error, setError] = useState('');

  async function handleSubmit(event: SyntheticEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus('sending');
    setError('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        body: new FormData(form),
      });
      const result = (await response.json().catch(() => null)) as { ok?: boolean; error?: string } | null;

      if (!response.ok || !result?.ok) {
        setError(result?.error ?? 'Something went wrong. Please try again.');
        setStatus('error');
        return;
      }

      form.reset();
      setStatus('sent');
    } catch {
      setError('Network error. Please check your connection and try again.');
      setStatus('error');
    }
  }

  return (
    <form className="contact-form" method="post" action="/api/contact" onSubmit={handleSubmit}>
      <div className="field-grid">
        <label>
          <span>Name</span>
          <input required name="name" placeholder="Your name" />
        </label>
        <label>
          <span>Email</span>
          <input required name="email" type="email" placeholder="you@company.com" />
        </label>
      </div>
      <div className="field-grid">
        <label>
          <span>Company</span>
          <input name="company" placeholder="Organization name" />
        </label>
        <label>
          <span>Role</span>
          <input name="role" placeholder="Strategy, investment, provider..." />
        </label>
      </div>
      <label>
        <span>Inquiry type</span>
        <select required name="inquiryType" defaultValue="">
          <option value="" disabled>
            Select a topic
          </option>
          {inquiryTypes.map((type) => (
            <option key={type}>{type}</option>
          ))}
        </select>
      </label>
      <label>
        <span>Message</span>
        <textarea
          required
          name="message"
          rows={5}
          maxLength={5000}
          placeholder="Tell us what market, segment, or strategic question you are exploring."
        />
      </label>
      <div className="honeypot" aria-hidden="true">
        <label>
          Company website
          <input name="companyWebsite" tabIndex={-1} autoComplete="off" />
        </label>
      </div>
      <button type="submit" className="primary-button" disabled={status === 'sending'}>
        {status === 'sending' ? 'Sending...' : 'Send inquiry'}
      </button>
      {status === 'sent' ? (
        <p className="form-success" role="status">
          <CheckCircle2 size={18} />
          Thank you. Your inquiry has been received and our team will be in touch.
        </p>
      ) : null}
      {status === 'error' ? (
        <p className="form-error" role="alert">
          {error}
        </p>
      ) : null}
    </form>
  );
}
