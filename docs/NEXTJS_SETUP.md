# Dhanovaa Financial Services - Next.js App Router Setup

## 📁 Project Structure

```
dhanovaa-financial/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout with Navigation
│   ├── page.tsx                 # Home page (landing)
│   ├── loading.tsx              # Global loading UI
│   ├── error.tsx                # Global error boundary
│   ├── not-found.tsx            # 404 page
│   ├── service-details/
│   │   └── page.tsx            # Service details page
│   └── gallery/
│       └── page.tsx            # Gallery page
│
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   ├── patterns/                # Design pattern components
│   ├── figma/                   # Figma import utilities
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Navigation.tsx
│   └── ... (all other components)
│
├── lib/                          # Utility functions
│   ├── cn.ts                    # Class name utility
│   ├── design-tokens.ts         # Design system tokens
│   └── service-details-data.ts  # Service data
│
├── styles/
│   └── globals.css              # Global styles & design tokens
│
├── imports/                      # Figma imports & assets
│   ├── DhanovaaLogoHorizontal...
│   └── svg-...
│
├── public/                       # Static assets
│   ├── favicon.ico
│   └── ... (other public assets)
│
├── next.config.mjs              # Next.js configuration
├── tsconfig.json                # TypeScript configuration
├── package.json                 # Dependencies
└── .env.local.example           # Environment variables template

```

## 🚀 Getting Started

### Prerequisites

- Node.js 18.17 or later
- npm, yarn, or pnpm package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dhanovaa-financial
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.local.example .env.local
   # Edit .env.local with your configuration
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Page Routes

| Route | File | Description |
|-------|------|-------------|
| `/` | `app/page.tsx` | Home page with all landing sections |
| `/service-details` | `app/service-details/page.tsx` | Detailed service information |
| `/gallery` | `app/gallery/page.tsx` | Image gallery |

## 🏗️ Architecture Decisions

### App Router vs Pages Router

We use **Next.js App Router** (v13+) for:

- ✅ Better performance with React Server Components
- ✅ Improved data fetching and caching
- ✅ Built-in loading and error states
- ✅ Nested layouts and templates
- ✅ Streaming and Suspense support
- ✅ Better SEO with metadata API

### File Conventions

| File | Purpose |
|------|---------|
| `layout.tsx` | Shared UI for route segments |
| `page.tsx` | Unique UI for a route |
| `loading.tsx` | Loading UI with Suspense |
| `error.tsx` | Error UI boundary |
| `not-found.tsx` | 404 error UI |

### Component Strategy

- **Server Components** (default): All pages and layouts
- **Client Components** ('use client'): Interactive components (Navigation, Calculators, Forms)

## 🎨 Design System

### Brand Colors

```css
Primary: #003448
Secondary: #68c0ae
Accent: #9ece6c
```

### Typography

- Font Family: Bricolage Grotesque
- Font weights: 400, 500, 600, 700

### Design Tokens

All design tokens are defined in `/styles/globals.css`:
- Colors (brand, semantic)
- Spacing scale
- Border radius
- Shadows
- Transitions
- Z-index scale

## 🔧 Configuration Files

### `tsconfig.json`

Path aliases for cleaner imports:
```typescript
import { Button } from '@/components/ui/button';
import { Hero } from '@/components/Hero';
```

### `next.config.mjs`

Production optimizations:
- Image optimization for Unsplash
- CSS optimization
- Package import optimization
- Security headers
- Console removal in production

## 🚢 Deployment

### Build for Production

```bash
npm run build
npm run start
```

### Deployment Platforms

#### Vercel (Recommended)

1. Push code to GitHub/GitLab/Bitbucket
2. Import project to Vercel
3. Configure environment variables
4. Deploy automatically

#### Other Platforms

- **Netlify**: Supports Next.js
- **AWS Amplify**: Full Next.js support
- **Railway**: One-click deploy
- **Self-hosted**: Use Docker or PM2

### Environment Variables

Before deploying, set these in your platform:

```env
NEXT_PUBLIC_APP_URL=https://yourdomain.com
NEXT_PUBLIC_APP_NAME=Dhanovaa Financial Services
```

## 📦 Key Dependencies

### Core
- `next`: Next.js framework
- `react`: React library
- `react-dom`: React DOM renderer

### UI & Styling
- `tailwindcss`: Utility-first CSS
- `@radix-ui/*`: Unstyled accessible components
- `motion/react`: Animation library
- `lucide-react`: Icon library

### Forms & Validation
- `react-hook-form@7.55.0`: Form handling
- `zod`: Schema validation

### Data Visualization
- `recharts`: Charts and graphs

## 🔒 Security Best Practices

1. **Environment Variables**: Never commit `.env.local`
2. **API Routes**: Use for sensitive operations
3. **CORS**: Configure in `next.config.mjs`
4. **CSP Headers**: Add Content Security Policy
5. **Authentication**: Use NextAuth.js when needed

## ⚡ Performance Optimization

### Implemented

- ✅ Image optimization with next/image
- ✅ Code splitting (automatic)
- ✅ CSS optimization
- ✅ Tree shaking
- ✅ Font optimization
- ✅ Lazy loading components

### Recommended

- [ ] Add Incremental Static Regeneration (ISR)
- [ ] Implement caching strategies
- [ ] Add CDN for static assets
- [ ] Enable compression
- [ ] Monitor Core Web Vitals

## 📱 Responsive Design

Breakpoints:
- Mobile: < 640px
- Tablet: 640px - 1024px
- Desktop: 1024px - 1440px
- Large Desktop: > 1440px

## 🧪 Testing (Future Implementation)

Recommended testing stack:
- Jest for unit tests
- React Testing Library for component tests
- Playwright for E2E tests
- Lighthouse CI for performance

## 📈 Analytics (Optional)

Add analytics by uncommenting in `.env.local`:
- Google Analytics
- Facebook Pixel
- Custom tracking

## 🔄 Migration from React Router

The conversion is complete:

| Old (React Router) | New (Next.js) |
|-------------------|---------------|
| `<Route path="/" />` | `app/page.tsx` |
| `<Route path="/service-details" />` | `app/service-details/page.tsx` |
| `<Link to="/" />` | `<Link href="/" />` |
| `useNavigate()` | `useRouter()` from `next/navigation` |
| Client-side routing | File-based routing |

## 🤝 Contributing

1. Create a feature branch
2. Make your changes
3. Test thoroughly
4. Submit a pull request

## 📞 Support

For issues or questions:
- Create an issue in the repository
- Contact: support@dhanovaa.com (if applicable)

## 📝 License

[Add your license information]

---

Built with ❤️ for Dhanovaa Financial Services
