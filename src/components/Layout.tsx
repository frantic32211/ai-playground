import React, { useEffect, useState } from 'react'
import ThemeToggle from "./ThemeToggle";
import { useApp } from '../contexts/AppContext'
import Link from 'next/link'

export default function Layout({ children }: { children: React.ReactNode }) {
  const { theme } = useApp()
  const [mounted, setMounted] = useState(false)

  // Ensure code runs only after component mounts in browser
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    // Avoid rendering theme-dependent styles until mounted
    return <div className="min-h-screen bg-white text-slate-900"></div>
  }

  return (
    <div
      className={`min-h-screen ${theme === 'dark'
        ? 'bg-slate-900 text-white'
        : 'bg-white text-slate-900'
        }`}
    >
      <header className="flex items-center justify-between p-4 border-b">
        <div className="flex items-center gap-3">
          <h1 className="text-lg font-semibold">  <Link href="/">AI Playground</Link></h1>
        </div>
        <div className="flex items-center gap-3">
          <ThemeToggle />
        </div>
      </header>
      <div className="p-4">{children}</div>
    </div>
  )
}
