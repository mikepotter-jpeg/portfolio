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
    title: "Export Service Account",
    tagline: "Digital platform for Australia's export industry",
    description:
      "Access platform for Australia's export industry. I led end-to-end design serving 2,000+ regulated businesses, reducing registration times and simplifying compliance.",
    role: "Product Design",
    duration: "2022 - 2023",
    thumbnail: "/images/export-service-thumbnail.jpg",
    heroImage: "/images/export-service-hero.jpg",
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
    duration: "2021 - 2022",
    thumbnail: "/images/dan-picked-thumbnail.jpg",
    heroImage: "/images/dan-picked-hero.jpg",
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
  headline: "I'm exploring new opportunities.",
  subheadline: "Email me or connect with me on LinkedIn.",
};
