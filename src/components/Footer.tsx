const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-top">
        <h2 className="footer-cta">Have a project in mind?</h2>
        <a href="mailto:joelpillar51@gmail.com" className="footer-email">joelpillar51@gmail.com</a>
      </div>

      <div className="footer-bottom">
        <div className="copyright">
          © {new Date().getFullYear()} Joel Pillar. All rights reserved.
        </div>
        <div className="socials">
          <a href="https://www.linkedin.com/in/joelpillar/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://contra.com/joel_pillar_2kfsn2ed/work?r=joel_pillar_2kfsn2ed" target="_blank" rel="noopener noreferrer">Contra</a>
          <a href="https://x.com/joelpillarr" target="_blank" rel="noopener noreferrer">Twitter</a>
        </div>
      </div>

      <style>{`
        .footer {
          padding: 8rem 5% 4rem;
          background: transparent;
          border-top: 1px solid var(--color-border);
        }
        .footer-top {
          text-align: center;
          margin-bottom: 6rem;
        }
        .footer-cta {
          font-size: clamp(2rem, 5vw, 4rem);
          color: var(--color-text);
          margin-bottom: 1.5rem;
          font-weight: 700;
          letter-spacing: -0.02em;
        }
        .footer-email {
          font-size: 1.5rem;
          color: var(--color-accent);
          font-family: var(--font-serif);
          text-decoration: none;
          border-bottom: 1.5px solid var(--color-accent);
          padding-bottom: 4px;
          font-style: italic;
        }
        .footer-email:hover {
          color: var(--color-text);
          border-color: var(--color-text);
        }
        .footer-bottom {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 2rem;
          border-top: 1px solid var(--color-border);
        }
        .copyright {
          font-size: 0.8rem;
          color: var(--color-text-muted);
        }
        .socials {
          display: flex;
          gap: 2rem;
        }
        .socials a {
          font-size: 0.8rem;
          color: var(--color-text-muted);
          text-transform: uppercase;
          letter-spacing: 0.1rem;
          font-weight: 600;
        }
        .socials a:hover {
          color: var(--color-accent);
        }
        @media (max-width: 768px) {
          .footer-bottom {
            flex-direction: column;
            gap: 2rem;
            text-align: center;
          }
        }
      `}</style>
    </footer>
  );
};

export default Footer;
