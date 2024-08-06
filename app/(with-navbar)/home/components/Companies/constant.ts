export type ProjectType = {
  name: string
  description: string
  projectLink: string
  skills: Array<string>
  gallery: Array<string>
  projects?: Array<ProjectType>
}

export const DowJones: ProjectType = {
  name: "Dow Jones",
  description:
    "Dow Jones is a financial information service that provides news and data on stock markets.",
  projectLink: "https://www.dowjones.com/",
  skills: [],
  gallery: [
    "https://pbs.twimg.com/profile_images/1280138556535693312/NUO0ZFF0_400x400.jpg",
  ],
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

export const Tappx: ProjectType = {
  name: "Tappx",
  description:
    "Tappx is an AdTech company that provides solutions for mobile app developers.",
  projectLink: "https://www.tappx.com/",
  skills: [],
  gallery: ["/tappx-techsoul.webp"],
  projects: [],
}

export const ReversedDigital: ProjectType = {
  name: "Reversed Digital",
  description:
    "Reversed Digital is a digital marketing agency that provides services for businesses.",
  projectLink: "https://reversed.digital/",
  skills: ["NextJs", "TailwindCSS", "SEO", "Responsive Design", "Ecommerce"],
  gallery: [
    "https://reverseddigital.com/assets/7b2cb684-9775-01b4-a586-c1688bca4a29/fa170b6a-4b33-4cca-9f8f-e89e7404e323/fra%20-%20Case%20Small.png?fm=webp&fit=max&w=1280",
  ],
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

export const Epitech: ProjectType = {
  name: "Epitech",
  description:
    "Epitech is a private higher education institution that provides courses in computer science.",
  projectLink: "https://www.epitech.eu/",
  skills: [],
  gallery: ["/epitech.png"],
  projects: [],
}
