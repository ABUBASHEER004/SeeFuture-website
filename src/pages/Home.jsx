import Hero from "../components/Hero";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import TrustedSection from "../components/TrustedSection";
import FAQ from "../components/FAQ";

function Home() {
  return (
    <>
      <Hero />
      <TrustedSection />
      <Services />
      <WhyChooseUs />
      <Stats />
      <AboutPreview />
      <PortfolioPreview />
      <Testimonials />
      <Newsletter />
      <FAQ />
    </>
  );
}

export default Home;
