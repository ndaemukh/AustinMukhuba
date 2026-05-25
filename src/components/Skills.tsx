import { Code2, Layout, Database, Github, Terminal, Shield, Cloud, Zap, Download } from 'lucide-react';
import { motion } from 'framer-motion';

const skills = [
  {
    category: "Frontend",
    icon: <Layout className="w-7 h-7" />,
    items: ["React.js", "TypeScript", "Tailwind CSS", "React Native", "HTML5", "CSS3"],
    color: "from-blue-500 to-cyan-500",
    bgColor: "from-blue-50 to-cyan-50",
    darkBgColor: "from-blue-900/20 to-cyan-900/20"
  },
  {
    category: "Backend",
    icon: <Database className="w-7 h-7" />,
    items: ["ASP.Net Core", "Django", "Flask"],
    color: "from-emerald-500 to-teal-500",
    bgColor: "from-emerald-50 to-teal-50",
    darkBgColor: "from-emerald-900/20 to-teal-900/20"
  },
  {
    category: "Databases",
    icon: <Database className="w-7 h-7" />,
    items: ["SSMS", "PostgreSQL", "MongoDB", "Oracle", "MySQLWorkbench"],
    color: "from-purple-500 to-pink-500",
    bgColor: "from-purple-50 to-pink-50",
    darkBgColor: "from-purple-900/20 to-pink-900/20"
  },
  {
    category: "DevOps",
    icon: <Github className="w-7 h-7" />,
    items: ["Git", "Docker", "Azure"],
    color: "from-orange-500 to-red-500",
    bgColor: "from-orange-50 to-red-50",
    darkBgColor: "from-orange-900/20 to-red-900/20"
  },
  {
    category: "Tools",
    icon: <Terminal className="w-7 h-7" />,
    items: ["VS Code", "Figma", "Postman", "Visual Studio"],
    color: "from-indigo-500 to-blue-500",
    bgColor: "from-indigo-50 to-blue-50",
    darkBgColor: "from-indigo-900/20 to-blue-900/20"
  },
  {
    category: "Programming",
    icon: <Code2 className="w-7 h-7" />,
    items: ["JavaScript", "Python", "C", "C++", "C#", "Java", "HTML", "CSS"],
    color: "from-green-500 to-emerald-500",
    bgColor: "from-green-50 to-emerald-50",
    darkBgColor: "from-green-900/20 to-emerald-900/20"
  },
  {
    category: "Security",
    icon: <Shield className="w-7 h-7" />,
    items: ["OAuth", "JWT", "HTTPS", "Web Security"],
    color: "from-red-500 to-pink-500",
    bgColor: "from-red-50 to-pink-50",
    darkBgColor: "from-red-900/20 to-pink-900/20"
  },
  {
    category: "Cloud & AI",
    icon: <Cloud className="w-7 h-7" />,
    items: ["Machine Learning", "NLP", "OpenAI", "Azure AI"],
    color: "from-violet-500 to-purple-500",
    bgColor: "from-violet-50 to-purple-50",
    darkBgColor: "from-violet-900/20 to-purple-900/20"
  }
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { opacity: 1, y: 0, scale: 1 }
};

const Skills = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/assets/NdaedzoAustinMukhuba_CV.pdf';
    link.download = 'NdaedzoAustinMukhuba_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 dark:from-slate-900 dark:via-slate-800 dark:to-indigo-900">
      <div className="container mx-auto px-6 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto mb-8">
            A comprehensive toolkit of technologies and frameworks I use to bring ideas to life
          </p>
          
          {/* CV Download Button */}
          <motion.button
            onClick={handleDownloadCV}
            className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <Download className="w-5 h-5 group-hover:scale-110 transition-transform" />
            Download My CV
            <span className="text-sm opacity-90">(PDF)</span>
          </motion.button>
        </motion.div>
        
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {skills.map((skillGroup, index) => (
            <motion.div
              key={index}
              className="group relative"
              variants={item}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className={`bg-gradient-to-br ${skillGroup.bgColor} dark:${skillGroup.darkBgColor} rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm h-full`}>
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-br ${skillGroup.color} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {skillGroup.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <motion.span
                      key={skillIndex}
                      className="px-3 py-2 bg-white/70 dark:bg-slate-800/70 rounded-xl text-sm font-medium text-slate-700 dark:text-slate-300 border border-white/50 dark:border-slate-700/50 backdrop-blur-sm hover:bg-white dark:hover:bg-slate-700 transition-all duration-200 cursor-default"
                      whileHover={{ scale: 1.05, y: -2 }}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: skillIndex * 0.05 }}
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </div>
              
              {/* Hover effect overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.color} opacity-0 group-hover:opacity-5 rounded-3xl transition-opacity duration-300 pointer-events-none`}></div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Additional info section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 text-center"
        >
          <div className="bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-slate-200/50 dark:border-slate-700/50 max-w-4xl mx-auto">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Zap className="w-6 h-6 text-yellow-500" />
              <h3 className="text-xl font-semibold text-slate-800 dark:text-slate-200">
                Always Learning & Growing
              </h3>
            </div>
            <p className="text-slate-600 dark:text-slate-300 mb-6">
              I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best practices in software development.
            </p>
            
            {/* CV Download Button in Info Section */}
            <motion.button
              onClick={handleDownloadCV}
              className="group bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-700 hover:to-teal-700 text-white px-6 py-3 rounded-xl font-medium transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download className="w-4 h-4 group-hover:scale-110 transition-transform" />
              Get My Full CV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;