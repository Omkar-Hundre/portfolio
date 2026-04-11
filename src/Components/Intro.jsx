import DP from "../assets/displayPicture/me.png";
import BlurFade from "./magicui/blur-fade";
import Resume from "../assets/resume/Omkar_Hundre_Resume.pdf";

function Intro() {
  return (
    <BlurFade>
      <div className="">
        <section>
          <div className="flex flex-col max-w-4xl mx-auto">
            <div className="mb-6">
              {/* Main header section - always side by side */}
              <div className="flex items-start justify-between gap-2 sm:gap-4">
                {/* Text content */}
                <div className="flex-1 min-w-0">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 font-calistoga leading-tight">
                    Omkar here 👋
                  </h1>
                  <h2 className="font-calistoga text-gray-900 text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl mt-1 sm:mt-2 leading-relaxed">
                    Full Stack Engineer | SaaS & Distributed Systems
                  </h2>
                </div>

                {/* Profile image */}
                <div className="flex-shrink-0">
                  <img
                    src={DP}
                    alt="Omkar Hundre - Full Stack Engineer"
                    className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 rounded-full object-cover border-2 border-gray-200 shadow-lg"
                  />
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="">
              <p className="flex sm:justify-start gap-1 mt-2">
                <span className="text-xl">📍</span>
                <span className="text-gray-800">Belagavi, India</span>
              </p>
            </div>

            {/* About */}
            <div className="">
              <p className="mt-3 text-gray-700 text-sm sm:text-base leading-relaxed max-w-3xl mx-auto sm:mx-0">
                Innovative <span className="font-semibold text-blue-600">Full Stack Engineer</span> with expertise in building scalable <span className="font-semibold text-blue-600">SaaS architectures</span>, real-time distributed systems, and AI-driven automation. Proven track record of managing <span className="font-semibold text-blue-600">VPS infrastructure</span>, delivering <span className="font-semibold text-blue-600">10x performance optimizations</span> through self-led startup projects and digital agency leadership.
              </p>
            </div>

            {/* Resume Link */}
            <div className=" sm:text-left">
              <div className="inline-flex items-end gap-1 mt-4 text-blue-600 group cursor-pointer">
                <p className="text-gray-800">
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-calistoga font-[100] underline transition-colors duration-300 group-hover:text-blue-700 text-sm sm:text-base truncate"
                    href={Resume}
                  >
                    Check out my Resume
                  </a>
                </p>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-up-right size-4 sm:size-5 text-blue-600 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  aria-hidden="true"
                >
                  <path d="M7 7h10v10"></path>
                  <path d="M7 17 17 7"></path>
                </svg>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex sm:justify-start">
              <section className="mt-6 sm:mt-8 flex items-center">
                <section className="flex gap-4 sm:gap-6">
                  {/* LinkedIn */}
                  <a
                    href="https://www.linkedin.com/in/hundreomkar"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    title="LinkedIn"
                  >
                    <span className="sr-only">LinkedIn</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  </a>

                  {/* GitHub */}
                  <a
                    href="https://github.com/Omkar-Hundre"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-gray-900 transition-colors duration-200 p-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                    title="GitHub"
                  >
                    <span className="sr-only">GitHub</span>
                    <svg
                      stroke="currentColor"
                      fill="none"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      height="20"
                      width="20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  </a>

                </section>
              </section>
            </div>
          </div>
        </section>
      </div>
    </BlurFade>
  );
}

export default Intro;
