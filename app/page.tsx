import Header from "@/components/header"
import LandingSection from "@/components/landing-section"
import WhatWeDo from "@/components/what-we-do"
import Milestones from "@/components/milestones"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden">
      <Header />
      <LandingSection />
      <WhatWeDo />
      <Milestones />
      <Footer />
    </main>
  )
}
