"use client"

import { useEffect, useRef, useState } from "react"
import { motion, useInView } from "framer-motion"

interface CounterProps {
  end: number
  label: string
  duration?: number
  suffix?: string
  delay?: number
}

function Counter({ end, label, duration = 2000, suffix = "", delay = 0 }: CounterProps) {
  const [count, setCount] = useState(0)
  const countRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(countRef, { once: true, margin: "-100px" })
  const hasAnimated = useRef(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isInView && !hasAnimated.current) {
      hasAnimated.current = true

      let startTime: number | null = null
      let animationFrame: number

      const animate = (timestamp: number) => {
        if (!startTime) startTime = timestamp
        const progress = Math.min((timestamp - startTime - delay * 200) / duration, 1)

        if (progress > 0) {
          const currentCount = Math.floor(progress * end)
          setCount(currentCount)
        }

        if (progress < 1) {
          animationFrame = requestAnimationFrame(animate)
        } else if (counterRef.current) {
          counterRef.current.classList.add("animate")
        }
      }

      animationFrame = requestAnimationFrame(animate)

      return () => cancelAnimationFrame(animationFrame)
    }
  }, [isInView, end, duration, delay])

  return (
    <motion.div
      ref={countRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="text-center relative"
    >
      <div className="absolute inset-0 blob-small bg-primary/5 -z-10 transform scale-150"></div>
      <div ref={counterRef} className="counter">
        {count}
        {suffix}
      </div>
      <div className="mt-4 text-lg font-medium">{label}</div>
    </motion.div>
  )
}

export default function Milestones() {
  const milestones = [
    { value: 150, label: "Shows Conducted", suffix: "+", delay: 0 },
    { value: 12, label: "Cities Ventured", suffix: "", delay: 1 },
    { value: 5000, label: "Happy Participants", suffix: "+", delay: 2 },
    { value: 25, label: "Corporate Workshops", suffix: "+", delay: 3 },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-muted to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-muted to-transparent"></div>
      <div className="absolute inset-0 bg-dots opacity-5"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-primary font-bold mb-2 relative">
            Our Impact
            <div className="absolute w-full h-1 bg-primary/30 bottom-0 left-0 transform -skew-x-12"></div>
          </span>

          <h2 className="font-bold text-4xl md:text-5xl text-primary mb-6 relative inline-block">
            <span className="relative z-10">Our Milestones</span>
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Every number represents countless moments of joy, creativity, and connection that we've had the privilege to
            facilitate.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 max-w-5xl mx-auto">
          {milestones.map((milestone, index) => (
            <Counter
              key={index}
              end={milestone.value}
              label={milestone.label}
              suffix={milestone.suffix}
              delay={milestone.delay}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
