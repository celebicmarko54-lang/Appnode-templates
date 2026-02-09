import Head from "next/head";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

export default function Home() {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    return savedTheme ? savedTheme === 'dark' : systemPrefersDark;
  });

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark(prevIsDark => !prevIsDark);
  };

  return (
    <>
      <Head>
        <title>Building your project!</title>
        <meta name="description" content="Your project is being built." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden" style={{ background: '#1a1a1a' }}>
        <Button
          onClick={toggleTheme}
          variant="ghost"
          size="icon"
          className="absolute top-4 right-4 text-2xl hover:scale-110 hover:rotate-12 transition-all duration-200 active:scale-90 z-50"
        >
          {isDark ? '\u2600\uFE0F' : '\uD83C\uDF19'}
        </Button>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center space-y-6 relative z-10"
        >
          {/* Animated Construction Cranes */}
          <div className="flex justify-center">
            <div className="cranes-container">
              {/* Left Crane */}
              <svg className="crane crane-left" width="90" height="100" viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="38" y="85" width="14" height="15" rx="2" fill="#3b82f6" opacity="0.9" />
                <rect x="42" y="20" width="6" height="65" fill="#60a5fa" />
                <rect x="10" y="18" width="55" height="5" rx="1" fill="#3b82f6" className="crane-arm-left" />
                <rect x="10" y="14" width="12" height="9" rx="1" fill="#2563eb" />
                <rect x="38" y="18" width="10" height="10" rx="2" fill="#1d4ed8" />
                <line x1="58" y1="23" x2="58" y2="55" stroke="#93c5fd" strokeWidth="1.5" className="cable-left" />
                <path d="M55 55 L61 55 L59 62 Q58 65 57 62 L55 55Z" fill="#60a5fa" className="hook-left" />
                <line x1="42" y1="30" x2="48" y2="45" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
                <line x1="48" y1="30" x2="42" y2="45" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
                <line x1="42" y1="50" x2="48" y2="65" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
                <line x1="48" y1="50" x2="42" y2="65" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              </svg>

              {/* Building under construction */}
              <svg className="building-progress" width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="50" width="50" height="20" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" />
                <rect x="5" y="32" width="50" height="18" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" className="floor-2" />
                <rect x="5" y="14" width="50" height="18" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" className="floor-3" />
                <rect x="10" y="55" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.6" />
                <rect x="22" y="55" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.4" />
                <rect x="38" y="55" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.6" />
                <rect x="10" y="37" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-1" />
                <rect x="22" y="37" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.5" className="window-anim-2" />
                <rect x="38" y="37" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-3" />
                <rect x="5" y="10" width="50" height="3" rx="1.5" fill="#1e293b" />
                <rect x="5" y="10" width="30" height="3" rx="1.5" fill="#3b82f6" className="progress-fill" />
              </svg>

              {/* Right Crane */}
              <svg className="crane crane-right" width="90" height="100" viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="38" y="85" width="14" height="15" rx="2" fill="#3b82f6" opacity="0.9" />
                <rect x="42" y="25" width="6" height="60" fill="#60a5fa" />
                <rect x="25" y="22" width="55" height="5" rx="1" fill="#3b82f6" className="crane-arm-right" />
                <rect x="68" y="18" width="12" height="9" rx="1" fill="#2563eb" />
                <rect x="42" y="22" width="10" height="10" rx="2" fill="#1d4ed8" />
                <line x1="32" y1="27" x2="32" y2="58" stroke="#93c5fd" strokeWidth="1.5" className="cable-right" />
                <path d="M29 58 L35 58 L33 65 Q32 68 31 65 L29 58Z" fill="#60a5fa" className="hook-right" />
                <line x1="42" y1="35" x2="48" y2="50" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
                <line x1="48" y1="35" x2="42" y2="50" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
                <line x1="42" y1="55" x2="48" y2="70" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
                <line x1="48" y1="55" x2="42" y2="70" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              </svg>
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight text-white">
            Building your <span className="text-gradient-blue">project!</span>
          </h1>

          <p className="text-lg md:text-xl max-w-xl mx-auto text-pretty" style={{ color: '#93c5fd' }}>
            Your project will be ready soon!
          </p>
        </motion.div>

        <footer className="absolute bottom-8 text-center" style={{ color: 'rgba(148,163,184,0.8)' }}>
          <p>Powered by Appnode</p>
        </footer>
      </main>
    </>
  );
}
