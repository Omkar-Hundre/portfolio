import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, LinkIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Icons } from "./ui/icon";
import { cn } from "../lib/utils";

function ImageSlideshow({ images, title }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images.length <= 1) return;
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative h-52 sm:h-60 w-full bg-gray-100 overflow-hidden rounded-t-xl">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`${title} screenshot ${index + 1}`}
          className={cn(
            "absolute inset-0 h-full w-full object-cover object-top transition-opacity duration-700",
            index === currentIndex ? "opacity-100" : "opacity-0"
          )}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2.5 left-1/2 -translate-x-1/2 flex gap-1.5">
          {images.map((_, i) => (
            <div
              key={i}
              className={cn(
                "w-1.5 h-1.5 rounded-full transition-all duration-300",
                i === currentIndex ? "bg-white scale-110" : "bg-white/40"
              )}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export function ProjectModal({ project, isOpen, onClose }) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const imagesToShow = project
    ? project.screenshots?.length > 0
      ? project.screenshots
      : project.image
    : [];
  const hasImages = imagesToShow && imagesToShow.length > 0;
  const details = project?.details;

  // Render via portal so it sits above everything (navbar, transforms, etc.)
  return createPortal(
    <AnimatePresence>
      {isOpen && project && (
        <motion.div
          className="fixed inset-0 z-[999] flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Full-screen backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Centered modal */}
          <motion.div
            className="relative bg-white rounded-xl w-[calc(100%-2rem)] max-w-2xl max-h-[80vh] overflow-hidden shadow-2xl flex flex-col"
            initial={{ scale: 0.95, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className={cn(
                "absolute top-3 right-3 z-10 p-1.5 rounded-full border transition-colors duration-200",
                hasImages
                  ? "bg-black/40 hover:bg-black/60 border-white/20 text-white"
                  : "bg-gray-100 hover:bg-gray-200 border-gray-200 text-gray-600"
              )}
            >
              <X className="w-4 h-4" />
            </button>

            {/* Image slideshow */}
            {hasImages && (
              <ImageSlideshow images={imagesToShow} title={project.title} />
            )}

            {/* Scrollable content */}
            <div className="overflow-y-auto flex-1 p-5 sm:p-6 space-y-5">
              {/* Title */}
              <h2 className="font-calistoga text-xl sm:text-2xl text-gray-900 pr-8 leading-tight">
                {project.title}
              </h2>

              {/* Overview */}
              <p className="text-[13px] sm:text-sm text-gray-600 leading-relaxed">
                {details?.overview || project.description}
              </p>

              {/* Tech Stack */}
              {details?.techStack ? (
                <div className="space-y-2.5">
                  <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                    Tech Stack
                  </h3>
                  <div className="space-y-1.5 pl-1">
                    {details.techStack.map((cat, i) => (
                      <div key={i} className="flex items-start gap-3 text-[13px]">
                        <span className="text-gray-400 font-medium min-w-[72px] shrink-0 text-right">
                          {cat.category}
                        </span>
                        <span className="text-gray-700">{cat.items}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                project.technologies &&
                project.technologies.length > 0 && (
                  <div className="space-y-2.5">
                    <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                      Tech Stack
                    </h3>
                    <div className="flex flex-wrap gap-1.5">
                      {project.technologies.map((tag) => (
                        <Badge
                          key={tag}
                          variant="secondary"
                          className="text-xs px-2 py-0.5"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                )
              )}

              {/* Detail sections */}
              {details?.sections &&
                details.sections.map((section, i) => (
                  <div key={i} className="space-y-2">
                    <h3 className="text-[11px] font-semibold text-gray-400 uppercase tracking-widest">
                      {section.title}
                    </h3>
                    <ul className="space-y-2 pl-1">
                      {section.bullets.map((bullet, j) => (
                        <li
                          key={j}
                          className="text-[13px] text-gray-600 leading-relaxed flex items-start gap-2.5"
                        >
                          <span className="text-blue-400 mt-[5px] shrink-0 block w-1 h-1 rounded-full bg-blue-400" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}

              {/* Links */}
              {project.links && project.links.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-3 border-t border-gray-100">
                  {project.links.map((link, idx) => (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-gray-900 text-white text-xs font-medium rounded-full hover:bg-gray-700 transition-colors duration-200"
                    >
                      {Icons[link.icon]
                        ? React.createElement(Icons[link.icon], { size: 13 })
                        : <LinkIcon size={12} />}
                      {link.type}
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}
