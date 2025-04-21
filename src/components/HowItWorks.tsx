import React from 'react';
import { Database, Search, Map, Bell, UserCheck } from 'lucide-react';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  number: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, number }) => {
  return (
    <div className="relative">
      <div className="flex items-center mb-4">
        <div className="bg-blue-600 text-white rounded-full w-10 h-10 flex items-center justify-center flex-shrink-0 shadow-md z-10">
          {number}
        </div>
        <div className="h-0.5 bg-blue-200 w-full ml-4"></div>
      </div>
      
      <div className="bg-white rounded-xl shadow-sm p-6 ml-5">
        <div className="absolute -left-3 top-16 bg-blue-100 p-3 rounded-full text-blue-600">
          {icon}
        </div>
        <div className="ml-10">
          <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
          <p className="text-gray-700">{description}</p>
        </div>
      </div>
    </div>
  );
};

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: <Database className="h-5 w-5" />,
      title: "Data Ingestion",
      description: "The system ethically collects data from authorized sources including CCTV footage, social media posts, healthcare systems, and public databases, standardizing formats for processing."
    },
    {
      icon: <Search className="h-5 w-5" />,
      title: "AI-Based Matching",
      description: "Advanced neural networks analyze the collected data, identifying potential matches based on facial features, gait analysis, clothing, and other visual markers, even with partial information."
    },
    {
      icon: <Map className="h-5 w-5" />,
      title: "Prediction via Heatmaps",
      description: "When matches are found, the system generates probability heatmaps indicating likely locations based on sighting patterns, known behaviors, and environmental factors."
    },
    {
      icon: <Bell className="h-5 w-5" />,
      title: "Alerts & Notifications",
      description: "Authorized personnel receive secure notifications with match details, confidence scores, and location data, prioritized based on urgency and jurisdiction."
    },
    {
      icon: <UserCheck className="h-5 w-5" />,
      title: "Human Review & Confirmation",
      description: "Trained personnel review high-confidence matches, confirm identities through established protocols, and coordinate appropriate response actions."
    }
  ];

  return (
    <section id="technology" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">How It Works</h2>
          <p className="text-lg text-gray-600">
            Our system follows a systematic approach to identify missing persons effectively
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <Step
                key={index}
                icon={step.icon}
                title={step.title}
                description={step.description}
                number={index + 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;