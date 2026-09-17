import type { Metadata } from 'next';
import { Breadcrumbs, ComparisonTable, LinkCardGrid } from '@/components/market-sections';
import { CtaBand, PageHero, SectionHeading, Shell } from '@/components/site';
import { SITE_URL } from '@/lib/site-config';
import { markets } from '@/lib/markets-data';

export const metadata: Metadata = {
  title: 'Healthcare Markets Across Southeast Asia',
  description:
    'Country-by-country healthcare market profiles for Singapore, Malaysia, Thailand, Vietnam, Indonesia, the Philippines and Myanmar, covering providers, payers, regulation and digital health.',
  alternates: { canonical: `${SITE_URL}/markets` },
};

const comparisonNotes: Record<
  string,
  {
    systemCharacteristic: string;
    demandDriver: string;
    providerDynamic: string;
    digitalHealthTheme: string;
    opportunity: string;
  }
> = {
  'singapore-healthcare': {
    systemCharacteristic: 'Tiered public system with premium private care',
    demandDriver: 'Aging population and chronic disease',
    providerDynamic: 'Public-private complementary, regional referral hub',
    digitalHealthTheme: 'Health-data infrastructure and AI governance',
    opportunity: 'Clinical AI, interoperable health data',
  },
  'malaysia-healthcare': {
    systemCharacteristic: 'Public-private dual-track system',
    demandDriver: 'Chronic disease and medical tourism',
    providerDynamic: 'Concentrated private hospital groups',
    digitalHealthTheme: 'Uneven digitalisation, public reform underway',
    opportunity: 'Medical tourism, medtech distribution',
  },
  'thailand-healthcare': {
    systemCharacteristic: 'Broad universal coverage plus private sector',
    demandDriver: 'Fast-aging population, medical tourism',
    providerDynamic: 'Large public networks, accredited private groups',
    digitalHealthTheme: 'Hospital technology for international patients',
    opportunity: 'Private hospitals, aging and long-term care',
  },
  'vietnam-healthcare': {
    systemCharacteristic: 'Expanding public system, growing insurance',
    demandDriver: 'Rising healthcare spending, chronic-disease shift',
    providerDynamic: 'Public volume pressure, fast-growing private sector',
    digitalHealthTheme: 'Hospital modernisation in major cities',
    opportunity: 'Private hospital capacity, medical devices',
  },
  'indonesia-healthcare': {
    systemCharacteristic: 'Very large single-payer national insurance',
    demandDriver: 'Population scale, geographic access gaps',
    providerDynamic: 'Puskesmas network plus urban private growth',
    digitalHealthTheme: 'Digital health as national access infrastructure',
    opportunity: 'Hospital capacity, digital health at scale',
  },
  'philippines-healthcare': {
    systemCharacteristic: 'Public-private mix with PhilHealth coverage',
    demandDriver: 'Population growth, urban concentration',
    providerDynamic: 'Private hospitals urban, public access nationwide',
    digitalHealthTheme: 'Telehealth extending access across islands',
    opportunity: 'Telehealth, diagnostics access',
  },
  'myanmar-healthcare': {
    systemCharacteristic: 'Public-private system, conditions vary by region',
    demandDriver: 'Basic and specialist access needs',
    providerDynamic: 'Capacity concentrated in larger cities',
    digitalHealthTheme: 'Early-stage, market-specific validation needed',
    opportunity: 'Medical supply distribution',
  },
};

const comparisonRows = markets.map((market) => ({
  country: market.countryName,
  flag: market.flag,
  ...comparisonNotes[market.slug],
}));

export default function MarketsPage() {
  return (
    <Shell>
      <main>
        <div className="container">
          <Breadcrumbs items={[{ label: 'Home', href: '/' }, { label: 'Markets' }]} />
        </div>

        <PageHero
          eyebrow="Markets"
          title="Healthcare Markets Across Southeast Asia"
          text="Healthcare structures across Southeast Asia differ substantially in provider models, payer systems, regulation, medical tourism, infrastructure, healthcare access, digital maturity, demographics and investment priorities. Each market below is examined on its own terms rather than as a variation on a single regional template."
          cta={{ label: 'Discuss a Research Need', href: '/contact' }}
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Country markets"
              title="Seven healthcare markets, seven different structures."
              text="Explore how policy, payers, providers, inputs and patient access combine differently in each market."
            />
            <LinkCardGrid
              columns={3}
              items={markets.map((market) => ({
                title: `${market.flag} ${market.countryName}`,
                text: market.themeLine,
                href: `/markets/${market.slug}`,
                linkLabel: 'View market',
              }))}
            />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Comparison"
              title="How the seven markets differ."
              text="A descriptive comparison, not a ranking — each market has a different structure, not a better or worse one."
            />
            <ComparisonTable rows={comparisonRows} />
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
