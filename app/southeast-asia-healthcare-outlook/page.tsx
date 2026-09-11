import {
  CtaBand,
  PageHero,
  SectionHeading,
  Shell,
  ValueChain,
  outlookBlocks,
} from '@/components/site';

export default function OutlookPage() {
  return (
    <Shell>
      <main>
        <PageHero
          eyebrow="SEA Outlook"
          title="Southeast Asia Healthcare Sector Outlook"
          text="A public-facing regional outlook shaped by internal research themes. The original PDF remains reference-only and is not available for download."
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              title="Executive summary"
              text="Southeast Asia healthcare growth is being shaped by demographics, affordability, public-private delivery models, digital health infrastructure, and policy trust."
            />
            <div className="card-grid four">
              {outlookBlocks.map((block) => {
                const Icon = block.icon;
                return (
                  <article className="info-card" key={block.title}>
                    <Icon size={28} />
                    <h3>{block.title}</h3>
                    <p>{block.text}</p>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Value chain"
              title="Where healthcare value is created"
              text="Regional strategy should connect policy, payers, providers, inputs, and customer access rather than looking at providers alone."
            />
            <ValueChain />
          </div>
        </section>

        <section className="section">
          <div className="container outlook-grid">
            {[
              ['Demographics and urbanization', 'Aging, chronic disease, migration to cities, and changing household expectations are reshaping care demand.'],
              ['Healthcare spending and affordability', 'Public financing, insurance penetration, and medical inflation determine how care models scale.'],
              ['Digital health and AI', 'Telehealth, interoperable records, AI workflows, and remote monitoring can support access and productivity.'],
              ['Legal and regulatory environment', 'Licensing, data governance, cybersecurity, clinical quality, and medical-device rules affect market access.'],
              ['Sustainability and public health risks', 'Climate, heat, haze, dengue, and infrastructure resilience are increasingly relevant to healthcare planning.'],
              ['Strategic implications', 'Winning strategies connect local market nuance with regional expansion logic, partners, and operating risk.'],
            ].map(([title, text]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
