import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import { Skill } from '../data/content';

interface SkillCardProps {
  title: string;
  icon: LucideIcon;
  skills: Skill[];
}

const SkillCard: React.FC<SkillCardProps> = ({ title, icon: Icon, skills }) => {
  return (
    <div className="bg-background-primary rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 border border-border-primary">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-xl font-bold text-text-primary">{title}</h3>
      </div>
      
      <div className="space-y-4">
        {skills.map((skill) => (
          <div key={skill.name} className="group">
            <div className="flex justify-between items-center mb-2">
              <span className="text-text-secondary font-medium group-hover:text-primary-600 transition-colors duration-300">
                {skill.name}
              </span>
              <span className="text-sm text-text-tertiary font-medium">
                {skill.level}%
              </span>
            </div>
            <div className="w-full bg-background-secondary rounded-full h-2 overflow-hidden border border-border-primary">
              <div
                className="bg-gradient-to-r from-primary-500 to-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                style={{ width: `${skill.level}%` }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;