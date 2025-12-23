# Service Detail Pages - Implementation Guide

## Overview

The service detail pages are fully reusable, data-driven components designed to showcase individual financial services with comprehensive information, pricing tiers, FAQs, and conversion elements.

## Features

Each service detail page includes:

1. **Hero Section** - Eye-catching banner with glassmorphism effects
2. **Key Features Grid** - Highlight main service benefits with icons
3. **Process Timeline** - Step-by-step guide showing how the service works
4. **Benefits Showcase** - Grid of key advantages
5. **Pricing Tiers** (Optional) - Investment options with feature comparison
6. **Related Services** (Optional) - Cross-sell opportunities
7. **FAQ Section** - Service-specific common questions
8. **CTA Sections** - Multiple conversion points throughout

## Design System

- **Material Design 3** inspired micro-interactions
- **Glassmorphism effects** on hero elements
- **Consistent color palette** using Dhanovaa brand colors
- **Responsive layouts** optimized for 1440px desktop
- **Smooth animations** using Motion (Framer Motion)

## File Structure

```
/components/
  ServiceDetail.tsx          # Main reusable component
  ServiceDetailDemo.tsx      # Demo page with service selector
  Navigation.tsx             # Top navigation with view switcher

/lib/
  service-details-data.ts    # Sample data for 4 services
```

## Usage

### 1. Import the Component

```tsx
import { ServiceDetail } from './components/ServiceDetail';
import { mutualFundsData } from './lib/service-details-data';
```

### 2. Use with Data

```tsx
function MutualFundsPage() {
  const handleCTA = () => {
    // Handle consultation booking or contact form
    console.log('CTA clicked');
  };

  return (
    <ServiceDetail 
      data={mutualFundsData} 
      onCTAClick={handleCTA}
    />
  );
}
```

### 3. Create Custom Service Data

```tsx
import { ServiceDetailData } from '@/components/ServiceDetail';
import { TrendingUp, Shield, Target } from 'lucide-react';

export const customServiceData: ServiceDetailData = {
  badge: 'Investment Services',
  title: 'Your Service Name',
  subtitle: 'Compelling one-liner',
  description: 'Detailed description of the service...',
  heroIcon: TrendingUp,
  ctaText: 'Get Started',
  
  features: [
    {
      icon: Target,
      title: 'Feature Name',
      description: 'Feature description...',
    },
    // Add more features...
  ],
  
  process: [
    {
      step: 1,
      title: 'Step Name',
      description: 'What happens in this step...',
    },
    // Add more steps...
  ],
  
  benefits: [
    {
      icon: Shield,
      title: 'Benefit Name',
      description: 'Why this matters...',
    },
    // Add more benefits...
  ],
  
  pricingTiers: [ // Optional
    {
      name: 'Starter',
      description: 'For beginners',
      minInvestment: '₹500/month',
      features: [
        'Feature 1',
        'Feature 2',
      ],
    },
    // Add more tiers...
  ],
  
  relatedServices: [ // Optional
    {
      icon: TrendingUp,
      title: 'Related Service',
      description: 'Short description',
      link: '#service-url',
    },
    // Add more services...
  ],
  
  faqs: [
    {
      question: 'Common question?',
      answer: 'Detailed answer...',
    },
    // Add more FAQs...
  ],
};
```

## Data Structure Reference

### ServiceDetailData Interface

```typescript
interface ServiceDetailData {
  // Hero section
  badge: string;
  title: string;
  subtitle: string;
  description: string;
  heroIcon: LucideIcon;
  ctaText?: string; // Default: 'Get Started'
  
  // Content sections
  features: ServiceFeature[];
  process: ProcessStep[];
  benefits: Benefit[];
  pricingTiers?: PricingTier[]; // Optional
  relatedServices?: RelatedService[]; // Optional
  faqs: ServiceFAQ[];
}
```

### Sub-interfaces

```typescript
interface ServiceFeature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

interface Benefit {
  title: string;
  description: string;
  icon?: LucideIcon; // Default: Check icon
}

interface PricingTier {
  name: string;
  description: string;
  features: string[];
  minInvestment?: string;
  recommended?: boolean; // Highlights this tier
}

interface RelatedService {
  icon: LucideIcon;
  title: string;
  description: string;
  link: string;
}

interface ServiceFAQ {
  question: string;
  answer: string;
}
```

## Routing Integration

### With Next.js App Router

```tsx
// app/services/[slug]/page.tsx
import { ServiceDetail } from '@/components/ServiceDetail';
import { mutualFundsData, equitiesData, pmsData, insuranceData } from '@/lib/service-details-data';

const serviceDataMap = {
  'mutual-funds': mutualFundsData,
  'equities': equitiesData,
  'pms': pmsData,
  'insurance': insuranceData,
};

export default function ServicePage({ params }: { params: { slug: string } }) {
  const serviceData = serviceDataMap[params.slug as keyof typeof serviceDataMap];
  
  if (!serviceData) {
    notFound();
  }
  
  return <ServiceDetail data={serviceData} onCTAClick={() => {/* Handle CTA */}} />;
}
```

### With React Router

```tsx
// App.tsx or routes.tsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ServiceDetail } from './components/ServiceDetail';
import { mutualFundsData, equitiesData } from './lib/service-details-data';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route 
          path="/services/mutual-funds" 
          element={<ServiceDetail data={mutualFundsData} />} 
        />
        <Route 
          path="/services/equities" 
          element={<ServiceDetail data={equitiesData} />} 
        />
        {/* More routes... */}
      </Routes>
    </BrowserRouter>
  );
}
```

## Customization Tips

### 1. Adjust Spacing
Modify the Section component padding in `/components/ui/section.tsx`:
```tsx
className="py-16 lg:py-24 xl:py-32" // Current
className="py-12 lg:py-20 xl:py-28" // Tighter
```

### 2. Change Color Schemes
Each section can use different pattern colors:
```tsx
<Section background="muted" withPattern patternColor="secondary">
  {/* Content */}
</Section>
```

Options: `primary`, `secondary`, `accent`

### 3. Hide Optional Sections
Simply omit from data structure:
```typescript
// No pricing tiers
const serviceData: ServiceDetailData = {
  // ... other required fields
  // pricingTiers: undefined // or omit entirely
  // relatedServices: undefined
};
```

### 4. Add Custom Sections
Extend the ServiceDetail component:
```tsx
// Inside ServiceDetail.tsx, add after Benefits section:
<Section background="white">
  <Container>
    {/* Your custom content */}
  </Container>
</Section>
```

## Sample Data Included

Four complete service detail pages are included:

1. **Mutual Funds** (`mutualFundsData`)
   - Investment tiers from ₹500/month to ₹25,000/month
   - Focus on goal-based planning and SIP

2. **Equities** (`equitiesData`)
   - Direct stock investment guidance
   - Three service tiers with varying advisory levels

3. **PMS** (`pmsData`)
   - Portfolio Management Services for HNI
   - Discretionary and non-discretionary models
   - Minimum ₹50 lakhs investment

4. **Insurance** (`insuranceData`)
   - Life, health, and wealth protection
   - Three coverage levels
   - Focus on family security

## Best Practices

1. **Keep FAQs focused** - 6-10 questions per service
2. **Use clear CTAs** - One primary action per section
3. **Maintain consistency** - Use the same icon library (lucide-react)
4. **Test responsiveness** - Check on mobile, tablet, and desktop
5. **Optimize images** - If adding hero images, use optimized formats
6. **Accessibility** - Ensure proper heading hierarchy and ARIA labels

## Performance Considerations

- Component uses Motion (Framer Motion) for animations
- Lazy load if using in router - improves initial page load
- Images (if added) should be optimized and lazy-loaded
- Consider code-splitting for large data files

## Support & Questions

For customization help or questions about implementing service detail pages, refer to:
- Main design system: `/styles/globals.css`
- Design tokens: `/lib/design-tokens.ts`
- UI components: `/components/ui/`

---

**Version:** 1.0  
**Last Updated:** December 2025  
**License:** Part of Dhanovaa Financial Services project
