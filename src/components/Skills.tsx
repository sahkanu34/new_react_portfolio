import React from 'react';
import { Brain, Database, Server, Code, Cpu, BarChart, GitBranch, Globe, Terminal, GitCompare, SwatchBook, BarChartBigIcon, Flame, Layers } from 'lucide-react';

const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: <Brain size={24} className="text-teal-500" />,
      skills: [
        { name: "TensorFlow", icon: <BarChart size={16} className="text-teal-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg" },
        { name: "Keras", icon: <Code size={16} className="text-teal-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/keras/keras-original.svg" },
        { name: "PyTorch", icon: <Flame size={16} className="text-teal-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg" },
        { name: "Scikit-Learn", icon: <BarChartBigIcon size={16} className="text-teal-500" />, image: "https://icon.icepanel.io/Technology/svg/scikit-learn.svg" },
        { name: "Open-CV", icon: <BarChartBigIcon size={16} className="text-teal-500" />, image: "https://icon.icepanel.io/Technology/svg/OpenCV.svg" },
        { name: "Google Colab", icon: <Terminal size={16} className="text-teal-500" />, image: "https://colab.google/static/images/icons/colab.png" },
        { name: "Streamlit", icon: <Server size={16} className="text-teal-500" />, image: "https://icon.icepanel.io/Technology/svg/Streamlit.svg" },
      ]
    },
    {
      title: "Databases & Big Data",
      icon: <Database size={24} className="text-blue-500" />,
      skills: [
        { name: "MySQL", icon: <Database size={16} className="text-blue-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
        { name: "Postgresql", icon: <Database size={16} className="text-blue-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
        { name: "SQlite", icon: <Database size={16} className="text-blue-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" },
        { name: "Mongodb", icon: <Database size={16} className="text-blue-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
        // { name: "Cassandra", icon: <Database size={16} className="text-blue-500" /> },
      ]
    },
    {
      title: "Programming Languages",
      icon: <Code size={24} className="text-purple-500" />,
      skills: [
        { name: "Python", icon: <Code size={16} className="text-purple-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "C", icon: <Code size={16} className="text-purple-500" />, image: "https://icon.icepanel.io/Technology/svg/C.svg" },
        { name: "Java", icon: <Code size={16} className="text-purple-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
        { name: "C#", icon: <Code size={16} className="text-purple-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg" },
        // { name: "JavaScript", icon: <Code size={16} className="text-purple-500" /> },
      ]
    },
    {
      title: "Specialized",
      icon: <Cpu size={24} className="text-amber-500" />,
      skills: [
        { name: "Machine Learning", icon: <Cpu size={16} className="text-amber-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Data Annotation Specialist", icon: <Cpu size={16} className="text-amber-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Deep Learning", icon: <Layers size={16} className="text-amber-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Dashboards", icon: <BarChart size={16} className="text-amber-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Data Analytics", icon: <BarChartBigIcon size={16} className="text-amber-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
        { name: "Medical Imaging", icon: <GitBranch size={16} className="text-amber-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
      ]
    },
    {
      title: "Tools & Technologies",
      icon: <Globe size={24} className="text-emerald-500" />,
      skills: [
        { name: "Jupyter Notebook", icon: <Terminal size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jupyter/jupyter-original.svg" },
        { name: "Anaconda Navigator", icon: <Terminal size={16} className="text-emerald-500" />, image: "https://icon.icepanel.io/Technology/svg/Anaconda.svg" },
        { name: "PyCharm", icon: <Terminal size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pycharm/pycharm-original.svg" },
        { name: "Docker", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
        { name: "Kubernetes", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
        { name: "Actions", icon: <GitCompare size={16} className="text-emerald-500" />, image: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg" },
        { name: "Git", icon: <Server size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
        { name: "GitHub", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" },
      ]
    },
    {
      title: "Frameworks & Libraries",
      icon: <SwatchBook size={24} className="text-emerald-500" />,
      skills: [
        { name: "FastAPI", icon: <Globe size={16} className="text-emerald-500" />, image: "https://icon.icepanel.io/Technology/svg/FastAPI.svg" },
        { name: "django", icon: <Globe size={16} className="text-emerald-500" />, image: "https://icon.icepanel.io/Technology/png-shadow-512/Django.png" },
        { name: "Numpy", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg" },
        { name: "Pandas", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg" },
        { name: "Matplotlib", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/matplotlib/matplotlib-original.svg" },
        { name: "Plotly", icon: <Globe size={16} className="text-emerald-500" />, image: "https://icon.icepanel.io/Technology/svg/Ploty.svg" },
        { name: "Bootstrap", icon: <Globe size={16} className="text-emerald-500" />, image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg" },
      ]
    },
  ];

  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
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
              className="group relative bg-white dark:bg-slate-800 p-6 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700"
            >
              <h3 className="text-xl font-bold mb-4 mt-2">{category.title}</h3>
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="flex items-center gap-3 p-2 rounded-lg"
                  >
                    <img src={skill.image} alt={skill.name} className="w-6 h-6 object-contain rounded" />
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
              className="px-6 py-3 bg-white text-teal-600 font-medium rounded-lg shadow-md"
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