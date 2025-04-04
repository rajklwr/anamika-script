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
      <WhyWorkWithUsSection/>
      <FAQSection />
      <Footer/>
    </main>
  );
}
