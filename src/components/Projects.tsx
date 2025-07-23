import React, { useState } from 'react';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  LiveDemo?: string;
  repoLink?: string;
  category: string;
}

const Projects: React.FC = () => {
  const categories = ["All", "AI/ML Models", "Applications"];
  const [activeCategory, setActiveCategory] = useState("All");

  const projects: Project[] = [
    {
      id: 0,
      title: "Market Basket Analysis - Unsupervised Learning",
      description: "A small project using Walmart Datasets 2025 to find association rules and frequent itemsets with the Apriori algorithm.",
      image: "https://ideogram.ai/assets/image/lossless/response/O3em_UvJT6K9SuEfDlwRJA",
      technologies: ["Apriori", "Association Rules", "Data Mining", "Pandas", "Matplotlib", "Jupyter Notebook"],
      repoLink: "https://github.com/sahkanu34/Market_Basket_Analysis",
      category: "AI/ML Models",
    },
    {
      id: 1,
      title: "HealthGuide Assistant AI",
      description: "An AI-powered health assistant built using AWS Bedrock's Party Rock, deployed on an AWS server to provide real-time health guidance and support.",
      image: "https://ideogram.ai/assets/image/lossless/response/RAHoEuJpTf2A7oZ89fundA", // Placeholder AWS Bedrock logo, replace with actual if available
      technologies: ["AWS Bedrock", "Party Rock", "AI", "AWS Server", "Cloud Deployment"],
      LiveDemo: "https://partyrock.aws/u/sahkanu34/KiVXHJHU0/HealthGuide-AI",
      category: "AI/ML Models",
    },
    {
      id: 2,
      title: "NeuroScan AI - Deep Learning",
      description: "A deep learning model using CNN to detect brain tumors from MRI scans, integrated into a Streamlit web app.",
      image: "https://github.com/sahkanu34/new_react_portfolio/blob/main/images/brain.jpeg?raw=true",
      technologies: ["CNN","MobileNetV2", "TensorFlow", "Keras", "Deep Learning", "Streamlit","Docker", "Latest"],
      LiveDemo: "https://braintumourdetectionsystem-34.streamlit.app/",
      repoLink: "https://github.com/sahkanu34/Brain_tumour_detection_system",
      category: "AI/ML Models",
    },
    {
      id: 3,
      title: "Cancer Prediction App - Classification",
      description: "Machine learning app predicting cancer likelihood using MLflow tracking and CI/CD deployment.",
      image: "https://github.com/sahkanu34/new_react_portfolio/blob/main/images/cancer.jpeg?raw=true",
      technologies: ["Classification", "scikit-learn", "MLflow", "Docker", "Streamlit","Pandas","Plotly"],
      LiveDemo: "https://cancerpredictionapp-34.streamlit.app",
      repoLink: "https://github.com/sahkanu34/cancer_prediction_app",
      category: "AI/ML Models",
    },
    {
      id: 4,
      title: "Blood Bank Management System (Raktasetu)",
      description: "A Django-based app for managing blood donor and request interactions with admin control panel.",
      image: "https://ideogram.ai/assets/image/lossless/response/wuFPZptxSpygK8S4jcd1rw",
      technologies: ["CI/CD","Django", "MySQL", "Bootstrap", "PIL","Docker"],
      repoLink: "https://github.com/sahkanu34/Raktasetu",
      category: "Applications",
    },
    {
      id: 5,
      title: "Salary Prediction App - Regression",
      description: "A regression-based model to predict salaries based on experience with a Flask-based web interface.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      technologies: ["Regression", "scikit-learn", "Streamlit", "Docker", "Pandas","Plotly"],
      LiveDemo: "https://salarypredictionapp34.streamlit.app/",
      repoLink: "https://github.com/sahkanu34/salary_prediction_app",
      category: "AI/ML Models",
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter(project => project.category.trim() === activeCategory.trim());

  return (
    <section id="projects" className="py-20 px-4 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <p className="text-teal-600 dark:text-teal-400 font-medium tracking-wide">MY WORK</p>
          <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4">
            A showcase of machine learning applications, AI models, and backend systems built to solve real-world problems.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm transition-colors duration-300 ${
                activeCategory === category 
                  ? 'bg-teal-600 dark:bg-teal-500 text-white' 
                  : 'bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group flex flex-col h-full"
            >
              <div className="flex flex-col h-full bg-slate-50 dark:bg-slate-700 rounded-xl overflow-hidden shadow-sm transition-all duration-300 group-hover:shadow-md group-hover:-translate-y-1">
                <div className="h-56 overflow-hidden flex-shrink-0">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <div className="text-xs font-medium text-teal-600 dark:text-teal-400 mb-2">
                    {project.category}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-2 py-1 bg-slate-200 dark:bg-slate-600 text-slate-700 dark:text-slate-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3 mt-auto">
                    {project.LiveDemo && (
                      <a 
                        href={project.LiveDemo} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
                      >
                        Live Demo <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-slate-600 dark:text-slate-400 hover:text-slate-800 dark:hover:text-slate-200 font-medium"
                      >
                        Code <Github size={14} className="ml-1" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com/sahkanu34"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-teal-600 dark:text-teal-400 hover:text-teal-700 dark:hover:text-teal-300 font-medium"
          >
            View All Projects <ArrowRight size={16} className="ml-1" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
