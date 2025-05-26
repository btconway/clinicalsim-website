# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

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