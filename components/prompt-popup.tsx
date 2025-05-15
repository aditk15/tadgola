"use client"

import { useState, useEffect } from "react"
import { X, Sparkles } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PromptPopup() {
  const [isOpen, setIsOpen] = useState(false)
  const [hasSeenPopup, setHasSeenPopup] = useState(false)

  useEffect(() => {
    // Check if user has seen the popup before
    const hasSeenBefore = localStorage.getItem("hasSeenPromptPopup")

    if (!hasSeenBefore) {
      // Show popup after a short delay
      const timer = setTimeout(() => {
        setIsOpen(true)
        setHasSeenPopup(true)
        localStorage.setItem("hasSeenPromptPopup", "true")
      }, 3000)

      return () => clearTimeout(timer)
    }
  }, [])

  const closePopup = () => {
    setIsOpen(false)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ type: "spring", damping: 20, stiffness: 300 }}
          className="fixed bottom-4 right-4 z-50 max-w-sm w-full shadow-xl"
        >
          <div className="relative overflow-hidden rounded-xl bg-white border border-border">
            {/* Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-accent"></div>
            <div className="absolute -top-10 -right-10 w-20 h-20 rounded-full bg-accent/10 blob-small"></div>

            <div className="p-6 relative z-10">
              <button
                onClick={closePopup}
                className="absolute top-2 right-2 text-gray-500 hover:text-primary transition-colors"
                aria-label="Close popup"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center mb-4">
                <div className="bg-primary/10 p-2 rounded-full mr-3">
                  <Sparkles className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-bold text-lg text-primary">Try Our Prompt Generator!</h3>
              </div>

              <p className="text-foreground/80 mb-4">
                Looking for inspiration for your next improv scene? Check out our Improv Prompt Generator for endless
                creative ideas!
              </p>

              <div className="flex justify-end">
                <Button asChild variant="default" className="bg-primary hover:bg-primary/90">
                  <Link href="/prompt-generator">Try It Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
