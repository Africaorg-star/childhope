// src/components/Layout.tsx
import { ReactNode, useState, useEffect } from 'react';
import topImage from '@/assets/top.jpg';
import middleImage from '@/assets/middle.jpg';

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Top Background (Hero Section) */}
      <div className="fixed inset-0 -z-50 h-screen">
        <img
          src={topImage}
          alt="Top Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/60 to-transparent" />
      </div>
      
      {/* Middle Background (appears after scrolling) */}
      {scrollY > window.innerHeight && (
        <div className="fixed inset-0 -z-40 h-screen">
          <img
            src={middleImage}
            alt="Middle Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
      )}
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}