import React from 'react'
import { motion } from 'framer-motion'
import { Loader2 } from 'lucide-react'

export default function AnimatedLogo() {
  const containerVariants = {
    start: { opacity: 0, scale: 0.8 },
    end: { 
      opacity: 1, 
      scale: 1,
      transition: { 
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.2
      }
    }
  }

  const childVariants = {
    start: { opacity: 0, y: 20 },
    end: { opacity: 1, y: 0 }
  }

  const rotateVariants = {
    start: { rotate: 0 },
    end: { rotate: 360, transition: { duration: 2, repeat: Infinity, ease: "linear" } }
  }

  return (
    <motion.div
      className="flex items-center justify-center p-2 bg-white rounded-lg"
      variants={containerVariants}
      initial="start"
      animate="end"
    >
      <motion.div
        className="mr-2"
        variants={rotateVariants}
      >
        <Loader2 className="h-6 w-6 text-blue-500" aria-hidden="true" />
      </motion.div>
      <div>
        <motion.h1 
          className="text-lg font-bold text-gray-800"
          variants={childVariants}
        >
          Laundry Pro
        </motion.h1>
        <motion.p 
          className="text-xs text-gray-600"
          variants={childVariants}
        >
          Management System
        </motion.p>
      </div>
    </motion.div>
  )
}