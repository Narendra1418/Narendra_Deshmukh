import React, { useState, useRef } from 'react';
import { Github, Globe, Coffee, Server, Database, Cloud, Code2, Zap, Package, Activity, GitBranch, FileCode, Boxes, ChevronLeft, ChevronRight } from 'lucide-react';

const Projects = ({ isDark }) => {
  const [selectedCategory, setSelectedCategory] = useState('webDev');
  const scrollContainerRefs = useRef({});

  // Define tech icons using Lucide icons instead of react-icons
  const techIcons = {
    React: Code2,
    Node: Server,
    MongoDB: Database,
    Tailwind: Zap,
    Express: Activity,
    PostgreSQL: Database,
    Java: Coffee,
    Spring: Package,
    MySQL: Database,
    Docker: Boxes,
    Kubernetes: Cloud,
    Jenkins: GitBranch,
    Prometheus: Activity,
    Terraform: FileCode,
    Elasticsearch: Database
  };

  const projects = {
    webDev: [
      { 
        name: 'Smart Trade Hub', 
        desc: 'Real-time analytics dashboard with interactive charts and data visualizations. Features include user engagement metrics, post analytics, audience demographics, and performance tracking with customizable date ranges and export capabilities.', 
        img: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop', 
        github: 'https://github.com',
        tech: ['Next', 'Node','Express', 'PostgreSQL', 'Tailwind']
      },
      { 
        name: 'Sanchari', 
        desc: 'AI-powered portfolio website builder that automatically generates stunning portfolio sites based on user input. Features customizable templates, drag-and-drop interface, SEO optimization, and one-click deployment to various hosting platforms.', 
        img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=300&fit=crop', 
        github: 'https://github.com',
        tech: ['React', 'Node','Express', 'MongoDB', 'Tailwind']
      },
      { 
        name: 'Chat Application', 
        desc: 'Real-time messaging platform built with Spring Boot featuring instant messaging, group chats, file sharing, message history, read receipts, online status indicators, and end-to-end encryption for secure communications.', 
        img: 'https://images.unsplash.com/photo-1577563908411-5077b6dc7624?w=400&h=300&fit=crop', 
        github: 'https://github.com',
        tech: ['React', 'Node','Express', 'MongoDB']
      },
      { 
        name: 'AI Resume Analyzer', 
        desc: 'Collaborative project management tool with real-time updates, task assignment, progress tracking, team collaboration features, file attachments, comments, and notifications. Supports agile workflows with kanban boards and sprint planning.', 
        img: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop', 
        github: 'https://github.com',
        tech: ['React', 'Tailwind','Puter.js']
      },
      
    ],
    java: [
      { 
        name: 'E-Commerce Platform', 
        desc: 'Full-stack shopping platform with payment integration, user authentication, product catalog, shopping cart, order management, and real-time inventory tracking. Built with modern web technologies ensuring responsive design and seamless user experience.', 
        img: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=300&fit=crop', 
        github: 'https://github.com',
        tech: ['React', 'Spring boot ', 'SQL', 'Tailwind']
      },
      { 
        name: 'ReelBites ', 
        desc: 'Secure banking application with comprehensive transaction management, account management, fund transfers, loan processing, and detailed financial reporting. Implements industry-standard security protocols with encryption and multi-factor authentication.', 
        img: 'https://images.unsplash.com/photo-1501167786227-4cba60f6d58f?w=400&h=300&fit=crop', 
        github: 'https://github.com',
        tech: ['React', 'Java', 'Spring boot', 'PostgreSQL', 'Docker']
      },

      // { 
      //   name: 'RESTful API Service', 
      //   desc: 'Scalable microservices architecture implementing RESTful APIs with service discovery, load balancing, circuit breakers, and API gateway. Features comprehensive API documentation, versioning, and rate limiting for production-grade applications.', 
      //   img: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=400&h=300&fit=crop', 
      //   github: 'https://github.com',
      //   tech: ['Java', 'Spring', 'Docker']
      // }
    ],
    // devOps: [
    //   { 
    //     name: 'CI/CD Pipeline', 
    //     desc: 'Automated deployment pipeline with Jenkins and Docker featuring automated testing, code quality checks, security scanning, containerized builds, and multi-environment deployments. Includes rollback mechanisms and deployment approvals.', 
    //     img: 'https://images.unsplash.com/photo-1667372393119-3d4c48d07fc9?w=400&h=300&fit=crop', 
    //     github: 'https://github.com',
    //     tech: ['Jenkins', 'Docker', 'Kubernetes']
    //   },
    //   { 
    //     name: 'Kubernetes Cluster', 
    //     desc: 'Orchestrated containerized applications with Kubernetes featuring auto-scaling, load balancing, service mesh, persistent storage, secrets management, and monitoring. Implements high availability and disaster recovery strategies.', 
    //     img: 'https://images.unsplash.com/photo-1667372335937-d03be6fb0b88?w=400&h=300&fit=crop', 
    //     github: 'https://github.com',
    //     tech: ['Kubernetes', 'Docker', 'Prometheus']
    //   },
    //   { 
    //     name: 'Monitoring Dashboard', 
    //     desc: 'Infrastructure monitoring solution with Prometheus and Grafana providing real-time metrics, custom alerts, performance dashboards, resource utilization tracking, and incident management. Features historical data analysis and anomaly detection.', 
    //     img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop', 
    //     github: 'https://github.com',
    //     tech: ['Prometheus', 'Docker', 'Kubernetes']
    //   },
    //   { 
    //     name: 'Terraform IaC', 
    //     desc: 'Infrastructure as Code for AWS implementing automated provisioning, version-controlled infrastructure, multi-environment setups, cost optimization, and compliance policies. Includes modules for common patterns and disaster recovery configurations.', 
    //     img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=300&fit=crop', 
    //     github: 'https://github.com',
    //     tech: ['Terraform', 'Docker']
    //   },
    //   { 
    //     name: 'Log Aggregation', 
    //     desc: 'ELK stack implementation for centralized logging featuring log collection from multiple sources, real-time search, pattern detection, log analysis, and customizable dashboards. Includes alerting and log retention policies.', 
    //     img: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop', 
    //     github: 'https://github.com',
    //     tech: ['Elasticsearch', 'Docker', 'Kubernetes']
    //   }
    // ]
  };

  const scrollLeft = (category) => {
    const container = scrollContainerRefs.current[category];
    if (container) {
      container.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const scrollRight = (category) => {
    const container = scrollContainerRefs.current[category];
    if (container) {
      container.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <section id="projects" className="py-20">
      <div className="max-w-full mx-auto px-8 sm:px-12 lg:px-16">
        <h2 className="text-4xl font-bold text-center mb-16 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">Projects</h2>
        
        {/* Category Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <button
            onClick={() => setSelectedCategory('webDev')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'webDev'
                ? 'bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/50'
                : isDark ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700' : 'bg-white/40 hover:bg-white/60 border border-gray-200'
            }`}
          >
            <Globe className="w-5 h-5" />
            <span>Web Development</span>
          </button>
          
          <button
            onClick={() => setSelectedCategory('java')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'java'
                ? 'bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/50'
                : isDark ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700' : 'bg-white/40 hover:bg-white/60 border border-gray-200'
            }`}
          >
            <Coffee className="w-5 h-5" />
            <span>Java</span>
          </button>
          
          <button
            onClick={() => setSelectedCategory('devOps')}
            className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all ${
              selectedCategory === 'devOps'
                ? 'bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 shadow-lg shadow-fuchsia-500/50'
                : isDark ? 'bg-gray-800/40 hover:bg-gray-800/60 border border-gray-700' : 'bg-white/40 hover:bg-white/60 border border-gray-200'
            }`}
          >
            <Server className="w-5 h-5" />
            <span>DevOps</span>
          </button>
        </div>
        
        {Object.entries(projects).map(([category, projectList]) => (
          <div key={category} className={`mb-16 ${selectedCategory !== category ? 'hidden' : ''}`}>
            <div className="relative overflow-hidden px-16">
              {/* Navigation Arrows - Outside Cards */}
              <button
                onClick={() => scrollLeft(category)}
                className={`absolute -left-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full ${
                  isDark ? 'bg-gray-800/90 hover:bg-gray-700/90' : 'bg-white/90 hover:bg-gray-100/90'
                } backdrop-blur-sm shadow-lg transition-all hover:scale-110 border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
              </button>
              
              <button
                onClick={() => scrollRight(category)}
                className={`absolute -right-2 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full ${
                  isDark ? 'bg-gray-800/90 hover:bg-gray-700/90' : 'bg-white/90 hover:bg-gray-100/90'
                } backdrop-blur-sm shadow-lg transition-all hover:scale-110 border ${
                  isDark ? 'border-gray-700' : 'border-gray-200'
                }`}
                aria-label="Scroll right"
              >
                <ChevronRight className={`w-6 h-6 ${isDark ? 'text-white' : 'text-gray-800'}`} />
              </button>

              {/* Current: Manual horizontal scroll */}
              <div 
                ref={(el) => scrollContainerRefs.current[category] = el}
                className="flex space-x-8 overflow-x-auto pb-4 scrollbar-hide snap-x snap-mandatory"
              >
                {projectList.map((project, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className={`shrink-0 w-96 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl flex flex-col snap-center`}
                    >
                      <img src={project.img} alt={project.name} className="w-full h-52 object-cover" />
                      <div className="p-5 flex flex-col grow">
                        <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                        
                        {/* Project Description */}
                        <p className="text-white text-sm leading-relaxed mb-3">
                          {project.desc}
                        </p>
                        
                        {/* Tech Stack Icons */}
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((techName, techIdx) => {
                            const TechIcon = techIcons[techName];
                            if (!TechIcon) return null;
                            return (
                              <div key={techIdx} className={`p-2 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'}`}>
                                <TechIcon className="w-6 h-6 text-fuchsia-500" />
                              </div>
                            );
                          })}
                        </div>
                        
                        {/* View on GitHub Button */}
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-auto px-4 py-2 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all flex items-center justify-center space-x-2"
                        >
                          <Github className="w-5 h-5" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Commented: Auto-scrolling right to left infinite loop */}
              {/* <div className="flex space-x-8 animate-scroll-rtl">
                {projectList.concat(projectList).map((project, idx) => {
                  return (
                    <div 
                      key={idx} 
                      className={`shrink-0 w-96 rounded-2xl overflow-hidden ${isDark ? 'bg-gray-800/40' : 'bg-white/40'} backdrop-blur-lg border ${isDark ? 'border-gray-700' : 'border-gray-200'} shadow-xl flex flex-col`}
                    >
                      <img src={project.img} alt={project.name} className="w-full h-52 object-cover" />
                      <div className="p-5 flex flex-col grow">
                        <h4 className="text-xl font-bold mb-2">{project.name}</h4>
                        
                        <p className="text-white text-sm leading-relaxed mb-3">
                          {project.desc}
                        </p>
                        
                        <div className="flex flex-wrap gap-2 mb-3">
                          {project.tech.map((techName, techIdx) => {
                            const TechIcon = techIcons[techName];
                            return (
                              <div key={techIdx} className={`p-2 rounded-lg ${isDark ? 'bg-gray-700/50' : 'bg-gray-200/50'}`}>
                                <TechIcon className="w-6 h-6 text-fuchsia-500" />
                              </div>
                            );
                          })}
                        </div>
                        
                        <a 
                          href={project.github} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="mt-auto px-4 py-2 bg-linear-to-r from-pink-500 via-fuchsia-500 to-purple-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-fuchsia-500/50 transition-all flex items-center justify-center space-x-2"
                        >
                          <Github className="w-5 h-5" />
                          <span>View on GitHub</span>
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div> */}
            </div>
          </div>
        ))}
      </div>

      <style>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        
        /* Commented: Animation for right to left infinite scroll */
        /* @keyframes scroll-rtl {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll-rtl {
          animation: scroll-rtl 30s linear infinite;
        }
        
        .animate-scroll-rtl:hover {
          animation-play-state: paused;
        } */
      `}</style>
    </section>
  );
};

export default Projects;