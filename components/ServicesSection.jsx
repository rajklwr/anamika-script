import UnderlineHeader from "./UnderlineHeader";

const ServicesSection = () => {
  return (
    <div className="min-h-screen w-full bg-[#121212] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16">
      {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
        Script Packages
      </h2> */}
      <UnderlineHeader title="Services" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Bronze Package */}
        <div className="bg-[#333] rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Bronze (8-10 MIN)</h3>
          <p className="text-lg mb-4 font-semibold">$14 per script</p>
          <ul className="text-sm space-y-2 mb-4">
            <li>✔️ A well-researched script that's 100% human-generated</li>
            <li>✔️ Sources provided, including articles, YouTube videos, and more</li>
            <li>✔️ Word Count: 1400-1500</li>
          </ul>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300">
            Choose Bronze
          </button>
        </div>

        {/* Platinum Package */}
        <div className="bg-[#444] rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Platinum (8-10 MIN)</h3>
          <p className="text-lg mb-4 font-semibold">$17 per script</p>
          <ul className="text-sm space-y-2 mb-4">
            <li>✔️ Everything in the Gold Package</li>
            <li>✔️ A free 500-word sample script on a topic of your choice!</li>
            <li>✔️ Important words/sentences highlighted for editors & audience engagement</li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300">
            Choose Platinum
          </button>
        </div>

        {/* Gold Package */}
        <div className="bg-[#555] rounded-lg shadow-lg p-8 flex flex-col items-center text-center">
          <h3 className="text-2xl font-bold mb-4">Gold (8-10 MIN)</h3>
          <p className="text-lg mb-4 font-semibold">$20 per script</p>
          <ul className="text-sm space-y-2 mb-4">
            <li>✔️ Everything in the Gold Package</li>
            <li>✔️ Made with solid hook & retention strategy to engage viewers</li>
            <li>✔️ Better Viewer Retention & Storytelling</li>
          </ul>
          <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-md shadow-md transition-all duration-300">
            Choose Gold
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
