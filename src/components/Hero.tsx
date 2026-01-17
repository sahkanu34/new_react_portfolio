import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

const companyLogos = [
  {
    name: "NAAMII",
    src: "https://www.naamii.org.np/wp-content/uploads/2023/02/naamii_logo.svg",
    alt: "NAAMII Logo",
    href: "https://naamii.org.np/"
  },
  // Add more companies here if needed
];

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const phrases = [
    'Machine Learning Engineer',
    'Deep Learning Engineer',
    'AI & ML Researcher',
    // 'Research Scientist',
    // 'AI Enthusiast',
    // 'Data Analyst',
  ];
  const [phraseIndex, setPhraseIndex] = useState(0);

  const animateText = useCallback(() => {
    const currentPhrase = phrases[phraseIndex];
    const nextIndex = (phraseIndex + 1) % phrases.length;

    if (isTyping) {
      if (displayText !== currentPhrase) {
        const nextChar = currentPhrase.charAt(displayText.length);
        setDisplayText(prev => prev + nextChar);
      } else {
        setTimeout(() => setIsTyping(false), 2000);
      }
    } else {
      if (displayText === '') {
        setPhraseIndex(nextIndex);
        setIsTyping(true);
      } else {
        setDisplayText(prev => prev.slice(0, -1));
      }
    }
  }, [displayText, isTyping, phraseIndex, phrases]);

  useEffect(() => {
    const interval = setInterval(animateText, isTyping ? 150 : 100);
    return () => clearInterval(interval);
  }, [animateText]);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-br from-slate-50 via-blue-50 to-teal-50 dark:from-slate-950 dark:via-slate-900 dark:to-slate-800 overflow-hidden">
      {/* Animated background pattern */}
      <div className="absolute inset-0 opacity-30 dark:opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-teal-400 dark:bg-teal-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-blue-400 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-40 w-72 h-72 bg-purple-400 dark:bg-purple-600 rounded-full mix-blend-multiply dark:mix-blend-screen filter blur-3xl opacity-70 animate-blob animation-delay-4000"></div>
      </div>
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-24">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 md:ml-16">
            <div className="space-y-3 animate-fade-in-up">
              <p className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider text-sm uppercase">
                ✨ INNOVATION THROUGH AI & MACHINE LEARNING
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block mb-2 bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">Hello, I'm Suraj</span>
                <div className="min-h-[3rem] text-slate-900 dark:text-white">
                  <span className="inline-block transition-all duration-300 ease-out">
                    {displayText}
                  </span>
                  <span className="inline-block w-[3px] h-[1em] bg-slate-900 dark:bg-white ml-1 animate-[blink_1s_infinite]"></span>
                </div>
              </h1>
              <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mt-6 max-w-xl leading-relaxed">
                Crafting <span className="font-semibold text-teal-600 dark:text-teal-400">intelligent solutions</span> that push the boundaries of what's possible with artificial intelligence and machine learning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-6">
              <a 
                href="#contact" 
                className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 dark:from-teal-500 dark:to-blue-500 dark:hover:from-teal-600 dark:hover:to-blue-600 text-white font-semibold rounded-xl shadow-lg shadow-teal-500/50 dark:shadow-teal-500/30 hover:shadow-xl hover:shadow-teal-600/50 dark:hover:shadow-teal-600/40 transform hover:-translate-y-0.5 transition-all duration-300"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 rounded-xl font-semibold shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
              >
                View Projects
              </a>
            </div>
            {/* Trusted and work in company logo section */}
            <div className="flex flex-col items-start mt-6">
              <span className="text-slate-500 dark:text-slate-400 text-sm font-medium mb-2">
              Trusted & worked in:
              </span>
              <div className="flex flex-row items-center gap-6">
              {companyLogos.map((company) => (
                <a
                key={company.name}
                href={company.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center"
                >
                <img
                  src={company.src}
                  alt={company.alt}
                  className="h-16 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
                  style={{ maxWidth: 180 }}
                />
                </a>
              ))}
              </div>
            </div>
            {/* End Trusted and work in company logo section */}
          </div>
          
          <div className="w-full md:w-1/2 relative md:mr-16">
            <div 
              className={`relative w-full max-w-xs h-auto aspect-square mx-auto overflow-hidden rounded-full ring-4 ring-teal-500/20 dark:ring-teal-400/20 transition-all duration-300 transform ${
              isHovered ? 'scale-105 rotate-2' : 'scale-100'
              }`}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <img 
                src="https://ideogram.ai/assets/image/lossless/response/QgGnH9Q2RnW6jknJ-RXF0g"
                alt="AI Illustration" 
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
            {/* <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-4 bg-teal-600 dark:bg-teal-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Available for Work
            </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
