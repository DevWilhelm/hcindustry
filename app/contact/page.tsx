import { ContactSection, PageHero, Shell } from '@/components/site';

export default function ContactPage() {
  return (
    <Shell showContactSection={false}>
      <main>
        <PageHero
          eyebrow="Contact"
          title="Start a healthcare research conversation."
          text="Share the market, segment, or decision you are working through. This launch form is static first and ready for email or lead-system integration later."
        />

        <ContactSection />
      </main>
    </Shell>
  );
}
