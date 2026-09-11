import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import {
  CtaBand,
  ImagePanel,
  PageHero,
  SectionHeading,
  Shell,
  SolutionGrid,
} from '@/components/site';

const questions = [
  'Which SEA markets offer the strongest fit for a healthcare product or service?',
  'How are public and private provider groups positioned by demand segment?',
  'Where can digital health tools solve workflow, access, or productivity gaps?',
  'Which aging-care models are likely to scale across urban and community settings?',
  'What regulatory, policy, or partnership risks should be addressed before entry?',
];

export default function SolutionsPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Solutions"
          title="Research and strategy support for healthcare decisions."
          text="HealthCare Industry Research combines consulting, market research, and advisory support for organizations evaluating Southeast Asia healthcare opportunities."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Capability areas"
              text="Each engagement is shaped around the decision you need to make, from market entry to partner screening, provider analysis, and digital health positioning."
            />
            <SolutionGrid />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container split-grid">
            <ImagePanel
              src="/images/sea-research-room.png"
              alt="Healthcare research team reviewing Southeast Asia market maps and digital health dashboards"
              caption="Generated visual: research teams using regional provider and digital health intelligence."
            />
            <div>
              <SectionHeading
                eyebrow="How engagements work"
                title="From question to decision-ready output."
                text="The work starts with the business question, then moves through market framing, evidence review, segment analysis, implications, and next-step recommendations."
              />
              <ol className="process-list">
                <li>Define the market, segment, and decision.</li>
                <li>Map demand, provider, policy, and digital health signals.</li>
                <li>Compare opportunities, risks, and operating constraints.</li>
                <li>Translate findings into strategy, partnership, or investment actions.</li>
              </ol>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Example questions"
              title="Useful when the decision is too important for generic market summaries."
            />
            <div className="question-grid">
              {questions.map((question) => (
                <article key={question}>
                  <span />
                  <p>{question}</p>
                </article>
              ))}
            </div>
            <Link href="/contact" className="text-link">
              Start with your research question <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
