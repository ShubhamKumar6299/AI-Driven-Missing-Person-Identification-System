import React from 'react';
import { ShieldCheck, FileLock, FileCheck, LockKeyhole } from 'lucide-react';

interface ComplianceItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const ComplianceItem: React.FC<ComplianceItemProps> = ({ icon, title, description }) => {
  return (
    <div className="flex">
      <div className="bg-blue-100 p-3 rounded-full h-fit text-blue-600 mr-4 flex-shrink-0">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">{title}</h3>
        <p className="text-gray-700">{description}</p>
      </div>
    </div>
  );
};

const Security: React.FC = () => {
  const complianceItems = [
    {
      icon: <ShieldCheck className="h-6 w-6" />,
      title: "GDPR Compliance",
      description: "Our system is fully compliant with General Data Protection Regulation requirements, including right to be forgotten, data portability, and explicit consent mechanisms."
    },
    {
      icon: <FileLock className="h-6 w-6" />,
      title: "HIPAA Adherence",
      description: "When integrated with healthcare systems, we maintain strict Health Insurance Portability and Accountability Act compliance for protected health information."
    },
    {
      icon: <FileCheck className="h-6 w-6" />,
      title: "ISO 27001 Certified",
      description: "Our information security management system is certified to international standards, ensuring comprehensive security controls."
    },
    {
      icon: <LockKeyhole className="h-6 w-6" />,
      title: "NIST Framework",
      description: "Security implementation follows the National Institute of Standards and Technology cybersecurity framework for critical infrastructure."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Security & Compliance</h2>
          <p className="text-lg text-gray-600">
            Security by design with privacy-first architecture and compliance with global regulations
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            {complianceItems.map((item, index) => (
              <ComplianceItem
                key={index}
                icon={item.icon}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Security Architecture</h3>
            
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">End-to-End Encryption</h4>
                <p className="text-gray-700 text-sm">All data is encrypted both at rest and in transit using AES-256 and TLS 1.3 protocols, with regular key rotation and secure key management.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Access Controls</h4>
                <p className="text-gray-700 text-sm">Role-based access control with principle of least privilege, multi-factor authentication, and biometric verification for sensitive operations.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Audit Trails</h4>
                <p className="text-gray-700 text-sm">Comprehensive logging of all system activities with tamper-evident records, regular security audits, and optional blockchain-based immutable trails.</p>
              </div>
              
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-medium text-gray-900 mb-2">Data Governance</h4>
                <p className="text-gray-700 text-sm">Strict data retention policies, automated data minimization, and privacy-preserving analysis techniques to maintain compliance with data protection regulations.</p>
              </div>
            </div>
            
            <div className="mt-6 border-t border-gray-200 pt-6">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-900">Security Rating</span>
                <span className="text-sm font-medium text-green-600">A+</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div className="bg-green-600 h-2.5 rounded-full" style={{ width: '95%' }}></div>
              </div>
              <p className="mt-2 text-xs text-gray-500">Last security assessment: June 2025</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;