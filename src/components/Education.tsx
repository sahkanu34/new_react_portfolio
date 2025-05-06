import React from 'react';
const Education: React.FC = () => {
  return (
    <>
      <section className="bg-gray-100 dark:bg-gray-800 py-20 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Education</h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            My academic journey has been a blend of rigorous coursework and hands-on projects, equipping me with the skills to tackle complex challenges in the field of artificial intelligence and machine learning.
          </p>
        </div>
      </section>
      <section className="py-20 px-4">
        <h2 className="mb-6 text-2xl font-bold text-center">Education Details</h2>
        <div className="max-w-3xl mx-auto space-y-8">
          <div className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold">Bachelor in Computer Application</h3>
            <p className="text-gray-600">Tribhuvan University, Kathmandu , Nepal</p>
            <p className="text-gray-600">CGPA: 3.24/4.0 *Current</p>
            <p className="mt-2"><span className="font-medium">Relevant Coursework:</span> Database Management System, Software Engineering, Data Structure & Algorithms</p>
          </div>
          {/* <div className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold">Grade XII </h3>
            <p className="text-gray-600">Birgunj Public </p>
            <p className="text-gray-600">GPA: 3.90/4.0</p>
            <p className="mt-2"><span className="font-medium">Relevant Coursework:</span> Advanced Statistical Analysis, Linear Algebra, Mathematical Modeling</p>
          </div> */}
          {/* <div className="border-l-4 border-gray-300 pl-4">
            <h3 className="text-xl font-semibold">BSc in Information Technology</h3>
            <p className="text-gray-600">Massachusetts Institute of Technology</p>
            <p className="text-gray-600">GPA: 3.85/4.0</p>
            <p className="mt-2"><span className="font-medium">Relevant Coursework:</span> Data Structures, Algorithms, Software Engineering</p>
          </div> */}
        </div>
      </section>
    </>
  );
};

export default Education;
