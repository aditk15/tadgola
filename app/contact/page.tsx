import Header from "@/components/header"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, Linkedin, Instagram, MessageSquare, Mail } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <h1 className="font-aloja text-4xl md:text-5xl font-bold text-primary text-center mb-12">Get in Touch</h1>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-bold mb-6">Contact Us</h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-1">
                    Name
                  </label>
                  <Input id="name" placeholder="Your name" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="Your email" />
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-medium mb-1">
                    Subject
                  </label>
                  <Input id="subject" placeholder="Subject" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-1">
                    Message
                  </label>
                  <Textarea id="message" placeholder="Your message" rows={5} />
                </div>

                <Button type="submit" className="w-full">
                  Send Message
                </Button>
              </form>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>

              <div className="space-y-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Contact Information</h3>

                  <div className="space-y-4">
                    <Link
                      href="tel:+1234567890"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Phone className="h-5 w-5 text-primary" />
                      <span>+1 (234) 567-890</span>
                    </Link>

                    <Link
                      href="mailto:info@tadgola.com"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Mail className="h-5 w-5 text-primary" />
                      <span>info@tadgola.com</span>
                    </Link>
                  </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="text-lg font-semibold mb-4">Social Media</h3>

                  <div className="space-y-4">
                    <Link
                      href="https://linkedin.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Linkedin className="h-5 w-5 text-primary" />
                      <span>LinkedIn</span>
                    </Link>

                    <Link
                      href="https://instagram.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <Instagram className="h-5 w-5 text-primary" />
                      <span>Instagram</span>
                    </Link>

                    <Link
                      href="https://wa.me/1234567890"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-foreground hover:text-primary transition-colors"
                    >
                      <MessageSquare className="h-5 w-5 text-primary" />
                      <span>WhatsApp</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
