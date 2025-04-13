import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const education = [
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

const EducationSection = () => {
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
    <section id="education" ref={sectionRef} className="py-20 bg-gray-50 dark:bg-dark-800">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-4">Education</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-dark-700 dark:text-dark-100 max-w-2xl mx-auto">
            My academic journey and educational qualifications.
          </p>
        </motion.div>
        
        {/* Education Roadmap */}
        <div className="max-w-4xl mx-auto">
          {/* Roadmap Path */}
          <div className="relative">
            {/* Path Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 dark:bg-dark-600 transform md:translate-x-[-50%]"></div>
            
            {/* Education Items */}
            <motion.div
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={containerVariants}
            >
              {education.map((edu, index) => (
                <motion.div 
                  key={edu.id}
                  className={`relative mb-12 md:mb-16 ${index === education.length - 1 ? '' : ''}`}
                  variants={itemVariants}
                >
                  <div className="flex flex-col md:flex-row items-start">
                    {/* Timeline Dot */}
                    <motion.div 
                      className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-secondary-500 border-4 border-white dark:border-dark-800 transform md:translate-x-[-50%] z-10"
                      initial={{ scale: 0 }}
                      animate={isInView ? { scale: 1 } : { scale: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    ></motion.div>
                    
                    {/* Date (Left Side on desktop) */}
                    <div className="md:w-1/2 pl-10 md:pl-0 md:pr-12 md:text-right mb-4 md:mb-0">
                      <div className="inline-block bg-secondary-500/10 dark:bg-secondary-500/20 text-secondary-600 dark:text-secondary-400 px-3 py-1 rounded-md font-medium">
                        {edu.period}
                      </div>
                    </div>
                    
                    {/* Content (Right Side on desktop) */}
                    <div className="md:w-1/2 pl-10 md:pl-12">
                      <div className="bg-white dark:bg-dark-700 p-6 rounded-lg shadow-md">
                        <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2">
                          {edu.degree}
                        </h3>
                        <div className="flex items-center text-dark-700 dark:text-dark-200 mb-4">
                          <i className="fa-solid fa-graduation-cap mr-2"></i>
                          <span>{edu.institution}</span>
                        </div>
                        <p className="text-dark-700 dark:text-dark-100">
                          {edu.description}
                        </p>
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

export default EducationSection;
