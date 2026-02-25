import { useRef, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Highlight } from "./ui/hero-highlight";

import figmaImg from "../assets/Figma.png";
import chatgptImg from "../assets/ChatGPT.png";
import notionImg from "../assets/Notion.png";
import photoshopImg from "../assets/Photoshop.png";
import sketchImg from "../assets/Sketch.png";
import framerImg from "../assets/framer.png";
import pictureImg from "../assets/Picture.png";

interface HeroProps {
  activeTab: string;
}

const Hero = ({ activeTab }: HeroProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isImageExpanded, setIsImageExpanded] = useState(false);

  const isProduct = activeTab === 'Product Design';

  const floatingIcons = [
    // Left side (Red, Green, Black in reference)
    {
      left: '20%', top: '22%', delay: 0.0,
      img: figmaImg, rotation: 12, size: '80px',
      depthColor: '#b56149', glowColor: 'rgba(217, 119, 87, 0.4)'
    },
    {
      left: '10%', top: '48%', delay: 0.2,
      img: chatgptImg, rotation: -14, size: '86px',
      depthColor: '#0a6c53', glowColor: 'rgba(16, 163, 127, 0.4)'
    },
    {
      left: '17%', top: '76%', delay: 0.4,
      img: notionImg, rotation: 10, size: '82px',
      depthColor: '#0f0f0f', glowColor: 'rgba(0, 0, 0, 0.4)'
    },

    // Right side (Purple, White, Blue in reference)
    {
      right: '18%', top: '20%', delay: 0.1,
      img: photoshopImg, rotation: -12, size: '86px',
      depthColor: '#001222', glowColor: 'rgba(30, 82, 142, 0.4)'
    },
    {
      right: '8%', top: '46%', delay: 0.3,
      img: sketchImg, rotation: 12, size: '80px',
      depthColor: '#c2c2c2', glowColor: 'rgba(0, 0, 0, 0.15)'
    },
    {
      right: '17%', top: '74%', delay: 0.5,
      img: framerImg, rotation: -14, size: '84px',
      depthColor: '#0a0a0a', glowColor: 'rgba(0, 0, 0, 0.4)'
    },
  ];



  return (
    <section className="hero-section">
      <AnimatePresence>
        {isImageExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm cursor-zoom-out"
            onClick={() => setIsImageExpanded(false)}
          >
            <motion.img
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              src={pictureImg}
              alt="Joel Pillar"
              className="max-w-[90vw] max-h-[90vh] object-contain rounded-2xl shadow-2xl cursor-default"
              onClick={(e) => e.stopPropagation()}
            />
            <button
              className="absolute top-6 right-6 text-white p-2 rounded-full hover:bg-white/10 transition-colors"
              onClick={(e) => { e.stopPropagation(); setIsImageExpanded(false); }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18" /><path d="m6 6 12 12" /></svg>
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Floating Icons Loop */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden hidden md:block z-10">
        {floatingIcons.map((icon, i) => (
          <motion.div
            key={`floating-icon-${i}`}
            initial={{ opacity: 0, scale: 0.5, rotate: icon.rotation - 15 }}
            animate={{
              opacity: 1,
              scale: 1,
              y: [0, -12, 0],
              rotate: [icon.rotation, icon.rotation + 6, icon.rotation]
            }}
            transition={{
              opacity: { duration: 0.8, delay: icon.delay },
              scale: { duration: 0.8, delay: icon.delay, type: 'spring', bounce: 0.4 },
              y: {
                duration: 4 + (i % 3),
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay + 0.5
              },
              rotate: {
                duration: 5 + (i % 2),
                repeat: Infinity,
                ease: "easeInOut",
                delay: icon.delay + 0.5
              }
            }}
            style={{
              position: 'absolute',
              top: icon.top,
              ...(icon.left ? { left: icon.left } : { right: icon.right }),
              width: icon.size,
              height: icon.size,
              transformOrigin: 'center center',
            }}
            className={`flex items-center justify-center m-0 p-0`}
          >
            <img src={icon.img} alt="tool" style={{ width: '100%', height: '100%', objectFit: 'contain', display: 'block' }} />
          </motion.div>
        ))}
      </div>

      <div className="hero-content" ref={containerRef}>
        <motion.div
          className="powered-pill"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div className="powered-label">
            <span className="text-[#1d1d1b]">I’M JOEL PILLAR</span>
            <div
              className="relative group cursor-zoom-in w-[44px] h-[44px] sm:w-[48px] sm:h-[48px] rounded-full flex-shrink-0 flex items-center justify-center border border-[#10b981] p-[3px]"
              onClick={() => setIsImageExpanded(true)}
            >
              <div className="w-full h-full rounded-full overflow-hidden bg-white">
                <img
                  src={pictureImg}
                  alt="Joel Pillar"
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          key={activeTab} // Unique key helps framer-motion re-trigger animations
          className="headline-container"
          initial={{ opacity: 0, scale: 0.95, y: 40 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="main-title">
            {isProduct ? 'Designing Clarity' : 'Designing Visual Clarity'}
          </h1>
          <div className="premium-badge-container">
            <div className="premium-badge">
              <div className="badge-gloss"></div>
              {/* SVG Sparkles/Glints & Particles */}
              <svg className="badge-sparkles" viewBox="0 0 400 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Large Twinkling Stars */}
                <path d="M40 20L42 26L48 28L42 30L40 36L38 30L32 28L38 26L40 20Z" fill="white" className="sparkle-v1" />
                <path d="M180 15L182 23L190 25L182 27L180 35L178 27L170 25L178 23L180 15Z" fill="white" className="sparkle-v2" />
                <path d="M350 40L352 48L360 50L352 52L350 60L348 52L340 50L348 48L350 40Z" fill="white" className="sparkle-v3" />
                <path d="M250 60L251.5 64L256 65.5L251.5 67L250 71L248.5 67L244 65.5L248.5 64L250 60Z" fill="white" className="sparkle-v1" style={{ animationDelay: '1.5s' }} />

                {/* Tiny Particles / Dust with Varied Sizes */}
                <circle cx="20" cy="50" r="1.5" fill="white" className="particle" style={{ animationDelay: '0.2s' }} />
                <circle cx="60" cy="30" r="0.8" fill="white" className="particle" style={{ animationDelay: '0.5s' }} />
                <circle cx="85" cy="15" r="1.8" fill="white" className="particle" style={{ animationDelay: '0.8s' }} />
                <circle cx="110" cy="65" r="0.5" fill="white" className="particle" style={{ animationDelay: '1.1s' }} />
                <circle cx="135" cy="25" r="1.2" fill="white" className="particle" style={{ animationDelay: '0.3s' }} />
                <circle cx="160" cy="80" r="0.7" fill="white" className="particle" style={{ animationDelay: '1.4s' }} />
                <circle cx="210" cy="10" r="1.4" fill="white" className="particle" style={{ animationDelay: '0.7s' }} />
                <circle cx="230" cy="45" r="0.6" fill="white" className="particle" style={{ animationDelay: '1.2s' }} />
                <circle cx="270" cy="70" r="1.6" fill="white" className="particle" style={{ animationDelay: '0.4s' }} />
                <circle cx="295" cy="35" r="0.8" fill="white" className="particle" style={{ animationDelay: '1.6s' }} />
                <circle cx="320" cy="15" r="1.3" fill="white" className="particle" style={{ animationDelay: '0.9s' }} />
                <circle cx="340" cy="85" r="0.5" fill="white" className="particle" style={{ animationDelay: '0.5s' }} />
                <circle cx="375" cy="20" r="1.1" fill="white" className="particle" style={{ animationDelay: '1.3s' }} />
                <circle cx="390" cy="55" r="0.7" fill="white" className="particle" style={{ animationDelay: '0.2s' }} />
                <circle cx="10" cy="20" r="1.4" fill="white" className="particle" style={{ animationDelay: '1.8s' }} />
                <circle cx="300" cy="60" r="0.6" fill="white" className="particle" style={{ animationDelay: '0.4s' }} />
                <circle cx="50" cy="75" r="1.2" fill="white" className="particle" style={{ animationDelay: '1.1s' }} />
                <circle cx="220" cy="85" r="0.8" fill="white" className="particle" style={{ animationDelay: '0.6s' }} />
              </svg>
              <h1 className="badge-text">
                <Highlight className="text-inherit bg-none p-0 inline">
                  {isProduct ? 'For Complex Products.' : 'For Modern Brands.'}
                </Highlight>
              </h1>
            </div>
          </div>
        </motion.div>

        <motion.p
          key={`sub-${activeTab}`}
          className="description"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          {isProduct ? (
            <>
              <span className="hidden md:inline whitespace-nowrap">
                UIUX Designer with 5+ years building fintech and SaaS experiences<br />
                that are intuitive, scalable, and built for real users.
              </span>
              <span className="md:hidden">
                UIUX Designer with 5+ years building<br />
                fintech and SaaS experiences that are<br />
                intuitive, scalable, and built for real users.
              </span>
            </>
          ) : (
            <>
              <span className="hidden md:inline whitespace-nowrap">
                I create bold, intentional, strategic visuals that help brands<br />
                communicate clearly and stands out confidently.
              </span>
              <span className="md:hidden">
                I create bold, intentional, strategic<br />
                visuals that help brands communicate<br />
                clearly and stands out confidently.
              </span>
            </>
          )}
        </motion.p>

        {/* Mobile Icons Row (Hidden on Desktop) */}
        <motion.div
          className="flex md:hidden flex-row flex-nowrap items-center justify-center gap-2 sm:gap-4 mt-4 w-full max-w-[380px] px-2 overflow-visible"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          {floatingIcons.map((icon, i) => (
            <motion.div
              key={`mobile-icon-${i}`}
              className="flex items-center justify-center w-[48px] h-[48px] sm:w-[56px] sm:h-[56px] flex-shrink-0"
              initial={{ opacity: 0, scale: 0.8, y: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -6, 0] }}
              viewport={{ once: true }}
              transition={{
                opacity: { delay: i * 0.1 },
                scale: { delay: i * 0.1 },
                y: { duration: 3 + (i % 2), repeat: Infinity, ease: "easeInOut", delay: i * 0.1 }
              }}
            >
              <img src={icon.img} alt="tool" className="w-full h-full object-contain" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        .hero-section {
          min-height: auto;
          position: relative;
          background: transparent;
          overflow: hidden;
          padding: 200px 20px 40px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          width: 100%;
        }
        .hero-content {
          width: 100%;
          max-width: 1000px;
          margin: 0 auto;
          text-align: center;
          z-index: 50;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .powered-pill {
          display: inline-flex;
          align-items: center;
          gap: 1.5rem;
          margin-bottom: 2rem;
          color: #5A6A7D;
          font-size: 1.25rem;
          font-weight: 700;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
        }
        .powered-pill::before, .powered-pill::after {
          content: "";
          height: 1px;
          width: 40px;
          background: linear-gradient(to right, transparent, #e5e5e5, transparent);
        }
        .powered-label {
          background: #ffffff;
          border: 1px solid #e5e5e5;
          padding: 0.4rem 0.4rem 0.4rem 1.2rem;
          border-radius: 100px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.03);
          display: flex;
          align-items: center;
          gap: 1rem;
        }

        .headline-container {
          margin-bottom: 1.5rem;
        }
        .main-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          color: #1d1d1b;
          letter-spacing: -0.02em;
          margin-bottom: 0.6rem;
          white-space: nowrap;
        }
        .premium-badge-container {
          display: inline-block;
          margin-bottom: 1rem;
        }
        .premium-badge {
          position: relative;
          background: linear-gradient(135deg, #a7f3d0 0%, #10b981 25%, #a7f3d0 50%, #10b981 75%, #a7f3d0 100%);
          background-size: 200% 200%;
          animation: badge-shimmer 4s linear infinite;
          padding: 0.5rem 2.2rem;
          border-radius: 18px;
          border: 1.5px solid rgba(255, 255, 255, 0.5); /* More visible white outline */
          box-shadow: 0 10px 30px rgba(16, 185, 129, 0.15),
                      inset 0 1px 2px rgba(255, 255, 255, 0.6), /* Inner glow outline */
                      0 0 0 1px rgba(0, 0, 0, 0.05); /* Outer thin dark line for definition */
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .badge-gloss {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 50%;
          background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0) 100%);
          pointer-events: none;
          z-index: 3;
        }
        .badge-text {
          font-size: clamp(2.5rem, 5vw, 4rem);
          font-weight: 500;
          color: #1d1d1b;
          letter-spacing: -0.02em;
          position: relative;
          z-index: 2;
          white-space: nowrap;
        }
        .badge-sparkles {
          position: absolute;
          inset: 0;
          width: 100%;
          height: 100%;
          z-index: 1;
          pointer-events: none;
        }
        .sparkle-v1, .sparkle-v2, .sparkle-v3 {
          opacity: 0.8;
          animation: sparkle-twinkle 3s infinite ease-in-out;
        }
        .sparkle-v2 { animation-delay: 1s; }
        .sparkle-v3 { animation-delay: 2s; }
        .particle {
          opacity: 0.4;
          animation: particle-breath 4s infinite alternate ease-in-out;
        }
        @keyframes sparkle-twinkle {
          0%, 100% { transform: scale(0.8); opacity: 0.4; }
          50% { transform: scale(1.1); opacity: 1; }
        }
        @keyframes particle-breath {
          0% { opacity: 0.2; transform: translateY(0); }
          100% { opacity: 0.6; transform: translateY(-2px); }
        }
        @keyframes badge-shimmer {
          0% { background-position: 200% 50%; }
          100% { background-position: 0% 50%; }
        }
        .description {
          font-size: 1.05rem;
          color: #888;
          margin-bottom: 2.5rem;
          font-weight: 400;
        }
        .search-container {
          margin-bottom: 3.5rem;
          display: flex;
          justify-content: center;
        }
        .search-bar {
          background: #ffffff;
          width: 100%;
          max-width: 580px;
          height: 54px;
          border-radius: 100px;
          display: flex;
          align-items: center;
          padding: 0 1.2rem;
          border: 1px solid #e5e5e5;
          box-shadow: 0 10px 40px rgba(0,0,0,0.04);
        }
        .search-icon {
          color: #bbb;
          margin-right: 1rem;
        }
        .search-bar input {
          flex: 1;
          border: none;
          outline: none;
          font-size: 1.05rem;
          color: #1d1d1b;
          font-family: inherit;
        }
        .shortcut {
          background: #f5f5f5;
          color: #999;
          font-size: 0.8rem;
          font-weight: 600;
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          border: 1px solid #eee;
        }




        @media (max-width: 1024px) {
          .logo-row { gap: 1rem; padding: 0.8rem 1rem; flex-wrap: nowrap; justify-content: center; overflow-x: auto; max-width: 100vw; }
          .main-title { font-size: clamp(2rem, 6vw, 2.5rem); }
          .badge-text { font-size: clamp(1.8rem, 5vw, 2.5rem); }
          .filters-row { flex-direction: column; gap: 2rem; }
        }

        @media (max-width: 480px) {
          .hero-section { padding-top: 160px; padding-bottom: 50px; min-height: auto; }
          .powered-pill { margin-bottom: 1.9rem; }
          .headline-container { margin-bottom: 0.4rem; }
          .main-title { font-size: 1.8rem; white-space: nowrap; margin-bottom: 0; }
          .badge-text { font-size: 1.6rem; white-space: nowrap; }
          .premium-badge { padding: 0.3rem 1rem; }
          .premium-badge-container { margin-bottom: 0.9rem; }
          .description { font-size: 0.95rem; margin-bottom: 1.5rem; line-height: 1.3; }
        }
      `}</style>
    </section>
  );
};

export default Hero;
