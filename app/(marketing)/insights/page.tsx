import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { getAllPosts } from "@/lib/posts"

export default function InsightsPage() {
  const posts = getAllPosts()

  return (
    <>
      {/* Hero */}
      <section className="text-center px-6 pt-20 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-light shimmer text-gray-900 mb-6 leading-tight">Insights</h1>
          <p className="text-xl text-gray-600 font-light leading-relaxed">
            Research, analysis, and perspectives on communication training in medical education.
          </p>
        </div>
      </section>

      {/* Posts Grid */}
      <section className="px-6 pb-16 md:pb-24">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/insights/${post.slug}`}>
                <Card className="group h-full bg-white/70 backdrop-blur-sm border-white/20 hover:bg-white/90 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="flex items-center gap-3 text-sm text-gray-500 font-light mb-3">
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          year: "numeric",
                          month: "long",
                          day: "numeric",
                        })}
                      </time>
                      <span>&middot;</span>
                      <span>{post.readingTime}</span>
                    </div>
                    <h2 className="text-xl font-medium text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 font-light leading-relaxed flex-grow">
                      {post.description}
                    </p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {post.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-light"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
