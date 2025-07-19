import type {Certification} from "../interfaces/certification.ts";

export const certifications: Certification[] = [
  {
    id: 'alx-software-engineering',
    title: 'Software Engineering Certification',
    description: 'Comprehensive software engineering program covering full-stack development, system design, and software engineering best practices.',
    issuer: 'ALX',
    link: 'https://res.cloudinary.com/aniebietafia/image/upload/v1752795445/certifications/Software_Engineering_Certificate_aj3pra.png',
    image: 'Software_Engineering_Certificate_aj3pra.png',
    alt: 'ALX Software Engineering Certificate',
    dateEarned: '2023',
    skills: ['Full-Stack Development', 'System Design', 'Software Engineering', 'Problem Solving']
  },
  {
    id: 'altschool-africa',
    title: 'Backend Engineering Certification',
    description: 'Advanced backend engineering program focusing on system design, data structures, algorithms, and backend technologies. Hands-on experience with Node.js, Express, MongoDB, and Redis.',
    issuer: 'AltSchool Africa',
    link: 'https://res.cloudinary.com/aniebietafia/image/upload/v1752945444/certifications/altschool_africa_certificate_jekunr.jpg', // Replace with actual certification link
    image: 'altschool_africa_certificate_jekunr.jpg',
    alt: 'AltSchool Africa Backend Engineering Certificate',
    dateEarned: '2023',
    expirationDate: '',
    skills: ['System Design', 'Problem Solving', 'Data Structures', 'Algorithms', 'Node.js', 'Express', 'MongoDB', 'Mongoose', 'Redis'],
  },
  {
    id: 'udemy-angular',
    title: 'Angular - The Complete Guide',
    description: 'Comprehensive course on Angular covering all aspects of the framework including components, directives, services, and routing. Hands-on projects to solidify understanding.',
    issuer: 'Udemy',
    link: 'https://res.cloudinary.com/aniebietafia/image/upload/v1752796091/certifications/UC-Angular.jpg',
    image: 'UC-Angular.jpg',
    alt: 'Udemy Angular Certificate',
    dateEarned: '2025',
    skills: ['Angular', 'TypeScript', 'Frontend Development', 'Responsive Design', 'Web Development']
  }
];
