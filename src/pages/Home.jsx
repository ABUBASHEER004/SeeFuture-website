import SEO from "../components/SEO";
import Hero from "../components/Hero";
import TrustedSection from "../components/TrustedSection";
import Services from "../components/Services";
import WhyChooseUs from "../components/WhyChooseUs";
import Stats from "../components/Stats";
import AboutPreview from "../components/AboutPreview";
import PortfolioPreview from "../components/PortfolioPreview";
import Testimonials from "../components/Testimonials";
import Newsletter from "../components/Newsletter";
import FAQ from "../components/FAQ";

function Home() {
  return <>
    <SEO title="SeeFuture Tech Hub | Digital Products, Software & AI" description="SeeFuture Tech Hub builds modern websites, mobile applications, business software, AI solutions, cybersecurity systems and practical technology training." keywords="SeeFuture Tech Hub, web development, mobile apps, software, AI, cybersecurity, Kaduna Nigeria" />
    <Hero />
    <TrustedSection />
    <Services />
    <WhyChooseUs />

    <section className="sf-section bg-slate-950 text-white">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-5 lg:grid-cols-[1fr_auto] lg:px-8">
        <div>
          <span className="sf-eyebrow bg-white/10 text-cyan-300">Registered business</span>
          <h2 className="mt-5 text-3xl font-black tracking-tight md:text-5xl">A technology partner you can build with.</h2>
          <p className="mt-5 max-w-3xl text-slate-300 leading-8">SEEFUTURE TECH HUB is registered with the Corporate Affairs Commission (CAC) of Nigeria. Registration No. 9680560.</p>
        </div>
        <a href="/cac-certificate.png" target="_blank" rel="noopener noreferrer" className="sf-btn sf-btn-primary whitespace-nowrap">View CAC certificate</a>
      </div>
    </section>

    <Stats />
    <AboutPreview />
    <PortfolioPreview />
    <Testimonials />
    <Newsletter />
    <FAQ />
  </>;
}
export default Home;
