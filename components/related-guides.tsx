import Link from "next/link"
import { ChevronRight } from "lucide-react"

interface RelatedGuidesProps {
  currentPage?: string
}

export function RelatedGuides({ currentPage }: RelatedGuidesProps) {
  const relatedPosts = [
    {
      slug: "/luigi-live-resin",
      title: "Complete Luigi Oil 2026 Guide",
      description: "Master guide to Luigi products, Series 6, Fattones, and rosin pens",
    },
    {
      slug: "/blog/luigi-series-6-flavors-guide-2026",
      title: "Luigi Series 6 Flavors Guide",
      description: "All 10+ strains and flavor profiles explained",
    },
    {
      slug: "/blog/luigi-fattones-flavors-guide-2026",
      title: "Luigi Fattones Flavors Guide",
      description: "Complete pre-roll combo pack breakdown",
    },
    {
      slug: "/blog/how-to-verify-authentic-luigi-carts",
      title: "How to Verify Authentic Luigi Carts",
      description: "5-step authentication and spot counterfeits",
    },
  ]

  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 md:px-6 lg:px-8">
        <div className="mb-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            Related Luigi Guides
          </h3>
          <p className="text-gray-600">
            Explore more resources to enhance your Luigi experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {relatedPosts.map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="group bg-white rounded-lg p-6 border border-gray-200 hover:border-[#D4AF37] hover:shadow-lg transition-all"
            >
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <h4 className="font-semibold text-gray-900 group-hover:text-[#D4AF37] transition-colors mb-2">
                    {post.title}
                  </h4>
                  <p className="text-sm text-gray-600 mb-3">
                    {post.description}
                  </p>
                </div>
                <ChevronRight className="w-5 h-5 text-[#D4AF37] flex-shrink-0 ml-2 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-[#D4AF37] font-semibold hover:text-[#C5A028] transition-colors"
          >
            View All Luigi Blog Posts
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
