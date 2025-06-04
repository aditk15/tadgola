import Header from "@/components/header"
import Footer from "@/components/footer"
import { Phone, Linkedin, Instagram, MessageSquare, Mail, MapPin, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              

              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 relative inline-block">
                <span className="relative z-10">Get in Touch</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg text-foreground/70 mb-8">
                We'd love to hear from you! Connect with us through any of the channels below and become part of the
                Tadgola improv community.
              </p>
            </div>

            <div className="grid grid-cols-1 gap-12">
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden relative">
                <div className="absolute inset-0 bg-dots opacity-10"></div>
                <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blob"></div>
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-accent/5 rounded-full translate-y-1/2 -translate-x-1/2 blob-small"></div>

                <div className="p-8 md:p-12 relative z-10">
                  <h2 className="text-2xl md:text-3xl font-bold mb-8 relative inline-block">
                    <span>Connect With Us</span>
                    <span className="absolute -bottom-2 left-0 w-full h-2 bg-accent"></span>
                  </h2>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-background to-muted p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <Link
                          href="mailto:improv@tadgola.com"
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Mail className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Email</h3>
                            <p className="text-foreground/70">improv@tadgola.com</p>
                          </div>
                          <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-background to-muted p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <Link
                          href="https://wa.me/919082298083"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                            <img 
                              src="/whatsapp.svg" 
                              alt="WhatsApp"
                              className="h-6 w-6 filter group-hover:brightness-100 text-primary"
                              style={{ filter: 'invert(17%) sepia(85%) saturate(3107%) hue-rotate(333deg) brightness(87%) contrast(96%)' }}
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">WhatsApp</h3>
                            <p className="text-foreground/70">+91 90822 98083</p>
                          </div>
                          <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div>

                      {/* <div className="bg-gradient-to-br from-background to-muted p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <Link
                          href="tel:+919082298083"
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Phone className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Call Us</h3>
                            <p className="text-foreground/70">+91 90822 98083</p>
                          </div>
                          <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div> */}
                    </div>

                    <div className="space-y-8">
                      <div className="bg-gradient-to-br from-background to-muted p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <Link
                          href="https://www.instagram.com/_tadgola"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Instagram className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Instagram</h3>
                            <p className="text-foreground/70">@_tadgola</p>
                          </div>
                          <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div>

                      <div className="bg-gradient-to-br from-background to-muted p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <Link
                          href="https://www.linkedin.com/company/tadgola/"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                            <Linkedin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">LinkedIn</h3>
                            <p className="text-foreground/70">Tadgola</p>
                          </div>
                          <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div>

                      {/* <div className="bg-gradient-to-br from-background to-muted p-6 rounded-xl transform transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg group">
                        <Link
                          href="https://goo.gl/maps/1234"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-4 group-hover:text-primary transition-colors"
                        >
                          <div className="bg-primary/10 p-4 rounded-full group-hover:bg-primary/20 transition-colors">
                            <MapPin className="h-6 w-6 text-primary" />
                          </div>
                          <div>
                            <h3 className="font-bold text-lg mb-1">Location</h3>
                            <p className="text-foreground/70">Mumbai, India</p>
                          </div>
                          <ArrowRight className="h-5 w-5 ml-auto opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                        </Link>
                      </div> */}
                    </div>
                  </div>

                  <div className="mt-12 text-center">
                    <p className="text-lg font-medium mb-4">
                      Follow us on social media for updates on upcoming shows and events!
                    </p>
                    <div className="flex justify-center space-x-4">
                      <Link
                        href="https://www.instagram.com/_tadgola"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <Instagram className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://www.linkedin.com/company/tadgola/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <Linkedin className="h-6 w-6" />
                      </Link>
                      <Link
                        href="https://wa.me/919082298083"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300 group"
                      >
                        <div className="relative">
                          {/* Black version (shown by default, hidden on hover) */}
                          <img 
                            src="/whatsapp.svg" 
                            alt="WhatsApp"
                            className="h-6 w-6 group-hover:opacity-0 absolute transition-opacity duration-300"
                            style={{ filter: 'brightness(0)' }} // This applies black color
                          />
                          
                          {/* White version (hidden by default, shown on hover) */}
                          <img 
                            src="/whatsapp.svg" 
                            alt="WhatsApp"
                            className="h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                            style={{ filter: 'brightness(0) invert(1)' }} // This remains the same for white
                          />
                        </div>                      
                      </Link>
                      <Link
                        href="mailto:improv@tadgola.com"
                        className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-white transition-colors duration-300"
                      >
                        <Mail className="h-6 w-6" />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form - Commented Out as requested */}
              {/* 
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
              */}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
