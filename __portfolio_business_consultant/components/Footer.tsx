// components/Footer.tsx
import React from "react";
import { useLocation } from "react-router-dom";
import { useSmoothScroll } from "./Header";

const Footer: React.FC = () => {
  const { pathname } = useLocation();
  const handleSmoothScroll = useSmoothScroll();

  const isHome = pathname === "/";
  const isServicesList = pathname === "/services";
  const isServiceDetail = pathname.startsWith("/services/") && pathname !== "/services";

  const showGenericCTA = isHome || isServicesList;

  const handleMailClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    window.location.href = "mailto:hello@federicomosqueira.site";
  };

  return (
    <footer className="bg-black text-gray-300">
      {showGenericCTA && (
        // ⬇️ Menos espacio en tablet y mobile (antes: pt-12 pb-16 sm:pt-16 sm:pb-20)
        <section className="bg-black text-white pt-8 pb-12 sm:pt-10 sm:pb-14 md:pt-12 md:pb-16">
          <div className="mx-auto px-6 text-center max-w-6xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tighter">
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                Ready to make
              </span>{" "}
              something together?
            </h2>

            <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight mt-2">
              Let's map your ideas on{" "}
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 bg-clip-text text-transparent">
                a discovery call.
              </span>
            </p>

            <div className="mt-6 sm:mt-8">
              <a
                onClick={handleMailClick}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  inline-flex items-center justify-center
                  group
                  bg-white text-black
                  px-6 py-3 rounded-[4px] font-semibold
                  border border-transparent shadow-sm
                  transition-colors duration-150 ease-in-out
                  hover:bg-gray-600 hover:text-white
                  focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-black
                "
              >
                <span>Book a Discovery Call</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2 transition-transform duration-150 transform motion-safe:group-hover:translate-x-1"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5 21 12m0 0-7.5 7.5M21 12H3" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      )}

      {/* Footer columnas */}
      <div>
        <div className="mx-auto max-w-7xl border-t border-gray-800 px-6 py-10 sm:py-12 grid grid-cols-1 md:grid-cols-[2fr,1fr,1fr,1fr] gap-10 text-sm justify-items-center md:justify-items-start text-center md:text-left">
          <div>
            <p className="font-black text-white mb-1 text-lg tracking-tight">
              Federico Mosqueira
              <span className="text-[22px] bg-gradient-to-r from-purple-400 via-pink-500 to-orange-400 text-transparent bg-clip-text">.</span>
            </p>
            <a
              onClick={handleMailClick}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white text-gray-400 cursor-pointer"
            >
              hello@federicomosqueira.site
            </a>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#blogs"
                  className="hover:text-gray-400 text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#blogs")}
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/#about"
                  className="hover:text-gray-400 text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#about")}
                >
                  About
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a
                  href="/#projects"
                  className="hover:text-gray-400 text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#projects")}
                >
                  Case Studies
                </a>
              </li>
              <li>
                <a
                  href="/#testimonials"
                  className="hover:text-gray-400 text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#testimonials")}
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <ul className="space-y-3">
              <li>
                <a
                  onClick={handleMailClick}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-gray-400 text-white transition-colors cursor-pointer"
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="/#faqs"
                  className="hover:text-gray-400 text-white transition-colors"
                  onClick={(e) => handleSmoothScroll(e, "#faqs")}
                >
                  FAQs
                </a>
              </li>
              <li>
                <a
                  href="/privacy"
                  className="hover:text-gray-400 text-white transition-colors"
                >
                  Privacy
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mx-auto max-w-7xl px-6 py-6 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 text-center md:text-left">
          <div>
            <span>© Copyright {new Date().getFullYear()}</span>
            <span className="inline-block px-2">|</span>
            <span>
              Business Consultant - AI & Automation Strategy <span className="inline-block px-2">|</span> All Rights Reserved.
            </span>
          </div>
          <div className="mt-4 md:mt-0">
            <span>Based in Antwerp, Belgium</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
