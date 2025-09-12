# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Important Note for Development

**DO NOT run `pnpm dev` - The user is running the development server themselves.**

## Project Overview

**GEO Advisor Landing Page** - A modern, high-converting landing page for GEO Advisor, the AI Search Intelligence platform that helps brands track and optimize their visibility across AI-powered search engines (ChatGPT, Claude, Perplexity, Gemini, and Grok).

This is the marketing website that educates visitors about Generative Engine Optimization (GEO) and drives demo requests for the main platform.

## Development Commands

**Package Manager**: pnpm (Use `pnpm` instead of `npm`)

```bash
# Install dependencies
pnpm install

# Run development server (http://localhost:3000)
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start

# Run ESLint
pnpm lint

# Format code with Prettier
pnpm format
```

## Project Architecture

This is a **Next.js 15.4** marketing website with:

### Key Technologies

- **Framework**: Next.js 15.4.6 with App Router
- **UI**: React 19 with TypeScript
- **Styling**: Tailwind CSS with custom brand design system
- **Components**: shadcn/ui component library
- **Development**: Turbopack for faster development builds
- **Code Quality**: ESLint, Prettier, Husky, lint-staged
- **Analytics**: Ready for Google Analytics/GTM integration

### Directory Structure

```
/app                    # Next.js app directory
  page.tsx             # Main landing page
  layout.tsx           # Root layout with metadata
  globals.css          # Global styles and Tailwind directives

/components            # React components
  /ui                  # shadcn/ui components
  header.tsx           # Navigation header with demo CTA
  hero.tsx             # Hero section with gradient background
  metrics-dashboard.tsx # Animated metrics showcase
  ai-models.tsx        # Platform coverage section
  query-analysis-table.tsx # Query tracking demo table
  capability-wheel.tsx # Three core capabilities visualization
  why-seo.tsx          # Market problem education
  new-era-cta.tsx      # Bottom CTA section
  footer.tsx           # Footer with links

/lib                   # Utilities and helpers
  utils.ts             # Utility functions (cn helper)

/public                # Static assets
  favicon.ico          # Site favicon
```

## Brand Identity & Design System

### Brand Colors

The landing page uses a sophisticated purple and blue gradient theme:

```css
/* Core Brand Colors */
--brand-purple-50 through --brand-purple-900  /* Purple palette */
--brand-blue-50 through --brand-blue-900      /* Blue palette */

/* Gradient Backgrounds */
- Wavy purple gradient for hero section
- Subtle gradients for CTAs and hover states
```

### Typography & Voice

- **Professional & Authoritative**: Enterprise-focused language
- **Educational**: Explains the shift from SEO to GEO
- **Action-Oriented**: Clear CTAs and value propositions
- **Modern & Clean**: Minimal, focused design

### Key Brand Messages

1. **Main Value Proposition**: "AI Search Intelligence for Brands"
2. **Problem Statement**: Traditional SEO doesn't work for AI-powered search
3. **Solution**: Track, analyze, and optimize brand visibility across all AI platforms
4. **Differentiator**: Purpose-built for AI search, not adapted from SEO tools

## Core Landing Page Sections

### 1. Hero Section (`hero.tsx`)

- Gradient background with wavy pattern
- Main headline and value proposition
- Primary CTA: "Request Demo" (Calendly integration)
- Sign in link to app.geoadvisor.io

### 2. Metrics Dashboard (`metrics-dashboard.tsx`)

- Interactive metrics display showing platform capabilities
- Four key metrics with hover effects:
  - Brand Recall (100%)
  - Organic Mentions (46%)
  - Sentiment Score (74/100)
  - Share of Voice (27%)

### 3. AI Models Section (`ai-models.tsx`)

- Shows platform coverage across 5 major AI platforms
- Each platform card includes description and capabilities
- Visual proof of comprehensive monitoring

### 4. Query Analysis Table (`query-analysis-table.tsx`)

- Demo table showing query tracking capabilities
- Filters for query type and intent
- Shows brand mention frequency and sources

### 5. Capability Wheel (`capability-wheel.tsx`)

Three core capabilities presented visually:

- **Visibility Intelligence**: Track and monitor brand presence
- **Performance Optimization**: Analyze and improve results
- **Content Influence**: Create AI-optimized content

### 6. Why SEO Section (`why-seo.tsx`)

Educational content explaining:

- AI search is growing (85%+ via ChatGPT)
- SEO tactics no longer work
- Brands are falling behind without proper tools

### 7. New Era CTA (`new-era-cta.tsx`)

- Final conversion section
- "Ready to Define the New Era of Search?"
- Demo request button

## Important Implementation Details

### Responsive Design

- Mobile-first approach with Tailwind breakpoints
- All sections fully responsive
- Touch-friendly interactive elements

### Performance Optimizations

- Turbopack enabled for fast development
- Component-based code splitting
- Minimal JavaScript for fast loading

### Animations & Interactions

- Subtle hover effects on cards and buttons
- Smooth scroll behavior
- Animated metric counters
- Gradient transitions on CTAs

### External Integrations

- **Calendly**: Demo scheduling (https://calendly.com/santalucia/geo)
- **App Platform**: Links to app.geoadvisor.io
- **Future**: Google Analytics/GTM ready

## Content Guidelines

When updating landing page content:

1. **Maintain Professional Tone**: Enterprise B2B focus
2. **Use Data Points**: Include statistics and metrics
3. **Focus on Value**: Benefits over features
4. **Clear CTAs**: Direct action items (Request Demo)
5. **Educational Content**: Help visitors understand GEO vs SEO

## Common Tasks

### Adding New Sections

1. Create component in `/components/`
2. Import and add to `page.tsx`
3. Follow existing pattern for responsive design
4. Use brand colors from Tailwind config

### Updating Metrics

- Edit values in `metrics-dashboard.tsx`
- Ensure metrics align with platform capabilities
- Keep examples realistic and compelling

### Modifying CTAs

- Primary CTA: Update Calendly link in `hero.tsx` and `new-era-cta.tsx`
- Secondary CTAs: Update app links to app.geoadvisor.io

### Style Consistency

- Use Tailwind utility classes
- Follow spacing patterns (p-4, p-6, p-8)
- Maintain gradient theme throughout
- Keep shadow effects consistent (shadow-lg)

## Development Workflow

1. **Local Development**:

   ```bash
   pnpm dev
   # Opens http://localhost:3000
   ```

2. **Before Committing**:

   ```bash
   pnpm format  # Format code
   pnpm lint    # Check for issues
   pnpm build   # Ensure build succeeds
   ```

3. **Component Development**:
   - Use shadcn/ui components when possible
   - Create custom components in `/components/`
   - Keep components focused and reusable

## SEO & Marketing Considerations

### Meta Tags

- Title: "GEO Advisor - AI Search Intelligence for Brands"
- Description: Focus on AI search optimization
- Open Graph tags for social sharing

### Performance Metrics to Track

- Page load speed (target < 2s)
- Demo request conversion rate
- Bounce rate and engagement time
- Traffic sources and keywords

### A/B Testing Opportunities

- Hero section messaging
- CTA button text and colors
- Metric examples and visualizations
- Educational content depth

## Important Notes

- This is a static marketing site - no authentication needed
- All dynamic functionality lives in the main app (app.geoadvisor.io)
- Maintain consistency with main platform branding
- Optimize for conversion: education → demo request
- Keep content updated as platform features evolve

## Environment Variables

No environment variables required for basic operation. Future integrations may require:

```bash
# Analytics (future)
NEXT_PUBLIC_GA_ID=           # Google Analytics ID
NEXT_PUBLIC_GTM_ID=          # Google Tag Manager ID

# A/B Testing (future)
NEXT_PUBLIC_OPTIMIZELY_ID=   # Optimizely project ID
```

## Git Guidelines

- Commit message format: "type: description" (e.g., "feat: add testimonials section")
- Run formatters before committing (handled by Husky)
- Keep commits focused on single features/fixes
- Update this CLAUDE.md when adding major features

## Support & Resources

- Main app repository: `/Users/javier/Projects/geo`
- Design system: Uses same brand colors as main app
- Component library: https://ui.shadcn.com/
- Platform documentation: Available in main app
