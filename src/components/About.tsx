import React from 'react';
import { Brain, Lightbulb, Code, Cloud, FileText, Award, Target, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  // Stats
  const stats = [
    { label: 'Years Experience', value: '2+', icon: <Code size={20} /> },
    { label: 'Projects Completed', value: '15+', icon: <FileText size={20} /> },
    { label: 'AI Solutions Deployed', value: '5+', icon: <Cloud size={20} /> },
    { label: 'Research Publications', value: 'Soon..', icon: <Award size={20} /> }
  ];

  // Key Highlights
  const highlights = [
    {
      icon: <Brain size={24} />,
      title: 'Deep Learning Expert',
      description: 'Specialized in neural networks, CNNs, and transformer architectures for complex AI solutions.'
    },
    {
      icon: <Target size={24} />,
      title: 'Medical AI Research',
      description: 'Focused on medical image analysis and developing AI systems for healthcare diagnostics.'
    },
    {
      icon: <Zap size={24} />,
      title: 'Production-Ready Solutions',
      description: 'Building and deploying scalable ML systems with Docker, Kubernetes, and cloud platforms.'
    },
    {
      icon: <Lightbulb size={24} />,
      title: 'Innovation Driven',
      description: 'Constantly exploring cutting-edge technologies to solve real-world challenges.'
    }
  ];

  // Work Experience Highlights
  const workExperience: any[] = [
    // {
    //   period: "Aug 2024 - Present",
    //   role: "Research Intern",
    //   company: "NAAMII",
    //   location: "Remote",
    //   description: "Working on Medical Image Analysis and Machine Learning Engineering. Developing deep learning models for healthcare challenges, collaborating with researchers and clinicians.",
    //   achievements: [
    //     "Developed medical image segmentation models",
    //     "Optimized deep learning pipelines",
    //     "Contributed to research publications"
    //   ],
    //   technologies: ["PyTorch", "TensorFlow", "Medical Imaging", "ITK-Snap", "3D Slicer"]
    // },
    // {
    //   period: "2022 - 2024",
    //   role: "AI/ML Projects",
    //   company: "Independent Research",
    //   location: "Nepal",
    //   description: "Built and deployed multiple AI/ML applications including brain tumor detection, cancer prediction systems, and data analytics dashboards.",
    //   achievements: [
    //     "Deployed 5+ production ML applications",
    //     "Implemented YOLOv8 for medical imaging",
    //     "Created interactive ML dashboards"
    //   ],
    //   technologies: ["Python", "Streamlit", "Docker", "scikit-learn", "Keras"]
    // },
  ];

  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-slate-50 via-blue-50/30 to-teal-50/30 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <div className="flex flex-col gap-4 mb-16 items-center text-center">
          <p className="text-teal-600 dark:text-teal-400 font-semibold tracking-wider text-sm uppercase">👋 ABOUT ME</p>
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-slate-900 via-slate-700 to-slate-900 dark:from-white dark:via-slate-200 dark:to-white bg-clip-text text-transparent">
            ML Engineer & Researcher
          </h2>
        </div>

        {/* Introduction */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-slate-200/50 dark:border-slate-700/50 p-8 md:p-12"
        >
          <div className="flex flex-col md:flex-row gap-8 items-start">
            <div className="flex-1 space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">
                Hello! I'm Suraj Sah Kanu
              </h3>
              <div className="space-y-4 text-slate-600 dark:text-slate-300 leading-relaxed">
                <p className="text-lg">
                  I'm a passionate <span className="font-semibold text-teal-600 dark:text-teal-400">ML Engineer and Medical Imaging Researcher</span> with a deep commitment to leveraging artificial intelligence to solve real-world problems, particularly in healthcare and medical imaging.
                </p>
                <p>
                  Currently working as a Research Intern at <span className="font-semibold text-teal-600 dark:text-teal-400">NAAMII</span> (Nepal Applied Mathematics and Informatics Institute for Research), I focus on developing cutting-edge deep learning models for medical image analysis. My work combines technical expertise with a genuine desire to make a positive impact on people's lives through technology.
                </p>
                <p>
                  My journey in AI began with curiosity about how machines can learn and has evolved into a career dedicated to pushing the boundaries of what's possible with neural networks, computer vision, and data science. I specialize in building production-ready ML systems, from conception to deployment, using modern tools and best practices.
                </p>
                <p>
                  When I'm not training models or debugging code, I'm exploring new AI research papers, contributing to open-source projects, or sharing knowledge with the developer community. I believe in the power of collaboration and continuous learning to drive innovation forward.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-500/50 dark:hover:border-teal-500/50 flex flex-col items-center hover:-translate-y-1"
            >
              <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl text-white mb-3 shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
                {stat.icon}
              </div>
              <p className="text-3xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent">{stat.value}</p>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-2 text-center font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </div>

        {/* Key Highlights */}
        <div className="mb-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            What I Bring to the Table
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm p-6 rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 group"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 bg-gradient-to-br from-teal-500 to-blue-500 rounded-xl text-white shadow-md group-hover:shadow-lg group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    {highlight.icon}
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-2 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
                      {highlight.title}
                    </h4>
                    <p className="text-slate-600 dark:text-slate-300 text-sm leading-relaxed">
                      {highlight.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Work Experience */}
        <div>
          {/* <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-slate-900 to-slate-700 dark:from-white dark:to-slate-300 bg-clip-text text-transparent">
            Professional Journey
          </h3> */}
          <div className="space-y-6">
            {workExperience.map((work, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl border border-slate-200/50 dark:border-slate-700/50 hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 overflow-hidden group"
              >
                <div className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-400 dark:to-blue-400 bg-clip-text text-transparent mb-1">
                        {work.role}
                      </h4>
                      <p className="text-lg font-semibold text-slate-700 dark:text-slate-300">
                        {work.company} • {work.location}
                      </p>
                    </div>
                    <span className="inline-block mt-2 md:mt-0 px-4 py-2 bg-gradient-to-r from-teal-50 to-blue-50 dark:from-teal-900/30 dark:to-blue-900/30 text-teal-600 dark:text-teal-400 text-sm font-semibold rounded-full border border-teal-200 dark:border-teal-700">
                      {work.period}
                    </span>
                  </div>
                  
                  <p className="text-slate-600 dark:text-slate-300 mb-4 leading-relaxed">
                    {work.description}
                  </p>

                  <div className="mb-4">
                    <p className="text-sm font-semibold text-slate-700 dark:text-slate-300 mb-2">Key Achievements:</p>
                    <ul className="space-y-2">
                      {work.achievements.map((achievement: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, idx: React.Key | null | undefined) => (
                        <li key={idx} className="flex items-start gap-2 text-slate-600 dark:text-slate-400 text-sm">
                          <span className="text-teal-500 mt-1">▹</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {work.technologies.map((tech: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | null | undefined, idx: React.Key | null | undefined) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 bg-gradient-to-r from-teal-600 via-blue-600 to-purple-600 rounded-2xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full -mr-20 -mt-20 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-white rounded-full -ml-20 -mb-20 blur-3xl"></div>
          </div>
          <div className="relative text-center space-y-4">
            <h3 className="text-2xl md:text-3xl font-bold">Let's Build Something Amazing Together</h3>
            <p className="max-w-2xl mx-auto text-lg opacity-95">
              I'm always excited to collaborate on innovative AI projects, contribute to research, or discuss how machine learning can solve complex challenges. Let's connect and create impact!
            </p>
            <a 
              href="#contact" 
              className="inline-block mt-4 px-8 py-4 bg-white text-teal-600 font-semibold rounded-xl shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
