import AuthForm from '@/components/AuthForm'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Log In | Elevate Consulting Group',
  description: 'Sign in to your Elevate Consulting account to access your dashboard.',
}

export default function LoginPage() {
  return <AuthForm mode="login" />
}
