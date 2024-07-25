export type SkillType = {
  name: string
  description: string
  icon?: string
  level: number
}

export const SKILLS: Record<string, Array<SkillType>> = {
  frontend: [
    {
      name: "React",
      description: "JavaScript library for building user interfaces",
      level: 4,
    },
    {
      name: "Next.js",
      description: "React framework for production",
      level: 4,
    },
    {
      name: "TypeScript",
      description: "Typed JavaScript at Any Scale",
      level: 3,
      icon: "TS",
    },
    {
      name: "Unit Testing",
      description: "Unit Testing",
      level: 4,
    },
    {
      name: "TailwindCSS",
      description:
        "A utility-first CSS framework for rapidly building custom designs",
      level: 4,
    },
    {
      name: "HTML Semantic",
      description: "Semantic HTML elements",
      level: 4,
      icon: "HTML",
    },
    {
      name: "SEO best practices",
      description: "SEO best practices",
      level: 4,
      icon: "SEO",
    },
    {
      name: "Responsive Design",
      description: "Design that works on all devices",
      level: 4,
    },
    {
      name: "Webpack",
      description: "A static module bundler for modern JavaScript applications",
      level: 3,
    },
  ],
  backend: [
    {
      name: "Node.js",
      description: "JavaScript runtime built on Chrome's V8 JavaScript engine",
      level: 4,
    },
    {
      name: "BullMQ",
      description:
        "Premium Queue package for handling distributed jobs and messages in NodeJS",
      level: 4,
    },
    {
      name: "Express / Fastify",
      description: "Fast, unopinionated, minimalist web framework for Node.js",
      level: 4,
    },
    {
      name: "GraphQL",
      description: "A query language for your API",
      level: 3,
    },
    {
      name: "Pothos",
      description: "A modern, fast and efficient ORM for Node.js",
      level: 4,
    },
    {
      name: "Redis",
      description: "An open-source, in-memory data structure store",
      level: 4,
    },
  ],
  database: [
    {
      name: "PostgreSQL",
      description: "Open-source relational database management system",
      level: 4,
    },
    {
      name: "MongoDB",
      description: "A general purpose, document-based, distributed database",
      level: 4,
    },
  ],
  thirdParties: [
    {
      name: "Google Analytics",
      description: "Google Analytics",
      level: 4,
    },
    {
      name: "Google Tag Manager",
      description: "Google Tag Manager",
      level: 4,
    },
    {
      name: "Stripe",
      description: "Stripe",
      level: 4,
    },
    {
      name: "AWS",
      description: "Amazon Web Services",
      level: 4,
    },
  ],
  soft: [
    {
      name: "Problem Solving",
      description: "Problem Solving",
      level: 4,
    },
    {
      name: "Communication",
      description: "Communication",
      level: 4,
    },
    {
      name: "Teamwork",
      description: "Teamwork",
      level: 4,
    },
    {
      name: "Time Management",
      description: "Time Management",
      level: 4,
    },
    {
      name: "Agile Methodologies",
      description: "Agile Methodologies",
      level: 4,
    },
  ],
}
