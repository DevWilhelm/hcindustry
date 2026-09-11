import {
  CtaBand,
  InsightCards,
  PageHero,
  SectionHeading,
  Shell,
} from '@/components/site';

const topics = [
  'Southeast Asia healthcare outlook',
  'Aging care',
  'Digital health',
  'Provider landscape',
  'Regulation',
  'Healthcare investment',
];

export default function InsightsPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="Insights"
          title="Research notes on Southeast Asia healthcare."
          text="Concise market notes for teams evaluating healthcare growth, digital transformation, provider strategy, and regional opportunity."
        />

        <section className="section">
          <div className="container">
            <SectionHeading title="Featured notes" />
            <InsightCards />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              title="Research topics"
              text="The insight library can expand over time as the site matures."
            />
            <div className="topic-list">
              {topics.map((topic) => (
                <span key={topic}>{topic}</span>
              ))}
            </div>
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
