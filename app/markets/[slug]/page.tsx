import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Breadcrumbs,
  CardGrid,
  LinkCardGrid,
  type LinkCardItem,
} from '@/components/market-sections';
import {
  CtaBand,
  PageHero,
  SectionHeading,
  Shell,
  ValueChain,
  segments,
  solutions,
} from '@/components/site';
import { getMarketBySlug, markets, otherMarkets } from '@/lib/markets-data';
import { insights } from '@/lib/insights-data';
import { SITE_URL } from '@/lib/site-config';
import { slugify } from '@/lib/utils';

export function generateStaticParams() {
  return markets.map((market) => ({ slug: market.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) return {};

  const url = `${SITE_URL}/markets/${market.slug}`;
  return {
    title: market.metaTitle.replace(' | HealthCare Industry Research', ''),
    description: market.metaDescription,
    alternates: { canonical: url },
  };
}

function relatedSolutions(titles: string[]): LinkCardItem[] {
  return titles
    .map((title) => solutions.find((solution) => solution.title === title))
    .filter((solution): solution is (typeof solutions)[number] => Boolean(solution))
    .map((solution) => ({
      title: solution.title,
      text: solution.text,
      href: `/solutions#${slugify(solution.title)}`,
      linkLabel: 'View solution',
    }));
}

function relatedSegments(titles: string[]): LinkCardItem[] {
  return titles
    .map((title) => segments.find((segment) => segment.title === title))
    .filter((segment): segment is (typeof segments)[number] => Boolean(segment))
    .map((segment) => ({
      title: segment.title,
      text: segment.need,
      href: `/market-segments#${slugify(segment.title)}`,
      linkLabel: 'View segment',
    }));
}

function relatedInsights(titles: string[]): LinkCardItem[] {
  return titles
    .map((title) => insights.find((insight) => insight.title === title))
    .filter((insight): insight is (typeof insights)[number] => Boolean(insight))
    .map((insight) => ({
      title: insight.title,
      text: insight.summary,
      href: `/insights/${insight.slug}`,
      eyebrow: insight.topic,
      linkLabel: 'Read note',
    }));
}

function columnsFor(count: number): 2 | 3 | 4 {
  if (count >= 4) return 4;
  if (count === 2) return 2;
  return 3;
}

function withArticle(countryName: string) {
  return countryName === 'Philippines' ? 'the Philippines' : countryName;
}

export default async function CountryMarketPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const market = getMarketBySlug(slug);
  if (!market) {
    notFound();
  }

  const otherCountries = otherMarkets(market.slug);
  const providerColumns = columnsFor(market.providerLandscape.length);
  const digitalColumns = columnsFor(market.digitalHealth.length);
  const considerationColumns = columnsFor(market.considerations.length);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Markets', item: `${SITE_URL}/markets` },
      {
        '@type': 'ListItem',
        position: 3,
        name: `${market.countryName} Healthcare`,
        item: `${SITE_URL}/markets/${market.slug}`,
      },
    ],
  };

  return (
    <Shell>
      <script
        type="application/ld+json"
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <main>
        <div className="container">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Markets', href: '/markets' },
              { label: `${market.countryName} Healthcare` },
            ]}
          />
        </div>

        <PageHero
          eyebrow={market.eyebrow}
          title={market.heroTitle}
          text={market.heroDescription}
          cta={{ label: 'Discuss a Research Need', href: '/contact' }}
        />

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="At a glance"
              title={`${market.countryName} Healthcare Market at a Glance`}
            />
            <CardGrid items={market.snapshot} columns={market.snapshot.length >= 4 ? 4 : 3} />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container narrow">
            <SectionHeading title={`Understanding Healthcare in ${withArticle(market.countryName)}`} />
            {market.overview.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading
              eyebrow="Demand"
              title="Healthcare Demand Drivers"
              text={`Core forces shaping healthcare demand in ${withArticle(market.countryName)}.`}
            />
            <CardGrid items={market.demandDrivers} columns={4} />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="System view"
              title="Healthcare Ecosystem"
              text="Policy and regulation, payers, providers, inputs, and patient access together define how healthcare value moves through the market."
            />
            <ValueChain />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading title="Healthcare Provider Landscape" />
            <CardGrid items={market.providerLandscape} columns={providerColumns} />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container narrow">
            <SectionHeading title="Regulatory and Market Access Environment" />
            {market.regulatory.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading title="Digital Health and Healthcare Technology" />
            <CardGrid items={market.digitalHealth} columns={digitalColumns} />
          </div>
        </section>

        <section className="section muted-section">
          <div className="container">
            <SectionHeading
              eyebrow="Investment"
              title="Where Healthcare Investment and Growth Are Concentrating"
            />
            <CardGrid items={market.investmentAreas} columns={3} />
          </div>
        </section>

        <section className="section">
          <div className="container">
            <SectionHeading eyebrow="Risk view" title="Market Considerations" />
            <CardGrid items={market.considerations} columns={considerationColumns} />
          </div>
        </section>

        {market.relatedSolutionTitles.length ? (
          <section className="section muted-section">
            <div className="container">
              <SectionHeading title="Relevant Healthcare Research and Advisory Solutions" />
              <LinkCardGrid items={relatedSolutions(market.relatedSolutionTitles)} columns={3} />
            </div>
          </section>
        ) : null}

        {market.relatedSegmentTitles.length ? (
          <section className="section">
            <div className="container">
              <SectionHeading title="Explore Healthcare Market Segments" />
              <LinkCardGrid items={relatedSegments(market.relatedSegmentTitles)} columns={3} />
            </div>
          </section>
        ) : null}

        {market.relatedInsightTitles.length ? (
          <section className="section muted-section">
            <div className="container">
              <SectionHeading title="Related Healthcare Insights" />
              <LinkCardGrid items={relatedInsights(market.relatedInsightTitles)} columns={3} />
            </div>
          </section>
        ) : null}

        <section className="section">
          <div className="container">
            <SectionHeading title="Explore Southeast Asian Healthcare Markets" />
            <LinkCardGrid
              columns={3}
              items={otherCountries.map((country) => ({
                title: `${country.flag} ${country.countryName}`,
                text: country.themeLine,
                href: `/markets/${country.slug}`,
                linkLabel: 'View market',
              }))}
            />
          </div>
        </section>

        <CtaBand />
      </main>
    </Shell>
  );
}
