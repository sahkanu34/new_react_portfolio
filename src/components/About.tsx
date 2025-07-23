import React, { useState } from 'react';
import { Brain, Lightbulb, Network, LucideLineChart, ChevronDown, ChevronUp, Code, Cloud, FileText, Briefcase } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  // Story timeline
  const story = [
    {
      year: "2022",
      title: "Diving into Computer Science",
      icon: <Code size={24} className="text-teal-500" />,
      text: "Enrolling in Computer Science at National Infotech College, I immersed myself in algorithms, data structures, and the mathematics behind AI. Late nights, endless debugging, and the joy of breakthroughs became my routine."
    },
    {
      year: "2023",
      title: "First Real-World AI Project",
      icon: <Brain size={24} className="text-purple-500" />,
      text: "I developed and deployed my first deep learning model for medical image analysis. Seeing my code help in real-world diagnostics was a turning point—AI wasn't just theory, it was impact."
    },
    {
      year: "2024",
      title: "Research & Innovation",
      icon: <LucideLineChart size={24} className="text-blue-500" />,
      text: "As a research assistant and ML engineer, I contributed to projects that pushed the boundaries of what's possible with data. Each challenge taught me the value of curiosity, collaboration, and resilience."
    },
    // Added NAAMII experience
    // {
    //   year: "2024",
    //   title: "ML Research Intern at NAAMII",
    //   icon: <Briefcase size={24} className="text-emerald-500" />,
    //   text: "Joined NAAMII (Nepal Applied Mathematics and Informatics Institute for Research) as a Machine Learning Researcher. Here, I work on cutting-edge AI research, collaborating with a talented team to solve real-world problems and advance the field of machine learning in Nepal and beyond."
    // }
  ];

  // Stats
  const stats = [
    { label: 'Years Experience', value: '2+', icon: <Code size={20} /> },
    { label: 'Projects Completed', value: '15+', icon: <FileText size={20} /> },
    { label: 'AI Solutions Deployed', value: '5+', icon: <Cloud size={20} /> }
  ];

  // Focus Areas
  const focusAreas = [
    {
      id: 'deep-learning',
      title: 'Deep Learning',
      icon: <Brain size={20} />,
      description: 'Neural networks & transformers',
      details: 'Specializing in deep neural networks, transformer architectures, and advanced AI models for complex problem-solving.'
    },
    {
      id: 'machine-learning',
      title: 'Machine Learning',
      icon: <Network size={20} />,
      description: 'Supervised & Unsupervised Learning',
      details: 'Expertise in both supervised and unsupervised learning techniques, model optimization, and deployment.'
    },
    {
      id: 'innovation',
      title: 'Innovation',
      icon: <Lightbulb size={20} />,
      description: 'Creating new AI solutions',
      details: 'Pioneering new approaches to AI implementation and developing cutting-edge solutions.'
    },
    {
      id: 'data-analytics',
      title: 'Data Analysis',
      icon: <LucideLineChart size={20} />,
      description: 'Interactive Dashboard and insights',
      details: 'Creating interactive visualizations and extracting meaningful insights from complex datasets.'
    }
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  // Animation variants for timeline items
  // Fix: Use a valid Variants object for framer-motion
  const timelineVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6, 
        type: "spring", 
        stiffness: 60, 
        damping: 18 
      } 
    }
  };

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto max-w-5xl">
        {/* Story Header */}
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide text-base">MY STORY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
            From Curiosity to Creation: My AI Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-base">
            Every line of code, every late-night experiment, and every challenge has shaped my path as an AI Engineer and Researcher. Here’s how my story unfolds:
          </p>
        </div>

        {/* Story Timeline */}
        <div className="relative mb-16">
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gradient-to-b from-teal-400 to-blue-400 dark:from-teal-700 dark:to-blue-700 rounded-full"></div>
          <div className="flex flex-col gap-10 ml-16">
            <AnimatePresence>
              {story.map((item, idx) => (
                <motion.div
                  key={idx}
                  className="relative flex items-start"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  variants={timelineVariants}
                  exit="hidden"
                  transition={{ delay: idx * 0.18 }}
                >
                  <div className="absolute -left-10 flex flex-col items-center">
                    <div className="bg-white dark:bg-slate-800 rounded-full shadow p-2 border border-slate-200 dark:border-slate-700">
                      {item.icon}
                    </div>
                    <span className="text-xs text-teal-600 dark:text-teal-400 font-semibold mt-2">{item.year}</span>
                  </div>
                  <motion.div
                    className="bg-white dark:bg-slate-800 rounded-lg shadow-md border border-slate-100 dark:border-slate-700 p-6 w-full"
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.18 + 0.15, duration: 0.5, type: "tween" }}
                    viewport={{ once: true, amount: 0.5 }}
                  >
                    <h4 className="text-lg font-bold text-slate-800 dark:text-slate-200 mb-1">{item.title}</h4>
                    <p className="text-slate-600 dark:text-slate-400 text-base">{item.text}</p>
                  </motion.div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Stats and Focus Areas */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Stats */}
          <div className="space-y-8">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Quick Stats</h3>
            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700 flex flex-col items-center">
                  <div className="text-teal-600 dark:text-teal-400 mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1 text-center">{stat.label}</p>
                </div>
              ))}
            </div>
            {/* A little personal touch */}
            <div className="mt-8 bg-teal-50 dark:bg-teal-900/30 p-4 rounded-lg shadow border border-teal-100 dark:border-teal-700 text-center">
              <span className="text-teal-600 dark:text-teal-400 font-semibold">What drives me?</span>
              <p className="text-slate-700 dark:text-slate-300 mt-2">
                The belief that technology, when used with empathy and creativity, can change lives for the better.
              </p>
            </div>
          </div>

          {/* Focus Areas Accordion */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Key Focus Areas</h3>
            <div className="flex flex-col gap-4">
              {focusAreas.map((area) => (
                <div 
                  key={area.id}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700"
                >
                  <button
                    className="w-full p-4 flex items-center justify-between cursor-pointer focus:outline-none"
                    onClick={() => toggleSection(area.id)}
                    aria-expanded={expandedSection === area.id}
                  >
                    <div className="flex items-center gap-3">
                      <div className="p-2 bg-teal-50 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                        {area.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-base text-slate-800 dark:text-slate-200">{area.title}</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400">{area.description}</p>
                      </div>
                    </div>
                    <div className="text-slate-400">
                      {expandedSection === area.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                  </button>
                  {expandedSection === area.id && (
                    <div className="px-4 pb-4 text-slate-600 dark:text-slate-400 border-t border-slate-100 dark:border-slate-700 text-sm">
                      {area.details}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;