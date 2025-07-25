import type { Blog } from "../interfaces/blog.ts";

export const blogs: Blog[] = [
  {
    title: "Building a Document Management System with Spring Boot",
    description: "A comprehensive guide on creating a document management system using Spring Boot, covering architecture, design patterns, and best practices.",
    content: "In this blog post, we will explore how to build a robust document management system using Spring Boot. We will cover the architecture, design patterns, and best practices to ensure scalability and maintainability.",
    image: "/images/blogs/document-management-system.jpg",
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
    title: "Optimizing OCR Accuracy in Document Processing",
    description: "Techniques and tools to enhance OCR accuracy in document processing applications.",
    content: "This article discusses various techniques and tools that can be used to improve OCR accuracy in document processing applications. We will explore different OCR libraries, preprocessing techniques, and post-processing methods.",
    image: "/images/blogs/ocr-accuracy.jpg",
    alt: "OCR Accuracy",
    link: "https://example.com/blog/ocr-accuracy",
    datePublished: "2023-09-15",
    tags: ["OCR", "Image Processing", "Java"],
    platform: "Dev.to",
    views: 800,
    likes: 150,
    comments: 30
  }
];