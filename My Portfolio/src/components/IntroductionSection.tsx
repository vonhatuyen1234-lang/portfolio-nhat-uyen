import React from 'react';
import { motion } from 'motion/react';
import ImageFrame from './ImageFrame';

interface IntroductionSectionProps {
  onImageClick: (src: string) => void;
}

const IntroductionSection: React.FC<IntroductionSectionProps> = ({ onImageClick }) => {
  return (
    <section id="about" className="relative min-h-screen w-full flex items-center justify-center py-24 px-8 overflow-hidden">

      {/* Section Background */}
      <div className="absolute inset-0 z-0 bg-[#040c18]">
        {/* Poetic Meadow & Sky Image Overlay */}
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-screen"
          style={{ 
            backgroundImage: 'url("https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=2070&auto=format&fit=crop")',
          }}
        />
        
        {/* Twinkling Stars Overlay (CSS only for this section) */}
        <div className="absolute inset-0 z-1">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute h-1 w-1 rounded-full bg-white shadow-[0_0_8px_#fff]"
              initial={{ 
                opacity: Math.random(), 
                scale: Math.random() * 0.5 + 0.5,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%` 
              }}
              animate={{ 
                opacity: [0.2, 1, 0.2],
                scale: [0.8, 1.2, 0.8]
              }}
              transition={{
                duration: 2 + Math.random() * 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 5
              }}
            />
          ))}
        </div>
        
        {/* Gradient fades for transition */}
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#040c18] to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-[#040c18] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left Side: Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-sm font-medium tracking-widest text-muted-foreground uppercase mb-4 block">
            The Journey So Far
          </span>
          <h2 
            className="text-5xl md:text-6xl font-normal leading-tight text-foreground mb-8"
            style={{ fontFamily: '"Instrument Serif", serif' }}
          >
            A first-year student <br />
            <em className="text-muted-foreground not-italic">at UEL, VNU-HCM.</em>
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Hello, I'm Nhật Uyên. I am a first-year student at the University of Economics and Law, Vietnam National University Ho Chi Minh City. 
              With a passion for design, I have joined a socio-political organization and am currently a member of the 
              IT committee of the Law Faculty's Youth Union at the University of Economics and Law.
            </p>
            <p>
              I can design publications using Photoshop, Illustrator, Canva, etc., create slides using Canva, PowerPoint. 
              I can also edit videos using Capcut.
            </p>
            <p>
              With the skills I have described above, along with my learning spirit and commitment to innovation, 
              I will do my best.
            </p>
          </div>
          
          <div className="mt-10 flex gap-8 py-6 border-t border-white/10">
            <div>
              <p className="text-foreground text-2xl font-serif">20+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Projects</p>
            </div>
            <div>
              <p className="text-foreground text-2xl font-serif">A+</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Passion Level</p>
            </div>
            <div>
              <p className="text-foreground text-2xl font-serif">100%</p>
              <p className="text-xs text-muted-foreground uppercase tracking-wider">Enthusiasm</p>
            </div>
          </div>
        </motion.div>

        {/* Right Side: Visual Element */}
        <div className="relative flex justify-center">
          <div className="relative w-full max-w-[400px]">
             {/* Another image context or a decorative frame */}
             <ImageFrame 
               src="https://i.postimg.cc/MpfZcQzK/z7784606352548-7b1f478332a9e090dd17e43d3cb5bc98.jpg"
               rotation={2}
               className="shadow-3xl"
               onClick={() => onImageClick("https://i.postimg.cc/MpfZcQzK/z7784606352548-7b1f478332a9e090dd17e43d3cb5bc98.jpg")}
             />

             
             {/* Floating decorative elements */}
             <motion.div 
               className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-yellow-500/10 blur-2xl z-0"
               animate={{ scale: [1, 1.2, 1] }}
               transition={{ duration: 4, repeat: Infinity }}
             />
             <motion.div 
               className="absolute -bottom-8 -left-8 w-32 h-32 rounded-full bg-blue-500/10 blur-3xl z-0"
               animate={{ scale: [1.2, 1, 1.2] }}
               transition={{ duration: 5, repeat: Infinity }}
             />
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroductionSection;
