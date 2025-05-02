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
            {/* Founders Section - Now First */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-0 text-center">Meet Our Founders</h2>

              <div className="flex flex-col md:flex-row items-center justify-around gap-8 mt-0">
                <div className="flex flex-col items-center">
                  <div className="relative w-80 h-96 mb-0 mt-0">
                    <Image 
                      src="/about-us/malay.png" 
                      alt="Malay - Co-Founder" 
                      fill 
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-bold">Malay</h3>
                  <p className="text-primary font-medium">Co-Founder</p>
                </div>

                <div className="flex flex-col items-center">
                  <div className="relative w-80 h-96 mb-0 mt-0">
                    <Image 
                      src="/about-us/krish.png" 
                      alt="Krish - Co-Founder" 
                      fill 
                      className="object-contain"
                      priority
                    />
                  </div>
                  <h3 className="text-xl font-bold">Krish</h3>
                  <p className="text-primary font-medium">Co-Founder</p>
                </div>
              </div>
            </div>
            
            {/* About Us Content - Now Second */}
            <div className="mb-16">
              <p className="text-foreground/80 mb-6 text-lg">
                Two friends from a college dramatics society came together with a simple idea — to create a space where people could jam over improv games purely for the joy of it. No classes, no pressure to perform. Just spontaneous, unscripted fun with like-minded improv enthusiasts.
              </p>
              
              <p className="text-foreground/80 mb-6 text-lg">
                We noticed that improv in India was often treated as a side act — a warm-up in theatre rehearsals or an exercise in acting workshops. Never the main event. So we decided to flip the script.
              </p>

              <p className="text-foreground/80 mb-6 text-lg">
                Our vision is to make improv jamming mainstream and accessible to everyone — kids, parents, finance geeks, actors, business owners, tourists, or just anyone looking to laugh, connect, and be present. We're building a welcoming improv community where play takes centre stage.
              </p>

              <p className="text-foreground/80 text-lg">
                Because we believe comedy in India shouldn't be limited to stand-up shows. Improv comedy deserves its own spotlight — and we're here to give it just that.
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}