"use client"

import { Phone, MessageCircle, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"

export function FloatingCTA() {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.3, type: "spring" }}
          className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3"
        >
          <AnimatePresence>
            {isExpanded && (
              <>
                <motion.a
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                  href="tel:470-402-4416"
                  className="flex items-center gap-3 px-5 py-3 bg-primary text-primary-foreground rounded-full shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-shadow group"
                >
                  <Phone className="w-5 h-5" />
                  <span className="font-medium whitespace-nowrap">470-402-4416</span>
                </motion.a>
                <motion.a
                  initial={{ opacity: 0, y: 20, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 20, scale: 0.8 }}
                  transition={{ duration: 0.2 }}
                  href="mailto:southerndeck2023@gmail.com"
                  className="flex items-center gap-3 px-5 py-3 bg-card border border-border text-foreground rounded-full shadow-lg hover:bg-secondary transition-colors group"
                >
                  <MessageCircle className="w-5 h-5 text-primary" />
                  <span className="font-medium whitespace-nowrap">Send Email</span>
                </motion.a>
              </>
            )}
          </AnimatePresence>

          <motion.button
            onClick={() => setIsExpanded(!isExpanded)}
            whileTap={{ scale: 0.95 }}
            className={`relative w-16 h-16 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
              isExpanded 
                ? "bg-card border border-border text-foreground" 
                : "bg-primary text-primary-foreground shadow-primary/40"
            }`}
          >
            {/* Pulse Animation */}
            {!isExpanded && (
              <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-25" />
            )}
            
            <AnimatePresence mode="wait">
              {isExpanded ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="w-6 h-6" />
                </motion.div>
              ) : (
                <motion.div
                  key="phone"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Phone className="w-6 h-6" />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
