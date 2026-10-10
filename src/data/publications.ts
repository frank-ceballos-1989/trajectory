/**
 * Publications as listed on https://ultrafast.ku.edu/people/frank-ceballos (VERIFIED).
 * DOIs and citation counts are intentionally omitted until verified.
 */
export interface Publication {
  id: string;
  year: number;
  title: string;
  authors: string[];
  venue: string;
  detail: string; // volume, pages
  first: boolean; // Frank is first author
}

export const publications: Publication[] = [
  {
    id: 'prm-2017',
    year: 2017,
    title: 'Separating Electrons and Holes by Monolayer Increments in van der Waals Heterostructures',
    authors: ['F. Ceballos', 'P. Zereshki', 'H. Zhao'],
    venue: 'Physical Review Materials',
    detail: '1, 044001',
    first: true,
  },
  {
    id: 'nl-2017-trilayer',
    year: 2017,
    title: 'Highly Efficient and Anomalous Charge Transfer in van der Waals Trilayer Semiconductors',
    authors: ['F. Ceballos', 'M.-G. Ju', 'S. D. Lane', 'X. C. Zeng', 'H. Zhao'],
    venue: 'Nano Letters',
    detail: '17, 1623–1628',
    first: true,
  },
  {
    id: 'afm-2017-review',
    year: 2017,
    title: 'Ultrafast Laser Spectroscopy of Two-Dimensional Materials Beyond Graphene (Feature Article)',
    authors: ['F. Ceballos', 'H. Zhao'],
    venue: 'Advanced Functional Materials',
    detail: '27, 1604509',
    first: true,
  },
  {
    id: 'nanoscale-2016-exciton',
    year: 2016,
    title: 'Exciton Formation in Monolayer of Transition Metal Dichalcogenides',
    authors: ['F. Ceballos', 'Q. Cui', 'M. Z. Bellus', 'H. Zhao'],
    venue: 'Nanoscale',
    detail: '8, 11681–11688',
    first: true,
  },
  {
    id: 'nanoscale-2015-ct',
    year: 2015,
    title: 'Probing Charge Transfer Excitons in a MoSe2–WS2 van der Waals Heterostructure',
    authors: ['F. Ceballos', 'M. Z. Bellus', 'H.-Y. Chiu', 'H. Zhao'],
    venue: 'Nanoscale',
    detail: '7, 17523–17528',
    first: true,
  },
  {
    id: 'acsnano-2014-separation',
    year: 2014,
    title: 'Ultrafast Charge Separation and Indirect Exciton Formation in a MoS2–MoSe2 van der Waals Heterostructure',
    authors: ['F. Ceballos', 'M. Z. Bellus', 'H.-Y. Chiu', 'H. Zhao'],
    venue: 'ACS Nano',
    detail: '8, 12717',
    first: true,
  },
  {
    id: 'nanoscale-2018-phosphorene',
    year: 2018,
    title: 'Photocarrier Dynamics in Monolayer Phosphorene and Bulk Black Phosphorus',
    authors: ['P. Zereshki', 'Y. Wei', 'F. Ceballos', 'M. Z. Bellus', 'S. D. Lane', 'S. Pan', 'R. Long', 'H. Zhao'],
    venue: 'Nanoscale',
    detail: '10, 11307–11313',
    first: false,
  },
  {
    id: 'nl-2017-homobilayer',
    year: 2017,
    title: 'Ultrafast Interlayer Electron Transfer in Incommensurate Transition Metal Dichalcogenide Homo-bilayers',
    authors: ['Y. Li', 'Q. Cui', 'F. Ceballos', 'S. D. Lane', 'Z. Qi', 'H. Zhao'],
    venue: 'Nano Letters',
    detail: '17, 6661',
    first: false,
  },
  {
    id: 'afm-2017-tungsten',
    year: 2017,
    title: 'Suppression of Defects and Deep Levels Using Isoelectronic Tungsten Alloying in Monolayer MoSe2',
    authors: ['X. Li', 'A. A. Puretzky', 'X. Sang', 'S. KC', 'M. Tian', 'F. Ceballos', 'M. Mahjouri-Samani', 'K. Wang', 'R. R. Unocic', 'H. Zhao', 'C. M. Rouleau', 'D. B. Geohegan', 'K. Xiao'],
    venue: 'Advanced Functional Materials',
    detail: '27, 1603805',
    first: false,
  },
  {
    id: 'nh-2017-type1',
    year: 2017,
    title: 'Type-I van der Waals Heterostructure Formed by MoS2 and ReS2 Monolayers',
    authors: ['M. Z. Bellus', 'M. Li', 'S. D. Lane', 'F. Ceballos', 'Q. Cui', 'X. C. Zeng', 'H. Zhao'],
    venue: 'Nanoscale Horizons',
    detail: '2, 31–36',
    first: false,
  },
  {
    id: '2dm-2016',
    year: 2016,
    title: 'Ultrafast Charge Transfer between MoTe2 and MoS2 Monolayers',
    authors: ['S. Pan', 'F. Ceballos', 'M. Z. Bellus', 'P. Zereshki', 'H. Zhao'],
    venue: '2D Materials',
    detail: '4, 015033',
    first: false,
  },
  {
    id: 'acsnano-2016-twisted',
    year: 2016,
    title: 'Interlayer Coupling in Twisted WSe2/WS2 Bilayer Heterostructures Revealed by Optical Spectroscopy',
    authors: ['K. Wang', 'B. Huang', 'M. Tian', 'F. Ceballos', 'M.-W. Lin', 'M. Mahjouri-Samani', 'A. Boulesbaa', 'A. Puretzky', 'C. Rouleau', 'M. Yoon', 'H. Zhao', 'K. Xiao', 'G. Duscher', 'D. Geohegan'],
    venue: 'ACS Nano',
    detail: '10, 6612–6622',
    first: false,
  },
  {
    id: 'nanoscale-2015-ws2',
    year: 2015,
    title: 'Spatiotemporal Dynamics of Excitons in Monolayer and Bulk WS2',
    authors: ['J. He', 'D. He', 'Y. Wang', 'Q. Cui', 'F. Ceballos', 'H. Zhao'],
    venue: 'Nanoscale',
    detail: '7, 9526',
    first: false,
  },
  {
    id: 'acsnano-2014-wse2',
    year: 2014,
    title: 'Transient Absorption Microscopy of Monolayer and Bulk WSe2',
    authors: ['Q. Cui', 'F. Ceballos', 'N. Kumar', 'H. Zhao'],
    venue: 'ACS Nano',
    detail: '8, 2970',
    first: false,
  },
  {
    id: 'nanoscale-2014-mose2',
    year: 2014,
    title: 'Exciton Diffusion in Monolayer and Bulk MoSe2',
    authors: ['N. Kumar', 'Q. Cui', 'F. Ceballos', 'D. W. He', 'Y. S. Wang', 'H. Zhao'],
    venue: 'Nanoscale',
    detail: '6, 4915',
    first: false,
  },
  {
    id: 'prb-2014',
    year: 2014,
    title: 'Exciton-exciton Annihilation in Monolayer MoSe2',
    authors: ['N. Kumar', 'Q. Cui', 'F. Ceballos', 'D. W. He', 'Y. S. Wang', 'H. Zhao'],
    venue: 'Physical Review B',
    detail: '89, 125427',
    first: false,
  },
];

export const scholarSearch = (title: string) =>
  `https://scholar.google.com/scholar?q=${encodeURIComponent(title.replace(/ \(Feature Article\)$/, ''))}`;
