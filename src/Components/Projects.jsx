import React, { useState } from "react";
import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./ProjectCard";
import { PROJECTS } from "../data/Projects";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

function Projects() {
  const [showAll, setShowAll] = useState(false);
  const BLUR_FADE_DELAY = 0.04;

  const visibleProjects = showAll ? PROJECTS : PROJECTS.slice(0, 4);

  return (
    <BlurFade>
      <div className="flex flex-col gap-5">
        <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
          <div className="font-calistoga text-gray-900 text-md">Projects</div>
          <div>
            <div 
              onClick={() => setShowAll(!showAll)}
              className="flex items-center gap-1.5 text-gray-900 group cursor-pointer select-none"
            >
              <p className="text-gray-700">
                <span className="font-calistoga font-[100] text-sm underline underline-offset-4 decoration-gray-300 transition-colors duration-300 group-hover:text-black group-hover:decoration-black">
                  {showAll ? "Show less" : "View all"}
                </span>
              </p>
              <motion.div
                animate={{ rotate: showAll ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={cn(
                    "transition-transform duration-300",
                    !showAll && "group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  )}
                  aria-hidden="true"
                >
                  {showAll ? (
                    <path d="m18 15-6-6-6 6" />
                  ) : (
                    <>
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </>
                  )}
                </svg>
              </motion.div>
            </div>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, id) => (
              <motion.div
                key={project.id || project.title}
                layout
                initial={{ opacity: 0, scale: 0.98, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.98, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.3, 
                  delay: id < 4 ? 0 : (id - 4) * 0.05,
                  ease: "easeOut"
                }}
              >
                <ProjectCard
                  href={project.liveUrl}
                  title={project.title}
                  description={project.description}
                  tags={project.technologies}
                  image={project.image}
                  screenshots={project.screenshots}
                  links={project.links}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        <motion.div 
          layout
          className="flex justify-center mt-6"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="flex items-center gap-2 px-5 py-2 bg-black text-white rounded-full text-xs font-medium hover:bg-gray-800 transition-all duration-300 active:scale-95 shadow-sm"
          >
            <span>
              {showAll ? "Show less" : "View all projects"}
            </span>
            <motion.div
              animate={{ rotate: showAll ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {showAll ? (
                  <path d="m18 15-6-6-6 6" />
                ) : (
                  <path d="m6 9 6 6 6-6" />
                )}
              </svg>
            </motion.div>
          </button>
        </motion.div>
      </div>
    </BlurFade>
  );
}

export default Projects;
