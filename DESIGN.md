---
name: StratxceL
description: AI-Powered Business Strategy & Expert Consulting Platform
colors:
  primary: "#04344C"
  primary-dark: "#021C2A"
  accent-sky: "#B0EDF9"
  accent-glow: "rgba(176, 237, 249, 0.25)"
  surface-card: "#074563"
  surface-glass: "rgba(7, 69, 99, 0.65)"
  border-hairline: "rgba(176, 237, 249, 0.2)"
  text-primary: "#FFFFFF"
  text-sky: "#B0EDF9"
  text-muted: "#94A3B8"
typography:
  display:
    fontFamily: "'Outfit', 'Inter', system-ui, sans-serif"
    fontSize: "clamp(2.5rem, 6vw, 4.5rem)"
    fontWeight: 700
    lineHeight: 1.1
  body:
    fontFamily: "'Inter', system-ui, sans-serif"
    fontSize: "1rem"
    lineHeight: 1.6
rounded:
  sm: "6px"
  md: "12px"
  lg: "20px"
  full: "9999px"
spacing:
  sm: "12px"
  md: "24px"
  lg: "48px"
  xl: "80px"
components:
  button-primary:
    backgroundColor: "{colors.accent-sky}"
    textColor: "{colors.primary}"
    rounded: "{rounded.md}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "#FFFFFF"
---

# Design System: StratxceL

## Overview

**Creative North Star: "The Executive Sky Matrix"**

StratxceL's visual identity relies on a disciplined, highly professional two-tone color system combining deep pastel blue (`#04344C`) with crisp sky blue (`#B0EDF9`). It replaces multi-colored gradients with an authoritative, cohesive financial and consulting aesthetic.

**Key Characteristics:**
- **Deep Pastel Blue Surfaces**: Dark midnight navy base (`#021C2A`) and rich pastel blue cards (`#04344C` / `#074563`).
- **Sky Blue Highlights**: Precise sky blue (`#B0EDF9`) accents for CTAs, active telemetry indicators, and subtle radial halos.
- **Glassmorphic Precision**: Razor-sharp hairline borders (`rgba(176, 237, 249, 0.2)`) and backdrop blur (`16px`).
- **Cohesive Typography**: Pure white (`#FFFFFF`) headlines with sky blue (`#B0EDF9`) labels and soft slate body paragraphs.

## Colors

### Primary
- **Deep Pastel Blue** (`#04344C`): Core brand color for surfaces, structural cards, and section backgrounds.
- **Midnight Navy Base** (`#021C2A`): Global page background color.

### Accent
- **Sky Blue** (`#B0EDF9`): Focal CTAs, active tab indicators, key badges, and interactive highlights.

### Neutral
- **Primary Text** (`#FFFFFF`): High-contrast titles and headlines.
- **Sky Text / Accents** (`#B0EDF9`): Secondary highlights and badges.
- **Muted Text** (`#94A3B8`): Description paragraphs and secondary labels.
- **Hairline Border** (`rgba(176, 237, 249, 0.2)`): Container card division lines.

### Named Rules
**The Two-Tone Cohesion Rule.** All UI elements, buttons, badges, glows, and indicators use strictly deep pastel blue (`#04344C`) and sky blue (`#B0EDF9`). Rainbow gradients and multi-colored accents are strictly prohibited.

## Typography

**Display Font:** Outfit / Inter (`'Outfit', 'Inter', sans-serif`)
**Body Font:** Inter (`'Inter', sans-serif`)

### Hierarchy
- **Display** (Bold 700, `clamp(2.5rem, 6vw, 4.5rem)`): Hero headlines and major section titles.
- **Headline** (SemiBold 600, 2rem): Card titles and feature headings.
- **Title** (Medium 500, 1.25rem): Subtitles and tab labels.
- **Body** (Regular 400, 1rem): Main paragraphs and descriptions.
- **Label** (Medium 500, 0.875rem, uppercase): Badges, chips, and metrics.

## Layout

Clean asymmetric grid layouts, generous vertical rhythm (`5rem` to `8rem`), and structured glassmorphic cards with max width `7xl`.

## Elevation & Depth

Tonal depth is driven by deep pastel blue cards over midnight navy backgrounds, paired with sky blue hairline borders and soft sky ambient glows (`rgba(176, 237, 249, 0.15)`).

## Shapes

- **Cards & Containers**: Smooth rounded corners (`16px` to `24px`).
- **Buttons & Badges**: Clean rounded corners (`8px` to `9999px` full pill).

## Components

### Buttons
- **Primary**: Sky blue background (`#B0EDF9`), deep pastel blue text (`#04344C`), font weight bold, hover highlight (`#FFFFFF`).
- **Secondary / Glass**: Glassmorphic background (`rgba(176, 237, 249, 0.05)`), sky blue hairline border (`rgba(176, 237, 249, 0.3)`), white text.

### Cards / Containers
- **Executive Glass Card**: Background `rgba(7, 69, 99, 0.65)`, border `1px solid rgba(176, 237, 249, 0.2)`, backdrop blur `16px`.

## Do's and Don'ts

### Do:
- **Do** restrict all accents and highlights strictly to sky blue (`#B0EDF9`) over deep pastel blue (`#04344C`).
- **Do** maintain crisp white text contrast over dark pastel blue surfaces.

### Don't:
- **Don't** use multi-color gradients (purple, pink, emerald, yellow, orange).
- **Don't** clutter screens with inconsistent colors. Maintain the 2-tone palette across all sections.
