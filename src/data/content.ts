import { Code, Database, Gamepad2, Palette, Zap, Trophy, Star, Target, Rocket } from 'lucide-react';

export interface Skill {
  name: string;
  level: number;
  category: 'languages' | 'frameworks' | 'tools' | 'ides';
}

export interface Experience {
  id: string;
  company: string;
  title: string;
  duration: string;
  location: string;
  description: string;
  achievements: string[];
  tags: string[];
  logo?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  featured: boolean;
  status: 'completed' | 'in-progress' | 'planned';
}

export interface PersonalInfo {
  name: string;
  title: string;
  tagline: string;
  email: string;
  phone?: string;
  location: string;
  github: string;
  linkedin: string;
  bio: string;
  interests: string[];
}

export const personalInfo: PersonalInfo = {
  name: "Matt",
  title: "Software Engineer",
  tagline: "Full-stack software engineer with a passion for sports and gaming",
  email: "matthew_dixey@yahoo.com",
  location: "Eden Prairie, MN",
  github: "https://github.com/MDixey17",
  linkedin: "https://www.linkedin.com/in/matt-dixey/",
  bio: "Passionate software engineer with 3+ years of experience building scalable end-to-end applications. I love turning complex problems into elegant solutions and creating user experiences that delight. When I'm away from my keyboard, you'll find me watching Formula 1, collecting trading cards, or exploring the latest in gaming technology.",
  interests: ["Formula 1", "Baseball", "Hockey", "Trading Cards", "Star Wars", "Marvel", "Gaming"]
};

export const skills: Skill[] = [
  // Programming Languages
  { name: "TypeScript", level: 100, category: "languages" },
  { name: "JavaScript", level: 100, category: "languages" },
  { name: "CSS", level: 90, category: "languages" },
  { name: "HTML", level: 90, category: "languages" },
  { name: "Python", level: 85, category: "languages" },
  { name: "Java", level: 80, category: "languages" },
  { name: "Kotlin", level: 80, category: "languages" },
  { name: "C#", level: 75, category: "languages" },
  { name: "C++", level: 70, category: "languages" },
  { name: "Go", level: 60, category: "languages" },
  
  // Frameworks & Libraries
  { name: "React", level: 95, category: "frameworks" },
  { name: "Spring Boot", level: 95, category: "frameworks" },
  { name: "Node.js", level: 90, category: "frameworks" },
  { name: "Express", level: 90, category: "frameworks" },
  { name: "Jest", level: 90, category: "frameworks" },
  { name: "Cypress", level: 90, category: "frameworks" },
  { name: "Playwright", level: 90, category: "frameworks" },
  { name: 'Puppeteer', level: 90, category: "frameworks" },
  { name: "Kafka", level: 85, category: "frameworks" },
  { name: "React Native", level: 75, category: "frameworks" },
  { name: "Expo", level: 75, category: "frameworks" },
  { name: "ASP.NET", level: 70, category: "frameworks" },
  
  // Tools
  { name: "MongoDB", level: 90, category: "tools" },
  { name: "Docker", level: 85, category: "tools" },
  { name: "PostgreSQL", level: 85, category: "tools" },
  { name: "Google Cloud Services", level: 75, category: "tools" },
  { name: "AWS", level: 70, category: "tools" },
  { name: "Microsoft Azure", level: 70, category: "tools" },
  { name: "GraphQL", level: 70, category: "tools" },
  
  // IDEs
  { name: "VS Code", level: 98, category: "ides" },
  { name: "IntelliJ IDEA", level: 95, category: "ides" },
  { name: "WebStorm", level: 95, category: "ides" },
  { name: "Unreal Engine", level: 80, category: "ides" },
  { name: "Unity", level: 75, category: "ides" },
];

export const experiences: Experience[] = [
  {
    id: "l4-engineer-2023",
    company: "Target",
    title: "L4 Software Engineer",
    duration: "January 2023 - Present",
    location: "Brooklyn Park, MN",
    description: "Contributing to ad-tech marketing solutions that drive consistent growth across the enterprise",
    achievements: [
      "Advanced the internal React component library to support Enter key selection for type-ahead inputs, now utilized by over 1,000 teams across the enterprise, showcasing scalable frontend development",
      "Designed and implemented an internal React web application to empower engineers with real-time visibility into marketing campaign audience creation and delivery, improving on-call response times and operational efficiency",
        "Authored documentation comparing frontend testing libraries, such as Cypress and Playwright, enabling enterprise teams to make informed decisions about their integration testing strategies",
        "Partnered with senior engineers to ship a time-sensitive enhancement with audience distribution to social media platforms within two weeks, resulting in $15 million in cost savings",
        "Pioneered a Slack bot application to improve productivity for over 4,000 employees using Golang and PostgreSQL, becoming recognized across the enterprise and frequently consulted by engineers for guidance on implementation",
        "Actively contribute to Spring Boot microservices and Kafka consumers that support the automation of creation of audience segments for the marketing portfolio, generating over $2 billion in annual revenue",
        "Optimized existing CI/CD pipelines to create and modify Kubernetes clusters to comply with internal infrastructure guidelines and cost-effectiveness, sharing the configurations across teams to easily replicate",
        "Spearheaded quarterly security reviews for the internal audience creation tool, resolving over 200 high severity vulnerabilities per cycle and contributing to cross-team dependency upgrade initiatives",
        "Selected  to provide hands-on onboarding and mentorship to new hires, supporting their growth in engineering skills, company culture, and technology usage",
        "Led the development of a Generative AI assistant for marketing workflows by reducing creation time by 40% for audience segments of guests that have purchased products from specified brands, gaining praise from leadership for setting an example for the enterprise",
        "Initiated discovery and successful implementation of direct API integrations with major platforms such as Meta, TikTok, and Pinterest, streamlining audience segment data flows as part of a $500 million enterprise initiative",
        "Sole owner of all frontend work for my team, regularly consulted for new features, urgent fixes, and collaborating with cross-functional stakeholders, being recognized as the frontend authority on the team"
    ],
    tags: ["React", "Node.js", "TypeScript", "Docker", "MongoDB", "PostgreSQL", "Java", "Spring Boot"]
  },
  {
    id: "internship-2022",
    company: "Major League Baseball",
    title: "Software Engineer Intern",
    duration: "June 2022 - August 2022",
    location: "New York, NY",
    description: "Completed nine week internship while contributing changes to a public-facing product with over 10 million active users",
    achievements: [
      "Resolved more than 40 bugs using JavaScript, HTML, CSS, and React in the newly designed MLB Gameday website",
      "Adapted quickly to new Figma design requirements for the 2022 MLB All-Star Game by achieving successful delivery within a one-month deadline",
      "Shadowed the Director of Engineering for Baseball Data throughout the internship program, testing new features and working with cross-functional teams"
    ],
    tags: ["JavaScript", "HTML", "CSS", "React"]
  },
  {
    id: "doc-2021",
    company: "Esports at the University of Minnesota",
    title: "Director of Content / Social Media Manager",
    duration: "September 2021 - November 2022",
    location: "Minneapolis, MN",
    description: "Contributed mightily to the advancement of the esports club's social media presence with custom videos, graphics, and overlays",
    achievements: [
      "Built custom motion graphics using Unreal Engine 5 to integrate into club broadcasts and videos to maximize production value",
        "Coordinated with the university's Assistant Athletic Director to develop an overlay utilizing websocket connections to retrieve and display real-time game data.",
      "Organized and executed a social media marketing campaign to lead the school's entry in a $50,000 national social media competition that resulted in $13,000 of prize money",
    ],
    tags: ["Unreal Engine 5", "C++", "JavaScript", "Node.js", "Websocket", "React"]
  }
];

export const projects: Project[] = [
  {
    id: "formula-cardz",
    title: "Formula Cardz",
    description: "Platform for tracking Formula 1 trading card market values, upcoming releases, and found 1/1 cards",
    longDescription: "A comprehensive web application that allows user's to sign up to track their own collection, save grail cards on their wishlist, track daily market values, and discover which 1/1 cards have and have not been found by other collectors.",
    tags: ["React", "TypeScript", "JavaScript", "Tailwind CSS", "Express", "Cronjob", "Web Scraping", "Render", "AWS"],
    githubUrl: "https://github.com/MDixey17/formula-cardz-ui",
    liveUrl: "https://formulacardz.com/",
    featured: true,
    status: "completed"
  },
  {
    id: "gravity-blade",
    title: "Gravity Blade Video Game",
    description: "Indie game project that includes gravity-defying level mechanics to tell a single player story",
    longDescription: "Sole gameplay engineer of a two-person team of a video game developed in Unreal Engine 5 with a planned release in late 2025.",
    tags: ["Unreal Engine", "Blueprints"],
    githubUrl: "https://github.com/CMD-Studios/VG1",
    featured: true,
    status: "in-progress"
  },
  {
    id: "blue-titanium",
    title: "Blue Titanium Component Library",
    description: "A small component library with all the basic elements needed to construct a modern looking UI",
    longDescription: "Developed a React component library published to NPM for other developers to integrate into their projects with an average of 25 monthly downloads.",
    tags: ["React", "TypeScript", "CSS", "Storybook", "NPM", "Node.js"],
    githubUrl: "https://github.com/MDixey17/blue-titanium",
    liveUrl: "https://www.npmjs.com/package/blue-titanium-ui",
    featured: true,
    status: "completed"
  },
  {
    id: "celebration-reminder",
    title: "Celebration Reminder Mobile App",
    description: "Never miss a birthday, anniversary, or celebration again!",
    longDescription: "An iOS app that sends push notifications to a user's device to remind them about a special day for someone close to them.",
    tags: ["React Native", "TypeScript", "Expo"],
    githubUrl: "https://github.com/MDixey17/celebrate-reminder-app",
    liveUrl: "https://apps.apple.com/us/app/celebration-reminder/id6744367631",
    featured: false,
    status: "completed"
  },
  {
    id: "f1-insights-hub",
    title: "F1 Insights Hub",
    description: "Get the latest information on the drivers and constructors in the current Formula 1 season",
    longDescription: "Integrated a custom API using C# and ASP.NET with a responsive UI, automatically providing up-to-date information with the 2024 Formula 1 World Championship season.",
    tags: ["TypeScript", "React", "C#", "ASP.NET", "Microsoft Azure"],
    githubUrl: "https://github.com/MDixey17/f1-insights-hub",
    featured: false,
    status: "completed"
  },
  {
    id: "dystopian-defier",
    title: "Dystopian Defier Video Game",
    description: "Indie game created around the theme that your life is your currency",
    longDescription: "Built with members of the University of Minnesota's Video Game Development Club where I contributed to the integration of character animations and synchronization with user inputs.",
    tags: ["Unity", "C#"],
    liveUrl: "https://boschybee.itch.io/dystopian-defiers",
    featured: false,
    status: "completed"
  },
  {
    id: "rl-overlay",
    title: "Rocket League Broadcast Overlay",
    description: "Custom OBS broadcast overlay for the car soccer game known as Rocket League",
    longDescription: "Designed for the University of Minnesota's Rocket League team to be displayed on all club broadcasts, providing viewers with a modern viewing experience.",
    tags: ["React", "TypeScript", "Node.js", "Websocket"],
    githubUrl: "https://github.com/MDixey17/umn-rl-overlay-v2",
    featured: false,
    status: "completed"
  }
];

export const skillCategories = {
  languages: { name: "Programming Languages", icon: Code },
  frameworks: { name: "Frameworks & Libraries", icon: Zap },
  tools: { name: "Tools & Technologies", icon: Database },
  ides: { name: "IDEs & Editors", icon: Palette }
};

export const interestIcons = [
  { name: "Formula 1", icon: Trophy },
  { name: "Baseball", icon: Target },
  { name: "Hockey", icon: Target },
  { name: "Trading Cards", icon: Star },
  { name: "Star Wars", icon: Rocket },
  { name: "Marvel", icon: Zap },
  { name: "Gaming", icon: Gamepad2 }
];