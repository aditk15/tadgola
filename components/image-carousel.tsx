"use client"

import Image from "next/image"
import { useEffect } from "react"

export default function ImageCarousel() {
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

  const duplicatedImages1 = [...images1, ...images1];
  const duplicatedImages2 = [...images2, ...images2];

  return (
    <section className="py-16 overflow-hidden">
      <div className="container mx-auto px-4 mb-10">
        <h2 className="font-aloja text-3xl md:text-4xl font-bold text-primary text-center mb-10">Our Moments</h2>
      </div>

      <div className="grid grid-cols-2 gap-4 max-w-4xl mx-auto">
        <div className="overflow-hidden h-[600px] border border-gray-200">
          <div className="vertical-scroll h-full">
            {duplicatedImages1.map((src, index) => (
              <div key={`col1-${index}`} className="mb-4">
                <Image
                  src={src}
                  alt={`Tadgola event ${index + 1}`}
                  width={300}
                  height={400}
                  priority={index < 3}
                  className="rounded-lg shadow-md h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-hidden h-[600px] border border-gray-200">
          <div className="vertical-scroll-reverse h-full">
            {duplicatedImages2.map((src, index) => (
              <div key={`col2-${index}`} className="mb-4">
                <Image
                  src={src}
                  alt={`Tadgola event ${index + 15}`}
                  width={300}
                  height={400}
                  priority={index < 3}
                  className="rounded-lg shadow-md h-auto w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}