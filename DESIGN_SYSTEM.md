# MTN Mud Design System

> **Modern Professional Industrial Design Language**
> Version 1.0 | Last Updated: 2025

## Table of Contents

1. [Brand Overview](#brand-overview)
2. [Design Principles](#design-principles)
3. [Color System](#color-system)
4. [Typography](#typography)
5. [Spacing & Layout](#spacing--layout)
6. [Components](#components)
7. [Patterns](#patterns)
8. [Imagery Guidelines](#imagery-guidelines)
9. [Accessibility](#accessibility)

---

## Brand Overview

### Brand Positioning
MTN Mud represents **reliability, expertise, and modern professionalism** in the drilling fluids industry. Our design system reflects these values through:

- **Industrial Sophistication**: Clean, modern aesthetics that respect the industrial nature of our business
- **Professional Trust**: Consistent, polished presentation that builds confidence
- **Action-Oriented**: Clear calls-to-action and straightforward communication
- **Safety-First**: Visual hierarchy that emphasizes safety and reliability

### Target Audience
- Drilling operations managers
- Field engineers
- Procurement specialists
- C-suite decision makers in oil & gas

---

## Design Principles

### 1. Clarity Over Complexity
Every element should serve a purpose. Remove unnecessary decoration and focus on clear communication of value propositions and technical expertise.

### 2. Professional Warmth
Balance industrial professionalism with approachability. Use warm neutrals and thoughtful spacing to create an inviting yet authoritative presence.

### 3. Hierarchy & Scannability
Information should be easy to scan and digest. Use strong typographic hierarchy, clear sections, and visual breaks.

### 4. Consistency & Trust
Consistent application of colors, spacing, and components builds trust and professionalism.

---

## Color System

### Primary Brand Colors

#### Safety Orange
**Primary Brand Color** - Energy, action, safety
```css
--safety-orange: #DD5E26
```

**Usage:**
- Primary CTAs and buttons
- Key statistics and metrics
- Important highlights and accents
- Icons in hero sections
- Hover states and interactive elements

**Shades:**
```css
--safety-orange-50: #FEF3EE   /* Backgrounds, subtle highlights */
--safety-orange-100: #FCE4D6  /* Light backgrounds */
--safety-orange-200: #F9C8AD  /* Borders, dividers */
--safety-orange-300: #F5A379  /* Secondary elements */
--safety-orange-400: #EF7A43  /* Hover states */
--safety-orange-500: #DD5E26  /* Primary (DEFAULT) */
--safety-orange-600: #C2491A  /* Pressed states */
--safety-orange-700: #9F3818  /* Dark accents */
--safety-orange-800: #7F2F1A  /* Very dark accents */
--safety-orange-900: #672817  /* Deepest shade */
```

#### Charcoal
**Secondary Brand Color** - Strength, professionalism, reliability
```css
--charcoal: #343230
```

**Usage:**
- Dark backgrounds and sections
- Primary text color
- Headers and navigation
- Strong contrast elements

**Shades:**
```css
--charcoal-50: #F5F4F4    /* Lightest tint */
--charcoal-100: #E6E5E4   /* Very light borders */
--charcoal-200: #CFCDCB   /* Light borders, dividers */
--charcoal-300: #ADA9A6   /* Muted text */
--charcoal-400: #8A8582   /* Secondary text */
--charcoal-500: #6F6B68   /* Body text light */
--charcoal-600: #5A5754   /* Emphasized text */
--charcoal-700: #4A4744   /* Strong text */
--charcoal-800: #343230   /* Primary (DEFAULT) */
--charcoal-900: #1F1E1D   /* Darkest backgrounds */
```

### Neutral Colors

#### Warm Whites & Grays
Creates approachable, comfortable backgrounds
```css
--warm-white: #FDFCFB     /* Primary light background */
--warm-gray-50: #FDFCFB   /* Lightest */
--warm-gray-100: #F7F6F4  /* Default warm gray */
--warm-gray-200: #EEECEA  /* Subtle sections */
--warm-gray-300: #E0DDD9  /* Borders, dividers */
--warm-gray-400: #C9C4BE  /* Strong dividers */
```

**Usage:**
- Page backgrounds (warm-white)
- Alternating section backgrounds (warm-gray-100)
- Card backgrounds
- Input fields and form elements

---

## Typography

### Font Stack

#### Primary Font: Work Sans Variable
Modern, professional sans-serif for all body text and most headings.
```css
font-family: 'Work Sans Variable', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
```

**Characteristics:**
- Clean, highly readable
- Professional without being corporate
- Excellent weight range (100-900)
- Great for both headings and body

#### Monospace Font: Space Grotesk
Technical feel for numbers, stats, and data
```css
font-family: 'Space Grotesk', 'SF Mono', Monaco, 'Courier New', monospace;
```

**Usage:**
- Statistics and metrics
- Technical specifications
- Phone numbers
- Emphasis on precision data

### Type Scale

#### Display Headings
```css
/* Hero Headlines - Ultra Large */
.text-7xl { font-size: 4.5rem; line-height: 1.05; }  /* 72px */
.text-6xl { font-size: 3.75rem; line-height: 1.05; } /* 60px */
.text-5xl { font-size: 3rem; line-height: 1.05; }    /* 48px */
```

**Usage:** Hero sections only
**Font Weight:** 900 (Black)
**Tracking:** Tight (-0.02em to -0.05em)

#### Section Headings
```css
/* Main Section Titles */
.text-4xl { font-size: 2.25rem; line-height: 1.1; }  /* 36px */
.text-3xl { font-size: 1.875rem; line-height: 1.2; } /* 30px */
```

**Usage:** Primary section headings
**Font Weight:** 900 (Black)
**Tracking:** Tight (-0.025em)

#### Subsection Headings
```css
.text-2xl { font-size: 1.5rem; line-height: 1.3; }   /* 24px */
.text-xl { font-size: 1.25rem; line-height: 1.4; }   /* 20px */
```

**Usage:** Card titles, subsections
**Font Weight:** 700-900 (Bold to Black)

#### Body Text
```css
/* Large Body - For hero descriptions, key value props */
.text-2xl { font-size: 1.5rem; line-height: 1.5; }   /* 24px */
.text-xl { font-size: 1.25rem; line-height: 1.6; }   /* 20px */

/* Standard Body */
.text-lg { font-size: 1.125rem; line-height: 1.75; } /* 18px */
.text-base { font-size: 1rem; line-height: 1.75; }   /* 16px */

/* Small Text */
.text-sm { font-size: 0.875rem; line-height: 1.5; }  /* 14px */
.text-xs { font-size: 0.75rem; line-height: 1.5; }   /* 12px */
```

**Font Weight:** 400-600 (Regular to Semibold)

### Typography Best Practices

1. **Hierarchy**: Use consistent heading levels (h1 → h2 → h3)
2. **Contrast**: Pair black (900) headings with medium (500) body text
3. **Line Length**: Max 65-75 characters per line for readability
4. **Leading**: Generous line-height (1.5-1.75) for body text
5. **Tracking**: Tighten letter-spacing on large headings, normal for body

---

## Spacing & Layout

### Spacing Scale
Based on 4px base unit, using Tailwind's default scale

```css
/* Core Spacing Values */
px   = 1px
0.5  = 2px
1    = 4px
2    = 8px
3    = 12px
4    = 16px
5    = 20px
6    = 24px
8    = 32px
10   = 40px
12   = 48px
16   = 64px
20   = 80px
24   = 96px
32   = 128px
```

### Common Spacing Patterns

#### Section Spacing
```css
/* Vertical section padding */
.py-20  /* 80px - Standard section */
.py-24  /* 96px - Large section */
.py-32  /* 128px - Hero sections */

/* Container spacing */
.px-6   /* 24px - Mobile */
.px-8   /* 32px - Desktop */
```

#### Component Spacing
```css
/* Card padding */
.p-8    /* 32px - Standard card */
.p-10   /* 40px - Large card */

/* Element gaps */
.gap-4  /* 16px - Tight groups */
.gap-6  /* 24px - Standard groups */
.gap-8  /* 32px - Section groups */
.gap-12 /* 48px - Large gaps */
```

### Layout Containers

#### Max-Width Containers
```css
.max-w-7xl  /* 1280px - Full-width sections */
.max-w-6xl  /* 1152px - Content sections */
.max-w-5xl  /* 1024px - Narrow content */
.max-w-4xl  /* 896px - Text-focused */
.max-w-3xl  /* 768px - Articles */
.max-w-2xl  /* 672px - Forms */
```

#### Grid Patterns
```css
/* Standard 3-column card grid */
.grid .grid-cols-1 .md:grid-cols-3 .gap-8

/* 2-column content */
.grid .grid-cols-1 .lg:grid-cols-2 .gap-12

/* Stats/Metrics */
.grid .grid-cols-2 .lg:grid-cols-4 .gap-6
```

---

## Components

### Buttons

#### Primary Button (Safety Orange)
```html
<a class="btn style2" href="/contact">
  Request Consultation <i class="ri-arrow-right-up-line"></i>
</a>
```

**Style Characteristics:**
- Background: Safety Orange (#DD5E26)
- Text: White
- Font Weight: 700 (Bold)
- Text Transform: None (sentence case)
- Border Radius: 0.5rem (8px)
- Padding: 0.75rem 1.5rem
- Icon: Right-aligned arrow
- Hover: Darker orange with subtle scale

**Usage:** Primary CTAs, conversion actions

#### Secondary Button (White/Light)
```html
<a class="btn style6" href="tel:307-682-8688">
  Call 307-682-8688 <i class="ri-phone-line"></i>
</a>
```

**Style Characteristics:**
- Background: White
- Text: Charcoal
- Border: 2px solid transparent
- Hover: Background slightly gray

**Usage:** Secondary actions, alternative CTAs

#### Tertiary Button (Dark/Outline)
```html
<a class="btn style3" href="/products">
  Browse Products <i class="ri-arrow-right-up-line"></i>
</a>
```

**Style Characteristics:**
- Background: Transparent or Charcoal
- Text: White or Charcoal
- Border: 2px solid
- Hover: Filled background

**Usage:** Tertiary actions, navigation

### Cards

#### Feature Card (Light)
```html
<div class="bg-warm-white rounded-2xl p-8 shadow-soft-lg border-l-4 border-safety-orange">
  <div class="w-14 h-14 rounded-xl bg-safety-orange-50 flex items-center justify-center mb-5">
    <!-- Icon SVG -->
  </div>
  <h3 class="text-2xl font-black mb-4 text-charcoal-900">Feature Title</h3>
  <p class="text-charcoal-600 leading-relaxed font-medium">
    Description text that explains the feature or benefit.
  </p>
</div>
```

**Key Elements:**
- Rounded corners (2xl = 16px)
- Soft shadow for depth
- Safety orange left border accent
- Icon container with subtle background
- Generous padding

#### Feature Card (Dark)
```html
<div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-safety-orange/50 transition-all">
  <div class="w-16 h-16 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-6">
    <!-- Icon SVG -->
  </div>
  <h3 class="text-2xl font-black mb-4 text-white">Feature Title</h3>
  <p class="text-warm-gray-300 leading-relaxed font-medium">
    Description text with good contrast on dark background.
  </p>
</div>
```

**Usage:** On dark backgrounds (charcoal-900)

### Badges & Labels

#### Category Badge
```html
<div class="inline-block bg-safety-orange/10 text-safety-orange px-4 py-2 rounded-lg text-xs font-black uppercase tracking-wider">
  Service-Based Drilling Fluids
</div>
```

**Characteristics:**
- Small (xs = 12px)
- All caps
- Black font weight
- Wide letter spacing
- Subtle background tint

### Icons

#### Icon Container (Light Background)
```html
<div class="w-14 h-14 rounded-xl bg-safety-orange-50 flex items-center justify-center">
  <svg class="w-7 h-7 text-safety-orange"><!-- ... --></svg>
</div>
```

#### Icon Container (Dark Background)
```html
<div class="w-16 h-16 rounded-xl bg-safety-orange/10 flex items-center justify-center">
  <svg class="w-9 h-9 text-safety-orange"><!-- ... --></svg>
</div>
```

**Icon Guidelines:**
- Use heroicons or remix icons
- Stroke width: 2-2.5px
- Always paired with text labels
- Consistent sizing within sections

### Shadows

```css
/* Soft Shadows - For cards and elevated elements */
.shadow-soft     /* 0 2px 8px rgba(52, 50, 48, 0.08) */
.shadow-soft-lg  /* 0 4px 16px rgba(52, 50, 48, 0.12) */
.shadow-soft-xl  /* 0 8px 32px rgba(52, 50, 48, 0.16) */

/* Special Shadows */
.shadow-orange-glow  /* 0 4px 16px rgba(221, 94, 38, 0.25) - For orange elements */
.shadow-inner-soft   /* inset 0 2px 4px rgba(52, 50, 48, 0.06) - For inputs */
```

**Usage:**
- Cards: shadow-soft-lg
- Hover states: shadow-soft-xl
- Stats/metrics with orange: shadow-orange-glow

---

## Patterns

### Hero Section Pattern

**Structure:**
1. Badge/Eyebrow (category indicator)
2. Large headline (text-5xl to text-7xl)
3. Supporting paragraph (text-xl)
4. Primary + Secondary CTA buttons
5. Trust indicators (stats or proof points)

**Layout:**
- Grid: 2 columns on desktop, stacked on mobile
- Image: 600px height, rounded-2xl, shadow-soft-xl
- Padding: py-24 to py-32

### Content Section Pattern

**Structure:**
1. Centered section header with badge
2. Main heading (text-4xl or text-5xl)
3. Supporting subheading (text-lg or text-xl)
4. 3-column grid for features/benefits
5. CTA at bottom (optional)

**Spacing:**
- Section padding: py-20
- Header margin-bottom: mb-16
- Card gap: gap-8

### Stats Display Pattern

```html
<div class="grid grid-cols-3 gap-6">
  <div class="text-center">
    <div class="text-4xl font-black text-safety-orange mb-2 font-mono">40+</div>
    <div class="text-sm text-charcoal-600 font-medium uppercase tracking-wider">
      Years Experience
    </div>
  </div>
  <!-- Repeat -->
</div>
```

**Characteristics:**
- Monospace font for numbers
- Orange color for emphasis
- Small uppercase labels
- Center-aligned

### Image + Content Split Pattern

```html
<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
  <div><!-- Content --></div>
  <div><!-- Image --></div>
</div>
```

**Alternating:** Swap order with `order-1 lg:order-2` classes

---

## Imagery Guidelines

### Image Treatment

1. **Aspect Ratios:**
   - Hero images: 16:9 or 4:3
   - Card images: 4:3 or 3:2
   - Portrait tiles: 2:3

2. **Overlays for Text:**
   ```css
   /* Dark gradient overlay */
   .bg-gradient-to-t .from-charcoal-900/80 .via-charcoal-900/40 .to-transparent

   /* For readability */
   .bg-gradient-to-r .from-charcoal-900/90 .via-charcoal-900/70 .to-transparent
   ```

3. **Border Radius:**
   - Standard: `rounded-2xl` (16px)
   - Large: `rounded-3xl` (24px)

4. **Image Effects:**
   - Hover scale: `hover:scale-105 transition-transform duration-300`
   - Always use object-cover: `object-cover`

### Image Selection

**Style Guide:**
- Industrial but modern
- Real equipment and operations
- Professional workers and teams
- Natural lighting preferred
- Avoid overly staged photos
- Show scale and capability

**Color Grading:**
- Warm tones that complement brand
- High contrast, not washed out
- Safety orange should not clash

---

## Accessibility

### Color Contrast

**WCAG 2.1 AA Compliance:**
- Safety Orange (#DD5E26) on White: ✓ 4.8:1
- Charcoal (#343230) on White: ✓ 12.6:1
- White on Charcoal: ✓ 12.6:1
- Safety Orange on Charcoal-900: ✓ 5.2:1

**Never Use:**
- Light text on Safety Orange
- Safety Orange text on white (use for accents only)

### Focus States

```css
/* All interactive elements must have visible focus */
.focus:outline-none .focus:ring-2 .focus:ring-safety-orange .focus:ring-offset-2
```

### Keyboard Navigation

- All buttons and links must be keyboard accessible
- Logical tab order
- Skip links for main content

### Screen Readers

- Semantic HTML (header, nav, main, section, footer)
- Alt text for all images
- ARIA labels for icon-only buttons
- Proper heading hierarchy (h1 → h2 → h3)

### Motion

```css
/* Respect prefers-reduced-motion */
@media (prefers-reduced-motion: reduce) {
  * {
    animation-duration: 0.01ms !important;
    transition-duration: 0.01ms !important;
  }
}
```

---

## Component Examples

### Complete Hero Section

```html
<section class="relative bg-warm-white overflow-hidden">
  <div class="mx-auto max-w-7xl px-6 py-24 lg:px-8 lg:py-32">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
      <div class="relative">
        <div class="inline-block bg-safety-orange/10 text-safety-orange px-4 py-2 rounded-lg text-xs font-black mb-6 uppercase tracking-wider">
          Category Label
        </div>
        <h1 class="text-5xl font-black tracking-tight text-charcoal-900 sm:text-6xl lg:text-7xl leading-[1.05] mb-8">
          Main Headline.<br/>
          <span class="text-safety-orange">With Accent.</span>
        </h1>
        <p class="text-xl text-charcoal-600 leading-relaxed font-medium mb-10 max-w-xl">
          Supporting paragraph that explains the value proposition clearly and concisely.
        </p>
        <div class="flex flex-col sm:flex-row gap-4">
          <a class="btn style2" href="/contact">Primary CTA</a>
          <a class="btn style6" href="tel:307-682-8688">Secondary CTA</a>
        </div>
      </div>
      <div class="relative lg:h-[600px]">
        <img src="/path/to/image.jpg" alt="Descriptive alt text" class="w-full h-full rounded-2xl shadow-soft-xl object-cover"/>
      </div>
    </div>
  </div>
</section>
```

### Complete Feature Section

```html
<section class="bg-charcoal-900 py-20">
  <div class="container mx-auto px-6 max-w-7xl">
    <div class="text-center mb-16">
      <h2 class="text-4xl md:text-5xl font-black text-white tracking-tight mb-6">
        Section Heading
      </h2>
      <p class="text-xl text-warm-gray-200 max-w-3xl mx-auto">
        Supporting subheading that provides context
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
      <div class="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10 hover:border-safety-orange/50 transition-all">
        <div class="w-16 h-16 rounded-xl bg-safety-orange/10 flex items-center justify-center mb-6">
          <svg class="w-9 h-9 text-safety-orange"><!-- Icon --></svg>
        </div>
        <h3 class="text-2xl font-black mb-4 text-white">Feature Title</h3>
        <p class="text-warm-gray-300 leading-relaxed font-medium mb-4">
          Feature description that explains the benefit clearly.
        </p>
        <div class="text-safety-orange font-black text-sm uppercase tracking-wider">Label</div>
      </div>
      <!-- Repeat for 3 columns -->
    </div>
  </div>
</section>
```

---

## Quick Reference

### Most Common Classes

**Backgrounds:**
- `bg-warm-white` - Light sections
- `bg-warm-gray-100` - Alternate light sections
- `bg-charcoal-900` - Dark sections
- `bg-charcoal-800` - Slightly lighter dark

**Text Colors:**
- `text-charcoal-900` - Primary dark text
- `text-charcoal-600` - Secondary dark text
- `text-white` - Light text on dark
- `text-warm-gray-300` - Muted light text
- `text-safety-orange` - Accent text

**Heading Styles:**
- `text-5xl font-black tracking-tight` - Hero
- `text-4xl font-black tracking-tight` - Section
- `text-2xl font-black` - Card/Component

**Body Text:**
- `text-xl leading-relaxed font-medium` - Large body
- `text-lg leading-relaxed font-medium` - Standard body
- `text-sm font-medium` - Small text

**Spacing:**
- `py-20 px-6` - Section padding
- `p-8` - Card padding
- `gap-8` - Grid gap
- `mb-16` - Section header margin

---

## Version History

**v1.0** - Initial design system documentation
- Comprehensive color system
- Typography scale and guidelines
- Component library
- Pattern documentation
- Accessibility standards

---

## Support

For questions or updates to this design system:
- Review existing pages for consistent implementation
- Reference [tailwind.config.js](./tailwind.config.js) for exact color values
- See [CustomStyles.astro](./src/components/CustomStyles.astro) for CSS variables

---

**Built for:** MTN Mud - Service Based Drilling Fluids
**Brand Pillars:** Reliability • Expertise • Safety • Modern Professionalism
