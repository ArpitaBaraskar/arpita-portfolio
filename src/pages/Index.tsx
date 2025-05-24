import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Users, Award, BookOpen, Star, Zap, Cpu, Globe } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const projects = [
    {
      title: "KrishiVaidya",
      description: "AI-driven crop disease prediction using CNN/ResNet with Flutter and weather data integration",
      tech: ["AI/ML", "Flutter", "CNN", "ResNet", "Weather API"],
      gradient: "from-green-400 to-blue-500",
      icon: <Cpu className="w-8 h-8" />
    },
    {
      title: "Mentor Connect",
      description: "MERN stack mentorship platform with Jitsi video integration for seamless connections",
      tech: ["MERN", "Jitsi", "Video Chat", "MongoDB"],
      gradient: "from-purple-400 to-pink-500",
      icon: <Users className="w-8 h-8" />
    },
    {
      title: "Fast-Pay",
      description: "Digital payment application with secure payment gateway API integration",
      tech: ["Payment Gateway", "API", "Security", "UI/UX"],
      gradient: "from-yellow-400 to-red-500",
      icon: <Zap className="w-8 h-8" />
    },
    {
      title: "Spotify Clone",
      description: "Responsive music streaming UI built with HTML and CSS, pixel-perfect design",
      tech: ["HTML", "CSS", "Responsive", "UI Design"],
      gradient: "from-blue-400 to-purple-500",
      icon: <Globe className="w-8 h-8" />
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90, color: "from-yellow-400 to-orange-500" },
    { name: "React.js", level: 85, color: "from-blue-400 to-cyan-500" },
    { name: "Node.js", level: 80, color: "from-green-400 to-emerald-500" },
    { name: "Java", level: 88, color: "from-red-400 to-pink-500" },
    { name: "MongoDB", level: 75, color: "from-green-600 to-green-400" },
    { name: "MySQL", level: 82, color: "from-blue-600 to-blue-400" },
    { name: "Google Cloud", level: 70, color: "from-purple-400 to-indigo-500" },
    { name: "HTML/CSS", level: 95, color: "from-orange-400 to-red-500" }
  ];

  const experiences = [
    {
      title: "Director",
      company: "LOL Coding Club, WIT",
      period: "2023 - Present",
      description: "Leading coding initiatives and organizing hackathons"
    },
    {
      title: "Joint Secretary",
      company: "Walchand Institute of Technology",
      period: "2023 - Present",
      description: "Managing student activities and academic coordination"
    },
    {
      title: "Full Stack Intern",
      company: "Edunet Foundation",
      period: "2023",
      description: "Developed web applications using MERN stack"
    }
  ];

  const achievements = [
    "Smart India Hackathon Participant",
    "Oracathon Finalist",
    "National Coding Challenge Participant",
    "Google Cloud Certified",
    "NSS Coordinator"
  ];

  // 3D Floating Particles Component
  const FloatingParticles = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(50)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            transform: `translate3d(${mousePosition.x * 0.01 * (i % 5)}px, ${mousePosition.y * 0.01 * (i % 3)}px, 0) rotateZ(${scrollY * 0.01 * i}deg)`,
            transition: 'transform 0.1s ease-out'
          }}
        >
          <div 
            className="w-1 h-1 bg-cyan-400 rounded-full animate-pulse"
            style={{
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
              boxShadow: '0 0 6px currentColor'
            }}
          />
        </div>
      ))}
    </div>
  );

  // 3D Rotating Geometric Shapes
  const GeometricShapes = () => (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: `${10 + (i * 12)}%`,
            top: `${20 + (i * 8)}%`,
            transform: `translate3d(0, ${scrollY * 0.02 * (i + 1)}px, 0) rotateX(${scrollY * 0.1}deg) rotateY(${scrollY * 0.05}deg)`,
            perspective: '1000px'
          }}
        >
          <div 
            className={`w-8 h-8 border border-cyan-400/20 ${
              i % 3 === 0 ? 'rotate-45' : i % 3 === 1 ? 'rounded-full' : ''
            }`}
            style={{
              transform: `rotateX(${45 + scrollY * 0.1}deg) rotateY(${45 + scrollY * 0.15}deg)`,
              transformStyle: 'preserve-3d',
              animation: `spin ${3 + i}s linear infinite`
            }}
          />
        </div>
      ))}
    </div>
  );

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <style jsx>{`
        @keyframes spin {
          to { transform: rotateY(360deg); }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotateX(0deg); }
          50% { transform: translateY(-20px) rotateX(10deg); }
        }
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(5deg); }
          75% { transform: rotate(-5deg); }
        }
        @keyframes glow {
          0%, 100% { box-shadow: 0 0 5px currentColor; }
          50% { box-shadow: 0 0 20px currentColor, 0 0 30px currentColor; }
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div 
              className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
              style={{
                transform: `translateX(${mousePosition.x * 0.01}px) rotateY(${mousePosition.x * 0.02}deg)`,
                transformStyle: 'preserve-3d'
              }}
            >
              Arpita Baraskar
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-all duration-300 relative group transform hover:scale-110"
                  style={{
                    transform: `perspective(100px) rotateX(${mousePosition.y * 0.01}deg) rotateY(${mousePosition.x * 0.01}deg)`,
                    transformStyle: 'preserve-3d',
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full glow"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20"></div>
        
        <FloatingParticles />
        <GeometricShapes />
        
        <div 
          className="text-center z-10 transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px) perspective(1000px) rotateX(${scrollY * 0.02}deg)`,
            transformStyle: 'preserve-3d'
          }}
        >
          <h1 
            className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in"
            style={{
              transform: `translateZ(50px) rotateY(${mousePosition.x * 0.005}deg)`,
              animation: 'float 6s ease-in-out infinite'
            }}
          >
            Arpita Baraskar
          </h1>
          <p 
            className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in"
            style={{
              transform: `translateZ(30px) rotateX(${mousePosition.y * 0.003}deg)`,
              animationDelay: '0.2s'
            }}
          >
            B.Tech Computer Science | Full Stack Developer | Tech Innovator
          </p>
          <div 
            className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in"
            style={{
              transform: `translateZ(20px)`,
              animationDelay: '0.4s'
            }}
          >
            <div className="text-lg text-cyan-400 font-semibold animate-pulse">CGPA: 9.02</div>
            <div className="hidden md:block w-2 h-2 bg-cyan-400 rounded-full animate-bounce"></div>
            <div className="text-lg text-gray-300">Walchand Institute of Technology</div>
          </div>
          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-110 hover:rotate-1"
              style={{
                boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3)',
                animation: 'glow 2s ease-in-out infinite'
              }}
            >
              Explore My Work
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Enhanced Scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          style={{
            transform: `translateX(-50%) rotateZ(${scrollY * 0.1}deg)`,
            animation: 'wave 3s ease-in-out infinite'
          }}
        >
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 relative">
        <GeometricShapes />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              transform: `perspective(500px) rotateY(${scrollY * 0.02}deg)`,
              animation: 'float 4s ease-in-out infinite'
            }}
          >
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div 
              className="space-y-6"
              style={{
                transform: `translateX(${scrollY * 0.05}px) perspective(800px) rotateY(${scrollY * 0.01}deg)`
              }}
            >
              <p className="text-lg text-gray-300 leading-relaxed transform hover:scale-105 transition-transform duration-300">
                I'm a passionate Computer Science student with a strong foundation in full-stack development 
                and a deep interest in emerging technologies. Currently pursuing my B.Tech at Walchand Institute 
                of Technology with a CGPA of 9.02.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed transform hover:scale-105 transition-transform duration-300">
                As a leader and innovator, I serve as Director of LOL Coding Club and Joint Secretary at WIT, 
                where I organize coding competitions and foster a collaborative learning environment. My expertise 
                spans across modern web technologies, AI/ML, and cloud computing.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div 
                  className="text-center p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-2"
                  style={{
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: '0.5s'
                  }}
                >
                  <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-2 animate-bounce" />
                  <div className="text-2xl font-bold text-white">9.02</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div 
                  className="text-center p-4 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:-rotate-2"
                  style={{
                    animation: 'float 5s ease-in-out infinite',
                    animationDelay: '1s'
                  }}
                >
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2 animate-bounce" />
                  <div className="text-2xl font-bold text-white">Leader</div>
                  <div className="text-sm text-gray-400">Multiple Roles</div>
                </div>
              </div>
            </div>
            
            <div 
              className="space-y-6"
              style={{
                transform: `translateX(-${scrollY * 0.05}px) perspective(800px) rotateY(-${scrollY * 0.01}deg)`
              }}
            >
              <div 
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  transformStyle: 'preserve-3d'
                }}
              >
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-2">
                  <div className="text-white font-medium">B.Tech Computer Science</div>
                  <div className="text-gray-400">Walchand Institute of Technology</div>
                  <div className="text-cyan-400">CGPA: 9.02</div>
                </div>
              </div>
              
              <div 
                className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:-rotate-1"
                style={{
                  animation: 'float 6s ease-in-out infinite',
                  animationDelay: '1s',
                  transformStyle: 'preserve-3d'
                }}
              >
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Leadership</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 transform hover:translateX(10px) transition-transform">
                    <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-gray-300">Director - LOL Coding Club</span>
                  </div>
                  <div className="flex items-center space-x-3 transform hover:translateX(10px) transition-transform">
                    <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-gray-300">Joint Secretary - WIT</span>
                  </div>
                  <div className="flex items-center space-x-3 transform hover:translateX(10px) transition-transform">
                    <Award className="w-4 h-4 text-yellow-400 animate-pulse" />
                    <span className="text-gray-300">NSS Coordinator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30 relative overflow-hidden">
        <FloatingParticles />
        
        <div className="max-w-7xl mx-auto relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              transform: `perspective(500px) rotateX(${scrollY * 0.01}deg)`,
              animation: 'float 4s ease-in-out infinite'
            }}
          >
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105"
                style={{
                  transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg) rotateY(${index % 2 === 0 ? 5 : -5}deg)`,
                  transformStyle: 'preserve-3d',
                  animation: `float ${4 + index}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform += ' translateZ(20px) rotateY(0deg)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = e.currentTarget.style.transform.replace(' translateZ(20px) rotateY(0deg)', '');
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <div 
                    className="flex items-center space-x-4 mb-4"
                    style={{
                      transform: 'translateZ(10px)',
                      animation: 'wave 3s ease-in-out infinite'
                    }}
                  >
                    <div className="text-cyan-400 transform group-hover:scale-125 group-hover:rotate-12 transition-all duration-300">
                      {project.icon}
                    </div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                  </div>
                  <p className="text-gray-300 mb-6 leading-relaxed transform hover:translateZ(5px) transition-transform">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full border border-cyan-500/30 transform hover:scale-110 hover:rotate-2 transition-all duration-300"
                        style={{
                          animationDelay: `${techIndex * 0.1}s`,
                          animation: 'glow 3s ease-in-out infinite'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-all duration-300 transform hover:scale-110 hover:translateY(-2px)">
                      <ExternalLink className="w-4 h-4 animate-pulse" />
                      <span>View Project</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-all duration-300 transform hover:scale-110 hover:translateY(-2px)">
                      <Github className="w-4 h-4 animate-pulse" />
                      <span>Source Code</span>
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 relative">
        <GeometricShapes />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{
              animation: 'float 4s ease-in-out infinite'
            }}
          >
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div 
                key={index} 
                className="group transform hover:scale-105 transition-all duration-300"
                style={{
                  animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                  animationDelay: `${index * 0.2}s`
                }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium transform group-hover:translateX(5px) transition-transform">
                    {skill.name}
                  </span>
                  <span className="text-cyan-400 transform group-hover:scale-125 transition-transform">
                    {skill.level}%
                  </span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-4 overflow-hidden relative">
                  <div
                    className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 group-hover:animate-pulse relative overflow-hidden`}
                    style={{ 
                      width: `${skill.level}%`,
                      boxShadow: '0 0 20px rgba(6, 182, 212, 0.5)'
                    }}
                  >
                    <div 
                      className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"
                      style={{ animation: 'glow 2s ease-in-out infinite' }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 
              className="text-2xl font-semibold text-white mb-8"
              style={{ animation: 'wave 3s ease-in-out infinite' }}
            >
              Certifications & Tools
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Google Cloud Certified", "MERN Stack", "Flutter", "AI/ML", "Git/GitHub", "Jitsi Integration"].map((cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-110 hover:rotate-2"
                  style={{
                    animation: `float ${4 + index * 0.3}s ease-in-out infinite`,
                    animationDelay: `${index * 0.2}s`,
                    boxShadow: '0 4px 15px rgba(147, 51, 234, 0.2)'
                  }}
                >
                  <span className="text-purple-400 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30 relative">
        <FloatingParticles />
        
        <div className="max-w-6xl mx-auto relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
            Experience & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 
                className="text-2xl font-semibold text-cyan-400 mb-8"
                style={{ animation: 'wave 3s ease-in-out infinite' }}
              >
                Professional Experience
              </h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:translateX-4 hover:scale-105"
                    style={{
                      animation: `float ${4 + index}s ease-in-out infinite`,
                      animationDelay: `${index * 0.3}s`,
                      transformStyle: 'preserve-3d'
                    }}
                  >
                    <h4 className="text-xl font-semibold text-white transform hover:translateZ(10px) transition-transform">
                      {exp.title}
                    </h4>
                    <p className="text-cyan-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 
                className="text-2xl font-semibold text-purple-400 mb-8"
                style={{ animation: 'wave 3s ease-in-out infinite', animationDelay: '0.5s' }}
              >
                Key Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:translateX-4 hover:scale-105"
                    style={{
                      animation: `float ${3 + index * 0.5}s ease-in-out infinite`,
                      animationDelay: `${index * 0.2}s`
                    }}
                  >
                    <Award 
                      className="w-6 h-6 text-yellow-400 flex-shrink-0 transform hover:rotate-12 hover:scale-125 transition-all duration-300" 
                      style={{ animation: 'glow 2s ease-in-out infinite' }}
                    />
                    <span className="text-white transform hover:translateX(5px) transition-transform">
                      {achievement}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 relative">
        <GeometricShapes />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 
            className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
            style={{ animation: 'float 4s ease-in-out infinite' }}
          >
            Let's Connect
          </h2>
          <p 
            className="text-xl text-gray-300 mb-12"
            style={{ animation: 'wave 3s ease-in-out infinite' }}
          >
            Ready to collaborate on innovative projects or discuss opportunities? Let's talk!
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:arpitabaraskar22@gmail.com"
              className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-2"
              style={{ animation: 'float 5s ease-in-out infinite' }}
            >
              <Mail className="w-8 h-8 text-red-400 group-hover:animate-bounce transform group-hover:scale-125" />
              <div className="text-left">
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400 text-sm">arpitabaraskar22@gmail.com</div>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/arpita-baraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-110 hover:-rotate-2"
              style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '0.5s' }}
            >
              <Linkedin className="w-8 h-8 text-blue-400 group-hover:animate-bounce transform group-hover:scale-125" />
              <div className="text-left">
                <div className="text-white font-semibold">LinkedIn</div>
                <div className="text-gray-400 text-sm">arpita-baraskar</div>
              </div>
            </a>
            
            <a
              href="https://github.com/ArpitaBaraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-110 hover:rotate-2"
              style={{ animation: 'float 5s ease-in-out infinite', animationDelay: '1s' }}
            >
              <Github className="w-8 h-8 text-purple-400 group-hover:animate-bounce transform group-hover:scale-125" />
              <div className="text-left">
                <div className="text-white font-semibold">GitHub</div>
                <div className="text-gray-400 text-sm">ArpitaBaraskar</div>
              </div>
            </a>
          </div>
          
          <div 
            className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 transform hover:scale-105 transition-all duration-300"
            style={{ 
              animation: 'float 6s ease-in-out infinite',
              boxShadow: '0 20px 40px rgba(6, 182, 212, 0.1)'
            }}
          >
            <h3 
              className="text-2xl font-semibold text-white mb-6"
              style={{ animation: 'wave 3s ease-in-out infinite' }}
            >
              Send a Message
            </h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 transform focus:scale-105"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-all duration-300 transform focus:scale-105 resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:rotate-1"
                style={{ 
                  boxShadow: '0 10px 25px rgba(6, 182, 212, 0.3)',
                  animation: 'glow 3s ease-in-out infinite'
                }}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer 
        className="py-8 px-6 bg-slate-900 border-t border-gray-800 relative"
        style={{ animation: 'wave 4s ease-in-out infinite' }}
      >
        <FloatingParticles />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <p className="text-gray-400 transform hover:scale-105 transition-transform">
            © 2024 Arpita Baraskar. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
