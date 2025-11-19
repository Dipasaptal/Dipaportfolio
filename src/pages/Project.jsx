import React from 'react';

const Project = () => {
  const projects = [
    {
      title: "Nature Dialy",
      description: 'A mobile app/marketplace for ordering daily essentials with fast delivery. Users can browse product categories, view details, place orders, and track their purchases.',
      tech: "JavaScript, React Native, Expo",
      tools: "Visual Studio Code",
      img: "/images/nature.jpeg",
      link: "https://play.google.com/store/apps/details?id=com.masterzac.myapp",
    },
    {
      title: "Movie App",
      description: 'Built using React.js and Axios with TheMovieDB API. Features: Top-rated movies, upcoming releases, search, and movie detail pages.',
      tech: "React.js, Axios, TheMovieDB API",
      tools: "Visual Studio Code",
      img: "/images/movie.png",
      link: "https://movie-app-alpha-sand.vercel.app/",
    },
    {
      title: "Pralhad Flours",
      description: 'Developed a modular React.js dashboard interface for admin, category, and product management using Tailwind CSS with responsive popup forms.',
      tech: "React.js, Tailwind CSS, Framer Motion, React Native with Expo app, Material UI",
      tools: "Visual Studio Code",
      img: "/images/flours.png",
      link: "https://pralhadflours.com/",
    },
    {
      title: "Arthagam",
      description: 'Cooperative finance platform offering Pigmi, Fixed Deposit, and SHG modules. Implemented responsive UI with React.js and integrated REST APIs.',
      tech: "React.js, Tailwind CSS, REST API",
      tools: "Visual Studio Code",
      img: "/images/arthagam.png",
      link: "https://admin.arthagam.com/",
    },
    {
      title: "MeghaIndustrie",
      description: 'Responsive manufacturing business website showcasing services, products, and online quote request forms with clean UI.',
      tech: "React.js, JavaScript, Tailwind CSS, REST API, Material UI, ",
      tools: "Visual Studio Code",
      img: "/images/meghaindustrie.png",
      link: "https://megha-industries-beta.vercel.app/",
    },
    {
      title: "Voice AI Recorder",
      description: 'AI-powered voice recording application with speech-to-text functionality and natural language processing capabilities.',
      tech: "React.js, Web Speech API, AI Integration",
      tools: "Visual Studio Code",
      img: "/images/voice-ai.png",
      link: "https://aichat-seven-xi.vercel.app/",
    }
  ];

  return (
    <div className="bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white w-full min-h-screen py-12">
      <h1 className="text-center text-[7vw] font-extrabold opacity-20">Projects</h1>
      <h2 className="text-center text-3xl font-bold mt-[-3rem] mb-4">Projects</h2>
      <p className="text-center max-w-3xl mx-auto">
        Analytical, and self-driven Programmer building user-facing applications. Efficient and knowledgeable coder with
        skills in HTML, CSS, JavaScript, Bootstrap, React.js, and modern web technologies.
      </p>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-8 mt-12">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-xl overflow-hidden shadow-2xl hover:shadow-purple-500/25 hover:scale-[1.02] hover:border-purple-400/50 transition-all duration-300 h-full flex flex-col"
          >
            <img 
              src={proj.img} 
              alt={proj.title} 
              className="w-full h-48 object-cover"
              onError={(e) => {
                e.target.src = '/images/project-placeholder.png';
              }}
            />
            <div className="p-6 flex-grow flex flex-col">
              <h5 className="text-xl font-bold mb-3 text-white">{proj.title}</h5>
              <p className="text-gray-300 mb-4 flex-grow">{proj.description}</p>
              <div className="mb-4">
                <p className="text-sm text-gray-300 mb-1">
                  <span className="font-bold text-purple-300">Technologies:</span> {proj.tech}
                </p>
                {proj.tools && (
                  <p className="text-sm text-gray-300">
                    <span className="font-bold text-purple-300">Tools:</span> {proj.tools}
                  </p>
                )}
              </div>
              <a
                href={proj.link}
                className="mt-auto bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2 rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/50 font-medium text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;