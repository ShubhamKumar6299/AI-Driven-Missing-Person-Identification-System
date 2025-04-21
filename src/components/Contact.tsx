import React, { useState } from 'react';
import { Send, User, Mail, Building, MessageSquare } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    message: ''
  });
  
  const [formState, setFormState] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('submitting');
    
    // Simulate form submission
    setTimeout(() => {
      setFormState('success');
      // Reset form after success
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          organization: '',
          message: ''
        });
        setFormState('idle');
      }, 3000);
    }, 1500);
  };
  
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Contact Us</h2>
          <p className="text-lg text-gray-600">
            Request a demo or get more information about our AI-driven identification system
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2">
              <div className="bg-blue-600 text-white p-8 rounded-xl shadow-lg h-full">
                <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
                <p className="mb-8">
                  Interested in seeing how our AI-driven system can enhance your missing person search capabilities? 
                  Contact us for more information or to schedule a personalized demo.
                </p>
                
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-3 rounded-full mr-4">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Email</p>
                      <p className="font-medium">info@findpersonai.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="bg-blue-500 p-3 rounded-full mr-4">
                      <Building className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-sm text-blue-200">Headquarters</p>
                      <p className="font-medium">101 AI Plaza, Silicon Valley, CA</p>
                    </div>
                  </div>
                  
                  <div className="pt-8">
                    <p className="text-blue-200 text-sm mb-4">Follow us on social media:</p>
                    <div className="flex space-x-4">
                      {['twitter', 'linkedin', 'facebook'].map((platform) => (
                        <a
                          key={platform}
                          href="#"
                          className="bg-blue-700 p-2 rounded-full hover:bg-blue-500 transition-colors duration-200"
                        >
                          <span className="sr-only">{platform}</span>
                          <div className="h-5 w-5 bg-white/20 rounded-sm"></div>
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="lg:col-span-3">
              <div className="bg-white rounded-xl shadow-md p-8">
                <form onSubmit={handleSubmit}>
                  <div className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <User className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="John Doe"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Mail className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="organization" className="block text-sm font-medium text-gray-700 mb-1">
                        Organization
                      </label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                          <Building className="h-5 w-5 text-gray-400" />
                        </div>
                        <input
                          type="text"
                          id="organization"
                          name="organization"
                          value={formData.organization}
                          onChange={handleChange}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="Company or Organization"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <div className="relative">
                        <div className="absolute top-3 left-3 pointer-events-none">
                          <MessageSquare className="h-5 w-5 text-gray-400" />
                        </div>
                        <textarea
                          id="message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          rows={4}
                          className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          placeholder="I'm interested in learning more about your system..."
                          required
                        ></textarea>
                      </div>
                    </div>
                    
                    <div>
                      <button
                        type="submit"
                        disabled={formState === 'submitting'}
                        className={`w-full flex justify-center items-center px-4 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white ${
                          formState === 'submitting' 
                            ? 'bg-blue-400 cursor-not-allowed' 
                            : formState === 'success'
                            ? 'bg-green-600 hover:bg-green-700'
                            : 'bg-blue-600 hover:bg-blue-700'
                        } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200`}
                      >
                        {formState === 'submitting' ? (
                          <>
                            <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Sending...
                          </>
                        ) : formState === 'success' ? (
                          <>
                            <svg className="-ml-1 mr-3 h-5 w-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                            Message Sent!
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-5 w-5" />
                            Send Message
                          </>
                        )}
                      </button>
                    </div>
                  </div>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                  <p className="text-sm text-gray-500">
                    By contacting us, you agree to our <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> and 
                    <a href="#" className="text-blue-600 hover:underline"> Terms of Service</a>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;