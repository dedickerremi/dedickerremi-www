import { skMigrationIntegration } from "../Skills/skills";
import {
  skBullMQ,
  skDigitalOcean,
  skFastify,
  skFlyIo,
  skIntegrationTest,
  skNodeJs,
} from "../Skills/skills/backendSkills";
import { skPostgreSQL } from "../Skills/skills/databaseSkills";
import {
  skDomainDrivenDesign,
  skGraphQL,
  skFigma,
  skLinaria,
  skNextJs,
  skReact,
  skRedux,
  skResponsiveDesign,
  skSanity,
  skSEO,
  skStorybook,
  skStrapi,
  skStyledComponents,
  skTailwindCSS,
} from "../Skills/skills/frontendSkills";
import {
  skAgileMethodology,
  skCodeReview,
  skTestCoverage,
} from "../Skills/skills/softSkills";
import {
  skCookiesBot,
  skGoogleAnalytics,
  skStripe,
} from "../Skills/skills/thirdPartiesSkills";
import { skJira, skLinear } from "../Skills/skills/tools";
import { SkillType } from "../Skills/skills/types";

export type ProjectType = {
  name: string;
  /** The client or employer the work was done for. */
  company?: string;
  /** What was actually built. This is what the row leads with. */
  contribution?: string;
  /** One line of context about the client. Secondary. */
  description: string;
  projectLink: string;
  skills: Array<SkillType>;
  gallery: Array<string>;
  projects?: Array<ProjectType>;
  url?: string;
  theme?: {
    background?: string;
  };
};

export const DowJones: ProjectType = {
  name: "Risk & Compliance / Trade & Compliance",
  company: "Dow Jones",
  contribution:
    "Migrated legacy applications to Next.js, measurably improving performance and maintainability. Instituted business-specific packages to centralise shared code, cutting bugs and shrinking app size across several applications.",
  description:
    "Risk & Compliance and Trade & Compliance are Dow Jones products that provide solutions for compliance professionals.",
  projectLink: "https://www.dowjones.com/professional/factiva/",
  skills: [
    skReact,
    skRedux,
    skNextJs,
    skStyledComponents,
    skStorybook,
    skTestCoverage,
    skResponsiveDesign,
    skAgileMethodology,
    skDomainDrivenDesign,
  ],
  gallery: ["/dowjones.jpg"],
};

export const Tappx: ProjectType = {
  name: "Tappx",
  company: "Tappx",
  contribution:
    "The professional dashboard and marketing platform for mobile app developers, rebuilt on Next.js with Strapi for content management and Tailwind for a pixel-perfect UI.",
  description:
    "Tappx is an AdTech company that provides solutions for mobile app developers.",
  projectLink: "https://www.tappx.com/",
  skills: [
    skMigrationIntegration,
    skReact,
    skRedux,
    skStrapi,
    skTailwindCSS,
    skFigma,
    skSEO,
    skGraphQL,
    skAgileMethodology,
    skResponsiveDesign,
    skJira,
  ],
  gallery: ["/tappx.jpg"],
  projects: [],
};

export const FrankEnergie: ProjectType = {
  name: "Frank Energie",
  company: "Frank Energie · Reversed Digital",
  contribution:
    "Adapted the existing frontend to handle country-specific variations, opening user registration to new markets. Led a cache-driven optimisation pass that streamlined backend operations and unified diverse endpoints behind country-specific services.",
  description:
    "Frank Energie is a Dutch energy supplier that provides green energy to its customers in Europe.",
  projectLink: "https://reverseddigital.com/cases/frank-energie",
  skills: [
    skNextJs,
    skTailwindCSS,
    skBullMQ,
    skPostgreSQL,
    skSEO,
    skResponsiveDesign,
    skCodeReview,
    skSanity,
    skDigitalOcean,
    skLinear,
    skIntegrationTest,
    skAgileMethodology,
  ],
  gallery: ["/frank-energie.webp"],
};

export const Gassan: ProjectType = {
  name: "Gassan",
  company: "Gassan · Reversed Digital",
  contribution:
    "A Next.js and Tailwind front-end with a Storybook component library, Node.js back-end and integration test coverage.",
  description:
    "Gassan is a Dutch company that provides high-quality diamonds and watches.",
  projectLink: "https://reverseddigital.com/cases/gassan",
  skills: [
    skReact,
    skNextJs,
    skTailwindCSS,
    skStorybook,
    skTestCoverage,
    skNodeJs,
    skIntegrationTest,
    skResponsiveDesign,
    skAgileMethodology,
  ],
  gallery: ["/gassan.jpg"],
};

export const Xpozer: ProjectType = {
  name: "Xpozer",
  company: "Xpozer · Reversed Digital",
  contribution:
    "Built and improved the storefront from Figma designs using a headless CMS, GraphQL, SEO best practices and Google Analytics. Developed the backend integrating third-party payment gateways and orchestrating synchronisation of critical data across platforms.",
  description:
    "Xpozer is a company that offers a unique solution for printing and displaying photos on walls.",
  projectLink: "https://reverseddigital.com/cases/xpozer",
  skills: [
    skNextJs,
    skFigma,
    skLinaria,
    skSEO,
    skGraphQL,
    skGoogleAnalytics,
    skResponsiveDesign,
    skStripe,
    skCookiesBot,
    skCodeReview,
    skNodeJs,
    skFastify,
    skBullMQ,
    skPostgreSQL,
    skFlyIo,
    skAgileMethodology,
  ],
  gallery: ["/xpozer-logo.png"],
};
