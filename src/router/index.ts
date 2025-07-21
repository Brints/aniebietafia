import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

const AboutMe = () => import("../views/AboutMe.vue");
const ProjectsSection = () => import("../views/ProjectsSection.vue");
const ElevatorPitch = () => import("../views/ElevatorPitch.vue");
const TheSkills = () => import("../views/TheSkills.vue");
const CertificationSection = () => import("../views/CertificationSection.vue");
const ContactMe = () => import("../views/ContactMe.vue");

const routes: Array<RouteRecordRaw> = [
    { path: '/', name: 'home', redirect: '/about' },
    { path: '/about', name: 'about', component: AboutMe },
    { path: '/projects', name: 'projects', component: ProjectsSection },
    { path: '/elevator-pitch', name: 'elevator-pitch', component: ElevatorPitch },
    { path: '/skills', name: 'skills', component: TheSkills },
    { path: '/certifications', name: 'certifications', component: CertificationSection },
    { path: '/contact', name: 'contact', component: ContactMe },
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;