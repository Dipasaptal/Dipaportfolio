import React, { useState, useEffect } from 'react';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const frontendSkills = [
    { name: "HTML5", percentage: 95 },
    { name: "CSS3", percentage: 90 },
    { name: "JavaScript", percentage: 85 },
    { name: "React.js", percentage: 88 },
    { name: "Bootstrap", percentage: 92 },
    { name: "jQuery", percentage: 80 }
  ];

  const mobileSkills = [
    { name: "React Native", percentage: 85 },
    { name: "Expo", percentage: 80 },
    { name: "JSON", percentage: 90 },
    { name: "API Integration", percentage: 85 }
  ];

  const backendSkills = [
    { name: "Node.js", percentage: 70 }
  ];

  const SkillBar = ({ skill, percentage, delay = 0 }) => (
    <div className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <span className="text-gray-700 font-medium">{skill}</span>
        <span className="text-yellow-600 font-bold">{percentage}%</span>
      </div>
      <div className="bg-gray-200 rounded-full h-3 shadow-inner">
        <div
          className="bg-gradient-to-r from-yellow-400 to-yellow-600 h-3 rounded-full transition-all duration-1000 ease-out shadow-lg"
          style={{ 
            width: isVisible ? `${percentage}%` : '0%',
            transitionDelay: `${delay}ms`
          }}
        ></div>
      </div>
    </div>
  );

  return (
    <div className="bg-gradient-to-br from-slate-100 via-blue-50 to-purple-100 min-h-screen">
      {/* 3D Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-yellow-400 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 right-32 w-40 h-40 bg-blue-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute bottom-20 left-1/3 w-36 h-36 bg-purple-400 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto py-16 px-8">
        
        {/* Photo Section - Center */}
        <div className="text-center mb-16">
          <div className={`inline-block transform transition-all duration-1000 ${isVisible ? 'scale-100 opacity-100' : 'scale-75 opacity-0'}`}>
            <div className="relative">
              {/* 3D Ring Effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 p-2 animate-spin-slow">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-100 to-blue-50"></div>
              </div>
              
              {/* Main Photo */}
              <div className="relative z-10 p-3">
                <img
                  src="/images/dipas.jpeg"
                  alt="Dipa"
                  className="w-64 h-64 object-cover rounded-full shadow-2xl border-4 border-white hover:scale-110 transition-transform duration-500 cursor-pointer"
                  style={{
                    filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.3))'
                  }}
                />
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce" style={{animationDelay: '0.5s'}}></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
            </div>
          </div>
        </div>

        {/* About Me & Experience Row */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-16 transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* About Me */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-yellow-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 12a2 2 0 100-4 2 2 0 000 4z"/>
                  <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">About Me</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
              Hello! I'm Dipa, a passionate Web and Mobile Developer with a B.Tech in Computer Science Engineering from Dr. D.Y. Patil Pratishthan's College of Engineering, Kolhapur. I am currently working as a React.js Developer at Z-Plus Cyber Secure Technology, Pune, where I have gained 1 year of professional experience building responsive web applications and Android apps using React.js and React Native.
Previously, I completed a 5-month internship as a Front-End Developer at SevenMentor Pvt. Ltd., Pune, where I built a strong foundation in front-end development.
I have hands-on experience with UI development, API integration, state management, and performance optimization, and I’m confident in taking on new challenges while continuously improving my skills.
            </p>
          </div>

          {/* Experience */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v6a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2h2zm4-3a1 1 0 00-1 1v1h2V4a1 1 0 00-1-1z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Experience</h2>
            </div>
            <p className="text-gray-600 leading-relaxed text-lg">
             Currently working as a React.js Developer at 
  Z-Plus Cyber Secure Technology, Pune (Oct 2024 – Present), where I have gained 1 year 
  of professional experience in building responsive web applications and Android apps using 
  React.js and React Native. 
  My work involves improving site performance, implementing reusable components, and integrating APIs 
  to deliver seamless user experiences.
  Previously, I worked as a Front-End Development Intern
  at SevenMentor Pvt. Ltd., Pune (2024), where I built a strong foundation in modern web technologies 
  and contributed to developing user-friendly and scalable solutions while collaborating with 
  cross-functional teams.
            </p>
          </div>
        </div>

        {/* Personal Info & Quick Facts Row */}
        <div className={`grid lg:grid-cols-2 gap-8 mb-16 transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          
          {/* Personal Info */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Personal Info</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">Name:</span>
                <span className="text-gray-600">Dipa Saptal</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">Roles:</span>
                <span className="text-gray-600">Front-end Developer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">Address:</span>
                <span className="text-gray-600">Shivajinagar Pune</span>
              </div>
            </div>
          </div>

          {/* Quick Facts */}
          <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20">
            <div className="flex items-center mb-6">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mr-4 shadow-lg">
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">Quick Facts</h2>
            </div>
            <div className="space-y-4">
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">Profile:</span>
                <span className="text-gray-600">Front-End Developer</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">Domain:</span>
                <span className="text-gray-600">Front-End Web Development</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">Education:</span>
                <span className="text-gray-600">BTech Computer Science Engineering</span>
              </div>
              <div className="flex items-center p-3 bg-gray-50 rounded-xl">
                <span className="font-semibold text-gray-700 w-32">IDE:</span>
                <span className="text-gray-600">Visual Studio Code</span>
              </div>
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div className={`transform transition-all duration-1000 delay-700 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold bg-gradient-to-r from-gray-800 via-gray-600 to-gray-800 bg-clip-text text-transparent mb-4">
              My Skills
            </h2>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              I specialize in modern web technologies and mobile app development, with expertise in both frontend and backend technologies.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Frontend Web Development */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-blue-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-blue-400 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Frontend Web Development</h3>
                <p className="text-gray-600">Creating responsive and interactive user interfaces</p>
              </div>
              <div className="space-y-4">
                {frontendSkills.map((skill, idx) => (
                  <SkillBar key={idx} skill={skill.name} percentage={skill.percentage} delay={idx * 100} />
                ))}
              </div>
            </div>

            {/* Mobile App Development */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-green-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-green-400 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 011 1v8a1 1 0 01-1 1H5a1 1 0 01-1-1V7zM9 11a1 1 0 100 2h2a1 1 0 100-2H9z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Mobile App Development</h3>
                <p className="text-gray-600">Building cross-platform mobile applications</p>
              </div>
              <div className="space-y-4">
                {mobileSkills.map((skill, idx) => (
                  <SkillBar key={idx} skill={skill.name} percentage={skill.percentage} delay={idx * 100 + 600} />
                ))}
              </div>
            </div>

            {/* Backend Development */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-500 hover:-translate-y-2 border border-white/20 hover:border-purple-200">
              <div className="text-center mb-8">
                <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-3">Backend Development</h3>
                <p className="text-gray-600">Basic skills in server-side technologies</p>
              </div>
              <div className="space-y-4">
                {backendSkills.map((skill, idx) => (
                  <SkillBar key={idx} skill={skill.name} percentage={skill.percentage} delay={idx * 100 + 1200} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </div>
  );
};

export default About;