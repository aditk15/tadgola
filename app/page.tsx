import Header from "@/components/header"
import LandingSection from "@/components/landing-section"
import WhatWeDo from "@/components/what-we-do"
import Milestones from "@/components/milestones"
import ReviewsSection from "@/components/reviews-section"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <LandingSection />
      <WhatWeDo />
      <Milestones />
      <ReviewsSection />
      <Footer />
    </main>
  )
}
