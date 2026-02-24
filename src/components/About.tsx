import { motion } from 'framer-motion';
import profilePic from '../assets/Picture.png';


const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-grid">
        <motion.div
          className="about-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <div className="experience-container">
            <div className="number-container">
              <span className="number">8+</span>
              <div className="profile-trigger">
                <img src={profilePic} alt="Joel Pillar" className="profile-thumb" />
                <div className="profile-popup">
                  <img src={profilePic} alt="Joel Pillar" className="profile-large" />
                </div>
              </div>
            </div>
            <span className="label">Total Years .</span>
          </div>
          <div className="stats-box">
            <div className="stat">
              <span className="stat-num">08</span>
              <span className="stat-text">Product Design</span>
            </div>
            <div className="stat">
              <span className="stat-num">05</span>
              <span className="stat-text">Senior UI/UX</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="about-text"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="powered-pill">
            <div className="powered-label">
              <span>I'M JOEL PILLAR</span>
            </div>
          </div>
          <h2 className="about-title">A designer who thinks in <span className="highlight">Systems</span>.</h2>

          <div className="about-description">
            <p>
              I’m a product designer with 8+ years of experience, including 5+ years in UI/UX, building scalable digital products that balance user needs with business goals.
            </p>
            <p>
              I work at the intersection of product strategy, research, and interaction design, partnering with founders and teams to turn complex ideas into clear, high-impact experiences.
            </p>
            <p>
              From research and user flows to prototypes and polished interfaces, I’m hands-on across the full design process, with a strong focus on clarity, usability, and systems thinking.
            </p>
            <p>
              I’m also passionate about design systems, collaboration, and improving product workflows. Outside of work, I mentor designers and explore ideas around AI, product design, and automation.
            </p>
          </div>

          <div className="services">
            <h3>Specialization</h3>
            <ul>
              <li>High-Fidelity Prototyping</li>
              <li>Enterprise Design Systems</li>
              <li>Competitive Product Strategy</li>
              <li>User Research & Interaction Design</li>
            </ul>
          </div>
        </motion.div>
      </div>

      <style>{`
        .about {
          padding: 10rem 5%;
          background: transparent;
          border-top: 1px solid var(--color-border);
          position: relative;
          overflow: hidden;
          width: 100%;
        }
        .about-grid {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 8rem;
          align-items: center;
        }
        .about-visual {
          position: relative;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding-top: 2rem;
        }
        .experience-container {
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          margin-bottom: 1rem;
        }
        .number-container {
          display: flex;
          align-items: center;
          gap: 2rem;
        }
        .experience-container .number {
          font-family: var(--font-serif);
          font-size: 10rem;
          color: var(--color-text);
          line-height: 0.8;
          font-weight: 300;
          letter-spacing: -0.02em;
        }
        .experience-container .label {
          font-size: 0.9rem;
          text-transform: uppercase;
          letter-spacing: 0.5rem;
          color: var(--color-text-muted);
          margin-top: 1.5rem;
          margin-left: 0.5rem;
          font-weight: 500;
        }
        .stats-box {
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 4rem 3rem;
          box-shadow: 0 10px 40px rgba(0,0,0,0.02);
          display: flex;
          gap: 6rem;
          width: 100%;
          border-radius: 4px;
        }
        .stat-num {
          display: block;
          font-size: 4.5rem;
          color: var(--color-text);
          font-family: var(--font-serif);
          line-height: 1;
          font-weight: 300;
          margin-bottom: 1.5rem;
        }
        .stat-text {
          font-size: 0.85rem;
          text-transform: uppercase;
          color: var(--color-tan, #d4a574);
          letter-spacing: 0.15rem;
          font-weight: 600;
        }
        .about-title {
          font-size: clamp(2.5rem, 5vw, 4rem);
          color: var(--color-text);
          margin-bottom: 2.5rem;
          line-height: 1.1;
        }
        .powered-pill {
          display: inline-flex;
          align-items: center;
          margin-bottom: 1.5rem;
          color: var(--color-text-muted);
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.05rem;
        }
        .powered-label {
          background: #ffffff;
          border: 1px solid var(--color-border);
          padding: 0.3rem 0.4rem 0.3rem 1.2rem;
          border-radius: 100px;
          box-shadow: 0 2px 10px rgba(0,0,0,0.02);
          display: flex;
          align-items: center;
          gap: 0.8rem;
          position: relative;
        }
        .profile-trigger {
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .profile-thumb {
          width: 100px;
          height: 100px;
          border-radius: 50%;
          object-fit: cover;
          border: 3px solid #f8f8f8;
          box-shadow: 0 4px 12px rgba(0,0,0,0.08);
          transition: transform 0.2s ease;
        }
        .profile-trigger:hover .profile-thumb,
        .profile-trigger:focus .profile-thumb {
          transform: scale(1.1);
          box-shadow: 0 4px 12px rgba(0,0,0,0.1);
        }
        .profile-popup {
          position: absolute;
          top: calc(100% + 15px);
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
          z-index: 100;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
          border: 4px solid #fff;
          width: 220px;
          pointer-events: none;
        }
        .profile-trigger:hover .profile-popup,
        .profile-trigger:active .profile-popup,
        .profile-trigger:focus-within .profile-popup {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
        }
        .profile-large {
          width: 100%;
          height: auto;
          display: block;
          object-fit: cover;
        }
        .about-title .highlight {
          color: var(--color-accent);
          font-style: italic;
        }
        .about-description {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
          margin-bottom: 3rem;
        }
        .about-description p {
          font-size: 1.1rem;
          color: var(--color-text-muted);
          line-height: 1.8;
        }
        .services h3 {
          font-size: 1.2rem;
          color: var(--color-text);
          margin-bottom: 1.5rem;
          text-transform: uppercase;
          letter-spacing: 0.2rem;
        }
        .services ul {
          list-style: none;
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1rem;
        }
        .services li {
          font-size: 0.95rem;
          color: var(--color-text-muted);
          display: flex;
          align-items: center;
          gap: 0.8rem;
        }
        .services li::before {
          content: "";
          width: 5px;
          height: 1px;
          background: var(--color-accent);
        }
        
        @media (max-width: 1024px) {
          .about-grid { grid-template-columns: 1fr; gap: 4rem; }
          .about-visual { height: 400px; }
        }
      `}</style>
    </section>
  );
};

export default About;
