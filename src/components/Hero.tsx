import React from 'react';
import { ChevronRight } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section 
      id="home"
      className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-800 to-blue-600 text-white overflow-hidden"
    >
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-blue-400"></div>
        <div className="absolute left-40 bottom-20 w-64 h-64 rounded-full bg-blue-300"></div>
        <div className="absolute right-1/4 bottom-1/3 w-48 h-48 rounded-full bg-blue-500"></div>
      </div>
      
      <div className="container mx-auto px-4 md:px-6 py-20 pt-32 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="max-w-2xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in">
              AI-Driven Missing Person Identification System
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-xl">
              Accelerating Public Safety with AI, Geospatial Intelligence, and Ethical Data Integration
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-md font-semibold flex items-center transition-all duration-300">
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 px-6 py-3 rounded-md font-semibold transition-all duration-300">
                Request a Demo
              </button>
            </div>
          </div>
          
          <div className="hidden lg:block relative">
            <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-5 shadow-2xl max-w-lg mx-auto transform hover:scale-105 transition-transform duration-300">
              <div className="aspect-video rounded-lg bg-blue-700/60 backdrop-blur-md overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg" 
                  alt="AI Face Recognition System" 
                  className="w-full h-full object-cover opacity-80 mix-blend-overlay"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
                    <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-6 h-6 border-t-2 border-r-2 border-white animate-spin rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 grid grid-cols-3 gap-2">
                {[1, 2, 3].map((item) => (
                  <div key={item} className="bg-blue-700/30 rounded-md h-24 p-2 flex items-center justify-center">
                    <div className="w-12 h-12 rounded-full bg-white/10"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </section>
  );
};

export default Hero;