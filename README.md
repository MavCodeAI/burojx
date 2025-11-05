# BurojX - Creative Web Experiences That Breathe

A cutting-edge, immersive creative studio website built with Next.js 14, featuring cinematic animations, smooth scrolling, and modern design aesthetics.

## 🎨 Features

- **Cinematic Hero Section** with animated logo reveal and floating 3D shapes
- **Smooth Scroll** powered by Lenis for butter-smooth scrolling experience
- **Advanced Animations** using Framer Motion and GSAP
- **Interactive Service Cards** with hover effects and depth animations
- **Portfolio Showcase** with smooth transitions and project details
- **Animated Statistics** in the About section
- **Contact Form** with clean, modern design
- **Fully Responsive** mobile-first design
- **Performance Optimized** with lazy loading and efficient animations

## 🚀 Tech Stack

- **Next.js 14** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Animation library
- **GSAP** - Professional-grade animations
- **Lenis** - Smooth scroll library
- **Lucide React** - Beautiful icons

## 📁 Project Structure

```
burojx/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx             # Main page component
│   └── globals.css          # Global styles
├── components/
│   ├── sections/
│   │   ├── Hero.tsx         # Hero section with 3D elements
│   │   ├── Services.tsx     # Services grid with animations
│   │   ├── Portfolio.tsx    # Project showcase
│   │   ├── About.tsx        # About section with stats
│   │   ├── Contact.tsx      # Contact form
│   │   └── Footer.tsx       # Footer with links
│   ├── 3d/
│   │   └── FloatingShapes.tsx # Animated background elements
│   ├── Preloader.tsx        # Loading screen
│   └── SmoothScroll.tsx     # Lenis wrapper
└── public/
    └── (assets here)

```

## 🎯 Key Sections

### Hero Section
- 3D floating shapes with gradient animations
- Animated text reveals
- Call-to-action buttons with hover effects
- Scroll indicator

### Services
- 4 service cards with hover tilt effects
- Web Development
- Creative Design
- Brand Strategy
- 3D Experiences

### Portfolio
- Project grid with smooth transitions
- Image hover effects with overlays
- Category tags and descriptions

### About
- Animated statistics counter
- 50+ Projects Delivered
- 30+ Happy Clients
- 5+ Years Experience
- 100% Client Satisfaction

### Contact
- Interactive form
- Contact information cards
- Social media links
- Form validation ready

## 🎨 Design System

### Colors
- Primary: Cyan (#00d9ff)
- Secondary: Purple (#a855f7)
- Background: Black to Gray gradient
- Text: White and Gray shades

### Typography
- Display: Space Grotesk
- Body: Inter

### Animations
- Smooth scroll with Lenis
- Framer Motion for component animations
- CSS transitions for hover states
- Gradient animations for backgrounds

## 📦 Installation

```bash
npm install
```

## 🔧 Development

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000)

## 🏗️ Build

```bash
npm run build
npm run start
```

## 🎭 Customization

### Changing Brand Colors
Edit `app/globals.css`:
```css
:root {
  --accent-blue: #00d9ff;
  --accent-purple: #a855f7;
}
```

### Adding New Sections
1. Create component in `components/sections/`
2. Import and add to `app/page.tsx`
3. Follow existing animation patterns

### Updating Content
- **Hero text**: `components/sections/Hero.tsx`
- **Services**: `components/sections/Services.tsx` (services array)
- **Portfolio**: `components/sections/Portfolio.tsx` (projects array)
- **Contact info**: `components/sections/Contact.tsx`

## 🌐 Deployment

This project is ready to deploy on Vercel, Netlify, or any platform that supports Next.js.

## 📝 License

© 2025 BurojX. All rights reserved.

---

**Built with passion & precision** ✨
