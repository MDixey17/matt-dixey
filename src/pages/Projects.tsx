import React, { useState } from 'react';
import { Filter, Search } from 'lucide-react';
import { projects } from '../data/content';
import ProjectCard from '../components/ProjectCard';

const Projects: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState<'all' | 'featured' | 'completed' | 'in-progress'>('all');

  const filteredProjects = projects.filter(project => {
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    
    const matchesFilter = selectedFilter === 'all' || 
                         (selectedFilter === 'featured' && project.featured) ||
                         (selectedFilter === 'completed' && project.status === 'completed') ||
                         (selectedFilter === 'in-progress' && project.status === 'in-progress');

    return matchesSearch && matchesFilter;
  });

  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  
  const projectStats = {
    total: projects.length,
    featured: projects.filter(p => p.featured).length,
    completed: projects.filter(p => p.status === 'completed').length,
    inProgress: projects.filter(p => p.status === 'in-progress').length
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl font-bold text-dark-900 mb-6">
              My
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 to-primary-600 ml-4">
                Projects
              </span>
            </h1>
            <p className="text-xl text-dark-600 max-w-3xl mx-auto leading-relaxed">
              A collection of personal projects showcasing my passion for technology, 
              from Formula 1 dashboards to trading card managers.
            </p>
          </div>

          {/* Project Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up">
              <div className="text-3xl font-bold text-dark-900 mb-2">{projectStats.total}</div>
              <div className="text-secondary-600">Total Projects</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
              <div className="text-3xl font-bold text-primary-600 mb-2">{projectStats.featured}</div>
              <div className="text-secondary-600">Featured</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
              <div className="text-3xl font-bold text-green-600 mb-2">{projectStats.completed}</div>
              <div className="text-secondary-600">Completed</div>
            </div>
            
            <div className="bg-white rounded-2xl shadow-lg p-6 text-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
              <div className="text-3xl font-bold text-yellow-600 mb-2">{projectStats.inProgress}</div>
              <div className="text-secondary-600">In Progress</div>
            </div>
          </div>

          {/* Search and Filter */}
          <div className="bg-white rounded-2xl shadow-lg p-8 animate-slide-up" style={{ animationDelay: '0.4s' }}>
            <div className="flex flex-col md:flex-row gap-6">
              {/* Search */}
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-secondary-400" />
                  <input
                    type="text"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="w-full pl-12 pr-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  />
                </div>
              </div>

              {/* Filter */}
              <div className="flex items-center space-x-4">
                <Filter className="w-5 h-5 text-secondary-400" />
                <select
                  value={selectedFilter}
                  onChange={(e) => setSelectedFilter(e.target.value as any)}
                  className="px-4 py-3 border border-secondary-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                >
                  <option value="all">All Projects</option>
                  <option value="featured">Featured</option>
                  <option value="completed">Completed</option>
                  <option value="in-progress">In Progress</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <div className="w-24 h-24 bg-secondary-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Search className="w-12 h-12 text-secondary-400" />
              </div>
              <h3 className="text-2xl font-bold text-dark-900 mb-4">No projects found</h3>
              <p className="text-dark-600 mb-8">Try adjusting your search or filter criteria.</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedFilter('all');
                }}
                className="inline-flex items-center space-x-2 bg-primary-500 text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-600 transition-all duration-300"
              >
                <span>Clear Filters</span>
              </button>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredProjects.map((project, index) => (
                  <div key={project.id} className="animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <ProjectCard project={project} featured={project.featured} />
                  </div>
                ))}
              </div>

              {/* Tech Stack Overview */}
              <div className="mt-20 bg-gradient-to-br from-secondary-50 to-primary-50 rounded-3xl p-8 lg:p-12">
                <h2 className="text-3xl font-bold text-dark-900 mb-8 text-center">Technologies Used</h2>
                <div className="flex flex-wrap gap-3 justify-center">
                  {allTags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white rounded-full text-dark-700 font-medium shadow-sm hover:shadow-md transition-shadow duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </>
          )}
        </div>
      </section>
    </div>
  );
};

export default Projects;