import React from 'react';
import { 
  BrainCircuit, 
  Zap, 
  CheckCircle, 
  Database, 
  Map, 
  Bell, 
  RefreshCw, 
  Shield, 
  Scale 
} from 'lucide-react';

interface FeatureProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const Feature: React.FC<FeatureProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow p-6 border border-gray-100 flex flex-col h-full">
      <div className="bg-blue-50 p-3 rounded-lg w-fit mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 flex-grow">{description}</p>
    </div>
  );
};

const Features: React.FC = () => {
  const features = [
    {
      icon: <BrainCircuit className="h-6 w-6 text-blue-600" />,
      title: "Deep Learning",
      description: "Advanced neural networks that continually improve recognition capabilities through ongoing learning."
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-600" />,
      title: "Real-time Analysis",
      description: "Process video streams and image data in milliseconds for immediate identification and action."
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-blue-600" />,
      title: "Accurate Matching",
      description: "99.7% accuracy in facial recognition even with partial views, aging effects, or disguises."
    },
    {
      icon: <Database className="h-6 w-6 text-blue-600" />,
      title: "Multi-Source Data",
      description: "Ethical aggregation of data from surveillance systems, social media, and authorized databases."
    },
    {
      icon: <Map className="h-6 w-6 text-blue-600" />,
      title: "Predictive Mapping",
      description: "Generate probability heatmaps of potential locations based on sightings and behavioral patterns."
    },
    {
      icon: <Bell className="h-6 w-6 text-blue-600" />,
      title: "Ethical Alerts",
      description: "Configurable notification system with role-based access and verification protocols."
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-600" />,
      title: "Adaptive Recognition",
      description: "Self-improving algorithms that adapt to changes in appearance, lighting, and environmental factors."
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-600" />,
      title: "Secure Registry",
      description: "Encrypted central database with strict access controls and comprehensive audit trails."
    },
    {
      icon: <Scale className="h-6 w-6 text-blue-600" />,
      title: "Responsible AI",
      description: "Built-in ethical guidelines, bias detection, and privacy-preserving techniques."
    }
  ];

  return (
    <section id="features" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Key Features</h2>
          <p className="text-lg text-gray-600">
            Cutting-edge capabilities that set our identification system apart
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Feature
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;