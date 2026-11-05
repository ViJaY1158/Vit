// All site copy lives here so text can be updated without touching layout code.

export const company = {
  name: 'Vijay Innovation Technology',
  short: 'VIT',
  tagline: 'Manufacturing Brilliance, Engineered',
  since: 2003,
  email: 'info@vijayinnovation.com',
  phone: '+91 7760606070',
  phoneHref: 'tel:+917760606070',
  address:
    'No 2-258-58-2A, Katha No-52, Thigalarapalya Main Road, Karivobanahalli, Bengaluru - 560 058',
  mapsHref:
    'https://www.google.com/maps/search/?api=1&query=Thigalarapalya+Main+Road+Karivobanahalli+Bengaluru+560058',
  hours: 'Monday to Saturday, 9:00 AM - 6:00 PM',
  formUrl:
    'https://docs.google.com/forms/d/e/1FAIpQLScsLWC3sjfUzsR5pSFKqlG_X2eDxOOao3WJjmzXv8bzSooBdw/viewform?embedded=true',
};

export const nav = [
  { href: '#about', label: 'About' },
  { href: '#quality', label: 'Quality' },
  { href: '#machines', label: 'Machines' },
  { href: '#industries', label: 'Industries' },
  { href: '#process', label: 'Process' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#careers', label: 'Careers' },
];

export const stats = [
  { value: `${new Date().getFullYear() - 2003}+`, label: 'Years in precision manufacturing' },
  { value: 'ISO 9001', label: '2015 certified quality system' },
  { value: '3', label: 'CNC vertical machining centres' },
  { value: '6', label: 'Industry segments served' },
];

export const aboutPoints = [
  {
    icon: 'lucide:shield-check',
    title: 'Quality & Standards',
    text: 'We follow strict international quality standards, using advanced inspection methods to ensure reliable, precise, and globally competitive products always.',
  },
  {
    icon: 'lucide:handshake',
    title: 'Clientele & Partnerships',
    text: 'We serve reputed organizations across industries, offering customized solutions, fostering long-term collaborations, and delivering excellence, trust, and innovation consistently.',
  },
  {
    icon: 'lucide:badge-check',
    title: 'Certifications',
    text: 'ISO 9001:2015 Certified, MSME Registered, GST Registered.',
  },
];

export const qualityPolicy = [
  {
    icon: 'lucide:circle-check',
    title: 'Customer Satisfaction',
    text: 'Achieve total customer satisfaction through continuous improvement in all aspects of our operations.',
  },
  {
    icon: 'lucide:award',
    title: 'Customer Delight',
    text: 'Attain customer delight for the qualitative products delivered with the concept of "Under Commit and Over Deliver" policy.',
  },
  {
    icon: 'lucide:handshake',
    title: 'Partnership Approach',
    text: 'Partnering with customers in understanding & meeting their core critical quality requirements.',
  },
  {
    icon: 'lucide:refresh-cw',
    title: 'Continuous Improvement',
    text: 'Provide products/services with continuous improvement in processes with ongoing upgrades in technologies.',
  },
];

export const vision = [
  'To offer and assist complete solutions with built to spec concept.',
  'Becoming a leader in precision engineering and manufacturing solutions.',
  'Creating sustainable value for all our stakeholders through innovation and excellence.',
];

export const mission = [
  'Achieve by determination, devotion, dedication towards diversified thought process.',
  'Deliver innovative engineering solutions that exceed customer expectations.',
  'Foster a culture of continuous improvement and technological advancement.',
];

export const machines = [
  {
    name: 'Jyothi RDX-20',
    image: 'rdx20',
    specs: [
      ['Axis travel', 'X 800 · Y 510 · Z 510 mm'],
      ['Table size', '950 × 500 mm'],
      ['Spindle taper', 'BT40, belt drive'],
      ['Tool changer', 'Arm type, 20 tools'],
      ['Spindle power', '15.8 / 10.5 kW'],
      ['CNC controller', 'Siemens 828D'],
      ['Year', '2017'],
    ],
  },
  {
    name: 'STM VL-1200',
    image: 'vl1200',
    specs: [
      ['Make', 'Manford'],
      ['Axis travel', 'X 1200 · Y 610 · Z 610 mm'],
      ['Table size', '1300 × 600 mm'],
      ['Spindle taper', 'BT40, belt drive'],
      ['Tool changer', 'Arm type, 24 tools'],
      ['CNC controller', 'Mitsubishi M80'],
      ['Year', '2018'],
    ],
  },
  {
    name: 'STM VL-1050',
    image: 'vl1050',
    specs: [
      ['Axis travel', 'X 1020 · Y 610 · Z 610 mm'],
      ['Table size', '1150 × 600 mm'],
      ['Spindle taper', 'BT40, belt drive'],
      ['Tool changer', 'Arm type, 24 tools'],
      ['Spindle power', '7.5 / 11 kW'],
      ['Attachment', '4th axis rotary table'],
      ['Year', '2018'],
    ],
  },
] as const;

export const industries = [
  { icon: 'lucide:plane', title: 'Aerospace' },
  { icon: 'lucide:shield', title: 'Machine Guards' },
  { icon: 'lucide:network', title: 'Telecom & Network' },
  { icon: 'lucide:zap', title: 'Power' },
  { icon: 'lucide:heart-pulse', title: 'Medical & Healthcare' },
  { icon: 'lucide:globe', title: 'EOU Parts' },
];

// Summarised from the company's process flow chart.
export const process = [
  {
    icon: 'lucide:message-square',
    title: 'Customer enquiry',
    text: 'Our OEM team reviews the requirement and books the order with an order booking number.',
  },
  {
    icon: 'lucide:drafting-compass',
    title: 'Design',
    text: 'The design department issues the master copy and controlled copies of every drawing.',
  },
  {
    icon: 'lucide:package-check',
    title: 'Purchase & planning',
    text: 'Raw material is purchased, and special processes are outsourced to approved partners.',
  },
  {
    icon: 'lucide:factory',
    title: 'Production',
    text: 'Parts are machined on our CNC centres by application engineers and CAM programmers.',
  },
  {
    icon: 'lucide:scan-search',
    title: 'Inspection & quality check',
    text: 'Incoming, in-process and final inspection. Any rejection goes to root cause analysis and rework.',
  },
  {
    icon: 'lucide:truck',
    title: 'Delivery & feedback',
    text: 'The project is delivered, customer feedback is collected, and the project is closed once satisfied.',
  },
];

export const certifications = [
  {
    id: 'iso',
    title: 'ISO 9001:2015',
    text: 'Our Quality Management System is certified to ISO 9001:2015 standards, demonstrating our commitment to consistent quality and continuous improvement.',
    image: 'iso',
  },
  {
    id: 'msme',
    title: 'MSME Registered',
    text: 'Registered with the Ministry of Micro, Small & Medium Enterprises, Government of India, recognizing our contribution to the manufacturing sector.',
    image: 'msme',
  },
] as const;
