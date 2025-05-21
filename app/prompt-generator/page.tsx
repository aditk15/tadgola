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

  const prompts = [
    "Fire an employee",
    "You want to give a negative increment to an employee",
    "You have discovered your child's secret affair",
    "Fire in the building",
    "You caught your partner cheating",
    "You have murdered your boss",
    "You lost your loved one in Kumbh Mela",
    "Learning cooking from your mom",
    "S/O cooked terrible food, you're pretending it's good",
    "Teaching someone how to do make up",
    "Lost in the jungle",
    "Convince someone to watch your favorite movie",
    "You confront your stalker",
    "Vlogging for your social media page",
    "Bargaining in Meena Bazar/Colaba Causeway",
    "Asking dowry from husband",
    "Fighting with traffic police after breaking signal",
    "While running a marathon",
    "Someone you thought was dead has come alive",
    "Proposing someone you just met",
    "Trying to avoid someone you just met",
    "Hair dresser has messed up your hair beyond repair",
    "You served someone non veg food instead of veg food",
    "Mansplaining something basic about cars",
    "Girls bathroom talk",
    "Friend has just gone through a break up",
    "You have discovered a new place",
    "You are in car being kidnapped",
    "You have come to wrong funeral",
    "Convincing an influencer to post about your brand",
    "A drunk man entering a ward where a woman is giving birth",
    "You went to the wrong funeral by mistake",
    "A bunch of cows discussing milk production in their quarterly dairy meeting",
    "I was locked in my bedroom for 4 hours today",
    "Maids catch each other stealing money from the houses they work",
    "HR catches you stealing office stationery",
    "You lied to your friend and he knows",
    "You are having an ice cream for the first time in 20 years",
    "You just discovered fire",
    "You're hiding a broken pot and mom catches you",
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
                <a href="https://wa.me/919082298083?text=Hey!%20I%20have%20this%20cool%20prompt%20idea%20which%20can%20be%20used%20in%20your%20JAMs%3A%20"
                  className="text-primary hover:underline cursor-pointer"
                  target="_blank"
                  rel="noopener noreferrer">
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
