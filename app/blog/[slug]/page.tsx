import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Blog post data
const blogPosts = [
  {
    slug: "monday-comedy-night",
    title: "🌀 Don't Let Monday Win — Fight Back with Comedy 🎭",
    date: "May 10, 2025",
    readTime: "3 min read",
    image: "/blog/monday-comedy.MP4",
    thumbnail: "/blog/monday-comedy.jpg",
    content: [
      {
        type: "paragraph",
        text: "Back-to-back meetings. Overflowing inbox. Coffee that stopped working at 3 PM. Sound familiar?",
      },
      {
        type: "paragraph",
        text: "It's time for a reset — and we're offering one you won't find in your Google Calendar.",
      },
      {
        type: "paragraph",
        text: "Join us for an Improv Game Night at antiSOCIAL — a casual, high-energy evening of unscripted comedy. Not your usual stand-ups or plays, but improv comedy! Whether you want to jump on stage or just enjoy the chaos from the crowd, this has to be your weekly palate cleanser.",
      },
      {
        type: "paragraph",
        text: 'So, step away from the spreadsheets and hop into a space where "Yes, and…" is the only rule. Come laugh, connect, and maybe even surprise yourself.',
      },
      {
        type: "paragraph",
        text: "#Improv #WorkLifeBalance #MondayMotivation #CreativityAtWork #LiveEvents #Networking #LaughterIsProductive #antiSOCIAL #ImprovJam",
      },
    ],
  },
  {
    slug: "tadgola-refreshing-ritual",
    title: "It's 35⁰C outside but feels a sweet 24⁰C at Tadgola..",
    date: "April 25, 2025",
    readTime: "4 min read",
    image: "/blog/tadgola-refreshing2.jpg",
    thumbnail: "/blog/tadgola-refreshing.jpg",
    content: [
      {
        type: "paragraph",
        text: "Yes, it's hot. But somehow, when you're laughing, playing, and vibing with strangers-turned-friends, you forget all about the heat.",
      },
      {
        type: "paragraph",
        text: "Tadgola is Mumbai's most refreshing new ritual — a weekly improv jam session where people come together to play spontaneous, unscripted games.",
      },
      {
        type: "paragraph",
        text: "The name comes from the summer fruit tadgola (Ice Apple) — light, cooling, and a true Mumbai classic. Just like the fruit, these sessions offer a refreshing break from routine, letting you unwind, connect, and be fully present.",
      },
      {
        type: "paragraph",
        text: "Improv, short for improvisation, is about making things up in the moment. No scripts, no pressure — just real, unfiltered fun. If you've ever made up an excuse on the fly or stumbled through small talk — congrats, you've already done improv.",
      },
      {
        type: "paragraph",
        text: "At Tadgola, we turn that everyday spontaneity into playful, joyful games that anyone can jump into. Think Whose Line Is It Anyway? or Comicstaan, but you're in on the action.",
      },
      {
        type: "paragraph",
        text: "Now one of Mumbai's coolest creative communities, Tadgola runs weekly sessions (Book tickets through BookMyShow!). People come curious about the games but stay because they enjoy it so much!",
      },
      {
        type: "paragraph",
        text: "📍Join the jam. Catch the vibe. Be Tadgola.",
      },
    ],
  },
  {
    slug: "improv-not-just-for-actors",
    title: "Improv is just for actors, right? Wrong.",
    date: "April 15, 2025",
    readTime: "3 min read",
    image: "/blog/improv-for-everyone.jpg",
    thumbnail: "/blog/improv-for-everyone.jpg",
    content: [
      {
        type: "paragraph",
        text: "When most people hear the word improv, they picture actors on stage, tossing out quick-witted one-liners. But improv isn't just a performance skill—it's a powerful tool anyone can use to improve communication, boost confidence, and unlock creativity.",
      },
      {
        type: "paragraph",
        text: "You don't need to be funny or outgoing to try it.",
      },
      {
        type: "paragraph",
        text: "At Tadgola, we've hosted over 30 sessions with participants from all walks of life—Marketing Managers, Investment Bankers, Students, Models and more. And one thing's clear: everyone LOVES doing improv.",
      },
      {
        type: "paragraph",
        text: "Improv strengthens your ability to think on your feet, stay present, and communicate clearly—skills that are invaluable in team meetings, client interactions, presentations, and everyday life.",
      },
      {
        type: "paragraph",
        text: "It's not about being a performer. It's about being open, and saying \"yes, and…\"",
      },
      {
        type: "paragraph",
        text: "A few minutes of play can lead to genuine connection, personal growth, and better collaboration.",
      },
      {
        type: "paragraph",
        text: "You don't have to be an actor to enjoy improv. You just have to show up!",
      },
      {
        type: "paragraph",
        text: "#improv #fun #employee #engagement",
      },
    ],
  },
]

// Function to render different content types
function renderContent(content: any[]) {
  return content.map((item, index) => {
    switch (item.type) {
      case "paragraph":
        return (
          <p key={index} className="text-foreground/80 mb-6 text-lg" dangerouslySetInnerHTML={{ __html: item.text }} />
        )
      case "heading":
        return (
          <h2 key={index} className="text-2xl md:text-3xl font-bold text-primary mb-4 mt-8">
            {item.text}
          </h2>
        )
      case "subheading":
        return (
          <h3 key={index} className="text-xl md:text-2xl font-semibold text-primary mb-3 mt-6">
            {item.text}
          </h3>
        )
      case "list":
        return (
          <ul key={index} className="list-disc pl-6 mb-6 space-y-2">
            {item.items.map((listItem: string, listIndex: number) => (
              <li
                key={listIndex}
                className="text-foreground/80 text-lg"
                dangerouslySetInnerHTML={{ __html: listItem }}
              />
            ))}
          </ul>
        )
      default:
        return null
    }
  })
}

export default async function BlogPostPage(props: { params: { slug: string } }) {
  const { slug } = await props.params

  const post = blogPosts.find((post) => post.slug === slug)

  if (!post) {
    notFound()
  }

  const relatedPosts = blogPosts.filter((p) => p.slug !== slug)

  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to all posts</span>
            </Link>

            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-6">{post.title}</h1>

              <div className="flex flex-wrap items-center text-muted-foreground gap-4 mb-6">
                <div className="flex items-center">
                  <Calendar className="h-4 w-4 mr-1" />
                  <span>{post.date}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-4 w-4 mr-1" />
                  <span>{post.readTime}</span>
                </div>
              </div>
            </div>

            {/* Featured media */}
            <div className="flex justify-center items-center mb-8">
              <div className="relative w-full max-w-2xl rounded-xl overflow-hidden shadow-lg">
                {post.image.endsWith('.MP4') || post.image.endsWith('.mp4') ? (
                  <video
                    src={post.image}
                    className="w-full h-auto max-h-[80vh] mx-auto"
                    controls
                    autoPlay
                    muted
                    loop
                    playsInline
                  />
                ) : (
                  <Image
                    src={post.image || "/placeholder.svg?height=600&width=1200"}
                    alt={post.title}
                    width={800}
                    height={450}
                    className="w-full object-cover"
                    priority
                  />
                )}
              </div>
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none">{renderContent(post.content)}</div>

            {/* Author section */}
            <div className="mt-12 border-t border-border">
            </div>

            {/* Related posts */}
            <div className="mt-12">
              <h2 className="text-2xl font-bold mb-6">You Might Also Enjoy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-40 w-full">
                        <Image
                          src={relatedPost.thumbnail || "/placeholder.svg?height=300&width=500"}
                          alt={relatedPost.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      </div>
                      <div className="p-4">
                        <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                          {relatedPost.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {relatedPost.date} • {relatedPost.readTime}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <Footer />
    </main>
  )
}
