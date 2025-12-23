# 🚀 Quick Start Guide - Dhanovaa Financial Services

## For Developers New to the Project

### Prerequisites
```bash
Node.js >= 18.17.0
npm >= 9.0.0
```

### Installation (3 steps)

```bash
# 1. Install dependencies
npm install

# 2. Create environment file
cp .env.local.example .env.local

# 3. Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

---

## 📁 Project Structure (Simplified)

```
app/                    ← Pages go here (Next.js App Router)
  ├─ page.tsx          ← Homepage (/)
  ├─ service-details/  ← /service-details
  └─ gallery/          ← /gallery

components/            ← Reusable components
  ├─ Hero.tsx
  ├─ Services.tsx
  └─ ...

styles/
  └─ globals.css       ← Design tokens & styles

lib/                   ← Utilities
```

---

## 🎨 Making Changes

### Add a new page

1. Create `app/new-page/page.tsx`:
```tsx
export default function NewPage() {
  return <div>Hello World</div>;
}
```

2. Access at: `http://localhost:3000/new-page`

### Edit existing content

- **Homepage**: Edit `app/page.tsx`
- **Navigation**: Edit `components/Navigation.tsx`
- **Footer**: Edit `components/Footer.tsx`
- **Styles**: Edit `styles/globals.css`

### Add a component

1. Create `components/MyComponent.tsx`:
```tsx
'use client'; // Only if interactive

export function MyComponent() {
  return <div>My Component</div>;
}
```

2. Import it:
```tsx
import { MyComponent } from '@/components/MyComponent';
```

---

## 🎯 Common Tasks

### Change brand colors
Edit `styles/globals.css`:
```css
:root {
  --color-brand-primary: #003448;
  --color-brand-secondary: #68c0ae;
  --color-brand-accent: #9ece6c;
}
```

### Update SEO
Edit `app/layout.tsx`:
```tsx
export const metadata = {
  title: 'Your New Title',
  description: 'Your New Description',
};
```

### Add images
```tsx
import { ImageWithFallback } from '@/components/figma/ImageWithFallback';

<ImageWithFallback
  src="https://images.unsplash.com/..."
  alt="Description"
  className="w-full h-auto"
/>
```

### Add icons
```tsx
import { IconName } from 'lucide-react';

<IconName className="w-6 h-6" />
```

---

## 📝 Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run start        # Run production build locally
npm run lint         # Check code quality
npm run type-check   # Check TypeScript types
```

---

## 🐛 Troubleshooting

### Port already in use
```bash
# Kill process on port 3000
npx kill-port 3000
# Or use different port
npm run dev -- -p 3001
```

### Module not found
```bash
# Clear cache and reinstall
rm -rf node_modules .next
npm install
```

### Build errors
```bash
# Check TypeScript errors
npm run type-check

# Check linting errors
npm run lint
```

---

## 📚 Learn More

- **Next.js Docs**: [nextjs.org/docs](https://nextjs.org/docs)
- **Tailwind CSS**: [tailwindcss.com](https://tailwindcss.com)
- **shadcn/ui**: [ui.shadcn.com](https://ui.shadcn.com)
- **Lucide Icons**: [lucide.dev](https://lucide.dev)

---

## 🎓 Next Steps

1. ✅ You're set up!
2. 📖 Read `/NEXTJS_SETUP.md` for detailed architecture
3. 🚀 Read `/DEPLOYMENT.md` when ready to deploy
4. ✅ Check `/MIGRATION_CHECKLIST.md` for production readiness

---

## 💡 Pro Tips

### VS Code Extensions (Recommended)
- ESLint
- Prettier
- Tailwind CSS IntelliSense
- TypeScript Vue Plugin (Volar)

### Keyboard Shortcuts
- `⌘/Ctrl + Click` on import → Jump to file
- `⌘/Ctrl + P` → Quick file search
- `⌘/Ctrl + Shift + P` → Command palette

### Hot Module Replacement (HMR)
Save any file and see changes instantly in browser! No refresh needed.

---

**Happy Coding! 🎉**

Need help? Check the documentation files or open an issue.
