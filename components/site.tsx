import type { ReactNode } from 'react';
import Link from 'next/link';
import { ContactForm } from './contact-form';
import { SiteNav } from './site-nav';
import { markets } from '@/lib/markets-data';
import { insights } from '@/lib/insights-data';
import { slugify } from '@/lib/utils';
import {
  Activity,
  ArrowRight,
  BarChart3,
  Building2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardCheck,
  Globe2,
  HeartPulse,
  Landmark,
  LineChart,
  Network,
  ShieldCheck,
  Stethoscope,
  UsersRound,
} from 'lucide-react';

export type NavItem = {
  href: string;
  label: string;
  children?: { href: string; label: string; flag?: string }[];
};

export const navItems: NavItem[] = [
  { href: '/', label: 'Home' },
  { href: '/solutions', label: 'Solutions' },
  { href: '/southeast-asia-healthcare-outlook', label: 'SEA Outlook' },
  { href: '/market-segments', label: 'Market Segments' },
  {
    href: '/markets',
    label: 'Markets',
    children: markets.map((market) => ({
      href: `/markets/${market.slug}`,
      label: market.countryName,
      flag: market.flag,
    })),
  },
  { href: '/about', label: 'About' },
];

export const solutions = [
  {
    icon: LineChart,
    title: 'Healthcare Market Strategy',
    text: 'Market sizing, opportunity mapping, competitor review, and strategic entry decisions across SEA healthcare markets.',
  },
  {
    icon: Building2,
    title: 'Provider Landscape Research',
    text: 'Public systems, private providers, clinic networks, insurers, corporate care, and regional patient demand.',
  },
  {
    icon: Network,
    title: 'Digital Health Intelligence',
    text: 'AI, telehealth, interoperability, health data, workflow automation, and patient engagement trends.',
  },
  {
    icon: HeartPulse,
    title: 'Aging Care And Chronic Care',
    text: 'Senior care, rehab, home care, dementia care, preventive care, and community-based service models.',
  },
  {
    icon: ShieldCheck,
    title: 'Regulatory And Policy Monitoring',
    text: 'Licensing, health-data governance, AI governance, cybersecurity, medical-device rules, and market access.',
  },
  {
    icon: CircleDollarSign,
    title: 'Investment And Partnership Research',
    text: 'Sector outlooks, market thesis support, partnership screening, and risk analysis for strategic decisions.',
  },
];

export const marketSignals = [
  {
    title: 'Aging demand',
    text: 'Older populations and chronic disease are reshaping care delivery, senior care, prevention, and long-term service models.',
  },
  {
    title: 'Prevention shift',
    text: 'Primary-care reform, wellness programs, and national health initiatives are moving demand upstream.',
  },
  {
    title: 'Digital health adoption',
    text: 'Connected records, telecare, AI, and patient-facing platforms are becoming productivity infrastructure.',
  },
  {
    title: 'Capacity expansion',
    text: 'Hospitals, clinics, community care, and private networks are evolving to meet rising regional demand.',
  },
];

export const segments = [
  {
    title: 'Public-system patients',
    need: 'Access, affordability, chronic care, referrals, and reliable primary-care pathways.',
    implication: 'Public capacity, financing, and productivity remain central to regional system design.',
  },
  {
    title: 'Insured private-care users',
    need: 'Choice, speed, specialist access, insurance acceptance, and predictable out-of-pocket exposure.',
    implication: 'Private demand depends on insurance maturity, employer benefits, and cost management.',
  },
  {
    title: 'Elderly residents',
    need: 'Rehab, home care, dementia support, chronic disease management, and age-friendly access.',
    implication: 'Aging care is a long-horizon opportunity across clinical, community, and digital models.',
  },
  {
    title: 'Prevention and primary-care reform participants',
    need: 'Screening, vaccination, wellness coaching, data sharing, and family-doctor continuity.',
    implication: 'Prevention shifts value from episodic treatment toward connected population-health models.',
  },
  {
    title: 'Corporate and expat patients',
    need: 'Convenient private care, employer programs, quality assurance, and cross-border familiarity.',
    implication: 'Corporate care can anchor provider growth, employer partnerships, and digital front doors.',
  },
  {
    title: 'Medical-travel and regional premium patients',
    need: 'Trust, specialist depth, advanced procedures, service quality, and regional coordination.',
    implication: 'Premium demand supports differentiated brands, partnerships, and destination-care strategies.',
  },
];

export function Logo() {
  return (
    <Link href="/" className="logo" aria-label="HealthCare Industry Research home">
      <span className="logo-text">
        <span className="logo-text-line">HealthCare</span>
        <span className="logo-text-line logo-text-strong">Industry Research</span>
      </span>
    </Link>
  );
}

export function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Logo />
        <SiteNav navItems={navItems} />
        <Link href="/contact" className="header-cta">
          Contact
        </Link>
      </div>
    </header>
  );
}

export function ContactSection() {
  return (
    <section className="section" id="contact-form">
      <div className="container contact-layout">
        <div className="contact-note">
          <h2>Inquiry types</h2>
          <p>
            Use the form for market research, digital health strategy,
            provider landscape questions, aging care opportunities,
            investment research, or partnership inquiries.
          </p>
          <p>
            No PDF download is offered on this website. Source documents are
            used only as internal reference material.
          </p>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <Logo />
          <p>
            Research, consulting, and advisory support for healthcare decisions
            across Southeast Asia.
          </p>
        </div>
        <div>
          <h3>Explore</h3>
          <Link href="/solutions">Solutions</Link>
          <Link href="/southeast-asia-healthcare-outlook">SEA Outlook</Link>
          <Link href="/market-segments">Market Segments</Link>
          <Link href="/markets">Markets</Link>
        </div>
        <div>
          <h3>Company</h3>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
        <div>
          <h3>Launch Scope</h3>
          <p>
            Static first release. Contact email delivery and lead-system
            integration can be added in the next phase.
          </p>
        </div>
      </div>
    </footer>
  );
}

export function Shell({
  children,
  showContactSection = true,
}: {
  children: ReactNode;
  showContactSection?: boolean;
}) {
  return (
    <>
      <Header />
      {children}
      {showContactSection ? <ContactSection /> : null}
      <Footer />
    </>
  );
}

export function PageHero({
  eyebrow,
  title,
  text,
  cta,
}: {
  eyebrow: string;
  title: string;
  text: string;
  cta?: { label: string; href: string };
}) {
  return (
    <section className="page-hero">
      <div className="container narrow">
        <p className="eyebrow">{eyebrow}</p>
        <h1>{title}</h1>
        <p>{text}</p>
        {cta ? (
          <Link href={cta.href} className="primary-button hero-cta">
            {cta.label} <ArrowRight size={18} />
          </Link>
        ) : null}
      </div>
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="section-heading">
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </div>
  );
}

export function CtaBand() {
  return (
    <section className="cta-band">
      <div className="container cta-inner">
        <div>
          <p className="eyebrow">Start with clarity</p>
          <h2>Need a clearer view of Southeast Asia's healthcare market?</h2>
          <p>
            Use HealthCare Industry Research to support market entry, provider
            strategy, partnership planning, digital health positioning, and
            investment analysis.
          </p>
        </div>
        <Link href="/contact" className="primary-button">
          Contact <ArrowRight size={18} />
        </Link>
      </div>
    </section>
  );
}

export function SolutionGrid() {
  return (
    <div className="card-grid three">
      {solutions.map((solution) => {
        const Icon = solution.icon;
        return (
          <article className="info-card" id={slugify(solution.title)} key={solution.title}>
            <Icon size={28} />
            <h3>{solution.title}</h3>
            <p>{solution.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export function ValueChain() {
  const steps = [
    { icon: Landmark, label: 'Policy & Regulation' },
    { icon: CircleDollarSign, label: 'Payers' },
    { icon: Building2, label: 'Providers' },
    { icon: Activity, label: 'Inputs' },
    { icon: UsersRound, label: 'Access & Customers' },
  ];

  return (
    <div className="value-chain">
      {steps.map((step) => {
        const Icon = step.icon;
        return (
          <div className="chain-step" key={step.label}>
            <Icon size={24} />
            <span>{step.label}</span>
          </div>
        );
      })}
    </div>
  );
}

const providerSpectrum = [
  {
    label: 'Public & community',
    tiles: [
      {
        name: 'Public health systems',
        tag: 'Primary',
        text: 'Government-funded, universal access.',
      },
      {
        name: 'Primary-care clinics',
        tag: 'Primary',
        text: 'First point of contact for everyday care.',
      },
      {
        name: 'Senior and community care',
        tag: 'Secondary',
        text: 'Long-term, community-based support for aging populations.',
      },
    ],
  },
  {
    label: 'Integrated & private',
    tiles: [
      {
        name: 'Integrated hospital-clinic groups',
        tag: 'Secondary',
        text: 'Coordinated networks linking hospitals and clinics.',
      },
      {
        name: 'Premium private hospitals',
        tag: 'Tertiary',
        text: 'Private-pay, high-acuity specialist and surgical care.',
      },
    ],
  },
  {
    label: 'Premium & cross-border',
    tiles: [
      {
        name: 'Corporate and expat care',
        tag: 'Secondary',
        text: 'Employer-sponsored care for corporate and expatriate staff.',
      },
      {
        name: 'Medical-travel and regional premium care',
        tag: 'Tertiary',
        text: 'Cross-border patients, premium pricing.',
      },
    ],
  },
];

export function ProviderSpectrum() {
  return (
    <div className="provider-spectrum">
      <p className="sr-only">
        A spectrum showing how Southeast Asia&apos;s healthcare providers range
        from public, population-health models to private, commercially
        differentiated models, grouped into three bands, in order: public and
        community care, integrated and private care, and premium and
        cross-border care.
      </p>
      <div className="spectrum-bar" aria-hidden="true">
        <span className="spectrum-bar-label left">
          Public population health
        </span>
        <span className="spectrum-bar-label right">
          Private commercial differentiation
        </span>
        <span className="spectrum-bar-track" />
      </div>
      <div className="spectrum-rows">
        {providerSpectrum.map((group) => (
          <div className="spectrum-row" key={group.label}>
            <h3 className="spectrum-row-label">{group.label}</h3>
            <div className="spectrum-tiles">
              {group.tiles.map((tile) => (
                <article className="spectrum-tile" key={tile.name}>
                  <span className="spectrum-tag">{tile.tag}</span>
                  <h4>{tile.name}</h4>
                  <p>{tile.text}</p>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export function InsightCards({ items = insights.slice(0, 3) }: { items?: typeof insights } = {}) {
  return (
    <div className="card-grid three">
      {items.map((insight) => (
        <article className="insight-card" id={insight.slug} key={insight.slug}>
          <span>{insight.topic}</span>
          <h3>{insight.title}</h3>
          <p>{insight.summary}</p>
          <Link href={`/insights/${insight.slug}`}>
            Read note <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <CheckCircle2 size={18} />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export const outlookBlocks = [
  {
    icon: Globe2,
    title: 'Regional Demand',
    text: 'SEA healthcare markets differ widely, but aging, chronic disease, urbanization, and household expectations are raising demand across the region.',
  },
  {
    icon: BarChart3,
    title: 'Affordability Pressure',
    text: 'Public financing, insurance maturity, medical inflation, and patient cost-sharing shape where care models can scale.',
  },
  {
    icon: Stethoscope,
    title: 'Provider Landscape',
    text: 'Public systems remain essential, while private providers compete through premium care, corporate access, expat care, and medical travel.',
  },
  {
    icon: ClipboardCheck,
    title: 'Policy And Trust',
    text: 'Licensing, data governance, clinical quality, AI oversight, and cybersecurity are core requirements for regional healthcare growth.',
  },
];

export const researchPrinciples = [
  'Evidence-led interpretation',
  'Healthcare-specific market framing',
  'Southeast Asia-aware context',
  'Strategy-oriented recommendations',
  'Clear outputs for decision makers',
];

export const audienceGroups = [
  'Healthcare providers',
  'Medtech and digital health teams',
  'Investors and strategic partners',
  'Enterprise and government buyers',
  'Senior-care and community-care operators',
  'Insurance and employer-benefit stakeholders',
];

export function ImagePanel({
  src,
  alt,
  caption,
}: {
  src: string;
  alt: string;
  caption: string;
}) {
  return (
    <figure className="image-panel">
      <img src={src} alt={alt} />
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
