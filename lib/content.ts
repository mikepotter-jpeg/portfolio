// Centralized content for the portfolio
// Update this file to change content across the site

export const siteConfig = {
  name: "Michael Potter",
  title: "Product Designer",
  description: "Portfolio website showcasing my projects and experience",
  url: "https://portfolio-sandy-delta-q9skk6dbdu.vercel.app",
  email: "hello@michaelpotter.com", // Update with your actual email
  linkedin: "https://linkedin.com/in/michaelpotter", // Update with your LinkedIn URL
};

export const navigation = [
  { name: "Home", href: "/" },
  { name: "My work", href: "/#work" },
  { name: "About me", href: "/about" },
] as const;

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  role: string;
  tags?: string[];
  duration?: string;
  thumbnail?: string;
  heroImage?: string;
  challenge?: string;
  solution?: string;
  outcome?: string;
  highlights?: string[];
}

export const projects: Project[] = [
  {
    slug: "export-service-account",
    title: "Export Service",
    tagline: "Account and access platform for Australia's export industry",
    description:
      "Account and access platform for Australia's export industry. I led end-to-end design serving 2,000+ regulated businesses, reducing registration times and simplifying compliance.",
    role: "Product Design",
    tags: ["Product Design", "Design systems"],
    duration: "2022 - 2023",
    thumbnail: "/images/export-service.jpg",
    heroImage: "/images/export-service.jpg",
    challenge:
      "Australian exporters faced complex, time-consuming registration processes with multiple government agencies. The existing system was fragmented, leading to delays and compliance issues for over 2,000 regulated businesses.",
    solution:
      "Designed a unified digital platform that streamlines the registration and compliance process. Created intuitive user flows, simplified form interactions, and built a dashboard for businesses to manage their export requirements in one place.",
    outcome:
      "Significantly reduced registration times and improved compliance rates. The platform now serves 2,000+ regulated businesses with a streamlined experience.",
    highlights: [
      "End-to-end product design",
      "User research and testing",
      "Design system development",
      "Stakeholder management across government agencies",
    ],
  },
  {
    slug: "dan-picked",
    title: "Dan Picked",
    tagline: "Wine subscription service for Dan Murphy's",
    description:
      "Wine subscription service launched to 500,000+ My Dan's members. I designed the end-to-end customer experience and an internal portal for staff to curate monthly selections.",
    role: "Product Design",
    tags: ["Ecommerce", "Visual Design", "Product Design"],
    duration: "2021 - 2022",
    thumbnail: "/images/dan-picked.jpg",
    heroImage: "/images/dan-picked.jpg",
    challenge:
      "Dan Murphy's wanted to create a personalized wine subscription service that would engage their 500,000+ loyalty members while giving staff tools to curate quality monthly selections.",
    solution:
      "Designed a dual-sided platform: a customer-facing subscription experience with personalization features, and an internal curation portal for staff to manage monthly wine selections and inventory.",
    outcome:
      "Successfully launched to 500,000+ My Dan's members. The internal portal streamlined the curation process and enabled staff to efficiently manage monthly selections.",
    highlights: [
      "Customer-facing subscription UX",
      "Internal staff portal design",
      "Personalization features",
      "Integration with existing loyalty program",
    ],
  },
];

export const about = {
  headline: "I'm a product designer based in Australia.",
  intro:
    "I specialize in creating digital experiences that are both beautiful and functional. With a focus on user-centered design, I help businesses solve complex problems through thoughtful design solutions.",
  bio: [
    "I've spent the past several years working on products across government, retail, and technology sectors. My approach combines strategic thinking with hands-on design execution.",
    "I believe great design comes from understanding people—their needs, frustrations, and goals. I work closely with stakeholders and users to ensure every design decision is grounded in real insights.",
    "When I'm not designing, you'll find me exploring new places, reading about design and technology, or enjoying a good cup of coffee.",
  ],
  skills: [
    "Product Design",
    "UX Research",
    "Design Systems",
    "Prototyping",
    "User Testing",
    "Figma",
  ],
};

export const contact = {
  headline: "Let's talk",
  subheadline: "I'm exploring new opportunities.",
  description: "Email me or connect with me on LinkedIn.",
};

export interface Testimonial {
  date: string;
  quote: string;
  author: string;
  role: string;
}

export const testimonials: Testimonial[] = [
  {
    date: "October 6, 2025",
    quote:
      "I highly recommend Michael, for any role requiring a thoughtful and technically adept and user focused interaction designer.\n\nThroughout our time working together, Michael consistently demonstrated a deep commitment to advocating for the customer. He skillfully balanced user needs with technical constraints, often negotiating solutions that elevated both the experience and the feasibility of delivery. His ability to understand and adapt to technical limitations, made him an invaluable bridge between design and engineering.\n\nMichael's integrity was exceptional. He stepped up to fill gaps and took on leadership responsibilities when managers were unavailable. He always did this with humility …",
    author: "Emma-Grace Turek",
    role: "Senior Specialist at Microsoft (formerly Director, Digital Identity and Account, DAFF)",
  },
  {
    date: "September 22, 2025",
    quote:
      "I had the pleasure of working alongside Michael while he was in a product team and I was in the design system team. Our paths crossed often, as I supported with design system advice and governance while also offering suggestions for the products he was working on.\n\nMichael was an excellent design system practitioner. He consistently followed governance, actively participated in design community sessions, and had a sharp eye for spotting bugs or opportunities to improve the system. His feedback and contributions made a real difference to the quality and growth of the design system.\n\nMichael's impact extended well beyond his own work …",
    author: "Paul Maher",
    role: "Design System Lead, DAFF",
  },
];
