import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-aloja text-4xl md:text-5xl font-bold text-primary text-center mb-12">About Tadgola</h1>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
              <div>
                <h2 className="text-2xl font-bold mb-4">Our Story</h2>
                <p className="text-foreground/80 mb-4">
                  Tadgola was born from a shared passion for improvisation and a vision to create a community where
                  creativity flows freely. What started as casual jam sessions among friends has evolved into a vibrant
                  improv company that brings joy and spontaneity to audiences across the country.
                </p>
                <p className="text-foreground/80">
                  Our journey has been one of growth, learning, and countless moments of unexpected brilliance—just like
                  improv itself. We believe in the power of "Yes, and..." not just as an improv principle, but as a way
                  of life.
                </p>
              </div>

              <div className="flex justify-center">
                <div className="relative w-64 h-64 rounded-full overflow-hidden border-4 border-accent">
                  <Image src="/placeholder.svg" alt="Tadgola Story" fill className="object-cover" />
                </div>
              </div>
            </div>

            <div className="mb-16">
              <h2 className="text-2xl font-bold mb-6 text-center">Meet Our Team</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image src="/placeholder.svg" alt="Malay" width={128} height={128} className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Malay</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder</p>
                  <p className="text-center text-foreground/80">
                    With a background in theater and a passion for spontaneous creativity, Malay brings energy and
                    vision to Tadgola's performances and workshops.
                  </p>
                </div>

                <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center">
                  <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
                    <Image src="/placeholder.svg" alt="Krish" width={128} height={128} className="object-cover" />
                  </div>
                  <h3 className="text-xl font-bold">Krish</h3>
                  <p className="text-primary font-medium mb-3">Co-Founder</p>
                  <p className="text-center text-foreground/80">
                    Krish combines business acumen with creative flair, helping to grow Tadgola from a passion project
                    into a thriving improv company that touches lives.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
              <p className="text-foreground/80 mb-4">
                At Tadgola, we envision a world where the principles of improvisation—active listening, collaboration,
                and embracing the unexpected—extend beyond the stage and into everyday life. We're building a community
                where people feel empowered to express themselves authentically and connect with others through the joy
                of shared creativity.
              </p>
              <p className="text-foreground/80">
                Whether through our performances, workshops, or corporate training sessions, our mission is to spread
                the transformative power of improv, one scene at a time.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
