# ComCreate Proposal Template

A premium, reusable proposal and mockup template system for client web development proposals.

## Quick Start

1. **Copy this template folder** and rename it to `{client-name}-prop`
2. **Edit configuration** in `src/config/template.config.ts`
3. **Set pricing** in `src/lib/pricing-data.ts`
4. **Replace placeholder images** in `public/placeholders/`
5. **Update mockup content** in `public/mockups/index.html`
6. **Run the project:**
   ```bash
   npm install
   npm run dev
   ```

## Project Structure

```
proposal-template/
├── src/
│   ├── app/                    # Next.js app directory
│   ├── components/
│   │   ├── sections/           # Proposal page sections
│   │   │   ├── AboutClient.tsx # Client overview section
│   │   │   ├── Hero.tsx        # Hero section
│   │   │   ├── Investment.tsx  # Pricing section
│   │   │   ├── Deliverables.tsx # What's included
│   │   │   ├── CTA.tsx         # Call-to-action section
│   │   │   └── ...
│   │   └── ui/                 # Reusable UI components
│   ├── config/
│   │   └── template.config.ts  # MAIN CONFIGURATION FILE
│   └── lib/
│       └── pricing-data.ts     # PRICING CONFIGURATION
├── public/
│   ├── mockups/                # Interactive client mockup
│   │   ├── index.html          # Mockup HTML (uses {{TOKEN}} format)
│   │   ├── style.css           # Mockup styles
│   │   └── app.js              # Mockup interactions
│   └── placeholders/           # Placeholder images to replace
└── README.md
```

---

## Configuration Guide

### Step 1: Client Configuration (`template.config.ts`)

This is the central configuration file for all client-specific content. Edit `src/config/template.config.ts`:

```typescript
export const config = {
  client: {
    name: "Acme Corp",              // Company name
    tagline: "Innovation Delivered", // Main tagline
    description: "Leading provider of innovative solutions...",
    logo: "/placeholders/client-logo.svg",
    industry: "Technology",          // e.g., "Fitness", "Wellness", "Retail"
    city: "San Francisco",
    website: "acmecorp.com",
  },

  // Statistics displayed in AboutClient section
  stats: [
    { value: "500+", label: "Clients Served", icon: Users },
    { value: "10", label: "Years Experience", icon: MapPin },
    { value: "15", label: "Locations", icon: Activity },
    { value: "98%", label: "Satisfaction", icon: Trophy },
  ],

  // Brand pillars (key differentiators)
  pillars: [
    { icon: Heart, title: "Quality First", description: "..." },
    { icon: Sparkles, title: "Innovation", description: "..." },
    { icon: TrendingUp, title: "Growth", description: "..." },
  ],

  // Integration platform (e.g., MindBody, Acuity, Square)
  integration: {
    name: "MindBody",  // Change to client's booking/payment platform
  },

  // ... services, testimonials, locations
}
```

### Step 2: Pricing Configuration (`pricing-data.ts`)

Configure the project pricing in `src/lib/pricing-data.ts`:

```typescript
export const pricingConfig: PricingConfig = {
    // {{PRICE}} - Set the total project price
    price: 15000,  // Replace with actual project price

    // Features displayed in Investment section
    websiteFeatures: [
        "Custom coded design (no templates)",
        "Multi-location support",
        // ... customize as needed
    ],

    integrationFeatures: [
        "Secure API proxy layer",
        "Custom booking flows",
        // ... customize as needed
    ],

    // Payment terms (percentages)
    paymentSplit: {
        upfront: 50,     // 50% due upfront
        completion: 50,  // 50% on completion
    },
}
```

**Pricing Display:**
- Total price shown prominently in Investment section
- Split into Website + Integration halves for visual breakdown
- Payment terms calculated automatically

### Step 3: Replace Placeholder Images

Replace files in `public/placeholders/`:

| File | Dimensions | Description |
|------|------------|-------------|
| `client-logo.svg` | 400x120 | Client's logo |
| `hero-bg.svg` | 1920x1080 | Hero background image |
| `service-1.svg` - `service-4.svg` | 800x600 | Service/offering images |
| `testimonial-1.svg` - `testimonial-4.svg` | 600x800 | Team/testimonial photos |
| `partner-1.svg` - `partner-5.svg` | 200x200 | Partner/client logos |
| `location-1.svg` - `location-3.svg` | 800x600 | Location photos |

**Tip:** Use PNG/JPG for photographs, SVG for logos and graphics.

### Step 4: Update Mockup Content

Edit `public/mockups/index.html` and replace all `{{TOKEN}}` placeholders:

**Client Identity:**
| Token | Description |
|-------|-------------|
| `{{CLIENT_NAME}}` | Company name |
| `{{CLIENT_TAGLINE}}` | Main tagline |
| `{{CLIENT_DESCRIPTION}}` | Business description |
| `{{CLIENT_CITY}}` | Primary city |
| `{{CLIENT_INDUSTRY}}` | Business category |

**Hero Section:**
| Token | Description |
|-------|-------------|
| `{{HERO_LINE_1}}` | First line of hero headline |
| `{{HERO_LINE_2}}` | Second line of hero headline |

**Statistics:**
| Token | Description |
|-------|-------------|
| `{{STAT_N_COUNT}}` | Statistic number (e.g., "500") |
| `{{STAT_N_SUFFIX}}` | Statistic suffix ("+", "K", "%", etc.) |
| `{{STAT_N_LABEL}}` | Statistic label (e.g., "Clients Served") |

**Services:**
| Token | Description |
|-------|-------------|
| `{{SERVICE_N_NAME}}` | Service name |
| `{{SERVICE_N_DESC}}` | Service description |

**Testimonials:**
| Token | Description |
|-------|-------------|
| `{{TESTIMONIAL_N_NAME}}` | Person's name |
| `{{TESTIMONIAL_N_TITLE}}` | Person's title/role |

**Locations:**
| Token | Description |
|-------|-------------|
| `{{LOCATION_N_NAME}}` | Location name |
| `{{LOCATION_N_ADDRESS}}` | Street address |
| `{{LOCATION_N_CITY}}` | City, State |

---

## Customization

### Changing the Integration Platform

The template uses a configurable integration name (default: "MindBody"):

1. Update `config.integration.name` in `template.config.ts`
2. All references in Investment and Deliverables sections update automatically

Common integrations: MindBody, Acuity, Square, Calendly, etc.

### Changing Theme Colors

**Mockup:** Edit `public/mockups/style.css`:

```css
:root {
    --accent: #0A84FF;  /* Change to client's brand color */
}
```

**Proposal:** Edit `tailwind.config.ts` to change the primary color:

```typescript
theme: {
  extend: {
    colors: {
      primary: "#0A84FF",  // Change this
    },
  },
}
```

### Adding More Services/Locations

Edit the arrays in `template.config.ts`:

```typescript
services: [
  { name: "Service 1", description: "...", image: "/placeholders/service-1.svg" },
  { name: "Service 2", description: "...", image: "/placeholders/service-2.svg" },
  // Add more as needed...
],

locations: [
  { name: "Downtown", address: "123 Main St", city: "City, ST", image: "..." },
  { name: "Uptown", address: "456 Oak Ave", city: "City, ST", image: "..." },
  // Add more as needed...
]
```

### Modifying Deliverables

Edit `src/components/sections/Deliverables.tsx` to add/remove deliverable items:

```typescript
const websiteDeliverables: Deliverable[] = [
    { name: "Custom Website", description: "Fully custom-coded" },
    // Add or modify items...
]
```

---

## Preserved Agency Branding

The following ComCreate branding is preserved throughout:

- **Navbar**: ComCreate logo
- **Footer**: ComCreate contact information
- **CTA Section**: Hayden Hansen contact details
- **Hero**: "x COMCREATE" branding

---

## Tech Stack

- **Framework**: Next.js 16
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Smooth Scroll**: Lenis
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

---

## Development

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

---

## Deployment

The template is optimized for Vercel deployment:

1. Push to GitHub
2. Import to Vercel
3. Deploy automatically

**Environment Variables:** None required for basic deployment.

---

## Checklist

Use this checklist when setting up a new client proposal:

- [ ] Copy template folder and rename to `{client}-prop`
- [ ] Edit `src/config/template.config.ts` with client info
- [ ] Set pricing in `src/lib/pricing-data.ts`
- [ ] Replace all placeholder images in `public/placeholders/`
- [ ] Update `public/mockups/index.html` with client content
- [ ] Update mockup theme color in `public/mockups/style.css`
- [ ] Run `npm run build` to verify no errors
- [ ] Deploy to Vercel
