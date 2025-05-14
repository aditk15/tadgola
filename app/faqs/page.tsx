"use client"

import { useState } from "react"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

interface FaqItemProps {
  question: string
  answer: string
}

function FaqItem({ question, answer }: FaqItemProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border-b border-border last:border-0">
      <button
        className="flex justify-between items-center w-full py-4 text-left focus:outline-none"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <h3 className="text-xl font-medium">
          {question}
        </h3>
        <ChevronDown
          className={cn("h-5 w-5 text-primary transition-transform duration-200", isOpen && "transform rotate-180")}
        />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
        <p className="text-foreground/80 font-normal">
          {answer}
        </p>
      </div>
    </div>
  )
}

export default function FaqsPage() {
  const faqs = [
    {
      question: "Can anyone do improv?",
      answer:
        "Yes! Improv is for everyone—no experience needed. It’s a fun, creative way to build confidence, communication, and teamwork skills.",
    },
    {
      question: "Do I need to be experienced to join?",
      answer:
        "No experience needed! Our improv sessions are beginner-friendly and open to everyone. Whether you're new to improv or just curious, we make it easy and fun to get started.",
    },
    {
      question: "I am not an actor. Is improv for me too?",
      answer:
        "Yes! Improv isn’t just for actors—it’s for anyone who wants to build confidence, think creatively, and have fun.",
    },
    {
      question: "Can an introvert also take part in improv jams?",
      answer:
        "Yes! Introverts can thrive in improv. It's a fun activity and great to foster social skills—no loud personality needed.",
    },
    {
      question: "What are the prerequisites to attend a Tadgola improv jam?",
      answer:
        "None.\nThere's no need to have any experience in improv!\nNeither do you have to be extroverted – That's what WE are here for!\nIt's awkward, hilarious, occasionally profound—and never the same twice.\nAll you need to do is come with an open mind and jump into action.\nAnd remember to laugh your hearts out!",
    },
    {
      question: "What is the rule of ‘Yes, and..’? I have heard it somewhere.",
      answer:
        '"Yes, And" is a fundamental improv rule where you accept what your scene partner offers ("Yes") and then build on it ("And"). This keeps the scene flowing and encourages creativity and collaboration.',
    },
    {
      question: "Where do you come up with such great prompts?",
      answer:
        "Well, that's a secret but you could see it for yourself in our sessions.",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-aloja text-4xl md:text-5xl font-bold text-primary text-center mb-12">
            Frequently Asked Questions
          </h1>

          <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-md p-6">
            {faqs.map((faq, index) => (
              <FaqItem key={index} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
