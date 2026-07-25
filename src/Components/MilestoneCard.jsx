"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Card, CardHeader, CardContent } from "@/Components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { ChevronRightIcon } from "lucide-react";
import React from "react";

const MilestoneCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  period,
  duration,
  description,
  achievements,
  location,
}) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Card 
      className="py-2 cursor-pointer"
      onClick={handleClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <Avatar className="w-12 h-12 border">
            <AvatarImage
              src={logoUrl}
              alt={altText}
              className="object-cover   "
            />
            <AvatarFallback className="text-sm font-medium">
              {altText[0]}
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between gap-x-2">
              <div className="flex items-center gap-2 min-w-0 flex-1">
                <h3 className="font-bold text-base text-gray-900 truncate">
                  {title}
                </h3>
                <ChevronRightIcon
                  className={cn(
                    "size-4 text-muted-foreground transition-transform duration-300",
                    isExpanded ? "rotate-90" : "rotate-0"
                  )}
                />
              </div>
              <div className="text-right whitespace-nowrap">
                <div className="text-sm text-gray-600">{period}</div>
                {duration && (
                  <div className="text-xs text-gray-500 font-medium">{duration}</div>
                )}
              </div>
            </div>
            {subtitle && (
              <div className="text-sm mt-1 truncate">
                <span className="font-semibold text-gray-900">{subtitle}</span>
                {location && <span className="text-gray-600"> • {location}</span>}
              </div>
            )}
          </div>
        </div>
      </CardHeader>
      {description && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isExpanded ? 1 : 0,
            height: isExpanded ? "auto" : 0,
          }}
          transition={{
            duration: 0.3,
            ease: "easeInOut",
          }}
          className="overflow-hidden"
        >
          <CardContent className="pt-0">
            <div className="ml-16 space-y-4">
              {/* Description */}
              <div className="text-sm leading-relaxed text-black">
                <span dangerouslySetInnerHTML={{ 
                  __html: description.replace(
                    /(production-grade SaaS platforms|offline-first industrial software|real-time web apps|automated lead generation engines|\d+\+?\s*(?:clients?|websites?|projects?)|React(?:\/Next\.js)?|Next\.js|Electron|Supabase|Node\.js|SEO optimization|full-stack development|web solutions)/gi,
                    '<span class="font-semibold text-blue-600">$1</span>'
                  )
                }} />
              </div>
              
              {/* Achievements */}
              {achievements && achievements.length > 0 && (
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 mb-1">Key Achievements</h4>
                  <ul className="space-y-1">
                    {achievements.map((achievement, index) => {
                      const highlightImportantFacts = (text) => {
                        return text.replace(
                          /(COSEM \(Industrial Quotation System\)|ThinkSoul LMS|7 days to 5 minutes|6\+ client applications|99\.9% uptime|zero third-party hosting overhead|Ubuntu VPS|Nginx reverse proxy|PM2|AWS S3\/SES|React|Next\.js|Electron|Supabase|Node\.js|₹\d+[k|K]?|\d+%|\$\d+[k|K]?|\d+\+?\s*(?:clients?|projects?|websites?|client applications))/g,
                          '<span class="font-bold text-blue-600">$1</span>'
                        );
                      };

                      return (
                        <li key={index} className="text-sm leading-relaxed text-black flex items-start">
                          <span className="text-green-500 text-base mr-2 mt-0.5 font-bold">•</span>
                          <span dangerouslySetInnerHTML={{ 
                            __html: highlightImportantFacts(achievement) 
                          }} />
                        </li>
                      );
                    })}
                  </ul>
                </div>
              )}
            </div>
          </CardContent>
        </motion.div>
      )}
    </Card>
  );
};

export default MilestoneCard;