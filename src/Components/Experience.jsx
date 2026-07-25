"use client";
import React from "react";
import EXPERIENCE from "../data/Experience";
import MilestoneCard from "./MilestoneCard";
import BlurFade from "./magicui/blur-fade";

export const Experience = () => {
  return (
    <BlurFade>
      <div className="w-full my-10">
        <div className="font-calistoga text-gray-900 text-2xl mt-2 mb-2 flex flex-col gap-0 xxs:flex-row xxs:items-center xxs:justify-between">
          <div className="font-calistoga text-gray-900 text-md">Experience</div>
        </div>
        <div className="">
          {EXPERIENCE.map((item, index) => (
            <MilestoneCard
              key={index}
              logoUrl={item.logoUrl}
              altText={item.company}
              title={item.title}
              subtitle={item.company}
              href={item.href}
              badges={item.badges}
              period={`${item.start} - ${item.end}`}
              duration={item.duration}
              description={item.description}
              achievements={item.achievements}
              technologies={item.technologies}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </BlurFade>
  );
};

