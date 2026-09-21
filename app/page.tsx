import Link from 'next/link';
import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Globe2,
  LineChart,
} from 'lucide-react';
import {
  CtaBand,
  ImagePanel,
  InsightCards,
  ProviderSpectrum,
  SectionHeading,
  Shell,
  SolutionGrid,
  ValueChain,
  marketSignals,
} from '@/components/site';

export default function Home() {
  return (
    <Shell>
      <main>
        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <p className="eyebrow">Southeast Asia healthcare intelligence</p>
              <h1>
                Research, consulting, and advisory for a region entering its
                next decade of care.
              </h1>
              <p>
                HealthCare Industry Research helps healthcare, medtech,
                investment, partner, and enterprise teams understand Southeast
                Asia's provider landscape, aging-care demand, digital health
                adoption, and regulatory environment.
              </p>
              <div className="hero-actions">
                <Link href="/contact" className="primary-button">
                  Discuss a research need <ArrowRight size={18} />
                </Link>
                <Link href="/southeast-asia-healthcare-outlook" className="secondary-button">
                  Explore SEA outlook
                </Link>
              </div>
              <div className="proof-row">
                <span>
                  <BadgeCheck size={18} /> Consulting
                </span>
                <span>
                  <LineChart size={18} /> Market research
                </span>
                <span>
                  <Globe2 size={18} /> Advisory
                </span>
              </div>
            </div>
            <ImagePanel
              src="https://images.unsplash.com/photo-1653566031535-bcf33e1c2893?auto=format&fit=crop&w=1200&q=80"
              alt="Healthcare and strategy team reviewing regional market data around a table"
              caption="Strategy and research teams working through Southeast Asia healthcare data."
            />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Market signals"
              title="Healthcare demand is moving across systems, settings, and expectations."
              text="Across Southeast Asia, changing demographics, preventive care, digital transformation, and expanding healthcare capacity are redefining how demand develops across the region."
            />
            <div className="signal-grid">
              {marketSignals.map((signal) => (
                <article key={signal.title}>
                  <h3>{signal.title}</h3>
                  <p>{signal.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section muted-section">
          <div className="container split-grid">
            <div>
              <SectionHeading
                eyebrow="Why now"
                title="Regional healthcare decisions need sharper market context."
                text="Aging, chronic disease, digital infrastructure, medical inflation, and policy reform are changing where value is created."
              />
              <div className="challenge-list">
                {[
                  'Aging and chronic disease demand',
                  'Workforce and productivity constraints',
                  'Medical inflation and insurance pressure',
                  'Public-private provider differentiation',
                  'Data, compliance, and digital health governance',
                ].map((item) => (
                  <span key={item}>{item}</span>
                ))}
              </div>
            </div>
            <div className="metric-stack">
              <article>
                <Building2 size={28} />
                <strong>Public + private systems</strong>
                <p>Compare how access, quality, and commercial models vary by market.</p>
              </article>
              <article>
                <Globe2 size={28} />
                <strong>SEA-wide view</strong>
                <p>Balance country-specific nuance with regional growth themes.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="What we help with"
              title="A mixed consulting, research, and advisory model."
              text="The healthcare landscape is evolving across market strategy, provider networks, digital health, aging care, regulation, and investment opportunities."
            />
            <SolutionGrid />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="System view"
              title="Southeast Asia healthcare value chain"
              text="A practical way to examine where policy, payers, providers, inputs, and customers shape growth."
            />
            <ValueChain />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="provider-landscape-intro">
              <SectionHeading
                eyebrow="Provider landscape"
                title="Public population health and private commercial differentiation both matter."
                text="Southeast Asia’s provider landscape spans public health systems, primary care, integrated networks, specialist hospitals, and differentiated private care models."
              />
              <Link href="/market-segments" className="text-link">
                View market segments <ArrowRight size={16} />
              </Link>
            </div>
            <ProviderSpectrum />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Featured insights"
              title="Research notes for healthcare strategy."
              text="Initial content launches as concise market notes, ready to expand into a deeper insight library."
            />
            <InsightCards />
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
