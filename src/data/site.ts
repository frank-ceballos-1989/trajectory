/**
 * Site-wide facts and the home-page copy.
 * Everything here comes from what Frank has told us or from sources checked along the way.
 * Search the project for TODO to find the details still missing.
 */
export const site = {
  name: 'Frank Ceballos',
  tagline: 'Physicist, now leading freight software.',
  description:
    'Frank Ceballos: physicist (Ph.D., University of Kansas), former radiation-oncology researcher at the Medical College of Wisconsin, and lead developer of Freight Fusion at ExxonMobil.',

  // TODO: add your real address. While this is empty the contact section shows links only.
  email: '',

  // Leave a value empty ('') to hide that link everywhere.
  links: {
    medium: 'https://medium.com/@frank-ceballos',
    researchgate: 'https://www.researchgate.net/profile/Frank-Ceballos',
    kuProfile: 'https://ultrafast.ku.edu/people/frank-ceballos',
    arxiv: 'https://arxiv.org/search/astro-ph?searchtype=author&query=Ceballos,+F',
    scholar: '', // TODO: paste your Google Scholar profile URL
    linkedin: '', // TODO: paste your LinkedIn URL
    github: '', // TODO: paste your GitHub URL
  },
} as const;

/** Section anchors on the home page, in reading order. */
export const nav = [
  { href: '/#about', label: 'About', n: '01' },
  { href: '/#journey', label: 'Journey', n: '02' },
  { href: '/#work', label: 'Work', n: '03' },
  { href: '/#contact', label: 'Contact', n: '04' },
] as const;

export const hero = {
  eyebrow: 'Physics · Medicine · Freight',
  lede: 'I measure things in motion: electrons, in trillionths of a second; radiation dose, in the minutes a patient is waiting; and now freight, on its way around the world.',
  facts: [
    { k: 'Now', v: 'Lead developer, Freight Fusion' },
    { k: 'Since 2020', v: 'ExxonMobil' },
    { k: 'Before', v: 'Physics Ph.D. and radiotherapy research' },
  ],
} as const;

export const about = {
  heading: 'Same question, new instrument.',
  paragraphs: [
    'Every place I have worked has asked some version of one thing: what is really happening, and how sure are we? In a laser lab it was where a charge went after light hit a material. In radiation oncology, whether a treatment plan was good enough to use in the minutes available. In freight, whether the number in front of a trader can be trusted.',
    'I am most useful between the people who ask those questions and the systems that answer them. At ExxonMobil I have built for well engineers, geophysicists, freight analysts, traders and quants: scientists in all but title, who needed their work out of a notebook and into other people’s hands.',
    'Today I lead the developers behind Freight Fusion, a team spread across Brazil, London and Houston. On freight data, I am the person people ask.',
  ],
  credentials: [
    { k: 'B.S.', v: 'Physics, University of Texas at Brownsville, 2012' },
    { k: 'Ph.D.', v: 'Physics, University of Kansas, 2017' },
    { k: 'Training', v: 'Medical physics, two years, Medical College of Wisconsin' },
  ],
} as const;
