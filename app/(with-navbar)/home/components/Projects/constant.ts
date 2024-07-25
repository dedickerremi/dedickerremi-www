type ProjectType = {
  name: string
  description: string
  projectLink: string
  skills: Array<string>
  gallery: Array<string>
  projects?: Array<ProjectType>
}

const DowJones: ProjectType = {
  name: "Dow Jones",
  description:
    "Dow Jones is a financial information service that provides news and data on stock markets.",
  projectLink: "https://www.dowjones.com/",
  skills: [],
  gallery: [],
  projects: [
    {
      name: "Risk & Compliance",
      description:
        "Risk & Compliance is a Dow Jones product that provides solutions for compliance professionals.",
      projectLink: "https://www.dowjones.com/products/risk-compliance/",
      skills: [],
      gallery: [],
    },
    {
      name: "Trade & Compliance",
      description:
        "Trade & Compliance is a Dow Jones product that provides solutions for compliance professionals.",
      projectLink: "https://www.dowjones.com/products/trade-compliance/",
      skills: [],
      gallery: [],
    },
  ],
}

const Tappx: ProjectType = {
  name: "Tappx",
  description:
    "Tappx is an AdTech company that provides solutions for mobile app developers.",
  projectLink: "https://www.tappx.com/",
  skills: [],
  gallery: [],
  projects: [],
}

const ReversedDigital: ProjectType = {
  name: "Reversed Digital",
  description:
    "Reversed Digital is a digital marketing agency that provides services for businesses.",
  projectLink: "https://reversed.digital/",
  skills: [],
  gallery: [],
  projects: [
    {
      name: "Xpozer.com",
      description: "Xpozer blabla.",
      projectLink: "https://xpozer.com/",
      skills: [],
      gallery: [],
    },
    {
      name: "Frank Energie",
      description: "Frank Energie blabla.",
      projectLink: "frankenergie.nl",
      skills: [],
      gallery: [],
    },
  ],
}

const Epitech: ProjectType = {
  name: "Epitech",
  description:
    "Epitech is a private higher education institution that provides courses in computer science.",
  projectLink: "https://www.epitech.eu/",
  skills: [],
  gallery: [],
  projects: [],
}
