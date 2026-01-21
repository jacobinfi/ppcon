import AuthForm from '@/components/AuthForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign Up | Elevate Consulting Group',
  description: 'Create your Elevate Consulting account and unlock your business potential.',
}

export default function SignupPage() {
  return <AuthForm mode="signup" />
}
