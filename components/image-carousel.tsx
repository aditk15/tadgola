"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

export default function ImageCarousel() {
  const column1Ref = useRef<HTMLDivElement>(null)
  const column2Ref = useRef<HTMLDivElement>(null)

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
  }, [])

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-aloja text-3xl md:text-4xl font-bold text-primary text-center mb-10">Our Moments</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="overflow-hidden h-[600px]">
          <div ref={column1Ref} className="vertical-scroll">
            {images1.map((src, index) => (
              <div key={`col1-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Tadgola event ${index + 1}`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden h-[600px]">
          <div ref={column2Ref} className="vertical-scroll-reverse">
            {images2.map((src, index) => (
              <div key={`col2-${index}`} className="mb-4">
                <Image
                  src={src || "/placeholder.svg"}
                  alt={`Tadgola event ${index + 5}`}
                  width={300}
                  height={400}
                  className="rounded-lg shadow-md"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
