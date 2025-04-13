import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const programmingLanguages = [
  { name: "Java", percentage: 90 },
  { name: "JavaScript", percentage: 85 },
  { name: "Python", percentage: 80 },
  { name: "PHP", percentage: 75 },
  { name: "C/C++", percentage: 70 }
];

const webTechnologies = [
  "React", "Node.js", "Vue.js", "Angular", "HTML5", 
  "CSS3", "Symfony", "Bootstrap", "REST API", "jQuery"
];

const devOpsTools = [
  "Git", "Docker", "Jenkins", "Linux", "CI/CD", 
  "SonarQube", "Grafana", "Maven", "Postman", "VS Code"
];

const databases = ["MySQL", "PostgreSQL", "SQLite", "NoSQL"];

const softSkills = [
  "Agile/Scrum Methodology", "Project Management", 
  "Problem Solving", "Team Collaboration"
];

const SkillsSection = () => {
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

  const barVariants = {
    hidden: { width: 0 },
    visible: (percentage: number) => ({
      width: `${percentage}%`,
      transition: {
        duration: 1,
        ease: "easeInOut"
      }
    })
  };

  return (
    <section id="skills" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-4">My Skills</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-dark-700 dark:text-dark-100 max-w-2xl mx-auto">
            A comprehensive toolkit of technologies and methodologies I've mastered throughout my journey.
          </p>
        </motion.div>
        
        {/* Skills Categories */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {/* Programming Languages */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-dark-700"
            variants={itemVariants}
          >
            <div className="text-primary-500 mb-4">
              <i className="fa-solid fa-code text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-4">
              Programming Languages
            </h3>
            <div className="space-y-4">
              {programmingLanguages.map((lang) => (
                <div className="skill-item" key={lang.name}>
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-medium text-dark-800 dark:text-dark-100">{lang.name}</span>
                    <span className="text-sm text-dark-700 dark:text-dark-200">{lang.percentage}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 dark:bg-dark-700 rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-primary-500 rounded-full"
                      custom={lang.percentage}
                      variants={barVariants}
                    ></motion.div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Web Technologies */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-dark-700"
            variants={itemVariants}
          >
            <div className="text-secondary-500 mb-4">
              <i className="fa-solid fa-globe text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-4">
              Web Technologies
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {webTechnologies.map((tech) => (
                <div className="skill-chip flex items-center gap-2" key={tech}>
                  <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                  <span className="text-dark-800 dark:text-dark-100">{tech}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* DevOps & Tools */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-dark-700"
            variants={itemVariants}
          >
            <div className="text-primary-500 mb-4">
              <i className="fa-solid fa-gears text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-4">
              DevOps & Tools
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {devOpsTools.map((tool) => (
                <div className="skill-chip flex items-center gap-2" key={tool}>
                  <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                  <span className="text-dark-800 dark:text-dark-100">{tool}</span>
                </div>
              ))}
            </div>
          </motion.div>
          
          {/* Databases & Soft Skills */}
          <motion.div 
            className="bg-white dark:bg-dark-800 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 p-6 border border-gray-100 dark:border-dark-700"
            variants={itemVariants}
          >
            <div className="text-secondary-500 mb-4">
              <i className="fa-solid fa-database text-3xl"></i>
            </div>
            <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-4">
              Databases & Soft Skills
            </h3>
            {/* Databases */}
            <div className="mb-6">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-700 dark:text-dark-200 mb-3">Databases</h4>
              <div className="grid grid-cols-2 gap-2">
                {databases.map((db) => (
                  <div className="skill-chip flex items-center gap-2" key={db}>
                    <div className="w-3 h-3 rounded-full bg-secondary-500"></div>
                    <span className="text-dark-800 dark:text-dark-100">{db}</span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Soft Skills */}
            <div>
              <h4 className="text-sm font-semibold uppercase tracking-wider text-dark-700 dark:text-dark-200 mb-3">Soft Skills</h4>
              <div className="grid grid-cols-1 gap-2">
                {softSkills.map((skill) => (
                  <div className="skill-chip flex items-center gap-2" key={skill}>
                    <div className="w-3 h-3 rounded-full bg-primary-500"></div>
                    <span className="text-dark-800 dark:text-dark-100">{skill}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
