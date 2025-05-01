"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

interface ActivityCardProps {
  title: string
  description: string
  icon: string
  bgColor?: string
  delay?: number
}

function ActivityCard({ title, description, icon, bgColor = "bg-accent", delay = 0 }: ActivityCardProps) {
  const [isHovered, setIsHovered] = useState(false)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className="card-hover-effect rounded-2xl shadow-lg aspect-square overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={cn("w-full h-full flex items-center justify-center relative", bgColor)}>
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <span
          className="text-6xl transform transition-transform duration-300"
          style={{
            transform: isHovered ? "scale(0.8) translateY(-20px)" : "scale(1)",
          }}
        >
          {icon}
        </span>

        {/* Decorative elements */}
        <div className="absolute top-4 left-4 w-8 h-8 rounded-full bg-white/10"></div>
        <div className="absolute bottom-4 right-4 w-6 h-6 rounded-full bg-white/10"></div>
      </div>
      <div className="card-content p-6 text-white">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <p className="text-white/90">{description}</p>
      </div>
    </motion.div>
  )
}

export default function WhatWeDo() {
  const activities = [
    {
      title: "JAMs",
      description: "Interactive improv sessions where everyone can participate and learn the basics of improvisation.",
      icon: "🎭",
      bgColor: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      title: "Shows",
      description: "Professional improv performances that will leave you laughing and inspired.",
      icon: "🎪",
      bgColor: "bg-gradient-to-br from-accent to-accent/80",
    },
    {
      title: "Training",
      description: "Workshops and courses to develop your improv skills, confidence, and creativity.",
      icon: "🎓",
      bgColor: "bg-gradient-to-br from-primary/90 to-accent/80",
    },
    {
      title: "Corporate Events",
      description: "Team-building and creativity workshops tailored for businesses and organizations.",
      icon: "💼",
      bgColor: "bg-gradient-to-br from-accent/90 to-primary/80",
    },
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden skewed-top skewed-bottom" ref={sectionRef}>
      <div className="absolute inset-0 bg-muted"></div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blob-small"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-accent/10 blob"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-block text-sm uppercase tracking-widest text-primary font-bold mb-2 relative">
            Our Services
            <div className="absolute w-full h-1 bg-primary/30 bottom-0 left-0 transform -skew-x-12"></div>
          </span>

          <h2 className="font-bold text-4xl md:text-5xl text-primary mb-6 relative inline-block">
            <span className="relative z-10">What We Do at Tadgola</span>
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            We bring the joy of improvisation to life through various formats. Each of our offerings is designed to
            spark creativity, build confidence, and create unforgettable moments of connection and laughter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
              title={activity.title}
              description={activity.description}
              icon={activity.icon}
              bgColor={activity.bgColor}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
