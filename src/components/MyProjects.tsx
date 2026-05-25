import { useState } from 'react'
import { motion } from 'framer-motion'
import ProjectCard from './ProjectCard'

type ProjectCategory = 'all' | 'gen-ai' | 'ml' | 'ai-eng' | 'mlops' | 'react' | 'django' | 'python'

const projects = [
  {
    id: 1,
    category: 'gen-ai',
    title: 'AI Chatbot with RAG',
    description: 'Retrieval-Augmented Generation chatbot that combines LLM capabilities with vector knowledge base retrieval for accurate, context-aware responses.',
    image: 'https://picsum.photos/400/252',
    githubLink: 'https://github.com/ndaemukh/ai-chatbot-rag',
    demoLink: '#',
    tags: ['RAG', 'LangChain', 'OpenAI', 'Vector Search', 'ChromaDB', 'Python']
  },
  {
    id: 2,
    category: 'ai-eng',
    title: 'AI Code Review Assistant',
    description: 'Automated code review tool that analyzes pull requests for bugs, style issues, and security vulnerabilities using AST parsing and AI-powered analysis.',
    image: 'https://picsum.photos/400/253',
    githubLink: 'https://github.com/ndaemukh/ai-code-review-assistant',
    demoLink: '#',
    tags: ['AST Parsing', 'Static Analysis', 'Python', 'Git Hooks', 'Automation']
  },
  {
    id: 3,
    category: 'gen-ai',
    title: 'AI Content Generator',
    description: 'Intelligent content generation platform leveraging LLMs to create marketing copy, blog posts, and brand profiles with customizable voice and tone.',
    image: 'https://picsum.photos/400/254',
    githubLink: 'https://github.com/ndaemukh/ai-content-generator',
    demoLink: '#',
    tags: ['GPT', 'Prompt Engineering', 'NLP', 'Content Generation', 'Python']
  },
  {
    id: 4,
    category: 'gen-ai',
    title: 'AI Image Generator',
    description: 'Stable Diffusion-powered image generation application with local studio, batch processing, LoRA support, and variation generation capabilities.',
    image: 'https://picsum.photos/400/255',
    githubLink: 'https://github.com/ndaemukh/ai-image-generator-app',
    demoLink: '#',
    tags: ['Stable Diffusion', 'Diffusers', 'LoRA', 'PyTorch', 'Computer Vision', 'Python']
  },
  {
    id: 5,
    category: 'ml',
    title: 'AI-Powered Financial Forecasting',
    description: 'Advanced financial forecasting system using gradient boosting and time series models for price prediction, backtesting, and portfolio analysis.',
    image: 'https://picsum.photos/400/256',
    githubLink: 'https://github.com/ndaemukh/ai-powered-financial-forecasting',
    demoLink: '#',
    tags: ['XGBoost', 'Time Series', 'Prophet', 'Backtesting', 'Feature Engineering', 'Python']
  },
  {
    id: 6,
    category: 'ml',
    title: 'Customer Churn Prediction',
    description: 'ML-based churn prediction system that analyzes customer behavior patterns to identify at-risk accounts using ensemble classification models.',
    image: 'https://picsum.photos/400/257',
    githubLink: 'https://github.com/ndaemukh/customer-churn-prediction',
    demoLink: '#',
    tags: ['Random Forest', 'XGBoost', 'Classification', 'Feature Engineering', 'SMOTE', 'Python']
  },
  {
    id: 7,
    category: 'mlops',
    title: 'End-to-End MLOps Platform',
    description: 'Comprehensive MLOps platform with experiment tracking, model registry, DVC pipeline orchestration, and CI/CD integration for production ML workflows.',
    image: 'https://picsum.photos/400/258',
    githubLink: 'https://github.com/ndaemukh/end-to-end-mlops-platform',
    demoLink: '#',
    tags: ['MLflow', 'DVC', 'Airflow', 'Docker', 'Experiment Tracking', 'CI/CD']
  },
  {
    id: 8,
    category: 'ml',
    title: 'Fake News Detection System',
    description: 'NLP-driven fake news detection system using TF-IDF vectorization and ensemble classifiers to identify misinformation in news articles.',
    image: 'https://picsum.photos/400/259',
    githubLink: 'https://github.com/ndaemukh/fake-news-detection-system',
    demoLink: '#',
    tags: ['TF-IDF', 'NLP', 'Ensemble Learning', 'Scikit-learn', 'Text Classification', 'Python']
  },
  {
    id: 9,
    category: 'ml',
    title: 'House Price Prediction',
    description: 'ML-powered regression system for house price estimation using feature engineering, regularization, and comprehensive data preprocessing pipelines.',
    image: 'https://picsum.photos/400/260',
    githubLink: 'https://github.com/ndaemukh/house-price-prediction',
    demoLink: '#',
    tags: ['Ridge Regression', 'Lasso', 'Feature Engineering', 'Pandas', 'Scikit-learn', 'Python']
  },
  {
    id: 10,
    category: 'ml',
    title: 'Image Classification App',
    description: 'Waste classification system using transfer learning with torchvision models (ResNet, EfficientNet) to categorize recyclable materials from images.',
    image: 'https://picsum.photos/400/261',
    githubLink: 'https://github.com/ndaemukh/image-classification-app',
    demoLink: '#',
    tags: ['PyTorch', 'ResNet', 'Transfer Learning', 'EfficientNet', 'Computer Vision', 'Python']
  },
  {
    id: 11,
    category: 'mlops',
    title: 'ML Model Deployment Pipeline',
    description: 'End-to-end ML model deployment pipeline with Docker containerization, FastAPI REST serving, and CI/CD automation via GitHub Actions.',
    image: 'https://picsum.photos/400/262',
    githubLink: 'https://github.com/ndaemukh/ml-model-deployment-pipeline',
    demoLink: '#',
    tags: ['FastAPI', 'Docker', 'GitHub Actions', 'REST API', 'CI/CD', 'Python']
  },
  {
    id: 12,
    category: 'ml',
    title: 'Movie Recommendation System',
    description: 'Hybrid recommendation engine combining collaborative filtering and content-based approaches to suggest movies based on user preferences.',
    image: 'https://picsum.photos/400/263',
    githubLink: 'https://github.com/ndaemukh/movie-recommendation-system',
    demoLink: '#',
    tags: ['Collaborative Filtering', 'Matrix Factorization', 'SVD', 'Content-Based', 'Pandas', 'Python']
  },
  {
    id: 13,
    category: 'gen-ai',
    title: 'Multi-Agent AI Assistant',
    description: 'Sophisticated multi-agent AI system where specialized agents collaborate autonomously on complex tasks including research, analysis, and content generation.',
    image: 'https://picsum.photos/400/264',
    githubLink: 'https://github.com/ndaemukh/multi-agent-ai-assistant',
    demoLink: '#',
    tags: ['Multi-Agent', 'LangChain', 'LLM', 'Orchestration', 'Tool Use', 'Python']
  },
  {
    id: 14,
    category: 'ml',
    title: 'Real-Time Object Detection',
    description: 'YOLOv8-based real-time object detection system with video stream processing, image annotation, and benchmark evaluation pipelines.',
    image: 'https://picsum.photos/400/265',
    githubLink: 'https://github.com/ndaemukh/real-time-object-detection-system',
    demoLink: '#',
    tags: ['YOLOv8', 'PyTorch', 'Computer Vision', 'OpenCV', 'Real-Time Inference', 'Python']
  },
  {
    id: 15,
    category: 'ai-eng',
    title: 'Resume Screening AI',
    description: 'AI-powered resume screening tool that automatically matches candidate resumes with job descriptions using NLP-based skill extraction and text matching.',
    image: 'https://picsum.photos/400/266',
    githubLink: 'https://github.com/ndaemukh/resume-screening-ai',
    demoLink: '#',
    tags: ['NLP', 'TF-IDF', 'Cosine Similarity', 'Text Extraction', 'Python']
  },
  {
    id: 16,
    category: 'gen-ai',
    title: 'Voice AI Assistant',
    description: 'Voice-activated AI assistant with speech recognition, natural language understanding, and text-to-speech for interactive voice conversations.',
    image: 'https://picsum.photos/400/267',
    githubLink: 'https://github.com/ndaemukh/voice-ai-assistant',
    demoLink: '#',
    tags: ['Whisper', 'TTS', 'Speech Recognition', 'NLP', 'Audio Processing', 'Python']
  },
  {
    id: 17,
    category: 'django',
    title: 'Secure File Transfer System',
    description: 'A secure file transfer application with end-to-end encryption, user authentication, and progress tracking for safe file sharing.',
    image: 'https://picsum.photos/400/268',
    githubLink: 'https://github.com/ndaemukh/Secure-File-Transfer-System',
    demoLink: '#',
    tags: ['Django', 'Python', 'Tailwind CSS', 'Cryptography']
  },
  {
    id: 18,
    category: 'react',
    title: 'WeatherView',
    description: 'Real-time weather application providing current conditions and forecasts for cities worldwide with a modern, responsive interface.',
    image: 'https://picsum.photos/400/269',
    githubLink: 'https://github.com/ndaemukh/Weather-Forecast-App',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'OpenWeatherMap API']
  },
  {
    id: 19,
    category: 'django',
    title: 'ThriftStore',
    description: 'Full-stack e-commerce platform with features like product browsing, cart management, and secure payment processing built with React and Django.',
    image: 'https://picsum.photos/400/270',
    githubLink: 'https://github.com/ndaemukh/E-commerce-Web-App-2',
    demoLink: '#',
    tags: ['Django', 'React', 'PostgreSQL', 'RESTful API']
  },
  {
    id: 20,
    category: 'react',
    title: 'HabitForge',
    description: 'Modern habit tracking application helping users build and maintain positive habits through an engaging interface with local storage persistence.',
    image: 'https://picsum.photos/400/271',
    githubLink: 'https://github.com/ndaemukh/habit-tracking-application',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'LocalStorage']
  },
  {
    id: 21,
    category: 'python',
    title: 'Simple Firewall',
    description: 'Python-based firewall application for blocking specific IP addresses and ports with real-time traffic monitoring and a Tkinter GUI.',
    image: 'https://picsum.photos/400/272',
    githubLink: 'https://github.com/ndaemukh/FirewallApp',
    demoLink: '#',
    tags: ['Python', 'Tkinter', 'Scapy', 'Network Security']
  },
  {
    id: 22,
    category: 'react',
    title: 'SocialSpark',
    description: 'Modern social media application enabling users to connect, share thoughts, and engage with others through a streamlined, responsive interface.',
    image: 'https://picsum.photos/400/273',
    githubLink: 'https://github.com/ndaemukh/Social-Media-Platform',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion']
  },
  {
    id: 23,
    category: 'react',
    title: 'Soundwave',
    description: 'Spotify-inspired music streaming interface with playlist management, search, and an interactive audio player experience.',
    image: 'https://picsum.photos/400/274',
    githubLink: 'https://github.com/ndaemukh/Soundwave-Spotify-Clone',
    demoLink: '#',
    tags: ['React', 'TypeScript', 'Tailwind CSS', 'Audio Player']
  },
  {
    id: 24,
    category: 'python',
    title: 'OpenCanary Honeypot',
    description: 'A multi-service honeypot system that emulates network services to detect and log unauthorized access attempts with Valkey event processing.',
    image: 'https://picsum.photos/400/275',
    githubLink: 'https://github.com/ndaemukh/opencanary_withvalkey',
    demoLink: '#',
    tags: ['Python', 'Security', 'Honeypot', 'Docker', 'Network Monitoring']
  }
]

const categoryConfig = {
  all: { label: 'All Projects', color: 'from-slate-500 to-gray-600', bgColor: 'from-slate-100 to-gray-200' },
  'gen-ai': { label: 'Generative AI', color: 'from-fuchsia-500 to-pink-500', bgColor: 'from-fuchsia-100 to-pink-100' },
  ml: { label: 'Machine Learning', color: 'from-blue-600 to-indigo-600', bgColor: 'from-blue-100 to-indigo-100' },
  'ai-eng': { label: 'AI Engineering', color: 'from-cyan-500 to-teal-500', bgColor: 'from-cyan-100 to-teal-100' },
  mlops: { label: 'MLOps', color: 'from-orange-500 to-red-500', bgColor: 'from-orange-100 to-red-100' },
  react: { label: 'React', color: 'from-sky-500 to-blue-500', bgColor: 'from-sky-100 to-blue-100' },
  django: { label: 'Django', color: 'from-green-600 to-emerald-600', bgColor: 'from-green-100 to-emerald-100' },
  python: { label: 'Python', color: 'from-yellow-500 to-amber-500', bgColor: 'from-yellow-100 to-amber-100' }
}

const MyProjects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all')

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)

  return (
    <section className="mb-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl font-bold mb-6 bg-gradient-to-r from-slate-900 to-blue-800 dark:from-white dark:to-blue-200 bg-clip-text text-transparent">
          My Projects
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full mb-6"></div>
        <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
          A showcase of my work across different technologies and domains
        </p>
      </motion.div>
      
      <motion.div 
        className="mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <div className="flex flex-wrap justify-center gap-4">
          {Object.entries(categoryConfig).map(([category, config]) => (
            <motion.button 
              key={category}
              onClick={() => setActiveCategory(category as ProjectCategory)}
              className={`group relative px-6 py-3 rounded-2xl font-semibold transition-all duration-300 ${
                activeCategory === category 
                  ? `bg-gradient-to-r ${config.color} text-white shadow-lg scale-105` 
                  : 'text-slate-600 dark:text-slate-300 hover:text-slate-800 dark:hover:text-white bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              {config.label}
              {activeCategory === category && (
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent rounded-2xl"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                />
              )}
            </motion.button>
          ))}
        </div>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -8, scale: 1.02 }}
          >
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              demoLink={project.demoLink}
              tags={project.tags}
            />
          </motion.div>
        ))}
      </motion.div>
      
      {filteredProjects.length === 0 && (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center py-16"
        >
          <div className="bg-slate-100 dark:bg-slate-800 rounded-3xl p-12 max-w-md mx-auto">
            <h3 className="text-xl font-semibold text-slate-700 dark:text-slate-300 mb-4">
              No projects found
            </h3>
            <p className="text-slate-600 dark:text-slate-400">
              Try selecting a different category to see more projects.
            </p>
          </div>
        </motion.div>
      )}
    </section>
  )
}

export default MyProjects