import {
  CtaBand,
  CheckList,
  PageHero,
  SectionHeading,
  Shell,
  audienceGroups,
  researchPrinciples,
} from '@/components/site';

export default function AboutPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="About"
          title="Research built for healthcare decisions."
          text="HealthCare Industry Research supports Southeast Asia healthcare strategy with a practical mix of consulting, market research, and advisory work."
        />

        <section className="section">
          <div className="container split-grid">
            <div>
              <SectionHeading
                eyebrow="What we study"
                title="The markets, systems, and signals that shape healthcare growth."
                text="The work focuses on provider landscapes, digital health adoption, aging care, policy and regulation, investment logic, and partnership opportunities."
              />
            </div>
            <CheckList items={researchPrinciples} />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              title="Who we support"
              text="The first site version is intentionally balanced across multiple decision-maker groups."
            />
            <div className="topic-list">
              {audienceGroups.map((group) => (
                <span key={group}>{group}</span>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
