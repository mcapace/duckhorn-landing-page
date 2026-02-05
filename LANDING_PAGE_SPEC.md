# Duckhorn Partnership Landing Page - Technical Specification

## Overview
A premium, visually stunning landing page for the Duckhorn wine partnership featuring advanced animations, glassmorphism effects, and modern web design patterns.

---

## Technology Stack

### Core Framework
```
- Next.js 14+ (App Router)
- React 18+
- TypeScript
- Tailwind CSS 3.4+
```

### Animation & Effects
```
- Framer Motion 11+ (animations, gestures, scroll effects)
- GSAP (optional - for complex timeline animations)
```

### Additional Libraries
```
- @react-three/fiber (optional - 3D elements)
- react-intersection-observer (scroll triggers)
- sharp (image optimization)
```

---

## Project Setup

```bash
npx create-next-app@latest duckhorn-landing --typescript --tailwind --app
cd duckhorn-landing
npm install framer-motion
npm install react-intersection-observer
```

### Tailwind Config for Glassmorphism
```javascript
// tailwind.config.js
module.exports = {
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // Duckhorn brand colors - wine/burgundy palette
        'duckhorn': {
          50: '#fdf2f4',
          100: '#fce7eb',
          200: '#f9d0d9',
          300: '#f4a9ba',
          400: '#ec7896',
          500: '#df4d75',
          600: '#cc2d5c',
          700: '#ab2049',
          800: '#8f1d40',  // Primary burgundy
          900: '#7a1c3a',
          950: '#450a1c',
        },
        'gold': {
          400: '#d4af37',
          500: '#c9a227',
          600: '#b8860b',
        }
      },
      backdropBlur: {
        xs: '2px',
      },
      animation: {
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
        'wine-pour': 'winePour 3s ease-out forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        winePour: {
          '0%': { clipPath: 'inset(100% 0 0 0)' },
          '100%': { clipPath: 'inset(0 0 0 0)' },
        }
      }
    },
  },
  plugins: [],
}
```

---

## Glassmorphism CSS Patterns

### Base Glass Card Component
```tsx
// components/GlassCard.tsx
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  blur?: 'sm' | 'md' | 'lg' | 'xl';
  opacity?: number;
}

export const GlassCard = ({
  children,
  className = '',
  blur = 'lg',
  opacity = 0.1
}: GlassCardProps) => {
  const blurValues = {
    sm: 'backdrop-blur-sm',
    md: 'backdrop-blur-md',
    lg: 'backdrop-blur-lg',
    xl: 'backdrop-blur-xl',
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`
        relative
        ${blurValues[blur]}
        bg-white/[${opacity}]
        border border-white/20
        rounded-2xl
        shadow-[0_8px_32px_rgba(0,0,0,0.12)]
        overflow-hidden
        ${className}
      `}
    >
      {/* Gradient overlay for depth */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />

      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};
```

### Dark Glassmorphism Variant
```css
/* For dark sections - use with dark background images */
.glass-dark {
  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 16px;
}
```

### Wine-Tinted Glass Effect
```css
/* Premium wine-colored glass for brand consistency */
.glass-wine {
  background: linear-gradient(
    135deg,
    rgba(143, 29, 64, 0.15) 0%,
    rgba(69, 10, 28, 0.25) 100%
  );
  backdrop-filter: blur(20px) saturate(150%);
  -webkit-backdrop-filter: blur(20px) saturate(150%);
  border: 1px solid rgba(212, 175, 55, 0.2);
  box-shadow:
    0 8px 32px rgba(143, 29, 64, 0.2),
    inset 0 1px 0 rgba(255, 255, 255, 0.1);
}
```

---

## Framer Motion Animation Patterns

### 1. Stagger Children Animation
```tsx
// For animating lists, grids, navigation items
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  }
};

// Usage:
<motion.ul variants={containerVariants} initial="hidden" animate="visible">
  {items.map(item => (
    <motion.li key={item.id} variants={itemVariants}>
      {item.content}
    </motion.li>
  ))}
</motion.ul>
```

### 2. Scroll-Triggered Reveal
```tsx
// components/ScrollReveal.tsx
'use client';
import { motion, useInView } from 'framer-motion';
import { useRef, ReactNode } from 'react';

interface ScrollRevealProps {
  children: ReactNode;
  direction?: 'up' | 'down' | 'left' | 'right';
  delay?: number;
}

export const ScrollReveal = ({
  children,
  direction = 'up',
  delay = 0
}: ScrollRevealProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const directions = {
    up: { y: 60 },
    down: { y: -60 },
    left: { x: 60 },
    right: { x: -60 },
  };

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, ...directions[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
    >
      {children}
    </motion.div>
  );
};
```

### 3. Parallax Scroll Effect
```tsx
// components/ParallaxImage.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';

interface ParallaxImageProps {
  src: string;
  alt: string;
  speed?: number; // 0.1 = slow, 0.5 = medium, 1 = fast
}

export const ParallaxImage = ({ src, alt, speed = 0.3 }: ParallaxImageProps) => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], ['-15%', '15%']);

  return (
    <div ref={ref} className="relative overflow-hidden h-[500px]">
      <motion.div style={{ y }} className="absolute inset-0">
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover scale-125"
        />
      </motion.div>
    </div>
  );
};
```

### 4. Hover Interactions
```tsx
// Wine bottle/card hover effect
const hoverVariants = {
  initial: { scale: 1 },
  hover: {
    scale: 1.03,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  tap: { scale: 0.98 }
};

// Usage on cards:
<motion.div
  variants={hoverVariants}
  initial="initial"
  whileHover="hover"
  whileTap="tap"
  className="cursor-pointer"
>
  {/* Card content */}
</motion.div>
```

### 5. Text Reveal Animation
```tsx
// components/AnimatedText.tsx
'use client';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const AnimatedText = ({ text, className = '', delay = 0 }: AnimatedTextProps) => {
  const words = text.split(' ');

  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: delay }
    }
  };

  const child = {
    hidden: { opacity: 0, y: 20, rotateX: -90 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <motion.span
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className={`inline-flex flex-wrap ${className}`}
    >
      {words.map((word, i) => (
        <motion.span key={i} variants={child} className="mr-2">
          {word}
        </motion.span>
      ))}
    </motion.span>
  );
};
```

### 6. Page Transitions
```tsx
// app/template.tsx (for page transitions)
'use client';
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

export default function Template({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
    >
      {children}
    </motion.div>
  );
}
```

---

## Landing Page Section Components

### Hero Section
```tsx
// components/sections/Hero.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '../GlassCard';

export const Hero = () => {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 1.1]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Image with Parallax */}
      <motion.div
        style={{ scale }}
        className="absolute inset-0"
      >
        <Image
          src="/images/vineyard-hero.jpg"
          alt="Duckhorn Vineyard"
          fill
          priority
          className="object-cover"
        />
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60" />
      </motion.div>

      {/* Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 h-full flex items-center justify-center"
      >
        <div className="text-center max-w-4xl px-6">
          {/* Logo Animation */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: 'easeOut' }}
            className="mb-8"
          >
            <Image
              src="/images/duckhorn-logo.svg"
              alt="Duckhorn Vineyards"
              width={200}
              height={80}
              className="mx-auto"
            />
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-5xl md:text-7xl font-serif text-white mb-6"
          >
            Exceptional Wines,
            <br />
            <span className="text-gold-400">Extraordinary Moments</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-xl text-white/80 mb-10 max-w-2xl mx-auto"
          >
            Discover our exclusive partnership collection, crafted with passion
            in the heart of Napa Valley.
          </motion.p>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                px-8 py-4
                bg-gradient-to-r from-gold-500 to-gold-600
                text-white font-medium text-lg
                rounded-full
                shadow-[0_4px_20px_rgba(201,162,39,0.4)]
                hover:shadow-[0_6px_30px_rgba(201,162,39,0.6)]
                transition-shadow duration-300
              "
            >
              Explore the Collection
            </motion.button>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-6 h-10 rounded-full border-2 border-white/50 flex justify-center pt-2"
        >
          <motion.div className="w-1.5 h-3 bg-white/70 rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
};
```

### Featured Wines Section
```tsx
// components/sections/FeaturedWines.tsx
'use client';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { GlassCard } from '../GlassCard';
import { ScrollReveal } from '../ScrollReveal';

const wines = [
  {
    id: 1,
    name: 'Merlot',
    year: '2021',
    description: 'Rich, velvety with notes of black cherry and cocoa.',
    image: '/images/wine-merlot.png',
    price: '$48'
  },
  {
    id: 2,
    name: 'Cabernet Sauvignon',
    year: '2020',
    description: 'Bold and structured with blackberry and cedar.',
    image: '/images/wine-cabernet.png',
    price: '$65'
  },
  {
    id: 3,
    name: 'Sauvignon Blanc',
    year: '2022',
    description: 'Crisp and refreshing with citrus and melon.',
    image: '/images/wine-sauvignon.png',
    price: '$36'
  },
];

export const FeaturedWines = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }
    }
  };

  return (
    <section className="py-24 bg-gradient-to-b from-duckhorn-950 to-duckhorn-900">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <ScrollReveal>
          <div className="text-center mb-16">
            <span className="text-gold-400 uppercase tracking-widest text-sm mb-4 block">
              Our Collection
            </span>
            <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">
              Featured Wines
            </h2>
            <div className="w-24 h-0.5 bg-gradient-to-r from-transparent via-gold-500 to-transparent mx-auto" />
          </div>
        </ScrollReveal>

        {/* Wine Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {wines.map((wine) => (
            <motion.div key={wine.id} variants={cardVariants}>
              <motion.div
                whileHover={{ y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <GlassCard className="p-6 h-full glass-wine">
                  {/* Wine Bottle Image */}
                  <motion.div
                    className="relative h-64 mb-6"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={wine.image}
                      alt={wine.name}
                      fill
                      className="object-contain drop-shadow-2xl"
                    />
                  </motion.div>

                  {/* Wine Info */}
                  <div className="text-center">
                    <span className="text-gold-400 text-sm">{wine.year}</span>
                    <h3 className="text-2xl font-serif text-white mt-1 mb-3">
                      {wine.name}
                    </h3>
                    <p className="text-white/70 text-sm mb-4">
                      {wine.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-400 text-xl font-medium">
                        {wine.price}
                      </span>
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="
                          px-4 py-2
                          border border-gold-500/50
                          text-gold-400 text-sm
                          rounded-full
                          hover:bg-gold-500/10
                          transition-colors
                        "
                      >
                        Learn More
                      </motion.button>
                    </div>
                  </div>
                </GlassCard>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
```

### About/Story Section with Parallax
```tsx
// components/sections/Story.tsx
'use client';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import Image from 'next/image';
import { ScrollReveal } from '../ScrollReveal';

export const Story = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'end start']
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '-10%']);

  return (
    <section ref={sectionRef} className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div style={{ y: imageY }} className="relative">
            <div className="relative h-[600px] rounded-2xl overflow-hidden">
              <Image
                src="/images/winemaker.jpg"
                alt="Duckhorn Winemaker"
                fill
                className="object-cover"
              />
            </div>
            {/* Floating accent card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="
                absolute -right-8 -bottom-8
                w-48 h-48
                glass-wine
                rounded-2xl
                flex flex-col items-center justify-center
                text-center p-4
              "
            >
              <span className="text-5xl font-serif text-gold-400">45+</span>
              <span className="text-white/80 text-sm mt-2">Years of Excellence</span>
            </motion.div>
          </motion.div>

          {/* Text Side */}
          <motion.div style={{ y: textY }}>
            <ScrollReveal direction="right">
              <span className="text-duckhorn-700 uppercase tracking-widest text-sm mb-4 block">
                Our Story
              </span>
              <h2 className="text-4xl md:text-5xl font-serif text-duckhorn-900 mb-6">
                A Legacy of <span className="text-duckhorn-700">Excellence</span>
              </h2>
              <div className="w-24 h-0.5 bg-gradient-to-r from-duckhorn-700 to-transparent mb-8" />
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Since 1976, Duckhorn Vineyards has been dedicated to crafting
                world-class wines that capture the essence of Napa Valley.
                Our commitment to quality and sustainability drives every
                decision we make.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed mb-8">
                This exclusive partnership collection represents the pinnacle
                of our winemaking artistry, featuring limited-release wines
                available only through this collaboration.
              </p>
              <motion.button
                whileHover={{ scale: 1.05, x: 10 }}
                whileTap={{ scale: 0.95 }}
                className="
                  inline-flex items-center
                  text-duckhorn-700 font-medium
                  group
                "
              >
                Discover Our Heritage
                <motion.span
                  className="ml-2 group-hover:translate-x-2 transition-transform"
                >
                  →
                </motion.span>
              </motion.button>
            </ScrollReveal>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
```

### Newsletter/CTA Section
```tsx
// components/sections/Newsletter.tsx
'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { GlassCard } from '../GlassCard';

export const Newsletter = () => {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: 'url(/images/vineyard-sunset.jpg)' }}
      />
      <div className="absolute inset-0 bg-duckhorn-950/80" />

      <div className="relative z-10 max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <GlassCard className="p-12 text-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <span className="text-gold-400 uppercase tracking-widest text-sm mb-4 block">
                Stay Connected
              </span>
              <h2 className="text-3xl md:text-4xl font-serif text-white mb-4">
                Join Our Wine Circle
              </h2>
              <p className="text-white/70 mb-8 max-w-lg mx-auto">
                Be the first to know about new releases, exclusive events,
                and special offers from our partnership collection.
              </p>
            </motion.div>

            {!isSubmitted ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  className="
                    flex-1 px-6 py-4
                    bg-white/10
                    border border-white/20
                    rounded-full
                    text-white placeholder:text-white/50
                    focus:outline-none focus:border-gold-500/50
                    transition-colors
                  "
                />
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="
                    px-8 py-4
                    bg-gradient-to-r from-gold-500 to-gold-600
                    text-white font-medium
                    rounded-full
                    shadow-[0_4px_20px_rgba(201,162,39,0.4)]
                    hover:shadow-[0_6px_30px_rgba(201,162,39,0.6)]
                    transition-shadow
                  "
                >
                  Subscribe
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-gold-400 text-lg"
              >
                ✓ Welcome to the Wine Circle!
              </motion.div>
            )}
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
};
```

---

## Navigation with Glass Effect
```tsx
// components/Navigation.tsx
'use client';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useState } from 'react';
import Image from 'next/image';

export const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setIsScrolled(latest > 50);
  });

  const navItems = ['Collection', 'Story', 'Experience', 'Contact'];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500
        ${isScrolled
          ? 'bg-white/10 backdrop-blur-xl border-b border-white/10 py-4'
          : 'bg-transparent py-6'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <motion.a
          href="#"
          whileHover={{ scale: 1.05 }}
          className="relative z-10"
        >
          <Image
            src="/images/duckhorn-logo-white.svg"
            alt="Duckhorn"
            width={140}
            height={50}
          />
        </motion.a>

        {/* Nav Links */}
        <motion.ul
          className="hidden md:flex items-center gap-8"
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: { staggerChildren: 0.1, delayChildren: 0.3 }
            }
          }}
          initial="hidden"
          animate="visible"
        >
          {navItems.map((item) => (
            <motion.li
              key={item}
              variants={{
                hidden: { opacity: 0, y: -10 },
                visible: { opacity: 1, y: 0 }
              }}
            >
              <motion.a
                href={`#${item.toLowerCase()}`}
                whileHover={{ y: -2 }}
                className="text-white/80 hover:text-white transition-colors text-sm uppercase tracking-wider"
              >
                {item}
              </motion.a>
            </motion.li>
          ))}
        </motion.ul>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="
            px-6 py-2.5
            border border-gold-500/50
            text-gold-400 text-sm uppercase tracking-wider
            rounded-full
            hover:bg-gold-500/10
            transition-colors
          "
        >
          Shop Now
        </motion.button>
      </div>
    </motion.nav>
  );
};
```

---

## Advanced Effects

### Animated Gradient Background
```tsx
// components/AnimatedGradient.tsx
'use client';
import { motion } from 'framer-motion';

export const AnimatedGradient = () => (
  <div className="fixed inset-0 -z-10 overflow-hidden">
    <motion.div
      animate={{
        background: [
          'radial-gradient(circle at 0% 0%, #8f1d40 0%, #450a1c 50%, #1a0a0e 100%)',
          'radial-gradient(circle at 100% 0%, #8f1d40 0%, #450a1c 50%, #1a0a0e 100%)',
          'radial-gradient(circle at 100% 100%, #8f1d40 0%, #450a1c 50%, #1a0a0e 100%)',
          'radial-gradient(circle at 0% 100%, #8f1d40 0%, #450a1c 50%, #1a0a0e 100%)',
          'radial-gradient(circle at 0% 0%, #8f1d40 0%, #450a1c 50%, #1a0a0e 100%)',
        ],
      }}
      transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      className="absolute inset-0"
    />
  </div>
);
```

### Cursor Glow Effect
```tsx
// components/CursorGlow.tsx
'use client';
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from 'react';

export const CursorGlow = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 150 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX - 200);
      cursorY.set(e.clientY - 200);
    };
    window.addEventListener('mousemove', moveCursor);
    return () => window.removeEventListener('mousemove', moveCursor);
  }, [cursorX, cursorY]);

  return (
    <motion.div
      className="fixed top-0 left-0 w-[400px] h-[400px] rounded-full pointer-events-none z-0"
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        background: 'radial-gradient(circle, rgba(212,175,55,0.15) 0%, transparent 70%)',
      }}
    />
  );
};
```

### Shimmer/Loading Effect
```css
/* For buttons, cards, or loading states */
.shimmer {
  background: linear-gradient(
    90deg,
    transparent 0%,
    rgba(255, 255, 255, 0.1) 50%,
    transparent 100%
  );
  background-size: 200% 100%;
  animation: shimmer 2s infinite;
}

@keyframes shimmer {
  0% { background-position: -200% 0; }
  100% { background-position: 200% 0; }
}
```

---

## Main App Layout
```tsx
// app/page.tsx
import { Navigation } from '@/components/Navigation';
import { Hero } from '@/components/sections/Hero';
import { FeaturedWines } from '@/components/sections/FeaturedWines';
import { Story } from '@/components/sections/Story';
import { Newsletter } from '@/components/sections/Newsletter';
import { CursorGlow } from '@/components/CursorGlow';

export default function Home() {
  return (
    <main className="relative">
      <CursorGlow />
      <Navigation />
      <Hero />
      <FeaturedWines />
      <Story />
      <Newsletter />
      {/* Add Footer component */}
    </main>
  );
}
```

---

## Global Styles
```css
/* app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    @apply bg-duckhorn-950 text-white antialiased;
  }

  /* Custom scrollbar for dark theme */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    @apply bg-duckhorn-950;
  }

  ::-webkit-scrollbar-thumb {
    @apply bg-duckhorn-700 rounded-full;
  }

  ::-webkit-scrollbar-thumb:hover {
    @apply bg-duckhorn-600;
  }
}

@layer utilities {
  .glass-wine {
    background: linear-gradient(
      135deg,
      rgba(143, 29, 64, 0.15) 0%,
      rgba(69, 10, 28, 0.25) 100%
    );
    backdrop-filter: blur(20px) saturate(150%);
    -webkit-backdrop-filter: blur(20px) saturate(150%);
    border: 1px solid rgba(212, 175, 55, 0.2);
    box-shadow:
      0 8px 32px rgba(143, 29, 64, 0.2),
      inset 0 1px 0 rgba(255, 255, 255, 0.1);
  }

  .text-gradient {
    @apply bg-clip-text text-transparent bg-gradient-to-r from-gold-400 to-gold-600;
  }
}
```

---

## Required Assets Checklist

### Images Needed
- [ ] `vineyard-hero.jpg` - Hero background (2000x1200px min)
- [ ] `vineyard-sunset.jpg` - Newsletter section background
- [ ] `winemaker.jpg` - Story section portrait
- [ ] `duckhorn-logo.svg` - Main logo (dark version)
- [ ] `duckhorn-logo-white.svg` - Navigation logo (light version)
- [ ] `wine-merlot.png` - Product image (transparent background)
- [ ] `wine-cabernet.png` - Product image (transparent background)
- [ ] `wine-sauvignon.png` - Product image (transparent background)

### Fonts Recommendation
```css
/* In app/layout.tsx or globals.css */
/* Serif for headlines: Playfair Display, Cormorant Garamond, or Libre Baskerville */
/* Sans-serif for body: Inter, Source Sans Pro, or Lato */

import { Playfair_Display, Inter } from 'next/font/google';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-serif'
});

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans'
});
```

---

## Performance Tips

1. **Image Optimization**: Always use `next/image` with proper sizing
2. **Lazy Loading**: Use `viewport={{ once: true }}` on scroll animations
3. **Reduce Motion**: Respect user preferences:
```tsx
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
```
4. **Code Splitting**: Each section component should be dynamically imported if large

---

## Browser Compatibility Notes

- `backdrop-filter` requires `-webkit-` prefix for Safari
- Test glassmorphism on older browsers - provide fallback solid backgrounds
- Framer Motion works in all modern browsers

---

## Quick Start Commands

```bash
# Create project
npx create-next-app@latest duckhorn-landing --typescript --tailwind --app --src-dir

# Install dependencies
cd duckhorn-landing
npm install framer-motion react-intersection-observer

# Run development server
npm run dev
```

Copy components from this spec into `/src/components/` and sections into `/src/components/sections/`.
