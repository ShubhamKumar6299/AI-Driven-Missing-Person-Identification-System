import React from 'react';

interface TechItemProps {
  title: string;
  description: string;
  icon: string;
}

const TechItem: React.FC<TechItemProps> = ({ title, description, icon }) => {
  return (
    <div className="flex flex-col items-center text-center p-6 rounded-xl transition-all duration-300 hover:bg-blue-50">
      <div className="w-16 h-16 mb-4 flex items-center justify-center">
        <img src={icon} alt={title} className="max-w-full max-h-full" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

const TechStack: React.FC = () => {
  const technologies = [
    {
      title: "AI/ML",
      description: "Advanced deep learning models including CNNs, GANs, and transformer networks for identity recognition.",
      icon: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png"
    },
    {
      title: "Geospatial AI",
      description: "Location intelligence algorithms for trajectory analysis and predictive mapping of potential locations.",
      icon: "https://cdn-icons-png.flaticon.com/512/854/854878.png"
    },
    {
      title: "Cloud + Edge",
      description: "Hybrid infrastructure with cloud processing for complex tasks and edge computing for real-time analysis.",
      icon: "https://cdn-icons-png.flaticon.com/512/4339/4339820.png"
    },
    {
      title: "Blockchain",
      description: "Optional distributed ledger for immutable audit trails and secure, transparent record-keeping.",
      icon: "https://cdn-icons-png.flaticon.com/512/2091/2091665.png"
    },
    {
      title: "Role-Based Access",
      description: "Comprehensive security framework with role-based access controls and authentication protocols.",
      icon: "https://cdn-icons-png.flaticon.com/512/1053/1053210.png"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Technology Stack</h2>
          <p className="text-lg text-gray-600">
            Powered by cutting-edge technologies for optimal performance and security
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
          {technologies.map((tech, index) => (
            <TechItem
              key={index}
              title={tech.title}
              description={tech.description}
              icon={tech.icon}
            />
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-blue-600 to-blue-800 rounded-xl shadow-lg overflow-hidden">
          <div className="p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">System Requirements</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="text-lg font-semibold mb-3">Hardware Specifications</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-performance GPUs for neural network processing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Minimum 32GB RAM for concurrent processing</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>High-bandwidth network connectivity</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-3">Software Environment</h4>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Linux-based operating system</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Containerized deployment using Docker/Kubernetes</span>
                  </li>
                  <li className="flex items-center">
                    <svg className="h-5 w-5 mr-2 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Compatible with major cloud providers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;