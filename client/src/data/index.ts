// Centralized data for the portfolio

// About me data
export const aboutMe = {
  name: "Abdou Kandji",
  title: "Full Stack Developer",
  location: "Villejuif, France",
  phone: "07 58 05 49 47",
  email: "abdou.k.kandji@gmail.com",
  languages: ["French", "English", "Wolof"],
  bio: [
    "Passionate about technology, I'm a curious and autonomous student who loves discovering new things and taking on challenges. I've mastered various technologies and I'm ready to put my skills to work to support your team.",
    "Currently pursuing an Engineering degree in Computer Science at EFREI Paris, I have experience working with diverse technologies across multiple projects and professional environments.",
    "When I'm not coding, you can find me playing basketball, practicing Sambo, keeping up with the latest tech trends, or enjoying gaming sessions with FIFA, F1, NBA2K, and GTA."
  ],
  social: {
    github: "https://github.com/kandjiabdou",
    linkedin: "https://linkedin.com/in/kandji",
    twitter: "#"
  }
};

// Skills data
export const skills = {
  programmingLanguages: [
    { name: "Java", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "Python", percentage: 80 },
    { name: "PHP", percentage: 75 },
    { name: "C/C++", percentage: 70 }
  ],
  webTechnologies: [
    "React", "Node.js", "Vue.js", "Angular", "HTML5", 
    "CSS3", "Symfony", "Bootstrap", "REST API", "jQuery"
  ],
  devOps: [
    "Git", "Docker", "Jenkins", "Linux", "CI/CD", 
    "SonarQube", "Grafana", "Maven", "Postman", "VS Code"
  ],
  databases: ["MySQL", "PostgreSQL", "SQLite", "NoSQL"],
  softSkills: [
    "Agile/Scrum Methodology", "Project Management", 
    "Problem Solving", "Team Collaboration"
  ]
};

// Experience data
export const experiences = [
  {
    id: 1,
    period: "Aug 2023 - Present",
    title: "Apprentice IT Operations Integrator Engineer",
    company: "Swiss Life France, Levallois-Perret",
    description: "Working as a Full Stack Engineer to develop solutions for infrastructure and operations teams.",
    skills: ["Project Management", "Network Security", "Full Stack Development"],
  },
  {
    id: 2,
    period: "Sep 2022 - Aug 2023",
    title: "Apprentice Technical Architect - Full Stack Developer",
    company: "Swiss Life France",
    description: "Implemented an automation and monitoring tool. Generated delivery reports for environment platforms. Monitored firewall objects (machines, VLAN groups, policies and rules).",
    skills: ["SQL", "Database Administration", "Automation"],
    isList: true
  },
  {
    id: 3,
    period: "Apr 2021 - Jun 2021",
    title: "Web Developer Intern",
    company: "Université Sorbonne Paris Nord, Villetaneuse",
    description: "Created web extensions for educational tools. Developed Turtleuitv: An application allowing control of a turtle with Python code and accompanying graphical interface. Implemented Pythontutor integration for step-by-step code visualization. Set up a containerized (Docker) version of JupyterHub.",
    skills: ["HTML5", "Python", "JavaScript", "Paper.js"],
    isList: true
  },
  {
    id: 4,
    period: "Jul 2019 - Sep 2020",
    title: "Mobile Applications Developer",
    company: "Independent, Palaiseau",
    description: "Developed a board game similar to checkers, available on Google Play Store. Initially developed for Android using Java and Eclipse. Currently redeveloping natively with React and Node.js for both iOS and Android.",
    skills: ["Java", "React.js", "Node.js", "Android Studio"],
    isList: true
  }
];

// Projects data
export const projects = [
  {
    id: 1,
    title: "SYAGES - Student Management Platform",
    description: "A web platform for administrative and educational management of students and interns.",
    image: "SYAGES",
    skills: ["PHP", "JavaScript", "MySQL", "MVC"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 2,
    title: "SNCF App Clone",
    description: "A clone of the SNCF application featuring shortest path algorithms between two points.",
    image: "SNCF Clone",
    skills: ["Vue.js", "Vuetify", "Python", "Algorithms"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 3,
    title: "Mobile Board Game",
    description: "A checkers-like board game available on Google Play Store, developed for Android and iOS.",
    image: "Board Game",
    skills: ["Java", "React Native", "Node.js", "SQLite"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 4,
    title: "Menance - AI Tic Tac Toe",
    description: "AI implementation that learns and plays Tic Tac Toe, developed in September 2022.",
    image: "Menance",
    skills: ["AI", "Machine Learning", "Python", "Algorithms"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 5,
    title: "Ago KMean - Data Science",
    description: "An unsupervised learning algorithm used to solve clustering problems, developed in March 2021.",
    image: "KMeans",
    skills: ["Data Science", "Machine Learning", "Python", "Clustering"],
    demoLink: "#",
    codeLink: "#"
  },
  {
    id: 6,
    title: "MMORPG Game",
    description: "A real-time multiplayer game for two players, developed in Java using Eclipse.",
    image: "MMORPG",
    skills: ["Java", "Eclipse", "Multiplayer", "Real-time"],
    demoLink: "#",
    codeLink: "#"
  }
];

// Education data
export const education = [
  {
    id: 1,
    period: "2023 - 2026",
    degree: "Engineering Degree, Computer Science",
    institution: "EFREI Paris, Villejuif",
    description: "Currently pursuing an engineering degree in Computer Science, specializing in software development and system architecture."
  },
  {
    id: 2,
    period: "2022 - 2023",
    degree: "Bachelor in Application Development",
    institution: "EPSI Paris, Puteaux",
    description: "Specialized in application development with a focus on web and mobile technologies."
  },
  {
    id: 3,
    period: "2021 - 2022",
    degree: "Engineering School - First Year",
    institution: "Sup Galilée, Université Sorbonne Paris Nord",
    description: "Completed the first year of engineering studies with a focus on computer science fundamentals."
  },
  {
    id: 4,
    period: "2019 - 2021",
    degree: "DUT (Associate's Degree), Computer Science",
    institution: "Université Sorbonne Paris Nord - IUT de Villetaneuse",
    description: "Two-year technical degree in Computer Science with a focus on programming, algorithms, and system design."
  },
  {
    id: 5,
    period: "2018 - 2019",
    degree: "Baccalauréat Scientifique (High School Diploma)",
    institution: "Lycée Malick Sy",
    description: "Scientific Baccalaureate with high honors (mention BIEN)."
  }
];

// Blog posts data (placeholder for future content)
export const blogPosts = [
  {
    id: 1,
    title: "Building Modern Web Applications with React",
    summary: "A comprehensive guide to building performant and scalable web applications using React and modern frontend tools.",
    category: "Web Development",
    imageGradient: "from-primary-500/70 to-secondary-500/70 dark:from-primary-500/50 dark:to-secondary-500/50",
    link: "#"
  },
  {
    id: 2,
    title: "CI/CD Pipelines for Modern Applications",
    summary: "Exploring best practices for implementing continuous integration and deployment workflows for your projects.",
    category: "DevOps",
    imageGradient: "from-secondary-500/70 to-primary-500/70 dark:from-secondary-500/50 dark:to-primary-500/50",
    link: "#"
  },
  {
    id: 3,
    title: "From Web to Mobile: Cross-Platform Development",
    summary: "How to leverage your web development skills to build native-like mobile applications for iOS and Android.",
    category: "Mobile Development",
    imageGradient: "from-blue-500/70 to-purple-500/70 dark:from-blue-500/50 dark:to-purple-500/50",
    link: "#"
  }
];
