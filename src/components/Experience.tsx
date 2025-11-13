import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface ExperienceItem {
  id: number;
  position: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  achievements: string[];
  image: string;
  link: string;
}

const Experience: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const experienceData: ExperienceItem[] = [
    {
        id: 1,
        position: "Research Intern (Medical Image Analysis & Machine Learning)",
        company: "NAAMII (Nepal Applied Mathematics and Informatics Institute for Research)",
        location: "Remote",
        period: "Aug 2025 - Present",
        description: "I work as a Research Intern at NAAMII, focusing on Medical Image Analysis and Machine Learning Engineering. My work involves developing and applying deep learning models to solve real-world healthcare challenges.",
        technologies: ["Python", "TensorFlow", "PyTorch", "OpenCV", "Scikit-learn", "Medical Imaging","ITK-Snap","3D Slicer"],
        achievements: [
          "Developed and optimized deep learning models for medical image segmentation and classification",
          "Collaborated with a multidisciplinary team of researchers and clinicians",
          "Contributed to research publications and open-source projects in medical AI"
        ],
        image: "https://www.naamii.org.np/wp-content/uploads/2023/02/naamii_logo.svg",
        link: "https://naamii.org.np/"
      },
    // {
    //   id: 2,
    //   position: "AI Research Assistant",
    //   company: "AI Research Lab",
    //   location: "Remote",
    //   period: "2022 - 2023",
    //   description: "Conducted research in artificial intelligence and machine learning applications.",
    //   technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn", "OpenCV"],
    //   achievements: [
    //     "Developed computer vision models for medical image analysis",
    //     "Published research findings in peer-reviewed journals",
    //     "Mentored junior researchers and interns"
    //   ],
    //   image: "/images/bot_ai.jpeg",
    //   link: "#"
    // },
    // {
    //   id: 3,
    //   position: "DevOps Engineer",
    //   company: "Tech Solutions Inc.",
    //   location: "Hybrid",
    //   period: "2021 - 2022",
    //   description: "Managed cloud infrastructure and deployment pipelines for multiple projects.",
    //   technologies: ["Docker", "Kubernetes", "Jenkins", "Terraform", "AWS"],
    //   achievements: [
    //     "Reduced infrastructure costs by 30% through optimization",
    //     "Implemented automated monitoring and alerting systems",
    //     "Streamlined deployment processes across development teams"
    //   ],
    //   image: "/images/docker.png",
    //   link: "#"
    // }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const index = parseInt(entry.target.getAttribute('data-index') || '0');
          if (entry.isIntersecting) {
            setVisibleItems(prev => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-slate-50 to-white dark:from-slate-800 dark:to-slate-900">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <span className="text-base font-medium text-teal-600 dark:text-teal-400">EXPERIENCE</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
            Professional Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-base">
            My professional experience spans across various domains, from software engineering to AI research.
          </p>
        </div>

        <div className="space-y-8">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative"
            >
              <motion.div
                className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border border-slate-100 dark:border-slate-700 hover:shadow-xl transition-all duration-300 cursor-pointer"
                onHoverStart={() => setHoveredItem(item.id)}
                onHoverEnd={() => setHoveredItem(null)}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Company Logo */}
                  <motion.div 
                    className="flex-shrink-0"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="relative">
                      <img 
                        src={item.image} 
                        alt={item.company} 
                        className="w-32 h-32 rounded-xl object-cover border-2 border-teal-200 dark:border-teal-800 shadow-md"
                      />
                      <motion.div
                        className="absolute inset-0 bg-teal-500/20 rounded-xl"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: hoveredItem === item.id ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>
                  </motion.div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200 mb-2">
                          {item.position}
                        </h3>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline text-lg font-semibold"
                        >
                          {item.company}
                        </a>
                      </div>
                      <div className="text-base text-slate-600 dark:text-slate-400 bg-slate-100 dark:bg-slate-700 px-4 py-2 rounded-full">
                        {item.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-base text-slate-600 dark:text-slate-400">
                        📍 {item.location}
                      </div>
                    </div>

                    <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.technologies.map((tech, techIndex) => (
                          <motion.span
                            key={techIndex}
                            className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.2 }}
                          >
                            {tech}
                          </motion.span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {item.achievements.map((achievement, achievementIndex) => (
                          <motion.li
                            key={achievementIndex}
                            className="flex items-start gap-3 text-slate-600 dark:text-slate-400"
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: achievementIndex * 0.1 }}
                          >
                            <span className="text-teal-500 mt-1">•</span>
                            <span>{achievement}</span>
                          </motion.li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
