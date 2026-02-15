import {
  Building2,
  Stethoscope,
  GraduationCap,
  type LucideIcon,
} from "lucide-react"

export interface PainPoint {
  headline: string
  description: string
  stat?: string
  statSource?: string
}

export interface ValueProp {
  title: string
  description: string
}

export interface AudienceStatItem {
  value: string
  label: string
  source?: string
  variant: "warm" | "navy" | "blue" | "success"
}

export interface Audience {
  slug: string
  title: string
  shortTitle: string
  subtitle: string
  icon: LucideIcon
  colorVariant: "warm" | "navy" | "blue" | "success"

  // Homepage card bullets
  cardBullets: string[]

  // Hero
  heroHeadline: string
  heroDescription: string

  // Pain points
  painPoints: PainPoint[]

  // Stats
  stats: AudienceStatItem[]

  // Value propositions
  valueProps: ValueProp[]

  // Cross-links
  relevantSolutionSlugs: string[]

  // CTA
  ctaHeadline: string
  ctaDescription: string

  // Related blog posts
  relatedPostSlugs: string[]
}

const audiences: Audience[] = [
  {
    slug: "health-system-leaders",
    title: "Health System Leaders",
    shortTitle: "Health Systems",
    subtitle: "Turn training into measurable ROI",
    icon: Building2,
    colorVariant: "warm",

    cardBullets: [
      "Capture revenue from billable conversations providers aren't having",
      "Reduce malpractice exposure driven by communication failures",
      "Improve HCAHPS scores tied to Medicare reimbursement",
    ],

    heroHeadline: "Turn training into measurable ROI",
    heroDescription:
      "Communication failures drive 40% of malpractice claims (Candello, 2025) and put $2-3M in HCAHPS-linked reimbursement at risk for a mid-size academic center. Meanwhile, billable clinical conversations — advance care planning, cognitive assessments, goals of care — go unheld because providers lack the confidence to initiate them. ClinicalSim closes that gap at scale, without the logistics of traditional SP programs.",

    painPoints: [
      {
        headline: "Revenue left on the table",
        description:
          "Medicare reimburses ACP conversations at $87 each with no annual cap, and cognitive assessments at ~$260 — yet fewer than 5% of eligible patients receive a billed ACP conversation. The bottleneck is provider readiness, not patient need.",
        stat: "$1.5M+",
        statSource: "Combined annual opportunity for a 75-PCP system",
      },
      {
        headline: "Malpractice exposure you can reduce",
        description:
          "Communication-related malpractice cases have 39% greater odds of closing with indemnity payment. 6% of physicians attract 40% of suits — and across all provider types, patient complaints driven by communication failures are the strongest predictor of claims.",
        stat: "$1.7B",
        statSource: "Malpractice costs from communication breakdowns over five years (CRICO, 2009-2013)",
      },
      {
        headline: "HCAHPS scores at risk",
        description:
          "Communication domains influence 50-75% of the Person & Community Engagement score in Medicare's Value-Based Purchasing program. A single weak communication domain drags down your entire HCAHPS performance through the Consistency Score.",
        stat: "$2-3M",
        statSource: "At risk from communication scores for a 500-bed AMC",
      },
      {
        headline: "Training that doesn't scale",
        description:
          "Standardized patient actors cost $15-50/hour each, require scheduling, space, and faculty facilitators. You can't train 1,000 providers this way. ClinicalSim deploys 24/7 from any device with no linear cost scaling.",
      },
    ],

    stats: [
      {
        value: "40%",
        label: "of malpractice claims driven by communication failures",
        source: "CRICO/Candello 2025",
        variant: "warm",
      },
      {
        value: "$2-3M",
        label: "in HCAHPS-linked reimbursement at risk per mid-size AMC",
        source: "Based on CMS VBP program structure for a 500-bed AMC",
        variant: "navy",
      },
      {
        value: "<5%",
        label: "of eligible Medicare patients receive a billed ACP conversation",
        source: "Health Affairs, 2021",
        variant: "warm",
      },
      {
        value: "83%",
        label: "of VBP hospitals received a financial penalty in 2020",
        source: "CMS data",
        variant: "success",
      },
    ],

    valueProps: [
      {
        title: "Capture Billable Conversations",
        description:
          "Train physicians, NPs, and PAs to confidently initiate and bill for ACP (CPT 99497/98), cognitive assessments (CPT 99483), and other reimbursable conversations that are currently left on the table. These CPT codes are billable by any qualified provider — expanding your revenue potential across the entire care team.",
      },
      {
        title: "Reduce Risk System-Wide",
        description:
          "Target the 6% of providers who attract 40% of malpractice suits with structured communication practice. Reduce the communication failures behind 40% of all malpractice claims (Candello, 2025).",
      },
      {
        title: "Protect HCAHPS Revenue",
        description:
          "Improve provider communication scores that directly drive Medicare Value-Based Purchasing payments. Cleveland Clinic's communication training significantly improved CGCAHPS scores across 1,537 physicians — and the same communication skills drive HCAHPS performance regardless of provider type.",
      },
      {
        title: "Scale Without Logistics",
        description:
          "Deploy training across every department and provider level — from 10 to 1,000 — without scheduling, sim center booking, or linear cost increases. SaaS model stays under departmental approval thresholds.",
      },
    ],

    relevantSolutionSlugs: [
      "advance-care-planning",
      "goals-of-care",
      "cognitive-assessments",
      "menopause-care",
    ],

    ctaHeadline: "See the ROI for your system.",
    ctaDescription:
      "ClinicalSim helps health systems capture revenue, reduce risk, and improve patient experience scores — starting with the conversations that matter most.",

    relatedPostSlugs: [
      "hospital-communication-training-roi",
      "end-of-life-care-communication",
      "scalability-problem-sp-programs",
    ],
  },

  {
    slug: "clinicians",
    title: "Clinicians & Providers",
    shortTitle: "Clinicians",
    subtitle: "Practice on your terms, build real confidence",
    icon: Stethoscope,
    colorVariant: "blue",

    cardBullets: [
      "Practice difficult conversations on-demand, from any device",
      "Build confidence without the pressure of a live observer",
      "Get structured feedback on validated communication frameworks",
    ],

    heroHeadline: "Practice on your terms, build real confidence",
    heroDescription:
      "You know the conversations that keep you up at night — goals of care, breaking bad news, difficult disclosures. You've seen colleagues struggle with them. You've struggled yourself. But when did you last get to practice? Whether you're a physician, nurse practitioner, or PA, ClinicalSim gives you unlimited, private, voice-based practice with AI patients — on your schedule, from your phone, with no one watching until you're ready.",

    painPoints: [
      {
        headline: "High stakes, minimal preparation",
        description:
          "The average resident receives fewer than two hours of formal communication training across their entire residency — and NP and PA programs rarely include dedicated communication simulation either. Yet these conversations determine patient outcomes, family satisfaction, and your own professional confidence.",
        stat: "<2hrs",
        statSource: "Formal communication training in most residency programs",
      },
      {
        headline: "No safe space to practice",
        description:
          "Traditional simulation requires scheduling, observers, and performance pressure. Many clinicians avoid it entirely. You need a way to practice that feels safe enough to make mistakes and learn from them.",
      },
      {
        headline: "Confidence affects everything",
        description:
          "Fewer than half of residents report confidence in goals-of-care conversations — and the gap persists across all provider types. That discomfort leads to avoidance — conversations that don't happen, screenings that get skipped, diagnoses that go undelivered.",
        stat: "<50%",
        statSource: "Residents confident in goals-of-care conversations (medical education literature)",
      },
      {
        headline: "Skills atrophy without reinforcement",
        description:
          "Even when you do get training, skills fade without regular practice. Real end-of-life conversations are rare enough that you can't build proficiency through clinical experience alone.",
      },
    ],

    stats: [
      {
        value: "<50%",
        label: "of residents report confidence in goals-of-care conversations",
        source: "Medical education literature",
        variant: "warm",
      },
      {
        value: "<2hrs",
        label: "of formal communication training in most residency programs",
        source: "Medical education surveys",
        variant: "navy",
      },
      {
        value: "24/7",
        label: "on-demand access from any device — no scheduling required",
        variant: "blue",
      },
      {
        value: "86%",
        label: "of patients had wishes followed after providers received ACP training",
        source: "Detering et al., BMJ, 2010",
        variant: "success",
      },
    ],

    valueProps: [
      {
        title: "Voice-Based, Not Chat",
        description:
          "Practice real-time spoken conversations with AI patients — because the real thing isn't typed. Goals of care, diagnosis disclosure, family meetings — all through natural voice dialogue.",
      },
      {
        title: "Practice Without Pressure",
        description:
          "No scheduling, no observers, no performance anxiety. Practice on your own time, make mistakes privately, and build confidence before the real conversation happens.",
      },
      {
        title: "Structured Feedback That Helps",
        description:
          "Get automated assessment using validated frameworks — ACGME milestones, Calgary-Cambridge — with specific, actionable feedback on empathy, language, and information delivery.",
      },
      {
        title: "Build Skills That Stick",
        description:
          "Unlimited repetitions means you can practice the exact conversation you're preparing for — not a one-time workshop you'll forget in a month.",
      },
      {
        title: "Bill the Conversations You Practice",
        description:
          "Physicians, NPs, and PAs can all bill for advance care planning (CPT 99497/98), cognitive assessments (CPT 99483), and other reimbursable conversations. ClinicalSim prepares you to initiate, navigate, and document these conversations confidently — regardless of your credential.",
      },
    ],

    relevantSolutionSlugs: [
      "goals-of-care",
      "advance-care-planning",
      "cognitive-assessments",
      "menopause-care",
    ],

    ctaHeadline: "Practice the conversation before it counts.",
    ctaDescription:
      "ClinicalSim gives you unlimited, private, voice-based practice with the conversations that matter most — so you're ready when it's real.",

    relatedPostSlugs: [
      "breaking-bad-news-medical-training",
      "end-of-life-care-communication",
      "what-learners-want-from-ai-sps",
    ],
  },

  {
    slug: "medical-educators",
    title: "Medical Educators",
    shortTitle: "Educators",
    subtitle: "Meet accreditation standards at scale",
    icon: GraduationCap,
    colorVariant: "navy",

    cardBullets: [
      "Meet ACGME communication competency requirements systematically",
      "Scale simulation training without scaling your SP budget",
      "Track learner progress with validated assessment data",
    ],

    heroHeadline: "Meet accreditation standards at scale",
    heroDescription:
      "ACGME requires structured communication competency training across every specialty — and explicitly states that on-the-job training alone is not sufficient. Yet most programs rely on ad-hoc observation and role-modeling. ClinicalSim gives you a scalable, evidence-based platform to meet accreditation requirements, track milestones, and fill curriculum gaps — without overwhelming your simulation center budget.",

    painPoints: [
      {
        headline: "Accreditation requirements are explicit",
        description:
          "ACGME Common Program Requirements mandate that residents demonstrate interpersonal and communication skills — and guidance explicitly states simulation is \"increasingly used as an effective method.\" Most programs can't deliver this at the scale ACGME expects.",
      },
      {
        headline: "Milestone tracking gaps",
        description:
          "36% of palliative care-relevant milestones reside in the Interpersonal and Communication Skills competency. Harmonized Milestones 2.0 created universal assessment requirements across specialties — but few programs have systematic ways to assess them.",
        stat: "36%",
        statSource: "Palliative care milestones in ICS competency",
      },
      {
        headline: "SP programs can't scale to the need",
        description:
          "Standardized patient encounters cost $150-300 each when you factor in actor fees, space, scheduling, and faculty facilitation. You can't give every resident the communication reps they need at that price point.",
        stat: "$150-300",
        statSource: "Per SP encounter (fully loaded cost)",
      },
      {
        headline: "Curriculum gaps are documented",
        description:
          "69% of OB/GYN residencies have no menopause curriculum. Only a minority of programs formally teach all ACGME communication competencies. The gap between what's required and what's delivered is well-documented.",
      },
    ],

    stats: [
      {
        value: "36%",
        label: "of palliative care milestones in ICS competency across 14 specialties",
        source: "Milestones meta-analysis",
        variant: "navy",
      },
      {
        value: "$150-300",
        label: "per traditional SP encounter (fully loaded cost)",
        source: "Simulation center data",
        variant: "warm",
      },
      {
        value: "69%",
        label: "of OB/GYN residencies lack a dedicated menopause curriculum",
        source: "Menopause, 2023",
        variant: "navy",
      },
      {
        value: "RCT",
        label: "Published randomized controlled trial with PICU fellows using validated assessment",
        source: "ClinicalSim pilot study",
        variant: "success",
      },
    ],

    valueProps: [
      {
        title: "Systematic ACGME Compliance",
        description:
          "Map simulation scenarios directly to Harmonized Milestones 2.0 communication competencies. Document structured training that goes beyond ad-hoc observation.",
      },
      {
        title: "Extend Your Sim Center's Reach",
        description:
          "Free your SPs for high-stakes assessments like OSCEs while ClinicalSim handles the high-volume communication reps that build foundational skill. Complement, don't replace.",
      },
      {
        title: "Evidence You Can Point To",
        description:
          "Among the first AI communication platforms backed by a published RCT with blinded evaluation using validated tools (ACGME milestones, Calgary-Cambridge). Evidence your accreditation reviewers will recognize.",
      },
      {
        title: "Track Progress Over Time",
        description:
          "Structured assessment data across validated frameworks lets you track learner development, identify gaps, and demonstrate curriculum effectiveness to program leadership.",
      },
    ],

    relevantSolutionSlugs: [
      "goals-of-care",
      "advance-care-planning",
      "cognitive-assessments",
      "menopause-care",
    ],

    ctaHeadline: "Build the curriculum your learners need.",
    ctaDescription:
      "ClinicalSim gives medical educators a scalable, evidence-based platform for communication training — with the milestone tracking and assessment data accreditation demands.",

    relatedPostSlugs: [
      "osce-case-design-guide",
      "scalability-problem-sp-programs",
      "what-learners-want-from-ai-sps",
    ],
  },
]

export function getAllAudiences(): Audience[] {
  return audiences
}

export function getAudienceBySlug(slug: string): Audience | undefined {
  return audiences.find((a) => a.slug === slug)
}
