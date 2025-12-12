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

export interface ContentSection {
  title: string;
  content: string[];
  subsections?: {
    title: string;
    content: string[];
  }[];
}

export interface Project {
  slug: string;
  title: string;
  subtitle?: string;
  tagline: string;
  description: string;
  client?: string;
  tags?: string[];
  duration?: string;
  thumbnail?: string;
  heroImage?: string;
  sections?: ContentSection[];
  nextProject?: {
    slug: string;
    title: string;
  };
  prevProject?: {
    slug: string;
    title: string;
  };
}

export const projects: Project[] = [
  {
    slug: "export-service",
    title: "Export Service",
    tagline: "Account and access platform for Australia's export industry. I led end-to-end design serving 2,000+ regulated businesses, reducing registration times and simplifying compliance.",
    description:
      "Account and access platform for Australia's export industry. I led end-to-end design serving 2,000+ regulated businesses, reducing registration times and simplifying compliance.",
    client: "Department of Agriculture, Fisheries and Forestry (DAFF)",
    tags: ["Product Design", "Design systems"],
    duration: "2022 – 2025",
    thumbnail: "/images/export-service.jpg",
    heroImage: "/images/export-service.jpg",
    sections: [
      {
        title: "Overview",
        content: [
          "Exporters struggled with fragmented department systems that required multiple logins, duplicate forms, and offered limited visibility into application status. This created frequent support calls and administrative burden for both exporters and department staff, who found it difficult to validate information and make timely decisions. A centralised platform was needed, but consolidating protected business data and updating legacy systems introduced security challenges.",
        ],
        subsections: [
          {
            title: "What we built",
            content: [
              "The Export Service provides a single platform for exporters to manage documentation and regulatory obligations. Users can onboard, set communication preferences, verify business authorisations, manage staff permissions, update account details, and track application status, streamlining previously fragmented workflows.",
            ],
          },
          {
            title: "Role and responsibilities",
            content: [
              "As design lead for a 16+ person multidisciplinary team, I drove product innovation through collaboration with business units and digital specialists:",
              "• Created UI designs supporting user testing and development handover",
              "• Led research that defined build requirements through user feedback and data",
              "• Prioritised design backlogs with the product manager to align with business objectives",
              "• Facilitated stakeholder collaboration to maintain platform consistency and product vision",
              "The core challenge was balancing security requirements with usability. Working with user researchers and business analysts, I produced wireframes and prototypes tested with exporters and department stakeholders. Insights directly informed iterations and shaped the product roadmap.",
              "I delivered responsive, WCAG 2.1 conforming interfaces using the Agriculture Design System aligned to the Digital Service Standard. I contributed to the design and developer community through forums and guilds, sharing concepts and incorporating peer feedback.",
            ],
          },
        ],
      },
      {
        title: "Designing for efficiency and clarity",
        content: [
          "Users needed a way to avoid repetitive data entry. Guided by the government principle of 'tell us once', the account enables centralised profile management. Details entered once are reused seamlessly across forms and system integrations.",
          "Before committing to code, I used the department's Agriculture Design System to create Figma prototypes for concept validation and testing. Because business units manage relationships with exporters, we began by validating early concepts with them.",
          "Next, we developed a research script and ran moderated usability sessions with exporters to gather feedback. Participants were recruited through Askable, giving us direct access to real users and ensuring insights reflected actual user needs.",
        ],
        subsections: [
          {
            title: "Navigation",
            content: [
              "The user's profile and account settings are always accessible via persistent navigation in the top-right corner of the interface. I designed new components to support this, including a Dropdown menu for switching between multiple businesses and a navigation system that remains consistent across the platform.",
              "Because the platform is context-driven, users needed to clearly see which business they were acting on behalf of when making decisions or completing tasks. This visibility helps reduce errors and builds confidence in their actions.",
            ],
          },
          {
            title: "Sign in with email (known as Email sign-in)",
            content: [
              "User feedback showed people needed an alternative to Digital ID for signing in or creating accounts. While the department wanted to offer this secondary option, it created confusion—users assumed both sign-in methods gave them equal access to services.",
              "Our solution: We added clear callouts and help content explaining that Digital ID unlocks access to more services within the Export Service than the alternative method.",
              "To deliver the 'Email sign-in' feature, I worked with a business analyst in Mural to map out the multi-factor authentication user journey and ensure it met essential security requirements. To do this we baselined it against the product offered by Microsoft Azure B2C.",
              "I translated the multi-factor authentication journey into screen designs, which were implemented using Microsoft Azure B2C (a white-label authentication solution).",
              "Since we couldn't use the Design System's React UI library, the interface had to be built in HTML and CSS. I created detailed design documentation to guide development. The solution initially produced inconsistent layouts and elements, so I worked closely with developers—providing specific feedback to refine visual hierarchy, improve usability, and strengthen accessibility.",
            ],
          },
        ],
      },
      {
        title: "Designing for secure access",
        content: [
          "While onboarding, business managers needed a way to seamlessly verify their business while preventing unauthorised access. Our solution integrates with the whole-of-government capability, Relationship Authorisation Manager (RAM). Because the business linking process involves multiple redirects between government applications, which could easily disorient users, we introduced a task overview to set expectations and guide them through the process.",
          "Other key user requirements:",
          "• Enter business details once and reuse them across the service",
          "• Provide managers with simple controls for team permissions and access",
          "• Enable users to manage multiple businesses or entities from a single account",
        ],
        subsections: [
          {
            title: "Content strategy",
            content: [
              "Clear guidance was critical to this project's success. Security requirements in regulatory environments are often frustrating and complex for users. By providing the right information at the right moment, we helped users understand that security controls are valuable business tools not just obstacles to government services.",
              "I collaborated with content designers to create 20+ help articles that translated technical requirements into plain language.",
            ],
          },
          {
            title: "Form validation and designing for errors",
            content: [
              "As a security requirement, invited users had to verify their invitation with an email code rather than a clickable link. Several issues could occur when redeeming a code—it might be expired, cancelled by the sender, or already used.",
              "Error messages needed to strike a careful balance: general enough to avoid exposing system vulnerabilities to bad actors, while still being specific enough to help legitimate users resolve the issue.",
              "To design effective error handling, I worked with the technical team to catalogue all possible error states and classify them as either system-generated or user-generated. This classification informed how we wrote and displayed each message.",
              "Our front-end developers preferred having error state mockups positioned directly next to the main user flow designs in Figma. We also documented these rules and messages in detailed build tickets to support implementation and testing.",
            ],
          },
        ],
      },
      {
        title: "Impact",
        content: [
          "Our team delivered a comprehensive web and mobile solution that transformed how exporters interact with government services. Exporters now have a single login and centralised profile management, eliminating the frustration of managing multiple accounts. Businesses can onboard faster and operate with confidence.",
          "The department gains digital assurance, while regulators have secure access to verified, up-to-date user information. This enables faster onboarding, more efficient service delivery, and higher user satisfaction.",
        ],
      },
    ],
    nextProject: {
      slug: "dan-picked",
      title: "Dan Picked wine subscriptions",
    },
  },
  {
    slug: "dan-picked",
    subtitle: "managing subscriptions",
    title: "Dan Picked wine subscriptions",
    tagline: "The surge in online ordering during COVID-19 created an opportunity for Dan Murphy's to reimagine how customers discover wine. The business needed a digital solution to engage loyal customers and make wine selection more intuitive and enjoyable.",
    description:
      "Wine subscription service launched to 500,000+ My Dan's members. I designed the end-to-end customer experience and an internal portal for staff to curate monthly selections.",
    client: "Dan Murphy's",
    tags: ["Ecommerce", "Visual Design", "Product Design"],
    duration: "2021 – 2022",
    thumbnail: "/images/dan-picked.jpg",
    heroImage: "/images/dan-picked.jpg",
    sections: [
      {
        title: "Overview",
        content: [
          "As a design consultant from Contino, I partnered with the product manager to refine design concepts, creating wireframes and developing detailed design specifications.",
          "With a focus on speed to market, I worked to understand both staff needs and customer desires while delivering an innovative subscription product. This included the added challenge of integrating a new recurring payment platform.",
        ],
        subsections: [
          {
            title: "What we built",
            content: [
              "• New checkout wizard designed specifically for subscription purchases",
              "• Digital wallet enabling users to securely save and manage payment methods",
              "• Recurring payment system for subscription management",
            ],
          },
          {
            title: "My approach",
            content: [
              "• Ran regular critique sessions with the internal design team and presented to stakeholders fortnightly",
              "• Advocated for a phased release strategy, launching first to friends and family for real-world testing",
              "• Incorporated feedback iteratively to reduce risk before public launch",
            ],
          },
        ],
      },
      {
        title: "Impact",
        content: [
          "Over 8 months, my team delivered a subscription checkout with integrated recurring payments that met tight market deadlines. The phased release reduced risk and ensured the solution worked for both staff and customers.",
        ],
      },
    ],
    prevProject: {
      slug: "export-service",
      title: "Export Service",
    },
  },
];

export const about = {
  title: "About me",
  badges: [
    { emoji: "📍", text: "Sydney-based" },
    { emoji: "👨🏻‍💻", text: "Product designer" },
    { emoji: "📈", text: "5+ years experience" },
  ],
  bio: [
    "I'm a product designer with 5+ years' experience building digital products across government, energy, and retail.",
    "I started in industrial design, which grounded me in designing for people. Today, I focus on turning complex business challenges into intuitive, user-centred solutions that deliver real outcomes.",
    "I work best in close partnership with developers and stakeholders, shaping ideas into scalable, elegant products that simplify complexity.",
  ],
  cta: "If I sound like a fit for your team, let's chat.",
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
