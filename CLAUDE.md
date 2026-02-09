# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## Shell Commands

**IMPORTANT**: Always quote file paths containing special characters (parentheses, spaces, etc.) in shell commands.

- ❌ `git diff app/(marketing)/insights/page.tsx` - Will fail with "no matches found"
- ✅ `git diff "app/(marketing)/insights/page.tsx"` - Works correctly

This applies to all shell commands including `git`, `ls`, `cat`, etc.

## Architecture Overview

This is a Next.js 15 application using the App Router with a component-driven architecture built on shadcn/ui and Radix UI primitives.

### Key Technologies
- **Framework**: Next.js 15 with App Router
- **Styling**: Tailwind CSS with CSS variables for theming
- **Components**: shadcn/ui components built on Radix UI primitives
- **Icons**: Lucide React
- **Forms**: React Hook Form with Zod validation
- **Charts**: Recharts
- **Toast**: Sonner

### Project Structure
- `app/` - Next.js App Router pages and layouts
- `components/ui/` - shadcn/ui components (auto-generated, avoid manual edits)
- `components/` - Custom components
- `lib/` - Utility functions (primarily `utils.ts` for cn helper)
- `hooks/` - Custom React hooks
- `public/` - Static assets

### Component System
The project uses shadcn/ui components which are:
- Built on Radix UI primitives
- Styled with Tailwind CSS using CSS variables
- Configured via `components.json`
- Installed via CLI (`npx shadcn@latest add <component>`)

### Styling Conventions
- Uses CSS variables defined in `app/globals.css` for theming
- Tailwind with custom color system (background, foreground, primary, etc.)
- `cn()` utility function from `lib/utils.ts` for conditional class merging
- Dark mode support via `class` strategy

### Path Aliases
- `@/*` - Project root
- `@/components` - Components directory
- `@/lib` - Library/utility functions
- `@/hooks` - Custom hooks

### Build Configuration
- ESLint and TypeScript errors ignored during builds
- Images unoptimized for static export compatibility

## Content Management

### Blog Posts (Insights)
- **Location**: `app/(marketing)/insights/[slug]/page.mdx`
- **Registry**: `lib/posts.ts` - Must be updated when adding new posts
- **Layout**: Posts use `components/article-layout.tsx` wrapper
- **Workflow**: Blog posts may be created by separate agents/processes
  - Always check `lib/posts.ts` for the current list of posts
  - Verify new posts are registered in the posts array with metadata
  - Ensure MDX files follow the ArticleLayout pattern
  - **IMPORTANT**: When multiple agents work on this codebase, always pull latest changes before making commits to avoid conflicts with blog post additions

### MDX Content Guidelines
- Use `page.mdx` files that import ArticleLayout component
- Escape special characters: `p<0.001` → `p&lt;0.001`
- Follow established tag conventions (see Insights page for color coding)

## Design System (Updated Feb 2026)

### Custom Components Library
**Feature Components:**
- `components/feature-card.tsx` - Asymmetric cards with border glow hover, color variants (default, warm, navy, success)
- `components/stat-highlight.tsx` - Large statistics with IBM Plex Mono font, multiple color variants
- `components/evidence-showcase.tsx` - RCT study display with badges and citations

**Layout Components:**
- `components/asymmetric-grid.tsx` - Flexible layouts: featured-left/right, staggered, mixed
- `components/section-divider.tsx` - SVG dividers: diagonal-down/up, wave, curve

**Media Components:**
- `components/demo-video-section.tsx` - Video embed with custom warm accent play button
- `components/screenshot-gallery.tsx` - Lightbox gallery with keyboard navigation

### Color System
- **Primary**: Blue (#3B82F6) - Brand identity, navigation
- **Warm Accent**: Orange (#F97316) - CTAs, metrics, highlights - `text-warm`, `bg-warm`, `border-warm`
- **Success**: Green (#10B981) - Outcomes, testimonials - `text-success`, `bg-success`
- **Navy**: Deep blue (#1E3A8A) - Authority, headers - `text-navy`, `bg-navy`

### Typography
- **Primary**: Poppins (300-700) - All body text, headlines, UI
- **Secondary**: IBM Plex Mono (400-700) - Statistics, data - `font-mono` class

### Button Variants
- `gradient-primary` - Blue-indigo-purple gradient with shimmer
- `warm-accent` - Orange border with sliding fill animation
- `warm-filled` - Solid warm accent background
- `text-link` - Animated underline on hover

### Border Radius System
- `rounded-xs` (4px), `rounded-sm` (6px), `rounded-md` (8px), `rounded-lg` (8px), `rounded-xl` (16px), `rounded-2xl` (24px)
- **Guideline**: Vary based on component importance, avoid uniform 8px everywhere