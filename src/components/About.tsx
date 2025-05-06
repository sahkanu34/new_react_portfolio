import React from 'react';
import { Brain, Lightbulb, Network, LucideLineChart } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { label: 'Years Experience', value: '1+' },
    { label: 'Projects Completed', value: '10+' },
    // { label: 'Research Papers', value: '12' },
    { label: 'AI Solutions Deployed', value: '5+' }
  ];

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="rounded-xl overflow-hidden relative h-[32rem] w-full group">
            <img 
              src="person.jpeg" 
              alt="Professional portrait" 
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>

          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold">My Journey</h3>
              <p className="text-slate-600 dark:text-slate-400">
                With a background in Computer Science and specialized training in AI and Machine Learning, I've build and deployed various AI solutions across different domains and I am committed to continuous learning and innovation in the field.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <div key={index} className="bg-slate-50 dark:bg-slate-700 p-4 rounded-lg">
                  <p className="text-3xl font-bold text-teal-600 dark:text-teal-400">{stat.value}</p>
                  <p className="text-sm text-slate-600 dark:text-slate-400">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4">
              <h3 className="text-2xl font-bold">Key Focus Areas</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                    <Brain size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Deep Learning</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Neural networks & transformers</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                    <Network size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Machine Learning</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Classification & Regressions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                    <Lightbulb size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Innovation</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Creating new AI solutions</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="p-2 bg-teal-100 dark:bg-teal-900/30 rounded-lg text-teal-600 dark:text-teal-400">
                    <LucideLineChart size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Data Analyst</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Interactive Dashboard and insights</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;