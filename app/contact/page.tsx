import { ContactForm } from '@/components/contact-form';
import { PageHero, Shell } from '@/components/site';

export default function ContactPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Start a healthcare research conversation."
          text="Share the market, segment, or decision you are working through. This launch form is static first and ready for email or lead-system integration later."
        />

        <section className="section">
          <div className="container contact-layout">
            <div className="contact-note">
              <h2>Inquiry types</h2>
              <p>
                Use the form for market research, digital health strategy,
                provider landscape questions, aging care opportunities,
                investment research, or partnership inquiries.
              </p>
              <p>
                No PDF download is offered on this website. Source documents are
                used only as internal reference material.
              </p>
            </div>
            <ContactForm />
          </div>
        </section>
      </main>
    </Shell>
  );
}
