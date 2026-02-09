// Home page of the app.
// Currently a demo placeholder "please wait" screen.
// Replace this file with your actual app UI. Do not delete it to use some other file as homepage. Simply replace the entire contents of this file.

import { ThemeToggle } from '@/components/ThemeToggle'

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 overflow-hidden relative" style={{ background: '#1a1a1a' }}>
      <ThemeToggle />

      <div className="text-center space-y-8 relative z-10 animate-fade-in w-full">
        {/* Animated Construction Cranes */}
        <div className="flex justify-center">
          <div className="cranes-container">
            {/* Left Crane */}
            <svg className="crane crane-left" width="90" height="100" viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Crane base */}
              <rect x="38" y="85" width="14" height="15" rx="2" fill="#3b82f6" opacity="0.9" />
              {/* Crane tower */}
              <rect x="42" y="20" width="6" height="65" fill="#60a5fa" />
              {/* Crane arm (jib) */}
              <rect x="10" y="18" width="55" height="5" rx="1" fill="#3b82f6" className="crane-arm-left" />
              {/* Counter-weight */}
              <rect x="10" y="14" width="12" height="9" rx="1" fill="#2563eb" />
              {/* Cabin */}
              <rect x="38" y="18" width="10" height="10" rx="2" fill="#1d4ed8" />
              {/* Hook cable */}
              <line x1="58" y1="23" x2="58" y2="55" stroke="#93c5fd" strokeWidth="1.5" className="cable-left" />
              {/* Hook */}
              <path d="M55 55 L61 55 L59 62 Q58 65 57 62 L55 55Z" fill="#60a5fa" className="hook-left" />
              {/* Cross bracing on tower */}
              <line x1="42" y1="30" x2="48" y2="45" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              <line x1="48" y1="30" x2="42" y2="45" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              <line x1="42" y1="50" x2="48" y2="65" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              <line x1="48" y1="50" x2="42" y2="65" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
            </svg>

            {/* Building under construction (center) */}
            <svg className="building-progress" width="60" height="70" viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Building floors */}
              <rect x="5" y="50" width="50" height="20" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" />
              <rect x="5" y="32" width="50" height="18" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" className="floor-2" />
              <rect x="5" y="14" width="50" height="18" rx="2" fill="#1e3a5f" stroke="#3b82f6" strokeWidth="0.5" className="floor-3" />
              {/* Windows */}
              <rect x="10" y="55" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.6" />
              <rect x="22" y="55" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.4" />
              <rect x="38" y="55" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.6" />
              <rect x="10" y="37" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-1" />
              <rect x="22" y="37" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.5" className="window-anim-2" />
              <rect x="38" y="37" width="8" height="6" rx="1" fill="#60a5fa" opacity="0.3" className="window-anim-3" />
              {/* Progress bar at top */}
              <rect x="5" y="10" width="50" height="3" rx="1.5" fill="#1e293b" />
              <rect x="5" y="10" width="30" height="3" rx="1.5" fill="#3b82f6" className="progress-fill" />
            </svg>

            {/* Right Crane */}
            <svg className="crane crane-right" width="90" height="100" viewBox="0 0 90 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              {/* Crane base */}
              <rect x="38" y="85" width="14" height="15" rx="2" fill="#3b82f6" opacity="0.9" />
              {/* Crane tower */}
              <rect x="42" y="25" width="6" height="60" fill="#60a5fa" />
              {/* Crane arm (jib) */}
              <rect x="25" y="22" width="55" height="5" rx="1" fill="#3b82f6" className="crane-arm-right" />
              {/* Counter-weight */}
              <rect x="68" y="18" width="12" height="9" rx="1" fill="#2563eb" />
              {/* Cabin */}
              <rect x="42" y="22" width="10" height="10" rx="2" fill="#1d4ed8" />
              {/* Hook cable */}
              <line x1="32" y1="27" x2="32" y2="58" stroke="#93c5fd" strokeWidth="1.5" className="cable-right" />
              {/* Hook */}
              <path d="M29 58 L35 58 L33 65 Q32 68 31 65 L29 58Z" fill="#60a5fa" className="hook-right" />
              {/* Cross bracing on tower */}
              <line x1="42" y1="35" x2="48" y2="50" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              <line x1="48" y1="35" x2="42" y2="50" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              <line x1="42" y1="55" x2="48" y2="70" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
              <line x1="48" y1="55" x2="42" y2="70" stroke="#93c5fd" strokeWidth="0.8" opacity="0.5" />
            </svg>
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight text-white">
            Building your <span className="text-gradient-blue">project!</span>
          </h1>
          <p className="text-lg md:text-xl max-w-xl mx-auto text-pretty" style={{ color: '#93c5fd' }}>
            Your project will be ready soon!
          </p>
        </div>
      </div>

      <footer className="absolute bottom-8 text-center" style={{ color: 'rgba(148,163,184,0.8)' }}>
        <p>Powered by Appnode</p>
      </footer>
    </div>
  )
}
