import { motion } from "framer-motion";
import { Logo } from "./ui/logo";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-dark-900 text-white py-12">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo & Tagline */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2 font-heading font-bold text-xl text-white mb-2">
              <div className="w-8 h-8 rounded-md bg-primary-500 text-white flex items-center justify-center">
                AK
              </div>
              <span>Abdou Kandji</span>
            </div>
            <p className="text-gray-400 max-w-md">
              Full Stack Developer passionate about creating elegant solutions to complex problems.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-6 md:mb-0">
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Navigation</h4>
              <ul className="space-y-2">
                <li><a href="#hero" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Home</a></li>
                <li><a href="#about" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">About</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-heading font-bold text-white mb-4">Contact</h4>
              <ul className="space-y-2">
                <li><a href="mailto:abdou.k.kandji@gmail.com" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">Email</a></li>
                <li><a href="https://linkedin.com/in/kandji" target="_blank" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">LinkedIn</a></li>
                <li><a href="https://github.com/kandjiabdou" target="_blank" className="text-gray-400 hover:text-primary-500 transition-colors duration-300">GitHub</a></li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="border-t border-dark-700 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Abdou Kandji. All rights reserved.
          </p>
          
          <div className="flex items-center space-x-4">
            <a href="https://github.com/kandjiabdou" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-github text-xl"></i>
            </a>
            <a href="https://linkedin.com/in/kandji" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-linkedin text-xl"></i>
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300">
              <i className="fa-brands fa-twitter text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
