import Link from "next/link"
import { Linkedin, Instagram, Mail } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-4 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-12 bg-accent/20 transform -skew-y-3"></div>
      <div className="absolute inset-0 bg-dots opacity-10"></div>
      <div className="circle-decoration w-64 h-64 -bottom-32 -left-32 opacity-10"></div>
      <div className="circle-decoration w-48 h-48 top-10 right-10 opacity-10"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 relative inline-block">
              <span>Tadgola</span>
              <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent"></span>
            </h2>
            <p className="max-w-md text-white/80 mb-8">
              Tadgola brings the magic of improv to everybody! From corporate teams to social mixers, from actor
              training to kids workshops, we craft tailored experiences that energize and inspire every kind of group.
              Let's create together!
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
                { href: "/", label: "Blog" },
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

            <div className="mt-4">
              <h3 className="text-xl font-semibold mb-4 relative inline-block">
                <span>Contact</span>
                <span className="absolute -bottom-2 left-0 w-full h-1 bg-accent"></span>
              </h3>
              <div className="grid grid-cols-2 gap-4 text-white/80">
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
                      style={{ filter: "brightness(0) invert(1)" }} // Makes it white to match footer text
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

        <div className="mt-6 pt-4 border-t border-white/20 text-center">
          <p className="text-white/70 text-xs mt-1">© 2025 Tadgola. All rights reserved.</p>
          <p className="text-white/70 text-xs mt-1">
            Tadgola is a registered trademark and the exclusive property of FullHouse Ventures.
          </p>
          <p className="text-white/70 text-xs mt-1">
            FullHouse Ventures is a registered partnership firm under the Indian Partnership Act, 1932.
          </p>
          <p className="text-white/50 text-sm mt-8">Designed and Developed by Adit Khandelwal</p>
        </div>
      </div>
    </footer>
  )
}
