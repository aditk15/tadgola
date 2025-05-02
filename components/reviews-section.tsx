"use client"

import { useState, useRef } from "react"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

interface ReviewProps {
  content: string
  author: string
  image?: string
  bgColor?: string
  delay?: number
}

function ReviewCard({ content, author, image, bgColor = "bg-[#fff9e6]", delay = 0 }: ReviewProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: delay * 0.2 }}
      className={cn("rounded-2xl shadow-lg overflow-hidden", bgColor)}
    >
      <div className="flex flex-col md:flex-row items-center">
        {image && (
          <div className="md:w-2/5 relative">
            <Image
              src={image || "/placeholder.svg"}
              alt={`${author}'s review`}
              width={400}
              height={400}
              className="object-cover aspect-square"
            />
            <div className="absolute top-4 right-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 14.2322V4H14.2322" stroke="#bf254a" strokeWidth="2" />
                <path d="M20 9.76777V20H9.76777" stroke="#bf254a" strokeWidth="2" />
              </svg>
            </div>
          </div>
        )}
        <div className={cn("p-6 md:p-8", image ? "md:w-3/5" : "w-full")}>
          <p className="text-lg md:text-xl font-medium mb-6">{content}</p>
          <div>
            <p className="font-bold text-lg">{author}</p>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ReviewsSection() {
  const reviews = [
    {
      content:
        "It was amazing! I didn’t expect my first session to go so well. Attending this Tadgola improv session immediately lifted my mood and set me in such a good space for the week ahead. It was just so much fun! “Bohot achha tha, bohot achha tha, bohot achha tha!”",
      author: "Lipika Saha & Friend",
      image: "/reviews/4.png",
      bgColor: "bg-[#fff9e6]", 
    },
    {
      content:
        "I was here at Tadgola and it was lovely to be here. Had a great, great ball’s time! I had no idea there were so many improv games out there — it was pure fun, with such a warm and fun community.",
      author: "Sahil Arora",
      image: "/reviews/5.png",
      bgColor: "bg-[#fff9e6]", 
    },
    {
        content:
          "For a first-time improviser, this is such a great learning space! It was really fun being totally impromptu — nothing scripted, everything just clicks. I think it’s amazing, and honestly, it's a great mental exercise not just for actors, but for anyone.",
        author: "Rashmi Sachdeva",
        image: "/reviews/6.png",
        bgColor: "bg-[#fff9e6]", 
    },
    {
      content:
        "For the time I spent here, I was completely immersed in these fun activities. I could easily let go of all the stress and actually live in the moment — felt like I was a kid again. It was great to explore being a better listener, responding faster, and coordinating with anyone on set.",
      author: "Roohi Devgan",
      image: "/reviews/1.png",
      bgColor: "bg-[#fff9e6]", 
    },
    {
      content:
        "I’ve been to Tadgola improv jams multiple times and every single time, it keeps getting better — you just never realise how the two hours pass. I highly recommend it to the people of Bombay. It feels like my brainfog vanished and I started thinking quick on my feet. Really enjoyed it a lot!",
      author: "Vishal Babu",
      image: "/reviews/2.png",
      bgColor: "bg-[#fff9e6]", 
    },
    {
      content:
        "My experience at Tadgola was fantastic! The two boys are just too good at what they do. You have to attend at least one session to really feel what it’s like — being more aware, having unlimited fun, learning new things, and being part of such a lovely community. These guys are doing great — support them, follow them, and come to Tadgola!",
      author: "Akshay Bhandari",
      image: "/reviews/3.png",
      bgColor: "bg-[#fff9e6]", 
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length)
  }

  const prevReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + reviews.length) % reviews.length)
  }

  // Calculate visible reviews based on screen size
  const visibleReviews = reviews.slice(currentIndex, currentIndex + 1)

  return (
    <section className="py-24 relative overflow-hidden" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="absolute inset-0 bg-dots opacity-5"></div>
      <div className="circle-decoration w-64 h-64 -top-32 -right-32 opacity-10"></div>
      <div className="circle-decoration w-48 h-48 bottom-10 left-10 opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-primary mb-6 relative inline-block">
            <span className="relative z-10">WHAT PEOPLE SAY</span>
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-foreground/70">
            Don't just take our word for it. Here's what participants have to say about their Tadgola experience.
          </p>
        </motion.div>

        <div className="relative max-w-5xl mx-auto">
          <div className="grid grid-cols-1 gap-8">
            {visibleReviews.map((review, index) => (
              <ReviewCard
                key={currentIndex + index}
                content={review.content}
                author={review.author}
                image={review.image}
                bgColor={review.bgColor}
                delay={index}
              />
            ))}
          </div>

          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 space-x-4">
            <button
              onClick={prevReview}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Previous review"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <div className="flex space-x-2 items-center">
              {reviews.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    currentIndex === index ? "bg-primary scale-125" : "bg-primary/30",
                  )}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextReview}
              className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
              aria-label="Next review"
            >
              <ChevronRight className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
