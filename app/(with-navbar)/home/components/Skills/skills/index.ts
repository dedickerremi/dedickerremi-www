import {
  skNodeJs,
  skBullMQ,
  skExpress,
  skFastify,
  skPrisma,
  skDocker,
  skPothos,
  skRedis,
  skRestfulApi,
  skIntegrationTest,
  skFlyIo,
  skDigitalOcean,
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
  skWebpack,
  skResponsiveDesign,
  skUnitTest,
  skWebAccessibility,
  skSEO,
  skVercel,
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
import { skJira, skLinear } from "./tools"
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
    skUnitTest,
    skTailwindCSS,
    skHtmlSemantic,
    skSEO,
    skResponsiveDesign,
    skWebpack,
    skStorybook,
    skStyledComponents,
    skWebAccessibility,
    skJest,
    skVercel,
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
    skIntegrationTest,
    skRedis,
    skRestfulApi,
    skFlyIo,
    skDigitalOcean,
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
  tools: [skLinear, skJira],
}
