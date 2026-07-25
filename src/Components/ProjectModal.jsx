import React, { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, LinkIcon } from "lucide-react";
import { Badge } from "./ui/badge";
import { Icons } from "./ui/icon";
import { cn } from "../lib/utils";

function ScreenshotsGallery({ images, title }) {
  const [selectedImage, setSelectedImage] = useState(images[0] || null);

  useEffect(() => {
    if (images && images.length > 0) {
      setSelectedImage(images[0]);
    }
  }, [images]);

  if (!images || images.length === 0) return null;

  return (
    <div className="flex flex-col h-full gap-3 p-4 sm:p-5 bg-gray-50/80 border-b md:border-b-0 md:border-r border-gray-100 rounded-t-xl md:rounded-tr-none md:rounded-l-xl">
      {/* Main Preview Image */}
      <div className="relative flex-1 min-h-[220px] sm:min-h-[280px] md:min-h-[320px] w-full bg-black/5 rounded-lg overflow-hidden border border-gray-200/80 flex items-center justify-center">
        {selectedImage ? (
          <img
            src={selectedImage}
            alt={`${title} main preview`}
            className="w-full h-full object-contain object-center"
          />
        ) : (
          <span className="text-xs text-gray-400">No screenshot available</span>
        )}
      </div>

      {/* Thumbnails Row */}
      {images.length > 1 && (
        <div className="flex items-center gap-2 overflow-x-auto pb-1 pt-1 scrollbar-thin">
          {images.map((src, index) => {
            const isSelected = selectedImage === src;
            return (
              <button
                key={index}
                onClick={() => setSelectedImage(src)}
                className={cn(
                  "relative flex-shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-md overflow-hidden border-2 transition-all duration-200 focus:outline-none",
                  isSelected
                    ? "border-blue-600 ring-2 ring-blue-600/30 scale-105"
                    : "border-gray-200 opacity-70 hover:opacity-100 hover:border-gray-300"
                )}
              >
                <img
                  src={src}
                  alt={`${title} thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            );
          })}
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
          className="fixed inset-0 z-[999] flex items-center justify-center p-3 sm:p-4 md:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Full-screen backdrop */}
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Centered modal container */}
          <motion.div
            className="relative bg-white rounded-2xl w-full max-w-5xl h-[85vh] md:h-[580px] overflow-hidden shadow-2xl flex flex-col md:grid md:grid-cols-12"
            initial={{ scale: 0.95, opacity: 0, y: 24 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.95, opacity: 0, y: 24 }}
            transition={{ type: "spring", damping: 30, stiffness: 400 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={onClose}
              className="absolute top-3 right-3 z-20 p-2 rounded-full bg-gray-100 hover:bg-gray-200 border border-gray-200 text-gray-700 transition-colors duration-200"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Left Column: Screenshots Gallery */}
            {hasImages ? (
              <div className="md:col-span-6 lg:col-span-7 h-full overflow-hidden">
                <ScreenshotsGallery images={imagesToShow} title={project.title} />
              </div>
            ) : (
              <div className="hidden md:flex md:col-span-4 bg-gray-50 border-r border-gray-100 items-center justify-center p-6 text-gray-400 text-sm">
                No screenshots available
              </div>
            )}

            {/* Right Column: Project Details */}
            <div className={cn(
              "overflow-y-auto h-full p-5 sm:p-6 space-y-5",
              hasImages ? "md:col-span-6 lg:col-span-5" : "md:col-span-12"
            )}>
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
