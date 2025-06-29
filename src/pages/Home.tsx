import React from 'react';
import { ChevronRight, Star, Zap, Trophy, Target, Rocket, Coffee } from 'lucide-react';
import { Link } from 'react-router-dom';
import { personalInfo, skills, experiences, projects, skillCategories } from '../data/content';
import SkillCard from '../components/SkillCard';
import Carousel from '../components/Carousel';
import ExperienceCard from '../components/ExperienceCard';
import ProjectCard from '../components/ProjectCard';

const Home: React.FC = () => {
  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) acc[skill.category] = [];
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skills>);

  const featuredExperiences = experiences.slice(0, 3);
  const featuredProjects = projects.filter(p => p.featured);

  const interestIcons = {
    'Formula 1': Trophy,
    'Baseball': Target,
    'Hockey': Target,
    'Trading Cards': Star,
    'Star Wars': Rocket,
    'Marvel': Zap,
    'Gaming': Coffee
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-background-primary to-background-secondary dark:from-primary-900/20 dark:via-background-primary dark:to-background-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 animate-slide-in-left">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-text-primary leading-tight">
                  Hi, I'm{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600">
                    {personalInfo.name}
                  </span>
                </h1>
                <p className="text-2xl text-primary-600 font-semibold">
                  {personalInfo.title}
                </p>
                <p className="text-lg text-text-secondary leading-relaxed max-w-2xl">
                  {personalInfo.tagline}
                </p>
              </div>

              <div className="flex flex-wrap gap-4">
                <Link
                  to="/projects"
                  className="inline-flex items-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <span>View My Work</span>
                  <ChevronRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/contact"
                  className="inline-flex items-center space-x-2 bg-background-primary text-primary-600 px-8 py-4 rounded-xl font-semibold border-2 border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-all duration-300 hover:scale-105"
                >
                  <span>Get In Touch</span>
                </Link>
              </div>

              {/* Personal Interests */}
              <div className="flex flex-wrap gap-3">
                {personalInfo.interests.map((interest) => {
                  const Icon = interestIcons[interest as keyof typeof interestIcons] || Star;
                  return (
                    <div
                      key={interest}
                      className="flex items-center space-x-2 bg-background-secondary/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-border-primary"
                    >
                      <Icon className="w-4 h-4 text-primary-500" />
                      <span className="text-sm font-medium text-text-secondary">{interest}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Profile Image Placeholder */}
            <div className="animate-slide-in-right">
              <div className="relative">
                <div className="w-80 h-80 mx-auto bg-gradient-to-br from-primary-500 to-primary-600 rounded-3xl shadow-2xl flex items-center justify-center">
                  <div className="text-white text-center">
                    <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <span className="text-4xl font-bold">M</span>
                    </div>
                    <p className="text-xl font-semibold">Software Engineer</p>
                    <p className="text-primary-100 mt-2">3+ Years Experience</p>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center animate-bounce-slow">
                  <Trophy className="w-8 h-8 text-yellow-800" />
                </div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-green-400 rounded-full flex items-center justify-center animate-pulse-slow">
                  <Zap className="w-6 h-6 text-green-800" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Skills & Technologies</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              A comprehensive toolkit built through years of experience and continuous learning
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {Object.entries(skillCategories).map(([key, category]) => (
              <div key={key} className="animate-slide-up">
                <SkillCard
                  title={category.name}
                  icon={category.icon}
                  skills={skillsByCategory[key] || []}
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Carousel */}
      <section className="py-20 bg-gradient-to-br from-background-secondary to-primary-50 dark:from-background-secondary dark:to-primary-900/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Professional Experience</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Journey through my career highlights and key achievements
            </p>
          </div>

          <Carousel
            items={featuredExperiences}
            renderItem={(experience, index) => (
              <ExperienceCard key={experience.id} experience={experience} index={index} />
            )}
            itemsPerView={1}
            autoplay={true}
            autoplayInterval={6000}
            className="animate-slide-up"
          />

          <div className="text-center mt-12">
            <Link
              to="/experience"
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>View All Experience</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-background-primary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">Featured Projects</h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto">
              Showcasing my most impactful and innovative work
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project, index) => (
              <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <ProjectCard project={project} featured={true} />
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/projects"
              className="inline-flex items-center space-x-2 bg-primary-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <span>View All Projects</span>
              <ChevronRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-background-secondary dark:from-primary-900/20 dark:to-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-4xl font-bold text-text-primary mb-4">About Me</h2>
          </div>

          <div className="bg-background-primary rounded-3xl shadow-xl p-8 lg:p-12 animate-slide-up border border-border-primary">
            <p className="text-lg text-text-secondary leading-relaxed">
              {personalInfo.bio}
            </p>
            
            <div className="mt-8 pt-8 border-t border-border-primary">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div className="text-center sm:text-left">
                  <p className="text-sm text-text-tertiary">Based in</p>
                  <p className="text-lg font-semibold text-text-primary">{personalInfo.location}</p>
                </div>
                <Link
                  to="/contact"
                  className="mt-4 sm:mt-0 inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300 hover:scale-105"
                >
                  <span>Let's Connect</span>
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;