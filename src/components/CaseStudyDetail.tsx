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

            <div className="popup-split-layout">
              <div className="left-panel">
                {hasCarousel ? (
                  <div className="carousel-wrapper">
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
                    </div>

                    <div className="thumbnails-container">
                      {images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`thumbnail-card ${idx === currentIdx ? 'active' : ''}`}
                          onClick={(e) => { e.stopPropagation(); setCurrentIdx(idx); }}
                        >
                          <img src={img} alt={`Thumbnail ${idx + 1}`} />
                        </div>
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
              </div>

              <div className="right-panel">
                <div className="content-body">
                  <h2 className="project-title">{project.title}</h2>

                  <div className="article-section">
                    <p className="lead-text">{project.description}</p>
                  </div>

                  {project.tags && project.tags.length > 0 && (
                    <div className="tags-section">
                      <h4 className="tags-heading">Tags</h4>
                      <div className="tags-list">
                        {project.tags.map(tag => (
                          <span key={tag} className="tag-item">#{tag}</span>
                        ))}
                      </div>
                    </div>
                  )}

                  {project.prototypeUrl && (
                    <div className="cta-container">
                      <a href={project.prototypeUrl} target="_blank" rel="noopener noreferrer" className="primary-btn">
                        View Prototype <ExternalLink size={18} />
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>

          <style>{`
            .modal-overlay {
              position: fixed;
              inset: 0;
              background: rgba(0, 0, 0, 0.8);
              backdrop-filter: blur(8px);
              z-index: 1000;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: clamp(1rem, 5vw, 2rem);
            }
            .modal-popup {
              width: 100%;
              max-width: 1200px;
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
              width: 40px;
              height: 40px;
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
            .popup-split-layout {
              display: flex;
              flex-direction: column;
              height: 100%;
              overflow-y: auto;
            }
            @media (min-width: 1024px) {
              .popup-split-layout {
                flex-direction: row;
                overflow: hidden; /* prevents full modal scroll on desktop, individual panels will scroll */
              }
            }
            .left-panel {
              flex: 1.5;
              display: flex;
              flex-direction: column;
              background: #0a0a0a;
              border-right: 1px solid rgba(255, 255, 255, 0.05);
            }
            @media (min-width: 1024px) {
              .left-panel {
                overflow-y: auto;
              }
              .left-panel::-webkit-scrollbar {
                width: 6px;
              }
              .left-panel::-webkit-scrollbar-thumb {
                background: rgba(255,255,255,0.1);
                border-radius: 6px;
              }
            }
            .carousel-wrapper {
              display: flex;
              flex-direction: column;
              gap: 1rem;
              padding: 1.5rem;
            }
            .hero-img-container {
              width: 100%;
              position: relative;
              background: #111;
              border-radius: 12px;
              overflow: hidden;
            }
            .hero-img-container.carousel-container {
               display: flex;
               align-items: center;
               justify-content: center;
               background: #000;
               aspect-ratio: 4/3;
            }
            .hero-img {
              width: 100%;
              height: 100%;
              object-fit: contain;
              display: block;
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
            .carousel-btn.prev { left: 1rem; }
            .carousel-btn.next { right: 1rem; }
            
            .thumbnails-container {
              display: flex;
              gap: 12px;
              overflow-x: auto;
              padding-bottom: 0.5rem;
              scrollbar-width: thin;
            }
            .thumbnails-container::-webkit-scrollbar {
              height: 6px;
            }
            .thumbnails-container::-webkit-scrollbar-thumb {
              background: rgba(255,255,255,0.2);
              border-radius: 6px;
            }
            .thumbnail-card {
              flex: 0 0 100px;
              height: 75px;
              border-radius: 8px;
              overflow: hidden;
              cursor: pointer;
              border: 2px solid transparent;
              opacity: 0.6;
              transition: all 0.2s ease;
            }
            .thumbnail-card img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .thumbnail-card:hover {
              opacity: 0.9;
            }
            .thumbnail-card.active {
              opacity: 1;
              border-color: #D4A574;
              box-shadow: 0 0 10px rgba(212, 165, 116, 0.4);
            }
            
            .right-panel {
              flex: 1;
              display: flex;
              flex-direction: column;
              padding: 2.5rem;
              background: transparent;
            }
            @media (min-width: 1024px) {
              .right-panel {
                padding-top: 4rem; /* to avoid close btn overlap */
                overflow-y: auto;
              }
              .right-panel::-webkit-scrollbar {
                width: 6px;
              }
              .right-panel::-webkit-scrollbar-thumb {
                background: rgba(255,255,255,0.1);
                border-radius: 6px;
              }
            }
            .content-body {
              display: flex;
              flex-direction: column;
              align-items: flex-start;
              text-align: left;
              height: 100%;
            }
            .project-title {
              font-size: clamp(2rem, 3vw, 2.5rem);
              color: #ffffff;
              font-weight: 600;
              line-height: 1.2;
              margin-bottom: 1.5rem;
              letter-spacing: -0.02em;
            }
            .article-section {
              margin-bottom: 2.5rem;
              width: 100%;
              padding-bottom: 2rem;
              border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            }
            .lead-text {
              font-size: 1.1rem !important;
              color: #a0a0a0 !important;
              line-height: 1.6 !important;
              margin: 0;
            }
            .tags-section {
              margin-bottom: 3rem;
              width: 100%;
            }
            .tags-heading {
              font-size: 1.1rem;
              color: #ffffff;
              margin-bottom: 1rem;
              font-weight: 600;
            }
            .tags-list {
              display: flex;
              flex-wrap: wrap;
              gap: 0.6rem;
            }
            .tag-item {
              color: #888888;
              background: rgba(255, 255, 255, 0.05);
              padding: 0.4rem 0.8rem;
              border-radius: 6px;
              font-size: 0.85rem;
              font-weight: 500;
              transition: all 0.2s;
            }
            .tag-item:hover {
              color: #ffffff;
              background: rgba(255, 255, 255, 0.1);
            }
            .cta-container {
              margin-top: auto;
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
              width: 100%; /* full width on sidebar */
            }
            .primary-btn:hover {
              transform: translateY(-2px);
              box-shadow: inset 0 1px 2px rgba(255, 255, 255, 0.8), 0 8px 25px rgba(206, 158, 112, 0.4);
            }
            
            @media (max-width: 768px) {
              .close-btn { top: 1rem; right: 1rem; }
              .popup-split-layout { flex-direction: column; }
              .right-panel { padding: 1.5rem; }
              .carousel-wrapper { padding: 0.5rem; }
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CaseStudyDetail;
