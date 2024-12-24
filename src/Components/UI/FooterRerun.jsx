export const FooterRerun = () => {
  return (
    <>
      <section className="bg-[#212A2F] py-8 sm:py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12">
            {/* Newsletter Signup */}
            <div className="text-white">
              <h3 className="text-lg sm:text-xl font-medium mb-4">
                Sign up to learn about our latest product and color drops.
              </h3>
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  className="flex-1 px-4 py-2 rounded bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-gray-400"
                />
                <button className="inline-flex justify-center items-center px-6 py-2 border-2 border-white bg-transparent text-white hover:bg-white hover:text-black transition-colors duration-200 rounded font-medium">
                  Sign Up
                </button>
              </div>
              <p className="mt-4 text-sm text-gray-300">
                Note: You can opt out at any time. See our{" "}
                <a href="#" className="underline hover:text-white">Privacy Policy</a> and{" "}
                <a href="#" className="underline hover:text-white">Terms</a>.
              </p>
            </div>

            {/* Help Links */}
            <div className="text-white">
              <h2 className="text-xl font-bold mb-4">HELP</h2>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Order Status</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Returns & Exchanges</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">FAQ</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Contact Us</a>
              </nav>
              <p className="mt-8 text-sm text-gray-300">
                © 2024, Allbirds ReRun{" "}
                <a href="#" className="underline hover:text-white">Terms</a> •{" "}
                <a href="#" className="underline hover:text-white">Privacy</a> •{" "}
                <a href="#" className="underline hover:text-white">Accessibility</a>
              </p>
            </div>

            {/* Company Links */}
            <div className="text-white">
              <h2 className="text-xl font-bold mb-4">COMPANY</h2>
              <nav className="flex flex-col space-y-3">
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Our Stores</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Our Story</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Our Materials</a>
                <a href="#" className="hover:text-gray-300 transition-colors duration-200">Sustainability</a>
              </nav>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
