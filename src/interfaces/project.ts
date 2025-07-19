export interface Project {
    title: string;
    description: string;
    tools: string[];
    liveLink?: string;
    codeLink?: string;
    issueLink?: string;
    image?: string;
    category: string;
    status: 'completed' | 'in-progress' | 'planning';
    featured: boolean;
    stats?: {
        stars?: number;
        forks?: number;
        contributors?: number;
    };
    detailedDescription?: string;
    challenges?: string[];
    achievements?: string[];
}