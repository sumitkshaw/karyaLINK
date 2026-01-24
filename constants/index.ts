// NAVIGATION
export const NAV_LINKS = [
  { href: '/', key: 'home', label: 'Home' },
  { href: '/services', key: 'services', label: 'Services' },
  { href: '/how-it-works', key: 'how_it_works', label: 'How It Works' },
  { href: '/about', key: 'about', label: 'About' },
];

// SERVICES - Using existing images or emojis as fallback
export const SERVICES = [
  {
    title: 'Plumbers',
    icon: '/wrench.svg', // Using existing wrench icon
    fallbackIcon: '🔧', // Emoji fallback
    description: 'Verified plumbing services for homes and businesses in Delhi',
    color: 'blue',
  },
  {
    title: 'Electricians',
    icon: '/tech.svg', // Using existing tech.svg
    fallbackIcon: '⚡', // Emoji fallback
    description: 'Certified electrical work with safety guarantees',
    color: 'orange',
  },
  {
    title: 'Home Tutors',
    icon: '/user.svg', // Using existing user.svg
    fallbackIcon: '📚', // Emoji fallback
    description: 'Qualified tutors for all subjects and grades',
    color: 'green',
  },
  {
    title: 'Property Agents',
    icon: '/location.svg', // Using existing location.svg
    fallbackIcon: '🏠', // Emoji fallback
    description: 'Trusted real estate assistance in Delhi/NCR',
    color: 'purple',
  },
];

// HOW IT WORKS STEPS
export const HOW_IT_WORKS = [
  {
    number: '01',
    title: 'Verify',
    icon: '✅', // Emoji
    description: 'Service providers undergo thorough background verification',
  },
  {
    number: '02',
    title: 'Connect',
    icon: '🤝', // Emoji
    description: 'Smart algorithm matches providers with right-fit customers',
  },
  {
    number: '03',
    title: 'Trust',
    icon: '⭐', // Emoji
    description: 'Community ratings and digital reputation ensure quality',
  },
];

// TRUST FEATURES - Using emojis instead of missing SVG files
export const TRUST_FEATURES = [
  {
    title: 'Verified Service History',
    description: 'Complete work history and customer feedback for each provider',
    icon: '✅', // Check mark emoji
    fallbackIcon: '✅',
  },
  {
    title: 'Locality-Specific Ratings',
    description: 'Ratings from customers in your specific Delhi locality',
    icon: '📍', // Location pin emoji
    fallbackIcon: '📍',
  },
  {
    title: 'Dispute Resolution',
    description: 'Protected payments and dedicated support for any issues',
    icon: '🛡️', // Shield emoji
    fallbackIcon: '🛡️',
  },
  {
    title: 'Digital Reputation Card',
    description: 'Each provider gets a verified digital identity card',
    icon: '🎫', // Ticket emoji
    fallbackIcon: '🎫',
  },
];

// PILOT AREAS IN DELHI
export const PILOT_AREAS = [
  'Mayur Vihar',
  'South Delhi',
  'GK & Surroundings',
  'Dwarka',
  'Noida',
  'Gurugram',
];

// FOOTER
export const FOOTER_LINKS = [
  {
    title: 'Services',
    links: [
      'Plumbers in Delhi',
      'Electricians Delhi',
      'Home Tutors',
      'Property Agents',
    ],
  },
  {
    title: 'Company',
    links: [
      'About KaryaLINK',
      'How It Works',
      'For Service Providers',
      'Contact Us',
    ],
  },
  {
    title: 'Legal',
    links: [
      'Privacy Policy',
      'Terms of Service',
      'Trust & Safety',
      'FAQ',
    ],
  },
];

export const FOOTER_CONTACT_INFO = {
  title: 'Contact Us',
  links: [
    { label: 'Email', value: 'contact.karyalink@gmail.com' },
  ],
};

export const SOCIALS = {
  title: 'Follow Our Journey',
  instagram: 'https://instagram.com/karyalink',
  instagramHandle: '@karyalink'
};