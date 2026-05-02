/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import StarryNightBackground from './components/StarryNightBackground';
import IntroductionSection from './components/IntroductionSection';
import ProjectsSection from './components/ProjectsSection';
import Lightbox from './components/Lightbox';

import ImageFrame from './components/ImageFrame';

import { Mail, Phone, Facebook, MessageCircle } from 'lucide-react';

export default function App() {
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  const handleImageClick = (src: string) => {
    setLightboxImage(src);
  };

  const scrollToSection = (e: React.MouseEvent, id: string) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen w-full overflow-x-hidden bg-background selection:bg-primary/20">
      {/* Hero Container */}
      <section id="home" className="relative min-h-screen w-full">

        {/* Background Section (Scoped to Hero) */}
        <StarryNightBackground />

        {/* Navigation Bar */}
        <nav className="relative z-20 mx-auto flex max-w-7xl items-center justify-between px-8 py-6">
        <div 
          className="text-3xl tracking-tight text-foreground" 
          style={{ fontFamily: '"Instrument Serif", serif' }}
        >
          My Portfolio<sup className="text-xs">®</sup>
        </div>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="text-sm font-medium text-foreground transition-colors">Home</a>
            <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">About</a>
            <a href="#projects" onClick={(e) => scrollToSection(e, 'projects')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Projects</a>
            <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>

          <button 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="liquid-glass rounded-full px-6 py-2.5 text-sm text-foreground transition-transform hover:scale-[1.03] cursor-pointer"
          >
            Reach Out
          </button>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-8 pt-20 pb-40 lg:flex-row lg:pt-0">
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 
              className="max-w-xl text-6xl font-normal leading-[0.95] tracking-[-2.46px] text-foreground sm:text-7xl md:text-8xl lg:text-9xl"
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Nhật Uyên
            </h1>

            <p className="mt-8 max-w-lg text-base leading-relaxed text-muted-foreground sm:text-lg">
              A student with a passion for design and AI training, proficient in Adobe software. 
              A small but enthusiastic passion.
            </p>

            <div className="mt-12 flex flex-wrap gap-4 justify-center lg:justify-start">
              <button 
                onClick={(e) => scrollToSection(e, 'about')}
                className="liquid-glass rounded-full px-14 py-5 text-base text-foreground transition-transform hover:scale-[1.03] cursor-pointer"
              >
                Begin Journey
              </button>
              <button 
                onClick={(e) => scrollToSection(e, 'projects')}
                className="rounded-full border border-white/10 bg-white/5 px-10 py-5 text-base text-foreground backdrop-blur-sm transition-all hover:bg-white/10 cursor-pointer"
              >
                View Works
              </button>
            </div>
          </motion.div>
        </div>

        <div className="relative mt-20 flex flex-1 items-center justify-center lg:mt-0 lg:justify-end">
          {/* Main Large Image */}
          <div className="relative z-10 w-full max-w-[320px] sm:max-w-[400px]">
            <ImageFrame 
              src="https://i.postimg.cc/HLwrxhgb/z7784874949761-94834b0abeb118d7157829afb03cfae2.jpg" 
              rotation={-3} 
              delay={0.2} 
              className="w-full"
              onClick={() => handleImageClick("https://i.postimg.cc/HLwrxhgb/z7784874949761-94834b0abeb118d7157829afb03cfae2.jpg")}
            />
          </div>

          {/* Secondary Overlapping Image */}
          <div className="absolute -left-10 -top-10 z-0 hidden w-full max-w-[200px] sm:block lg:-left-20">
            <ImageFrame 
              src="https://i.postimg.cc/vZx81VG4/z7784606383277-4dce06ce7eb26465a7b9acadcc2ad1f2.jpg" 
              rotation={8} 
              delay={0.4} 
              className="w-full"
              onClick={() => handleImageClick("https://i.postimg.cc/vZx81VG4/z7784606383277-4dce06ce7eb26465a7b9acadcc2ad1f2.jpg")}
            />
          </div>


          {/* Abstract floating elements for depth */}
          <motion.div
            animate={{ y: [0, 20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity }}
            className="absolute -right-10 bottom-10 h-24 w-24 rounded-full bg-yellow-500/10 blur-2xl"
          />
          <motion.div
            animate={{ y: [0, -20, 0], rotate: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, delay: 1 }}
            className="absolute left-1/2 top-10 h-32 w-32 rounded-full bg-blue-500/5 blur-3xl"
          />
        </div>
      </main>
      </section>

      {/* Introduction Section */}
      <IntroductionSection onImageClick={handleImageClick} />
      
      {/* Projects Section */}
      <ProjectsSection onImageClick={handleImageClick} />
      
      {/* Lightbox Modal */}
      <Lightbox src={lightboxImage} onClose={() => setLightboxImage(null)} />

      
      {/* Footer / Contact */}
      <footer id="contact" className="relative z-10 py-24 px-8 border-t border-white/5 bg-[#040c18]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-serif text-foreground">Nhật Uyên</h3>
            <p className="text-sm text-muted-foreground leading-relaxed italic">
              "I will strive to improve with what I have, hone my skills daily, and study diligently."
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-primary/80 font-bold">Contact</h4>
            <div className="space-y-4 text-sm">
              <a href="mailto:vonhatuyen1234@gmail.com" className="group flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Mail size={14} />
                </div>
                <span>vonhatuyen1234@gmail.com</span>
              </a>
              <div className="group flex items-center gap-3 text-foreground/80">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center">
                  <Phone size={14} />
                </div>
                <span>+84866080970</span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h4 className="text-xs uppercase tracking-widest text-primary/80 font-bold">Social</h4>
            <div className="space-y-4 text-sm">
              <a href="https://www.facebook.com/uyen.nhat.7165?locale=vi_VN" target="_blank" rel="noopener noreferrer" className="group flex items-center gap-3 text-foreground/80 hover:text-foreground transition-colors">
                <div className="h-8 w-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-blue-600/20 transition-colors">
                  <Facebook size={14} />
                </div>
                <span>Facebook</span>
              </a>
            </div>
          </div>

          <div className="space-y-6 text-right hidden lg:block">
             <div 
              className="text-4xl tracking-tight text-foreground/10 italic select-none" 
              style={{ fontFamily: '"Instrument Serif", serif' }}
            >
              Innovation & Design
            </div>
          </div>
        </div>
        
        <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <p className="text-sm text-muted-foreground font-light">
            © 2026 Nhật Uyên. Crafted with passion and poetry.
          </p>
          <div className="flex space-x-6">
             <a href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] font-semibold">Privacy Policy</a>
             <a href="#" className="text-[10px] text-muted-foreground hover:text-foreground transition-colors uppercase tracking-[0.2em] font-semibold">Terms of Studio</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
