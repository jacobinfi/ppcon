'use client'

import { useState } from 'react'

export default function Newsletter() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    // Simulate API call - in production, you would save this to Supabase
    await new Promise(resolve => setTimeout(resolve, 1000))

    setStatus('success')
    setEmail('')
  }

  return (
    <section className="py-16 bg-primary-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-serif font-semibold text-white mb-4">
            Stay Updated
          </h2>
          <p className="text-primary-100 mb-8">
            Subscribe to our newsletter for the latest business insights, industry trends,
            and exclusive content delivered straight to your inbox.
          </p>

          {status === 'success' ? (
            <div className="bg-white/10 rounded-lg p-4 text-white">
              <p className="font-medium">Thank you for subscribing!</p>
              <p className="text-sm text-primary-100 mt-1">
                You will receive our next newsletter soon.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4 justify-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="px-6 py-3 rounded-md text-gray-800 w-full sm:w-80 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className="px-8 py-3 bg-white text-primary-500 font-medium rounded-md hover:bg-gray-100 transition-colors disabled:opacity-50"
              >
                {status === 'loading' ? 'Signing up...' : 'Sign Up'}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
