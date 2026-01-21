import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Dashboard | Elevate Consulting Group',
  description: 'Your personal dashboard at Elevate Consulting Group.',
}

export default async function DashboardPage() {
  const supabase = await createClient()

  const { data: { user } } = await supabase.auth.getUser()

  if (!user) {
    redirect('/login')
  }

  // Fetch user profile
  const { data: profile } = await supabase
    .from('profiles')
    .select('*')
    .eq('id', user.id)
    .single()

  const displayName = profile?.full_name || user.email?.split('@')[0] || 'User'

  return (
    <div className="min-h-[calc(100vh-5rem)] bg-accent-cream py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Welcome Header */}
        <div className="bg-white rounded-xl shadow-sm p-8 mb-8">
          <h1 className="text-3xl font-serif font-bold text-gray-800 mb-2">
            Welcome back, {displayName}!
          </h1>
          <p className="text-gray-600">
            Here&apos;s an overview of your consulting journey with us.
          </p>
        </div>

        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {/* Quick Stats Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Account Status</h3>
              <span className="px-3 py-1 bg-green-100 text-green-700 text-sm font-medium rounded-full">
                Active
              </span>
            </div>
            <p className="text-gray-600 text-sm">
              Your account is in good standing. You have full access to all features.
            </p>
          </div>

          {/* Services Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Available Services</h3>
              <span className="text-2xl font-bold text-primary-500">10</span>
            </div>
            <p className="text-gray-600 text-sm">
              Explore our full range of consulting services tailored for your business.
            </p>
          </div>

          {/* Support Card */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Support</h3>
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center text-primary-500">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
                </svg>
              </div>
            </div>
            <p className="text-gray-600 text-sm">
              Need help? Our support team is available during business hours.
            </p>
          </div>
        </div>

        {/* Profile Information */}
        <div className="bg-white rounded-xl shadow-sm p-8">
          <h2 className="text-xl font-serif font-semibold text-gray-800 mb-6">
            Profile Information
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Full Name
              </label>
              <p className="text-gray-800">{profile?.full_name || 'Not provided'}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Email Address
              </label>
              <p className="text-gray-800">{user.email}</p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Member Since
              </label>
              <p className="text-gray-800">
                {new Date(profile?.created_at || user.created_at).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric'
                })}
              </p>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-500 mb-1">
                Account ID
              </label>
              <p className="text-gray-800 font-mono text-sm">{user.id.slice(0, 8)}...</p>
            </div>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl shadow-sm p-8 text-white">
          <h2 className="text-xl font-serif font-semibold mb-4">
            Ready to Take the Next Step?
          </h2>
          <p className="mb-6 text-primary-100">
            Schedule a consultation with our team to discuss your business goals and how we can help you achieve them.
          </p>
          <a
            href="/#contact"
            className="inline-flex items-center px-6 py-3 bg-white text-primary-500 font-medium rounded-md hover:bg-gray-100 transition-colors"
          >
            Contact Us
            <svg className="ml-2 w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}
