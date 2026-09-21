import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import {
  Breadcrumbs,
  LinkCardGrid,
  type LinkCardItem,
} from '@/components/market-sections';
import {
  CtaBand,
  ImagePanel,
  PageHero,
  SectionHeading,
  Shell,
  segments,
  solutions,
} from '@/components/site';
import { SectionNav } from '@/components/section-nav';
import { getInsightBySlug, insights, otherInsights } from '@/lib/insights-data';
import { getMarketBySlug } from '@/lib/markets-data';
import { SITE_URL } from '@/lib/site-config';
import { slugify } from '@/lib/utils';

export function generateStaticParams() {
  return insights.map((insight) => ({ slug: insight.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) return {};

  const url = `${SITE_URL}/insights/${insight.slug}`;
  return {
    title: insight.metaTitle.replace(' | HealthCare Industry Research', ''),
    description: insight.metaDescription,
    alternates: { canonical: url },
  };
}

function relatedMarkets(slugs: string[] = []): LinkCardItem[] {
  return slugs
    .map((slug) => getMarketBySlug(slug))
    .filter((market): market is NonNullable<ReturnType<typeof getMarketBySlug>> => Boolean(market))
    .map((market) => ({
      title: `${market.flag} ${market.countryName}`,
      text: market.themeLine,
      href: `/markets/${market.slug}`,
      linkLabel: 'View market',
      image: market.image,
      imageAlt: market.imageAlt,
    }));
}

function relatedSegments(titles: string[] = []): LinkCardItem[] {
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

function relatedSolutions(titles: string[] = []): LinkCardItem[] {
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

export default async function InsightArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = getInsightBySlug(slug);
  if (!insight) {
    notFound();
  }

  const otherArticles = otherInsights(insight.slug).slice(0, 3);

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Home', item: SITE_URL },
      { '@type': 'ListItem', position: 2, name: 'Insights', item: `${SITE_URL}/insights` },
      {
        '@type': 'ListItem',
        position: 3,
        name: insight.title,
        item: `${SITE_URL}/insights/${insight.slug}`,
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
              { label: 'Insights', href: '/insights' },
              { label: insight.title },
            ]}
          />
        </div>

        <PageHero
          eyebrow={`${insight.eyebrow} · ${insight.publishedLabel}`}
          title={insight.title}
          text={insight.summary}
          cta={{ label: 'Discuss a Research Need', href: '/contact' }}
        />

        <section className="section market-photo-section">
          <div className="container narrow">
            <ImagePanel src={insight.image} alt={insight.imageAlt} caption={insight.eyebrow} />
          </div>
        </section>

        <SectionNav
          items={insight.sections.map((section) => ({
            id: slugify(section.title),
            label: section.title,
          }))}
        />

        {insight.sections.map((section, index) => (
          <section
            className={index % 2 === 0 ? 'section' : 'section muted-section'}
            id={slugify(section.title)}
            key={section.title}
          >
            <div className="container narrow">
              <SectionHeading title={section.title} />
              {section.paragraphs.map((paragraph) => (
                <p key={paragraph.slice(0, 40)}>{paragraph}</p>
              ))}
            </div>
          </section>
        ))}

        {insight.relatedSolutionTitles?.length ? (
          <section className="section muted-section">
            <div className="container">
              <SectionHeading title="Relevant Healthcare Research and Advisory Solutions" />
              <LinkCardGrid items={relatedSolutions(insight.relatedSolutionTitles)} columns={3} />
            </div>
          </section>
        ) : null}

        {insight.relatedSegmentTitles?.length ? (
          <section className="section">
            <div className="container">
              <SectionHeading title="Explore Healthcare Market Segments" />
              <LinkCardGrid items={relatedSegments(insight.relatedSegmentTitles)} columns={3} />
            </div>
          </section>
        ) : null}

        {insight.relatedMarketSlugs?.length ? (
          <section className="section muted-section">
            <div className="container">
              <SectionHeading title="Related Healthcare Markets" />
              <LinkCardGrid items={relatedMarkets(insight.relatedMarketSlugs)} columns={3} />
            </div>
          </section>
        ) : null}

        {otherArticles.length ? (
          <section className="section">
            <div className="container">
              <SectionHeading title="More Insights" />
              <LinkCardGrid
                columns={3}
                items={otherArticles.map((article) => ({
                  title: article.title,
                  text: article.summary,
                  href: `/insights/${article.slug}`,
                  eyebrow: article.topic,
                  linkLabel: 'Read note',
                  image: article.image,
                  imageAlt: article.imageAlt,
                }))}
              />
            </div>
          </section>
        ) : null}

        <CtaBand />
      </main>
    </Shell>
  );
}
