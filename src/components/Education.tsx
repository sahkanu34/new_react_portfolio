import React, { useEffect, useRef, useState } from 'react';

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
    <>
      <section className="bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6 text-black dark:text-white animate-fade-in">
            Education
          </h1>
          <p className="text-lg text-black animate-fade-in-delay max-w-2xl mx-auto">
            My academic journey has been a blend of rigorous coursework and hands-on projects, equipping me with the skills to tackle complex challenges in the field of artificial intelligence and machine learning.
          </p>
        </div>
      </section>

      <section className="py-20 px-4 bg-white dark:bg-gray-900">
        <div className="max-w-6xl mx-auto">
          <h2 className="mb-16 text-3xl font-bold text-center text-black dark:text-white">
            Education Timeline
          </h2>
          
          <div className="relative">
            {/* Central timeline line */}
            <div className="absolute left-1/2 transform -translate-x-0.5 top-0 bottom-0 w-1 bg-green-200"></div>
            
            {/* Timeline items */}
            <div className="space-y-24">
              {educationData.map((item, index) => {
                // Always align first item to the left
                const isLeft = index === 0 ? true : index % 2 === 0;
                return (
                  <div
                    key={item.id}
                    ref={(el) => (itemRefs.current[index] = el)}
                    data-index={index}
                    className={`relative flex items-center ${
                      isLeft ? 'justify-start' : 'justify-end'
                    }`}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 z-10">
                      <div className={`w-6 h-6 rounded-full border-4 border-white transition-all duration-700 ${
                        visibleItems.includes(index) 
                          ? 'bg-green-200 scale-125 shadow-lg' 
                          : 'bg-gray-200 scale-100'
                      }`}>
                        <div className={`w-full h-full rounded-full transition-all duration-700 ${
                          visibleItems.includes(index) 
                            ? 'animate-pulse bg-green-100' 
                            : ''
                        }`}></div>
                      </div>
                    </div>

                    {/* Content card */}
                    <div className={`w-full max-w-lg transition-all duration-700 transform ${
                      visibleItems.includes(index)
                        ? 'opacity-100 translate-x-0 translate-y-0'
                        : `opacity-0 ${isLeft ? '-translate-x-12' : 'translate-x-12'} translate-y-8`
                    } ${isLeft ? 'pr-16' : 'pl-16'}`}
                    style={{ transitionDelay: `${index * 300}ms` }}
                    >
                      <div className={`group cursor-pointer text-left`}>
                        <div className={`relative bg-white rounded-2xl shadow-xl p-8 border transition-all duration-500 hover:shadow-2xl hover:scale-105 overflow-hidden ${
                          visibleItems.includes(index) 
                            ? 'border-green-100' 
                            : 'border-gray-200'
                        }`}>
                          {/* Gradient overlay */}
                          <div className={`absolute inset-0 bg-green-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                          
                          <div className="relative z-10">
                            {/* Period badge */}
                            <div className={`inline-block mb-4`}>
                              <span className={`text-sm font-bold text-white bg-green-400 px-4 py-2 rounded-full shadow-lg`}>
                                {item.period}
                              </span>
                            </div>
                            
                            {/* Degree */}
                            <h3 className={`text-2xl font-bold text-black mb-3`}>
                              {item.degree}
                            </h3>
                            
                            {/* Institution with image and link */}
                            <div className="flex items-center gap-3 mb-2">
                              <img src={item.image} alt={item.institution} className="w-14 h-14 rounded-full object-cover border border-green-200" />
                              <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-black underline">
                                {item.institution}
                              </a>
                            </div>
                            
                            {/* Location */}
                            <p className="text-black mb-3 flex items-center justify-start">
                              <svg className="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20">
                                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                              </svg>
                              {item.location}
                            </p>
                            
                            {/* GPA */}
                            <p className="text-black mb-6">
                              <span className="font-semibold text-black">GPA:</span> 
                              <span className="ml-2 font-bold text-green-600">{item.gpa}</span>
                            </p>
                            
                            {/* Coursework */}
                            <div>
                              <span className="font-semibold text-black block mb-3">
                                Relevant Coursework:
                              </span>
                              <div className="flex flex-wrap gap-2 justify-start">
                                {item.coursework.map((course, courseIndex) => (
                                  <span
                                    key={courseIndex}
                                    className="text-sm bg-green-50 text-green-800 px-3 py-2 rounded-lg transition-all duration-300 cursor-pointer"
                                    style={{ animationDelay: `${courseIndex * 100}ms` }}
                                  >
                                    {course}
                                  </span>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes fade-in {
          from { 
            opacity: 0; 
            transform: translateY(30px) scale(0.95); 
          }
          to { 
            opacity: 1; 
            transform: translateY(0) scale(1); 
          }
        }
        
        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
        
        .animate-fade-in-delay {
          animation: fade-in 1s ease-out 0.4s both;
        }

        @keyframes pulse {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @media (max-width: 768px) {
          .max-w-6xl .space-y-24 > div {
            justify-content: center !important;
          }
          
          .max-w-6xl .space-y-24 > div > div {
            text-align: center !important;
            padding-left: 2rem !important;
            padding-right: 2rem !important;
          }
          
          .max-w-6xl .space-y-24 > div > div > div > div .flex {
            justify-content: center !important;
          }
        }
      `}</style>
    </>
  );
};

export default Education;
