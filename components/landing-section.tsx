"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LandingSection() {
  const column1Ref = useRef<HTMLDivElement>(null)
  const column2Ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  // Sample image data - replace with your actual images
  const images1 = [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ]

  const images2 = [
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
    "/placeholder.svg?height=400&width=300",
  ]

  useEffect(() => {
    const setupScrolling = () => {
      if (column1Ref.current && column2Ref.current) {
        // Clone the content for seamless looping
        const column1Content = column1Ref.current.innerHTML
        const column2Content = column2Ref.current.innerHTML

        column1Ref.current.innerHTML = column1Content + column1Content
        column2Ref.current.innerHTML = column2Content + column2Content
      }
    }

    setupScrolling()
    setIsVisible(true)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="pt-24 min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative elements */}
      <div className="circle-decoration w-64 h-64 -top-20 -left-20 opacity-30"></div>
      <div className="circle-decoration w-96 h-96 -bottom-40 -right-40 opacity-20"></div>
      <div className="squiggle top-1/4 left-1/4 transform -rotate-12"></div>
      <div className="squiggle bottom-1/4 right-1/4 transform rotate-12"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side: What is Tadgola? */}
          <motion.div
            className="order-2 lg:order-1"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={containerVariants}
          >
            <motion.div variants={itemVariants} className="relative inline-block mb-2">
              <span className="text-sm uppercase tracking-widest text-accent font-bold">Discover</span>
              <div className="absolute w-full h-1 bg-accent bottom-0 left-0 transform -skew-x-12"></div>
            </motion.div>

            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary mb-6 relative">
              <span className="relative z-10">What is</span>
              <span className="block relative">
                <span className="relative z-10">Tadgola?</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              Tadgola is an <span className="text-primary font-bold">improv company</span> dedicated to bringing the joy
              of
              <span className="relative inline-block mx-1">
                spontaneous
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0,3 C20,1 40,6 60,3 C80,0 100,4 100,3" stroke="#F2B10F" strokeWidth="3" fill="none" />
                </svg>
              </span>
              creativity to everyone. We believe that improvisation isn't just for the stage—it's a mindset that
              enhances creativity, builds confidence, and brings people together.
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 leading-relaxed">
              Through our shows, workshops, and community events, we create spaces where people can discover the magic
              of saying
              <span className="font-bold text-accent mx-1">"Yes, and..."</span>
              to life's unexpected moments. Join us on this journey of playfulness, connection, and authentic
              expression.
            </motion.p>

            <motion.div variants={itemVariants} className="mt-8">
              <a
                href="#what-we-do"
                className="btn-artistic inline-block px-8 py-3 bg-primary text-white font-bold rounded-full hover:shadow-lg transition-shadow duration-300"
              >
                Discover Our World
              </a>
            </motion.div>
          </motion.div>

          {/* Right side: Image Carousel */}
          <div className="order-1 lg:order-2 relative">
            <div className="absolute inset-0 blob bg-accent/10 transform scale-110"></div>
            <div className="grid grid-cols-2 gap-4 h-[500px] relative z-10">
              <div className="overflow-hidden h-full rounded-2xl shadow-xl transform rotate-2">
                <div ref={column1Ref} className="vertical-scroll">
                  {images1.map((src, index) => (
                    <div key={`col1-${index}`} className="mb-4">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Tadgola event ${index + 1}`}
                        width={300}
                        height={400}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden h-full rounded-2xl shadow-xl transform -rotate-2">
                <div ref={column2Ref} className="vertical-scroll-reverse">
                  {images2.map((src, index) => (
                    <div key={`col2-${index}`} className="mb-4">
                      <Image
                        src={src || "/placeholder.svg"}
                        alt={`Tadgola event ${index + 5}`}
                        width={300}
                        height={400}
                        className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-12 h-12 rounded-full bg-primary/20 pulse"></div>
            <div
              className="absolute -bottom-6 -left-6 w-12 h-12 rounded-full bg-accent/20 pulse"
              style={{ animationDelay: "1s" }}
            ></div>
          </div>
        </div>
      </div>
    </section>
  )
}
