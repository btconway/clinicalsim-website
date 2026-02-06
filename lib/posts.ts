export interface Post {
  slug: string
  title: string
  description: string
  date: string
  author: string
  readingTime: string
  tags: string[]
}

const posts: Post[] = [
  {
    slug: "end-of-life-care-communication",
    title: "End-of-Life Conversations: Practice Makes Progress",
    description: "EOL conversations are low-frequency, high-stakes events. Traditional training models cant provide the practice clinicians need.",
    date: "2026-02-06",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["end-of-life", "palliative care", "communication"],
  },
  {
    slug: "end-of-life-care-communication",
    title: "End-of-Life Conversations: Practice Makes Progress",
    description: "EOL conversations are low-frequency, high-stakes events. Traditional training models cant provide the practice clinicians need.",
    date: "2026-02-06",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["end-of-life", "palliative care", "communication"],
  },
  {
    slug: "why-communication-training-matters",
    title: "Why Communication Training Matters",
    description: "Communication failures are the leading driver of malpractice claims, yet most physicians receive minimal structured training. The gap between what's at stake and how we prepare is wider than most realize.",
    date: "2025-01-15",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["communication", "malpractice", "training gap"],
  },
  {
    slug: "pilot-study-results",
    title: "What Our Pilot Study Revealed",
    description: "A randomized controlled trial with PICU fellows showed that AI-powered practice improves confidence, reduces anxiety, and produces measurable gains on validated assessment tools.",
    date: "2025-02-01",
    author: "ClinicalSim.ai Team",
    readingTime: "6 min read",
    tags: ["research", "pilot study", "evidence"],
  },
  {
    slug: "scalability-problem-sp-programs",
    title: "The Scalability Problem with Standardized Patient Programs",
    description: "Traditional SP encounters cost $150-300 each and can't scale to meet demand. Why AI augments — rather than replaces — existing simulation programs.",
    date: "2025-02-15",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["standardized patients", "cost", "scalability"],
  },
]

export function getAllPosts(): Post[] {
  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
}

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}
