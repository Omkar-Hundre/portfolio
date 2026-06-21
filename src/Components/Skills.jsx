import React, { useState } from "react";
import BlurFade from "./magicui/blur-fade";

function Skills() {
  const [techStack] = useState([
    "js",
    "ts",
    "python",
    "react",
    "nextjs",
    "tailwind",
    "nodejs",
    "supabase",
    "postgres",
    "aws",
    "nginx",
    "docker",
    "linux",
    "cloudflare",
    "kotlin",
    "electron",
    "git",
    "github",
  ]);

  // For tool tip
  const [hoveredTech, setHoveredTech] = useState(null);

  // Display-friendly names for tooltips
  const techNames = {
    js: "JavaScript",
    ts: "TypeScript",
    python: "Python",
    react: "React",
    nextjs: "Next.js",
    tailwind: "Tailwind CSS",
    nodejs: "Node.js",
    supabase: "Supabase",
    postgres: "PostgreSQL",
    aws: "AWS",
    nginx: "Nginx",
    docker: "Docker",
    linux: "Linux",
    cloudflare: "Cloudflare",
    kotlin: "Kotlin",
    electron: "Electron.js",
    git: "Git",
    github: "GitHub",
  };

  return (
    <BlurFade>
    <div className="my-10 flex flex-col justify-center">
      <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-4">
        Technical Skills
      </div>
      <a className="text-center tech-stack-icon-conainer">
        {
          <div
            className={`
    grid 
    grid-cols-9              /* Default: 9 columns */
    xs:grid-cols-5           /* For <=400px: 5 columns */
    vxs:grid-cols-4           /* For <=400px: 4 columns */
    place-items-center
  `}
          >
            {techStack.map((tech, index) => (
              <div
                key={index}
                className="relative inline-block m-[5px]  max-w-[45px]"
                onMouseEnter={() => setHoveredTech(tech)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <img
                  className="hover:cursor-pointer w-[100%]"
                  src={`https://skillicons.dev/icons?i=${tech}`}
                  alt={`${techNames[tech] || tech} icon`}
                />
                {/* Tooltip */}
                {hoveredTech === tech && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2 whitespace-nowrap">
                    {techNames[tech] || tech}
                  </div>
                )}
              </div>
            ))}
          </div>
        }
      </a>
    </div>
    </BlurFade>
  );
}

export default Skills;
