import React, { useState } from 'react';
import { Brain, Lightbulb, Network, LucideLineChart, ChevronDown, ChevronUp, Code, Cloud, FileText } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const stats = [
    { label: 'Years Experience', value: '2+', icon: <Code size={20} /> },
    { label: 'Projects Completed', value: '10+', icon: <FileText size={20} /> },
    { label: 'AI Solutions Deployed', value: '5+', icon: <Cloud size={20} /> }
  ];

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

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <div className="inline-block">
            <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide text-base">ABOUT ME</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
            Turning Data into Intelligence
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-base">
            I'm a passionate AI Engineer, Machine Learning Engineer, and Research Assistant with expertise in building intelligent systems and advancing the field through innovative research.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-400 text-base leading-relaxed">
                With a background in Computer Science and specialized training in AI and Machine Learning, I've built and deployed various AI solutions across different domains and I am committed to continuous learning and innovation in the field.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white dark:bg-slate-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700">
                  <div className="text-teal-600 dark:text-teal-400 mb-2">
                    {stat.icon}
                  </div>
                  <p className="text-2xl font-bold text-slate-800 dark:text-slate-200">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">Key Focus Areas</h3>
            <div className="grid grid-cols-1 gap-4">
              {focusAreas.map((area) => (
                <div 
                  key={area.id}
                  className="bg-white dark:bg-slate-800 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-slate-100 dark:border-slate-700"
                  onClick={() => toggleSection(area.id)}
                >
                  <div className="p-4 flex items-center justify-between cursor-pointer">
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
                  </div>
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