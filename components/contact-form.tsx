'use client';

import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const inquiryTypes = [
  'Market research',
  'Digital health strategy',
  'Provider landscape',
  'Aging care opportunity',
  'Investment research',
  'Partnership inquiry',
  'Other',
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <form
      className="contact-form"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
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
          placeholder="Tell us what market, segment, or strategic question you are exploring."
        />
      </label>
      <button type="submit" className="primary-button">
        Send inquiry
      </button>
      {submitted ? (
        <p className="form-success" role="status">
          <CheckCircle2 size={18} />
          Thanks. This launch version stores no data, but the form flow is ready
          for email or lead-system integration.
        </p>
      ) : null}
    </form>
  );
}
