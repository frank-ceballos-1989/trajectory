import { site } from './site';

/**
 * MCW-era research record, built from a public-source dossier Frank supplied (compiled October 9, 2026).
 * VERIFIED against a primary record: the 2019 IJROBP DOI resolves to the Elsevier article page with this title.
 * Everything else is summarised from the dossier, not reproduced from the original abstracts.
 * Individual conference records had no stable URLs, so those items link out through the closing "records" list.
 */

const doi = { label: 'Publisher record (DOI)', href: 'https://doi.org/10.1016/j.ijrobp.2019.06.375' };

export const mcwIntro = {
  institution: 'Medical College of Wisconsin',
  department: 'Radiation Oncology',
  period: 'July 2018 to July 2020',
  compiled: 'October 9, 2026',
  areas: 'Medical physics · machine learning · online adaptive radiotherapy · plan quality · auto-segmentation QA',
  lede: 'How do you judge, and adapt, a patient’s radiation treatment plan in the few minutes available while they are on the table?',
  paragraphs: [
    'I joined the Department of Radiation Oncology as a postdoctoral fellow in July 2018, after a Ph.D. spent timing electrons and a year teaching AP Physics. The problem was clinical. In online adaptive radiotherapy the patient’s anatomy has changed since the plan was made, so a new plan has to be produced or chosen on the spot, and comparing candidates by hand is slow and subjective.',
    'I came at it from two sides: models that score and rank treatment plans from their three-dimensional dose distributions, and checks on the automatically drawn contours those plans depend on. Alongside the research, I completed two years of CAMPEP-accredited medical physics training at the college.',
  ],
};

export const workNote =
  'Summaries of the question, method and reported findings, not the original abstracts. Most of these are conference contributions; the 2019 journal item is a short abstract in a supplement.';

export interface McwWork {
  id: string;
  date: string;
  kind: string;
  venue: string;
  detail?: string;
  title: string;
  question: string;
  summary: string[];
  findings?: string[];
  table?: { caption: string; head: [string, string]; rows: [string, string][]; note?: string };
  why: string;
  authors: string;
  link?: { label: string; href: string };
}

export const works: McwWork[] = [
  {
    id: 'plan-quality-2018',
    date: 'October 2018',
    kind: 'Conference contribution',
    venue: 'Medical College of Wisconsin',
    title: 'An automated plan-quality evaluation based on 3D dose features for online adaptive replanning',
    question: 'Can the quality of a radiation treatment plan be evaluated automatically from features of its three-dimensional dose distribution?',
    summary: [
      'Online adaptive radiation therapy needs plans generated or adjusted rapidly, while conventional evaluation can take substantial clinician and physicist time. This project explored using three-dimensional dose features to automate plan-quality assessment and reduce repeated manual comparison.',
      'It set the strategy for what followed: extract quantitative information from treatment plans, then use computational models to find the plans likely to meet clinical requirements.',
    ],
    why: 'An early step in turning plan evaluation from a manual task into a quantitative, automatable one.',
    authors: 'Frank Ceballos, Jingqiao Zhang, Haidy Gerges Nasief, Sara Lim, and collaborators, including Allen Li.',
  },
  {
    id: 'plan-ranking-2019',
    date: 'July 2019',
    kind: 'Conference presentation',
    venue: '61st Annual Meeting, American Association of Physicists in Medicine (AAPM)',
    title: 'Automated Plan Quality Ranking for Online Adaptive Radiation Therapy',
    question: 'Can machine learning rank alternative treatment plans quickly and consistently enough to assist online adaptive radiotherapy?',
    summary: [
      'Manually comparing plans is subjective and time-consuming. We extracted 39 dose-volume parameters and used recursive feature elimination with random-forest models to find the informative ones.',
      'Models were trained on clinician-assigned labels, acceptable versus unacceptable and superior versus inferior, and evaluated on 100 pairs of plans built from daily CT scans of 20 prostate cancer patients.',
    ],
    findings: [
      'Higher model scores tended to match better target coverage and/or better sparing of normal tissue.',
      'When two plans’ scores differed by more than 20 points, the model identified the clinician-preferred plan 90% of the time in the reported comparison.',
      'Evaluating and comparing plans took about 10 seconds on the reported computer configuration.',
    ],
    why: 'A way to speed up plan comparison where clinicians have very little time to decide.',
    authors: 'Frank Ceballos, Sunhwan Lim, Z. Wang, Jiandong Zhang, Haidy Nasief, Ergun Ahunbay, and X. Allen Li.',
  },
  {
    id: 'plan-quality-2019',
    date: 'September 2019',
    kind: 'Conference abstract, journal supplement',
    venue: 'International Journal of Radiation Oncology, Biology, Physics',
    detail: '105(1), S251–S252',
    title: 'A Machine Learning Based Approach for Fast and Automated Plan Quality Evaluation for Online Adaptive Radiation Therapy',
    question: 'Can machine learning produce an objective, reproducible quality score for a treatment plan quickly enough to support online adaptive radiotherapy?',
    summary: [
      'This work widened the approach to three kinds of information drawn from three-dimensional dose distributions: more than 30 conventional dose-volume parameters, 60 non-conventional parameters designed to capture dose hot spots and cold spots, and 320 radiomic features.',
      'Recursive feature elimination and random-forest regression selected informative features and built an ensemble of predictive models, trained and evaluated on 200 plans from planning and daily CT images of 20 prostate cancer patients, with a physician’s acceptable / not-acceptable call as the reference.',
    ],
    findings: ['A trained model could assign a quality score to a new plan in about 60 seconds on the specified hardware.'],
    table: {
      caption: 'Average test-set area under the ROC curve (AUC), as reported in the abstract',
      head: ['Feature category', 'Average AUC'],
      rows: [
        ['Conventional dose-volume parameters', '0.95 ± 0.02'],
        ['Non-conventional parameters', '0.87 ± 0.04'],
        ['Radiomic features', '0.93 ± 0.03'],
        ['Combined best-performing features', '0.95 ± 0.03'],
      ],
      note: 'These numbers describe one dataset and validation procedure: 200 plans from 20 patients. They do not show equal performance in every clinical setting.',
    },
    why: 'The best-documented result of the MCW work: quantitative evidence that machine learning can assist plan evaluation within online-adaptive time limits.',
    authors: 'F. Ceballos, S. N. Lim, Z. Wang, J. Zhang, H. Nasief, E. E. Ahunbay, and A. Li.',
    link: doi,
  },
  {
    id: 'contour-validation-2020',
    date: 'July 2020',
    kind: 'Conference contribution',
    venue: 'AAPM 2020',
    title: 'A Generalizable Contour validation method using Deep Learning-based Image Classification',
    question: 'Can a deep-learning image classifier help decide whether an automatically generated anatomical contour is reliable?',
    summary: [
      'Treatment planning depends on accurate contours drawn on medical images, and errors in automatic contours can propagate into dose calculations and treatment decisions.',
      'This contribution investigated a deep-learning image-classification approach to contour validation, with an emphasis on generalizability. The aim is to flag the contours that deserve a closer look rather than requiring every one to be reviewed by hand.',
    ],
    why: 'It moves the automation from judging the plan to judging the anatomy the plan is built on, which matters most when sessions are short and images keep changing.',
    authors: 'Ying Zhang, Frank Ceballos, Ying Liang, and collaborators, including X. Allen Li.',
  },
  {
    id: 'autoseg-qa-2020',
    date: 'October 2020',
    kind: 'Conference contribution',
    venue: 'ASTRO 2020',
    title: 'An Independent and Automatic Quality Assurance Tool for Auto-Segmentation',
    question: 'Can an independent automated tool assess the quality of contours produced by an auto-segmentation system?',
    summary: [
      'Auto-segmentation saves effort but is not always right. An independent quality-assurance tool could catch unreliable results and direct human attention to the cases that need it.',
      'The distinguishing idea is independence: the tool evaluates segmentation reliability instead of assuming the original algorithm is correct.',
    ],
    why: 'With the contour-validation work and the plan-quality studies, it covers three stages of an adaptive workflow: drawing the anatomy, validating it, and evaluating the plan.',
    authors: 'Ying Zhang, Frank Ceballos, Tia Plautz, and X. Allen Li.',
  },
];

export const sources = [
  { t: 'ResearchGate', d: 'Research profile, with publications and affiliations', label: 'Open profile', href: site.links.researchgate },
  { t: 'Publisher record', d: 'The 2019 plan-quality abstract, with full bibliographic details', label: 'DOI', href: doi.href },
  { t: 'Google Scholar', d: 'Search for citations and related work', label: 'Search', href: 'https://scholar.google.com/scholar?q=%22Frank+Ceballos%22+radiation+therapy' },
  { t: 'PubMed', d: 'Biomedical publication records', label: 'Search', href: 'https://pubmed.ncbi.nlm.nih.gov/?term=Ceballos+F%5BAuthor%5D' },
] as const;
