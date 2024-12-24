export const SignUp = () => {
  return (
    <>
      <section className="w-full min-h-[320px] bg-[#F5F5F5] px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center py-12 sm:py-16 lg:py-20">
          <h2 className="font-bold text-2xl sm:text-3xl lg:text-4xl mb-4">Want First Dibs?</h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Join our email list and be the first to know about new limited
            edition products, material innovations, and lots of other fun
            updates.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your email address"
              autoComplete="off"
              className="w-full sm:w-auto min-w-[280px] rounded-md border border-gray-300 px-4 py-2.5 text-gray-900 placeholder:text-gray-500 focus:border-black focus:ring-1 focus:ring-black"
            />
            <button className="w-full sm:w-auto border-2 rounded-md border-black bg-black text-white hover:bg-white hover:text-black transition-all duration-300 px-8 py-2.5 shadow-md hover:shadow-xl text-sm sm:text-base font-medium">
              Sign Up
            </button>
          </div>
          <div className="text-xs sm:text-sm text-gray-600">
            <p>Note: You can opt-out at any time. See our <span className="underline cursor-pointer hover:text-black">Privacy Policy</span> and <span className="underline cursor-pointer hover:text-black">Terms</span>.</p>
          </div>
        </div>
      </section>
    </>
  );
};
