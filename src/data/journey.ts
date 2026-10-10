export interface JourneyLink {
  label: string;
  href: string;
}

export interface JourneyEntry {
  year: string;
  org: string;
  title: string;
  body: string;
  points?: string[];
  links?: JourneyLink[];
}

/** Oldest to newest. */
export const journey: JourneyEntry[] = [
  {
    year: '2007–12',
    org: 'University of Texas at Brownsville',
    title: 'Physics, pointed at the sky',
    body: 'A B.S. in physics, with research in gravitational-wave astronomy: a paper on how LISA might find the white-dwarf pairs behind Type Ia supernovae, then a NASA internship that taught a galaxy catalogue to keep up with next-generation LIGO.',
    points: [
      '2011: co-authored a paper on detecting double-degenerate supernova progenitors, with A. Stroeer and M. Benacquista (IAU Symposium 281)',
      '2012: NASA internship under Jonah Kanner, presented as a virtual poster and featured in IEEE Earthzine',
    ],
    links: [
      { label: 'Read the abstract', href: '/archive#arxiv' },
      { label: 'The preserved article', href: '/archive#earthzine' },
    ],
  },
  {
    year: '2012–17',
    org: 'University of Kansas · Ultrafast Laser Lab',
    title: 'Timing electrons in atomic layers',
    body: 'A Ph.D. in Hui Zhao’s group, watching electrons and holes cross between atomically thin semiconductors on timescales of trillionths of a second.',
    points: [
      'Sixteen papers, 2014–2018, six of them as first author',
      'Published in ACS Nano, Nano Letters and Physical Review Materials, plus a feature article on the field',
    ],
    links: [{ label: 'All the papers', href: '/publications' }],
  },
  {
    year: '2017–18',
    org: 'AP Physics teacher',
    title: 'A year in the classroom',
    // TODO: add the school or district, and anything you are proud of (results, course design).
    body: 'A full school year teaching AP Physics. Same physics, new audience: students meeting it for the first time.',
  },
  {
    year: '2018–20',
    org: 'Medical College of Wisconsin · Radiation Oncology',
    title: 'Teaching a model to judge radiation plans',
    // TODO: add the official name of the medical physics program, and whether it is CAMPEP-accredited.
    body: 'Postdoctoral research on online adaptive radiotherapy, where a clinician has minutes to choose a plan. My models scored and ranked plans in seconds and checked automatically drawn contours. Alongside the research, I completed two years of medical physics training.',
    points: [
      'Plan-quality models reached an average test AUC of up to 0.95 on 200 prostate plans',
      'Work presented at AAPM 2019, AAPM 2020 and ASTRO 2020',
    ],
    links: [{ label: 'The research in detail', href: '/mcw' }],
  },
  {
    year: '2020–23',
    org: 'ExxonMobil · Data science, cloud and backend',
    title: 'Building for scientists',
    // TODO: add exact dates for each stage if you want them shown.
    body: 'I joined in July 2020 as a data scientist, then moved into development: about two years helping teams across the company build cloud applications, with a stretch back in data science and a turn on the backend. Many of the people I built for were scientists in practice, such as well engineers and geophysicists, who needed their analyses out of the lab and into their users’ hands.',
  },
  {
    year: '2023–now',
    org: 'ExxonMobil · Freight Fusion',
    title: 'Freight data, and the team behind it',
    // TODO: add measurable outcomes (users, systems, impact) if you can share them.
    body: 'Since around 2023 I have built freight applications on shipping data: first as a developer, and since February 2026 as lead of Freight Fusion. I work every day with freight analysts, traders, book leads and quants.',
    points: [
      'Lead developer since February 2026',
      'A development team across Brazil, London and Houston',
    ],
  },
];
