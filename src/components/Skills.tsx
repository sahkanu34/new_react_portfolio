import React from 'react';
import { Brain, Database, Server, Code, Cpu, BarChart, GitBranch, Globe, Terminal, GitCompare, SwatchBook, BarChartBigIcon } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain size={24} className="text-teal-500" />,
      skills: [
        { name: "TensorFlow", icon: <Brain size={16} className="text-teal-500" /> },
        { name: "PyTorch", icon: <Brain size={16} className="text-teal-500" /> },
        { name: "Scikit-Learn", icon: <Brain size={16} className="text-teal-500" /> },
        { name: "Keras", icon: <Brain size={16} className="text-teal-500" /> },
        { name: "Colab", icon: <Terminal size={16} className="text-teal-500" /> },
        { name: "Streamlit", icon: <Brain size={16} className="text-teal-500" /> },
      ]
    },
    {
      title: "Databases & Big Data",
      icon: <Database size={24} className="text-blue-500" />,
      skills: [
        { name: "MySQL", icon: <Database size={16} className="text-blue-500" /> },
        { name: "Postgresql", icon: <Database size={16} className="text-blue-500" /> },
        { name: "SQlite", icon: <Database size={16} className="text-blue-500" /> },
        { name: "Mongodb", icon: <Database size={16} className="text-blue-500" /> },
        // { name: "Cassandra", icon: <Database size={16} className="text-blue-500" /> },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code size={24} className="text-purple-500" />,
      skills: [
        { name: "Python", icon: <Code size={16} className="text-purple-500" /> },
        { name: "C", icon: <Code size={16} className="text-purple-500" /> },
        { name: "Java", icon: <Code size={16} className="text-purple-500" /> },
        { name: "C#", icon: <Code size={16} className="text-purple-500" /> },
        // { name: "JavaScript", icon: <Code size={16} className="text-purple-500" /> },
      ]
    },
    {
      title: "Specialized",
      icon: <Cpu size={24} className="text-amber-500" />,
      skills: [
        { name: "Machine Learning", icon: <Cpu size={16} className="text-amber-500" /> },
        { name: "Deep Learning", icon: <Brain size={16} className="text-amber-500" /> },
        { name: "Dashboards", icon: <BarChart size={16} className="text-amber-500" /> },
        { name: "Data Analaytics", icon: <BarChartBigIcon size={16} className="text-amber-500" /> },
        { name: "MLOps", icon: <GitBranch size={16} className="text-amber-500" /> },
      ]
    },
    {
      title: "Tools & Platforms",
      icon: <Globe size={24} className="text-emerald-500" />,
      skills: [
        { name: "Docker", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Kubernetes", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Jenkins", icon: <GitCompare size={16} className="text-emerald-500" /> },
        { name: "Git", icon: <Server size={16} className="text-emerald-500" /> },
        { name: "GitHub", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "PyCharm", icon: <Terminal size={16} className="text-emerald-500" /> },
        { name: "Jupyter", icon: <Terminal size={16} className="text-emerald-500" /> },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <SwatchBook size={24} className="text-emerald-500" />,
      skills: [
        { name: "Django", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "flask", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Numpy", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Pandas", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Matplotlib", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Plotly", icon: <Globe size={16} className="text-emerald-500" /> },
        { name: "Bootstrap", icon: <Globe size={16} className="text-emerald-500" /> },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-slate-50 dark:bg-slate-900">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide">MY EXPERTISE</p>
          <h2 className="text-3xl md:text-4xl font-bold">Professional Skills</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4">
            Comprehensive skill set encompassing AI development, machine learning, research methodologies, and specialized technical expertise.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-teal-300 dark:hover:border-teal-500"
            >
              <div className="absolute -top-5 left-6 w-10 h-10 flex items-center justify-center bg-white dark:bg-slate-900 rounded-lg shadow border border-slate-200 dark:border-slate-700 group-hover:bg-teal-50 dark:group-hover:bg-teal-900/20 transition-colors duration-300">
                {category.icon}
              </div>
              <h3 className="text-xl font-bold mb-4 mt-2">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors duration-200"
                  >
                    <div className="p-2 bg-slate-100 dark:bg-slate-700 rounded-lg">
                      {skill.icon}
                    </div>
                    <span className="text-slate-700 dark:text-slate-300 font-medium">{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white rounded-full -mr-10 -mt-10"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full -ml-10 -mb-10"></div>
          </div>
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold">Let's work together</h3>
              <p className="max-w-lg opacity-90">
                Looking for an AI engineer or research assistant for your next project? 
                I'm always open to discussing new opportunities and challenges.
              </p>
            </div>
            <a 
              href="#contact" 
              className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg hover:bg-slate-100 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-1"
            >
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;