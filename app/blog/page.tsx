import Header from "@/components/header"
import Footer from "@/components/footer"
import Link from "next/link"
import Image from "next/image"
import { Calendar, Clock, User } from "lucide-react"

interface BlogPostProps {
  title: string
  excerpt: string
  date: string
  readTime: string
  slug: string
  image: string
  thumbnail?: string
}

function BlogPostCard({ title, excerpt, date, readTime, slug, image }: BlogPostProps) {
  return (
    <article className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-lg">
      <Link href={`/blog/${slug}`} className="block">
        <div className="relative h-60 overflow-hidden">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
        </div>
      </Link>
      <div className="p-6">
        <div className="flex items-center text-sm text-muted-foreground mb-3 space-x-4">
          <div className="flex items-center">
            <Calendar className="h-4 w-4 mr-1" />
            <span>{date}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-4 w-4 mr-1" />
            <span>{readTime}</span>
          </div>
        </div>

        <Link href={`/blog/${slug}`}>
          <h2 className="text-2xl font-bold mb-2 hover:text-primary transition-colors">{title}</h2>
        </Link>
      </div>
    </article>
  )
}

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts: BlogPostProps[] = [
    {
      title: "🌀 Don't Let Monday Win — Fight Back with Comedy 🎭",
      excerpt:
        "Back-to-back meetings. Overflowing inbox. Coffee that stopped working at 3 PM. Sound familiar? It's time for a reset — and we're offering one you won't find in your Google Calendar.",
      date: "May 15, 2025",
      readTime: "3 min read",
      slug: "monday-comedy-night",
      image: "/blog/monday-comedy.jpg",
    },
    {
      title: "It's 35⁰C outside but feels a sweet 24⁰C at Tadgola..",
      excerpt:
        "Yes, it's hot. But somehow, when you're laughing, playing, and vibing with strangers-turned-friends, you forget all about the heat. Tadgola is Mumbai's most refreshing new ritual.",
      date: "April 25, 2025",
      readTime: "4 min read",
      slug: "tadgola-refreshing-ritual",
      image: "/blog/tadgola-refreshing.jpg",
    },
    {
      title: "Improv is just for actors, right? Wrong.",
      excerpt:
        "When most people hear the word improv, they picture actors on stage, tossing out quick-witted one-liners. But improv isn't just a performance skill—it's a powerful tool anyone can use.",
      date: "April 15, 2025",
      readTime: "3 min read",
      slug: "improv-not-just-for-actors",
      image: "/blog/improv-for-everyone.jpg",
    },
  ]

  return (
    <main className="min-h-screen">
      <Header />

      <section className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl text-primary mb-6 relative inline-block">
                <span className="relative z-10">Tadgola Blog</span>
                <span className="absolute -bottom-2 left-0 w-full h-4 bg-accent/30 -skew-x-3"></span>
              </h1>

              <p className="max-w-2xl mx-auto text-lg text-foreground/70">
                Insights, stories, and tips from the world of improvisation. Discover how improv can transform your
                life, work, and play.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <BlogPostCard key={index} {...post} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
