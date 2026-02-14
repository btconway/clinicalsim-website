import {
  Heart,
  MessageCircle,
  Brain,
  Flower2,
  type LucideIcon,
} from "lucide-react"

export interface CptCode {
  code: string
  description: string
  reimbursement: string
  notes?: string
}

export interface StatItem {
  value: string
  label: string
  source?: string
  variant: "warm" | "navy" | "blue" | "success"
}

export interface EvidenceItem {
  studyTitle: string
  journal: string
  year: string
  summary: string
  link?: string
  badges?: string[]
}

export interface RevenueProjection {
  perProvider: {
    value: string
    label: string
    assumption: string
  }
  perInstitution: {
    value: string
    label: string
    assumption: string
  }
  sectionHeading: string
  source?: string
}

export interface Solution {
  slug: string
  title: string
  shortTitle: string
  description: string
  icon: LucideIcon
  colorVariant: "warm" | "navy" | "blue" | "success"

  // Hero
  heroSubtitle: string
  heroDescription: string

  // Revenue stats
  revenueStats: StatItem[]

  // CPT codes (optional)
  cptCodes?: CptCode[]

  // Revenue projection ("Do the Math")
  revenueProjection: RevenueProjection

  // Training gap
  trainingGapHeadline: string
  trainingGapDescription: string
  trainingGapBullets: string[]

  // Why simulation works
  simulationBenefits: {
    title: string
    description: string
  }[]

  // Evidence
  evidence: EvidenceItem
  outcomeStats: StatItem[]

  // CTA
  ctaHeadline: string
  ctaDescription: string

  // Related blog posts
  relatedPostSlugs: string[]
}

const solutions: Solution[] = [
  {
    slug: "advance-care-planning",
    title: "Advance Care Planning Conversations",
    shortTitle: "Advance Care Planning",
    description:
      "Most patients never have an advance care planning conversation with their provider — even though Medicare created dedicated billing codes to make it happen. The bottleneck is training.",
    icon: Heart,
    colorVariant: "warm",

    heroSubtitle: "A conversation every patient deserves — and most providers never feel ready for.",
    heroDescription:
      "Medicare created dedicated billing codes for advance care planning conversations — CPT 99497 and 99498 — with no annual frequency cap. Yet fewer than 5% of eligible Medicare beneficiaries have a billed ACP conversation each year. The gap isn't demand. It's provider readiness.",

    revenueStats: [
      {
        value: "$87",
        label: "Medicare reimbursement per ACP conversation (CPT 99497)",
        source: "CMS Physician Fee Schedule, 2026",
        variant: "warm",
      },
      {
        value: "No Cap",
        label: "No annual frequency limit on ACP billing under Medicare",
        source: "CMS Medicare Policy",
        variant: "navy",
      },
      {
        value: "<5%",
        label: "of eligible Medicare beneficiaries receive a billed ACP conversation annually",
        source: "Health Affairs, 2021",
        variant: "warm",
      },
    ],

    cptCodes: [
      {
        code: "99497",
        description: "Advance care planning, first 30 minutes",
        reimbursement: "$86.84",
        notes: "Face-to-face with patient/surrogate/family",
      },
      {
        code: "99498",
        description: "Advance care planning, each additional 30 minutes",
        reimbursement: "$74.83",
        notes: "Add-on code, use with 99497",
      },
    ],

    revenueProjection: {
      sectionHeading: "What this means for your health system",
      perProvider: {
        value: "$4,200",
        label: "per PCP per year",
        assumption: "Based on 48 ACP conversations/year at $87 each (conservative pace)",
      },
      perInstitution: {
        value: "$630K",
        label: "for a 75-PCP health system",
        assumption: "At moderate billing pace of 96 conversations per provider/year",
      },
      source: "JAMA Health Forum 2024: ACP training increased billing 11x (1.3% to 14%)",
    },

    trainingGapHeadline: "The conversation nobody practices.",
    trainingGapDescription:
      "Advance care planning is a clinical service with dedicated Medicare billing codes, yet most providers have never practiced it in a structured setting. The result: eligible patients go without documented preferences, families face crisis-point decisions without guidance, and hospitals miss conversations that Medicare specifically created billing codes to encourage.",
    trainingGapBullets: [
      "Most internal medicine and family medicine residencies offer no dedicated ACP training module",
      "Providers cite discomfort and lack of confidence as the primary barrier to initiating ACP",
      "The average ACP conversation takes 16 minutes — well within the billing window — when providers are trained",
      "Simulation-based training has been shown to significantly improve provider confidence in ACP conversations",
    ],

    simulationBenefits: [
      {
        title: "Practice the Full Conversation",
        description:
          "Simulate complete ACP discussions — from opening the topic to documenting preferences — in a realistic, voice-based format.",
      },
      {
        title: "From Practice to Action",
        description:
          "Providers who've practiced ACP conversations are more likely to initiate them consistently — and document them appropriately.",
      },
      {
        title: "Reduce Family Conflict",
        description:
          "Trained providers facilitate clearer preference documentation, reducing crisis-point family disagreements.",
      },
      {
        title: "Scale Across Departments",
        description:
          "Deploy ACP training across primary care, hospitalist, and palliative care teams without scheduling constraints.",
      },
    ],

    evidence: {
      studyTitle:
        "The Effects of Advance Care Planning on End-of-Life Care: A Systematic Review",
      journal: "Palliative Medicine",
      year: "2014",
      summary:
        "Systematic review of 113 studies found that advance care planning decreased life-sustaining treatment, increased hospice and palliative care use, and prevented hospitalization. Complex ACP interventions increased compliance with patients' end-of-life wishes.",
      badges: ["Systematic Review", "113 Studies Analyzed"],
    },

    outcomeStats: [
      {
        value: "86%",
        label: "of patients who received ACP had end-of-life wishes known and followed",
        source: "Detering et al., BMJ, 2010",
        variant: "success",
      },
      {
        value: "68%",
        label: "reduction in ICU admission rates when end-of-life discussions occur",
        source: "Wright et al., JAMA, 2008",
        variant: "success",
      },
      {
        value: "$4,908",
        label: "average savings per admission with palliative care consultation",
        source: "Morrison et al., Archives of Internal Medicine, 2008",
        variant: "warm",
      },
    ],

    ctaHeadline: "Give every patient the conversation they deserve.",
    ctaDescription:
      "ClinicalSim helps your providers practice ACP conversations so they're confident enough to have them — early, often, and well.",

    relatedPostSlugs: [
      "end-of-life-care-communication",
      "hospital-communication-training-roi",
    ],
  },

  {
    slug: "goals-of-care",
    title: "Goals-of-Care & Serious Illness Conversations",
    shortTitle: "Goals of Care",
    description:
      "Communication failures drive 66% of sentinel events. Structured serious illness conversations reduce ICU costs by thousands per patient.",
    icon: MessageCircle,
    colorVariant: "navy",

    heroSubtitle: "The highest-stakes conversation in medicine — and the least practiced.",
    heroDescription:
      "Goals-of-care conversations directly determine whether patients receive care aligned with their values. When these conversations happen well, ICU utilization drops, patient satisfaction rises, and malpractice exposure shrinks. When they don't happen — or happen poorly — patients receive care misaligned with their values, families are left in crisis, and hospitals absorb the downstream cost.",

    revenueStats: [
      {
        value: "$4,908",
        label: "average savings per admission with palliative care consultation",
        source: "Morrison et al., Archives of Internal Medicine, 2008",
        variant: "warm",
      },
      {
        value: "66%",
        label: "of sentinel events involve communication failures as root cause",
        source: "The Joint Commission",
        variant: "navy",
      },
      {
        value: "$1.7B",
        label: "in annual malpractice costs linked to communication breakdowns",
        source: "CRICO/Harvard",
        variant: "warm",
      },
    ],

    revenueProjection: {
      sectionHeading: "What this means for your institution",
      perProvider: {
        value: "$4,908",
        label: "in potential savings per palliative care consult",
        assumption: "Average cost savings for patients who died in hospital (Morrison et al., 2008)",
      },
      perInstitution: {
        value: "$2.25M",
        label: "per year in avoided ICU costs for a 300-bed hospital",
        assumption: "Based on 3,000 ICU admissions/year with 5% averted at ~$15,000 average ICU stay",
      },
      source: "Annals of ATS 2020; Morrison et al., Archives of Internal Medicine, 2008",
    },

    trainingGapHeadline: "Two hours of training for a career of difficult conversations.",
    trainingGapDescription:
      "The average resident receives fewer than two hours of formal training in serious illness conversations across their entire residency. Yet these conversations determine ICU utilization, goal-concordant care rates, and family satisfaction scores. The mismatch between stakes and preparation is staggering.",
    trainingGapBullets: [
      "Only 29% of seriously ill patients report having had a goals-of-care conversation with their physician",
      "Residents consistently rate goals-of-care as their lowest-confidence communication skill",
      "The Serious Illness Conversation Guide (SICG) from Ariadne Labs improves outcomes — but requires practice to implement effectively",
      "Simulation-based communication training improves performance on validated assessment tools within a single session",
    ],

    simulationBenefits: [
      {
        title: "Practice the SICG Framework",
        description:
          "Simulate conversations using the Serious Illness Conversation Guide structure — understanding, preferences, prognosis, and recommendations.",
      },
      {
        title: "Reduce Avoidable ICU Days",
        description:
          "Providers trained in goals-of-care conversations drive earlier hospice enrollment and fewer unwanted interventions.",
      },
      {
        title: "Lower Malpractice Exposure",
        description:
          "Better communication reduces the 40% of malpractice claims driven by communication failures.",
      },
      {
        title: "Improve HCAHPS Scores",
        description:
          "Structured communication training directly impacts patient experience metrics tied to hospital reimbursement.",
      },
    ],

    evidence: {
      studyTitle:
        "Associations Between End-of-Life Discussions, Patient Mental Health, Medical Care Near Death, and Caregiver Bereavement Adjustment",
      journal: "JAMA",
      year: "2008",
      summary:
        "Landmark study showing end-of-life discussions were associated with lower rates of ventilation (1.6% vs 11.0%), resuscitation (0.8% vs 6.7%), and ICU admission (4.1% vs 12.4%), plus earlier hospice enrollment.",
      badges: ["Prospective Cohort", "Published in JAMA"],
    },

    outcomeStats: [
      {
        value: "3x",
        label: "reduction in ICU admissions when goals-of-care conversations occur",
        source: "Wright et al., JAMA, 2008",
        variant: "success",
      },
      {
        value: "$1,696",
        label: "direct cost savings per admission for discharged patients",
        source: "Morrison et al., Archives of Internal Medicine, 2008",
        variant: "warm",
      },
      {
        value: "86%",
        label: "of patients had wishes followed after structured ACP intervention",
        source: "Detering et al., BMJ, 2010",
        variant: "success",
      },
    ],

    ctaHeadline: "Train the conversation that drives every downstream decision.",
    ctaDescription:
      "ClinicalSim gives your teams unlimited practice with the conversations that determine family satisfaction, care quality, and institutional risk.",

    relatedPostSlugs: [
      "breaking-bad-news-medical-training",
      "end-of-life-care-communication",
      "hospital-communication-training-roi",
    ],
  },

  {
    slug: "cognitive-assessments",
    title: "Cognitive Assessments & Dementia Diagnosis Conversations",
    shortTitle: "Cognitive Assessments",
    description:
      "Over half of cognitive impairment cases in primary care go undiagnosed — even though Medicare reimburses comprehensive cognitive assessment. The gap is provider confidence.",
    icon: Brain,
    colorVariant: "blue",

    heroSubtitle: "A critical diagnosis conversation most primary care providers avoid.",
    heroDescription:
      "Seven million Americans are living with Alzheimer's — and over half of cognitive impairment cases in primary care go undiagnosed. Medicare reimburses comprehensive cognitive assessment and care planning (CPT 99483) at approximately $282 per visit, but millions of patients are going without a diagnosis. The gap isn't patient need — it's provider readiness.",

    revenueStats: [
      {
        value: "~$282",
        label: "Medicare reimbursement for cognitive assessment and care planning (CPT 99483)",
        source: "CMS Medicare Fee Schedule",
        variant: "warm",
      },
      {
        value: "50%+",
        label: "of cognitive impairment cases in primary care go undiagnosed",
        source: "JPAD, 2024",
        variant: "navy",
      },
      {
        value: "$384B",
        label: "annual US cost of Alzheimer's and dementia care in 2025",
        source: "Alzheimer's Association, 2025",
        variant: "warm",
      },
    ],

    cptCodes: [
      {
        code: "99483",
        description:
          "Assessment and care plan for patient with cognitive impairment (approximately 50 minutes)",
        reimbursement: "~$282",
        notes:
          "Includes cognition-focused evaluation, functional assessment, care plan creation, and advance care planning",
      },
    ],

    revenueProjection: {
      sectionHeading: "What this means for your health system",
      perProvider: {
        value: "$6,800",
        label: "per PCP per year",
        assumption: "Based on 24 cognitive assessments/year at ~$282 each (conservative pace)",
      },
      perInstitution: {
        value: "$1M+",
        label: "for a 75-PCP health system",
        assumption: "At moderate billing pace of 48 assessments per provider/year",
      },
      source: "GAO 2024: Utilization tripled 2018-2022 but remains under 3% of eligible population",
    },

    trainingGapHeadline: "Most providers avoid the diagnosis conversation entirely.",
    trainingGapDescription:
      "Delivering a cognitive impairment or dementia diagnosis is one of the most emotionally complex conversations in primary care. Without training, providers default to avoidance — skipping screening, deferring referrals, and leaving the 99483 code unbilled. The GAO found that while utilization tripled between 2018 and 2022, it remains a fraction of the eligible population.",
    trainingGapBullets: [
      "Over a quarter of primary care clinicians had zero patients with a diagnosed mild cognitive impairment in their panel — despite 20% expected prevalence",
      "GAO found 99483 utilization tripled from 2018–2022 but challenges with provider training remain the primary barrier",
      "Only 8% of expected cognitive impairment cases are actually diagnosed in primary care",
      "Providers report the diagnosis disclosure conversation as the primary reason they avoid formal cognitive assessment",
    ],

    simulationBenefits: [
      {
        title: "Practice Diagnosis Disclosure",
        description:
          "Simulate delivering cognitive impairment results to patients and families with empathy, clarity, and appropriate next steps.",
      },
      {
        title: "Build Clinical Confidence",
        description:
          "Providers who've practiced the full assessment conversation are more likely to complete the comprehensive evaluation and document it appropriately.",
      },
      {
        title: "Connect Screening to Action",
        description:
          "Train the conversation that connects a cognitive screen to a comprehensive care plan — including diagnosis, family support, and documented next steps.",
      },
      {
        title: "Support Caregivers",
        description:
          "Practice family conversations that address caregiver burden, safety planning, and community resource referrals.",
      },
    ],

    evidence: {
      studyTitle:
        "Medicare Cognitive Assessments: Utilization Tripled Between 2018 and 2022, but Challenges Remain",
      journal: "U.S. Government Accountability Office",
      year: "2024",
      summary:
        "GAO investigation found that while cognitive assessment utilization tripled between 2018 and 2022, significant barriers remain — primarily provider training and confidence in conducting the assessment and delivering results.",
      link: "https://www.gao.gov/products/gao-24-106328",
      badges: ["GAO Report", "Federal Investigation"],
    },

    outcomeStats: [
      {
        value: "3x",
        label: "higher Medicare costs per beneficiary with dementia vs. without",
        source: "Alzheimer's Association, 2025",
        variant: "navy",
      },
      {
        value: "7M",
        label: "Americans living with Alzheimer's disease",
        source: "Alzheimer's Association, 2025",
        variant: "blue",
      },
      {
        value: "$413B",
        label: "value of unpaid dementia caregiving annually",
        source: "Alzheimer's Association, 2025",
        variant: "warm",
      },
    ],

    ctaHeadline: "Close the gap between screening and diagnosis.",
    ctaDescription:
      "ClinicalSim trains your providers to conduct cognitive assessments confidently — so they screen, diagnose, support families, and document care appropriately.",

    relatedPostSlugs: [
      "hospital-communication-training-roi",
      "why-communication-training-matters",
    ],
  },

  {
    slug: "menopause-care",
    title: "Menopause & Midlife Women's Health Conversations",
    shortTitle: "Menopause Care",
    description:
      "Over 55 million American women in perimenopause or menopause — and fewer than 1% of doctors are certified to help them. The gap is training.",
    icon: Flower2,
    colorVariant: "success",

    heroSubtitle: "A generation of women underserved — and almost no providers trained to help.",
    heroDescription:
      "Over 1.3 million American women enter menopause every year — and the vast majority can't find a provider who knows how to help them. Fewer than 1% of US physicians are certified menopause practitioners. BCG projects the menopause market will reach $40 billion. Hospitals that train providers in menopause conversations will be able to serve a patient population that currently has nowhere to turn.",

    revenueStats: [
      {
        value: "$40B+",
        label: "projected menopause market opportunity",
        source: "BCG, 2025",
        variant: "warm",
      },
      {
        value: "<1%",
        label: "of US physicians are certified menopause practitioners",
        source: "The Menopause Society, 2025",
        variant: "navy",
      },
      {
        value: "<7%",
        label: "of residents in key specialties feel prepared to support menopausal patients",
        source: "BCG, 2025",
        variant: "warm",
      },
    ],

    revenueProjection: {
      sectionHeading: "What this means for your practice",
      perProvider: {
        value: "$500-$800",
        label: "in visit revenue per menopause patient per year",
        assumption: "Initial consultation plus 2-3 follow-ups at commercial rates",
      },
      perInstitution: {
        value: "$500K-$750K",
        label: "per year for 10 trained OB/GYNs",
        assumption: "Each seeing 15 menopause patients/week = 7,500 patient-visits/year, plus downstream referrals",
      },
      source: "Midi Health reached $150M run rate / 25,000 patients per week — proving market demand",
    },

    trainingGapHeadline: "69% of OB/GYN residencies have no menopause curriculum.",
    trainingGapDescription:
      "A 2023 survey of US OB/GYN residency program directors found that only 31.3% reported having a menopause curriculum. The result is a generation of physicians entering practice unprepared to manage the most common midlife health transition — sending patients to direct-to-consumer alternatives or out of the health system entirely.",
    trainingGapBullets: [
      "Only 31% of OB/GYN residency programs include a dedicated menopause curriculum",
      "Fewer than 1% of actively licensed US doctors hold Menopause Society certification",
      "1 in 3 women don't feel confident advocating for themselves in menopause-related healthcare visits",
      "Women frequently report being dismissed by providers, with symptoms incorrectly attributed to anxiety or aging",
    ],

    simulationBenefits: [
      {
        title: "Practice Symptom Assessment",
        description:
          "Simulate comprehensive menopause intake conversations covering vasomotor symptoms, mood changes, sleep disruption, and sexual health.",
      },
      {
        title: "Build Treatment Confidence",
        description:
          "Practice discussing hormone therapy options, risks, benefits, and contraindications in a judgment-free environment.",
      },
      {
        title: "Keep Patients in Care",
        description:
          "Providers who listen effectively and offer evidence-based guidance build the trust that keeps patients engaged — instead of seeking care outside the system.",
      },
      {
        title: "Lead in Women's Health",
        description:
          "Hospitals that build menopause competency now will become the trusted resource for a patient population that's currently underserved — and growing.",
      },
    ],

    evidence: {
      studyTitle:
        "Needs Assessment of Menopause Education in United States Obstetrics and Gynecology Residency Training Programs",
      journal: "Menopause",
      year: "2023",
      summary:
        "Survey of 145 OB/GYN residency program directors (68.3% response rate) found that only 31.3% had a dedicated menopause curriculum. The study highlights the critical need for structured menopause education in residency training.",
      badges: ["Peer-Reviewed", "National Survey"],
    },

    outcomeStats: [
      {
        value: "55M+",
        label: "US women currently in perimenopause or menopause",
        source: "US Census / Menopause Society",
        variant: "success",
      },
      {
        value: "1.3M",
        label: "American women enter menopause each year",
        source: "The Menopause Society",
        variant: "blue",
      },
      {
        value: "85%",
        label: "of menopausal women experience symptoms significant enough to affect daily life",
        source: "The Menopause Society",
        variant: "warm",
      },
    ],

    ctaHeadline: "Build the menopause practice your community needs.",
    ctaDescription:
      "ClinicalSim trains your providers in menopause conversations — so you can serve the patients who currently have nowhere to turn.",

    relatedPostSlugs: [
      "hospital-communication-training-roi",
      "why-communication-training-matters",
    ],
  },
]

export function getAllSolutions(): Solution[] {
  return solutions
}

export function getSolutionBySlug(slug: string): Solution | undefined {
  return solutions.find((s) => s.slug === slug)
}
