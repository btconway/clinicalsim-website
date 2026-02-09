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
    slug: "osce-case-design-guide",
    title: "How to Design Effective OSCE Cases: A Practical Guide for Medical Educators",
    description: "Proven strategies for creating OSCE cases that assess clinical competence. Practical frameworks, common pitfalls, and validation methods.",
    date: "2026-02-09",
    author: "ClinicalSim.ai Team",
    readingTime: "10 min read",
    tags: ["OSCE", "case design", "medical education", "assessment"],
  },
  {
    slug: "hospital-communication-training-roi",
    title: "The ROI of Communication Training: By the Numbers",
    description: "The business case for communication training is clear: reduced malpractice risk, improved HCAHPS scores, and better outcomes.",
    date: "2026-02-09",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["ROI", "communication training", "hospital administration"],
  },
  {
    slug: "healthcare-simulation-technology-trends",
    title: "Where Medical Simulation Is Headed in 2026",
    description: "From VR to AI voice agents, medical simulation technology is evolving rapidly. Heres what matters for 2026.",
    date: "2026-02-08",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["simulation", "technology trends", "medical education"],
  },
  {
    slug: "breaking-bad-news-medical-training",
    title: "Breaking Bad News: The Skill No One Teaches",
    description: "Breaking bad news is a core clinical skill — yet most physicians have never practiced it before doing it for real.",
    date: "2026-02-07",
    author: "ClinicalSim.ai Team",
    readingTime: "5 min read",
    tags: ["breaking bad news", "medical training", "communication"],
  },
  {
    slug: "what-learners-want-from-ai-sps",
    title: "What Medical Learners Actually Want from AI Standardized Patients",
    description: "New CHI 2026 research reveals six key requirements for AI-SP design—straight from the medical students who would use them.",
    date: "2026-02-07",
    author: "ClinicalSim.ai Team",
    readingTime: "6 min read",
    tags: ["research", "AI-SP", "medical education", "HCI"],
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
