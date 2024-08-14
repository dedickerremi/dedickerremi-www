import {
  skNodeJs,
  skBullMQ,
  skExpress,
  skFastify,
  skPrisma,
  skDocker,
  skPothos,
  skRedis,
} from "./backendSkills"
import { skPostgreSQL, skMySQL, skMongoDB } from "./databaseSkills"
import {
  skReact,
  skNextJs,
  skReactQuery,
  skTypeScript,
  skTailwindCSS,
  skHtmlSemantic,
  skStorybook,
  skStyledComponents,
  skJest,
  skGraphQL,
} from "./frontendSkills"
import {
  skAgileMethodology,
  skCommunication,
  skProblemSolving,
  skTeamwork,
} from "./softSkills"
import {
  skAWS,
  skCICD,
  skGoogleAnalytics,
  skGoogleTagManager,
  skStripe,
} from "./thirdPartiesSkills"
import { SkillType } from "./types"

export const skMigrationIntegration: SkillType = {
  name: "Migration & Integration",
  description: "Migration & Integration",
}

export const SKILLS: Record<string, Array<SkillType>> = {
  frontend: [
    skReact,
    skNextJs,
    skReactQuery,
    skTypeScript,
    {
      name: "Unit Testing",
      description: "Unit Testing",
    },
    skTailwindCSS,
    skHtmlSemantic,
    {
      name: "SEO",
      description: "SEO best practices",
    },
    {
      name: "Responsive Design",
      description: "Design that works on all devices",
    },
    {
      name: "Webpack",
      description: "A static module bundler for modern JavaScript applications",
    },
    skStorybook,
    skStyledComponents,
    {
      name: "Web Accessibility",
      description: "Web Accessibility",
    },
    skJest,
  ],
  backend: [
    skNodeJs,
    skBullMQ,
    skExpress,
    skFastify,
    skPrisma,
    skGraphQL,
    skDocker,
    skPothos,
    {
      name: "Integration Testing",
      description: "Integration Testing",
    },
    skRedis,
    {
      name: "RESTful API",
      description: "RESTful API",
    },
  ],
  database: [skPostgreSQL, skMySQL, skMongoDB],
  thirdParties: [
    skGoogleAnalytics,
    skGoogleTagManager,
    skCICD,
    skStripe,
    skAWS,
  ],
  soft: [skCommunication, skTeamwork, skProblemSolving, skAgileMethodology],
}
