"use client"

import { useState, useRef } from "react"
import { cn } from "@/lib/utils"
import { motion, useInView } from "framer-motion"

interface ActivityCardProps {
  description: string
  icon: string
  bgColor?: string
  delay?: number
}

function ActivityCard({ description, icon, bgColor = "bg-accent", delay = 0 }: ActivityCardProps) {
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
          className="font-display text-4xl md:text-5xl font-bold transform transition-transform duration-300 text-white/90 tracking-tight text-center w-full px-6"
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
      <p className="font-sans text-white/90 leading-relaxed text-sm md:text-base">{description}</p>
      </div>
    </motion.div>
  )
}

export default function WhatWeDo() {
  const activities = [
    {
      description: "Fun, high-energy sessions with classic and new improv games. Laugh, let loose, and meet fellow improv lovers. Perfect for beginners and pros alike.",
      icon: "Improv JAMs",
      bgColor: "bg-gradient-to-br from-primary to-primary/80",
    },
    {
      description: "Break the routine with our fun, interactive corporate improv sessions. Boost team bonding, communication, and laughter — no scripts, just pure connection.",
      icon: "Corporate Shows",
      bgColor: "bg-gradient-to-br from-accent to-accent/80",
    },
    {
      description: "Sharpen your instincts with our dynamic improv training for actors. Build on-set spontaneity, stage presence, and emotional range through play and performance.",
      icon: "Actor Training",
      bgColor: "bg-gradient-to-br from-primary/90 to-accent/80",
    },
    {
      description: "Enhance team communication, collaboration, and problem-solving through our improv-based corporate workshops. Designed for professionals, these interactive sessions improve adaptability, active listening, and creative thinking in the workplace.",
      icon: "Corporate Training",
      bgColor: "bg-gradient-to-br from-accent/90 to-primary/80",
    },
    {
      description: "Liven up your event with our interactive improv performances. Perfect for birthdays, reunions, and private parties — spontaneous humor, audience engagement, and unforgettable memories.",
      icon: "Party Gigs",
      bgColor: "bg-gradient-to-br from-accent/90 to-primary/80",
    },
    {
      description: "Enhance creativity, teamwork, and communication with our improv workshops for schools and summer camps. Designed to build confidence and foster collaboration through engaging, interactive activities for youth.",
      icon: "Workshops for Schools & Camps",
      bgColor: "bg-gradient-to-br from-accent/90 to-primary/80",
    }
  ]

  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  return (
    <section id="what-we-do" className="py-24 relative overflow-hidden skewed-top skewed-bottom" ref={sectionRef}>
      <div className="absolute inset-0 bg-muted"></div>

      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-primary/10 blob-small"></div>
      <div className="absolute bottom-1/3 right-10 w-32 h-32 rounded-full bg-accent/10 blob"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-primary mb-6 relative inline-block">
            <span className="relative z-10">What We Do at Tadgola</span>
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            We bring the joy of improvisation to life through various formats. Each of our offerings is designed to
            spark creativity, build confidence, and create unforgettable moments of connection and laughter.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {activities.map((activity, index) => (
            <ActivityCard
              key={index}
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
