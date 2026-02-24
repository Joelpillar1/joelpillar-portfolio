import { useState } from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CaseStudies from './components/CaseStudies';
import Footer from './components/Footer';
import CaseStudyDetail from './components/CaseStudyDetail';
import TestimonialsDemo from './components/TestimonialsDemo';
import { HeroHighlight } from './components/ui/hero-highlight';
import './index.css';

function App() {
  const [selectedProject, setSelectedProject] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('Product Design');

  const handleSelectProject = (project: any) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  return (
    <HeroHighlight containerClassName="w-full" className="w-full">
      <div className="w-full relative z-20">
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />
        <main className="w-full flex flex-col items-center">
          <Hero activeTab={activeTab} />
          <CaseStudies activeTab={activeTab} onSelectProject={handleSelectProject} />

          <section className="w-full py-40 my-24 bg-transparent border-y border-black/5 flex justify-center">
            <div className="w-full max-w-[1200px] px-6 flex flex-col items-center">
              <div className="w-full max-w-[1000px] text-center mb-16 flex flex-col items-center">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                  Trusted by world-class teams
                </h2>
                <p className="text-lg text-slate-500 max-w-2xl text-center leading-relaxed">
                  Collaborating with industry leaders to build digital products that drive impact and deliver results.
                </p>
              </div>
              <div className="w-full flex justify-center">
                <TestimonialsDemo />
              </div>
            </div>
          </section>

          <About />
        </main>
        <Footer />
      </div>

      <CaseStudyDetail
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </HeroHighlight>
  );
}

export default App;
