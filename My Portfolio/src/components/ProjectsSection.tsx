import React from 'react';
import { motion } from 'motion/react';
import ImageFrame from './ImageFrame';

const projects = [
  { id: 1, src: "https://i.postimg.cc/VNTv6Prf/Standee-theo-dau-chan-Dang.png", title: "Standee", aspect: "aspect-[1/2]" },
  { id: 2, src: "https://i.postimg.cc/52rb5qx3/lelanguage.png", title: "Contest Poster", aspect: "aspect-[3/4]" },
  { id: 3, src: "https://i.postimg.cc/rsfvVMsr/phu-yen.png", title: "Travel Posters", aspect: "aspect-[3/4]" },
  { id: 4, src: "https://i.postimg.cc/9FSnJx72/voucher-lau-chay.png", title: "Voucher Design", aspect: "aspect-[3/2]" },
  { id: 5, src: "https://i.postimg.cc/Qt4bVtgC/ngang-01.png", title: "Hastag Design", aspect: "aspect-[3/2]" },
  { id: 6, src: "https://i.postimg.cc/pVcGL0k5/4-ban.png", title: "Poster Design", aspect: "aspect-[3/4]" },
  { id: 7, src: "https://i.postimg.cc/xTH4pvyC/MINIGAME-SO-2-HIHI.png", title: "Minigame Design", aspect: "aspect-square" },
  { id: 8, src: "https://i.postimg.cc/ZKZ8Z6z7/Ban-sao-cua-TEMPLATE-NHAT-QUAN-KY-(2).png", title: "Personal Design", aspect: "aspect-[4/5]" },
];

interface ProjectsSectionProps {
  onImageClick: (src: string) => void;
}

const ProjectsSection: React.FC<ProjectsSectionProps> = ({ onImageClick }) => {
  return (
    <section id="projects" className="relative min-h-screen w-full py-32 px-8 overflow-hidden bg-[#040c18] border-t border-white/5">

      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_#1e3a8a_0%,_transparent_60%)] opacity-20" />
        
        {/* Sky Background Image (Meadow/Night Context) */}
        <div 
          className="absolute inset-0 opacity-10 bg-cover bg-bottom mix-blend-overlay"
          style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1501854140801-50d01674aa3e?q=80&w=2000&auto=format&fit=crop")' }}
        />

        {/* Shooting Stars Effect Container */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(3)].map((_, i) => (
            <div 
              key={i} 
              className="shooting-star"
              style={{
                top: `${20 + Math.random() * 40}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Twinkling Stars */}
        <div className="absolute inset-0">
          {[...Array(60)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 bg-white rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                boxShadow: '0 0 10px #fff'
              }}
              animate={{ opacity: [0.1, 1, 0.1], scale: [0.5, 1.2, 0.5] }}
              transition={{ 
                duration: 2 + Math.random() * 3, 
                repeat: Infinity,
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>

        {/* Meadow SVG Overlay */}
        <div className="absolute bottom-0 left-0 w-full h-[40%] opacity-30">
          <svg viewBox="0 0 1440 320" className="absolute bottom-0 w-full h-full" preserveAspectRatio="none">
            <path 
              fill="#065f46" 
              d="M0,224L80,213.3C160,203,320,181,480,192C640,203,800,245,960,240C1120,235,1280,181,1360,154.7L1440,128L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
            />
          </svg>
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        <header className="mb-24 text-center">
          <motion.h2 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-5xl md:text-8xl font-normal text-foreground tracking-tighter"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            My Projects <em className="text-muted-foreground not-italic italic">(click for full)</em>
          </motion.h2>
          <div className="h-px w-24 bg-white/20 mx-auto mt-8 mb-6" />
        </header>

        {/* Masonry Layout via Columns */}
        <div className="columns-1 md:columns-2 lg:columns-3 xl:columns-4 gap-8 space-y-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="break-inside-avoid group mb-8"
            >
              <ImageFrame 
                src={project.src} 
                rotation={index % 2 === 0 ? -1 : 1}
                aspectRatio={project.aspect}
                className="w-full"
                onClick={() => onImageClick(project.src)}
              />

              <div className="mt-6 flex items-center justify-between px-2">
                <div>
                  <h3 
                    className="text-lg font-normal text-foreground leading-none"
                    style={{ fontFamily: '"Instrument Serif", serif' }}
                  >
                    {project.title}
                  </h3>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em] mt-2">
                    Studio / 2026
                  </p>
                </div>
                <div className="h-8 w-8 rounded-full border border-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-xs">↗</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
