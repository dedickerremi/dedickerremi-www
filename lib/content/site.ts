/**
 * Every editable fact about Rémi lives here.
 *
 * Sourced from his detailed CV. Anything left as an empty string is simply not
 * rendered, so the page stays coherent while it is incomplete.
 */

/** Labels are translated in lib/dictionaries via `facts[key]`. */
export type FactKey =
  | "location"
  | "experience"
  | "focus"
  | "education"
  | "languages"
  | "availability"

export const FACTS: Array<{ key: FactKey; value: string }> = [
  { key: "experience", value: "10+ years" },
  { key: "focus", value: "E-commerce · SaaS · Media" },
  { key: "location", value: "Amsterdam, NL" },
  { key: "languages", value: "FR · EN · ES" },
  // TODO(remi): e.g. "Open to senior roles". Empty means the cell is dropped.
  { key: "availability", value: "" },
]

export type RoleKey = "reversedDigital" | "dowJones" | "tappx" | "epitech"

/** A single achievement. `metric` is pulled out and set large when present. */
export type Highlight = {
  metric?: string
  text: string
}

export type Role = {
  /** Links the role to the work shipped there (see Experience/index.tsx). */
  key: RoleKey
  company: string
  title: string
  period: string
  summary: string
  highlights: Array<Highlight>
  url?: string
}

/* Ordered most recent first. */
export const EXPERIENCE: Array<Role> = [
  {
    key: "reversedDigital",
    company: "Reversed Digital",
    title: "Senior Fullstack Developer",
    period: "Sep 2022 - Now",
    summary:
      "Designing and building scalable e-commerce platforms end to end, from Next.js front-ends to Node.js services and the payment and data integrations behind them.",
    highlights: [
      {
        metric: "400%",
        text: "growth in customer base over two years, on a backend and frontend architecture engineered for scale.",
      },
      {
        metric: "3",
        text: "new countries launched, with region-specific requirements handled by a modular country-service architecture.",
      },
      {
        text: "Built a smart matching algorithm that assigns installation partners to customer requests by geolocation, product compatibility, workload and business priorities. A weighted random draw keeps distribution fair under quota constraints, backed by fallback logic and real-world scenario tests.",
      },
      {
        text: "Upgraded to Next.js Server Components to cut page load times in high-traffic markets, and implemented advanced caching to reduce latency in a cloud-native environment.",
      },
      {
        text: "Led internal workshops on Next.js optimisation, service architecture and scalability across engineering departments.",
      },
    ],
    url: "https://reverseddigital.com",
  },
  {
    key: "dowJones",
    company: "Dow Jones",
    title: "Senior Frontend Engineer",
    period: "May 2021 - Sep 2022",
    summary:
      "Shipping features for large-scale clients without compromising performance or stability, and raising the engineering baseline across several applications.",
    highlights: [
      {
        metric: "95%",
        text: "code coverage achieved across all applications.",
      },
      {
        metric: "40%",
        text: "less code duplication, via centralised packages reused across 5+ applications.",
      },
      {
        text: "Contributed to backend governance through internal audits and cross-team reviews, checking API design consistency, error handling standards and performance bottlenecks across services.",
      },
      {
        text: "Implemented serverless PDF generation on AWS, cutting infrastructure overhead for document-heavy workflows.",
      },
      {
        text: "Integrated Storybook across all atomic and molecular components, and built a custom package to smooth over version-specific differences when writing Jest tests.",
      },
    ],
    url: "https://www.dowjones.com/professional/factiva/",
  },
  {
    key: "tappx",
    company: "Tappx",
    title: "Fullstack Developer",
    period: "May 2020 - Jan 2021",
    summary:
      "Fullstack work on the AdTech platform for mobile app developers, across the front-end, the CMS layer and the business dashboard.",
    highlights: [
      {
        text: "Led the migration of a legacy React application to Next.js, improving performance, SEO and maintainability. Integrated Strapi for dynamic content management and used Tailwind to build a pixel-perfect UI from Figma designs.",
      },
      {
        text: "Enhanced the professional dashboard monitoring click-through rates, impressions and revenue, giving the business clearer visibility on what it earned.",
      },
      {
        text: "Worked across product, marketing and engineering to speed up ad deployment and shorten iteration cycles.",
      },
    ],
    url: "https://www.tappx.com",
  },
  {
    key: "epitech",
    company: "Epitech",
    title: "Lead Teacher, MSc Software Development",
    period: "Mar 2017 - Mar 2020",
    summary:
      "Mentoring MSc students through technical projects in C, C++, Java and .NET, and running the web development track.",
    highlights: [
      {
        text: "Led multiple web development bootcamps, taking students from fundamentals to real applications with proper version control and team collaboration.",
      },
      {
        text: "Built an Android TV application streaming and scheduling video to every device in the school, letting the marketing team manage content in real time.",
      },
      {
        text: "Ran free workshops for high-school students, covering Unity game development, Raspberry Pi weather stations and web development.",
      },
      {
        text: "Conducted thorough code reviews focused on clean, maintainable code and continuous technical feedback.",
      },
    ],
    url: "https://www.epitech.eu",
  },
]

/** In his own words, condensed from the CV's "About me". */
export const ABOUT: Array<string> = [
  "I'm a curious and pragmatic developer who loves turning ideas into real, usable things. I've studied and worked across France, Mexico, Spain and the Netherlands, and collaborated with teams at American companies. Each one taught me to adapt, communicate, and approach problems with an open mind.",
  "I enjoy crafting clean, scalable tools (bonus points if they help a whole team work better), mentoring others, and exploring emerging technologies just for the fun of it.",
  "Outside of work you'll find me digging into cybersecurity, playing volleyball and basketball, and enjoying music and social events.",
]

export const EDUCATION = {
  degree: "MSc in Computer Science",
  school: "Epitech",
  period: "2012 - 2017",
  summary:
    "A project-based curriculum in software engineering and system design: algorithms, data structures, OOP and design patterns across C, C++, Java and .NET, plus multithreaded programming, low-level optimisation and distributed systems.",
}

export const CONTACT = {
  email: "dedickerremi@gmail.com",
  linkedin: "https://www.linkedin.com/in/remi-dedicker",
  github: "https://github.com/dedickerremi",
}
