
import React, { useEffect, useState } from 'react';
import { ChevronDown, Github, Linkedin, Mail, ExternalLink, Code, Users, Award, BookOpen } from 'lucide-react';

const Index = () => {
  const [scrollY, setScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "KrishiVaidya",
      description: "AI-driven crop disease prediction using CNN/ResNet with Flutter and weather data integration",
      tech: ["AI/ML", "Flutter", "CNN", "ResNet", "Weather API"],
      gradient: "from-green-400 to-blue-500"
    },
    {
      title: "Mentor Connect",
      description: "MERN stack mentorship platform with Jitsi video integration for seamless connections",
      tech: ["MERN", "Jitsi", "Video Chat", "MongoDB"],
      gradient: "from-purple-400 to-pink-500"
    },
    {
      title: "Fast-Pay",
      description: "Digital payment application with secure payment gateway API integration",
      tech: ["Payment Gateway", "API", "Security", "UI/UX"],
      gradient: "from-yellow-400 to-red-500"
    },
    {
      title: "Spotify Clone",
      description: "Responsive music streaming UI built with HTML and CSS, pixel-perfect design",
      tech: ["HTML", "CSS", "Responsive", "UI Design"],
      gradient: "from-blue-400 to-purple-500"
    }
  ];

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Java", level: 88 },
    { name: "MongoDB", level: 75 },
    { name: "MySQL", level: 82 },
    { name: "Google Cloud", level: 70 },
    { name: "HTML/CSS", level: 95 }
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

  return (
    <div className="min-h-screen bg-slate-900 text-white overflow-x-hidden">
      <style>
        {`
          @keyframes fade-in {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
          .animate-fade-in {
            animation: fade-in 0.8s ease-out forwards;
          }
        `}
      </style>

      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-cyan-500/20">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              Arpita Baraskar
            </div>
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Projects', 'Skills', 'Experience', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="hover:text-cyan-400 transition-colors duration-300 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-400 transition-all duration-300 group-hover:w-full"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-cyan-900/20"></div>
        
        {/* Floating elements */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-cyan-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            ></div>
          ))}
        </div>

        <div 
          className="text-center z-10 transform"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`
          }}
        >
          <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-fade-in">
            Arpita Baraskar
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300 animate-fade-in">
            B.Tech Computer Science | Full Stack Developer | Tech Innovator
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center items-center animate-fade-in">
            <div className="text-lg text-cyan-400 font-semibold">CGPA: 9.02</div>
            <div className="hidden md:block w-2 h-2 bg-cyan-400 rounded-full"></div>
            <div className="text-lg text-gray-300">Walchand Institute of Technology</div>
          </div>
          <div className="mt-12">
            <a
              href="#about"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/25"
            >
              Explore My Work
              <ChevronDown className="ml-2 w-5 h-5 animate-bounce" />
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-cyan-400 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-300 leading-relaxed">
                I'm a passionate Computer Science student with a strong foundation in full-stack development 
                and a deep interest in emerging technologies. Currently pursuing my B.Tech at Walchand Institute 
                of Technology with a CGPA of 9.02.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed">
                As a leader and innovator, I serve as Director of LOL Coding Club and Joint Secretary at WIT, 
                where I organize coding competitions and foster a collaborative learning environment. My expertise 
                spans across modern web technologies, AI/ML, and cloud computing.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-cyan-500/20 hover:border-cyan-500/50 transition-colors">
                  <BookOpen className="w-8 h-8 text-cyan-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">9.02</div>
                  <div className="text-sm text-gray-400">CGPA</div>
                </div>
                <div className="text-center p-4 bg-slate-800/50 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
                  <Users className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">Leader</div>
                  <div className="text-sm text-gray-400">Multiple Roles</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20 hover:border-cyan-500/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-cyan-400 mb-4">Education</h3>
                <div className="space-y-2">
                  <div className="text-white font-medium">B.Tech Computer Science</div>
                  <div className="text-gray-400">Walchand Institute of Technology</div>
                  <div className="text-cyan-400">CGPA: 9.02</div>
                </div>
              </div>
              
              <div className="p-6 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-purple-500/20 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Leadership</h3>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">Director - LOL Coding Club</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">Joint Secretary - WIT</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-4 h-4 text-yellow-400" />
                    <span className="text-gray-300">NSS Coordinator</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-500 transform hover:scale-105 hover:rotate-1"
                style={{
                  transform: `perspective(1000px) rotateX(${scrollY * 0.01}deg)`
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500`}></div>
                
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 bg-slate-700 text-cyan-400 text-sm rounded-full border border-cyan-500/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <button className="flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ExternalLink className="w-4 h-4" />
                      <span>View Project</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors">
                      <Github className="w-4 h-4" />
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
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="group">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-white font-medium">{skill.name}</span>
                  <span className="text-cyan-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-slate-700 rounded-full h-3 overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-white mb-8">Certifications & Tools</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {["Google Cloud Certified", "MERN Stack", "Flutter", "AI/ML", "Git/GitHub", "Jitsi Integration"].map((cert, index) => (
                <div
                  key={index}
                  className="px-6 py-3 bg-gradient-to-r from-slate-800 to-slate-900 rounded-full border border-purple-500/30 hover:border-purple-500/70 transition-all duration-300 transform hover:scale-105"
                >
                  <span className="text-purple-400 font-medium">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-6 bg-slate-800/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Experience & Achievements
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-cyan-400 mb-8">Professional Experience</h3>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-cyan-500/50 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                    <p className="text-cyan-400 mb-2">{exp.company}</p>
                    <p className="text-gray-400 text-sm mb-3">{exp.period}</p>
                    <p className="text-gray-300">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold text-purple-400 mb-8">Key Achievements</h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:translate-x-2"
                  >
                    <Award className="w-6 h-6 text-yellow-400 flex-shrink-0" />
                    <span className="text-white">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-8 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Let's Connect
          </h2>
          <p className="text-xl text-gray-300 mb-12">
            Ready to collaborate on innovative projects or discuss opportunities? Let's talk!
          </p>
          
          <div className="flex justify-center space-x-8 mb-12">
            <a
              href="mailto:arpitabaraskar22@gmail.com"
              className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-red-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Mail className="w-8 h-8 text-red-400 group-hover:animate-bounce" />
              <div className="text-left">
                <div className="text-white font-semibold">Email</div>
                <div className="text-gray-400 text-sm">arpitabaraskar22@gmail.com</div>
              </div>
            </a>
            
            <a
              href="https://linkedin.com/in/arpita-baraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Linkedin className="w-8 h-8 text-blue-400 group-hover:animate-bounce" />
              <div className="text-left">
                <div className="text-white font-semibold">LinkedIn</div>
                <div className="text-gray-400 text-sm">arpita-baraskar</div>
              </div>
            </a>
            
            <a
              href="https://github.com/ArpitaBaraskar"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-3 p-6 bg-gradient-to-r from-slate-800 to-slate-900 rounded-xl border border-gray-700 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105"
            >
              <Github className="w-8 h-8 text-purple-400 group-hover:animate-bounce" />
              <div className="text-left">
                <div className="text-white font-semibold">GitHub</div>
                <div className="text-gray-400 text-sm">ArpitaBaraskar</div>
              </div>
            </a>
          </div>
          
          <div className="p-8 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl border border-cyan-500/20">
            <h3 className="text-2xl font-semibold text-white mb-6">Send a Message</h3>
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
                />
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full p-4 bg-slate-700 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:border-cyan-400 focus:outline-none transition-colors resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 rounded-lg text-white font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 bg-slate-900 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Arpita Baraskar. Crafted with passion and innovation.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
