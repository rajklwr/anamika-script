import { FaWhatsapp } from "react-icons/fa"; // Import the WhatsApp icon
import LandingScreen from "@/components/LandingScreen";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import WhyWorkWithUsSection from "@/components/WhyWorkWithUsSection";
import FAQSection from "@/components/FAQSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#121212",
        color: "#fff",
        overflowX: "hidden",
        minHeight: "100vh",
        margin: 0,
        padding: 10,
      }}
    >
      <LandingScreen />
      <ServicesSection />
      <PortfolioSection />
      <WhyWorkWithUsSection />
      <FAQSection />
      <Footer />

      {/* Floating WhatsApp Icon */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 1000,
        }}
      >
        <a
          href="https://wa.me/+918453905843" // Replace with your WhatsApp number
          target="_blank"
          rel="noopener noreferrer"
        >
          <div
            className="bg-green-500 hover:bg-green-600 animate-bounce  text-white p-4 rounded-full shadow-md transition-all duration-300 ease-in-out flex items-center justify-center"
            style={{ width: "60px", height: "60px" }}
          >
            <FaWhatsapp size={30} />
          </div>
        </a>
      </div>
    </main>
  );
}
