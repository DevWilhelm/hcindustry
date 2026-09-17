import {
  CtaBand,
  PageHero,
  SectionHeading,
  Shell,
  segments,
} from '@/components/site';
import { slugify } from '@/lib/utils';

export default function MarketSegmentsPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Market Segments"
          title="Understanding healthcare demand across Southeast Asia's care segments."
          text="The market is best understood by comparing patient needs, payer maturity, provider choice, care intensity, and commercial implications."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Demand-side segment matrix"
              text="Each segment brings different needs, provider preferences, affordability constraints, and digital health opportunities."
            />
            <div className="segment-grid">
              {segments.map((segment) => (
                <article id={slugify(segment.title)} key={segment.title}>
                  <h3>{segment.title}</h3>
                  <div>
                    <span>Need</span>
                    <p>{segment.need}</p>
                  </div>
                  <div>
                    <span>Implication</span>
                    <p>{segment.implication}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Provider implications"
              title="Segmentation turns broad market interest into practical strategy."
              text="A provider, investor, partner, or enterprise buyer can use segment logic to clarify where to enter, what to build, who to partner with, and which risks to manage."
            />
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
