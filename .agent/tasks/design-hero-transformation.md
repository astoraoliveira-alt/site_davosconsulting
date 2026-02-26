
# Task: Hero Section Transformation for Lead Capture App

## Context
The user wants to transform the current consulting firm home/hero section into an impactful sales page for a **Lead Capture App**. This requires a shift from "Corporate Trust" to "Aggressive Growth/Tech Engine".

## 🧠 Deep Design Thinking Analysis
- **Sector**: Marketing Technology (SaaS).
- **Emotion**: Speed, Precision, Dominance.
- **Audience**: Sales Directors, Growth Hackers.
- **Cliché Scan**:
    - "Blue/White clean SaaS"? -> REJECTED.
    - "Illustration of people high-fiving?" -> REJECTED.
    - "Standard Hero Split?" -> REJECTED.

## 🎨 Design Commitment: "THE BLACK ENGINE"
- **Style**: **Cyber-Industrial / Typographic Brutalism**.
- **Geometry**: Sharp edges (0px-2px). No soft rounded corners.
- **Palette**: Deep Black (`#0a0a0a`) + Signal Orange (`#FF4D00`) for primary actions. No Blues.
- **Typography**: Inter (Weights: 400/800). Massive headlines.
- **Layout**: Center-Staggered or "Heads Up Display" (HUD) aesthetic.
- **Motion**: Snap transitions, typewriter reveals, "scanning" lines.

## Implementation Plan
1. **Config**: Update `tailwind.config.js` to add `davos-orange` (Signal Orange).
2. **Hero Component**:
   - Background: Dark with subtle "digital noise" or grid.
   - Headline: "CAPTURE. CONVERT. DOMINATE."
   - Subhead: "The automated lead engine that fills your pipeline while you sleep."
   - CTA: "Start Engine" (Primary) vs "View Demo" (Secondary).
   - Visual: Use `TypewriterEffect` for dynamic value propositions.
3. **Navbar**: Update to match the dark/orange theme.

## Verification
- Does it look like a standard SaaS? (If yes, FAIL).
- Is it "impactful"? (Subjective, but aim for high contrast).
- No Purple.
