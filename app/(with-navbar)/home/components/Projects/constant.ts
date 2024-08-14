import { skMigrationIntegration } from "../Skills/skills"
import { skBullMQ } from "../Skills/skills/backendSkills"
import { skPostgreSQL } from "../Skills/skills/databaseSkills"
import {
  skGraphQL,
  skNextJs,
  skReact,
  skRedux,
  skSEO,
  skStorybook,
  skStrapi,
  skStyledComponents,
  skTailwindCSS,
} from "../Skills/skills/frontendSkills"
import {
  skAgileMethodology,
  skAssessmentAndEvaluation,
  skCodeReview,
  skCurriculumDevelopment,
  skDomainDrivenDesign,
  skFundamentalsProgramming,
  skResponsiveDesign,
  skTeachingMethodologies,
  skTestCoverage,
  skWebDevelopment,
} from "../Skills/skills/softSkills"
import { skStripe } from "../Skills/skills/thirdPartiesSkills"
import { SkillType } from "../Skills/skills/types"

export type ProjectType = {
  name: string
  description: string
  projectLink: string
  skills: Array<SkillType>
  gallery: Array<string>
  projects?: Array<ProjectType>
  url?: string
  theme?: {
    background?: string
  }
}

export const DowJones: ProjectType = {
  name: "RnC - TC @ Dow Jones",
  description:
    "Risk & Compliance and Trade & Compliance are Dow Jones products that provide solutions for compliance professionals.",
  projectLink: "https://www.dowjones.com/",
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
  gallery: [
    "https://pbs.twimg.com/profile_images/1280138556535693312/NUO0ZFF0_400x400.jpg",
  ],
}

export const Tappx: ProjectType = {
  name: "Tappx",
  description:
    "Tappx is an AdTech company that provides solutions for mobile app developers.",
  projectLink: "https://www.tappx.com/",
  skills: [
    skMigrationIntegration,
    skReact,
    skRedux,
    skStrapi,
    skGraphQL,
    skAgileMethodology,
    skResponsiveDesign,
    // "Linear",
    // "fly.io",
    //   "PHP",
  ],
  gallery: ["/tappx.jpg"],
  projects: [],
}

export const FrankEnergie: ProjectType = {
  name: "Frank Energy @ Reversed Digital",
  description:
    "Frank Energie is a Dutch energy supplier that provides green energy to its customers in Europe.",
  projectLink: "https://frankenergie.nl/",
  skills: [
    skNextJs,
    skTailwindCSS,
    skBullMQ,
    skPostgreSQL,
    skSEO,
    skResponsiveDesign,
    // "SEO",
    // "Sanity CMS",
    // "Digital Ocean",
    // "Ecommerce",
    // "Jira / Linear",
  ],
  gallery: [
    "https://reverseddigital.com/assets/7b2cb684-9775-01b4-a586-c1688bca4a29/fa170b6a-4b33-4cca-9f8f-e89e7404e323/fra%20-%20Case%20Small.png?fm=webp&fit=max&w=1280",
  ],
}

export const Gassan: ProjectType = {
  name: "Gassan",
  description:
    "Gassan is a Dutch company that provides high-quality diamonds and watches.",
  projectLink: "https://www.gassan.com/",
  skills: [
    skReact,
    skNextJs,
    skTailwindCSS,
    // "Adyen",
    skStorybook,
    skTestCoverage,
    // "Kontent",
    skResponsiveDesign,
    skAgileMethodology,
  ],
  gallery: ["/gassan.jpg"],
}

export const Xpozer: ProjectType = {
  name: "Xpozer @ Reversed Digital",
  description:
    "Xpozer is a Dutch company that provides solutions for printing photos.",
  projectLink: "https://xpozer.com/",
  skills: [
    skNextJs,
    // "Linaria",
    skSEO,
    skResponsiveDesign,
    // "Ecommerce",
    skStripe,
    skBullMQ,
    skPostgreSQL,
  ],
  gallery: ["/xpozer-logo.png"],
}

export const Epitech: ProjectType = {
  name: "Epitech",
  description:
    "Epitech is a private higher education institution that provides courses in computer science.",
  projectLink: "https://www.epitech.eu/",
  skills: [
    skFundamentalsProgramming,
    skTeachingMethodologies,
    skCurriculumDevelopment,
    skAssessmentAndEvaluation,
    skWebDevelopment,
    skCodeReview,
  ],
  gallery: ["/epitech.png"],
  projects: [],
}
