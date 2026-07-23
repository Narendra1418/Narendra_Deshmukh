import React from 'react';
import { X, Mail, Phone, ExternalLink, Download } from 'lucide-react';

const CoverLetterModal = ({ isDark, onClose }) => {
  const handleDownload = () => {
    // Download the resume PDF
    const link = document.createElement('a');
    link.href = '/Narendra_Resume.pdf';
    link.download = 'Narendra_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    // Generate and download cover letter as PDF using print
    setTimeout(() => {
      window.print();
    }, 500);
  };
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
      <div className={`relative max-w-4xl w-full max-h-[90vh] overflow-y-auto rounded-2xl ${isDark ? 'bg-gray-900' : 'bg-white'} shadow-2xl`}>
        <button 
          onClick={onClose}
          className="sticky top-4 right-4 float-right p-2 rounded-full bg-red-500 hover:bg-red-600 transition-colors z-10"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="p-8 md:p-12 space-y-8">
          {/* Cover Letter Header */}
          <div className="text-center border-b border-indigo-500 pb-6">
            <h1 className="text-4xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mb-2">
              COVER LETTER
            </h1>
            <p className="text-sm text-gray-500">Why I'm Your Ideal Candidate</p>
          </div>

          {/* Personal Information */}
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold">Narendra</h2>
            <p className="text-gray-500">Full Stack Developer & DevOps Engineer</p>
            <div className="flex justify-center items-center space-x-4 text-sm">
              <span className="flex items-center space-x-1">
                <Mail className="w-4 h-4" />
                <span>dnarendra4510@gmail.com</span>
              </span>
              <span>|</span>
              <span className="flex items-center space-x-1">
                <Phone className="w-4 h-4" />
                <span>+91 8975394198</span>
              </span>
            </div>
          </div>

          {/* Date and Recipient */}
          <div className="space-y-3 text-sm">
            <p className="text-gray-500">Date: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            <div>
              <p className="font-semibold">To: Hiring Manager</p>
              <p className="text-gray-500">Re: Application for [Position Title]</p>
            </div>
          </div>

          {/* Cover Letter Body */}
          <div className="space-y-6 text-justify leading-relaxed">
            <p className="text-lg">Dear Hiring Manager,</p>

            <p>
              I am writing to express my strong interest in joining your esteemed organization. With a proven track record in full-stack development and DevOps engineering, I am confident that my technical expertise, problem-solving abilities, and passion for innovation make me an exceptional candidate who can deliver immediate value to your team.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-indigo-500">Why I Stand Out:</h3>
              
              <div className="space-y-3 pl-4 border-l-4 border-indigo-500">
                <p>
                  <span className="font-semibold text-indigo-400">Comprehensive Technical Stack:</span> I bring hands-on expertise across the entire development spectrum - from crafting responsive, user-centric frontends with React and modern JavaScript to building robust, scalable backends using Node.js and Java Spring Boot. My proficiency extends to database architecture (MongoDB, PostgreSQL, MySQL) and cloud infrastructure management.
                </p>
                
                <p>
                  <span className="font-semibold text-indigo-400">DevOps Excellence:</span> I excel at streamlining development workflows through CI/CD pipelines, containerization with Docker, orchestration using Kubernetes, and infrastructure as code with Terraform. This enables faster deployments, reduced downtime, and significant cost optimization for businesses.
                </p>
                
                <p>
                  <span className="font-semibold text-indigo-400">Problem-Solving Mindset:</span> Beyond writing code, I architect solutions. I've successfully delivered multiple projects across web development, enterprise Java applications, and DevOps implementations, each demonstrating my ability to translate complex business requirements into elegant technical solutions.
                </p>
                
                <p>
                  <span className="font-semibold text-indigo-400">Continuous Learning & Adaptability:</span> The tech landscape evolves rapidly, and so do I. I stay current with emerging technologies, best practices, and industry trends, ensuring that the solutions I build are not just functional today but scalable for tomorrow.
                </p>
              </div>
            </div>

            <p>
              What truly sets me apart is my holistic approach to development. I don't just focus on making things work - I ensure they're maintainable, performant, secure, and aligned with business objectives. My portfolio showcases projects that demonstrate clean code architecture, thoughtful UI/UX design, and robust backend systems that can handle real-world challenges.
            </p>

            <p>
              I am particularly drawn to opportunities where I can contribute to meaningful projects, collaborate with talented teams, and continue pushing the boundaries of what's possible with technology. I thrive in environments that value innovation, quality, and continuous improvement.
            </p>

            <div className="bg-linear-to-r from-indigo-500/10 to-purple-600/10 border-l-4 border-indigo-500 p-4 rounded-r-lg">
              <p className="font-semibold text-indigo-400 mb-2">My Commitment to You:</p>
              <p>
                If given the opportunity, I will bring not just technical skills, but dedication, creativity, and a results-driven mindset to your organization. I am ready to hit the ground running, contribute from day one, and grow alongside your team to achieve exceptional outcomes.
              </p>
            </div>

            <p>
              I would welcome the opportunity to discuss how my background, skills, and enthusiasm align with your team's needs. I am available for an interview at your earliest convenience and can be reached via email or phone.
            </p>

            <p>
              Thank you for taking the time to consider my application. I look forward to the possibility of contributing to your organization's success and am excited about the opportunity to bring my passion for technology and innovation to your team.
            </p>

            <div className="pt-4">
              <p className="font-semibold">Sincerely,</p>
              <p className="text-xl font-bold bg-linear-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent mt-2">
                Narendra
              </p>
            </div>
          </div>

          {/* Download Button */}
          <div className="text-center pt-6 border-t border-gray-700">
            <button 
              onClick={handleDownload}
              className="inline-flex items-center space-x-2 px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
            >
              <Download className="w-5 h-5" />
              <span>Download Resume & Cover Letter</span>
            </button>
            <p className="text-xs text-gray-500 mt-3">Resume PDF will download, then print dialog will open for Cover Letter</p>
          </div>
        </div>
      </div>

      <style>{`
        @media print {
          body * {
            visibility: hidden;
          }
          .fixed.inset-0 {
            position: static !important;
            background: white !important;
          }
          .fixed.inset-0, .fixed.inset-0 * {
            visibility: visible !important;
          }
          .fixed.inset-0 > div {
            box-shadow: none !important;
            border-radius: 0 !important;
            max-width: 100% !important;
            max-height: 100% !important;
            overflow: visible !important;
          }
          button {
            display: none !important;
          }
          .text-center.pt-6.border-t {
            display: none !important;
          }
        }
      `}</style>
    </div>
  );
};

export default CoverLetterModal;