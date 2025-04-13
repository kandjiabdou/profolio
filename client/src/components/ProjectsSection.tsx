import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const projects = [
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

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section id="projects" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-4">Featured Projects</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-dark-700 dark:text-dark-100 max-w-2xl mx-auto">
            Explore a selection of my latest projects, showcasing my skills and experience.
          </p>
        </motion.div>
        
        {/* Projects Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {projects.map((project) => (
            <motion.div 
              key={project.id}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-dark-700 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-200 dark:bg-dark-700">
                <div className="absolute inset-0 flex items-center justify-center text-gray-400 dark:text-dark-600 font-heading font-bold text-2xl bg-gradient-to-br from-primary-500/10 to-secondary-500/10 dark:from-primary-500/5 dark:to-secondary-500/5">
                  {project.image}
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 w-full">
                    <div className="flex gap-2 justify-end">
                      <a href={project.demoLink} className="w-9 h-9 bg-white/90 dark:bg-dark-800/90 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-500 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors duration-300" title="View Demo">
                        <i className="fa-solid fa-eye text-sm"></i>
                      </a>
                      <a href={project.codeLink} className="w-9 h-9 bg-white/90 dark:bg-dark-800/90 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-500 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-500 dark:hover:text-white transition-colors duration-300" title="View Code">
                        <i className="fa-solid fa-code text-sm"></i>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2">
                  {project.title}
                </h3>
                <p className="text-dark-700 dark:text-dark-200 mb-4">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.skills.map((skill, i) => (
                    <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-dark-700 text-dark-700 dark:text-dark-200 text-xs rounded-md">{skill}</span>
                  ))}
                </div>
                <a href={project.demoLink} className="inline-flex items-center text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors duration-300">
                  Learn more
                  <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* More Projects Button */}
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a href="https://github.com/kandjiabdou" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-dark-800 hover:bg-gray-100 dark:hover:bg-dark-700 text-dark-800 dark:text-white border border-gray-300 dark:border-dark-700 font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300">
            <i className="fa-brands fa-github"></i>
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
