# ClinicalSim.ai Branding Guide

## Brand Identity

**Brand Name:** ClinicalSim.ai
**Tagline:** "Practice the conversations that matter most."
**Mission:** AI voice simulation for high-stakes medical conversations — goals of care, end-of-life discussions, difficult disclosures — on-demand, backed by published research.

## Typography

### Primary Font - Poppins
- **Font Family:** Poppins (Google Fonts)
- **Weights Used:** 300 (Light), 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Display:** swap (for performance)
- **Fallback Stack:** 'var(--font-poppins)', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'
- **Usage:** All body text, headlines, navigation, general UI

### Secondary Font - IBM Plex Mono
- **Font Family:** IBM Plex Mono (Google Fonts)
- **Weights Used:** 400 (Regular), 500 (Medium), 600 (Semi-Bold), 700 (Bold)
- **Display:** swap (for performance)
- **Fallback Stack:** 'var(--font-ibm-plex-mono)', 'ui-monospace', 'SFMono-Regular', 'Menlo', 'Monaco', 'Consolas', 'Liberation Mono', 'Courier New', 'monospace'
- **Usage:** Statistics, data points, numerical values, pull quotes, code snippets
- **CSS Class:** `font-mono`
- **Purpose:** Creates visual hierarchy and "clinical precision" feel for data-heavy content

### Typography Hierarchy
- **Hero Headlines:** 2xl-6xl, font-light (300 weight), Poppins
- **Section Headers:** 3xl-4xl, font-light (300 weight), Poppins
- **Subsection Headers:** xl-2xl, font-medium (500 weight), Poppins
- **Body Text:** lg-xl, font-normal (400 weight), Poppins
- **Statistics/Data:** 3xl-5xl, font-bold (700 weight), IBM Plex Mono
- **Data Context:** base-lg, font-normal (400 weight), Poppins
- **Navigation:** font-medium (500 weight), Poppins
- **Buttons:** font-normal (400 weight) to font-medium (500 weight), Poppins

## Color Palette

### Primary Colors
```css
/* Light Mode */
--background: 0 0% 100%;           /* Pure white */
--foreground: 0 0% 3.9%;           /* Near black text */
--primary: 0 0% 9%;                /* Dark primary */
--primary-foreground: 0 0% 98%;    /* Light text on primary */

/* Dark Mode */
--background: 0 0% 3.9%;           /* Dark background */
--foreground: 0 0% 98%;            /* Light text */
--primary: 0 0% 98%;               /* Light primary */
--primary-foreground: 0 0% 9%;     /* Dark text on primary */
```

### Brand Colors (Expanded for Differentiation)

#### Primary Brand Colors
- **Blue Primary:** #3B82F6 (rgb(59, 130, 246)) - Used for key CTAs and brand elements
- **Blue Hover:** #1E40AF (rgb(30, 64, 175)) - Darker blue for hover states
- **Indigo Accent:** #4F46E5 (rgb(79, 70, 229)) - Secondary accent color
- **Purple Accent:** #7C3AED (rgb(124, 58, 237)) - Additional accent color

#### Strategic Accent Colors (New - for differentiation)
- **Warm Accent (Orange):** #F97316 - Tailwind `warm` color
  - **Usage:** CTAs, key metrics, human elements, highlights
  - **Purpose:** Creates warmth and differentiation from healthcare blue overuse
  - **CSS Class:** `text-warm`, `bg-warm`, `border-warm`

- **Success Green:** #10B981 - Tailwind `success` color
  - **Usage:** Positive outcomes, testimonials, results, success states
  - **Purpose:** Reinforces positive impact without clinical coldness
  - **CSS Class:** `text-success`, `bg-success`, `border-success`

- **Deep Navy:** #1E3A8A - Tailwind `navy` color
  - **Usage:** Authority sections, headers, premium content, contrast text
  - **Purpose:** Adds gravitas and authority while maintaining professional tone
  - **CSS Class:** `text-navy`, `bg-navy`, `border-navy`

#### Color Usage Guidelines
- **Blue (Primary):** Brand identity, navigation, standard CTAs
- **Warm Orange:** High-priority CTAs, statistics, key takeaways
- **Success Green:** Testimonials, outcome data, completion states
- **Deep Navy:** Section headers, authority content, contrast backgrounds
- **Gradients:** Maintain blue-indigo-purple for backgrounds; introduce warm accent in icon containers

### Background Gradients
- **Primary Background:** `bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100`
- **Hero Overlay:** `bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-indigo-600/10`

### Shimmer Effect (Special Brand Element)
```css
.shimmer {
  background: linear-gradient(
    90deg,
    #111827 0%,    /* Dark gray */
    #1e40af 25%,   /* Blue */
    #3730a3 50%,   /* Purple */
    #60a5fa 75%,   /* Light blue */
    #3730a3 100%   /* Purple */
  );
  background-size: 400% 100%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: shimmer 6s ease-in-out infinite;
}
```

### UI Colors
```css
/* Cards and Components */
--card: 0 0% 100%;                 /* White cards */
--card-foreground: 0 0% 3.9%;      /* Dark text on cards */
--secondary: 0 0% 96.1%;           /* Light gray */
--secondary-foreground: 0 0% 9%;   /* Dark text */
--muted: 0 0% 96.1%;               /* Muted background */
--muted-foreground: 0 0% 45.1%;    /* Muted text */
--border: 0 0% 89.8%;              /* Light borders */
```

## Logo and Brand Assets

### Primary Logo
- **File:** `/public/ClinicalSim.ai-logo.webp`
- **Usage:** Header navigation, primary brand identification
- **Dimensions:** Responsive (h-8 md:h-12 w-auto)

### Favicon
- **File:** `/public/favicon.svg`
- **Design:** Blue gradient background with white "CS" text and ".ai" subtitle
- **Colors:** Linear gradient from #3B82F6 to #1D4ED8
- **Typography:** Arial, sans-serif, bold weight

### Touch Icons
- **File:** `/public/apple-touch-icon.png`
- **Usage:** iOS home screen and bookmark icons

## Visual Design Patterns

### Card Design
- **Background:** `bg-white/70 backdrop-blur-sm` or `bg-white/80`
- **Borders:** `border-white/20`
- **Hover Effects:** `hover:bg-white/90 hover:shadow-xl hover:-translate-y-2`
- **Transitions:** `transition-all duration-300`

### Header/Navigation
- **Background:** `bg-white/80 backdrop-blur-sm`
- **Border:** `border-b border-white/20`
- **Text Colors:** `text-gray-700 hover:text-gray-900`
- **Active State:** `border-b-2 border-blue-600`

### Buttons

#### Primary CTA Button
```css
className="border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white hover:scale-105 px-8 py-3 text-lg font-normal transition-all duration-300 shadow-lg hover:shadow-xl"
```

#### Contact Form Button
```css
className="bg-transparent border-white border-2 text-white hover:bg-white hover:text-blue-600 px-8 py-3 font-normal"
```

### Animation Classes
- **Fade In:** `animate-in fade-in slide-in-from-bottom-4 duration-1000`
- **Delayed Animations:** `delay-300`, `delay-500`, `delay-700`, `delay-1000`
- **Hover Animations:** `hover:scale-105`, `hover:-translate-y-2`, `group-hover:scale-110`

## Component Styling

### Icons
- **Library:** Lucide React
- **Common Icons:** Brain, Users, Shield, Zap, BookOpen, Target
- **Icon Container:** `bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg`
- **Icon Color:** `text-white`
- **Size:** `w-6 h-6` (icons), `w-12 h-12` (containers)

### Forms
- **Input Styling:** `bg-transparent border-white border-2 text-white placeholder:text-gray-300 focus:border-white focus:ring-0`
- **Label Styling:** `text-white text-base font-normal mb-2 block`
- **Textarea:** `resize-none` with 6 rows

### Team Member Cards
- **Profile Images:** `rounded-full object-cover` with `group-hover:scale-105`
- **Name Colors:** `text-blue-600 group-hover:text-indigo-600`
- **Image Size:** 80x80px

## Layout Specifications

### Container Widths
- **Hero Section:** `max-w-4xl mx-auto`
- **Features Section:** `max-w-6xl mx-auto`
- **About/Contact:** `max-w-4xl mx-auto`

### Grid Systems
- **Features Grid:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Contact Grid:** `grid-cols-1 md:grid-cols-2 gap-12 md:gap-16`
- **Name Fields:** `grid-cols-1 md:grid-cols-2 gap-4`

### Spacing
- **Section Padding:** `px-6 py-12 md:py-16` or `py-16 md:py-24`
- **Card Padding:** `p-6` or `p-8`
- **Header Padding:** `px-4 py-4 md:px-12 md:py-6`

## Content Tone & Voice

### Brand Personality
- **Professional** yet approachable
- **Research-driven** and evidence-based
- **Innovative** and forward-thinking
- **Compassionate** focus on healthcare improvement

### Key Messaging
- Practice the conversations that matter most — goals of care, end-of-life, difficult disclosures
- The only AI communication platform backed by a published randomized controlled trial
- On-demand voice simulation from any device, 24/7 — no scheduling, no actors, no sim center
- ACGME-aligned: directly addresses interpersonal and communication skills milestones
- Scalable and cost-effective: traditional SP encounters cost $150-300 each
- Augments existing simulation programs — structured practice at scale, not a replacement
- Evidence-informed, outcome-focused positioning: lead with the problem and the proof, not the technology

## Technical Implementation

### CSS Framework
- **Primary:** Tailwind CSS with custom configuration
- **Component Library:** shadcn/ui built on Radix UI primitives
- **Animation:** tailwindcss-animate plugin
- **Radius:** `--radius: 0.5rem` (8px border radius)

### Dark Mode Support
- **Strategy:** `class` based dark mode switching
- **Implementation:** CSS variables with light/dark variants

### Responsive Design
- **Breakpoints:** Following Tailwind's default breakpoints
- **Mobile-first** approach with `md:` and `lg:` prefixes
- **Typography scaling:** Responsive text sizes (text-2xl md:text-5xl lg:text-6xl)

## Shape Language & Layout Patterns (Updated for Differentiation)

### Border Radius System (Varied - NOT Generic 8px Everywhere)
- **Extra Small (4px):** `rounded-xs` - Small buttons, badges, tight UI elements
- **Small (6px):** `rounded-sm` - Calculated from `--radius - 4px`
- **Medium (8px):** `rounded-md` - Calculated from `--radius - 2px`
- **Large (8px):** `rounded-lg` - Standard cards, buttons (default `--radius`)
- **Extra Large (16px):** `rounded-xl` - Feature cards, highlighted sections
- **2XL (24px):** `rounded-2xl` - Hero sections, major content blocks, images

**Guideline:** Vary border radius based on component importance and visual weight. Avoid uniform 8px everywhere.

### Layout Patterns (Asymmetric Preferred)

#### Standard Card Grid (Avoid Overuse)
- **Usage:** Only when content truly demands uniformity
- **Pattern:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8`
- **Warning:** This is the default pattern on thousands of sites - use sparingly

#### Asymmetric Grid (Preferred for Differentiation)
- **Usage:** Features, benefits, social proof sections
- **Pattern:** Staggered card heights, featured item (2x size) + supporting grid
- **Implementation:** CSS Grid with `grid-template-rows: auto` and varied content
- **Visual effect:** More dynamic, less "template-y"

#### Side-by-Side Layout
- **Usage:** Problem/solution sections, comparison content
- **Pattern:** `grid-cols-1 md:grid-cols-2` with image + text
- **Enhancement:** Add diagonal background transitions between sections

#### Full-Width Highlighted Bars
- **Usage:** Statistics, key metrics, important callouts
- **Pattern:** Full-width colored background with centered content
- **Colors:** Warm accent or deep navy for emphasis

### Visual Differentiation Elements

#### Diagonal Section Dividers
- **Implementation:** SVG path elements between sections
- **Purpose:** Breaks up standard stacked-section pattern
- **Variants:** Subtle slope (5-10deg) or pronounced angle (15-20deg)

#### Border Glow Hover Effect (Replaces Standard Lift)
- **CSS Class:** `border-glow-hover`
- **Animation:** Pulsing orange glow on hover
- **Purpose:** More distinctive than `hover:-translate-y-2`

#### Icon Container Variants
- **Standard:** Blue-to-indigo gradient (existing)
- **Emphasized:** Warm accent gradient (orange-to-red)
- **Authority:** Deep navy solid background
- **Success:** Success green with subtle gradient

## Brand Application Guidelines

### Do's
- Use the shimmer effect on hero headlines
- **Use warm accent color strategically** for CTAs and key metrics
- **Vary border radius** based on component importance (avoid 8px everywhere)
- **Prefer asymmetric layouts** over uniform card grids where appropriate
- Use backdrop blur effects on overlays
- Implement smooth transitions and hover effects
- Keep blue as the primary brand color
- Use Poppins font for general text, IBM Plex Mono for statistics
- Use border glow hover effects for interactive cards
- Add diagonal section dividers between major content blocks

### Don'ts
- Don't use colors outside the defined palette
- **Don't use only 8px border radius** - vary it intentionally
- **Don't default to symmetric 3-column card grids** - consider asymmetric layouts
- **Don't use standard hover lift effect exclusively** - mix in border glow and other interactions
- Don't use heavy font weights for headlines (stick to font-light for Poppins)
- Don't remove the gradient backgrounds
- Don't use different animation durations without purpose
- Don't compromise on accessibility (maintain proper contrast - WCAG AA minimum)
- Don't overuse warm accent - it's for emphasis, not primary color

### Anti-Generic Checklist
When designing new sections, verify:
- [ ] NOT using only 1-2 colors (we have 6+ brand colors now)
- [ ] NOT using 8px border radius everywhere (varied: 4px, 8px, 16px, 24px)
- [ ] NOT using only symmetric card grids (asymmetric layouts where appropriate)
- [ ] NOT using only gradient blue icons (warm accent and navy variants)
- [ ] HAS warm accent colors strategically placed (CTAs, metrics, highlights)
- [ ] HAS varied interactive effects (not just hover lift)
- [ ] HAS visual hierarchy with typography (Poppins + IBM Plex Mono)

This branding guide ensures consistent yet distinctive visual identity across all ClinicalSim.ai digital properties and applications.