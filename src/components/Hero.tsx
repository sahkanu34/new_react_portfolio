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
    'Machine Learning Developer',
    'Deep Learning Engineer',
    // 'AI Researcher',
    // 'Research Scientist',
    'AI Enthusiast',
    'Data Analyst',
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-24">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8 md:ml-16">
            <div className="space-y-3">
              <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide">
                INNOVATION THROUGH AI & MACHINE LEARNING
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block mb-2">Hello, I'm Suraj </span>
                <div className="min-h-[3rem] text-teal-600 dark:text-teal-400">
                  <span className="inline-block transition-all duration-300 ease-out">
                    {displayText}
                  </span>
                  <span className="inline-block w-[3px] h-[1em] bg-teal-600 dark:bg-teal-400 ml-1 animate-[blink_1s_infinite]"></span>
                </div>
              </h1>
              <p className="text-xl text-slate-600 dark:text-slate-400 mt-4 max-w-xl">
                Crafting intelligent solutions that push the boundaries of what's possible with artificial intelligence and machine learning.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center justify-center px-6 py-3 bg-teal-600 hover:bg-teal-700 dark:bg-teal-500 dark:hover:bg-teal-600 text-white font-medium rounded-lg transition-colors duration-300"
              >
                Get in Touch
                <ArrowRight size={18} className="ml-2" />
              </a>
              <a 
                href="#projects" 
                className="inline-flex items-center justify-center px-6 py-3 border border-slate-300 dark:border-slate-700 hover:border-slate-400 dark:hover:border-slate-600 rounded-lg font-medium transition-colors duration-300"
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
                src="images/new_profile.png"
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