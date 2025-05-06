import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight } from 'lucide-react';

const Hero: React.FC = () => {
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const phrases = [
    'Machine Learning Engineer',
    'AI Ethusiast',
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
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 px-4">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="w-full md:w-1/2 space-y-6 md:space-y-8">
            <div className="space-y-3">
              <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide">
                INNOVATION THROUGH AI & MACHINE LEARNING
              </p>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block mb-2">Hello, I'm a</span>
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
            
            {/* <div className="pt-6">
              <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">Trusted by organizations worldwide</p>
              <div className="flex flex-wrap gap-8 opacity-70 dark:opacity-50">
                <img src="https://images.pexels.com/photos/11304716/pexels-photo-11304716.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Company logo" className="h-8 object-contain" />
                <img src="https://images.pexels.com/photos/11304717/pexels-photo-11304717.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Company logo" className="h-8 object-contain" />
                <img src="https://images.pexels.com/photos/11304718/pexels-photo-11304718.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Company logo" className="h-8 object-contain" />
              </div>
            </div> */}
          </div>
          
          <div className="w-full md:w-1/2 relative">
            <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden ring-4 ring-teal-500/20 dark:ring-teal-400/20">
              <div className="absolute inset-0 bg-gradient-to-br from-teal-500/20 to-blue-500/20 dark:from-teal-500/10 dark:to-blue-500/10 z-10"></div>
              <img 
                src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="AI Illustration" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-teal-500/30 dark:bg-teal-500/20 rounded-full blur-2xl"></div>
            <div className="absolute -top-6 -right-6 w-32 h-32 bg-blue-500/30 dark:bg-blue-500/20 rounded-full blur-2xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;