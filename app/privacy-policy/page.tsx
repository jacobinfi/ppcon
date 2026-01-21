import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Privacy Policy | Elevate Consulting Group',
  description: 'Privacy Policy and Terms of Service for Elevate Consulting Group.',
}

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-serif font-bold text-gray-800 mb-4">
            Privacy Policy
          </h1>
          <p className="text-gray-600">
            Elevate Consulting Group - Terms & Conditions
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Last updated: January 2025
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-lg max-w-none text-gray-600">
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Introduction
            </h2>
            <p className="mb-4">
              Welcome to Elevate Consulting Group (&quot;Company,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;).
              We are committed to protecting your personal information and your right to privacy.
              This Privacy Policy explains how we collect, use, disclose, and safeguard your
              information when you visit our website or use our services.
            </p>
            <p>
              Please read this privacy policy carefully. If you do not agree with the terms of
              this privacy policy, please do not access the site or use our services.
            </p>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Information We Collect
            </h2>
            <p className="mb-4">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Account credentials (email and password for registered users)</li>
              <li>Business information you provide through our contact forms</li>
              <li>Communications you send to us</li>
              <li>Any other information you choose to provide</li>
            </ul>
            <p>
              We automatically collect certain information when you visit our website, including
              your IP address, browser type, operating system, referring URLs, and information
              about how you interact with our website.
            </p>
          </section>

          {/* Mobile Terms */}
          <section className="mb-10 bg-gray-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Mobile Terms & SMS Policy
            </h2>
            <p className="mb-4">
              By providing your phone number and opting in to receive communications from
              Elevate Consulting Group, you consent to receive text messages (SMS) from us
              regarding our services, updates, and promotional offers.
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Message frequency varies based on your preferences and interactions with our services</li>
              <li>Message and data rates may apply depending on your mobile carrier plan</li>
              <li>You can opt out at any time by replying STOP to any text message</li>
              <li>For help, reply HELP to any text message or contact us directly</li>
              <li>Carriers are not liable for delayed or undelivered messages</li>
            </ul>
            <p className="text-sm text-gray-500">
              By signing up for our services, you acknowledge that you have read and agree to
              these mobile terms. Standard messaging rates may apply.
            </p>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              How We Use Your Information
            </h2>
            <p className="mb-4">
              We use the information we collect for various purposes, including to:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Provide, operate, and maintain our website and services</li>
              <li>Respond to your inquiries and communicate with you</li>
              <li>Send you marketing and promotional communications (with your consent)</li>
              <li>Improve our website and develop new features</li>
              <li>Analyze usage patterns and trends</li>
              <li>Protect against fraudulent or unauthorized activity</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          {/* Information Sharing */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              We may share your information in the following situations:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Service Providers:</strong> With third-party vendors who provide services on our behalf</li>
              <li><strong>Business Transfers:</strong> In connection with any merger, sale, or acquisition</li>
              <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
              <li><strong>With Your Consent:</strong> When you have given us explicit consent to share your information</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for their
              marketing purposes without your explicit consent.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Data Security
            </h2>
            <p className="mb-4">
              We implement appropriate technical and organizational security measures to protect
              your personal information against unauthorized access, alteration, disclosure, or
              destruction. However, no method of transmission over the Internet or electronic
              storage is 100% secure.
            </p>
            <p>
              We retain your personal information only for as long as necessary to fulfill the
              purposes outlined in this privacy policy, unless a longer retention period is
              required or permitted by law.
            </p>
          </section>

          {/* Your Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Your Rights and Choices
            </h2>
            <p className="mb-4">
              Depending on your location, you may have certain rights regarding your personal
              information, including:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li>Access to your personal information</li>
              <li>Correction of inaccurate or incomplete information</li>
              <li>Deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Data portability</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us using the information provided below.
            </p>
          </section>

          {/* Opt-Out Instructions */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Opt-Out Instructions
            </h2>
            <p className="mb-4">
              You can opt out of receiving communications from us at any time by:
            </p>
            <ul className="list-disc pl-6 mb-4 space-y-2">
              <li><strong>Email:</strong> Click the &quot;unsubscribe&quot; link in any marketing email</li>
              <li><strong>SMS:</strong> Reply STOP to any text message</li>
              <li><strong>Account Settings:</strong> Update your preferences in your account dashboard</li>
              <li><strong>Direct Contact:</strong> Email us at privacy@elevateconsulting.com</li>
            </ul>
            <p>
              Please note that even if you opt out of marketing communications, we may still
              send you transactional or administrative messages related to your account.
            </p>
          </section>

          {/* Cookies */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              We use cookies and similar tracking technologies to collect information about your
              browsing activities. Cookies are small data files stored on your device that help
              us improve your experience on our website.
            </p>
            <p>
              You can control cookies through your browser settings. Note that disabling cookies
              may affect the functionality of certain features on our website.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Children&apos;s Privacy
            </h2>
            <p>
              Our services are not intended for individuals under the age of 18. We do not
              knowingly collect personal information from children. If you believe we have
              collected information from a child, please contact us immediately.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Changes to This Privacy Policy
            </h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any
              changes by posting the new privacy policy on this page and updating the &quot;Last
              updated&quot; date. We encourage you to review this privacy policy periodically.
            </p>
          </section>

          {/* Contact Information */}
          <section className="mb-10 bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-serif font-semibold text-gray-800 mb-4">
              Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or our data practices,
              please contact us at:
            </p>
            <div className="space-y-2">
              <p><strong>Elevate Consulting Group</strong></p>
              <p>Email: privacy@elevateconsulting.com</p>
              <p>Phone: (555) 123-4567</p>
              <p>Address: 123 Business Plaza, Suite 100<br />New York, NY 10001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
