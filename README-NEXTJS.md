# Dhanovaa Financial Services - Next.js Website

> Modern, production-ready financial services landing page built with Next.js 15, React 18, TypeScript, and Tailwind CSS.

[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18-blue)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-4-38bdf8)](https://tailwindcss.com/)

---

## 🚀 Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Open http://localhost:3000
```

**New to this project?** → Read [QUICKSTART.md](./QUICKSTART.md)

---

## 📁 Project Structure

```
dhanovaa-financial/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout
│   ├── page.tsx                 # Home page
│   ├── service-details/         # Service details page
│   ├── gallery/                 # Gallery page
│   └── api/                     # API routes
│
├── components/                   # React components
│   ├── ui/                      # shadcn/ui components
│   ├── Hero.tsx
│   ├── Services.tsx
│   ├── PhoneMockupWithCalculator.tsx  # SIP + Lumpsum calculators
│   └── ...
│
├── lib/                          # Utilities
│   ├── seo.ts                   # SEO helpers
│   ├── env.ts                   # Environment config
│   └── ...
│
├── styles/
│   └── globals.css              # Design tokens & styles
│
└── public/                       # Static assets
```

---

## ✨ Features

### 🎯 Core Features
- ✅ **Full Landing Page** - Hero, About, Services, Testimonials, FAQ, Blog, Contact
- ✅ **Interactive Calculators** - SIP & Lumpsum investment calculators with tabs
- ✅ **Service Details** - Detailed service information pages
- ✅ **Gallery** - Image gallery with responsive layout
- ✅ **Contact Form** - Built-in API route for contact submissions
- ✅ **Responsive Design** - Mobile-first, optimized for all devices

### 🚀 Technical Features
- ✅ **Next.js App Router** - Modern file-based routing
- ✅ **TypeScript** - Full type safety
- ✅ **Server Components** - Improved performance
- ✅ **SEO Optimized** - Meta tags, Open Graph, Twitter cards
- ✅ **Image Optimization** - Automatic image optimization
- ✅ **Loading States** - Built-in loading UI
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Security Headers** - Production-ready security
- ✅ **Path Aliases** - Clean imports with @/ prefix

### 🎨 Design System
- ✅ **Material Design 3** - Google's latest design system
- ✅ **shadcn/ui** - Beautiful, accessible components
- ✅ **Design Tokens** - Centralized color, spacing, typography
- ✅ **Glassmorphism** - Modern UI effects
- ✅ **Micro-interactions** - Smooth animations with Motion
- ✅ **Custom Brand Colors** - #003448, #68c0ae, #9ece6c

---

## 📄 Pages

| Route | Description |
|-------|-------------|
| `/` | Full landing page with all sections |
| `/service-details` | Detailed service information |
| `/gallery` | Image gallery |
| `/api/contact` | Contact form API endpoint |
| `/api/health` | Health check endpoint |

---

## 🛠️ Tech Stack

### Core
- **Next.js 15** - React framework with App Router
- **React 18** - UI library
- **TypeScript 5** - Type safety
- **Tailwind CSS 4** - Utility-first styling

### UI Components
- **shadcn/ui** - Radix UI + Tailwind components
- **Lucide React** - Icon library
- **Motion** - Animation library
- **Recharts** - Charts and graphs

### Forms & Validation
- **React Hook Form** - Form handling
- **Zod** - Schema validation

---

## 📚 Documentation

| Document | Description |
|----------|-------------|
| [QUICKSTART.md](./QUICKSTART.md) | 5-minute setup guide |
| [NEXTJS_SETUP.md](./NEXTJS_SETUP.md) | Complete Next.js architecture guide |
| [DEPLOYMENT.md](./DEPLOYMENT.md) | Deploy to Vercel, Netlify, AWS, etc. |
| [MIGRATION_CHECKLIST.md](./MIGRATION_CHECKLIST.md) | Migration status and checklist |

---

## 🎨 Brand Identity

### Colors
```css
Primary:   #003448  /* Deep teal */
Secondary: #68c0ae  /* Mint green */
Accent:    #9ece6c  /* Lime green */
```

### Typography
- **Font**: Bricolage Grotesque
- **Weights**: 400, 500, 600, 700

### Design Tokens
All design tokens are centralized in `styles/globals.css`

---

## 🚢 Deployment

### Vercel (Recommended)
```bash
# Connect GitHub repo to Vercel
# Auto-deploy on every push
```

### Other Platforms
- **Netlify** - One-click deploy
- **AWS Amplify** - Enterprise-grade hosting
- **Railway** - Simple deployments
- **Self-hosted** - Docker or PM2

**Full deployment guide:** [DEPLOYMENT.md](./DEPLOYMENT.md)

---

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build
npm run lint         # Lint code
npm run type-check   # Check TypeScript
npm run format       # Format code with Prettier
npm run clean        # Clean build artifacts
```

---

## 🔒 Environment Variables

Create `.env.local`:
```env
NEXT_PUBLIC_APP_URL=http://localhost:3000
NEXT_PUBLIC_APP_NAME=Dhanovaa Financial Services
```

See `.env.local.example` for all options.

---

## 🎯 Key Components

### PhoneMockupWithCalculator
Interactive SIP and Lumpsum investment calculators with:
- Tab navigation
- Real-time calculations
- Visual breakdown charts
- Production-ready formulas

### Navigation
Responsive navigation with:
- Active link highlighting
- Mobile menu
- Smooth transitions

### All Sections
- Hero with CTA
- Banner Headlines
- About with Founder's Message
- Services Grid
- Comparison Chart
- FAQ Accordion
- Testimonials Carousel
- Blog Cards
- App Download
- Contact + Instagram Feed

---

## 🏗️ Architecture

### App Router Benefits
- ✅ File-based routing
- ✅ Server Components by default
- ✅ Built-in loading states
- ✅ Error boundaries
- ✅ Nested layouts
- ✅ Better performance

### Component Strategy
- **Server Components**: Pages, layouts (default)
- **Client Components**: Interactive features ('use client')

---

## 🔧 Development

### Adding a Page
```tsx
// app/new-page/page.tsx
export default function NewPage() {
  return <div>New Page</div>;
}
```

### Adding a Component
```tsx
// components/MyComponent.tsx
'use client'; // If interactive

export function MyComponent() {
  return <div>Component</div>;
}
```

### Using Path Aliases
```tsx
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/Hero';
```

---

## ✅ Production Ready

- [x] TypeScript configured
- [x] SEO optimized
- [x] Performance optimized
- [x] Security headers
- [x] Error handling
- [x] Loading states
- [x] Image optimization
- [x] Code splitting
- [x] Responsive design
- [x] Accessibility features

---

## 📈 Performance

- **Lighthouse Score**: 90+ (target)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Core Web Vitals**: All green

---

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open Pull Request

---

## 📞 Support

- **Email**: contact@dhanovaa.com
- **Documentation**: See `/docs` folder
- **Issues**: Open a GitHub issue

---

## 📄 License

[Add your license here]

---

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org)
- UI components from [shadcn/ui](https://ui.shadcn.com)
- Icons from [Lucide](https://lucide.dev)
- Animations with [Motion](https://motion.dev)

---

**Built with ❤️ for Dhanovaa Financial Services**

*Your Growth Architect - Building lasting financial growth*