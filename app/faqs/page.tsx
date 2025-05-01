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
        <h3 className="text-lg font-medium">{question}</h3>
        <ChevronDown
          className={cn("h-5 w-5 text-primary transition-transform duration-200", isOpen && "transform rotate-180")}
        />
      </button>
      <div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-96 pb-4" : "max-h-0")}>
        <p className="text-foreground/80">{answer}</p>
      </div>
    </div>
  )
}

export default function FaqsPage() {
  const faqs = [
    {
      question: "What exactly is improv?",
      answer:
        "Improvisation, or improv, is a form of live theater where the plot, characters, and dialogue are created in the moment. Unlike scripted performances, improv relies on spontaneity, creativity, and collaboration among performers. It's both an art form and a skill that can be developed through practice.",
    },
    {
      question: "Do I need experience to participate in your events?",
      answer:
        "Not at all! Our JAMs and workshops are designed for all experience levels, including complete beginners. We create a supportive environment where everyone can feel comfortable trying improv for the first time. Our only requirement is an open mind and willingness to play.",
    },
    {
      question: "How can I book Tadgola for a corporate event?",
      answer:
        "You can book us for corporate events by reaching out through our 'Get in Touch' page. We offer customized workshops and performances tailored to your company's goals, whether that's team building, communication skills, or simply providing entertainment for your event.",
    },
    {
      question: "What should I expect at my first improv JAM?",
      answer:
        "At your first JAM, you can expect a warm welcome, fun warm-up games, and gradually more involved improv exercises. Our facilitators guide the session, ensuring everyone feels included. You can participate as much or as little as you're comfortable with—many people start by watching and join in when they feel ready.",
    },
    {
      question: "How can improv benefit me personally or professionally?",
      answer:
        "Improv offers numerous benefits! Personally, it can boost confidence, enhance creativity, and reduce anxiety about public speaking. Professionally, improv improves communication skills, adaptability, team collaboration, and the ability to think on your feet. Many business leaders and professionals use improv techniques to enhance their leadership skills and foster innovation in their organizations.",
    },
    {
      question: "Are your shows family-friendly?",
      answer:
        "Yes, most of our regular shows are family-friendly and appropriate for all ages. We occasionally host special adult-oriented shows, but these are clearly marked in our event descriptions. If you have specific concerns about content, feel free to contact us before attending.",
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
