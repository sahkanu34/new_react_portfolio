import React, { useState } from 'react';
import { Brain, Lightbulb, Network, LucideLineChart, ChevronDown, ChevronUp } from 'lucide-react';

const About: React.FC = () => {
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '10+' },
    { label: 'AI Solutions Deployed', value: '5+' }
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
      title: 'Data Analyst',
      icon: <LucideLineChart size={20} />,
      description: 'Interactive Dashboard and insights',
      details: 'Creating interactive visualizations and extracting meaningful insights from complex datasets.'
    }
  ];

  const toggleSection = (id: string) => {
    setExpandedSection(expandedSection === id ? null : id);
  };

  return (
    <section id="about" className="py-20 px-4 bg-white dark:bg-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide">ABOUT ME</p>
          <h2 className="text-3xl md:text-4xl font-bold">Turning Data into Intelligence</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4">
            I'm a passionate AI Engineer, Machine Learning Engineer, and Research Assistant with expertise in building intelligent systems and advancing the field through innovative research.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-400">
                With a background in Computer Science and specialized training in AI and Machine Learning, I've built and deployed various AI solutions across different domains and I am committed to continuous learning and innovation in the field.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-700 p-6 rounded-lg transform hover:scale-105 transition-transform duration-300">
                  <p className="text-4xl font-bold text-teal-600 dark:text-teal-400">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400 mt-2">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Key Focus Areas</h3>
              <div className="grid grid-cols-1 gap-4">
                {focusAreas.map((area) => (
                  <div 
                    key={area.id}
                    className="bg-slate-50 dark:bg-slate-700 rounded-lg overflow-hidden cursor-pointer"
                    onClick={() => toggleSection(area.id)}
                  >
                    <div className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                          {area.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold">{area.title}</h4>
                          <p className="text-sm text-slate-600 dark:text-slate-400">{area.description}</p>
                        </div>
                      </div>
                      {expandedSection === area.id ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                    </div>
                    {expandedSection === area.id && (
                      <div className="px-4 pb-4 text-slate-600 dark:text-slate-400">
                        {area.details}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;