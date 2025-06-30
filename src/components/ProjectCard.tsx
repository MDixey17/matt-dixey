import React from 'react';
import { Github, ExternalLink, Clock, CheckCircle, PlayCircle } from 'lucide-react';
import { Project } from '../data/content';

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, featured = false }) => {
  const statusIcons = {
    completed: CheckCircle,
    'in-progress': Clock,
    planned: PlayCircle
  };

  const statusColors = {
    completed: 'text-green-600 bg-green-50 dark:bg-green-900/20 dark:text-green-400',
    'in-progress': 'text-yellow-600 bg-yellow-50 dark:bg-yellow-900/20 dark:text-yellow-400',
    planned: 'text-blue-600 bg-blue-50 dark:bg-blue-900/20 dark:text-blue-400'
  };

  const StatusIcon = statusIcons[project.status];

  return (
    <div className={`bg-background-primary rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-border-primary group overflow-hidden ${
      featured ? 'ring-2 ring-primary-500/20' : ''
    }`}>
      {/* Project Image Placeholder */}
      <div className="h-48 bg-gradient-to-br from-primary-500 to-primary-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20 flex items-center justify-center">
          <div className="text-white text-center">
            <h3 className="text-xl font-bold mb-2">{project.title}</h3>
            <p className="text-primary-100 text-sm">{project.description}</p>
          </div>
        </div>
        {featured && (
          <div className="absolute top-4 right-4 bg-yellow-400 text-yellow-900 px-2 py-1 rounded-full text-xs font-bold">
            Featured
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-text-primary group-hover:text-primary-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-text-tertiary mt-1 text-sm leading-relaxed">
              {project.longDescription}
            </p>
          </div>
          <div className={`flex items-center space-x-1 px-2 py-1 rounded-full text-xs font-medium ${statusColors[project.status]}`}>
            <StatusIcon className="w-3 h-3" />
            <span className="capitalize">{project.status.replace('-', ' ')}</span>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="px-3 py-1 bg-background-secondary text-text-secondary rounded-full text-sm font-medium border border-border-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div className="flex items-center space-x-4 pt-2">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-text-tertiary hover:text-primary-600 transition-colors duration-300"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Code</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-text-tertiary hover:text-primary-600 transition-colors duration-300"
            >
              <ExternalLink className="w-4 h-4" />
              <span className="text-sm font-medium">Live Demo</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;