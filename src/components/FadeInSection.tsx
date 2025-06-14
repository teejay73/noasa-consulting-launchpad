
import React, { useRef, useState, useEffect } from "react";

interface FadeInSectionProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const FadeInSection: React.FC<FadeInSectionProps> = ({ children, className = "", delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = domRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      entries => {
        if (entries[0].isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    observer.observe(el);

    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={domRef}
      className={`transition-opacity duration-700 ease-out translate-y-4 opacity-0 ${
        isVisible ? "opacity-100 translate-y-0" : ""
      } ${className}`}
      style={isVisible ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </div>
  );
};

export default FadeInSection;
