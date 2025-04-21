import React from 'react';
import { Brain, Eye, Activity } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">About the System</h2>
          <p className="text-lg text-gray-600">
            Leveraging cutting-edge AI technology to revolutionize missing person identification
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="space-y-6">
              <p className="text-gray-700 leading-relaxed">
                Our system utilizes AI-powered identity matching with Convolutional Neural Networks (CNNs) and Generative 
                Adversarial Networks (GANs) to detect faces across images, video, and biometric data with unprecedented accuracy.
              </p>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                  <Brain className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Advanced Deep Learning</h3>
                  <p className="text-gray-700">
                    Our models are trained on diverse datasets to recognize individuals even with age progression, 
                    disguises, or makeup alterations.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                  <Eye className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Multi-Source Integration</h3>
                  <p className="text-gray-700">
                    We ethically aggregate data from diverse public sources including CCTV, social media, 
                    and authorized health systems to maximize identification opportunities.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="bg-blue-100 p-3 rounded-full text-blue-600 flex-shrink-0">
                  <Activity className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-gray-900">Geospatial Prediction</h3>
                  <p className="text-gray-700">
                    Our system creates predictive heatmaps of likely locations based on behavioral patterns, 
                    sightings, and environmental factors to focus search efforts.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 relative">
            <div className="relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 shadow-lg">
              <div className="relative rounded-lg overflow-hidden aspect-video">
                <img 
                  src="https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg" 
                  alt="AI Vision System" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent flex items-end">
                  <div className="p-6">
                    <h3 className="text-white text-xl font-semibold mb-2">Recognition in Action</h3>
                    <p className="text-blue-100 text-sm">
                      Our system can identify individuals even in challenging conditions with partial occlusion
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="absolute -top-4 -right-4 bg-blue-600 text-white rounded-full p-3 shadow-lg">
                <span className="font-bold">99.7%</span>
                <span className="text-xs block">Accuracy</span>
              </div>
            </div>
            
            <div className="absolute -bottom-6 -left-6 bg-white rounded-lg shadow-xl p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="bg-green-100 p-2 rounded-full">
                  <div className="h-3 w-3 bg-green-500 rounded-full"></div>
                </div>
                <div>
                  <p className="text-sm text-gray-700">Real-time processing enables <span className="font-semibold">immediate alerts</span> when matches are found</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;