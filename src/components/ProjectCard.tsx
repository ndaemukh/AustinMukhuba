import { motion } from 'framer-motion'
import { Github, Eye, ArrowUpRight } from 'lucide-react'

interface ProjectCardProps {
  image: string
  title: string
  description: string
  githubLink: string
  demoLink: string
  tags: string[]
}

const ProjectCard = ({ image, title, description, githubLink, demoLink, tags }: ProjectCardProps) => {
  return (
    <motion.div 
      className="group bg-white/70 dark:bg-slate-800/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-200/50 dark:border-slate-700/50 h-full"
      whileHover={{ y: -8 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-48">
        <motion.img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-slate-900/80 backdrop-blur-sm rounded-xl text-white hover:bg-slate-900 transition-colors"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="w-4 h-4" />
          </motion.a>
          
          {demoLink !== '#' && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 bg-blue-600/80 backdrop-blur-sm rounded-xl text-white hover:bg-blue-600 transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Eye className="w-4 h-4" />
            </motion.a>
          )}
        </div>
        
        {/* Live Demo Badge */}
        {demoLink !== '#' && (
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-green-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              Live Demo
            </span>
          </div>
        )}
      </div>
      
      {/* Content */}
      <div className="p-6">
        <motion.h3 
          className="text-xl font-bold text-slate-800 dark:text-slate-200 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300"
          whileHover={{ x: 4 }}
        >
          {title}
        </motion.h3>
        
        <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed line-clamp-3">
          {description}
        </p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag, index) => (
            <motion.span
              key={index}
              className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-xl border border-slate-200 dark:border-slate-600"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
        
        {/* Action Links */}
        <div className="flex gap-3">
          <motion.a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-xl font-medium hover:bg-slate-200 dark:hover:bg-slate-600 transition-colors group/link"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Github className="w-4 h-4" />
            <span>Code</span>
            <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
          </motion.a>
          
          {demoLink !== '#' && (
            <motion.a
              href={demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors group/link"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Eye className="w-4 h-4" />
              <span>Demo</span>
              <ArrowUpRight className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
            </motion.a>
          )}
        </div>
      </div>
      
      {/* Hover Effect Border */}
      <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/20 transition-colors duration-500 pointer-events-none" />
    </motion.div>
  )
}

export default ProjectCard