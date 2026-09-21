export type InsightSection = {
  title: string;
  paragraphs: string[];
};

export type Insight = {
  slug: string;
  title: string;
  topic: string;
  eyebrow: string;
  summary: string;
  image: string;
  imageAlt: string;
  metaTitle: string;
  metaDescription: string;
  publishedLabel: string;
  sections: InsightSection[];
  relatedMarketSlugs?: string[];
  relatedSegmentTitles?: string[];
  relatedSolutionTitles?: string[];
};

export const insights: Insight[] = [
  {
    slug: 'southeast-asia-healthcare-sector-outlook',
    title: 'Southeast Asia Healthcare Sector Outlook',
    topic: 'Market outlook',
    eyebrow: 'Market Outlook',
    image: 'https://images.unsplash.com/photo-1609508845212-b4190e9351c2?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aerial view of a Southeast Asian city skyline during daytime',
    summary:
      "A regional view of demand, affordability, provider capacity, digital health, policy, and investment signals shaping Southeast Asia's healthcare sector.",
    metaTitle: 'Southeast Asia Healthcare Sector Outlook | HealthCare Industry Research',
    metaDescription:
      "A regional research note on healthcare demand, provider capacity, digital health, regulation, and investment signals across Southeast Asia.",
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'A Region Defined By Divergent Systems, Converging Pressures',
        paragraphs: [
          "Southeast Asia's healthcare markets differ substantially in provider models, payer systems, and regulatory maturity, from Singapore's integrated public-private system to Indonesia's archipelago-scale access challenge. Despite these differences, several forces are converging across nearly every market in the region: aging populations, a rising chronic-disease burden, expanding private-sector capacity, and accelerating digital-health adoption.",
          "These forces do not play out identically. Singapore and Thailand are furthest along the demographic curve, already managing large elderly populations and long-term care demand. Vietnam, Indonesia and the Philippines are earlier in that transition but face their own capacity pressures — overcrowded public hospitals, geographic access gaps, and rapidly growing insured populations that formal systems are still building capacity to serve.",
        ],
      },
      {
        title: 'Private-Sector Expansion And The Two-Speed System',
        paragraphs: [
          'Across the region, private hospital capacity is expanding faster than public capacity in most markets, driven by rising middle-class incomes, long public-sector wait times, and — in Malaysia, Singapore and Thailand — medical tourism. This is producing a recognisable pattern: a two-speed healthcare system, where public providers carry the bulk of population-level access and affordability, while private providers compete on speed, service, and specialist depth.',
          'The commercial opportunity this creates varies by market maturity. In Singapore and Thailand, private systems are already well developed, and growth is increasingly about premium differentiation, aging-care capacity, and digital productivity. In Vietnam and Indonesia, the private opportunity is more about domestic modernisation — building trusted, standardised private and specialty-chain models rather than competing on medical tourism.',
        ],
      },
      {
        title: 'Digital Health As Shared Infrastructure, Not A Differentiator',
        paragraphs: [
          "Digital health has moved from an optional service channel to core infrastructure in several of the region's largest markets. Singapore's National Electronic Health Record, Indonesia's SATUSEHAT platform, and Vietnam's national telehealth network each reflect the same underlying logic: connecting fragmented care settings and extending specialist access beyond where physical provider density alone can reach.",
          'For providers, medtech companies and digital-health vendors entering these markets, this means digital capability is increasingly a baseline expectation rather than a point of differentiation — particularly in markets with active national platforms already in place.',
        ],
      },
      {
        title: 'Regulation, Payers And Where Value Is Concentrating',
        paragraphs: [
          "Regulatory frameworks across the region are evolving in a broadly similar direction: stronger facility and professional licensing, more active digital-health and data-governance oversight, and — in several markets — new legislation specifically addressing telemedicine and AI in clinical settings. Payer structures remain the more durable point of difference: national insurance schemes (Singapore's MediShield Life, Thailand's Universal Coverage Scheme, Vietnam's Social Health Insurance, Indonesia's BPJS Kesehatan) each shape provider economics differently, and any regional strategy needs to be built market by market rather than applied uniformly.",
          "Investment and partnership interest is concentrating around aging and chronic care, diagnostics, digital-health platforms with genuine national reach, and medical-device distribution — themes explored in more depth on each of this site's individual country pages.",
        ],
      },
    ],
    relatedMarketSlugs: [
      'singapore-healthcare',
      'thailand-healthcare',
      'vietnam-healthcare',
      'indonesia-healthcare',
      'malaysia-healthcare',
    ],
    relatedSegmentTitles: ['Elderly residents', 'Prevention and primary-care reform participants'],
    relatedSolutionTitles: ['Healthcare Market Strategy', 'Regulatory And Policy Monitoring'],
  },
  {
    slug: 'how-aging-is-reshaping-healthcare-demand',
    title: 'How Aging Is Reshaping Healthcare Demand',
    topic: 'Aging care',
    eyebrow: 'Aging Care',
    image: 'https://images.unsplash.com/photo-1758691462482-2b6ccbaefa6e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Doctor consulting with an elderly patient and a family member',
    summary:
      'Why chronic disease, home care, rehabilitation, and senior services are becoming strategic growth areas across Southeast Asia.',
    metaTitle: 'How Aging Is Reshaping Healthcare Demand In Southeast Asia | HealthCare Industry Research',
    metaDescription:
      'A research note on how aging populations across Southeast Asia are reshaping demand for chronic care, rehabilitation, and long-term and community-based services.',
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'A Faster Demographic Transition Than Most Regions',
        paragraphs: [
          "Several Southeast Asian markets are aging unusually quickly by global standards. Singapore entered super-aged status in 2026, with residents aged 65 and above now making up more than a fifth of the population. Thailand's elderly population is growing fast enough to approach roughly 30% of residents by 2040, already exceeding the country's youth population in size. Vietnam's population aged 65 and above is projected to double by 2035, one of the fastest such transitions in Asia.",
          'This matters commercially because it compresses a demographic shift that took decades in many higher-income countries into a much shorter window — leaving less time for health systems, workforces, and commercial providers to build aging-care capacity before demand arrives at scale.',
        ],
      },
      {
        title: 'From Episodic Treatment To Longitudinal Chronic Care',
        paragraphs: [
          'Aging populations do not simply need more healthcare — they need a different kind of healthcare. Diabetes, cardiovascular disease and other non-communicable conditions require ongoing management rather than one-off treatment, shifting demand toward diagnostics, medication management, rehabilitation and remote monitoring rather than acute hospital admission alone.',
          "This is visible in how providers across the region are positioning themselves: Singapore's public clusters are building aging-care capacity and AI-enabled care coordination directly into national reform (Healthier SG); Thailand's private hospital groups increasingly bundle rehabilitation and longevity services alongside acute care; and elder-care demand is a named growth theme in the healthcare value chain of every market covered on this site.",
        ],
      },
      {
        title: 'Where The Commercial Opportunity Concentrates',
        paragraphs: [
          'Long-term and step-down care capacity, home-care models, and rehabilitation are recurring investment themes across markets at very different stages of development — a genuinely regional pattern rather than a feature of any single country. Digital tools that support chronic-disease management outside acute hospital settings, such as remote monitoring and care-coordination platforms, are a closely related growth area, since aging populations increase both clinical need and cost pressure on hospital-centred models.',
          'Workforce capacity is the most consistent constraint providers cite alongside this demand — nursing and long-term-care staffing shortages appear as a named consideration on multiple country pages on this site, and are likely to shape how quickly aging-care capacity can realistically scale in each market.',
        ],
      },
    ],
    relatedMarketSlugs: ['singapore-healthcare', 'thailand-healthcare', 'vietnam-healthcare'],
    relatedSegmentTitles: ['Elderly residents'],
    relatedSolutionTitles: ['Aging Care And Chronic Care'],
  },
  {
    slug: 'digital-health-and-ai-in-southeast-asia-care-delivery',
    title: 'Digital Health And AI In Southeast Asia Care Delivery',
    topic: 'Digital health',
    eyebrow: 'Digital Health',
    image: 'https://images.unsplash.com/photo-1758691462668-046fd85ceac9?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Doctor examining a scan on a tablet at a desk',
    summary:
      'Where AI, telehealth, interoperable records, and workflow automation can improve healthcare access and productivity across Southeast Asia.',
    metaTitle: 'Digital Health And AI In Southeast Asia Care Delivery | HealthCare Industry Research',
    metaDescription:
      'A research note on telemedicine, AI-enabled diagnosis, electronic health records, and national digital-health platforms shaping healthcare delivery across Southeast Asia.',
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'National Platforms Are Becoming The Backbone, Not A Pilot',
        paragraphs: [
          "Several of the region's largest healthcare systems have moved digital health from pilot programmes into national infrastructure. Singapore's National Electronic Health Record and HealthHub portal, Indonesia's SATUSEHAT platform connecting the large majority of hospitals and primary-care facilities, and Vietnam's national telehealth network linking grassroots clinics with specialist hospitals are each examples of digital health being treated as core access infrastructure rather than an optional service channel.",
          "This shift changes what 'digital health' means commercially in these markets. Rather than a standalone product category, interoperability with — or credibility alongside — these national platforms is increasingly a baseline expectation for hospital systems, device makers and health-tech vendors.",
        ],
      },
      {
        title: 'Telemedicine As An Access Tool, Not Just A Convenience',
        paragraphs: [
          "In geographically dispersed or unevenly resourced markets — Indonesia's more than seventeen thousand islands, the Philippines' archipelago, and provincial Vietnam and Thailand — telemedicine is used specifically to extend specialist consultation into areas with limited local provider density, rather than only as a convenience layer for urban patients. This access-equity framing is a genuinely distinct use case from telehealth's role in more provider-dense markets like Singapore.",
          'AI-enabled diagnosis and decision support — faster image analysis, triage, and clinical decision-making — and automation of administrative, laboratory and pharmacy workflows are the most consistently cited technology themes across the region’s hospital systems, aimed at improving productivity and diagnostic consistency amid persistent clinical workforce shortages.',
        ],
      },
      {
        title: 'Data Governance Is Moving In Step With Adoption',
        paragraphs: [
          "Health-data governance is advancing alongside adoption rather than lagging it in the region's more mature digital-health markets. Singapore's Health Information Act mandates provider participation in the National Electronic Health Record and sets explicit data-governance and cybersecurity requirements; several other markets have introduced or are updating personal-data-protection and telemedicine-specific regulation as digital-health use expands.",
          'For vendors and providers, this means digital-health market entry increasingly requires demonstrating data-governance and interoperability credentials from the outset, rather than treating them as a later compliance step — a pattern likely to become more, not less, pronounced as national platforms mature.',
        ],
      },
    ],
    relatedMarketSlugs: ['singapore-healthcare', 'indonesia-healthcare', 'vietnam-healthcare'],
    relatedSolutionTitles: ['Digital Health Intelligence'],
  },
  {
    slug: 'thailand-universal-coverage-scheme-two-speed-system',
    title: "Thailand's Universal Coverage Scheme And Its Two-Speed Healthcare System",
    topic: 'Healthcare financing',
    eyebrow: 'Thailand · Healthcare Financing',
    image: 'https://images.unsplash.com/photo-1758115271914-6d5d8bb3d277?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Red tuk-tuks passing a modern building in Bangkok, Thailand',
    summary:
      "How Thailand's near-universal public coverage and internationally established private hospital sector create two distinct — and differently pressured — healthcare economies.",
    metaTitle:
      "Thailand's Universal Coverage Scheme And Its Two-Speed Healthcare System | HealthCare Industry Research",
    metaDescription:
      "A research note on Thailand's Universal Coverage Scheme financing, public-private capacity gaps, and the cost pressures reshaping patient access.",
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'A Coverage Model Few Regional Peers Match',
        paragraphs: [
          "Thailand's Universal Coverage Scheme, administered by the National Health Security Office, reaches tens of millions of citizens and — together with the Social Security Scheme for employees and the Civil Servant Medical Benefit Scheme — gives the large majority of the population access to public healthcare. This breadth of coverage is unusual by regional standards and reflects a long-standing policy commitment to healthcare as a strategic national sector.",
          'That commitment continues into recent budget planning: public healthcare spending has been on a sustained upward path, with healthcare’s share of GDP trending higher as the government maintains public financing as the backbone of the system, even amid periods of political transition that have, at times, slowed budget disbursement and approval timelines.',
        ],
      },
      {
        title: 'Two Systems, Two Sets Of Pressures',
        paragraphs: [
          'Public and private healthcare in Thailand increasingly operate as distinct economies rather than a single continuum. Public hospitals under the Ministry of Public Health carry the volume — provincial hospitals through major tertiary centres — while a small number of internationally accredited private hospital groups compete on specialist depth, service standards, and international-patient trust.',
          'Capacity utilisation reflects this split: public hospital occupancy has run meaningfully higher than private occupancy in recent reporting, alongside softer middle-income demand for non-essential private care — a pattern consistent with rising treatment costs pushing some price-sensitive patients back toward the public system.',
        ],
      },
      {
        title: 'Cost Pressure Is The Defining Near-Term Story',
        paragraphs: [
          'Medical-cost inflation in Thailand has been running well above headline consumer inflation as of 2026, and insurers have responded by shifting toward higher co-payment structures — a direct reshaping of how patients access and pay for private care. For providers and payers, this affordability gap is arguably the most consequential near-term dynamic in the market, more immediate than any single regulatory change.',
          "At the same time, structural demand keeps expanding: an aging population, Thailand's continued positioning as a regional medical-tourism hub, and rising chronic-disease prevalence are all pushing healthcare spending growth above broader GDP growth — a gap that is widening, not narrowing, over the medium term.",
        ],
      },
      {
        title: 'What This Means For Market Entry',
        paragraphs: [
          "Thailand's financing structure means market-entry strategy differs sharply depending on which system a provider, device maker or investor is targeting. Engaging the public system means working within National Health Security Office and Social Security Office budget and procurement cycles; engaging the private and medical-tourism sector means building relationships with hospital groups, insurers and international patient-referral networks operating on entirely different commercial logic.",
          "Given how directly medical-cost inflation is reshaping demand between the two systems, any market-entry plan should treat Thailand's affordability dynamics as a live variable to monitor, not a fixed backdrop.",
        ],
      },
    ],
    relatedMarketSlugs: ['thailand-healthcare'],
    relatedSegmentTitles: ['Public-system patients', 'Elderly residents'],
    relatedSolutionTitles: ['Regulatory And Policy Monitoring', 'Healthcare Market Strategy'],
  },
  {
    slug: 'singapore-super-aged-transition-healthier-sg',
    title: "Singapore's Super-Aged Transition: Healthier SG And The Aging-Care Investment Case",
    topic: 'Aging care',
    eyebrow: 'Singapore · Aging Care',
    image: 'https://images.unsplash.com/photo-1765896387398-1e1ae8d2eb85?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Nurse in scrubs leaning toward an elderly person in a chair',
    summary:
      "Singapore entered super-aged status in 2026. Here's how Healthier SG, MediShield reform, and public capacity expansion are responding — and where that leaves the aging-care investment case.",
    metaTitle:
      "Singapore's Super-Aged Transition And The Aging-Care Investment Case | HealthCare Industry Research",
    metaDescription:
      'A research note on Healthier SG, MediShield Life reform, and public healthcare capacity expansion as Singapore enters super-aged status.',
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'A Milestone With Direct Policy Consequences',
        paragraphs: [
          "Singapore officially entered super-aged status in 2026, with residents aged 65 and above now accounting for more than a fifth of the population — a threshold reached faster than in most higher-income countries. Because Singapore's system already runs on comparatively centralised planning, this demographic milestone translates quickly into concrete policy and capacity decisions rather than remaining an abstract trend.",
          'The Ministry of Health has responded with sustained increases to healthcare spending and development expenditure, directed specifically at hospitals, digital health and aging-focused capacity, alongside a public-hospital bed-expansion programme running through the end of the decade.',
        ],
      },
      {
        title: 'Healthier SG: Reform Aimed Upstream Of The Hospital',
        paragraphs: [
          "Healthier SG, Singapore's national preventive-care reform, has enrolled well over a million residents since launch, anchoring the shift toward family-doctor-based, primary-care-first management rather than hospital-centred treatment. Enrolment growth of this scale in a national programme is a meaningful signal that the reform has moved past early adoption into mainstream use.",
          'For providers, this reform effectively redirects a portion of future demand growth toward polyclinics, general practice, and community-based preventive services — a structural shift worth factoring into any Singapore market-entry or partnership plan that assumes hospital-centred demand alone.',
        ],
      },
      {
        title: 'Financing Reform Is Following Demand, Not Lagging It',
        paragraphs: [
          'Rising private medical inflation has prompted reform to Integrated Shield Plans, including materially higher annual co-payment caps, aimed at managing claims growth without eroding coverage. This is a direct policy response to affordability pressure building alongside the aging transition, rather than a separate or delayed reaction to it.',
          'National healthcare expenditure as a share of GDP has been on a clear upward trajectory as of 2026 and is expected to continue rising through the end of the decade — consistent with a system scaling public investment in step with demographic need rather than waiting for pressure to build further.',
        ],
      },
      {
        title: 'Where The Investment Case Concentrates',
        paragraphs: [
          "Long-term and step-down care capacity, home-based and community-care models, and clinical AI or productivity tools that offset healthcare workforce constraints are the most consistently identifiable investment themes as Singapore's demographic transition plays out. Singapore's data-governance maturity — anchored by the National Electronic Health Record and the Health Information Act — makes it a natural early-adoption market for exactly this kind of digitally enabled aging-care model.",
          "The constraint to weigh against this opportunity is workforce, not demand: nursing and long-term-care staffing capacity is the recurring limiting factor cited across Singapore's healthcare system, and is likely to shape how quickly new aging-care capacity can actually be delivered.",
        ],
      },
    ],
    relatedMarketSlugs: ['singapore-healthcare'],
    relatedSegmentTitles: ['Elderly residents', 'Corporate and expat patients'],
    relatedSolutionTitles: ['Aging Care And Chronic Care', 'Digital Health Intelligence'],
  },
  {
    slug: 'vietnam-private-hospital-chainization',
    title: "Vietnam's Private Hospital Chainization",
    topic: 'Provider landscape',
    eyebrow: 'Vietnam · Provider Landscape',
    image: 'https://images.unsplash.com/photo-1602646994030-464f98de5e5c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aerial view of city buildings in Vietnam during daytime',
    summary:
      "Vietnam's private hospital sector is consolidating from isolated urban hospitals into branded, multi-site networks. Here's what is driving that shift and what it means for market entry.",
    metaTitle: "Vietnam's Private Hospital Chainization | HealthCare Industry Research",
    metaDescription:
      "A research note on Vietnam's shift from isolated private hospitals to branded, multi-site private hospital chains, and the demand pressures driving it.",
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'Public Overcrowding Is The Root Cause',
        paragraphs: [
          "Vietnam's public hospital system carries an unusually heavy load: major urban public hospitals have reported occupancy running well above their intended capacity, with some central hospitals operating over 120% of capacity at peak times. Even patients who could afford private alternatives frequently default to public hospitals first, reflecting how deeply public providers remain the default access point despite the strain.",
          'This chronic overcrowding — rather than medical tourism, which is not a mature demand driver in Vietnam the way it is in Thailand or Malaysia — is the primary force behind private-sector growth. The opportunity in Vietnam is domestic modernisation: faster access, better service, and trusted specialists for an urban population willing to pay for it.',
        ],
      },
      {
        title: 'From Isolated Hospitals To Branded Networks',
        paragraphs: [
          "Private hospitals have grown from a small share of total facilities to a meaningfully larger formal presence, concentrated in Hanoi and Ho Chi Minh City. What is changing now is structure: groups such as Vinmec, Hoan My, Tam Anh and FV Hospital are moving from single-site reputations toward standardised, multi-site networks, while specialty-chain models — Medical Saigon Group's ophthalmology platform among them — are scaling repeatable, high-demand clinical categories rather than general hospital care.",
          "This 'chainization' mirrors a pattern seen in more mature private-hospital markets across the region, but Vietnam is earlier in the process — meaning execution risk, such as quality standardisation across sites and workforce availability, is currently a bigger differentiator between providers than brand alone.",
        ],
      },
      {
        title: 'Insurance Coverage Is Expanding Faster Than Private Willingness To Pay',
        paragraphs: [
          "Vietnam Social Security's health-insurance coverage has expanded to reach the large majority of the population, and a national hospital-fee exemption policy is beginning to shift a meaningful share of annual medical costs from households to the state budget, starting with free annual health screenings. This is gradually easing Vietnam's historically high reliance on out-of-pocket spending.",
          'Even so, private healthcare spending is growing faster than public spending, and Vietnam remains a notably cost-competitive market relative to regional peers — a combination that supports continued private-sector growth without yet requiring Vietnam to compete as a medical-tourism destination on price.',
        ],
      },
      {
        title: 'What Wins In This Market',
        paragraphs: [
          "Success in Vietnam's private hospital sector increasingly depends on building patient trust through demonstrated clinical outcomes and consistent quality — not only comfort or facility aesthetics — while standardising care across expanding networks and developing focused specialty platforms such as maternity, fertility, diagnostics, oncology and cardiology that can scale faster than general hospital care.",
          'Foreign investors and partners should expect workforce shortages and quality-standardisation challenges to be the binding constraint on how fast any chain can responsibly expand, more so than access to capital or facility licensing.',
        ],
      },
    ],
    relatedMarketSlugs: ['vietnam-healthcare'],
    relatedSegmentTitles: ['Insured private-care users'],
    relatedSolutionTitles: ['Provider Landscape Research', 'Investment And Partnership Research'],
  },
  {
    slug: 'indonesia-satusehat-archipelago-access-gap',
    title: "Indonesia's SATUSEHAT And The Archipelago Access Gap",
    topic: 'Digital health',
    eyebrow: 'Indonesia · Digital Health',
    image: 'https://images.unsplash.com/photo-1686061592689-312bbfb5c055?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Computer screen displaying a data bar chart',
    summary:
      "Indonesia's national digital-health platform is being built to do something most countries don't need digital health for: closing a geographic access gap across more than seventeen thousand islands.",
    metaTitle: "Indonesia's SATUSEHAT And The Archipelago Access Gap | HealthCare Industry Research",
    metaDescription:
      "A research note on Indonesia's SATUSEHAT digital-health platform and how it is being used to address healthcare access gaps across Indonesia's dispersed geography.",
    publishedLabel: 'September 2026',
    sections: [
      {
        title: 'Geography, Not Just Capacity, Is The Core Constraint',
        paragraphs: [
          "Indonesia's healthcare access challenge is fundamentally different from most of its regional peers: it is not primarily a capacity problem but a distribution problem. Java's major cities, particularly Jakarta, concentrate the country's most advanced hospital capacity and private healthcare investment, while many of Indonesia's more than seventeen thousand islands face materially lower provider density and far longer travel times to specialist care.",
          "Jaminan Kesehatan Nasional (JKN), administered by BPJS Kesehatan, has achieved near-universal enrolment — one of the largest single-payer national insurance schemes in the world by coverage — but insurance coverage alone does not solve a geographic distribution problem. That is the gap SATUSEHAT is specifically designed to close.",
        ],
      },
      {
        title: 'A National Platform Built For Reach, Not Just Records',
        paragraphs: [
          "SATUSEHAT has connected a large majority of Indonesia's hospitals and primary-care facilities into a shared health-data ecosystem, consolidating what had been a fragmented set of provincial systems. Unlike digital-health platforms in more provider-dense markets, where the primary value is convenience or efficiency, SATUSEHAT's stated purpose is explicitly about extending referral coordination, data-sharing and telemedicine access to areas where physical provider density cannot realistically reach every patient.",
          "This access-equity framing — digital health as infrastructure rather than a convenience layer — is a genuinely distinct positioning worth understanding before applying assumptions from more geographically compact digital-health markets to Indonesia.",
        ],
      },
      {
        title: "Where Private Capacity Is Concentrating, And Where It Isn't",
        paragraphs: [
          "Private hospital groups — Siloam Hospitals, Hermina Hospitals, Mitra Keluarga and Mayapada Healthcare among the largest — are expanding primarily in and around Java's major cities, serving both BPJS-covered and private-pay patients. This concentration mirrors the same geographic pattern SATUSEHAT is trying to counteract: private capacity is following population density and purchasing power, not necessarily following the areas with the greatest unmet need.",
          'For providers and investors, this creates two distinct opportunities that should not be conflated: continued urban private-hospital expansion in saturated but still-growing city markets, versus a longer-horizon, genuinely differentiated opportunity in extending capacity and digital access into underserved regions — a harder, slower, but less contested space.',
        ],
      },
      {
        title: 'The Practical Takeaway',
        paragraphs: [
          'Specialist-physician shortages outside major cities remain a persistent constraint that digital infrastructure alone cannot fully solve — SATUSEHAT can extend a consultation, but it cannot substitute for the physical presence of specialist care in an emergency or complex-treatment scenario. Any Indonesia strategy premised primarily on digital reach should account for this limit rather than treating connectivity as a full substitute for physical capacity.',
          "BPJS Kesehatan's reimbursement framework remains the central commercial variable for any provider or payer strategy in Indonesia, given how large a share of national patient volume is BPJS-funded — understanding its tariff and coverage structure is a prerequisite for market entry, digital or otherwise.",
        ],
      },
    ],
    relatedMarketSlugs: ['indonesia-healthcare'],
    relatedSegmentTitles: ['Public-system patients', 'Prevention and primary-care reform participants'],
    relatedSolutionTitles: ['Digital Health Intelligence', 'Healthcare Market Strategy'],
  },
];

export function getInsightBySlug(slug: string) {
  return insights.find((insight) => insight.slug === slug);
}

export function otherInsights(slug: string) {
  return insights.filter((insight) => insight.slug !== slug);
}
