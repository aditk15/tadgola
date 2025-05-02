"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navLinks = [
    { href: "/about", label: "About Us" },
    { href: "/blog", label: "Blog" },
    { href: "/faqs", label: "FAQs" },
    { href: "/prompt-generator", label: "Improv Prompt Generator" },
    { href: "/contact", label: "Get in Touch" },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        scrolled ? "bg-primary shadow-lg py-0" : "bg-primary py-0",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center relative">
          {/* Decorative elements */}
          <div className="absolute -bottom-2 left-1/4 w-24 h-1 bg-accent rounded-full opacity-50 transform -rotate-3"></div>
          <div className="absolute -top-2 right-1/3 w-16 h-1 bg-accent rounded-full opacity-50 transform rotate-6"></div>

          <Link href="/" className="z-50 relative group">
            <div className="absolute -inset-2 bg-accent/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <Image
              src="/logo.svg?height=1800&width=750"
              alt="Tadgola logo"
              width={500}
              height={180}
              className="h-20 w-auto relative py-0"
            />
          </Link>

          {/* Desktop Navigation - Only visible on lg screens and above */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white font-medium hover:text-accent transition-all duration-300 relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button - Only visible below lg screens */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="lg:hidden z-50 p-2 focus:outline-none relative group"
            aria-label="Toggle menu"
          >
            <div className="absolute inset-0 bg-accent/20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300"></div>
            {isMenuOpen ? (
              <X className="h-6 w-6 text-accent relative" />
            ) : (
              <Menu className="h-6 w-6 text-white relative" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Sidebar - Only visible below lg screens */}
      <div
        className={cn(
          "lg:hidden fixed top-0 right-0 h-full w-full md:w-1/3 bg-background shadow-lg transform transition-transform duration-500 ease-in-out z-40",
          isMenuOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        <div className="absolute inset-0 bg-dots opacity-10"></div>
        <div className="flex flex-col h-full pt-24 px-8 relative">
          <nav className="space-y-6">
            {navLinks.map((item, index) => (
              <Link
                key={item.href}
                href={item.href}
                className="block text-xl font-medium hover:text-primary transition-all duration-300 transform hover:translate-x-2"
                onClick={() => setIsMenuOpen(false)}
                style={{ transitionDelay: `${index * 50}ms` }}
              >
                <span className="creative-text">{item.label}</span>
              </Link>
            ))}
          </nav>

          <div className="mt-auto mb-8">
            <div className="artistic-divider"></div>
            <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} Tadgola. All rights reserved.</p>
          </div>

          {/* Decorative elements */}
          <div className="circle-decoration w-32 h-32 top-1/4 -left-16"></div>
          <div className="circle-decoration w-24 h-24 bottom-1/4 right-8"></div>
        </div>
      </div>
    </header>
  )
}
