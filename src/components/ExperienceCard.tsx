import React from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { Experience } from '../data/content';

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <div className="bg-background-primary rounded-2xl shadow-lg p-8 hover:shadow-xl transition-all duration-300 border border-border-primary group">
      <div className="flex flex-col lg:flex-row lg:items-start space-y-4 lg:space-y-0 lg:space-x-6">
        {/* Company Logo Placeholder */}
        <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
          <span className="text-white font-bold text-xl">
            {experience.company.split(' ').length >= 4 ? experience.company.split(' ')[0].charAt(0) : experience.company.split(' ').map(word => word[0]).join('')}
          </span>
        </div>

        {/* Content */}
        <div className="flex-1 space-y-4">
          <div>
            <h3 className="text-2xl font-bold text-text-primary group-hover:text-primary-600 transition-colors duration-300">
              {experience.title}
            </h3>
            <p className="text-xl text-primary-600 font-semibold">
              {experience.company}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-text-tertiary">
            <div className="flex items-center space-x-2">
              <Calendar className="w-4 h-4" />
              <span className="text-sm font-medium">{experience.duration}</span>
            </div>
            <div className="flex items-center space-x-2">
              <MapPin className="w-4 h-4" />
              <span className="text-sm font-medium">{experience.location}</span>
            </div>
          </div>

          <p className="text-text-secondary leading-relaxed">
            {experience.description}
          </p>

          {/* Achievements */}
          <div className="space-y-2">
            <h4 className="font-semibold text-text-primary">Key Achievements:</h4>
            <ul className="space-y-2">
              {experience.achievements.map((achievement, idx) => (
                <li key={idx} className="flex items-start space-x-2">
                  <div className="w-2 h-2 bg-primary-500 rounded-full mt-2 flex-shrink-0" />
                  <span className="text-text-secondary text-sm leading-relaxed">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {experience.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-primary-50 dark:bg-primary-900/20 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium border border-primary-200 dark:border-primary-800"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;