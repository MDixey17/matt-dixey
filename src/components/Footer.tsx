import React from 'react';
import { Github, Linkedin, Mail, Heart, Coffee } from 'lucide-react';
import { personalInfo } from '../data/content';

const Footer: React.FC = () => {
  return (
    <footer className="bg-background-secondary border-t border-border-primary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-primary-400">{personalInfo.name}</h3>
            <p className="text-text-secondary leading-relaxed">
              {personalInfo.tagline}
            </p>
            <div className="flex space-x-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary-400 transition-colors duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-tertiary hover:text-primary-400 transition-colors duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="text-text-tertiary hover:text-primary-400 transition-colors duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-text-secondary hover:text-primary-400 transition-colors duration-300">
                  About
                </a>
              </li>
              <li>
                <a href="#experience" className="text-text-secondary hover:text-primary-400 transition-colors duration-300">
                  Experience
                </a>
              </li>
              <li>
                <a href="#projects" className="text-text-secondary hover:text-primary-400 transition-colors duration-300">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="text-text-secondary hover:text-primary-400 transition-colors duration-300">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Interests */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-text-primary">Interests</h4>
            <div className="flex flex-wrap gap-2">
              {personalInfo.interests.map((interest) => (
                <span
                  key={interest}
                  className="px-3 py-1 bg-background-tertiary text-text-secondary rounded-full text-sm border border-border-primary"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border-primary mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>
          <div className="flex items-center space-x-2 text-text-tertiary text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-400" />
            <span>and</span>
            <Coffee className="w-4 h-4 text-primary-400" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;