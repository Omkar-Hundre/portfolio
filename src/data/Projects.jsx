/*
href={project.href}
key={project.title}
title={project.title}
description={project.description}
tags={project.technologies}
image={project.image}
video={project.video}
inks={project.links}
*/

// Zorabase Screenshots
import Zora1 from "../assets/project-demo/Zora/1.png";
import Zora2 from "../assets/project-demo/Zora/2.png";
import Zora3 from "../assets/project-demo/Zora/3.png";

// Bus Tracking System Screenshots
import ss1 from "../assets/project-demo/BusTS/1.jpg";
import ss2 from "../assets/project-demo/BusTS/2.jpg";
import ss3 from "../assets/project-demo/BusTS/3.jpg";
import ss4 from "../assets/project-demo/BusTS/4.jpg";
import ss5 from "../assets/project-demo/BusTS/5.jpg";
import ss6 from "../assets/project-demo/BusTS/6.jpg";

// Cosem Screenshots
import Cosem1 from "../assets/project-demo/Cosem/1.png";
import Cosem2 from "../assets/project-demo/Cosem/2.png";
import Cosem3 from "../assets/project-demo/Cosem/3.png";
import Cosem4 from "../assets/project-demo/Cosem/4.png";
import Cosem5 from "../assets/project-demo/Cosem/5.png";
import Cosem6 from "../assets/project-demo/Cosem/6.png";
import Cosem7 from "../assets/project-demo/Cosem/7.png";
import Cosem8 from "../assets/project-demo/Cosem/8.png";

// Health Screenshots
import health1 from "../assets/project-demo/health/1.jpeg";
import health2 from "../assets/project-demo/health/2.jpeg";
import health3 from "../assets/project-demo/health/3.jpeg";
import health4 from "../assets/project-demo/health/4.jpeg";

// ThinkSoul Screenshots (Add images to src/assets/project-demo/ThinkSoul/ then uncomment these)
import TS1 from "../assets/project-demo/ThinkSoul/TS1.jpg";
import TS2 from "../assets/project-demo/ThinkSoul/TS2.jpg";
import TS3 from "../assets/project-demo/ThinkSoul/TS3.jpg";
import TS4 from "../assets/project-demo/ThinkSoul/TS4.jpg";
import TS5 from "../assets/project-demo/ThinkSoul/TS5.jpg";
import TS6 from "../assets/project-demo/ThinkSoul/TS6.jpg";

import { Icons } from "../Components/ui/icon";

// import { HomeIcon, NotebookIcon } from "lucide-react";

export const PROJECTS = [
  {
    id: "thinksoul-lms",
    title: "ThinkSoul LMS",
    screenshots: [],
    // When you add images to assets/project-demo/ThinkSoul, import them above and add here: [TS1, TS2, TS3]
    image: [TS1, TS2, TS3, TS4, TS5, TS6],
    description: "Architected a Multi-tenant SaaS learning platform featuring real-time document synchronization and interactive Kanban boards. Optimized VPS infrastructure using Standalone Builds and Nginx Reverse Proxying, achieving 99.9% uptime. Deployed a cross-platform mobile shell with Over-the-Air (OTA) updates.",
    technologies: [
      "nextjs",
      "supabase",
      "tailwind",
      "capacitor",
      "nginx",
      "pm2",
      "postgresql"
    ],
    liveUrl: "https://thinksoul.in",
    links: [
      {
        type: "Website",
        href: "https://thinksoul.in",
        icon: "globe",
      }
    ],
  },
  {
    id: "zorabase",
    title: "Zorabase Real-time Cloud",
    screenshots: [],
    image: [Zora1, Zora2, Zora3],
    description: "Engineered a high-performance Firebase alternative supporting 1500+ concurrent connections via optimized multi-threading. Implemented a real-time security rules engine and custom WebSocket-based data synchronization for zero-latency updates. Built a centralized monitoring dashboard to track system health.",
    technologies: [
      "python",
      "redis",
      "json",
      "websocket",
      "firebase",
      "multithreading",
    ],
    codeUrl: "https://github.com/Omkar-Hundre",
    liveUrl: "https://zorabase-demo.vercel.app/",
    links: [
      {
        type: "Website",
        href: "https://zorabase-demo.vercel.app/",
        icon: "globe",
      },
      {
        type: "Github",
        icon: "github",
        href: "https://github.com/Omkar-Hundre",
      },
    ],
  },
  {
    id: "cosem",
    title: "COSEM Industrial AI",
    screenshots: [],
    image: [Cosem1, Cosem2, Cosem3, Cosem4, Cosem5, Cosem6, Cosem7, Cosem8],
    description: "Reduced industrial quote generation time from 7 days to 5 minutes using custom complex data models and AI-driven cost prediction. Deployed a secure, offline-capable desktop solution for sensitive hydraulic manufacturing environments, digitizing workflows for major firms.",
    technologies: [
      "electron",
      "nodejs",
      "json",
      "ai",
      "javascript",
      "html",
      "css",
    ],
    liveUrl: "https://youtu.be/iWkT6TT8JnM",
    links: [
      {
        type: "Website",
        href: "https://youtu.be/iWkT6TT8JnM",
        icon: "globe",
      },
    ],
  },
  {
    id: "ai-patient-monitoring",
    title: "AI-Powered Patient Monitoring",
    screenshots: [],
    image: [health1, health2, health3, health4],
    description: "Developed a system to monitor patient vitals, movement, and behavior using live camera and sensor data. Implemented ML models to train on patient habits and provide real-time spoken feedback and alerts. Triggered emergency responses and notifications to caregivers on detecting risky behavior.",
    technologies: [
      "python",
      "opencv",
      "ml",
      "ai",
      "sensors",
      "speech",
    ],
    codeUrl: "https://github.com/Omkar-Hundre/AegisAI",
    liveUrl: "https://youtu.be/h3A_OyecCoY",
    links: [
      {
        type: "Website",
        href: "https://youtu.be/h3A_OyecCoY",
        icon: "globe",
      },
      {
        type: "Github",
        icon: "github",
        href: "https://github.com/Omkar-Hundre/AegisAI",
      },
    ],
  },
  {
    id: "jain-bus-tracking",
    title: "Jain Bus Tracking System",
    screenshots: [],
    image: [ss1, ss2, ss3, ss4, ss5, ss6],
    description: "Built a multi-role bus tracking platform for college use—students, drivers, and admins. Admin panel supports real-time route edits, driver assignments, and bus occupancy updates. Live tracking and ETA visible to students; adopted by the college-wide transport system.",
    technologies: [
      "firebase",
      "html",
      "css",
      "javascript",
      "geolocation",
    ],
    codeUrl: "https://github.com/Omkar-Hundre/bustrackjce",
    liveUrl: "https://omkar-hundre.github.io/bustrackjce/",
    links: [
      {
        type: "Website",
        href: "https://omkar-hundre.github.io/bustrackjce/",
        icon: "globe",
      },
      {
        type: "Github",
        icon: "github",
        href: "https://github.com/Omkar-Hundre/bustrackjce",
      },
    ],
  }
];