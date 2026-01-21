import Link from 'next/link'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=2069&q=80')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/80 to-gray-900/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-accent-rose text-lg md:text-xl font-medium mb-4 animate-fade-in">
          Expert strategies for growth and efficiency today.
        </p>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 animate-fade-in-up">
          Elevate Your Business Success
        </h1>
        <p className="text-gray-300 text-lg md:text-xl max-w-2xl mx-auto mb-8 animate-fade-in">
          Transform your organization with our comprehensive consulting services.
          We partner with businesses to drive sustainable growth and operational excellence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up">
          <Link
            href="/signup"
            className="btn-primary text-lg px-8 py-4"
          >
            Get Started
          </Link>
          <Link
            href="#services"
            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white text-white font-medium rounded-md transition-all duration-300 hover:bg-white hover:text-gray-900"
          >
            Our Services
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  )
}
