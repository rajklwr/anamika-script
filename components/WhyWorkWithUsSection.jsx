"use client";
const WhyWorkWithUsSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16">
      {/* Header */}
      <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-8 tracking-wide">
        WHY WORK WITH US? 🙌
      </h2>

      {/* Content */}
      <div className="flex flex-col items-center text-center space-y-8">
        {/* Description */}
        <p className="text-lg leading-relaxed max-w-3xl">
          Unlike AI-generated scripts or low-quality freelancers, I take the
          time to research, structure, and write scripts that sound natural and
          engaging. Here's why creators trust my service:
        </p>

        {/* Features */}
        <div className="flex flex-wrap justify-center gap-8">
          {/* Feature 1 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 w-full md:w-1/2 lg:w-1/3 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-blue-500">🎯 Custom Requests? No Problem!</h3>
            <p className="text-base text-gray-300">
              Need a script in a specific format or style? Want something outside
              the usual topics? Just ask! Your vision is our mission.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 w-full md:w-1/2 lg:w-1/3 transform hover:scale-105 hover:shadow-2xl transition-all duration-300">
            <h3 className="text-2xl font-bold mb-4 text-green-500">🚀 Top-notch Quality Guaranteed</h3>
            <p className="text-base text-gray-300">
              Meticulous research and engaging storytelling ensure your audience stays hooked.
            </p>
          </div>
        </div>

        {/* Get Started Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg shadow-md transition-transform transform hover:scale-110 duration-300 font-bold tracking-wide"
                  onClick={() => window.location.href = "https://wa.me/+918453905843"}
        >
          Get Started 🚀
        </button>
      </div>
    </div>
  );
};

export default WhyWorkWithUsSection;
