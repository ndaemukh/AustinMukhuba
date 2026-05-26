import { useState, useEffect } from 'react';
import { Mail, Phone, Linkedin, Github, ExternalLink, Menu, X, Code2, Rocket, Award, Heart, Database, LucideIcon } from 'lucide-react';
import MyProjects from './MyProjects';

export default function Portfolio() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = ['home', 'about', 'experience', 'skills', 'projects', 'education'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setMobileMenuOpen(false);
    }
  };

  const NavLink = ({ id, label, icon: Icon }: { id: string; label: string; icon: LucideIcon }) => (
    <button
      onClick={() => scrollToSection(id)}
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-lg transition-all duration-300 ${
        activeSection === id
          ? 'bg-white/20 text-white font-semibold'
          : 'text-gray-700 hover:bg-white/10 hover:text-gray-900'
      }`}
    >
      <Icon size={18} />
      <span>{label}</span>
    </button>
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 font-sans">
      {/* Mobile Menu Button */}
                <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        className={`lg:hidden fixed top-6 left-6 z-50 p-3 rounded-xl shadow-xl transition-all duration-300 ${
          scrolled ? 'bg-white' : 'bg-[#D4B5A0]'
        }`}
      >
        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

      {/* Enhanced Sidebar */}
      <aside className={`fixed left-0 top-0 h-screen w-80 bg-gradient-to-b from-[#D4B5A0] to-[#C9A589] overflow-y-auto transition-transform duration-300 z-40 shadow-2xl ${
        mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'
      } lg:translate-x-0`}>
        <div className="p-8">
          {/* Profile Photo with Glow */}
          <div className="flex justify-center mb-8">
            <div className="relative">
              <div className="absolute inset-0 bg-white/30 rounded-full blur-xl"></div>
              <div className="relative w-44 h-44 rounded-full overflow-hidden bg-white shadow-2xl ring-4 ring-white/50">
                <img
                  src="assets/Profilepicture1.jpg"
                  alt="Ndaedzo Austin Mukhuba"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-1">Ndaedzo Austin Mukhuba</h2>
            <p className="text-sm text-gray-700 font-medium">Full Stack Developer</p>
          </div>

          {/* Navigation */}
          <nav className="mb-8 space-y-2">
            <NavLink id="home" label="Home" icon={Rocket} />
            <NavLink id="about" label="About" icon={Heart} />
            <NavLink id="experience" label="Experience" icon={Code2} />
            <NavLink id="skills" label="Skills" icon={Code2} />
            <NavLink id="projects" label="Projects" icon={Rocket} />
            <NavLink id="education" label="Education" icon={Award} />
          </nav>

          {/* Contact Info - Compact */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5 mb-6">
            <h3 className="text-sm font-bold text-gray-900 mb-4 uppercase tracking-wide">Contact</h3>
            <div className="space-y-3 text-sm">
              <a href="mailto:ndaemukhuba@gmail.com" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <Mail size={16} className="flex-shrink-0" />
                <span className="truncate">ndaemukhuba@gmail.com</span>
              </a>
              <a href="tel:+27658987624" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <Phone size={16} />
                <span>+27 65 898 7624</span>
              </a>
              <a href="https://linkedin.com/in/ndaedzo-mukhuba-71759033b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <Linkedin size={16} />
                <span>LinkedIn</span>
              </a>
              <a href="https://github.com/ndaedxo" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors">
                <Github size={16} />
                <span>GitHub</span>
              </a>
            </div>
          </div>

          {/* Quick Info */}
          <div className="bg-white/20 backdrop-blur-sm rounded-xl p-5">
            <h3 className="text-sm font-bold text-gray-900 mb-3 uppercase tracking-wide">Quick Info</h3>
            <div className="space-y-3 text-sm text-gray-700">
              <div>
                <p className="font-semibold text-gray-900">Education</p>
                <p>BACHELOR OF COMPUTER AND INFORMATION SCIENCES</p>
                <p className="text-xs">IIE Varsity College</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Location</p>
                <p>Johannesburg, South Africa</p>
              </div>
              <div>
                <p className="font-semibold text-gray-900">Languages</p>
                <p>English, Venda</p>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="lg:ml-80 min-h-screen">
        {/* Hero Section - More Dynamic */}
        <section id="home" className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-8 py-24 md:px-16 lg:px-24 overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxIDAgNiAyLjY5IDYgNnMtMi42OSA2LTYgNi02LTIuNjktNi02IDIuNjktNiA2LTZ6TTAgMGg2MHY2MEgweiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMDUpIi8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="relative z-10">
            <div className="inline-block mb-4 px-4 py-2 bg-[#D4B5A0]/20 backdrop-blur-sm rounded-full">
              <p className="text-[#D4B5A0] text-sm font-semibold">Welcome to my portfolio</p>
            </div>
            <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
              NDAEDZO AUSTIN MUKHUBA
            </h1>
            <p className="text-2xl md:text-3xl text-gray-300 mb-8">
              Full Stack Developer & Solutions Architect
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-[#D4B5A0] text-gray-900 font-semibold rounded-lg hover:bg-[#C9A589] transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    View Projects
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="px-8 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
              >
                About Me
              </button>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="px-8 py-20 md:px-16 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-[#D4B5A0]/10 rounded-full">
              <p className="text-[#C9A589] text-sm font-semibold uppercase tracking-wide">About Me</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">Building Digital Solutions</h2>
            <p className="text-xl leading-relaxed text-gray-600 mb-8">
              I'm a dedicated and passionate Full Stack Developer with a deep expertise in modern web technologies and emerging fields like AI and blockchain. My skill set spans the entire development lifecycle, from designing intuitive front-end interfaces to building robust and scalable back-end systems.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="text-4xl font-bold text-[#C9A589] mb-2">1+</div>
                <div className="text-gray-600 font-medium">Years Experience</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="text-4xl font-bold text-[#C9A589] mb-2">12+</div>
                <div className="text-gray-600 font-medium">Projects Completed</div>
              </div>
              <div className="text-center p-6 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl">
                <div className="text-4xl font-bold text-[#C9A589] mb-2">15+</div>
                <div className="text-gray-600 font-medium">Technologies Mastered</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="px-8 py-20 md:px-16 lg:px-24 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-[#D4B5A0]/10 rounded-full">
              <p className="text-[#C9A589] text-sm font-semibold uppercase tracking-wide">Experience</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Work History</h2>

            <div className="space-y-8">
              <div className="relative pl-8 pb-8 border-l-2 border-[#D4B5A0]">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#C9A589] rounded-full ring-4 ring-white"></div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">Full-Stack .NET Developer</h3>
                    <span className="px-4 py-1 bg-[#D4B5A0]/20 text-[#8B6F47] text-sm font-semibold rounded-full">March 2025 – November 2025</span>
                  </div>
                  <p className="text-lg text-[#C9A589] font-semibold mb-4">Emeris</p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Delivered multiple production-grade web and cross-platform applications for external companies using C#, ASP.NET MVC/Core, Web API, and .NET MAUI. Built and maintained scalable backend services with RESTful APIs and integrated PostgreSQL/MySQL databases.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Developed responsive front-end and customized UI themes. Owned end-to-end feature delivery from requirements gathering to Azure/cloud deployment. Applied Git version control, code reviews, and agile methodologies daily.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">C#</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">ASP.NET MVC/Core</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">Web API</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">.NET MAUI</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">SQL</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-8 pb-8 border-l-2 border-[#D4B5A0]">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#C9A589] rounded-full ring-4 ring-white"></div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">Intern Full-Stack Developer</h3>
                    <span className="px-4 py-1 bg-[#D4B5A0]/20 text-[#8B6F47] text-sm font-semibold rounded-full">January 2025 – March 2025</span>
                  </div>
                  <p className="text-lg text-[#C9A589] font-semibold mb-4">ISA Holdings</p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Developed full-stack web applications using modern MVC frameworks (Laravel/Vue.js) – strong foundation in clean architecture, plugin systems, and RESTful services. Designed and optimized relational databases (MySQL/PostgreSQL).
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Performed server setup, deployment, and troubleshooting on Linux environments.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">PHP</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">Laravel</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">PostgreSQL</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">Linux</span>
                  </div>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-[#D4B5A0] rounded-full ring-4 ring-white"></div>
                <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
                  <div className="flex justify-between items-start mb-3 flex-wrap gap-2">
                    <h3 className="text-2xl font-bold text-gray-900">VC Cares Vice Chairperson</h3>
                    <span className="px-4 py-1 bg-gray-100 text-gray-600 text-sm font-semibold rounded-full">January 2023 – November 2025</span>
                  </div>
                  <p className="text-lg text-[#C9A589] font-semibold mb-4">IIE Varsity College</p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Organised and led student activities such as fundraisers and awareness campaigns, contributing to the success of community outreach programs. Coordinated school visits and engaged students in educational activities, including reading and classroom improvement projects.
                  </p>
                  <p className="text-gray-600 leading-relaxed mb-3">
                    Developed leadership, teamwork, and organisational skills by managing events that fostered meaningful student and community engagement.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">Leadership</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">Event Management</span>
                    <span className="px-3 py-1 bg-[#D4B5A0]/10 text-[#8B6F47] rounded-full text-sm font-medium">Community Outreach</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="px-8 py-20 md:px-16 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-[#D4B5A0]/10 rounded-full">
              <p className="text-[#C9A589] text-sm font-semibold uppercase tracking-wide">Skills</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Technical Expertise</h2>

            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-[#D4B5A0] transition-all duration-300">
                <Code2 className="text-[#C9A589] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Frontend</h3>
                <div className="flex flex-wrap gap-2">
                  {['React.js', 'TypeScript', 'Tailwind CSS', 'HTML5', 'CSS3', 'Vue.js', 'Flutter'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-[#D4B5A0]/10 text-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-[#D4B5A0] transition-all duration-300">
                <Rocket className="text-[#C9A589] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Backend</h3>
                <div className="flex flex-wrap gap-2">
                  {['ASP.Net Core', 'Django', 'Flask', 'Python', 'Laravel', 'PHP'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-[#D4B5A0]/10 text-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-[#D4B5A0] transition-all duration-300">
                <Database className="text-[#C9A589] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">Databases</h3>
                <div className="flex flex-wrap gap-2">
                  {['PostgreSQL', 'MongoDB', 'SSMS', 'MySQL'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-[#D4B5A0]/10 text-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-xl border border-gray-200 hover:border-[#D4B5A0] transition-all duration-300">
                <Heart className="text-[#C9A589] mb-4" size={32} />
                <h3 className="text-xl font-bold mb-4 text-gray-900">DevOps & Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {['Git', 'Docker', 'Azure', 'VS Code', 'Postman', 'Linux'].map(skill => (
                    <span key={skill} className="px-4 py-2 bg-[#D4B5A0]/10 text-gray-700 rounded-lg text-sm font-medium">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <MyProjects />

        {/* Education */}
        <section id="education" className="px-8 py-20 md:px-16 lg:px-24 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="inline-block mb-4 px-4 py-1 bg-[#D4B5A0]/10 rounded-full">
              <p className="text-[#C9A589] text-sm font-semibold uppercase tracking-wide">Education</p>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-900">Academic Background</h2>

            <div className="space-y-6">
              <div className="flex items-start gap-6 p-6 bg-gradient-to-r from-[#D4B5A0]/5 to-transparent rounded-xl border-l-4 border-[#C9A589] hover:shadow-lg transition-all duration-300">
                <Award className="text-[#C9A589] flex-shrink-0" size={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-1">BACHELOR OF COMPUTER AND INFORMATION SCIENCES</h3>
                  <p className="text-gray-600">IIE Varsity College</p>
                  <p className="text-sm text-gray-500 mt-1">Comprehensive degree covering computer science fundamentals, information systems, and modern development practices</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="px-8 py-12 md:px-16 lg:px-24 bg-gray-900 text-gray-300">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">Let's Connect</h3>
            <p className="mb-6">Interested in collaboration or have a project in mind?</p>
            <div className="flex justify-center gap-6 mb-8">
              <a href="mailto:ndaemukhuba@gmail.com" className="hover:text-[#D4B5A0] transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://linkedin.com/in/ndaedzo-mukhuba-71759033b" className="hover:text-[#D4B5A0] transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://github.com/ndaedxo" className="hover:text-[#D4B5A0] transition-colors">
                <Github size={24} />
              </a>
            </div>
            <div className="border-t border-gray-800 pt-8">
              <p className="text-sm">© 2024 Ndaedzo Austin Mukhuba. All rights reserved.</p>
              <p className="text-sm mt-2 text-gray-500">Built with React & Tailwind CSS</p>
            </div>
          </div>
        </footer>
      </main>

      {/* Overlay for mobile menu */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 lg:hidden transition-opacity duration-300"
          onClick={() => setMobileMenuOpen(false)}
        ></div>
      )}
    </div>
  );
}
