import {
  Activity,
  Building2,
  ClipboardCheck,
  Globe2,
  HeartPulse,
  LineChart,
  Network,
  ShieldCheck,
  UsersRound,
  type LucideIcon,
} from 'lucide-react';

export type CardItem = {
  title: string;
  text: string;
  icon?: LucideIcon;
};

export type StatItem = {
  value: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
  label: string;
  noGrouping?: boolean;
};

export type MarketCountry = {
  slug: string;
  countryName: string;
  countryCode: string;
  flag: string;
  eyebrow: string;
  themeLine: string;
  image: string;
  imageAlt: string;
  keyStats?: StatItem[];
  heroTitle: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  snapshot: CardItem[];
  overview: string[];
  demandDrivers: CardItem[];
  providerLandscape: CardItem[];
  regulatory: string[];
  digitalHealth: CardItem[];
  investmentAreas: CardItem[];
  considerations: CardItem[];
  relatedSegmentTitles: string[];
  relatedSolutionTitles: string[];
  relatedInsightTitles: string[];
};

export const markets: MarketCountry[] = [
  {
    slug: 'singapore-healthcare',
    countryName: 'Singapore',
    countryCode: 'SG',
    flag: '🇸🇬',
    eyebrow: 'Singapore Healthcare Market',
    themeLine: 'Advanced Care, Digital Integration and Aging Demand',
    image: 'https://images.unsplash.com/photo-1569288063643-5d29ad64df09?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Marina Bay Sands skyline in Singapore during daytime',
    keyStats: [
      { value: 6.11, decimals: 2, suffix: 'M', label: 'Population (2025)' },
      { value: 20, suffix: '%+', label: 'Residents aged 65 and above' },
      { value: 100, suffix: '%', label: 'Urban population' },
    ],
    heroTitle: 'Healthcare Industry and Market Outlook in Singapore',
    heroDescription:
      "Singapore combines a well-resourced public healthcare system with premium private hospitals, a regional referral role for complex specialist care, and one of the region's most developed digital-health and health-data environments. Demand is increasingly shaped by an aging population, a rising chronic-disease burden, and continued investment in medical technology and biomedical research.",
    metaTitle:
      'Singapore Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "Analysis of Singapore's healthcare providers, public and private financing, digital health and AI governance, aging-care demand, medtech and market-entry considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: "A tiered public system built around polyclinics and restructured hospitals sits alongside a well-developed private hospital sector, coordinated through national financing frameworks such as MediShield Life and Medisave. Singapore's population reached 6.11 million in 2025 and is fully urbanised, with residents aged 65 and above now making up more than a fifth of the total as the country entered super-aged status in 2026.",
      },
      {
        title: 'Digital Health',
        text: 'Singapore has invested heavily in national health-data infrastructure and clinical AI pilots, with health-data governance treated as a core policy priority rather than an afterthought.',
      },
      {
        title: 'Regulatory Environment',
        text: 'The Ministry of Health and the Health Sciences Authority run well-documented licensing, device and pharmaceutical pathways, making regulatory processes comparatively predictable relative to regional peers.',
      },
      {
        title: 'Demand Drivers',
        text: 'An aging resident population and a growing chronic-disease burden are the dominant long-term demand drivers, alongside continued demand for complex, specialist and cross-border referral care.',
      },
    ],
    overview: [
      "Singapore's healthcare system is structured around a public backbone polyclinics for primary care and a network of restructured hospitals and specialist centres financed through a mix of government subsidy, mandatory savings (Medisave), and national insurance (MediShield Life, with MediFund as a safety net). Private hospitals and specialist clinics operate alongside this system, serving resident patients seeking faster or more discretionary access and a steady flow of regional patients seeking advanced or complex care.",
      'Public and private participation are largely complementary rather than directly competing: public institutions carry the bulk of subsidised, population-level care, while private providers compete on service, specialist depth, and turnaround time. This division shapes how new entrants position themselves credibility with public-sector referral pathways matters as much as private-sector commercial positioning.',
      "Demand is increasingly defined by demographics: an aging population is raising demand for chronic-disease management, rehabilitation and long-term or community care, while a smaller but influential segment of patients and referring physicians continues to drive demand for advanced diagnostics, oncology, cardiac and other specialist services that draw on Singapore's role as a regional referral hub.",
      'Market entry considerations differ by segment. Providers and medtech companies typically engage a well-defined regulatory pathway through the Ministry of Health and the Health Sciences Authority, serving a sophisticated buyer base that includes hospital procurement teams and increasingly data-literate clinical staff. Digital-health vendors face a market that expects strong health-data governance and interoperability credentials as a baseline, not a differentiator.',
    ],
    demandDrivers: [
      {
        icon: HeartPulse,
        title: 'Aging Population',
        text: 'Singapore has entered super-aged status, with residents aged 65 and above now accounting for more than a fifth of the population, increasing demand for chronic-disease management, rehabilitation, and step-down and community-care capacity.',
      },
      {
        icon: Activity,
        title: 'Chronic Disease Burden',
        text: 'Diabetes, cardiovascular disease and other non-communicable conditions are driving sustained demand for longitudinal, coordinated care rather than episodic treatment.',
      },
      {
        icon: Network,
        title: 'Digital Health Maturity',
        text: 'High digital and data-infrastructure maturity is pulling demand toward interoperable records, remote monitoring, and AI-assisted clinical workflows.',
      },
      {
        icon: Globe2,
        title: 'Regional Referral Demand',
        text: "Singapore's reputation for complex and specialist care continues to draw referral and medical-travel demand from across the region.",
      },
    ],
    providerLandscape: [
      {
        title: 'Public hospital clusters',
        text: 'SingHealth, the National Healthcare Group and the National University Health System operate Singapore’s restructured public hospitals, polyclinics and specialist centres, anchoring subsidised acute and primary care under national clinical governance.',
      },
      {
        title: 'Premium private hospital groups',
        text: 'IHH Healthcare (Mount Elizabeth, Mount Elizabeth Novena, Gleneagles, Parkway East) and Raffles Medical Group operate Singapore’s leading private hospital platforms, competing on specialist depth, service standards and international-patient trust.',
      },
      {
        title: 'Polyclinics and primary care',
        text: 'A national network of polyclinics and general-practice clinics forms the primary-care and Healthier SG access layer, supporting both subsidised public referral pathways and preventive-care enrolment.',
      },
      {
        title: 'Community and step-down care',
        text: 'Community hospitals, nursing homes and home-care providers are expanding to absorb demand shifting out of acute hospital settings as the population ages.',
      },
    ],
    regulatory: [
      'Healthcare facilities, professionals and pharmaceuticals are regulated primarily through the Ministry of Health and the Health Sciences Authority. The Healthcare Services Act (HCSA) is the principal licensing framework covering hospitals, clinics, nursing homes and telemedicine services, while medical devices and pharmaceuticals require dealer licences and compliance overseen by the Health Sciences Authority.',
      'The Health Information Act mandates provider participation in the National Electronic Health Record (NEHR) and sets data-governance and cybersecurity requirements, reflecting policy emphasis on trust and interoperability alongside innovation in Singapore’s digital-health agenda.',
      'Market-access and regulatory requirements can change, and specific licensing, registration or data-governance obligations should be validated directly with the relevant authority before any market-entry or product-launch decision. This page does not constitute regulatory or legal advice.',
    ],
    digitalHealth: [
      {
        icon: Network,
        title: 'Health-Data Infrastructure',
        text: 'National electronic health-record infrastructure, including the National Electronic Health Record (NEHR) and HealthHub as the national health portal, underpins much of the digital-health agenda, with interoperability treated as foundational.',
      },
      {
        icon: ShieldCheck,
        title: 'AI and Data Governance',
        text: 'Clinical AI pilots and deployments sit within an explicit governance framework addressing safety, accountability and data protection.',
      },
      {
        icon: Activity,
        title: 'Remote Monitoring',
        text: 'Remote patient monitoring and step-down digital-care models are expanding as part of efforts to manage chronic-disease and aging-care demand outside acute settings.',
      },
      {
        icon: Building2,
        title: 'Hospital Systems',
        text: 'Public and private hospital groups continue to invest in clinical workflow automation and hospital information systems.',
      },
    ],
    investmentAreas: [
      {
        icon: HeartPulse,
        title: 'Aging and Chronic Care',
        text: 'Long-term and step-down care capacity is a persistent investment theme as demand shifts out of acute hospital settings.',
      },
      {
        icon: Network,
        title: 'Clinical AI and Health Data',
        text: "Singapore's data-governance maturity makes it a natural early-adoption market for clinical AI and interoperable health-data platforms.",
      },
      {
        icon: LineChart,
        title: 'Biomedical and MedTech',
        text: "Singapore's position as a biomedical-sciences and medtech hub continues to attract manufacturing, R&D and regional-headquarters investment.",
      },
    ],
    considerations: [
      {
        title: 'Cost of Care',
        text: 'High-quality private and specialist care commands a premium, and affordability considerations extend even to a relatively high-income population.',
      },
      {
        title: 'Workforce Capacity',
        text: 'Healthcare workforce capacity, particularly in nursing and long-term care, is a recurring constraint as demand from an aging population grows.',
      },
      {
        title: 'Small Domestic Base',
        text: 'A comparatively small resident population means scale-dependent business models often need a regional, not purely domestic, strategy.',
      },
    ],
    relatedSegmentTitles: [
      'Elderly residents',
      'Corporate and expat patients',
      'Medical-travel and regional premium patients',
    ],
    relatedSolutionTitles: [
      'Digital Health Intelligence',
      'Aging Care And Chronic Care',
      'Regulatory And Policy Monitoring',
    ],
    relatedInsightTitles: [
      "Singapore's Super-Aged Transition: Healthier SG And The Aging-Care Investment Case",
      'Digital Health And AI In Southeast Asia Care Delivery',
      'How Aging Is Reshaping Healthcare Demand',
    ],
  },
  {
    slug: 'malaysia-healthcare',
    countryName: 'Malaysia',
    countryCode: 'MY',
    flag: '🇲🇾',
    eyebrow: 'Malaysia Healthcare Market',
    themeLine: 'Private Healthcare, Medical Tourism and MedTech Growth',
    image: 'https://images.unsplash.com/photo-1740707590077-ce920ec56441?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Historic clock tower building in Kuala Lumpur, Malaysia',
    keyStats: [
      { value: 34.3, decimals: 1, suffix: 'M', label: 'Population (2025)' },
      { value: 80, suffix: '%', label: 'Urbanisation rate' },
      { value: 2048, label: 'Projected "aged society" milestone', noGrouping: true },
    ],
    heroTitle: 'Healthcare Industry and Market Outlook in Malaysia',
    heroDescription:
      "Malaysia pairs a large public healthcare system with an internationally competitive private hospital sector that has built a significant medical-tourism business on a cost-quality positioning. Growth is increasingly concentrated in private-sector capacity, diagnostics, medical-device distribution, and a gradually digitalising healthcare system.",
    metaTitle:
      'Malaysia Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "Analysis of Malaysia's public-private healthcare system, private hospital groups, medical tourism, medical devices and diagnostics, digital-health reform and market-entry considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: "A public system run by the Ministry of Health provides subsidised care at low direct cost to citizens, operating alongside a sizeable, commercially oriented private hospital sector. Malaysia's population reached 34.3 million in 2025, with urbanisation at roughly 80% and a growing share of older adults expected to make Malaysia an aged society by 2048.",
      },
      {
        title: 'Medical Tourism',
        text: 'Private hospital groups in Kuala Lumpur, Penang and Johor have built an established medical-tourism business positioned on clinical quality relative to cost in many source markets.',
      },
      {
        title: 'Provider Landscape',
        text: 'A small number of large private hospital groups account for a significant share of private capacity, alongside independent clinics and a growing diagnostics sector.',
      },
      {
        title: 'Digital Health',
        text: 'Digital-health adoption is advancing unevenly private providers are further along on electronic records and telemedicine than much of the public system, where digitalisation is an active policy priority.',
      },
    ],
    overview: [
      'Malaysia runs two connected healthcare tracks: a public system funded through general taxation and administered by the Ministry of Health, delivering heavily subsidised care through government hospitals and clinics, and a private sector that operates on a fee-for-service and insurance-funded basis. Most Malaysians move between both tracks depending on the type of care, urgency, and ability to pay.',
      'The private hospital sector has grown into one of the more mature markets in the region, anchored by a handful of large groups with multi-hospital networks. These groups compete domestically on service quality and specialist depth, and internationally on medical tourism, where Malaysia has positioned itself as a value-oriented alternative for cardiology, oncology, fertility and elective procedures.',
      'Demand growth is concentrated in chronic-disease management, diagnostics, and medical devices, reflecting an aging population and rising rates of diabetes and cardiovascular disease. Malaysia is also a regional base for medical-device distribution and some local manufacturing, supported by its trade and industrial infrastructure.',
      'Market entry typically requires navigating a dual regulatory and commercial environment: engaging the Ministry of Health and the Medical Device Authority for licensing and registration, while separately building relationships with private hospital groups, insurers and corporate benefit providers, whose purchasing and referral decisions increasingly shape where private-sector growth occurs.',
    ],
    demandDrivers: [
      {
        icon: Globe2,
        title: 'Medical Tourism',
        text: 'Established private hospital groups continue to draw cross-border patients on a cost-quality proposition, particularly for elective, cardiac and fertility care.',
      },
      {
        icon: HeartPulse,
        title: 'Chronic Disease and Aging',
        text: 'Rising rates of diabetes and cardiovascular disease, alongside a gradually aging population, are increasing demand for ongoing chronic-care management.',
      },
      {
        icon: Building2,
        title: 'Private Sector Expansion',
        text: 'Private hospital groups continue to expand capacity and specialist services in response to demand the public system does not fully absorb.',
      },
      {
        icon: ShieldCheck,
        title: 'Insurance Penetration',
        text: 'Growing private health-insurance and corporate-benefit coverage is expanding the addressable market for private providers beyond out-of-pocket patients.',
      },
    ],
    providerLandscape: [
      {
        title: 'Public hospitals and clinics',
        text: 'Ministry of Health facilities, including general hospitals and Klinik Kesihatan primary-care clinics, deliver the majority of subsidised care and remain the default provider for most Malaysians.',
      },
      {
        title: 'Private hospital groups',
        text: 'IHH Healthcare, KPJ Healthcare and Sunway Healthcare operate Malaysia’s largest private hospital networks, alongside Columbia Asia’s community-hospital chain and Penang-anchored groups such as Island Hospital, together driving most private-sector capacity, specialist care and medical-tourism volume.',
      },
      {
        title: 'Independent clinics and specialists',
        text: 'A broad layer of independent general and specialist clinics serves both insured and out-of-pocket private-pay patients.',
      },
      {
        title: 'Diagnostics and device distribution',
        text: 'An active diagnostics and medical-device distribution sector, including established local pharmaceutical distributors alongside global device firms, supports both public procurement and private-hospital purchasing.',
      },
    ],
    regulatory: [
      'Healthcare facilities, pharmaceuticals and medical devices are regulated primarily through the Ministry of Health, with the National Pharmaceutical Regulatory Agency handling drug registration and the Medical Device Authority handling device registration and post-market surveillance. Private hospitals and clinics require facility licensing under the Private Healthcare Facilities and Services Act.',
      'Digital-health and telemedicine regulation has been an active policy area, with a Digital Healthcare Act establishing legal oversight for telemedicine, AI and electronic medical records as part of a national single-health-record strategy, alongside a more advanced private-sector digital-health landscape.',
      'Regulatory requirements, timelines and reimbursement conditions can change and vary by product and facility type specific requirements should be validated directly with the relevant Malaysian authority before market-entry decisions.',
    ],
    digitalHealth: [
      {
        icon: Network,
        title: 'Telemedicine',
        text: 'Telemedicine has expanded across both private platforms and public-sector pilots, though adoption and infrastructure maturity still vary between urban and rural areas.',
      },
      {
        icon: Building2,
        title: 'Hospital Digitalisation',
        text: 'Private hospital groups have generally moved further and faster on electronic medical records and digital patient engagement than the public system.',
      },
      {
        icon: ShieldCheck,
        title: 'Public-Sector Digital Reform',
        text: 'Government-led digital-health initiatives are extending MySejahtera into a national health portal and rolling out cloud-based clinic management systems, targeting improved interoperability and data infrastructure across public facilities.',
      },
      {
        icon: Activity,
        title: 'Remote and Chronic-Care Monitoring',
        text: 'Remote monitoring tools are gradually being adopted to support chronic-disease management outside hospital settings.',
      },
    ],
    investmentAreas: [
      {
        icon: Globe2,
        title: 'Private Hospital Capacity',
        text: 'Continued private hospital expansion, particularly in specialist and medical-tourism-oriented services, remains a core investment theme.',
      },
      {
        icon: LineChart,
        title: 'Medical Devices and Diagnostics',
        text: "Malaysia's distribution and manufacturing infrastructure supports ongoing investment in medical devices and diagnostics.",
      },
      {
        icon: Network,
        title: 'Digital Health',
        text: 'Public-sector digitalisation initiatives and private-sector telemedicine platforms both represent active areas of investment and partnership interest.',
      },
    ],
    considerations: [
      {
        title: 'Public-Private Divide',
        text: 'Meaningful differences in capacity and digital maturity between the public and private systems affect how uniformly new models can scale nationally.',
      },
      {
        title: 'Reimbursement Complexity',
        text: "Navigating insurer and corporate-benefit reimbursement alongside out-of-pocket demand requires a clear view of Malaysia's mixed payer landscape.",
      },
      {
        title: 'Regional Competition',
        text: "Malaysia's medical-tourism positioning faces active competition from other regional hubs, keeping pricing and service differentiation important.",
      },
    ],
    relatedSegmentTitles: [
      'Insured private-care users',
      'Medical-travel and regional premium patients',
      'Elderly residents',
    ],
    relatedSolutionTitles: [
      'Provider Landscape Research',
      'Investment And Partnership Research',
      'Healthcare Market Strategy',
    ],
    relatedInsightTitles: [
      'Southeast Asia Healthcare Sector Outlook',
      'How Aging Is Reshaping Healthcare Demand',
    ],
  },
  {
    slug: 'thailand-healthcare',
    countryName: 'Thailand',
    countryCode: 'TH',
    flag: '🇹🇭',
    eyebrow: 'Thailand Healthcare Market',
    themeLine: 'Medical Tourism, Private Care and Aging Healthcare Demand',
    image: 'https://images.unsplash.com/photo-1758115271914-6d5d8bb3d277?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Red tuk-tuks passing a modern building in Bangkok, Thailand',
    keyStats: [
      { value: 71.56, decimals: 2, suffix: 'M', label: 'Population (2025)' },
      { value: 30, suffix: '%', label: 'Population aged 65+ by 2040 (est.)' },
      { value: 3, label: 'National healthcare financing schemes' },
    ],
    heroTitle: 'Healthcare Industry and Market Outlook in Thailand',
    heroDescription:
      "Thailand combines near-universal public healthcare coverage with one of Southeast Asia's most internationally established private hospital sectors. Large public capacity, a mature medical-tourism industry, and a fast-aging population are together reshaping demand across acute care, rehabilitation, wellness and digital health.",
    metaTitle:
      'Thailand Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "Analysis of Thailand's universal healthcare system, private hospital networks, medical tourism, aging-care demand, digital health and market-entry considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: "Thailand's Universal Coverage Scheme, alongside the Social Security Scheme and the Civil Servant Medical Benefit Scheme, gives most of the population access to public healthcare, administered through the Ministry of Public Health and the National Health Security Office. Thailand's population stood at 71.56 million in 2025, and its elderly population is growing quickly enough to reach an estimated 30% of residents by 2040.",
      },
      {
        title: 'Medical Tourism',
        text: "A long-established private hospital sector, concentrated in Bangkok and other major cities, has built one of the region's most recognised medical-tourism industries.",
      },
      {
        title: 'Provider Landscape',
        text: 'Large public hospital networks handle the bulk of population-level care, while a smaller number of internationally accredited private hospital groups serve private-pay, insured and international patients.',
      },
      {
        title: 'Demand Drivers',
        text: 'A rapidly aging population, rising chronic-disease prevalence, and sustained inbound medical-travel demand are the dominant forces shaping the market.',
      },
    ],
    overview: [
      "Thailand's public healthcare system is unusually broad by regional standards, combining the Universal Coverage Scheme (widely known as the 30-baht scheme), the Social Security Scheme for employees, and the Civil Servant Medical Benefit Scheme, together reaching the large majority of the population. Public hospitals under the Ministry of Public Health carry most of this volume, from provincial hospitals to major tertiary centres.",
      'Running alongside this public system is a private hospital sector that has developed an international reputation, particularly in Bangkok, for both domestic private-pay care and inbound medical tourism. A number of Thai private hospital groups are internationally accredited and actively serve cardiac, orthopaedic, fertility, cosmetic and wellness patients from across the region and beyond.',
      'Demographic change is a defining feature of the market: Thailand is aging faster than most of its regional peers, driving rising demand for chronic-disease management, rehabilitation, and long-term and community-based elder care, alongside continued growth in diagnostics and pharmaceuticals.',
      "Market entry considerations differ by track. Engaging the public system involves Ministry of Public Health and National Health Security Office processes and procurement norms; engaging the private and medical-tourism sector means working with hospital groups, insurers and international patient-referral networks whose commercial priorities differ meaningfully from public-sector buyers.",
    ],
    demandDrivers: [
      {
        icon: HeartPulse,
        title: 'Aging Population',
        text: "Thailand's population is aging faster than most Southeast Asian peers, with the elderly population already exceeding the youth population in size, driving sustained demand for chronic care, rehabilitation and elder-care services.",
      },
      {
        icon: Globe2,
        title: 'Medical Tourism',
        text: 'An established private hospital sector continues to attract international patients for elective, cardiac, orthopaedic and wellness care.',
      },
      {
        icon: Activity,
        title: 'Chronic Disease Burden',
        text: 'Rising rates of diabetes, cardiovascular disease and cancer are increasing demand for longitudinal chronic-care management and diagnostics.',
      },
      {
        icon: Building2,
        title: 'Public Capacity Pressure',
        text: 'High utilisation of public hospitals under universal coverage continues to drive interest in capacity expansion and efficiency-improving digital tools.',
      },
    ],
    providerLandscape: [
      {
        title: 'Public hospital networks',
        text: 'Ministry of Public Health hospitals, from provincial facilities to major tertiary centres, deliver the bulk of care under universal coverage.',
      },
      {
        title: 'Private hospital groups',
        text: 'Bangkok Dusit Medical Services (BDMS), Bumrungrad International, Bangkok Chain Hospital, Chularat Hospital Group and Praram 9 Hospital anchor Thailand’s internationally accredited private hospital sector, spanning large multi-hospital networks to ultra-premium international flagships.',
      },
      {
        title: 'Wellness and rehabilitation providers',
        text: "A distinct wellness, rehabilitation and long-stay care sector has developed around Thailand's medical-tourism and aging-care demand.",
      },
      {
        title: 'Diagnostics and pharmacy networks',
        text: 'A broad diagnostics and retail-pharmacy network, alongside the state-owned Government Pharmaceutical Organization, supports both public and private-sector patients across urban and provincial areas.',
      },
    ],
    regulatory: [
      'Healthcare facilities, pharmaceuticals and medical devices fall primarily under the Ministry of Public Health, including the Thai Food and Drug Administration for product registration. Private hospital licensing sits with the Department of Health Service Support under the Private Hospital Act, and practitioners must hold valid registration with the relevant Thai professional councils under the Medical Profession Act.',
      "Public healthcare financing and coverage rules are set through the National Health Security Office (which administers the Universal Coverage Scheme), the Social Security Office, and the Comptroller General's Department for civil-servant benefits each with distinct rules relevant to any provider or payer partnership. Foreign ownership of healthcare facilities is typically capped under the Foreign Business Act, though Board of Investment promotion can enable full foreign ownership for qualifying projects.",
      'As with any market, licensing, registration and reimbursement requirements can change and should be validated directly with the relevant Thai authority before market-entry or product-launch decisions.',
    ],
    digitalHealth: [
      {
        icon: Building2,
        title: 'Hospital Technology',
        text: 'Private hospital groups have invested significantly in digital patient engagement, hospital information systems and telemedicine to support both domestic and international patients.',
      },
      {
        icon: Network,
        title: 'Digital Health Infrastructure',
        text: 'Public-sector digital-health initiatives are extending the national Personal Health Record (PHR) system, which already connects a large number of healthcare facilities, and electronic records and data-sharing under the universal-coverage system, though maturity varies by region.',
      },
      {
        icon: Globe2,
        title: 'Telehealth for Medical Travel',
        text: 'Telehealth and remote consultation tools increasingly support pre- and post-treatment engagement with international medical-tourism patients.',
      },
      {
        icon: Activity,
        title: 'Remote Monitoring for Aging Care',
        text: "Remote monitoring and home-care technology are emerging as tools to support Thailand's fast-growing elder-care population.",
      },
    ],
    investmentAreas: [
      {
        icon: Globe2,
        title: 'Private Hospitals and Medical Tourism',
        text: 'Continued investment in private hospital capacity and international-patient services remains a core growth theme.',
      },
      {
        icon: HeartPulse,
        title: 'Aging and Long-Term Care',
        text: "Rehabilitation, long-term and community-based elder care represent a growing investment area given Thailand's demographic trajectory.",
      },
      {
        icon: LineChart,
        title: 'Pharmaceuticals and MedTech',
        text: 'Growing chronic-disease prevalence is supporting sustained demand for pharmaceuticals, diagnostics and medical devices.',
      },
    ],
    considerations: [
      {
        title: 'Public System Capacity',
        text: 'High utilisation of public hospitals under universal coverage can create capacity pressure, particularly outside Bangkok.',
      },
      {
        title: 'Two-Speed System',
        text: 'Meaningful gaps in resourcing and digital maturity between public and private providers affect how new models scale nationally.',
      },
      {
        title: 'Competitive Medical-Tourism Landscape',
        text: "Thailand's medical-tourism sector faces active competition from other regional and global destinations, keeping quality and cost positioning important.",
      },
    ],
    relatedSegmentTitles: [
      'Elderly residents',
      'Medical-travel and regional premium patients',
      'Public-system patients',
    ],
    relatedSolutionTitles: [
      'Aging Care And Chronic Care',
      'Provider Landscape Research',
      'Healthcare Market Strategy',
    ],
    relatedInsightTitles: [
      "Thailand's Universal Coverage Scheme And Its Two-Speed Healthcare System",
      'How Aging Is Reshaping Healthcare Demand',
      'Southeast Asia Healthcare Sector Outlook',
    ],
  },
  {
    slug: 'vietnam-healthcare',
    countryName: 'Vietnam',
    countryCode: 'VN',
    flag: '🇻🇳',
    eyebrow: 'Vietnam Healthcare Market',
    themeLine: 'Capacity Expansion, Private Healthcare and Modernization',
    image: 'https://images.unsplash.com/photo-1602646994030-464f98de5e5c?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Aerial view of city buildings in Vietnam during daytime',
    keyStats: [
      { value: 102.3, decimals: 1, suffix: 'M', label: 'Population (2025)' },
      { value: 38, suffix: '%', label: 'Urbanisation rate' },
      { value: 2, suffix: 'x', label: 'Growth in 65+ population by 2035 (projected)' },
    ],
    heroTitle: 'Healthcare Industry and Market Outlook in Vietnam',
    heroDescription:
      "Vietnam's healthcare system is expanding under sustained pressure from rising demand, growing insurance coverage, and a public hospital network working to modernise capacity and technology. Private healthcare, diagnostics, medical devices and pharmaceuticals are among the fastest-growing parts of the market as household healthcare spending increases.",
    metaTitle:
      'Vietnam Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "Analysis of Vietnam's public hospital system, expanding private healthcare, health-insurance coverage, medical devices and pharmaceuticals, digital health and market-entry considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: "Vietnam's public healthcare system, coordinated by the Ministry of Health and financed largely through Vietnam Social Security's health-insurance scheme, is the primary point of access for most of the population. Vietnam's population reached 102.3 million in 2025, with urbanisation at around 38%, and the population aged 65 and above is projected to double by 2035.",
      },
      {
        title: 'Provider Landscape',
        text: 'Public hospitals, particularly in Hanoi and Ho Chi Minh City, carry heavy patient volumes, while a growing number of private hospitals and clinics are expanding capacity in major cities.',
      },
      {
        title: 'Digital Health',
        text: 'Hospital modernisation and digital-record initiatives are underway across parts of the public system, though adoption varies significantly between urban centres and provincial facilities.',
      },
      {
        title: 'Demand Drivers',
        text: 'Rising household healthcare spending, growing insurance coverage, and increasing chronic-disease prevalence are the main forces driving demand growth.',
      },
    ],
    overview: [
      "Vietnam's healthcare system is built around a large public hospital network, coordinated by the Ministry of Health, with financing increasingly channelled through Vietnam Social Security's national health-insurance scheme, which covers a large and growing share of the population. Public hospitals particularly major tertiary centres in Hanoi and Ho Chi Minh City handle high patient volumes and are frequently the first point of access even for patients who could afford private alternatives.",
      'Private healthcare is a smaller but fast-growing segment, concentrated in the largest cities, where private hospitals and clinics are expanding to serve a rising middle class willing to pay for shorter wait times, higher service standards, or specialist access not readily available in crowded public facilities.',
      'Demand growth reflects both rising household healthcare spending and a shifting disease burden from a historical focus on infectious disease and maternal-child health toward increasing chronic-disease management, driven by an aging population and rising rates of conditions such as diabetes and cardiovascular disease.',
      "Market entry generally requires working with the Ministry of Health for licensing and registration, alongside an understanding of Vietnam Social Security's insurance and reimbursement framework, since a large share of hospital revenue and patient volume flows through public insurance channels even where private providers are involved.",
    ],
    demandDrivers: [
      {
        icon: LineChart,
        title: 'Rising Healthcare Spending',
        text: 'Growing household income and healthcare spending are expanding the addressable market for both public and private providers.',
      },
      {
        icon: ShieldCheck,
        title: 'Expanding Insurance Coverage',
        text: 'Broadening Vietnam Social Security health-insurance coverage is increasing formal access to care and reshaping reimbursement dynamics.',
      },
      {
        icon: Activity,
        title: 'Chronic Disease Shift',
        text: 'A shift toward chronic, non-communicable disease is increasing demand for ongoing management, diagnostics and specialist care.',
      },
      {
        icon: Building2,
        title: 'Hospital Capacity Pressure',
        text: 'Persistent capacity pressure at major public hospitals is driving interest in both new capacity and efficiency-improving digital tools.',
      },
    ],
    providerLandscape: [
      {
        title: 'Public hospital network',
        text: 'Ministry of Health-coordinated public hospitals, from provincial facilities to major tertiary centres, deliver the majority of care nationally.',
      },
      {
        title: 'Growing private hospital sector',
        text: 'Vinmec, Hoan My, Tam Anh, FV Hospital and Medical Saigon Group are among Vietnam’s largest private hospital and specialty-chain networks, expanding fastest in Hanoi and Ho Chi Minh City to target a growing urban middle class.',
      },
      {
        title: 'Pharmacy and diagnostics networks',
        text: 'An extensive retail-pharmacy network and expanding diagnostics sector, alongside domestic pharmaceutical manufacturers, support both public and private-sector patients.',
      },
      {
        title: 'Foreign-invested facilities',
        text: 'A small but notable set of foreign-invested hospitals and clinics has entered the market, often targeting expatriate and higher-income domestic patients.',
      },
    ],
    regulatory: [
      'Healthcare facilities, pharmaceuticals and medical devices are regulated primarily through the Ministry of Health under the Law on Medical Examination and Treatment, which introduced a service-capability-based facility licensing model and a national competency examination for clinical practice licensing. Foreign entrants typically need local partners to navigate drug and device registration pathways.',
      "Vietnam Social Security's health-insurance framework (Social Health Insurance, or BHYT) governs a large share of reimbursement and procurement decisions, making it a central consideration for any provider, pharmaceutical or device strategy. Healthcare remains a specially encouraged investment sector, with 100% foreign ownership permitted in healthcare facilities.",
      'Foreign-investment conditions, licensing timelines and reimbursement rules can change and vary by facility type and locality specific requirements should be validated directly with the relevant Vietnamese authority before market-entry decisions.',
    ],
    digitalHealth: [
      {
        icon: Building2,
        title: 'Hospital Modernisation',
        text: 'Public hospital modernisation initiatives are extending electronic medical records already adopted by a large majority of provincial hospitals and digital infrastructure, with progress concentrated in major cities.',
      },
      {
        icon: Network,
        title: 'Digital Health Adoption',
        text: 'A national telehealth network connects grassroots clinics with specialist hospitals, while private providers and a growing number of digital-health startups introduce telemedicine, appointment and patient-engagement platforms.',
      },
      {
        icon: Activity,
        title: 'Diagnostics Digitalisation',
        text: 'Digital tools are gradually being adopted across diagnostics and laboratory networks to improve turnaround and connectivity with referring providers.',
      },
      {
        icon: ShieldCheck,
        title: 'Data Infrastructure Development',
        text: 'National digital-health infrastructure is still developing, with interoperability between public and private systems an ongoing policy focus.',
      },
    ],
    investmentAreas: [
      {
        icon: Building2,
        title: 'Private Hospital Capacity',
        text: 'Continued private hospital and clinic expansion in major cities remains a leading investment theme as urban demand grows.',
      },
      {
        icon: LineChart,
        title: 'Medical Devices and Pharmaceuticals',
        text: 'Rising healthcare spending and chronic-disease prevalence are driving sustained demand for medical devices and pharmaceuticals.',
      },
      {
        icon: Network,
        title: 'Digital Health and Diagnostics',
        text: 'Digital-health platforms and modernising diagnostics networks are attracting growing investment and partnership interest.',
      },
    ],
    considerations: [
      {
        title: 'Public Hospital Overcrowding',
        text: 'High patient volumes at major public hospitals remain a persistent capacity and quality-of-access challenge.',
      },
      {
        title: 'Urban-Rural Disparity',
        text: 'Healthcare capacity and digital maturity are concentrated in major cities, with meaningful gaps in provincial and rural access.',
      },
      {
        title: 'Regulatory Navigation',
        text: 'Foreign entrants typically need strong local partnerships to navigate licensing, registration and insurance-reimbursement processes.',
      },
    ],
    relatedSegmentTitles: [
      'Public-system patients',
      'Prevention and primary-care reform participants',
      'Insured private-care users',
    ],
    relatedSolutionTitles: [
      'Provider Landscape Research',
      'Healthcare Market Strategy',
      'Investment And Partnership Research',
    ],
    relatedInsightTitles: [
      "Vietnam's Private Hospital Chainization",
      'Southeast Asia Healthcare Sector Outlook',
      'Digital Health And AI In Southeast Asia Care Delivery',
    ],
  },
  {
    slug: 'indonesia-healthcare',
    countryName: 'Indonesia',
    countryCode: 'ID',
    flag: '🇮🇩',
    eyebrow: 'Indonesia Healthcare Market',
    themeLine: 'Healthcare Access, Capacity Expansion and Digital Scale',
    image: 'https://images.unsplash.com/photo-1696832204235-5676c7ee9105?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'High-rise buildings along the waterfront in Indonesia',
    keyStats: [
      { value: 287, suffix: 'M+', label: 'Population (2025)' },
      { value: 17000, suffix: '+', label: 'Islands across the archipelago' },
      { value: 60, suffix: '%', label: 'Urbanisation rate' },
    ],
    heroTitle: 'Healthcare Industry and Market Outlook in Indonesia',
    heroDescription:
      "Indonesia's healthcare market is defined by scale and geography: a very large population covered through the national BPJS Kesehatan insurance scheme, spread across thousands of islands with uneven provider density. Expanding hospital capacity, growing private healthcare, and digital health are central to closing access gaps between urban centres and outer regions.",
    metaTitle:
      'Indonesia Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "Analysis of Indonesia's national health-insurance system, hospital capacity expansion, private healthcare growth, digital health at scale, and market-entry considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: "Jaminan Kesehatan Nasional, administered by BPJS Kesehatan, is one of the largest single-payer national health-insurance schemes in the world by enrolment, covering a very large share of the population. Indonesia's population exceeded 287 million in 2025, spread across more than seventeen thousand islands, with urbanisation at roughly 60% and the population aged 60 and above projected to exceed 19% by 2045.",
      },
      {
        title: 'Provider Landscape',
        text: "Puskesmas primary-care centres and public hospitals anchor access nationally, while private hospital groups are expanding fastest in Java's major cities.",
      },
      {
        title: 'Digital Health',
        text: "National digital-health platforms have been developed to extend access and coordination across Indonesia's dispersed geography, positioning digital tools as an access-equity tool, not only a convenience feature.",
      },
      {
        title: 'Regulatory Environment',
        text: 'The Ministry of Health and BPOM (the national drug and food agency) set facility, pharmaceutical and device requirements, with recent health-sector legislation reshaping parts of the regulatory landscape.',
      },
    ],
    overview: [
      'Jaminan Kesehatan Nasional (JKN), the national health-insurance programme administered by BPJS Kesehatan, covers a very large share of the population and is among the largest single-payer schemes globally by enrolment. Primary care is delivered through a national network of Puskesmas community health centres, with public and increasingly private hospitals providing secondary and tertiary care.',
      "Indonesia's geography more than seventeen thousand islands makes provider density and access highly uneven. Java's major cities, particularly Jakarta, concentrate the country's most advanced hospital capacity and private healthcare investment, while many outer provinces face materially lower provider density and longer travel times to specialist care.",
      'Private hospital groups are expanding, particularly in and around major urban centres, serving BPJS patients seeking faster access alongside a growing base of private-pay and corporate-insured patients. Diagnostics and medical-device distribution are similarly concentrated in urban markets but expanding outward as hospital networks grow.',
      "Given Indonesia's scale and geographic fragmentation, digital health is treated less as a convenience layer and more as core access infrastructure supporting telemedicine, referral coordination and data-sharing across a system where physical provider density alone cannot close access gaps. Market entry typically requires engagement with BPJS Kesehatan's reimbursement framework alongside the Ministry of Health and BPOM's regulatory processes.",
    ],
    demandDrivers: [
      {
        icon: UsersRound,
        title: 'Population Scale',
        text: "Indonesia's very large population, combined with near-universal insurance enrolment through BPJS Kesehatan, underpins sustained aggregate demand growth.",
      },
      {
        icon: Globe2,
        title: 'Geographic Access Gaps',
        text: "Uneven provider density across Indonesia's islands is driving demand for capacity expansion and access-extending digital and logistics solutions.",
      },
      {
        icon: Building2,
        title: 'Private Hospital Expansion',
        text: 'Private hospital groups are expanding capacity in major cities to serve both insured and private-pay patients.',
      },
      {
        icon: Activity,
        title: 'Chronic Disease Growth',
        text: 'Rising rates of diabetes, cardiovascular disease and other non-communicable conditions are increasing demand for ongoing chronic-care management.',
      },
    ],
    providerLandscape: [
      {
        title: 'Puskesmas primary-care network',
        text: 'A nationwide network of community health centres delivers primary care and serves as the main access point for most BPJS-covered patients.',
      },
      {
        title: 'Public hospitals',
        text: 'Public hospitals provide secondary and tertiary care and carry a large share of BPJS-funded inpatient volume.',
      },
      {
        title: 'Private hospital groups',
        text: "Siloam Hospitals, Hermina Hospitals, Mitra Keluarga and Mayapada Healthcare operate Indonesia's largest private hospital networks, concentrated in Java's major cities and expanding into secondary cities to serve both BPJS and private-pay patients.",
      },
      {
        title: 'Diagnostics and device distribution',
        text: 'An active but geographically concentrated diagnostics and medical-device distribution sector supports urban hospital networks.',
      },
    ],
    regulatory: [
      'Healthcare facilities, pharmaceuticals and medical devices are regulated primarily through the Ministry of Health and BPOM (the National Agency of Drug and Food Control), with facility licensing processed through Indonesia’s Online Single Submission system and hospitals classified by service capability. Health Law No. 17 of 2023 consolidated Indonesia’s healthcare legal framework, liberalised foreign participation in hospitals, and simplified licensing for foreign medical specialists.',
      "BPJS Kesehatan's reimbursement framework is central to hospital and provider economics, since a very large share of patient volume nationally is BPJS-funded understanding its tariff and coverage structure is typically a prerequisite for provider and payer strategy.",
      "Indonesia's health-sector regulatory framework continues to evolve specific licensing, foreign-investment and reimbursement requirements should be validated directly with the relevant Indonesian authority before market-entry decisions.",
    ],
    digitalHealth: [
      {
        icon: Network,
        title: 'National Digital Health Platforms',
        text: 'SATUSEHAT, Indonesia’s national digital-health platform, has connected a large majority of hospitals and primary-care facilities to a shared health-data ecosystem, aiming to extend referral coordination, data-sharing and telemedicine access across Indonesia’s dispersed geography.',
      },
      {
        icon: Globe2,
        title: 'Telemedicine for Access',
        text: 'Telemedicine plays an outsized access-equity role in Indonesia, extending specialist consultation to areas with limited local provider density.',
      },
      {
        icon: Building2,
        title: 'Hospital Digitalisation',
        text: 'Hospital information systems and digital records are expanding fastest in major private and public hospitals in urban centres.',
      },
      {
        icon: ShieldCheck,
        title: 'Health-Data Infrastructure',
        text: 'Building interoperable, nationally scalable health-data infrastructure remains an active and long-term policy priority.',
      },
    ],
    investmentAreas: [
      {
        icon: Building2,
        title: 'Hospital Capacity Expansion',
        text: "Hospital capacity expansion, particularly outside Java's most saturated urban centres, is a significant long-term investment theme.",
      },
      {
        icon: Network,
        title: 'Digital Health at Scale',
        text: "Indonesia's geography and population scale make digital-health platforms with genuine national reach a distinct investment opportunity.",
      },
      {
        icon: LineChart,
        title: 'Medical Devices and Diagnostics',
        text: 'Growing hospital networks and chronic-disease demand are driving distribution and investment opportunities in medical devices and diagnostics.',
      },
    ],
    considerations: [
      {
        title: 'Geographic Fragmentation',
        text: "Uneven provider density across Indonesia's islands makes national scaling materially harder than in more geographically compact markets.",
      },
      {
        title: 'Specialist Shortages',
        text: 'Specialist-physician availability outside major cities remains a persistent constraint on care quality and access.',
      },
      {
        title: 'BPJS Reimbursement Dynamics',
        text: 'Provider economics are closely tied to BPJS Kesehatan tariff and coverage policy, which can shift and affect hospital and provider financial models.',
      },
    ],
    relatedSegmentTitles: [
      'Public-system patients',
      'Prevention and primary-care reform participants',
      'Insured private-care users',
    ],
    relatedSolutionTitles: [
      'Healthcare Market Strategy',
      'Digital Health Intelligence',
      'Provider Landscape Research',
    ],
    relatedInsightTitles: [
      "Indonesia's SATUSEHAT And The Archipelago Access Gap",
      'Digital Health And AI In Southeast Asia Care Delivery',
      'Southeast Asia Healthcare Sector Outlook',
    ],
  },
  {
    slug: 'philippines-healthcare',
    countryName: 'Philippines',
    countryCode: 'PH',
    flag: '🇵🇭',
    eyebrow: 'Philippines Healthcare Market',
    themeLine: 'Healthcare Access, Private Growth and Digital Expansion',
    image: 'https://images.unsplash.com/photo-1598258710957-db8614c2881e?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'City skyline under a blue sky in the Philippines',
    heroTitle: 'Healthcare Industry and Market Outlook in the Philippines',
    heroDescription:
      'The Philippines combines a national health-insurance programme administered by PhilHealth with a significant private hospital sector concentrated in Metro Manila and other major urban centres. Healthcare access remains uneven across a geographically dispersed archipelago, and digital health and telemedicine are increasingly positioned as tools to extend reach beyond the largest cities.',
    metaTitle:
      'Philippines Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "Analysis of the Philippines' public and private healthcare mix, PhilHealth coverage, private hospital growth, digital health and telemedicine, and market-entry considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: 'Healthcare access in the Philippines runs through a mix of public facilities and PhilHealth, the national health-insurance programme, alongside a substantial private hospital and clinic sector, particularly in Metro Manila.',
      },
      {
        title: 'Provider Landscape',
        text: "Private hospitals are concentrated in major urban centres, while public hospitals and rural health units carry much of the access burden across the country's many islands and provinces.",
      },
      {
        title: 'Digital Health',
        text: 'Telemedicine and digital-health platforms have expanded in recent years, often positioned specifically to reach patients in areas with limited nearby specialist care.',
      },
      {
        title: 'Demand Drivers',
        text: 'Population growth, urban healthcare concentration, and a rising chronic-disease burden are among the structural factors shaping demand; specific figures should be validated independently given how quickly this market can shift.',
      },
    ],
    overview: [
      'Healthcare delivery in the Philippines involves both public and private tracks. Public facilities and PhilHealth, the national health-insurance corporation, provide a coverage and access baseline, while a substantial private hospital and clinic sector concentrated in Metro Manila and other major cities serves patients able to pay out of pocket or through private insurance and employer-sponsored benefits.',
      'Healthcare access is not evenly distributed across the archipelago. Urban centres, particularly Metro Manila, concentrate the most advanced private hospital capacity and specialist care, while many provincial and island communities rely more heavily on public facilities and rural health units, with longer travel times to specialist or tertiary care.',
      'Digital health and telemedicine have grown as tools to address this geographic gap, extending consultation and referral access to areas with limited nearby specialist density a pattern broadly consistent with how digital health is being used across other geographically dispersed Southeast Asian markets.',
      "The healthcare research base available to this site is currently less developed for the Philippines than for several other Southeast Asian markets covered here. This page is intentionally kept qualitative rather than citing specific figures, regulatory provisions or market-size estimates; organizations evaluating the Philippine healthcare market should treat this as a starting orientation and validate current conditions, regulatory requirements and data directly with primary sources before making market-entry or investment decisions.",
    ],
    demandDrivers: [
      {
        icon: UsersRound,
        title: 'Population Scale',
        text: 'A large and still-growing population underpins long-run aggregate healthcare demand across both public and private systems.',
      },
      {
        icon: Building2,
        title: 'Urban Healthcare Concentration',
        text: 'Healthcare investment and specialist capacity remain concentrated in Metro Manila and a small number of other major cities.',
      },
      {
        icon: Activity,
        title: 'Chronic Disease Burden',
        text: 'As in much of the region, rising chronic-disease prevalence is gradually shifting demand toward ongoing disease management rather than episodic care alone.',
      },
      {
        icon: Network,
        title: 'Digital Health Expansion',
        text: 'Telemedicine and digital-health platforms are expanding specifically to reach patients outside major urban centres.',
      },
    ],
    providerLandscape: [
      {
        title: 'Private hospitals in major cities',
        text: "Private hospitals, concentrated in Metro Manila and other major urban centres, provide much of the country's advanced and specialist care capacity.",
      },
      {
        title: 'Public hospitals and rural health units',
        text: 'Public hospitals and rural health units extend access into provincial and island communities, though capacity and specialist availability vary significantly by location.',
      },
      {
        title: 'Primary and community clinics',
        text: 'A broad base of primary-care and community clinics forms the first point of contact for most patients outside major hospital catchments.',
      },
      {
        title: 'Digital and telehealth providers',
        text: 'A growing set of telehealth platforms and digital-health providers is positioned specifically to extend specialist access across the islands.',
      },
    ],
    regulatory: [
      'Healthcare facilities, pharmaceuticals and medical devices in the Philippines are regulated through the Department of Health and the Food and Drug Administration, with PhilHealth governing national health-insurance coverage and reimbursement rules.',
      'This page intentionally avoids citing specific regulatory provisions, licensing timelines or reimbursement figures, since the research available to this site is not yet deep enough to state them with confidence. Anyone evaluating market entry should confirm current requirements directly with the Department of Health, the FDA, and PhilHealth, and consider engaging local regulatory counsel.',
    ],
    digitalHealth: [
      {
        icon: Globe2,
        title: 'Telehealth Across the Islands',
        text: 'Telehealth has been adopted specifically to bridge distance between patients in outer islands and specialist care concentrated in major cities.',
      },
      {
        icon: Building2,
        title: 'Private Hospital Technology',
        text: 'Larger private hospital groups have invested in digital patient engagement and hospital information systems, generally ahead of much of the public system.',
      },
      {
        icon: Network,
        title: 'Digital Patient Engagement',
        text: 'Appointment, teleconsultation and patient-engagement platforms have grown, particularly among urban and private-sector patients.',
      },
    ],
    investmentAreas: [
      {
        icon: Globe2,
        title: 'Telehealth and Digital Access',
        text: 'Platforms extending specialist access to underserved islands and provinces represent a distinct and clearly reasoned opportunity area.',
      },
      {
        icon: Building2,
        title: 'Private Hospital Capacity',
        text: 'Continued private hospital investment in major urban centres remains a visible growth theme.',
      },
      {
        icon: LineChart,
        title: 'Diagnostics',
        text: 'Diagnostics capacity outside major cities appears to be an area of unmet demand, though this should be validated with current market data.',
      },
    ],
    considerations: [
      {
        title: 'Geographic Fragmentation',
        text: "The archipelago's geography makes consistent nationwide healthcare access and provider-network scaling genuinely difficult.",
      },
      {
        title: 'Overseas Healthcare Workforce Dynamics',
        text: 'The Philippines is a major source of internationally trained healthcare workers, which has implications for domestic workforce availability worth factoring into any provider-capacity strategy.',
      },
      {
        title: 'Data and Research Depth',
        text: "Current, verified market data for the Philippine healthcare sector is more limited within this site's research base than for several neighbouring markets figures and regulatory specifics should be independently validated before decisions are made.",
      },
    ],
    relatedSegmentTitles: [
      'Public-system patients',
      'Prevention and primary-care reform participants',
    ],
    relatedSolutionTitles: ['Healthcare Market Strategy', 'Digital Health Intelligence'],
    relatedInsightTitles: ['Digital Health And AI In Southeast Asia Care Delivery'],
  },
  {
    slug: 'myanmar-healthcare',
    countryName: 'Myanmar',
    countryCode: 'MM',
    flag: '🇲🇲',
    eyebrow: 'Myanmar Healthcare Market',
    themeLine: 'Healthcare Access and Provider Capacity Under Evolving Conditions',
    image: 'https://images.unsplash.com/photo-1585726685010-1b5c0d80aed7?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Gold pagoda under white clouds in Myanmar',
    heroTitle: 'Healthcare Industry and Market Outlook in Myanmar',
    heroDescription:
      'Healthcare accessibility and provider capacity in Myanmar remain important considerations for any organization evaluating this market. Current operating conditions can vary significantly and require market-specific validation; this page provides a structural orientation to the healthcare system rather than current market figures or forecasts.',
    metaTitle:
      'Myanmar Healthcare Market Research & Industry Outlook | HealthCare Industry Research',
    metaDescription:
      "A cautious, qualitative orientation to Myanmar's healthcare system structure, provider capacity, medical-supply distribution and market-access considerations.",
    snapshot: [
      {
        title: 'Healthcare System',
        text: "Myanmar's healthcare system includes public facilities operated by the Ministry of Health and Sports alongside a private-clinic and hospital sector; capacity and accessibility vary significantly by region.",
      },
      {
        title: 'Provider Landscape',
        text: 'Provider capacity is concentrated in larger cities, with materially more limited access in many other areas; current facility-level detail should be validated directly given how quickly conditions can change.',
      },
      {
        title: 'Regulatory Environment',
        text: 'Healthcare, pharmaceutical and medical-device regulation sits with national authorities; current requirements and operating conditions require direct, up-to-date verification before any market activity.',
      },
      {
        title: 'Demand Drivers',
        text: 'Underlying demand for basic and specialist healthcare access, medicines and medical supplies remains significant, though this page avoids citing specific figures given current data limitations.',
      },
    ],
    overview: [
      'Healthcare accessibility and provider capacity remain important considerations for any organization evaluating this market. Current operating conditions can vary significantly, and market conditions and data referenced elsewhere may not reflect the present situation. This page presents a general structural orientation rather than specific statistics, market-size estimates, or regulatory detail.',
      "Myanmar's healthcare system includes public hospitals and clinics operated under the Ministry of Health and Sports, alongside a private healthcare sector that varies in scale and capacity by region. Provider density and healthcare infrastructure are generally more developed in larger urban centres than in many other parts of the country, and distribution of medicines, medical devices and diagnostic capacity broadly follows the same pattern.",
      'Given current data limitations and the pace at which market conditions can change, organizations considering the Myanmar healthcare market should treat this page as a starting reference only, and commission current, market-specific validation including direct engagement with relevant authorities and on-the-ground partners before making operational or investment decisions.',
    ],
    demandDrivers: [
      {
        icon: UsersRound,
        title: 'Basic and Specialist Access',
        text: 'Demand for basic healthcare access, alongside specialist and diagnostic capacity, remains an important underlying consideration across much of the country.',
      },
      {
        icon: Building2,
        title: 'Urban-Concentrated Capacity',
        text: 'Provider and diagnostic capacity is more developed in larger urban centres, shaping where near-term demand can realistically be served.',
      },
      {
        icon: ClipboardCheck,
        title: 'Medicines and Medical Supply Access',
        text: 'Consistent access to medicines and medical supplies remains a relevant consideration for healthcare planning and distribution strategy.',
      },
    ],
    providerLandscape: [
      {
        title: 'Public hospitals and clinics',
        text: 'Public facilities operated under the Ministry of Health and Sports provide a national base of care, with capacity varying by region.',
      },
      {
        title: 'Private clinics and hospitals',
        text: 'A private healthcare sector operates alongside the public system, concentrated in larger cities.',
      },
      {
        title: 'Medical-supply distribution',
        text: 'Distribution of medicines and medical devices generally follows the same urban-concentration pattern as broader provider capacity.',
      },
    ],
    regulatory: [
      'Healthcare, pharmaceutical and medical-device activity in Myanmar sits under national regulatory authorities. Given how much current operating conditions can vary, this page does not cite specific licensing provisions, timelines or regulatory figures.',
      'Anyone evaluating market entry or partnership activity in Myanmar should treat regulatory and operating conditions as requiring direct, current, market-specific validation rather than relying on general reference material, including this page.',
    ],
    digitalHealth: [
      {
        icon: Network,
        title: 'Digital Health Development',
        text: 'Digital-health and telemedicine tools are present in parts of the market, though adoption and infrastructure maturity vary and should be assessed on a current, market-specific basis.',
      },
      {
        icon: Activity,
        title: 'Distribution and Supply Coordination',
        text: 'Digital tools supporting medical-supply coordination and distribution are a relevant area of interest given broader access considerations.',
      },
    ],
    investmentAreas: [
      {
        icon: ClipboardCheck,
        title: 'Medical Supply and Distribution',
        text: 'Medicines and medical-device distribution remain a relevant area of interest, subject to current, market-specific due diligence.',
      },
      {
        icon: Building2,
        title: 'Provider Capacity Development',
        text: 'Provider-capacity development, particularly outside the most urban-concentrated areas, is a plausible long-term area of interest, though near-term feasibility depends heavily on current, market-specific conditions.',
      },
    ],
    considerations: [
      {
        title: 'Market Conditions Vary Significantly',
        text: 'Operating conditions in Myanmar can vary significantly and change quickly; general reference material, including this page, should not substitute for current, market-specific validation.',
      },
      {
        title: 'Data Limitations',
        text: "Reliable, up-to-date market data for Myanmar's healthcare sector is more limited than for other markets covered on this site, and figures should not be assumed stable over time.",
      },
      {
        title: 'Provider Capacity Gaps',
        text: 'Provider capacity and healthcare accessibility outside major urban centres remain important considerations for any market-entry evaluation.',
      },
    ],
    relatedSegmentTitles: ['Public-system patients'],
    relatedSolutionTitles: ['Healthcare Market Strategy', 'Regulatory And Policy Monitoring'],
    relatedInsightTitles: ['Southeast Asia Healthcare Sector Outlook'],
  },
];

export function getMarketBySlug(slug: string) {
  return markets.find((market) => market.slug === slug);
}

export function otherMarkets(slug: string) {
  return markets.filter((market) => market.slug !== slug);
}
