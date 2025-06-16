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

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-800">
      <div className="container mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-4 mb-12 items-center text-center">
          <span className="text-base font-medium text-teal-600 dark:text-teal-400">EDUCATION</span>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-800 dark:text-slate-200">
            Academic Journey
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl mt-4 text-base">
            My educational background has provided me with a strong foundation in both technical and analytical skills.
          </p>
        </div>

        <div className="space-y-8">
          {educationData.map((item, index) => (
            <motion.div
              key={item.id}
              ref={(el) => (itemRefs.current[index] = el)}
              data-index={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="relative"
            >
              <div className="bg-white dark:bg-slate-800 rounded-xl shadow-lg p-6 md:p-8 border border-slate-100 dark:border-slate-700">
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <img 
                      src={item.image} 
                      alt={item.institution} 
                      className="w-28 h-28 rounded-xl object-cover border-2 border-teal-200 dark:border-teal-800"
                    />
                  </div>

                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                      <div>
                        <h3 className="text-2xl font-bold text-slate-800 dark:text-slate-200">
                          {item.degree}
                        </h3>
                        <a 
                          href={item.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-teal-600 dark:text-teal-400 hover:underline text-base"
                        >
                          {item.institution}
                        </a>
                      </div>
                      <div className="text-base text-slate-600 dark:text-slate-400">
                        {item.period}
                      </div>
                    </div>

                    <div className="flex items-center gap-4 mb-4">
                      <div className="text-base text-slate-600 dark:text-slate-400">
                        {item.location}
                      </div>
                      <div className="text-base font-medium text-teal-600 dark:text-teal-400">
                        Grade: {item.gpa}
                      </div>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-slate-700 dark:text-slate-300 mb-3">
                        Key Courses
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {item.coursework.map((course, courseIndex) => (
                          <span
                            key={courseIndex}
                            className="bg-teal-50 dark:bg-teal-900/30 text-teal-700 dark:text-teal-300 px-4 py-2 rounded-full text-base"
                          >
                            {course}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
