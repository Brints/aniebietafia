import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";
import AboutMe from "../views/AboutMe.vue";
import ProjectsSection from "../views/ProjectsSection.vue";
import ElevatorPitch from "../views/ElevatorPitch.vue";
import TheSkills from "../views/TheSkills.vue";
import CertificationSection from "../views/CertificationSection.vue";
import ContactMe from "../views/ContactMe.vue";

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