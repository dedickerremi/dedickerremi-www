import { skMigrationIntegration } from "../Skills/skills"
import {
  skBullMQ,
  skDigitalOcean,
  skFastify,
  skFlyIo,
  skIntegrationTest,
  skNodeJs,
} from "../Skills/skills/backendSkills"
import { skPostgreSQL } from "../Skills/skills/databaseSkills"
import {
  skDomainDrivenDesign,
  skGraphQL,
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
} from "../Skills/skills/frontendSkills"
import {
  skAgileMethodology,
  skAssessmentAndEvaluation,
  skCodeReview,
  skCurriculumDevelopment,
  skFundamentalsProgramming,
  skTeachingMethodologies,
  skTestCoverage,
  skWebDevelopment,
} from "../Skills/skills/softSkills"
import { skCookiesBot, skStripe } from "../Skills/skills/thirdPartiesSkills"
import { skJira, skLinear } from "../Skills/skills/tools"
import { SkillType } from "../Skills/skills/types"

export type ProjectType = {
  name: string
  description: string
  projectLink: string
  skills: SkillType[]
  gallery: string[]
  position: string
}

export const DowJones: ProjectType = {
  name: "RnC - TC @ Dow Jones",
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
  position: "",
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
    skJira,
  ],
  gallery: ["/tappx.jpg"],
  position: "",
}

export const FrankEnergie: ProjectType = {
  name: "Frank Energy @ Reversed Digital",
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
  position: "",
}

export const Gassan: ProjectType = {
  name: "Gassan",
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
  position: "",
}

export const Xpozer: ProjectType = {
  name: "Xpozer @ Reversed Digital",
  description:
    "Xpozer is a company that offers a unique solution for printing and displaying photos on walls.",
  projectLink: "https://reverseddigital.com/cases/xpozer",
  skills: [
    skNextJs,
    skLinaria,
    skSEO,
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
  position: "",
}

export const Epitech: ProjectType = {
  name: "Lead Professor for MSc program @ Epitech",
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
  position: "",
}
