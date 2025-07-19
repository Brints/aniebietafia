export interface Certification {
    id: string;
    title: string;
    description: string;
    issuer: string;
    link: string;
    image: string;
    alt: string;
    dateEarned: string;
    expirationDate?: string;
    credentialId?: string;
    skills: string[];
}