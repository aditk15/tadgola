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
  author: string
  slug: string
  image: string
}

function BlogPostCard({ title, excerpt, date, readTime, author, slug, image }: BlogPostProps) {
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

        <p className="text-foreground/80 mb-4">{excerpt}</p>

        <div className="flex items-center">
          <User className="h-4 w-4 text-primary mr-2" />
          <span className="text-sm font-medium">{author}</span>
        </div>
      </div>
    </article>
  )
}

export default function BlogPage() {
  // Sample blog posts data
  const blogPosts: BlogPostProps[] = [
    {
      title: "The Power of 'Yes, And' in Everyday Life",
      excerpt: "Discover how the fundamental rule of improv can transform your personal and professional interactions.",
      date: "May 1, 2025",
      readTime: "5 min read",
      author: "Malay",
      slug: "power-of-yes-and",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Improv Games to Break the Ice at Your Next Team Meeting",
      excerpt: "Simple, fun improv exercises that can energize your team and foster better communication.",
      date: "April 15, 2025",
      readTime: "7 min read",
      author: "Krish",
      slug: "improv-games-for-meetings",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "How Improv Helped Me Overcome Social Anxiety",
      excerpt: "A personal journey of transformation through the power of improvisational theater.",
      date: "March 28, 2025",
      readTime: "8 min read",
      author: "Guest Writer",
      slug: "improv-and-social-anxiety",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "The Science Behind Improv: Why It Works for Team Building",
      excerpt: "Research-backed insights into how and why improvisation creates stronger, more cohesive teams.",
      date: "March 10, 2025",
      readTime: "6 min read",
      author: "Malay",
      slug: "science-of-improv",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "From Stage to Boardroom: Corporate Improv Success Stories",
      excerpt: "Real-world examples of how companies have used improv training to solve business challenges.",
      date: "February 22, 2025",
      readTime: "9 min read",
      author: "Krish",
      slug: "corporate-improv-stories",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      title: "Improv for Kids: Building Confidence Through Play",
      excerpt: "How improvisation games can help children develop social skills and self-assurance.",
      date: "February 5, 2025",
      readTime: "4 min read",
      author: "Guest Writer",
      slug: "improv-for-kids",
      image: "/placeholder.svg?height=400&width=600",
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
