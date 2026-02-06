# Premium Islamic Modern Color Theme - Annida Website

## Theme Overview
This document outlines the complete color palette and styling guidelines for the Annida Website. The theme follows a Premium Islamic Modern aesthetic with emerald, gold, and cream tones.

## Primary Color Palette

### Background & Surface Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Background Cream** | #FAF7F0 | Main background, light sections |
| **Soft Sage** | #E6EFE9 | Section backgrounds, dividers, subtle backgrounds |

### Brand Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Dark Forest** | #073B2A | Headers, footer, navbar, main text, strong elements |
| **Primary Emerald** | #0B6E4F | Buttons, links, CTAs, interactive elements |
| **Accent Gold** | #C9A227 | Highlights, borders, accents, hover states |

### Text Colors
| Color | Hex Code | Usage |
|-------|----------|-------|
| **Primary Text** | #073B2A | Main content, headings |
| **Secondary Text** | #0B6E4F | Secondary content, links |
| **Muted Text** | #6B7F77 | Lighter text, secondary information |
| **Inverse Text** | #FFFFFF | Text on dark backgrounds |

## Component Styling Guide

### Navbar
- **Background**: Dark Forest (#073B2A)
- **Text**: Inverse White (#FFFFFF)
- **Links**: White with Gold underline on hover
- **Logo Hover**: Gold color (#C9A227)

### Buttons
- **Primary Button**
  - Background: Primary Emerald (#0B6E4F)
  - Text: White (#FFFFFF)
  - Hover: Dark Forest (#073B2A)
  - Shadow: Emerald with 30% opacity

- **Secondary Button**
  - Background: Soft Sage (#E6EFE9)
  - Text: Dark Forest (#073B2A)
  - Border: Primary Emerald (#0B6E4F)
  - Hover: Primary Emerald background with white text

### Cards & Content
- **Program Cards**
  - Border: Soft Sage (#E6EFE9)
  - Border Hover: Accent Gold (#C9A227)
  - Background: White (#FFFFFF)
  - Shadow: Dark Forest 10% opacity

### Forms
- **Input Fields**
  - Border: Soft Sage (#E6EFE9)
  - Focus Border: Primary Emerald (#0B6E4F)
  - Background: White (#FFFFFF)
  - Text: Dark Forest (#073B2A)

### Footer
- **Background**: Dark Forest (#073B2A)
- **Text**: White (#FFFFFF)
- **Links**: Accent Gold (#C9A227)
- **Border**: Top border in Accent Gold (3px)

### Sections
- **Donate CTA**
  - Background: Gradient from Soft Sage to Background Cream
  - Borders (top/bottom): Accent Gold (4px)
  - Text: Dark Forest for headings, Primary Emerald for body

- **Impact Stats**
  - Background: Gradient from Soft Sage to lighter sage
  - Numbers: Primary Emerald (#0B6E4F)
  - Labels: Muted Text (#6B7F77)

### Gallery Items
- **Border**: Soft Sage (#E6EFE9)
- **Hover Border**: Accent Gold (#C9A227)
- **Hover Effect**: Scale 1.05 with enhanced shadow

## Design Principles

### Contrast & Accessibility
- All text meets WCAG AA contrast requirements
- Primary text (#073B2A) on light backgrounds (Background Cream #FAF7F0)
- Inverse text (#FFFFFF) on dark backgrounds (Dark Forest #073B2A)
- Links (#0B6E4F) are clearly distinguished from regular text

### Modern Islamic Aesthetic
- Emerald and gold are traditional Islamic colors
- Cream and soft sage provide elegant, minimal backgrounds
- Clean geometric layouts with subtle shadows
- Generous whitespace for clarity

### Hover & Interactive States
- All interactive elements have smooth transitions (0.3s ease)
- Buttons show background color change
- Links show gold underline or color change
- Cards lift with shadow enhancement on hover

## CSS Custom Properties
The theme uses CSS custom properties for easy maintenance:

```css
--color-dark-forest: #073B2A;
--color-primary-emerald: #0B6E4F;
--color-accent-gold: #C9A227;
--color-background-cream: #FAF7F0;
--color-soft-sage: #E6EFE9;
--color-text-primary: #073B2A;
--color-text-secondary: #0B6E4F;
--color-text-muted: #6B7F77;
--color-text-inverse: #FFFFFF;
```

## Utility Classes Available

### Text Color Classes
- `.text-primary` - Dark Forest (#073B2A)
- `.text-secondary` - Primary Emerald (#0B6E4F)
- `.text-muted` - Muted Text (#6B7F77)
- `.accent` - Accent Gold (#C9A227)

### Background Classes
- `.bg-cream` - Background Cream (#FAF7F0)
- `.bg-sage` - Soft Sage (#E6EFE9)
- `.bg-primary` - Primary Emerald (#0B6E4F) with white text
- `.bg-dark` - Dark Forest (#073B2A) with white text

## Responsive Considerations
- Theme works seamlessly across all screen sizes
- Touch targets (buttons/links) are at least 44x44px
- Cards and galleries adapt to viewport width
- Text sizes scale appropriately for smaller screens

## Future Customization
To modify theme colors in the future:
1. Update the CSS custom properties in `:root` in `app.css`
2. All themed elements will automatically update
3. Test accessibility with updated colors
4. Maintain contrast ratios (minimum 4.5:1 for text)

---

**Theme Applied**: February 6, 2026  
**Framework**: React + Vite  
**Components Themed**: All major components including Navbar, Footer, Buttons, Cards, Forms, and Sections
