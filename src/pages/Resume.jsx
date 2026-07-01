import React from 'react';
import { motion } from 'framer-motion';
import { FiDownload, FiAward, FiBriefcase, FiCode } from 'react-icons/fi';
import resumePdf from '../assets/Mern Full Stack Developer 3 years.pdf';

const Resume = () => {
  

  const education = [
  {
    year: "2023",
    degree: "Bachelor of Technology (B.Tech) – Computer Science & Engineering",
    university: "Shivaji University, Kolhapur",
    details: "Completed B.Tech in Computer Science & Engineering."
  }
];

const experience = [
  {
    year: "May 2023 - Present",
    position: "MERN Stack Developer",
    company: "Humanus Global Private Limited",
    details: "Building scalable web applications using React.js, JavaScript, Node.js, Express.js, MongoDB, Tailwind CSS, Redux Toolkit and REST APIs."
  }
];

const skills = [
  { name: "React.js", level: 95 },
  { name: "JavaScript (ES6+)", level: 95 },
  { name: "Node.js", level: 90 },
  { name: "Express.js", level: 88 },
  { name: "MongoDB", level: 90 },
  { name: "Tailwind CSS", level: 95 },
  { name: "Redux Toolkit", level: 90 },
  { name: "REST APIs", level: 92 },
  { name: "Git & GitHub", level: 90 },
  { name: "AWS & Deployment", level: 80 }
];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gray-900 text-white">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400 rounded-full filter blur-3xl opacity-10 animate-float1"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-purple-500 rounded-full filter blur-3xl opacity-10 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-500 rounded-full filter blur-3xl opacity-10 animate-float3"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-5 bg-grid-pattern"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-6xl md:text-8xl font-bold text-gray-800 opacity-20 mb-4">RESUME</h1>
          <h2 className="text-3xl md:text-4xl font-bold -mt-16 text-yellow-400">My Qualifications</h2>
          <div className="w-24 h-1 bg-yellow-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Download Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex justify-center mb-16"
        >
          <a
  href={resumePdf}
  download="Dipa_Saptal_Resume.pdf" // Desired filename
  className="flex items-center bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-4 px-8 rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105"
>
  <FiDownload className="mr-2" />
  Download Full Resume
</a>

        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500"
          >
            <div className="flex items-center mb-8">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <FiAward className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Education</h3>
            </div>

            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="relative pl-10 pb-8 border-l-2 border-yellow-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400 font-medium">{item.year}</span>
                  <h4 className="text-xl font-semibold mt-1">{item.degree}</h4>
                  <p className="text-gray-400">{item.university}</p>
                  <p className="text-gray-300 mt-2">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Experience */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500"
          >
            <div className="flex items-center mb-8">
              <div className="bg-yellow-500 p-3 rounded-full mr-4">
                <FiBriefcase className="text-white text-xl" />
              </div>
              <h3 className="text-2xl font-bold text-white">Experience</h3>
            </div>

            <div className="space-y-8">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-10 pb-8 border-l-2 border-yellow-500">
                  <div className="absolute -left-2 top-0 w-4 h-4 bg-yellow-500 rounded-full"></div>
                  <span className="text-yellow-400 font-medium">{item.year}</span>
                  <h4 className="text-xl font-semibold mt-1">{item.position}</h4>
                  <p className="text-gray-400">{item.company}</p>
                  <p className="text-gray-300 mt-2">{item.details}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl shadow-2xl border border-gray-700 hover:border-yellow-500 transition-all duration-500"
        >
          <div className="flex items-center mb-8">
            <div className="bg-yellow-500 p-3 rounded-full mr-4">
              <FiCode className="text-white text-xl" />
            </div>
            <h3 className="text-2xl font-bold text-white">My Skills</h3>
            
          </div>
          <p className="text-gray-400 mb-8">
  MERN Stack Developer with 3+ years of experience in React.js, Node.js,
  Express.js, MongoDB, Tailwind CSS, API Integration, Redux Toolkit,
  Authentication, Cloud Deployment, and Performance Optimization.
</p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((skill, index) => (
              <div key={index} className="mb-4">
                <div className="flex justify-between mb-2">
                  <span className="font-medium text-gray-300">{skill.name}</span>
                  <span className="text-yellow-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2.5">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-yellow-600 h-2.5 rounded-full" 
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Add to your global styles */}
      <style jsx global>{`
        .bg-grid-pattern {
          background-image: 
            linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
          background-size: 40px 40px;
        }
        @keyframes float1 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(20px, 20px) rotate(5deg); }
        }
        @keyframes float2 {
          0%, 100% { transform: translate(0, 0) rotate(0deg); }
          50% { transform: translate(-20px, -20px) rotate(-5deg); }
        }
        @keyframes float3 {
          0%, 100% { transform: translate(0, 0); }
          50% { transform: translate(10px, -10px); }
        }
        .animate-float1 { animation: float1 8s ease-in-out infinite; }
        .animate-float2 { animation: float2 10s ease-in-out infinite; }
        .animate-float3 { animation: float3 12s ease-in-out infinite; }
      `}</style>
    </div>
  );
};

export default Resume;
