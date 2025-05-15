"use client"

import { motion } from "framer-motion"
import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"
import Link from "next/link"

interface ShowCardProps {
  date: string
  day: string
  venue: string
  time: string
  location: string
  link: string
  delay?: number
  isPast: boolean
}

function ShowCard({ date, day, venue, time, location, link, delay = 0, isPast }: ShowCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="group relative"
    >
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <div className="bg-[#FFF8E8] rounded-3xl p-4 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
          <div className="text-center">
            <p className="text-[#333] font-bold text-lg mb-1">
              {date} | {day}
            </p>
            <p className="text-[#4CAF50] font-bold text-xl mb-1">{venue}</p>
            <p className="text-[#333] text-lg">
              {time} | {location}
            </p>
          </div>
        </div>
      </Link>

      {/* Completed show overlay with enhanced animation */}
      {isPast && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden rounded-3xl">
          {/* White overlay with higher opacity */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.85 }}
            transition={{ duration: 0.7 }}
            className="absolute inset-0 bg-white"
          />

          {/* Floating "DONE" text with bounce effect */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: 1,
              y: [20, -5, 0],
            }}
            transition={{
              duration: 0.8,
              delay: 0.6,
              times: [0, 0.7, 1],
            }}
            className="absolute bottom-6"
          >
            <motion.span
              animate={{
                y: [0, -3, 0, -3, 0],
              }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              className="bg-primary text-white text-sm font-bold py-1 px-4 rounded-full inline-block"
            >
              AHH YOU MISSED THIS ONE!
            </motion.span>
          </motion.div>
        </div>
      )}
    </motion.div>
  )
}

export default function UpcomingShows() {
  const sectionRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  const [currentDate, setCurrentDate] = useState<Date | null>(null)

  // Set current date only on client side to avoid hydration mismatch
  useEffect(() => {
    setCurrentDate(new Date())
  }, [])

  const shows = [
    {
      date: "12.05.2025",
      day: "Monday",
      venue: "antiSOCIAL",
      time: "8pm onwards",
      location: "Lower Parel",
      link: "https://insider.in/tadgola-may12-2025/event",
    },
    {
      date: "19.05.2025",
      day: "Monday",
      venue: "antiSOCIAL",
      time: "8pm onwards",
      location: "Lower Parel",
      link: "https://in.bookmyshow.com/events/tadgola/ET00439465",
    },
    {
      date: "23.05.2025",
      day: "Friday",
      venue: "3 Art House",
      time: "6pm onwards",
      location: "Khar",
      link: "https://arthouse.myflodesk.com/pc23p5don2",
    },
    {
      date: "25.05.2025",
      day: "Sunday",
      venue: "Cat Café Studio",
      time: "6pm onwards",
      location: "Versova",
      link: "https://in.bookmyshow.com/plays/tadgola-an-improv-fundraiser-for-cat-cafe-studio/ET00446070?webview=true",
    },
    {
      date: "26.05.2025",
      day: "Monday",
      venue: "antiSOCIAL",
      time: "8pm onwards",
      location: "Lower Parel",
      link: "https://insider.in/tadgola-may26-2025/event",
    },
    {
      date: "01.06.2025",
      day: "Sunday",
      venue: "Chaubara - by Veda Factory",
      time: "11am onwards",
      location: "Versova",
      link: "https://in.bookmyshow.com/events/tadgola/ET00439465",
    },
  ]

  // Function to check if a show date is in the past
  const isShowInPast = (showDateStr: string) => {
    if (!currentDate) return false

    // Parse the show date (format: DD.MM.YYYY)
    const [day, month, year] = showDateStr.split(".").map(Number)
    const showDate = new Date(year, month - 1, day) // month is 0-indexed in JS Date

    // Set both dates to start of day for accurate comparison
    const showDateStartOfDay = new Date(showDate.setHours(0, 0, 0, 0))
    const currentDateStartOfDay = new Date(currentDate.setHours(0, 0, 0, 0))

    return showDateStartOfDay < currentDateStartOfDay
  }

  // For testing purposes - this will mark the first show as completed
  // In production, this would use the actual current date
  const isTestMode = true
  const getIsPast = (showDateStr: string, index: number) => {
    if (isTestMode) {
      return index === 0 // Only mark the first show as completed for testing
    }
    return isShowInPast(showDateStr)
  }

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-primary"></div>

      {/* Removed the problematic yellow circle */}
      <div className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-accent/10 blob-small"></div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-bold text-4xl md:text-5xl text-white mb-6 relative inline-block">
            <span className="relative z-10">Our Upcoming Shows</span>
            <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-white/80">
            Come experience the magic of live improvisation! Click on any show to book your tickets.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {shows.map((show, index) => (
            <ShowCard
              key={index}
              date={show.date}
              day={show.day}
              venue={show.venue}
              time={show.time}
              location={show.location}
              link={show.link}
              delay={index}
              isPast={getIsPast(show.date, index)}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-12"
        >
          <a
            href="https://chat.whatsapp.com/KrhIrs8O1qDKvCrQCDFdFi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white hover:bg-[#128C7E] transition-all text-sm font-medium md:text-base py-3 px-6 rounded-full shadow-md hover:shadow-lg"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.297-.497.1-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Click here to join our WhatsApp Community for the latest updates!
          </a>
        </motion.div>
      </div>
    </section>
  )
}
