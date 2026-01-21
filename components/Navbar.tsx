'use client'

import Link from 'next/link'
import { useState, useEffect } from 'react'
import { createClient } from '@/lib/supabase/client'
import { User } from '@supabase/supabase-js'
import { useRouter } from 'next/navigation'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const getUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
      setLoading(false)
    }

    getUser()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null)
    })

    return () => subscription.unsubscribe()
  }, [supabase.auth])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/')
    router.refresh()
  }

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-2xl font-serif font-semibold text-primary-500">
              Elevate Consulting
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              href="/privacy-policy"
              className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
            >
              Privacy Policy
            </Link>
            {!loading && (
              <>
                {user ? (
                  <>
                    <Link
                      href="/dashboard"
                      className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
                    >
                      Dashboard
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="btn-secondary text-sm"
                    >
                      Log Out
                    </button>
                  </>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className="text-gray-700 hover:text-primary-500 transition-colors font-medium"
                    >
                      Log In
                    </Link>
                    <Link
                      href="/signup"
                      className="btn-primary text-sm"
                    >
                      Sign Up
                    </Link>
                  </>
                )}
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:text-primary-500 hover:bg-gray-100 transition-colors"
            aria-label="Toggle menu"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/privacy-policy"
                className="text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-1"
                onClick={() => setIsOpen(false)}
              >
                Privacy Policy
              </Link>
              {!loading && (
                <>
                  {user ? (
                    <>
                      <Link
                        href="/dashboard"
                        className="text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Dashboard
                      </Link>
                      <button
                        onClick={() => {
                          handleLogout()
                          setIsOpen(false)
                        }}
                        className="text-left text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-1"
                      >
                        Log Out
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        href="/login"
                        className="text-gray-700 hover:text-primary-500 transition-colors font-medium px-2 py-1"
                        onClick={() => setIsOpen(false)}
                      >
                        Log In
                      </Link>
                      <Link
                        href="/signup"
                        className="btn-primary text-center"
                        onClick={() => setIsOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </>
                  )}
                </>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
