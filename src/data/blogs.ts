import type { Blog } from "../interfaces/blog.ts";

export const blogs: Blog[] = [
  {
    id: "1",
    title: "Building a Document Management System with Spring Boot",
    description: "A comprehensive guide on creating a document management system using Spring Boot, covering architecture, design patterns, and best practices.",
    content: "In this blog post, we will explore how to build a robust document management system using Spring Boot. We will cover the architecture, design patterns, and best practices to ensure scalability and maintainability.",
    image: "https://res.cloudinary.com/aniebietafia/image/upload/v1753433385/ocr-img_py25fb.jpg",
    alt: "Document Management System",
    link: "https://example.com/blog/document-management-system",
    datePublished: "2023-10-01",
    tags: ["Spring Boot", "Java", "Backend Development"],
    platform: "Medium",
    views: 1200,
    likes: 300,
    comments: 45
  },
  {
    id: "2",
    title: "gRPC vs REST! Which is better?",
    description: "A detailed comparison of gRPC and REST APIs, discussing their advantages, disadvantages, and use cases.",
    content: "In this article, we will compare gRPC and REST APIs, two popular approaches for building web services. We will discuss their advantages, disadvantages, and when to use each one based on your project requirements.",
    image: "https://miro.medium.com/v2/resize:fit:720/format:webp/0*Qf5DdubO46VCItQt",
    alt: "gRPC vs REST",
    link: "https://medium.com/@aniebietafia/grpc-vs-rest-which-is-better-f1250f0c7fbb",
    datePublished: "2025-07-25",
    tags: ["gRPC", "REST", "API Design", "Web Services", "Backend Development"],
    platform: "Medium",
    views: 800,
    likes: 150,
    comments: 30
  }
];