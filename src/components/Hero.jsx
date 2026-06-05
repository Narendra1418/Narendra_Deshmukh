import React, { useState, useEffect } from 'react';
import { MapPin, Mail, Phone, Calendar, CheckCircle2 } from 'lucide-react';

const Hero = ({ isDark, scrollToSection, onDownloadCV }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  
  const roles = [
    'Full Stack Developer',
    'DevOps Enthusiast',
    'Software Engineer',
    'Backend Specialist'
  ];

  useEffect(() => {
    const currentRole = roles[roleIndex];
    const typingSpeed = isDeleting ? 50 : 100;
    const pauseTime = isDeleting ? 1000 : 2000;

    if (!isDeleting && displayedText === currentRole) {
      setTimeout(() => setIsDeleting(true), pauseTime);
      return;
    }

    if (isDeleting && displayedText === '') {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setDisplayedText(
        isDeleting
          ? currentRole.substring(0, displayedText.length - 1)
          : currentRole.substring(0, displayedText.length + 1)
      );
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayedText, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center pt-16">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16 w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold">
                Hi, I'm <span className="bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Narendra</span>
              </h1>
              <div className="text-xl md:text-2xl text-white font-bold mt-3 h-8">
                <span className="inline-block">{displayedText}</span>
                <span className="animate-pulse">|</span>
              </div>
            </div>
            
            {/* Professional Summary */}
            <div className="space-y-3 text-white">
              <p className="text-lg leading-relaxed font-semibold">
                Motivated and detail-oriented web developer and DevOps enthusiast with a strong foundation in building responsive web applications and automating development workflows. Skilled in modern JavaScript frameworks and cloud technologies, with hands-on experience gained through academic projects, internships, and personal development work.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                Proficient in the full development lifecycle—from planning and UI development to backend integration and deployment. Comfortable working with React, Node.js, Docker, Linux, and CI/CD tools. Passionate about writing clean, maintainable code and continuously improving through feedback and real-world challenges.
              </p>
              <p className="text-lg leading-relaxed font-semibold">
                Actively exploring cloud platforms like AWS and learning container orchestration concepts. Contributor to open-source projects and an avid learner who enjoys experimenting with new technologies and sharing knowledge through blogs and community discussions.
              </p>
            </div>

            {/* Core Expertise */}
            <div className="space-y-3">
              <h3 className="text-lg font-bold text-white">Core Expertise:</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-white font-bold">Full Stack Development (MERN)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-white font-bold">DevOps Fundamentals (Linux, Git, CI/CD)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-white font-bold">Docker & Containerization</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-white font-bold">Basic Cloud Concepts (AWS,GCP)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-white font-bold">RESTful API Development</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle2 className="w-4 h-4 text-indigo-500 shrink-0" />
                  <span className="text-sm text-white font-bold">Database Design (MongoDB, SQL)</span>
                </div>
              </div>
            </div>

            {/* Contact Info */}
            <div className="flex flex-wrap gap-4 text-sm">
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-indigo-500" />
                <span className="text-white font-bold">Pune, India</span>
              </div>
              <div className="flex items-center space-x-2">
                <Calendar className="w-4 h-4 text-green-500" />
                <span className="text-green-500 font-bold">Available for Opportunities</span>
              </div>
            </div>
            
            <div className="flex space-x-4">
              <button 
                onClick={onDownloadCV}
                className="px-8 py-3 bg-linear-to-r from-indigo-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
              >
                Download CV
              </button>
              <button 
                onClick={() => scrollToSection('contact')} 
                className={`px-8 py-3 border-2 ${isDark ? 'border-indigo-500 hover:bg-indigo-500/10' : 'border-purple-600 hover:bg-purple-600/10'} rounded-lg font-semibold transition-all`}
              >
                Contact Me
              </button>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-linear-to-r from-indigo-500 to-purple-600 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=faces" 
                alt="Profile" 
                className="relative w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-500 shadow-2xl" 
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;