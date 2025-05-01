"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Sparkles } from "lucide-react"
import { cn } from "@/lib/utils"

export default function PromptGeneratorPage() {
  const [currentPrompt, setCurrentPrompt] = useState("")
  const [isAnimating, setIsAnimating] = useState(false)

  // List of improv prompts
  const prompts = [
    "You're at a restaurant and the waiter brings you a live octopus instead of your order.",
    "You discover your new roommate is actually a superhero trying to live a normal life.",
    "You wake up and realize you can understand what plants are saying.",
    "You're on a first date and discover you both have the same imaginary friend.",
    "You're giving a presentation when your PowerPoint starts showing embarrassing personal photos.",
    "You're the first human tour guide for aliens visiting Earth.",
    "You're at a job interview, but the interviewer thinks you're applying for a completely different position.",
    "You discover your pet can talk, but only when no one else is around.",
    "You're trapped in an elevator with your celebrity crush.",
    "You accidentally time-traveled to the 1800s with only the items in your pockets.",
    "You discover a portal to a parallel universe in your kitchen cabinet.",
    "You're a detective investigating why all the socks in town are disappearing.",
    "You're the only person who can see that everyone else has suddenly turned into puppets.",
    "You're on a blind date with someone who claims to be from the future.",
    "You're giving a tour of a museum where the exhibits come to life at night.",
    "You're a therapist for mythical creatures dealing with modern-day problems.",
    "You're at a family reunion and realize you're at the wrong family's gathering.",
    "You discover you can control the weather based on your mood.",
    "You're the new teacher at a school for wizards, but you have no magical abilities.",
    "You're hosting a cooking show where all the ingredients keep disappearing.",
  ]

  const generatePrompt = () => {
    setIsAnimating(true)
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * prompts.length)
      setCurrentPrompt(prompts[randomIndex])
      setIsAnimating(false)
    }, 800)
  }

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-aloja text-4xl md:text-5xl font-bold text-primary text-center mb-8">
            Improv Prompt Generator
          </h1>

          <p className="text-center text-lg max-w-2xl mx-auto mb-12">
            Need inspiration for your next improv scene? Click the button below to generate a random prompt and let your
            creativity flow!
          </p>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-lg p-8">
            <div
              className={cn(
                "min-h-[150px] flex items-center justify-center text-center p-6 mb-8 rounded-lg bg-muted transition-all duration-500",
                isAnimating ? "opacity-30 scale-95" : "opacity-100 scale-100",
              )}
            >
              {currentPrompt ? (
                <p className="text-xl font-medium">{currentPrompt}</p>
              ) : (
                <p className="text-xl text-muted-foreground">Your prompt will appear here</p>
              )}
            </div>

            <div className="flex justify-center">
              <Button
                onClick={generatePrompt}
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white font-bold py-6 px-8 rounded-full text-lg"
                disabled={isAnimating}
              >
                <Sparkles className="mr-2 h-5 w-5" />
                Generate Prompt
              </Button>
            </div>

            <div className="mt-8 text-center text-sm text-muted-foreground">
              <p>Use these prompts for practice, warm-ups, or performances!</p>
              <p className="mt-2">
                Have a great prompt idea?{" "}
                <a href="/contact" className="text-primary hover:underline">
                  Share it with us
                </a>
                !
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
