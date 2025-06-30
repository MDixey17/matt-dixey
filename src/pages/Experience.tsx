import React from 'react';
import { Calendar, Award, TrendingUp } from 'lucide-react';
import { experiences } from '../data/content';
import ExperienceCard from '../components/ExperienceCard';

const Experience: React.FC = () => {
  const totalYears = 3;
  const totalCompanies = experiences.length;
  const totalProjects = experiences.reduce((sum, exp) => sum + exp.achievements.length, 0);

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-dark-900 mb-6">
              Professional
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 ml-4">
                Experience
              </span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              My journey as a software engineer, from junior developer to senior engineer, 
              building scalable applications and leading technical initiatives.
            </p>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up">
              <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Calendar className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">{totalYears}+</div>
              <div className="text-secondary-600">Years Experience</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">{totalCompanies}</div>
              <div className="text-secondary-600">Companies / Organizations</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-8 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="w-16 h-16 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <Award className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-dark-900 mb-2">{totalProjects}+</div>
              <div className="text-secondary-600">Key Achievements</div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <div key={experience.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ExperienceCard experience={experience} index={index} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills & Technologies */}
      <section className="py-20 bg-gradient-to-br from-secondary-50 to-primary-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-dark-900 mb-4">Technologies I've Worked With</h2>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto">
              A collection of technologies and tools I've used throughout my career
            </p>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-up">
            {/* Programming Languages */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-blue-600 rounded-lg mr-3"></div>
                Programming Languages
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['TypeScript', 'JavaScript', 'CSS', 'HTML', 'Python', 'Java', 'Kotlin', 'C#', 'C++', 'Go'].map((lang) => (
                  <div key={lang} className="bg-secondary-50 rounded-xl p-4 text-center hover:bg-primary-50 transition-colors duration-300">
                    <div className="font-semibold text-dark-900">{lang}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frameworks */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-green-500 to-green-600 rounded-lg mr-3"></div>
                Frameworks & Libraries
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['React', 'Spring Boot', 'Node.js', 'Express', 'Jest', 'Cypress', 'Playwright', 'Kafka', 'React Native', 'Expo', 'ASP.NET'].map((framework) => (
                  <div key={framework} className="bg-secondary-50 rounded-xl p-4 text-center hover:bg-primary-50 transition-colors duration-300">
                    <div className="font-semibold text-dark-900">{framework}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools & Technologies */}
            <div>
              <h3 className="text-2xl font-bold text-dark-900 mb-6 flex items-center">
                <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-purple-600 rounded-lg mr-3"></div>
                Tools & Technologies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                {['MongoDB', 'Docker', 'PostgreSQL', 'Google Cloud Services', 'AWS', 'Microsoft Azure', 'GraphQL'].map((tool) => (
                  <div key={tool} className="bg-secondary-50 rounded-xl p-4 text-center hover:bg-primary-50 transition-colors duration-300">
                    <div className="font-semibold text-dark-900">{tool}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Experience;