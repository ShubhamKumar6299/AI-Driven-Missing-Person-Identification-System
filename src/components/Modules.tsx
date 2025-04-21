import React, { useState } from 'react';
import { Fingerprint, Database, Map, Bell, Shield, Eye } from 'lucide-react';

interface TabProps {
  id: string;
  label: string;
  icon: React.ReactNode;
  isActive: boolean;
  onClick: () => void;
}

const Tab: React.FC<TabProps> = ({ id, label, icon, isActive, onClick }) => {
  return (
    <button
      id={id}
      className={`flex items-center px-4 py-3 rounded-lg transition-colors duration-200 ${
        isActive
          ? 'bg-blue-600 text-white'
          : 'bg-white hover:bg-blue-50 text-gray-700'
      }`}
      onClick={onClick}
    >
      <div className={`${isActive ? 'text-white' : 'text-blue-600'} mr-3`}>{icon}</div>
      <span className="font-medium">{label}</span>
    </button>
  );
};

interface ModuleContentProps {
  title: string;
  description: string;
  features: string[];
  image: string;
}

const ModuleContent: React.FC<ModuleContentProps> = ({ title, description, features, image }) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
      <div className="lg:col-span-3 space-y-4">
        <h3 className="text-2xl font-bold text-gray-900">{title}</h3>
        <p className="text-gray-700 leading-relaxed">{description}</p>
        
        <div className="pt-4">
          <h4 className="text-lg font-semibold text-gray-900 mb-3">Key Capabilities:</h4>
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <li key={index} className="flex items-start">
                <div className="text-green-500 mr-2 mt-1">
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <span className="text-gray-700">{feature}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      
      <div className="lg:col-span-2">
        <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-4 rounded-xl shadow-md">
          <img 
            src={image} 
            alt={title} 
            className="w-full h-64 object-cover rounded-lg"
          />
          
          <div className="mt-4 p-4 bg-white rounded-lg shadow-sm">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-gray-900">System Compatibility</span>
              <span className="text-sm text-green-600 font-medium">High</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-green-500 h-2 rounded-full" style={{ width: '90%' }}></div>
            </div>
            
            <div className="flex items-center justify-between mt-3 mb-2">
              <span className="text-sm font-medium text-gray-900">Processing Efficiency</span>
              <span className="text-sm text-blue-600 font-medium">Excellent</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{ width: '95%' }}></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modules: React.FC = () => {
  const [activeTab, setActiveTab] = useState('identity');
  
  const modules = {
    identity: {
      title: "Identity Matching Engine",
      description: "Our core identity matching engine employs advanced neural networks to process and match faces across different sources. The system can recognize individuals despite changes in appearance, age, or attempts at disguise.",
      features: [
        "Multi-angle facial recognition with 3D modeling",
        "Age progression and regression algorithms",
        "Recognition despite partial disguises or makeup",
        "Cross-reference with multiple biometric markers",
        "Continuous learning from new data sources"
      ],
      image: "https://images.pexels.com/photos/5326901/pexels-photo-5326901.jpeg"
    },
    aggregator: {
      title: "Multi-Source Aggregator",
      description: "The data aggregation module ethically collects and integrates information from a wide range of sources, creating a comprehensive picture that enhances identification probability while respecting privacy laws.",
      features: [
        "Automated collection from CCTV, social media, and authorized systems",
        "Metadata extraction and standardization",
        "Temporal alignment of data from different sources",
        "Privacy-preserving data integration protocols",
        "Source reliability scoring and verification"
      ],
      image: "https://images.pexels.com/photos/7567450/pexels-photo-7567450.jpeg"
    },
    mapping: {
      title: "Geospatial Mapping & Prediction",
      description: "Our geospatial module creates dynamic probability maps based on sightings, behavioral patterns, and environmental factors to predict potential locations of missing individuals.",
      features: [
        "Real-time heatmap generation of likely locations",
        "Pattern recognition in movement and behavior",
        "Integration with transportation networks and CCTV coverage maps",
        "Weather and environmental factor analysis",
        "Historical case pattern comparison"
      ],
      image: "https://images.pexels.com/photos/3875092/pexels-photo-3875092.jpeg"
    },
    alerts: {
      title: "Alert System & Notifications",
      description: "The notification system delivers targeted, timely alerts to authorized personnel when potential matches are identified, with built-in verification protocols to minimize false positives.",
      features: [
        "Role-based notification hierarchy and escalation",
        "Confidence scoring for potential matches",
        "Integrated communication channels (SMS, email, app push)",
        "Two-step verification for high-confidence matches",
        "Custom alert rules and jurisdiction mapping"
      ],
      image: "https://images.pexels.com/photos/8439093/pexels-photo-8439093.jpeg"
    },
    security: {
      title: "Data Security",
      description: "Our comprehensive security framework ensures all data is encrypted, access is strictly controlled, and optional blockchain integration provides immutable audit trails of all system activities.",
      features: [
        "End-to-end encryption for all data at rest and in transit",
        "Role-based access control with biometric verification",
        "Optional blockchain ledger for all system transactions",
        "Comprehensive audit trails for compliance",
        "Automatic data expiry and retention policies"
      ],
      image: "https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg"
    },
    adaptive: {
      title: "Self-Adaptive Recognition",
      description: "The adaptive recognition module excels at identifying individuals from low-resolution inputs, partial facial views, or in challenging environmental conditions through innovative preprocessing techniques.",
      features: [
        "Super-resolution enhancement for low-quality images",
        "Partial face reconstruction algorithms",
        "Adverse lighting and weather condition compensation",
        "Motion blur correction in video streams",
        "Multi-frame synthesis for improved recognition"
      ],
      image: "https://images.pexels.com/photos/8438799/pexels-photo-8438799.jpeg"
    }
  };

  return (
    <section id="modules" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Modules Explained</h2>
          <p className="text-lg text-gray-600">
            Each component of our system is designed to work together for maximum effectiveness
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          <Tab 
            id="identity-tab"
            label="Identity Engine" 
            icon={<Fingerprint className="h-5 w-5" />} 
            isActive={activeTab === 'identity'}
            onClick={() => setActiveTab('identity')}
          />
          <Tab 
            id="aggregator-tab"
            label="Data Aggregator" 
            icon={<Database className="h-5 w-5" />} 
            isActive={activeTab === 'aggregator'}
            onClick={() => setActiveTab('aggregator')}
          />
          <Tab 
            id="mapping-tab"
            label="Geospatial" 
            icon={<Map className="h-5 w-5" />} 
            isActive={activeTab === 'mapping'}
            onClick={() => setActiveTab('mapping')}
          />
          <Tab 
            id="alerts-tab"
            label="Alert System" 
            icon={<Bell className="h-5 w-5" />} 
            isActive={activeTab === 'alerts'}
            onClick={() => setActiveTab('alerts')}
          />
          <Tab 
            id="security-tab"
            label="Security" 
            icon={<Shield className="h-5 w-5" />} 
            isActive={activeTab === 'security'}
            onClick={() => setActiveTab('security')}
          />
          <Tab 
            id="adaptive-tab"
            label="Adaptive Recognition" 
            icon={<Eye className="h-5 w-5" />} 
            isActive={activeTab === 'adaptive'}
            onClick={() => setActiveTab('adaptive')}
          />
        </div>
        
        <div className="bg-blue-50 rounded-xl p-6 shadow-md">
          {Object.entries(modules).map(([key, module]) => (
            <div key={key} className={activeTab === key ? 'block' : 'hidden'}>
              <ModuleContent 
                title={module.title}
                description={module.description}
                features={module.features}
                image={module.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Modules;