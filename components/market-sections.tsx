import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import type { CardItem } from '@/lib/markets-data';

export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[];
}) {
  return (
    <nav className="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label}>
              {item.href && !isLast ? (
                <Link href={item.href}>{item.label}</Link>
              ) : (
                <span aria-current={isLast ? 'page' : undefined}>{item.label}</span>
              )}
              {!isLast ? <span aria-hidden="true">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

const columnWord = { 2: 'two', 3: 'three', 4: 'four' } as const;

export function CardGrid({
  items,
  columns = 3,
}: {
  items: CardItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className={`card-grid ${columnWord[columns]}`}>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <article className="info-card" key={item.title}>
            {Icon ? <Icon size={28} /> : null}
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </article>
        );
      })}
    </div>
  );
}

export type LinkCardItem = {
  title: string;
  text: string;
  href: string;
  eyebrow?: string;
  linkLabel?: string;
  image?: string;
  imageAlt?: string;
};

export function LinkCardGrid({
  items,
  columns = 3,
}: {
  items: LinkCardItem[];
  columns?: 2 | 3 | 4;
}) {
  return (
    <div className={`card-grid ${columnWord[columns]}`}>
      {items.map((item) => (
        <article className={item.image ? 'insight-card has-media' : 'insight-card'} key={item.title}>
          {item.image ? (
            <div className="card-media">
              <img src={item.image} alt={item.imageAlt ?? ''} loading="lazy" />
            </div>
          ) : null}
          {item.eyebrow ? <span>{item.eyebrow}</span> : null}
          <h3>{item.title}</h3>
          <p>{item.text}</p>
          <Link href={item.href}>
            {item.linkLabel ?? 'Explore'} <ArrowRight size={16} />
          </Link>
        </article>
      ))}
    </div>
  );
}

export type ComparisonRow = {
  country: string;
  flag: string;
  systemCharacteristic: string;
  demandDriver: string;
  providerDynamic: string;
  digitalHealthTheme: string;
  opportunity: string;
};

export function ComparisonTable({ rows }: { rows: ComparisonRow[] }) {
  return (
    <div className="table-wrap">
      <table className="comparison-table">
        <thead>
          <tr>
            <th scope="col">Country</th>
            <th scope="col">Healthcare System Characteristic</th>
            <th scope="col">Key Demand Driver</th>
            <th scope="col">Provider Dynamic</th>
            <th scope="col">Digital Health Theme</th>
            <th scope="col">Distinctive Opportunity</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => (
            <tr key={row.country}>
              <th scope="row">
                <span aria-hidden="true">{row.flag}</span> {row.country}
              </th>
              <td>{row.systemCharacteristic}</td>
              <td>{row.demandDriver}</td>
              <td>{row.providerDynamic}</td>
              <td>{row.digitalHealthTheme}</td>
              <td>{row.opportunity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
