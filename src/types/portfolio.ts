export interface SkillItem {
  name: string;
  category: 'mathematics' | 'teaching' | 'technology';
  icon: string;
  description: string;
  topics?: string[];
}

export interface EducationItem {
  degree: string;
  field: string;
  institution: string;
  isPlaceholderInstitution?: boolean;
  period: string;
  location: string;
  description: string;
  coreSubjects: string[];
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  institution: string;
  isPlaceholderInstitution?: boolean;
  period: string;
  location: string;
  tagline: string;
  responsibilities: string[];
  teachingMethods: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'modelling' | 'resources' | 'presentations' | 'research';
  categoryLabel: string;
  summary: string;
  description: string;
  technologies: string[];
  methods: string[];
  equationSample?: string;
  status: 'Ready for Review' | 'Active Exploration' | 'Teaching In Use' | 'Curriculum Material';
  details: {
    problemStatement: string;
    methodology: string;
    educationalImpact: string;
    keyTakeaway: string;
  };
}

export interface PhilosophyPrinciple {
  number: string;
  title: string;
  tagline: string;
  description: string;
  classroomApplication: string;
  icon: string;
}

export interface AchievementItem {
  title: string;
  category: 'Academic' | 'Teaching' | 'Training & Workshop' | 'Research' | 'Award';
  issuer: string;
  year: string;
  description: string;
  isPlaceholder?: boolean;
}
