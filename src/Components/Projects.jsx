import React, { useState } from "react";
import BlurFade from "./magicui/blur-fade";
import { ProjectCard } from "./ProjectCard";
import { ProjectModal } from "./ProjectModal";
import { PROJECTS } from "../data/Projects";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <BlurFade>
      <div className="flex flex-col gap-5">
        <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
          <div className="font-calistoga text-gray-900 text-md">Projects</div>
          <div>
            <a 
              href="https://github.com/Omkar-Hundre"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 text-gray-900 group select-none"
            >
              <p className="text-gray-700">
                <span className="font-calistoga font-[100] text-sm underline underline-offset-4 decoration-gray-300 transition-colors duration-300 group-hover:text-black group-hover:decoration-black">
                  View all
                </span>
              </p>
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
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              >
                <path d="M7 7h10v10"></path>
                <path d="M7 17 17 7"></path>
              </svg>
            </a>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 max-w-[800px] mx-auto">
          {PROJECTS.map((project) => (
            <div key={project.id || project.title}>
              <ProjectCard
                href={project.liveUrl}
                title={project.title}
                description={project.description}
                tags={project.technologies}
                image={project.image}
                screenshots={project.screenshots}
                links={project.links}
                onClick={() => setSelectedProject(project)}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </BlurFade>
  );
}

export default Projects;
