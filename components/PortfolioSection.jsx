"use client";
import UnderlineHeader from "./UnderlineHeader";

const PortfolioSection = () => {
    return (<div className="min-h-screen w-full bg-[#121212] text-white px-6 sm:px-12 md:px-16 lg:px-20 py-16">
        {/* <h2 className="text-4xl sm:text-5xl font-extrabold text-center mb-12">
          Portfolio & Samples
        </h2> */}
        <UnderlineHeader title={"Portfolio & Samples"} />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {/* Sample 1 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          onClick={() => window.location.href = "https://www.youtube.com/@elonmuskevolution/videos"}
          >
            <img
              src="/images/sample-1.png"
              alt="ELON MUSK EVOLUTION"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">ELON MUSK EVOLUTION</h3>
          </div>
  
          {/* Sample 2 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          onClick={() => window.location.href = "https://www.youtube.com/@FormulaNewsToday"}
          >
            <img
              src="/images/sample-2.png"
              alt="FORMULA NEWS TODAY"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">FORMULA NEWS TODAY</h3>
          </div>
  
          {/* Sample 3 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          onClick={() => window.location.href = "https://www.youtube.com/@naturediscoveriesyt/videos"}
          >
            <img
              src="/images/sample-3.png"
              alt="NATURE DISCOVERIES"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">NATURE DISCOVERIES</h3>
          </div>
  
          {/* Sample 4 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          onClick={() => window.location.href = "https://www.youtube.com/@UKRoyalVibes-v8c"}
          >
            <img
              src="/images/sample-4.png"
              alt="UK ROYAL VIBES"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">UK ROYAL VIBES</h3>
          </div>
  
          {/* Sample 5 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          onClick={() => window.location.href = "https://www.youtube.com/@hollywooduncoveredyt"}
          >
            <img
              src="/images/sample-5.png"
              alt="HOLLYWOOD UNCOVERED"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">HOLLYWOOD UNCOVERED</h3>
          </div>
  
          {/* Sample 6 */}
          <div className="bg-[#1E1E1E] rounded-lg shadow-lg p-8 flex flex-col items-center text-center"
          onClick={() => window.location.href = "https://www.youtube.com/@nascarzone3646"}
          >
            <img
              src="/images/sample-6.png"
              alt="NASCAR ZONE"
              className="w-24 h-24 mb-4"
            />
            <h3 className="text-lg font-semibold">NASCAR ZONE</h3>
          </div>
        </div>
        <p className="text-sm mt-12 text-center">
          NOTE: Due to our commitment to client privacy and security, we are
          unable to share other channels. If you require proof of the mentioned
          channels, we can provide sample scripts upon request.
        </p>
      </div>
    );
  };
  
  export default PortfolioSection;
  