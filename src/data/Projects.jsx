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

import { Icons } from "../Components/ui/icon";

// import { HomeIcon, NotebookIcon } from "lucide-react";

export const PROJECTS = [
  {
    id: "zorabase",
    title: "Zorabase",
    screenshots: [],
    image: [Zora1, Zora2, Zora3], // BusTS images
    description: "Built a full-fledged Firebase alternative with real-time database, rules engine, and user authentication. Server supports up to 2000 concurrent users using multi-threading on dedicated hardware. Includes a full admin dashboard for monitoring users, data, and system metrics.",
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
        icon: "globe", // changed from <Icons.globe ... />
      },
      {
        type: "Github",
        icon: "github", // changed from <Icons.github ... />
        href: "https://github.com/Omkar-Hundre",
      },
    ],
  },
  {
    id: "cosem",
    title: "COSEM",
    screenshots: [],
    image: [Cosem1, Cosem2, Cosem3, Cosem4, Cosem5, Cosem6, Cosem7, Cosem8], // Use Heimdall images or your own COSEM images
    description: "Designed a cost estimation tool for hydraulic industries, reducing estimation time from 5–7 days to under 5 minutes. Used nested JSON data models and custom logic to handle complex quotation generation. Currently deployed in 3 industrial setups with secure login, AI predictions, and dynamic forms.",
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
    title: "AI-Powered Patient Monitoring System",
    screenshots: [],
    image: [health1, health2, health3, health4], // Use array for consistency
    description: "Developed a system to monitor patient vitals, movement, and behavior using live camera and sensor data. Implemented ML models to train on patient habits and provide real-time spoken feedback and alerts. Triggered emergency responses and notifications to caregivers on detecting risky behavior.",
    technologies: [
      "python",
      "opencv",
      "ml",
      "ai",
      "sensors",
      "speech",
      "javascript",
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
    image: [ss1, ss2, ss3, ss4, ss5, ss6], // BusTS images
    description: "Built a multi-role bus tracking platform for college use—students, drivers, and admins. Admin panel supports real-time route edits, driver assignments, and bus occupancy updates. Live tracking and ETA visible to students; adopted by the college-wide transport system.",
    technologies: [
      "firebase",
      "html",
      "css",
      "javascript",
      "geolocation",
      "realtime",
      "admin",
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