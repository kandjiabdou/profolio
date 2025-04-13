import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { useLanguage } from "../i18n/LanguageContext";

const blogPosts = [
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

const BlogSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  const { translations } = useLanguage();

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
    <section id="blog" ref={sectionRef} className="py-20">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl lg:text-4xl font-heading font-bold text-dark-900 dark:text-white mb-4">{translations.blog.title}</h2>
          <div className="w-20 h-1.5 bg-primary-500 rounded-full mx-auto"></div>
          <p className="mt-4 text-dark-700 dark:text-dark-100 max-w-2xl mx-auto">
            {translations.blog.subtitle}
          </p>
        </motion.div>
        
        {/* Blog Posts Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={containerVariants}
        >
          {blogPosts.map((post) => (
            <motion.div 
              key={post.id}
              className="bg-white dark:bg-dark-800 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-dark-700 group"
              variants={itemVariants}
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              {/* Post Image */}
              <div className={`relative h-48 overflow-hidden bg-gradient-to-br ${post.imageGradient}`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-heading font-bold text-2xl text-white">Coming Soon</span>
                </div>
              </div>
              
              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-sm text-dark-600 dark:text-dark-300 mb-3">
                  <span>Future Post</span>
                  <span>•</span>
                  <span>{post.category}</span>
                </div>
                
                <h3 className="text-xl font-heading font-bold text-dark-900 dark:text-white mb-2">
                  {post.title}
                </h3>
                
                <p className="text-dark-700 dark:text-dark-200 mb-4">
                  {post.summary}
                </p>
                
                <a href={post.link} className="inline-flex items-center text-primary-600 dark:text-primary-500 hover:text-primary-700 dark:hover:text-primary-400 font-medium transition-colors duration-300">
                  {translations.blog.readMore}
                  <i className="fa-solid fa-arrow-right ml-1 text-sm"></i>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BlogSection;
