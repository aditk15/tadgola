"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"

export default function LandingSection() {
  const column1Ref = useRef<HTMLDivElement>(null)
  const column2Ref = useRef<HTMLDivElement>(null)
  const [isVisible, setIsVisible] = useState(false)

  const images1 = [
    "/carousel/1.webp",
    "/carousel/2.webp",
    "/carousel/3.webp",
    "/carousel/4.webp",
    "/carousel/5.webp",
    "/carousel/6.webp",
    "/carousel/7.webp",
    "/carousel/8.webp",
    "/carousel/9.webp",
    "/carousel/10.webp",
    "/carousel/11.webp",
    "/carousel/12.webp",
    "/carousel/13.webp",
    "/carousel/14.webp",
  ]

  const images2 = [
    "/carousel/15.webp",
    "/carousel/16.webp",
    "/carousel/17.webp",
    "/carousel/18.webp",
    "/carousel/19.webp",
    "/carousel/20.webp",
    "/carousel/21.webp",
    "/carousel/22.webp",
    "/carousel/23.webp",
    "/carousel/24.webp",
    "/carousel/25.webp",
    "/carousel/26.webp",
    "/carousel/27.webp",
    "/carousel/28.webp",
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
            <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold text-primary mb-6 relative">
              <span className="block relative">
                <span className="relative z-10">BUT, WHAT IS IMPROV?</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
              </span>
            </motion.h2>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-4">
              <span className="text-primary font-medium">IMPROV IS SHORT FOR IMPROVISATION</span> — which simply means
              <span className="relative inline-block mx-1">coming up with things on the spot.
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  height="6"
                  viewBox="0 0 100 6"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M0,3 C20,1 40,6 60,3 C80,0 100,4 100,3" stroke="#F2B10F" strokeWidth="3" fill="none" />
                </svg>
              </span>
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-6">
              So, want to try something new?{" "}
              <span className="text-accent font-bold">Improv is the best new thing to try.</span>
            </motion.p>

            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-xl font-bold mb-3 text-primary">Everybody is an improviser!</h3>

              <p className="text-lg font-medium mb-2">You've improvised everytime you have:</p>
              <ul className="space-y-2 ml-6">
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Made up an excuse for being late</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Asked for a sick leave when you weren't actually sick</span>
                </li>
                <li className="flex items-start">
                  <span className="text-accent font-bold mr-2">•</span>
                  <span>Left the office early to go for a concert</span>
                </li>
              </ul>
            </motion.div>

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
