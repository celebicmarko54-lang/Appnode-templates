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
              <svg className="crane crane-left" width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="30" y="125" width="30" height="8" rx="2" fill="#1e3a5f" />
                <rect x="35" y="120" width="20" height="8" rx="1" fill="#2563eb" />
                <rect x="43" y="22" width="4" height="100" fill="#3b82f6" />
                <rect x="53" y="22" width="4" height="100" fill="#3b82f6" />
                <line x1="43" y1="30" x2="57" y2="45" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="57" y1="30" x2="43" y2="45" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="43" y1="48" x2="57" y2="63" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="57" y1="48" x2="43" y2="63" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="43" y1="66" x2="57" y2="81" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="57" y1="66" x2="43" y2="81" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="43" y1="84" x2="57" y2="99" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="57" y1="84" x2="43" y2="99" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="43" y1="102" x2="57" y2="117" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="57" y1="102" x2="43" y2="117" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <rect x="38" y="22" width="24" height="14" rx="3" fill="#1d4ed8" />
                <rect x="40" y="25" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.5" />
                <rect x="2" y="18" width="96" height="4" rx="1" fill="#3b82f6" className="crane-arm-left" />
                <line x1="5" y1="18" x2="15" y2="22" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <line x1="20" y1="18" x2="30" y2="22" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <line x1="65" y1="18" x2="75" y2="22" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <line x1="80" y1="18" x2="90" y2="22" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <rect x="2" y="10" width="16" height="10" rx="2" fill="#1e40af" />
                <rect x="4" y="12" width="12" height="6" rx="1" fill="#2563eb" />
                <line x1="50" y1="4" x2="50" y2="18" stroke="#3b82f6" strokeWidth="2" />
                <line x1="50" y1="4" x2="10" y2="18" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                <line x1="50" y1="4" x2="90" y2="18" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                <line x1="78" y1="22" x2="78" y2="70" stroke="#93c5fd" strokeWidth="1.2" className="cable-left" strokeDasharray="3,2" />
                <circle cx="78" cy="72" r="3" fill="#60a5fa" className="hook-left" />
                <path d="M75 75 L78 82 L81 75" stroke="#60a5fa" strokeWidth="1.5" fill="none" className="hook-left" />
                <circle cx="50" cy="4" r="2" fill="#f59e0b" className="warning-light" />
              </svg>

              {/* Building under construction */}
              <svg className="building-progress" width="80" height="100" viewBox="0 0 80 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="5" y="92" width="70" height="8" rx="1" fill="#1e3a5f" />
                <rect x="8" y="72" width="64" height="20" rx="2" fill="#1e3a5f" stroke="#2563eb" strokeWidth="0.8" />
                <rect x="12" y="76" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.7" />
                <rect x="24" y="76" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.5" />
                <rect x="36" y="76" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.7" />
                <rect x="48" y="76" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.4" />
                <rect x="60" y="76" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.6" />
                <rect x="8" y="52" width="64" height="20" rx="2" fill="#1e3a5f" stroke="#2563eb" strokeWidth="0.8" className="floor-2" />
                <rect x="12" y="56" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-1" />
                <rect x="24" y="56" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.2" className="window-anim-2" />
                <rect x="36" y="56" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-3" />
                <rect x="48" y="56" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.2" className="window-anim-1" />
                <rect x="60" y="56" width="8" height="10" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-2" />
                <rect x="8" y="32" width="64" height="20" rx="2" fill="#1e3a5f" stroke="#2563eb" strokeWidth="0.8" className="floor-3" opacity="0.6" />
                <line x1="10" y1="38" x2="70" y2="38" stroke="#3b82f6" strokeWidth="1" className="beam-1" opacity="0.5" />
                <line x1="10" y1="44" x2="50" y2="44" stroke="#3b82f6" strokeWidth="1" className="beam-2" opacity="0.4" />
                <line x1="6" y1="32" x2="6" y2="92" stroke="#60a5fa" strokeWidth="0.6" opacity="0.3" />
                <line x1="74" y1="32" x2="74" y2="92" stroke="#60a5fa" strokeWidth="0.6" opacity="0.3" />
                <line x1="4" y1="52" x2="8" y2="52" stroke="#60a5fa" strokeWidth="0.6" opacity="0.3" />
                <line x1="72" y1="52" x2="76" y2="52" stroke="#60a5fa" strokeWidth="0.6" opacity="0.3" />
                <line x1="4" y1="72" x2="8" y2="72" stroke="#60a5fa" strokeWidth="0.6" opacity="0.3" />
                <line x1="72" y1="72" x2="76" y2="72" stroke="#60a5fa" strokeWidth="0.6" opacity="0.3" />
                <circle cx="35" cy="35" r="2" fill="#f59e0b" className="spark-1" />
                <circle cx="37" cy="33" r="1.5" fill="#fbbf24" className="spark-2" />
                <circle cx="33" cy="34" r="1" fill="#fcd34d" className="spark-3" />
              </svg>

              {/* Right Crane */}
              <svg className="crane crane-right" width="120" height="140" viewBox="0 0 120 140" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="60" y="125" width="30" height="8" rx="2" fill="#1e3a5f" />
                <rect x="65" y="120" width="20" height="8" rx="1" fill="#2563eb" />
                <rect x="63" y="28" width="4" height="94" fill="#3b82f6" />
                <rect x="73" y="28" width="4" height="94" fill="#3b82f6" />
                <line x1="63" y1="35" x2="77" y2="50" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="77" y1="35" x2="63" y2="50" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="63" y1="53" x2="77" y2="68" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="77" y1="53" x2="63" y2="68" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="63" y1="71" x2="77" y2="86" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="77" y1="71" x2="63" y2="86" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="63" y1="89" x2="77" y2="104" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="77" y1="89" x2="63" y2="104" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="63" y1="107" x2="77" y2="118" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <line x1="77" y1="107" x2="63" y2="118" stroke="#60a5fa" strokeWidth="1" opacity="0.7" />
                <rect x="58" y="28" width="24" height="14" rx="3" fill="#1d4ed8" />
                <rect x="72" y="31" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.5" />
                <rect x="22" y="24" width="96" height="4" rx="1" fill="#3b82f6" className="crane-arm-right" />
                <line x1="25" y1="24" x2="35" y2="28" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <line x1="40" y1="24" x2="50" y2="28" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <line x1="85" y1="24" x2="95" y2="28" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <line x1="100" y1="24" x2="110" y2="28" stroke="#60a5fa" strokeWidth="0.8" opacity="0.5" />
                <rect x="102" y="16" width="16" height="10" rx="2" fill="#1e40af" />
                <rect x="104" y="18" width="12" height="6" rx="1" fill="#2563eb" />
                <line x1="70" y1="10" x2="70" y2="24" stroke="#3b82f6" strokeWidth="2" />
                <line x1="70" y1="10" x2="30" y2="24" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                <line x1="70" y1="10" x2="110" y2="24" stroke="#93c5fd" strokeWidth="0.8" opacity="0.6" />
                <line x1="42" y1="28" x2="42" y2="76" stroke="#93c5fd" strokeWidth="1.2" className="cable-right" strokeDasharray="3,2" />
                <circle cx="42" cy="78" r="3" fill="#60a5fa" className="hook-right" />
                <path d="M39 81 L42 88 L45 81" stroke="#60a5fa" strokeWidth="1.5" fill="none" className="hook-right" />
                <circle cx="70" cy="10" r="2" fill="#f59e0b" className="warning-light" />
              </svg>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-display font-bold text-balance leading-tight text-white">
            Building your <span className="text-gradient-blue">project!</span>
          </h1>

          <p className="text-sm md:text-base max-w-xl mx-auto text-pretty" style={{ color: '#93c5fd' }}>
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
