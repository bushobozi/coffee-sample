const About = () => {
  return (
    <section className="py-20 px-4 md:px-12 lg:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 px-4">
          <p className="text-base font-medium text-gray-500 mb-3">Our Story</p>
          <h2 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About Us
          </h2>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed">
            We are a passionate team dedicated to delivering exceptional digital
            solutions that drive growth and innovation for our clients.
          </p>
        </div>

        {/* Main Content */}
        <div className="bg-white rounded-3xl border border-orange-600/50 p-12 mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <h3 className="text-2xl font-semibold text-black mb-6">
                Who We Are
              </h3>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p className="text-lg">
                  Founded in 2015, we have been at the forefront of digital
                  innovation, helping businesses transform their ideas into
                  successful digital products. Our team of experts brings
                  together years of experience in web development, design, and
                  digital strategy.
                </p>
                <p className="text-lg">
                  We believe in creating solutions that not only look beautiful
                  but also deliver measurable results. Our client-focused
                  approach ensures that every project is tailored to meet
                  specific business objectives and user needs.
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 mt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">150+</div>
                  <div className="text-gray-500">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">50+</div>
                  <div className="text-gray-500">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">8+</div>
                  <div className="text-gray-500">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-black mb-2">15+</div>
                  <div className="text-gray-500">Team Members</div>
                </div>
              </div>
            </div>

            {/* Placeholder for Image */}
            <div className="bg-gray-100 h-96 flex items-center justify-center">
              <div className="text-center">
                <svg
                  className="w-16 h-16 text-gray-400 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="1.5"
                    d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                  ></path>
                </svg>
                <span className="text-gray-500 text-lg">Company Image</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
