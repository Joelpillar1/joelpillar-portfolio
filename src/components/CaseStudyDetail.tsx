import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tab: string;
  tags: string[];
  image?: string;
  detailImage?: string;
  prototypeUrl?: string;
  isPremium?: boolean;
  carouselImages?: string[];
}

interface CaseStudyDetailProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const CaseStudyDetail = ({ project, isOpen, onClose }: CaseStudyDetailProps) => {
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    setCurrentIdx(0);
  }, [project]);

  if (!project) return null;

  const hasCarousel = project.carouselImages && project.carouselImages.length > 0;
  const images = hasCarousel ? project.carouselImages as string[] : [];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev + 1) % images.length);
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIdx((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="modal-popup"
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300, mass: 0.8 }}
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-btn" onClick={onClose}>
              <X size={24} />
            </button>

            <div className="popup-content">
              {hasCarousel ? (
                <div className="hero-img-container carousel-container">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIdx}
                      src={images[currentIdx]}
                      alt={`${project.title} - Image ${currentIdx + 1}`}
                      className="hero-img"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    />
                  </AnimatePresence>

                  <button className="carousel-btn prev" onClick={handlePrev}>
                    <ChevronLeft size={24} />
                  </button>
                  <button className="carousel-btn next" onClick={handleNext}>
                    <ChevronRight size={24} />
                  </button>

                  <div className="carousel-indicators">
                    {images.map((_, idx) => (
                      <div
                        key={idx}
                        className={`indicator ${idx === currentIdx ? 'active' : ''}`}
                        onClick={(e) => { e.stopPropagation(); setCurrentIdx(idx); }}
                      />
                    ))}
                  </div>
                </div>
              ) : (project.detailImage || project.image) ? (
                <div className="hero-img-container">
                  <img src={project.detailImage || project.image} alt={project.title} className="hero-img" />
                </div>
              ) : (
                <div className="hero-placeholder">
                  <span>{project.title.charAt(0)}</span>
                </div>
              )}

              <div className="content-body">
                <h2 className="project-title">{project.title}</h2>

                <div className="article-section">
                  <p className="lead-text">{project.description}</p>
                </div>

                {project.prototypeUrl && (
                  <div className="cta-container">
                    <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="primary-btn">
                      View Prototype <ExternalLink size={18} />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          <style>{`
            .modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.6);
              backdrop-filter: blur(8px);
              z-index: 1000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: clamp(1rem, 5vw, 2rem);
            }
            .modal-popup {
              width: 100%;
              max-width: 800px;
              max-height: 90vh;
              background: linear-gradient(145deg, #1A1A1A 0%, #111111 100%);
              border: 1px solid rgba(255, 255, 255, 0.1);
              box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5);
              border-radius: 24px;
              position: relative;
              display: flex;
              flex-direction: column;
              overflow: hidden;
            }
            .close-btn {
              position: absolute;
              top: 1.5rem;
              right: 1.5rem;
              z-index: 1010;
              width: 44px;
              height: 44px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(0, 0, 0, 0.5);
              backdrop-filter: blur(10px);
              border: 1px solid rgba(255, 255, 255, 0.2);
              border-radius: 50%;
              color: #ffffff;
              cursor: pointer;
              transition: all 0.3s ease;
            }
            .close-btn:hover {
              background: #ffffff;
              color: #000000;
              transform: scale(1.05);
            }
            .popup-content {
              flex: 1;
              overflow-y: auto;
              overflow-x: hidden;
              display: flex;
              flex-direction: column;
            }
            .hero-img-container {
              width: 100%;
              position: relative;
              background: #111;
            }
            .hero-img {
              width: 100%;
              height: auto;
              display: block;
            }
            .hero-placeholder {
              width: 100%;
              height: 40vh;
              min-height: 300px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: linear-gradient(135deg, #2a2a2a, #111111);
              font-size: 6rem;
              color: rgba(255,255,255,0.05);
              font-weight: 800;
            }
            .carousel-container {
               position: relative;
               display: flex;
               align-items: center;
               justify-content: center;
               background: #000;
            }
            .carousel-btn {
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
              background: rgba(0,0,0,0.4);
              backdrop-filter: blur(4px);
              border: 1px solid rgba(255,255,255,0.15);
              color: white;
              width: 44px;
              height: 44px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              cursor: pointer;
              z-index: 10;
              transition: all 0.2s;
            }
            .carousel-btn:hover {
              background: white;
              color: black;
              transform: translateY(-50%) scale(1.05);
            }
            .carousel-btn.prev { left: 1.5rem; }
            .carousel-btn.next { right: 1.5rem; }
            .carousel-indicators {
              position: absolute;
              bottom: 1.2rem;
              left: 50%;
              transform: translateX(-50%);
              display: flex;
              gap: 8px;
              z-index: 10;
              background: rgba(0,0,0,0.3);
              padding: 6px 10px;
              border-radius: 20px;
              backdrop-filter: blur(4px);
            }
            .indicator {
              width: 6px;
              height: 6px;
              border-radius: 50%;
              background: rgba(255,255,255,0.3);
              cursor: pointer;
              transition: all 0.2s;
            }
            .indicator.active {
              background: white;
              transform: scale(1.3);
              width: 8px;
            }
            .content-body {
              padding: clamp(2rem, 5vw, 3rem);
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .project-title {
              font-size: clamp(2rem, 4vw, 2.5rem);
              color: #ffffff;
              font-weight: 600;
              line-height: 1.2;
              margin-bottom: 1.5rem;
              letter-spacing: -0.02em;
            }
            .article-section {
              margin-bottom: 2.5rem;
              max-width: 600px;
            }
            .lead-text {
              font-size: 1.1rem !important;
              color: #cccccc !important;
              line-height: 1.6 !important;
              margin: 0;
            }
            .cta-container {
              display: flex;
              justify-content: center;
              width: 100%;
            }
            .primary-btn {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              gap: 0.8rem;
              background: linear-gradient(90deg, #F3E4CF 0%, #CE9E70 100%);
              color: #1A1A1A;
              padding: 1rem 2.5rem;
              border-radius: 100px;
              font-weight: 600;
              font-size: 1rem;
              text-decoration: none;
              transition: all 0.3s ease;
              border: 1px solid rgba(255, 255, 255, 0.4);
              box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.6), 0 4px 15px rgba(206, 158, 112, 0.3);
            }
            .primary-btn:hover {
              transform: translateY(-2px);
              box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 8px 25px rgba(206, 158, 112, 0.4);
            }
            
            @media (max-width: 768px) {
              .close-btn { top: 1rem; right: 1rem; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyDetail;
