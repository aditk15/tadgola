import Link from "next/link"
import { Phone, Linkedin, Instagram, MessageSquare, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-16 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-accent/20 transform -skew-y-3"></div>
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="circle-decoration w-64 h-64 -bottom-32 -left-32 opacity-10"></div>
      <div className="circle-decoration w-48 h-48 top-10 right-10 opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span>Tadgola</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent"></span>
            </h2>
            <p className="max-w-md text-white/80 mb-8">
              Bringing the joy of improvisation to everyone. Join us on this creative journey where every moment is an
              opportunity for spontaneous magic!
            </p>

            <div className="flex space-x-4">
              <Link
                href="https://www.instagram.com/_tadgola"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="https://www.linkedin.com/company/tadgola/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link
                href="mailto:improv@tadgola.com"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors duration-300"
              >
                <Mail className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-6 relative inline-block">
              <span>Quick Links</span>
              <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {[
                { href: "/about", label: "About Us" },
                { href: "/faqs", label: "FAQs" },
                { href: "/prompt-generator", label: "Prompt Generator" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link key={link.href} href={link.href} className="hover:text-accent transition-colors relative group">
                  <span>{link.label}</span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-4 relative inline-block">
                <span>Contact</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
              </h3>
              <div className="space-y-3 text-white/80">
              <Link 
                href="https://wa.me/919082298083" 
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-accent transition-colors"
              >
                <div className="relative flex items-center justify-center">
                  <img 
                    src="/whatsapp.svg" 
                    alt="WhatsApp"
                    className="h-4 w-4"
                    style={{ filter: 'brightness(0) invert(1)' }} // Makes it white to match footer text
                  />
                </div>
                <span>+91 90822 98083</span>
              </Link>
                <Link
                  href="mailto:info@tadgola.com"
                  className="flex items-center gap-2 hover:text-accent transition-colors"
                >
                  <Mail className="h-4 w-4" />
                  <span>improv@tadgola.com</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/20 text-center">
          <p className="text-white/70">© {new Date().getFullYear()} Tadgola. All rights reserved.</p>
          <p className="text-white/50 text-sm mt-1">Designed and Developed by Adit Khandelwal</p>
        </div>
      </div>
    </footer>
  )
}
