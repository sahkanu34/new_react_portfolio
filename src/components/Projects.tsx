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
      title: "Yolov8 Object Detection for Brain Tumors",
      description: "Object detection system using Yolov8 to identify brain tumors in MRI images with real-time detection capabilities and visualization interface.",
      image: "https://ideogram.ai/assets/progressive-image/balanced/response/FZtNandBRjeifLWIn-r-fA",
      technologies: ["YOLOv8", "Ultralytics", "Object Detection", "PyTorch", "OpenCV", "Medical Imaging", "Streamlit"],
      // LiveDemo: "https://yolov8braintumor.streamlit.app/",
      repoLink: "https://github.com/sahkanu34/yolov8_object_detection",
      category: "AI/ML Models",
    },
    {
      id: 1,
      title: "Market Basket Analysis - Unsupervised Learning",
      description: "Analysis of Walmart data to discover association rules and frequent itemsets using the Apriori algorithm.",
      image: "https://ideogram.ai/assets/image/lossless/response/O3em_UvJT6K9SuEfDlwRJA",
      technologies: ["Apriori", "Association Rules", "Data Mining", "Pandas", "Matplotlib", "Jupyter Notebook"],
      repoLink: "https://github.com/sahkanu34/Market_Basket_Analysis",
      category: "AI/ML Models",
    },
    {
      id: 2,
      title: "HealthGuide Assistant AI",
      description: "AI health assistant using AWS Bedrock's Party Rock for real-time health guidance and support.",
      image: "https://ideogram.ai/assets/image/lossless/response/RAHoEuJpTf2A7oZ89fundA",
      technologies: ["AWS Bedrock", "Party Rock", "AI", "AWS Server", "Cloud Deployment"],
      LiveDemo: "https://partyrock.aws/u/sahkanu34/KiVXHJHU0/HealthGuide-AI",
      category: "AI/ML Models",
    },
    {
      id: 3,
      title: "NeuroScan AI - Deep Learning",
      description: "CNN model detecting brain tumors from MRI scans with Streamlit web app integration.",
      image: "https://github.com/sahkanu34/new_react_portfolio/blob/main/images/brain.jpeg?raw=true",
      technologies: ["CNN","MobileNetV2", "TensorFlow", "Keras", "Deep Learning", "Streamlit","Docker", "Latest"],
      LiveDemo: "https://brain-tumour-detection-wvdz.onrender.com",
      repoLink: "https://github.com/sahkanu34/Brain_tumour_detection_system",
      category: "AI/ML Models",
    },
    {
      id: 4,
      title: "Cancer Prediction App - Classification",
      description: "ML app for cancer prediction with MLflow tracking and CI/CD deployment.",
      image: "https://github.com/sahkanu34/new_react_portfolio/blob/main/images/cancer.jpeg?raw=true",
      technologies: ["Classification", "scikit-learn", "MLflow", "Docker", "Streamlit","Pandas","Plotly"],
      LiveDemo: "https://cancerpredictionapp-34.streamlit.app",
      repoLink: "https://github.com/sahkanu34/cancer_prediction_app",
      category: "AI/ML Models",
    },
    {
      id: 5,
      title: "Blood Bank Management System (Raktasetu)",
      description: "Django-based blood donation management system with admin panel for donor-request coordination.",
      image: "https://ideogram.ai/assets/image/lossless/response/wuFPZptxSpygK8S4jcd1rw",
      technologies: ["CI/CD","Django", "MySQL", "Bootstrap", "PIL","Docker"],
      repoLink: "https://github.com/sahkanu34/Raktasetu",
      category: "Applications",
    },
    {
      id: 6,
      title: "Salary Prediction App - Regression",
      description: "Experience-based salary prediction model with interactive web interface.",
      image: "https://images.pexels.com/photos/3183197/pexels-photo-3183197.jpeg",
      technologies: ["Regression", "scikit-learn", "Streamlit", "Docker", "Pandas","Plotly"],
      LiveDemo: "https://salarypredictionapp34.streamlit.app/",
      repoLink: "https://github.com/sahkanu34/salary_prediction_app",
      category: "AI/ML Models",
    },
  ];

  const filteredProjects = activeCategory === "All"
    ? projects
    : projects.filter((project) => project.category.trim() === activeCategory.trim());

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
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? 'bg-gradient-to-r from-teal-600 to-blue-600 dark:from-teal-500 dark:to-blue-500 text-white shadow-lg shadow-teal-500/50 dark:shadow-teal-500/30 scale-105' 
                  : 'bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500'
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
              <div className="flex flex-col h-full bg-white/80 dark:bg-slate-800/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-slate-200/50 dark:border-slate-700/50 hover:shadow-2xl hover:border-teal-500/50 dark:hover:border-teal-500/50 transition-all duration-300 hover:-translate-y-2">
                <div className="relative h-56 overflow-hidden flex-shrink-0">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-3 right-3 z-20">
                    <span className="px-3 py-1 bg-white/90 dark:bg-slate-800/90 backdrop-blur-sm text-xs font-semibold text-teal-600 dark:text-teal-400 rounded-full shadow-lg">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="flex flex-col flex-1 p-6">
                  <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-slate-800 to-slate-600 dark:from-white dark:to-slate-300 bg-clip-text text-transparent group-hover:from-teal-600 group-hover:to-blue-600 dark:group-hover:from-teal-400 dark:group-hover:to-blue-400 transition-all">{project.title}</h3>
                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-4 flex-1 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-5">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index} 
                        className="px-3 py-1 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-700 dark:to-slate-600 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg border border-slate-200 dark:border-slate-600"
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
                        className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-teal-600 to-blue-600 hover:from-teal-700 hover:to-blue-700 text-white text-sm font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        Live Demo <ExternalLink size={14} className="ml-1" />
                      </a>
                    )}
                    {project.repoLink && (
                      <a 
                        href={project.repoLink} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-slate-100 dark:bg-slate-700 hover:bg-slate-200 dark:hover:bg-slate-600 text-slate-700 dark:text-slate-300 text-sm font-semibold rounded-lg border border-slate-200 dark:border-slate-600 transition-all duration-300"
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
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-slate-100 to-slate-50 dark:from-slate-800 dark:to-slate-700 hover:from-teal-50 hover:to-blue-50 dark:hover:from-teal-900/30 dark:hover:to-blue-900/30 text-teal-600 dark:text-teal-400 font-semibold rounded-xl border border-slate-200 dark:border-slate-700 hover:border-teal-500 dark:hover:border-teal-500 shadow-md hover:shadow-lg transition-all duration-300"
          >
            View All Projects <ArrowRight size={16} className="ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
