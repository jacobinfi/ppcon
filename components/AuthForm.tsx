'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import Link from 'next/link'

interface AuthFormProps {
  mode: 'login' | 'signup'
}

export default function AuthForm({ mode }: AuthFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })
  const [status, setStatus] = useState<'idle' | 'loading' | 'error'>('idle')
  const [errorMessage, setErrorMessage] = useState('')
  const router = useRouter()
  const supabase = createClient()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    // Validation for signup
    if (mode === 'signup') {
      if (formData.password !== formData.confirmPassword) {
        setStatus('error')
        setErrorMessage('Passwords do not match')
        return
      }
      if (formData.password.length < 6) {
        setStatus('error')
        setErrorMessage('Password must be at least 6 characters')
        return
      }
    }

    try {
      if (mode === 'signup') {
        // Sign up
        const { data, error } = await supabase.auth.signUp({
          email: formData.email,
          password: formData.password,
          options: {
            data: {
              full_name: formData.name,
            },
          },
        })

        if (error) throw error

        // Create profile in profiles table
        if (data.user) {
          const { error: profileError } = await supabase
            .from('profiles')
            .insert([
              {
                id: data.user.id,
                email: formData.email,
                full_name: formData.name,
              },
            ])

          if (profileError && !profileError.message.includes('duplicate')) {
            console.error('Profile creation error:', profileError)
          }
        }

        router.push('/dashboard')
        router.refresh()
      } else {
        // Log in
        const { error } = await supabase.auth.signInWithPassword({
          email: formData.email,
          password: formData.password,
        })

        if (error) throw error

        router.push('/dashboard')
        router.refresh()
      }
    } catch (error) {
      setStatus('error')
      setErrorMessage(error instanceof Error ? error.message : 'Authentication failed. Please try again.')
    }
  }

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 bg-accent-cream">
      <div className="max-w-md w-full">
        {/* Logo/Branding */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <h1 className="text-3xl font-serif font-semibold text-primary-500">
              Elevate Consulting
            </h1>
          </Link>
          <h2 className="mt-6 text-2xl font-serif font-semibold text-gray-800">
            {mode === 'signup' ? 'Create your account' : 'Welcome back'}
          </h2>
          <p className="mt-2 text-gray-600">
            {mode === 'signup'
              ? 'Join us to unlock your business potential'
              : 'Sign in to access your dashboard'}
          </p>
        </div>

        {/* Form */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <form onSubmit={handleSubmit} className="space-y-5">
            {mode === 'signup' && (
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="John Doe"
                />
              </div>
            )}

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                value={formData.email}
                onChange={handleChange}
                className="input-field"
                placeholder="you@example.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                required
                value={formData.password}
                onChange={handleChange}
                className="input-field"
                placeholder="••••••••"
              />
            </div>

            {mode === 'signup' && (
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  required
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="input-field"
                  placeholder="••••••••"
                />
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm">
                {errorMessage}
              </div>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {status === 'loading'
                ? 'Please wait...'
                : mode === 'signup'
                ? 'Create Account'
                : 'Sign In'}
            </button>
          </form>

          {/* Privacy Policy Disclaimer (for signup) */}
          {mode === 'signup' && (
            <p className="mt-4 text-sm text-gray-500 text-center">
              By creating an account, you agree to our{' '}
              <Link href="/privacy-policy" className="text-primary-500 hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/privacy-policy" className="text-primary-500 hover:underline">
                Terms of Service
              </Link>.
            </p>
          )}

          {/* Toggle between login/signup */}
          <div className="mt-6 text-center text-sm text-gray-600">
            {mode === 'signup' ? (
              <>
                Already have an account?{' '}
                <Link href="/login" className="text-primary-500 hover:underline font-medium">
                  Log in
                </Link>
              </>
            ) : (
              <>
                Don&apos;t have an account?{' '}
                <Link href="/signup" className="text-primary-500 hover:underline font-medium">
                  Sign up
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
