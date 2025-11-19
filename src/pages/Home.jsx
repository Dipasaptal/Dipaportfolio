import React from 'react'; 
import { Button } from '@mui/material';
import Navbar from '../components/Navbar';
import resumePdf from '../assets/dipa rsm.pdf';
import HomeSections from './HomeSections';

const Home = () => {
  return (
    <div className="bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 w-full">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section with full screen background */}
      <div className="bg-black w-full" id="home">
        <section className="relative flex flex-col md:flex-row justify-between items-center max-w-full min-h-screen md:h-[85vh] overflow-hidden pt-20 md:pt-0">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden z-0">
            <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full filter blur-3xl opacity-20 animate-float1"></div>
            <div className="absolute bottom-0 right-0 w-72 h-72 bg-purple-400 rounded-full filter blur-3xl opacity-20 animate-float2"></div>
            <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-blue-400 rounded-full filter blur-3xl opacity-20 animate-float3"></div>
          </div>

          {/* Left Content */}
          <div className="md:w-1/2 w-full text-center md:text-left z-10 px-6 py-8 flex flex-col justify-center items-center md:items-start h-full space-y-6">
            <p className="text-white text-sm uppercase tracking-wider transform transition-all hover:scale-105">
              WE DESIGN & BUILD BRANDS
            </p>
            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-white transform transition-all hover:translate-x-2">
              Hi, I am <span className="text-yellow-400 animate-pulse">Dipa</span>
              <div className="pt-8"></div>
              This is my favorite work.
            </h1>

            {/* Professional Info */}
            <div className="space-y-3 transform transition-all hover:translate-x-1">
              <h2 className="text-lg font-semibold text-white">
                Front-End Developer | React.js / React Native Developer | BTech CSE
              </h2>
              <p className="text-gray-300 text-base leading-relaxed max-w-lg">
                Passionate about creating exceptional digital experiences with modern web technologies. 
                Currently working as a React.js Developer at Z-Plus Cyber Secure Technology, Pune.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3 pt-6 justify-center md:justify-start">
              <a
                href="https://www.linkedin.com/in/dipa-saptal-86ba301a6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-yellow-500 hover:bg-yellow-600 text-white px-5 py-2 font-medium transition-all transform hover:scale-105 rounded-lg shadow-lg"
              >
                Hire me
              </a>
              <a
                href={resumePdf}
                download="Dipa_Saptal_Resume.pdf" 
                className="border-2 border-gray-300 text-white hover:border-gray-400 hover:bg-gray-800 px-5 py-2 font-medium transition-all transform hover:scale-105 rounded-lg shadow-lg"
              >
                Download CV
              </a>
              <a
                href="https://www.linkedin.com/in/dipa-saptal-86ba301a6"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 font-medium transition-all transform hover:scale-105 rounded-lg shadow-lg"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/Dipasaptal"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-gray-800 hover:bg-gray-700 text-white px-5 py-2 font-medium transition-all transform hover:scale-105 rounded-lg shadow-lg"
              >
                GitHub
              </a>
            </div>
          </div>

          {/* Right Image - Full height without cropping */}
          <div className="md:w-1/2 w-full flex items-center justify-center">
            <img
              src="/images/dipaaa.jpg"
              alt="Dipa"
              className="h-full w-auto max-w-full object-contain"
              style={{ maxHeight: '100vh' }}
            />

          </div>
        </section>
      </div>

      {/* Custom animations */}
      <style jsx global>{`
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

      {/* Home Sections */}
      <HomeSections />
    </div>
  );
};

export default Home;
