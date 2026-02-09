// Home page of the app.
// Currently a demo placeholder "please wait" screen.
// Replace this file with your actual app UI. Do not delete it to use some other file as homepage. Simply replace the entire contents of this file.

import { Sparkles } from 'lucide-react'

import { ThemeToggle } from '@/components/ThemeToggle'

export function HomePage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground p-4 overflow-hidden relative">
      <ThemeToggle />
      <div className="absolute inset-0 bg-gradient-rainbow opacity-10 dark:opacity-20 pointer-events-none" />

      <div className="text-center space-y-8 relative z-10 animate-fade-in w-full">
        <div className="flex justify-center">
          <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center shadow-primary floating">
            <Sparkles className="w-8 h-8 text-white rotating" />
          </div>
        </div>

        <div className="space-y-3">
          <h1 className="text-5xl md:text-7xl font-display font-bold text-balance leading-tight">
            Creating your <span className="text-gradient">app</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-xl mx-auto text-pretty">
            Your application would be ready soon.
          </p>
        </div>
      </div>

      <footer className="absolute bottom-8 text-center text-muted-foreground/80">
        <p>Powered by Appnode</p>
      </footer>
    </div>
  )
}
