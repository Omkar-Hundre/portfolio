import React, { useState } from "react";
// import local logos for tech
import Recoil from "../assets/techLogos/recoil.png";
import SocketIO from "../assets/techLogos/socketio.png";
import BlurFade from "./magicui/blur-fade";

function Skills() {
  // Tech logos which we are imported from third party
  const [techStack, setTechStack] = useState([
    "html",
    "css",
    "js",
    "react",
    "nextjs",
    "nodejs",
    "express",
    "ts",
    "tailwind",
    "supabase",
    "postgres",
    "redis",
    "python",
    "cpp",
    "nginx",
    "docker",
    "aws",
    "linux",
    "git",
    "github",
    "figma",
    "electron",
    "firebase",
    "opencv",
  ]);

  // Tech logos which are locally present (didn't get these logo in the third party)
  const [localTechStack, setLocalTechStack] = useState({
    recoil: Recoil,
    socketio: SocketIO,
  });

  // Number of techs imported + locals.
  const [techCount, setTechCount] = useState(techStack.length);

  // For tool tip
  const [hoveredTech, setHoveredTech] = useState(null);

  return (
    <BlurFade>
    <div className="my-10 flex flex-col justify-center">
      <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-4">
        Technical Skills
      </div>
      <a className="text-center tech-stack-icon-conainer">
        {
          // <div className={`grid grid-cols-9  grid-row-[${techCount / 90}] place-items-center`}>
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
                  alt={`${tech} icon`}
                />
                {/* Tooltip */}
                {hoveredTech === tech && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2">
                    {tech}
                  </div>
                )}
              </div>
            ))}

            {Object.entries(localTechStack).map(([name, tech], index) => (
              <div
                key={index} // Ensure each item has a unique key
                className="relative inline-block my-[5px] max-w-[45px]"
                onMouseEnter={() => setHoveredTech(name)}
                onMouseLeave={() => setHoveredTech(null)}
              >
                <img
                  className="hover:cursor-pointer w-[45px] rounded-xl" // Changed w-[100%] to w-full for consistent Tailwind styling
                  src={tech}
                  alt={`${name} icon`} // Updated alt text for accessibility
                />
                {hoveredTech === name && (
                  <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 z-50 bg-gray-800 text-white text-xs rounded py-1 px-2">
                    {name}
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
