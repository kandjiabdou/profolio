import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const experiences = [
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

const ExperienceSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
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
    <section id="experience" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-4">Work Experience</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-dark-700 dark:text-dark-100 max-w-2xl mx-auto">
            My professional journey through various roles and responsibilities.
          </p>
        </motion.div>
        
        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto">
          {/* Timeline Container */}
          <div className="relative">
            {/* Vertical Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-dark-600 transform md:translate-x-[-50%]"></div>
            
            {/* Experience Items */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {experiences.map((exp, index) => (
                <motion.div 
                  key={exp.id}
                  className={`relative mb-12 md:mb-16 ${index === experiences.length - 1 ? '' : ''}`}
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row items-start">
                    {/* Timeline Dot */}
                    <motion.div 
                      className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary-500 border-4 border-white dark:border-dark-800 transform md:translate-x-[-50%] z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    ></motion.div>
                    
                    {/* Date (Left Side on desktop) */}
                    <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right mb-4 md:mb-0">
                      <div className="inline-block bg-primary-500/10 dark:bg-primary-500/20 text-primary-600 dark:text-primary-400 px-3 py-1 rounded-md font-medium">
                        {exp.period}
                      </div>
                    </div>
                    
                    {/* Content (Right Side on desktop) */}
                    <div className="md:w-1/2 pl-10 md:pl-12">
                      <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2">
                          {exp.title}
                        </h3>
                        <div className="flex items-center text-dark-700 dark:text-dark-200 mb-4">
                          <i className="fa-solid fa-building mr-2"></i>
                          <span>{exp.company}</span>
                        </div>
                        <div className="text-dark-700 dark:text-dark-100">
                          {exp.isList ? (
                            <ul className="list-disc pl-5 space-y-1">
                              {exp.description.split('. ').map((item, i) => (
                                <li key={i}>{item}</li>
                              ))}
                            </ul>
                          ) : (
                            <p>{exp.description}</p>
                          )}
                          <div className="mt-4 flex flex-wrap gap-2">
                            {exp.skills.map((skill, i) => (
                              <span key={i} className="px-2 py-1 bg-gray-100 dark:bg-dark-600 text-dark-700 dark:text-dark-200 text-xs rounded-md">{skill}</span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
