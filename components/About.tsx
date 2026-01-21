export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div
              className="aspect-[4/3] rounded-2xl bg-cover bg-center shadow-xl"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80')`,
              }}
            />
            {/* Decorative Elements */}
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-primary-100 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-accent-rose/30 rounded-2xl -z-10"></div>
          </div>

          {/* Content */}
          <div>
            <h2 className="section-heading text-left">About Elevate Consulting</h2>

            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p>
                At Elevate Consulting Group, we believe every business has the potential
                to achieve extraordinary success. Since our founding, we have been dedicated
                to helping organizations navigate complex challenges and seize opportunities
                for growth.
              </p>

              <div className="bg-primary-50 border-l-4 border-primary-500 p-6 rounded-r-lg">
                <h3 className="text-xl font-serif font-semibold text-gray-800 mb-2">
                  Our Mission
                </h3>
                <p className="text-gray-600">
                  To empower businesses with innovative strategies and expert guidance that
                  drive sustainable growth, operational excellence, and lasting competitive
                  advantages. We are committed to being trusted partners in your success journey.
                </p>
              </div>

              <p>
                Our team of seasoned consultants brings decades of combined experience across
                diverse industries. We take pride in our collaborative approach, working closely
                with your team to develop customized solutions that address your unique needs
                and objectives.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-gray-200">
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary-500">15+</p>
                <p className="text-sm text-gray-500 mt-1">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary-500">500+</p>
                <p className="text-sm text-gray-500 mt-1">Clients Served</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-serif font-bold text-primary-500">98%</p>
                <p className="text-sm text-gray-500 mt-1">Satisfaction Rate</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
