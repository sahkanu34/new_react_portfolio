import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface EducationItem {
  id: number;
  degree: string;
  institution: string;
  location: string;
  gpa: string;
  period: string;
  coursework: string[];
  image: string;
  link: string;
}

const Education: React.FC = () => {
  const [visibleItems, setVisibleItems] = useState<number[]>([]);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const educationData: EducationItem[] = [
    {
      id: 1,
      degree: "Bachelor in Computer Application",
      institution: "National Infotech College, Tribhuvan University",
      location: "Birgunj, Nepal",
      gpa: "3.24/4.0 *Current",
      period: "2021 - Present",
      coursework: ["Database Management System", "Software Engineering", "Data Structure & Algorithms"],
      image: "https://nationalinfotechcollege.edu.np/wp-content/uploads/2024/02/new-ni-logo.jpg",
      link: "https://nationalinfotechcollege.edu.np/"
    },
    {
      id: 2,
      degree: "Grade XII",
      institution: "Birgunj Public College",
      location: "Birgunj, Nepal",
      gpa: "3.20/4.0",
      period: "2019 - 2021",
      coursework: ["Economics", "Accounts", "Business Studies", "Mathematics"],
      image: "https://bpcbirgunj.edu.np/wp-content/uploads/2020/07/WhatsApp-Image-2020-06-24-at-1.18.44-PM.jpeg",
      link: "https://bpcbirgunj.edu.np/"
    }
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

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white">
            Education
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            My academic journey has been a blend of rigorous coursework and hands-on projects, equipping me with the skills to tackle complex challenges in the field of artificial intelligence and machine learning.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              className="relative"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 transform transition-all duration-500 hover:scale-105 hover:shadow-2xl">
                <div className="absolute -top-4 -right-4">
                  <span className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                    {item.period}
                  </span>
                </div>

                <div className="flex items-center gap-4 mb-6">
                  <div className="relative">
                    <img 
                      src={item.image} 
                      alt={item.institution} 
                      className="w-20 h-20 rounded-full object-cover border-4 border-green-200 shadow-lg"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-green-500 text-white text-xs px-2 py-1 rounded-full">
                      {item.gpa}
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
                      {item.degree}
                    </h3>
                    <a 
                      href={item.link} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-green-600 dark:text-green-400 hover:underline"
                    >
                      {item.institution}
                    </a>
                  </div>
                </div>

                <div className="mb-6">
                  <div className="flex items-center text-gray-600 dark:text-gray-300 mb-4">
                    <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                    </svg>
                    {item.location}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-white mb-3">
                    Relevant Coursework:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {item.coursework.map((course, courseIndex) => (
                      <motion.span
                        key={courseIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: courseIndex * 0.1 }}
                        className="bg-green-50 dark:bg-green-900 text-green-800 dark:text-green-200 px-3 py-2 rounded-lg text-sm"
                      >
                        {course}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Education;
