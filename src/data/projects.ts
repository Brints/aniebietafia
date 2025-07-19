export interface Project {
  title: string;
  description: string;
  tools: string[];
  liveLink?: string;
  codeLink?: string;
  issueLink?: string;
}

export const projects: Project[] = [
  {
    title: "UnravelDocs (Backend)",
    description:
      "UnravelDocs is a document management system that allows users to upload hardcopy documents and convert them into digital format. It uses OCR technology and provides a user-friendly interface. It is built using Java and Spring Boot.",
    tools: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JPA",
      "Redis",
      "Maven",
      "JUnit",
      "Mockito",
      "Spring Security",
      "Tesseract OCR",
      "Docker",
      "AWS S3",
      "Hibernate",
      "REST API",
      "Swagger",
      "AWS EC2",
      "Thymeleaf",
      "AWS RDS",
      "AWS SES",
      "AWS Route 53",
      "AWS CloudFront",
    ],
    liveLink: "https://unraveldocs.xyz",
    codeLink: "https://github.com/Brints/UnravelDocs",
  },
  {
    title: "Brints Estate (Backend)",
    description:
      "Brints Estate is a real estate management system that allows users to search for properties, schedule visits, and manage their listings. It provides a comprehensive solution for real estate agents and buyers.",
    tools: [
      "Node.js",
      "NestJS",
      "PostgreSQL",
      "TypeORM",
      "Jest",
      "Supertest",
      "Heroku",
      "JWT",
      "Bcrypt",
    ],
    liveLink: "https://myproject.live",
    codeLink: "https://github.com/Brints/nestjs-brints-group-estate",
  },
  {
    title: "Sales Agent (Integration)",
    description:
      "Sales Agent is an AI-Powered Integration tool that introduces a cutting-edge solution for business owners to discover potential leads with ease. By specifying their business type and target audience through a simple chat with a sales agent, users receive a curated list of relevant leads in an organized format. This streamlined process enhances customer outreach and supports business growth.",
    tools: ["Java", "Spring Boot", "PostgreSQL", "MistralAI API", "Docker"],
    liveLink: "https://github.com/telexintegrations/sales-agent",
    codeLink: "https://github.com/telexintegrations/sales-agent",
  },
  {
    title: "Airbyte Integration (Zulip open source)",
    description:
      "Airbyte Integration for Zulip is a custom integration that allows users to connect Zulip with Airbyte, enabling seamless data synchronization between the two platforms. It provides a user-friendly interface for managing data flows and supports various data sources.",
    tools: ["Python", "Airbyte API", "Zulip API", "Django"],
    issueLink: "https://github.com/zulip/zulip/issues/31746",
    codeLink: "https://github.com/zulip/zulip/pull/31922",
  },
  {
    title: "Replace some uses of window.global() with upcast (servo open source)",
    description: "All Window objects are also GlobalScope objects, and we should obtain that global scope with window.upcast::<GlobalScope>(). This is a simple transmute operation and is more efficient than window.global(), which requires calling several C++ functions in the JS engine. This project involves replacing instances of window.global() with upcast in the Servo browser engine, improving code quality and maintainability.",
    tools: ["Rust", "Servo", "WebAssembly", "JavaScript"],
    issueLink: "https://github.com/servo/servo/issues/36117",
    codeLink: "https://github.com/servo/servo/pull/36179"
  },

];

