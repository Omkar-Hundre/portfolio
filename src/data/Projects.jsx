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

// Additional Project Screenshots
import TileCRM1 from "../assets/project-demo/TileCRM/1.png";
import Funnel1 from "../assets/project-demo/Funnel/1.png";
import OLAI1 from "../assets/project-demo/OLAI/1.jpg";
import LLMNoApi1 from "../assets/project-demo/LLMNoApi/1.png";
import LeoCliq1 from "../assets/project-demo/LeoCliq/1.png";

import { Icons } from "../Components/ui/icon";

// import { HomeIcon, NotebookIcon } from "lucide-react";

const ALL_PROJECTS = [
  {
    id: "rlink-remote-desktop",
    title: "RLink — Remote Desktop",
    screenshots: [],
    image: [],
    description: "Control your Windows PC from your Android phone — no port forwarding needed. Streams at 60FPS with hardware-accelerated encoding and maps every touch perfectly.",
    technologies: [
      "python",
      "kotlin",
      "ffmpeg",
      "websockets",
      "cloudflare",
    ],
    liveUrl: "#",
    links: [
      {
        type: "Github",
        icon: "github",
        href: "https://github.com/Omkar-Hundre",
      }
    ],
    details: {
      overview: "A self-hosted remote desktop setup I built to control my Windows PC from my phone. It streams the entire desktop at 60FPS using hardware-accelerated encoding, captures system audio, and maps touch input with pixel-perfect accuracy. No cloud services, no accounts — connects through a Cloudflare Tunnel and authenticates via QR code pairing.",
      techStack: [
        { category: "PC Host", items: "Python, FFmpeg (NVENC), WebSockets, PyAudio, Pynput" },
        { category: "Android", items: "Kotlin, Jetpack Compose, Media3 (ExoPlayer), CameraX" },
        { category: "Security", items: "Cloudflare Tunnels (TLS 1.3), HMAC-SHA256, AES-256-GCM" },
      ],
      sections: [
        {
          title: "Streaming",
          bullets: [
            "Screen captured via FFmpeg with NVIDIA NVENC — 60FPS, hardware-encoded, near-zero CPU usage",
            "Android decodes MPEG-TS packets through a local proxy server feeding into Media3's hardware decoder",
            "Desktop audio captured from the soundcard via WASAPI loopback, streamed in sync with video",
          ]
        },
        {
          title: "Input & Control",
          bullets: [
            "Touch coordinates scaled with letterbox-aware math to map pixel-perfectly to the PC screen",
            "Supports tap, double-tap, long-press, two-finger scroll, and a virtual trackpad mode",
            "Input injected via pynput in an async loop — doesn't block the video pipeline",
          ]
        },
        {
          title: "Security",
          bullets: [
            "No accounts, no cloud, no database — devices pair via QR code (physical proximity only)",
            "PC generates a 32-byte secret; Android stores it in EncryptedSharedPreferences (Android Keystore)",
            "Auth uses HMAC-SHA256 with constant-time comparison — immune to timing attacks",
            "Strict 1-to-1 connection. Revoke access by deleting the key file and restarting",
          ]
        },
        {
          title: "Extras",
          bullets: [
            "Privacy Curtain — blacks out the physical monitor while you control it remotely",
            "Shows currently playing media (Spotify, VLC) with album art on the Android dashboard",
            "Runs as a headless background service via PyInstaller — no visible windows or pop-ups",
          ]
        }
      ]
    }
  },
  {
    id: "thinksoul-lms",
    title: "ThinkSoul LMS",
    screenshots: [],
    // When you add images to assets/project-demo/ThinkSoul, import them above and add here: [TS1, TS2, TS3]
    image: [TS1, TS2, TS3, TS4, TS5, TS6],
    description: "Multi-tenant learning management system with live collaborative wikis, Kanban boards, and a strict multi-tier permissions model.",
    technologies: [
      "nextjs",
      "supabase",
      "tailwind",
      "aws",
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
    details: {
      overview: "A real-time learning management platform I built for startup incubators. It combines live collaborative document editing (like Notion), interactive Kanban boards, and a live admin dashboard to track cohort progress.",
      techStack: [
        { category: "Frontend", items: "Next.js 16 (App Router), React 19, Tailwind CSS" },
        { category: "Backend", items: "Supabase (PostgreSQL, Realtime WebSockets, Auth)" },
        { category: "Cloud", items: "AWS S3, AWS SES" },
      ],
      sections: [
        {
          title: "Real-Time Collaboration",
          bullets: [
            "Notion-style document editing using block-level storage (@blocknote/react)",
            "Instant synchronization across users via Supabase Realtime WebSockets",
            "Drag-and-drop Kanban boards with state updates that push to the backend immediately",
          ]
        },
        {
          title: "Security & Access",
          bullets: [
            "Strict multi-tier RBAC (Global Admins, Group Admins, Members) with isolated permissions",
            "Defense-in-depth routing using Next.js Middleware to protect unauthenticated routes",
            "Secure, asynchronous invitation system via AWS SES that doesn't block the UI",
          ]
        },
        {
          title: "Infrastructure",
          bullets: [
            "Direct-to-cloud file uploads using secure, short-lived AWS S3 presigned URLs",
            "Live admin dashboard that subscribes to Postgres changes to update tracking metrics instantly",
          ]
        }
      ]
    }
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
    title: "COSEM — Industrial Quotation System",
    screenshots: [],
    image: [Cosem1, Cosem2, Cosem3, Cosem4, Cosem5, Cosem6, Cosem7, Cosem8],
    description: "An offline-first desktop app and web portal that reduced industrial quotation time from 7 days to 5 minutes. Deployed in major hydraulic manufacturing firms.",
    technologies: [
      "electron",
      "react",
      "supabase",
      "javascript",
      "postgresql",
    ],
    liveUrl: "https://youtu.be/iWkT6TT8JnM",
    links: [
      {
        type: "Website",
        href: "https://youtu.be/iWkT6TT8JnM",
        icon: "globe",
      },
    ],
    details: {
      overview: "A dual-architecture system built to digitize factory workflows. It features a secure Electron desktop app for factory operators (designed to work offline) and a centralized React portal for management. It handles dynamic cost calculations, nested assemblies, and automated document generation.",
      techStack: [
        { category: "Desktop App", items: "Electron, Vanilla JS, HTML5, Tailwind CSS" },
        { category: "Admin Portal", items: "React (Vite), TypeScript" },
        { category: "Backend", items: "Supabase (PostgreSQL, Auth, RLS), Cloudinary" },
      ],
      sections: [
        {
          title: "Calculation Engine",
          bullets: [
            "Deeply nested tree navigation to build complex manufacturing assemblies and sub-assemblies",
            "Dynamic arithmetic engine that automatically calculates material weights and pricing",
            "Custom formula builder allowing operators to define math relationships without writing code",
          ]
        },
        {
          title: "Architecture & Data",
          bullets: [
            "Local-first architecture using JSON snapshots for offline reliability in factory environments",
            "Seamless background synchronization to Supabase cloud when internet is available",
            "Centralized master price list with inline editing and timestamp-based audit tracking",
          ]
        },
        {
          title: "Security & Access",
          bullets: [
            "Granular RBAC (Master Admin, Industry Admin, Operator) backed by Postgres Row Level Security",
            "Instant remote session revocation — pausing an operator locks them out via cloud heartbeat",
            "Comprehensive audit logging for API calls, file uploads, and pricing modifications",
          ]
        },
        {
          title: "Automated Output",
          bullets: [
            "Compiles nested assemblies into professional, branded Quotations and Order Acceptances",
            "Generates both native Excel spreadsheets and PDF reports (via jsPDF)",
          ]
        }
      ]
    }
  },
  {
    id: "ai-patient-monitoring",
    hidden: true,
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
    hidden: true,
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
  },
  {
    id: "tile-granite-crm",
    hidden: true,
    title: "Business Manager - Tile & Granite CRM",
    screenshots: [],
    image: [TileCRM1],
    description: "A comprehensive business management system for creating estimations, quotations, and tracking inventory and khata (outstanding payments).",
    technologies: ["html", "tailwind", "javascript", "vercel"],
    liveUrl: "https://demo-tiles-main.vercel.app/",
    links: [
      {
        type: "Website",
        href: "https://demo-tiles-main.vercel.app/",
        icon: "globe",
      }
    ],
    details: {
      overview: "A tailored mobile-responsive web application designed for tile, granite, and marble businesses. Features an intuitive dashboard to create detailed estimates, manage line items, track stock/inventory, and a built-in 'Khata' system for seamless money management and outstanding payment tracking.",
      techStack: [
        { category: "Frontend", items: "HTML, Tailwind CSS, JavaScript" },
        { category: "Deployment", items: "Vercel" }
      ],
      sections: [
        {
          title: "Core Features",
          bullets: [
            "Quotation and estimate generator with line items",
            "Khata system for tracking outstanding payments",
            "Mobile-first, user-friendly interface",
            "Inventory and business analytics dashboard",
          ]
        }
      ]
    }
  },
  {
    id: "funnel-lead-engine",
    hidden: true,
    title: "Funnel — Lead Generation Engine",
    screenshots: [],
    image: [Funnel1],
    description: "Automated lead discovery and enrichment pipeline that scrapes, classifies, scores, and deduplicates business leads 24/7.",
    technologies: ["python", "playwright", "pandas", "gemini"],
    liveUrl: "#",
    links: [],
    details: {
      overview: "A continuous lead-generation engine with three layers: discovery (structured web scraping), enrichment (contact extraction and scoring via AI), and pipeline (deduplication, Excel/Sheets sync). Runs as a persistent background service.",
      techStack: [
        { category: "Backend & Automation", items: "Python, Playwright, Pandas" },
        { category: "AI Processing", items: "Gemini API" }
      ],
      sections: [
        {
          title: "Features",
          bullets: [
            "24/7 continuous lead discovery",
            "AI-powered lead scoring and classification",
            "Automatic deduplication and Excel sync",
            "Smart business categorization",
          ]
        }
      ]
    }
  },
  {
    id: "olai",
    hidden: true,
    title: "OLAI — AI-Native Automation",
    screenshots: [],
    image: [OLAI1],
    description: "Visual node-based automation platform where users build AI workflows by connecting modular blocks — no code required.",
    technologies: ["typescript", "nodejs", "python", "ml"],
    liveUrl: "#",
    links: [],
    details: {
      overview: "A zero-code automation playground with a dual-file delivery system: JSON config for frontend node generation and TypeScript handlers for custom backend logic. Supports Python, PowerShell, Bash, and Node.js runtimes.",
      techStack: [
        { category: "Core", items: "TypeScript, Node.js, Python, AI/ML" }
      ],
      sections: [
        {
          title: "Highlights",
          bullets: [
            "Visual node-based workflow builder",
            "Zero-code — JSON config + TypeScript handlers",
            "Multi-runtime support (Python, Bash, Node.js)",
            "Registered under MSME Udyam",
          ]
        }
      ]
    }
  },
  {
    id: "llm-noapi-automation",
    hidden: true,
    title: "LLM No-API Automation",
    screenshots: [],
    image: [LLMNoApi1],
    description: "Browser automation framework that operates LLMs and messaging platforms without official APIs — WhatsApp, Gmail, and more.",
    technologies: ["nodejs", "puppeteer", "restapi", "websockets"],
    liveUrl: "#",
    links: [],
    details: {
      overview: "A modular plugin system with shared browser management and a unified REST API. Automates WhatsApp messaging, Gmail operations, and other platforms through browser-level interaction — no API keys required.",
      techStack: [
        { category: "Framework", items: "Node.js, Puppeteer, REST API, WebSockets" }
      ],
      sections: [
        {
          title: "Capabilities",
          bullets: [
            "Modular plugin architecture",
            "WhatsApp + Gmail automation",
            "Unified REST API for all plugins",
            "Shared browser instance management",
          ]
        }
      ]
    }
  },
  {
    id: "leocliq",
    hidden: true,
    title: "LeoCliq",
    screenshots: [],
    image: [LeoCliq1],
    description: "Full-stack mobile application with a creator portal, push notifications, and Supabase backend — built for content creators and their communities.",
    technologies: ["reactnative", "supabase", "postgresql"],
    liveUrl: "https://youtube.com/shorts/I9k_-uUl0uE?feature=share",
    links: [
      {
        type: "Website",
        href: "https://youtube.com/shorts/I9k_-uUl0uE?feature=share",
        icon: "globe",
      }
    ],
    details: {
      overview: "A mobile-first platform connecting content creators with their communities. Features a dedicated creator portal, real-time push notifications, and a scalable Supabase backend with Row Level Security.",
      techStack: [
        { category: "Mobile App", items: "React Native" },
        { category: "Backend", items: "Supabase, PostgreSQL, Push Notifications" }
      ],
      sections: [
        {
          title: "Key Features",
          bullets: [
            "Creator portal with analytics dashboard",
            "Real-time push notification system",
            "Supabase RLS for data isolation",
            "Cross-platform mobile deployment",
          ]
        }
      ]
    }
  }
];

export const PROJECTS = ALL_PROJECTS.filter((p) => !p.hidden);