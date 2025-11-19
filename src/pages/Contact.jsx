import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 text-gray-800">
      {/* 3D Background Elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <div className="absolute top-20 left-20 w-64 h-64 bg-blue-200 rounded-full filter blur-3xl opacity-40 animate-float1"></div>
        <div className="absolute bottom-20 right-32 w-72 h-72 bg-purple-200 rounded-full filter blur-3xl opacity-40 animate-float2"></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-pink-200 rounded-full filter blur-3xl opacity-40 animate-float3"></div>
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-10 bg-grid-pattern-light"></div>
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          {/* <h1 className="text-6xl md:text-8xl font-bold text-white opacity-70 mb-4">CONTACT</h1> */}
          <h2 className="text-3xl md:text-4xl font-bold -mt-16 text-blue-600">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white hover:border-blue-400 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <FiMapPin className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Location</h4>
                    <p className="text-gray-600">Shivajinagar Pune, INDIA</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <FiPhone className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Phone</h4>
                    <a href="tel:+918830670545" className="text-blue-600 hover:underline">+91-8830670545</a><br></br>
                     <a href="tel:+918830670545" className="text-blue-600 hover:underline">+91-9665294120</a>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-blue-500 p-3 rounded-full mr-4">
                    <FiMail className="text-white text-xl" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Email</h4>
                    <a href="mailto:dipasaptal@gmail.com" className="text-blue-600 hover:underline">dipasaptal@gmail.com</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white hover:border-blue-400 transition-all duration-500">
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Follow Me</h3>
              <div className="flex space-x-4">
                <a href="https://www.linkedin.com/in/dipa-saptal-86ba301a6" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-blue-600 p-3 rounded-full transition-all duration-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://github.com/Dipasaptal" target="_blank" rel="noopener noreferrer" className="bg-gray-100 hover:bg-gray-800 p-3 rounded-full transition-all duration-300 hover:text-white">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="bg-white bg-opacity-80 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-white hover:border-blue-400 transition-all duration-500"
          >
            <h3 className="text-2xl font-bold mb-6 text-gray-800">Send Me a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Your Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Your Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Your Message</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-white border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800"
                  required
                ></textarea>
              </div>
              
              <button
                type="submit"
                className="flex items-center justify-center w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <FiSend className="mr-2" />
                Send Message
              </button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* Add to your global styles */}
      <style jsx global>{`
        .bg-grid-pattern-light {
          background-image: 
            linear-gradient(to right, rgba(0,0,0,0.05) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(0,0,0,0.05) 1px, transparent 1px);
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

export default Contact;