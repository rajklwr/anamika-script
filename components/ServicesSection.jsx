import UnderlineHeader from "./UnderlineHeader";

const ServicesSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16">
      <UnderlineHeader title="Our Services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bronze Package */}
        <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-yellow-500">
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-8 text-center">
            <h3 className="text-3xl font-extrabold text-yellow-300 mb-4">
              Bronze
            </h3>
            <p className="text-md uppercase tracking-wide text-gray-400 mb-4">
              (8-10 MIN)
            </p>
            <ul className="text-left text-md text-gray-300 space-y-3">
              <li>✔️ A well-researched script that's 100% human-generated</li>
              <li>
                ✔️ Sources provided, including articles, YouTube videos, and
                more
              </li>
              <li>✔️ Word Count: 1400-1500</li>
            </ul>
            <p className="text-5xl font-semibold text-yellow-400 mt-6 mb-6">
              $14
            </p>
          </div>
          <div className="bg-yellow-500 h-2"></div>
        </div>

        {/* Platinum Package */}
        <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-yellow-500">
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-8 text-center">
            <h3 className="text-3xl font-extrabold text-green-400 mb-4">
              Platinum
            </h3>
            <p className="text-md uppercase tracking-wide text-gray-400 mb-4">
              (8-10 MIN)
            </p>
            <ul className="text-left text-md text-gray-300 space-y-3">
              <li>✔️ Everything in the Gold Package</li>
              <li>
                ✔️ A free 500-word sample script on a topic of your choice!
              </li>
              <li>
                ✔️ Important words/sentences highlighted for editors & audience
                engagement
              </li>
            </ul>
            <p className="text-5xl font-semibold text-green-400 mt-6 mb-6">
              $17
            </p>
          </div>
          <div className="bg-green-500 h-2"></div>
        </div>

        {/* Gold Package */}
        <div className="rounded-lg shadow-xl overflow-hidden transform hover:scale-105 transition-all duration-300 border-2 border-yellow-500 flex flex-col h-full">
          <div className="bg-gradient-to-b from-gray-700 to-gray-900 p-8 text-center flex-grow">
            <h3 className="text-3xl font-extrabold text-red-400 mb-4">Gold</h3>
            <p className="text-md uppercase tracking-wide text-gray-400 mb-4">
              (8-10 MIN)
            </p>
            <ul className="text-left text-md text-gray-300 space-y-3">
              <li>✔️ Everything in the Gold Package</li>
              <li>
                ✔️ Made with solid hook & retention strategy to engage viewers
              </li>
              <li>✔️ Better Viewer Retention & Storytelling</li>
            </ul>
            <p className="text-5xl font-semibold text-red-400 mt-6 mb-6">
              $20
            </p>
          </div>
          <div className="bg-red-500 h-2 w-full"></div>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
