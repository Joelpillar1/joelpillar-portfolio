import { motion } from 'framer-motion';

interface NavigationProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

const Navigation = ({ activeTab, onTabChange }: NavigationProps) => {
  const tabs = ['Product Design', 'Graphic Design'];

  return (
    <div className="nav-container">
      <motion.nav
        className="floating-nav"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="nav-tabs">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => onTabChange(tab)}
              className={`tab-item ${activeTab === tab ? 'active' : ''}`}
            >
              <span className="tab-text">{tab}</span>
              {activeTab === tab && (
                <motion.div
                  layoutId="activeTab"
                  className="active-indicator"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                >
                  <div className="sparkles">
                    <span className="sparkle s1">✦</span>
                    <span className="sparkle s2">✦</span>
                    <span className="sparkle s3">✦</span>
                  </div>
                </motion.div>
              )}
            </button>
          ))}
        </div>
      </motion.nav>

      <style>{`
        .nav-container {
          position: fixed;
          top: 1.5rem;
          left: 0;
          width: 100%;
          display: flex;
          justify-content: center;
          z-index: 1000;
        }
        .floating-nav {
          background: #1d1d1b;
          height: 48px;
          border-radius: 100px;
          padding: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          width: fit-content;
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);
        }
        .nav-tabs {
          display: flex;
          gap: 2px;
          height: 100%;
          width: 100%;
        }
        .tab-item {
          position: relative;
          padding: 0 1.5rem;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #8c8c8c;
          font-size: 0.85rem;
          font-weight: 600;
          transition: color 0.3s ease;
          z-index: 1;
          white-space: nowrap;
        }
        .tab-item:hover {
          color: #ffffff;
        }
        .tab-item.active {
          color: #1d1d1b;
          font-weight: 700;
        }
        .tab-text {
          position: relative;
          z-index: 2;
        }
        .active-indicator {
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, #EAD6C0 0%, #D4A574 100%);
          border-radius: 100px;
          z-index: 1;
          border: 1px solid rgba(255, 255, 255, 0.3);
          box-shadow: 
            0 2px 8px rgba(0, 0, 0, 0.2),
            inset 0 1px 1px rgba(255, 255, 255, 0.4);
          overflow: hidden;
        }
        .sparkles {
          position: absolute;
          inset: 0;
          pointer-events: none;
        }
        .sparkle {
          position: absolute;
          color: #ffffff;
          font-size: 8px;
          opacity: 0.6;
        }
        .s1 { top: 15%; left: 20%; animation: pulse 2s infinite; }
        .s2 { top: 25%; left: 45%; animation: pulse 2.5s infinite 0.5s; }
        .s3 { top: 18%; left: 70%; animation: pulse 3s infinite 1s; }

        @keyframes pulse {
          0%, 100% { opacity: 0.2; transform: scale(0.8); }
          50% { opacity: 1; transform: scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default Navigation;
