"use client";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-[#121212] to-[#1e1e1e] text-gray-300 py-12 px-6 sm:px-12 md:px-16 lg:px-20 flex flex-col lg:flex-row items-start justify-between gap-12">
      {/* Profile Section */}
      <div className="flex items-center space-x-4">
        <img
          src="/images/profile.png"
          alt="Profile"
          className="rounded-full shadow-lg"
          style={{ width: "20px", height: "20px" }}
        />
        <div>
          <h3 className="text-xl font-bold text-white">Anamika Biswas</h3>
          <p className="text-sm">@anamika_biswas</p>
          <p className="text-sm italic text-gray-400">
            High-Engagement Scripts for Faceless YouTube Automation
          </p>
        </div>
      </div>

      {/* Quick Links Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Quick Links</h3>
        <ul className="space-y-2">
          {[
            "Schedule a Consultation",
            "Standard Service Terms & Agreements",
            "Privacy Policy",
            "Cookies Policy",
            "Terms & Conditions",
            "Sitemap",
          ].map((link, index) => (
            <li key={index}>
              <a
                href="#"
                className="hover:text-white transition"
              >
                {link}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact Section */}
      <div className="space-y-4">
        <h3 className="text-xl font-bold text-white">Contact Us</h3>
        <p className="text-sm">
          Need help or have a question? Feel free to reach out.
        </p>
        <a
          href="mailto:ana.biswasofficial@gmail.com"
          className="text-gray-300 hover:text-white transition"
        >
          ana.biswasofficial@gmail.com
        </a>
      </div>
    </footer>
  );
};

export default Footer;
