import Header from "@/components/header"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, ArrowLeft } from "lucide-react"
import { notFound } from "next/navigation"

// Blog post data
const blogPosts = [
  {
    slug: "monday-comedy-night",
    title: "🌀 Don't Let Monday Win — Fight Back with Comedy 🎭",
    date: "May 10, 2025",
    readTime: "3 min read",
    author: "Malay",
    image: "/blog/monday-comedy.jpg",
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
        type: "heading",
        text: "Event Details",
      },
      {
        type: "list",
        items: [
          "<strong>Location:</strong> antiSOCIAL, Lower Parel",
          "<strong>Schedule:</strong> Every Monday",
          "<strong>Time:</strong> 8PM Onwards",
          "<strong>Tickets:</strong> <a href='https://lnkd.in/dthWZYrS' class='text-primary hover:underline'>Book Here</a>",
        ],
      },
      {
        type: "paragraph",
        text: 'So, step away from the spreadsheets and hop into a space where "Yes, and…" is the only rule. Come laugh, connect, and maybe even surprise yourself.',
      },
      {
        type: "heading",
        text: "Why Monday Nights?",
      },
      {
        type: "paragraph",
        text: "Mondays are universally dreaded. The weekend glow has faded, and five long workdays stretch ahead. But what if you could transform Monday into something to look forward to?",
      },
      {
        type: "paragraph",
        text: "Our Monday night improv sessions are strategically scheduled to break the cycle of Monday blues. Instead of heading home to scroll through social media or binge-watch another series, you can engage in real, human connection and creative play.",
      },
      {
        type: "heading",
        text: "What to Expect",
      },
      {
        type: "paragraph",
        text: "Never done improv before? Perfect! Most of our participants are first-timers or casual players. Here's what a typical evening looks like:",
      },
      {
        type: "list",
        items: [
          "<strong>Warm-up games:</strong> Simple, fun activities to get everyone comfortable",
          "<strong>Short-form improv:</strong> Quick games and scenes that anyone can join",
          "<strong>Audience participation:</strong> Opportunities to suggest ideas or join in (completely optional!)",
          "<strong>Networking:</strong> Meet diverse, interesting people in a relaxed setting",
        ],
      },
      {
        type: "paragraph",
        text: "The beauty of improv is that there's no wrong way to do it. The only rule is to support each other and build on what's offered—a refreshing change from the critical thinking required in most workplaces.",
      },
      {
        type: "heading",
        text: "Benefits Beyond the Laughs",
      },
      {
        type: "paragraph",
        text: "While you'll certainly leave with a smile, the benefits of improv extend far beyond entertainment:",
      },
      {
        type: "list",
        items: [
          "<strong>Stress reduction:</strong> Laughter and play are proven stress relievers",
          "<strong>Improved communication:</strong> Practice listening and responding authentically",
          "<strong>Boosted creativity:</strong> Exercise your creative muscles in a low-stakes environment",
          "<strong>Expanded network:</strong> Connect with people outside your usual social circles",
        ],
      },
      {
        type: "paragraph",
        text: "Many participants report that the skills they develop in our improv sessions translate directly to increased confidence in meetings, presentations, and everyday conversations.",
      },
      {
        type: "heading",
        text: "Join Us Next Monday",
      },
      {
        type: "paragraph",
        text: "Don't let another Monday slip by in a blur of emails and meetings. Give yourself the gift of play, connection, and unexpected joy.",
      },
      {
        type: "paragraph",
        text: "Book your spot now and transform the most dreaded day of the week into one you actually look forward to. Your future self (especially Tuesday morning self) will thank you.",
      },
      {
        type: "paragraph",
        text: "<a href='https://lnkd.in/dthWZYrS' class='text-primary font-bold hover:underline'>Click here to book tickets</a> or find us on Instagram <a href='https://www.instagram.com/_tadgola' class='text-primary font-bold hover:underline'>@_tadgola</a> for the latest updates.",
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
    author: "Krish",
    image: "/blog/tadgola-refreshing.jpg",
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
        type: "heading",
        text: "What is Improv, Really?",
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
        type: "heading",
        text: "Mumbai's Coolest Creative Community",
      },
      {
        type: "paragraph",
        text: "Now one of Mumbai's coolest creative communities, Tadgola runs weekly sessions (Book tickets through BookMyShow!). People come curious about the games but stay because they enjoy it so much!",
      },
      {
        type: "paragraph",
        text: "What makes Tadgola special isn't just the games we play, but the community we're building. In a city known for its hustle and sometimes impersonal pace, we're creating a space where genuine connection happens naturally.",
      },
      {
        type: "heading",
        text: "A Typical Tadgola Session",
      },
      {
        type: "paragraph",
        text: "Walk into a Tadgola session and you'll immediately notice the energy. There's laughter, movement, and a palpable sense of possibility. Here's what you can expect:",
      },
      {
        type: "list",
        items: [
          "<strong>Welcome circle:</strong> A quick introduction to break the ice",
          "<strong>Warm-up games:</strong> Simple activities to get everyone comfortable and present",
          "<strong>Short-form improv:</strong> Fun, accessible games that anyone can join",
          "<strong>Scene work:</strong> Creating spontaneous stories and characters together",
          "<strong>Cool-down and reflection:</strong> A chance to share experiences and insights",
        ],
      },
      {
        type: "paragraph",
        text: "The beauty of our sessions is that they're designed for everyone—whether you're an experienced performer or someone who gets nervous speaking in public. There's no pressure to be funny or clever; the focus is on being present and supportive.",
      },
      {
        type: "heading",
        text: "The Science Behind the Fun",
      },
      {
        type: "paragraph",
        text: "While Tadgola sessions feel like pure play, there's actually some serious science behind why they leave you feeling so good:",
      },
      {
        type: "list",
        items: [
          "<strong>Endorphin release:</strong> Laughter triggers the release of endorphins, your body's natural feel-good chemicals",
          "<strong>Mindfulness practice:</strong> Improv requires being fully present, a form of active mindfulness",
          "<strong>Social connection:</strong> Humans are wired for connection, and improv creates authentic social bonds",
          "<strong>Flow state:</strong> The spontaneous nature of improv can induce 'flow'—a state of complete immersion and enjoyment",
        ],
      },
      {
        type: "paragraph",
        text: "This explains why, even on the hottest Mumbai day, a Tadgola session can leave you feeling refreshed and energized rather than drained.",
      },
      {
        type: "heading",
        text: "Join the Movement",
      },
      {
        type: "paragraph",
        text: "Tadgola isn't just an event—it's a movement toward more play, presence, and genuine connection in our daily lives. In a world dominated by screens and schedules, we're creating space for spontaneity and joy.",
      },
      {
        type: "paragraph",
        text: "Whether you're looking to boost your confidence, expand your social circle, or simply have a different kind of fun, we invite you to join us.",
      },
      {
        type: "paragraph",
        text: "📍Join the jam. Catch the vibe. Be Tadgola.",
      },
      {
        type: "paragraph",
        text: "Book your tickets on <a href='https://in.bookmyshow.com/events/tadgola/ET00439465' class='text-primary font-bold hover:underline'>BookMyShow</a> or follow us on Instagram <a href='https://www.instagram.com/_tadgola' class='text-primary font-bold hover:underline'>@_tadgola</a> for the latest updates.",
      },
    ],
  },
  {
    slug: "improv-not-just-for-actors",
    title: "Improv is just for actors, right? Wrong.",
    date: "April 15, 2025",
    readTime: "3 min read",
    author: "Malay",
    image: "/blog/improv-for-everyone.jpg",
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
        type: "heading",
        text: "Improv in the Professional World",
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
        type: "heading",
        text: "Who Benefits from Improv?",
      },
      {
        type: "paragraph",
        text: "The short answer: everyone. But here are some specific groups who find particular value in improv training:",
      },
      {
        type: "list",
        items: [
          "<strong>Business professionals:</strong> Improve presentation skills, adaptability, and creative problem-solving",
          "<strong>Team leaders:</strong> Develop better listening skills and learn to build on team members' ideas",
          "<strong>Introverts:</strong> Build confidence in social situations in a supportive environment",
          "<strong>People with social anxiety:</strong> Practice social interactions in a structured, low-pressure setting",
          "<strong>Anyone seeking personal growth:</strong> Develop presence, spontaneity, and authentic self-expression",
        ],
      },
      {
        type: "heading",
        text: "Real Skills for Real Life",
      },
      {
        type: "paragraph",
        text: "The skills developed through improv aren't just for the stage—they're life skills that transfer to countless real-world situations:",
      },
      {
        type: "list",
        items: [
          "<strong>Active listening:</strong> In improv, you must truly listen to respond authentically, not just wait for your turn to speak",
          "<strong>Adaptability:</strong> Improv teaches you to embrace the unexpected rather than fear it",
          "<strong>Collaboration:</strong> The foundation of improv is building on others' ideas rather than blocking them",
          "<strong>Presence:</strong> Improv requires being fully in the moment—a rare skill in our distraction-filled world",
          "<strong>Risk-taking:</strong> Regular practice taking small risks in improv builds confidence for bigger risks in life",
        ],
      },
      {
        type: "heading",
        text: "What Our Participants Say",
      },
      {
        type: "paragraph",
        text: "Don't just take our word for it. Here's what some of our non-actor participants have shared about their Tadgola experience:",
      },
      {
        type: "paragraph",
        text: "&quot;I came to Tadgola thinking I'd be terrible at improv because I'm not naturally funny. But it wasn't about being funny—it was about being present and supportive. I use the listening skills I learned in my management role every day.&quot; — Priya, Marketing Manager",
      },
      {
        type: "paragraph",
        text: "&quot;As someone who works with numbers all day, I was surprised by how much I enjoyed the creative aspects of improv. It's like using a different part of my brain, and I've noticed I'm more creative in problem-solving at work too.&quot; — Rahul, Investment Banker",
      },
      {
        type: "paragraph",
        text: "&quot;I'm naturally shy, so improv seemed terrifying at first. But the supportive environment at Tadgola made it feel safe to step outside my comfort zone. I've gained so much confidence!&quot; — Aisha, Student",
      },
      {
        type: "heading",
        text: "Try It for Yourself",
      },
      {
        type: "paragraph",
        text: "You don't have to be an actor to enjoy improv. You just have to show up!",
      },
      {
        type: "paragraph",
        text: "At Tadgola, we create a supportive environment where anyone can experience the joy and benefits of improvisation. Our sessions are designed to be accessible to complete beginners while still engaging for those with more experience.",
      },
      {
        type: "paragraph",
        text: "Join us for a session and discover what improv can do for you—no acting experience required.",
      },
      {
        type: "paragraph",
        text: "Book your spot on <a href='https://in.bookmyshow.com/events/tadgola/ET00439465' class='text-primary font-bold hover:underline'>BookMyShow</a> or follow us on Instagram <a href='https://www.instagram.com/_tadgola' class='text-primary font-bold hover:underline'>@_tadgola</a> for the latest updates.",
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

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  // Find the blog post with the matching slug
  const post = blogPosts.find((post) => post.slug === params.slug)

  // If no matching post is found, return 404
  if (!post) {
    notFound()
  }

  // Get related posts (excluding the current post)
  const relatedPosts = blogPosts.filter((p) => p.slug !== params.slug)

  return (
    <main className="min-h-screen">
      <Header />

      <article className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Back to blog link */}
            <Link
              href="/blog"
              className="inline-flex items-center text-primary hover:text-primary/80 mb-8 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              <span>Back to all posts</span>
            </Link>

            {/* Post header */}
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
                <div className="flex items-center">
                  <User className="h-4 w-4 mr-1" />
                  <span>{post.author}</span>
                </div>
              </div>
            </div>

            {/* Featured image */}
            <div className="relative h-[400px] w-full mb-8 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={post.image || "/placeholder.svg?height=600&width=1200"}
                alt={post.title}
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Post content */}
            <div className="prose prose-lg max-w-none">{renderContent(post.content)}</div>

            {/* Author section */}
            <div className="mt-12 pt-8 border-t border-border">
              <h2 className="text-xl font-bold mb-4">About the Author</h2>
              <p className="text-foreground/80">
                {post.author === "Malay" &&
                  "Malay is a co-founder of Tadgola and has been practicing improv for over 5 years. He is passionate about bringing the joy of improvisation to everyone."}
                {post.author === "Krish" &&
                  "Krish is a co-founder of Tadgola with extensive experience in corporate improv training. He believes improv can transform both individuals and organizations."}
                {post.author === "Guest Writer" &&
                  "This article was contributed by a guest writer from the Tadgola community who is passionate about sharing their improv journey and insights."}
              </p>
            </div>

            {/* Related posts */}
            <div className="mt-16">
              <h2 className="text-2xl font-bold mb-6">You Might Also Enjoy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {relatedPosts.map((relatedPost) => (
                  <Link key={relatedPost.slug} href={`/blog/${relatedPost.slug}`} className="group">
                    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                      <div className="relative h-40 w-full">
                        <Image
                          src={relatedPost.image || "/placeholder.svg?height=300&width=500"}
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
