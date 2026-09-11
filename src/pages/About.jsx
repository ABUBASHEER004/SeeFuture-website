import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaBullseye, FaEye, FaShieldAlt, FaLightbulb, FaHandshake } from "react-icons/fa";

const values = [
  [FaLightbulb, "Innovation", "We look for practical, modern ways to solve real problems."],
  [FaShieldAlt, "Integrity", "We communicate clearly, protect client trust and take ownership of our work."],
  [FaHandshake, "Partnership", "We work alongside clients rather than simply handing over software."],
  [FaCheckCircle, "Quality", "We care about usability, maintainability, performance and security."],
];

function About() {
  return (
    <>
      <SEO title="About SeeFuture Tech Hub" description="Learn about SeeFuture Tech Hub, our mission, vision, values and technology capabilities." keywords="SeeFuture Tech Hub, technology company Nigeria, software development, digital transformation" />
      <PageHero
        eyebrow="About SeeFuture Tech Hub"
        title="Technology built around people, problems and possibilities."
        description="We help businesses, institutions, startups and professionals turn ideas into useful digital products, secure systems and practical technology capabilities."
        action="Talk to our team"
      />

      <section className="sf-section bg-white">
        <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 lg:grid-cols-[.85fr_1.15fr] lg:px-8">
          <div className="sf-card sf-grid relative flex min-h-[380px] items-center justify-center overflow-hidden bg-slate-950 p-10">
            <div className="absolute h-72 w-72 rounded-full border border-cyan-400/20" />
            <div className="absolute h-52 w-52 rounded-full border border-blue-400/20" />
            <img src="/logo.png" alt="SeeFuture Tech Hub" className="relative z-10 w-56 drop-shadow-2xl" />
          </div>
          <div>
            <span className="sf-eyebrow">Who we are</span>
            <h2 className="mt-5 text-3xl font-black tracking-tight text-slate-950 md:text-5xl">A technology hub focused on useful outcomes.</h2>
            <p className="mt-6 text-lg leading-8 text-slate-600">SeeFuture Tech Hub is a forward-looking Nigerian technology company delivering software, websites, mobile applications, cybersecurity, AI, cloud and technology training.</p>
            <p className="mt-5 leading-8 text-slate-600">Our approach is simple: understand the problem, design the right solution, build it carefully and stay available after launch.</p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {["Business software", "Modern websites", "Mobile applications", "AI & automation", "Cybersecurity", "Technology training"].map((item) => <div key={item} className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 font-semibold text-slate-700"><FaCheckCircle className="text-blue-600" />{item}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section className="sf-section bg-slate-50">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2">
            <article className="sf-card p-8 md:p-10"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><FaBullseye size={23} /></div><h2 className="mt-7 text-2xl font-black text-slate-950">Our mission</h2><p className="mt-4 leading-8 text-slate-600">To make reliable, secure and affordable technology more accessible to businesses, organizations and communities.</p></article>
            <article className="sf-card p-8 md:p-10"><div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-50 text-cyan-600"><FaEye size={23} /></div><h2 className="mt-7 text-2xl font-black text-slate-950">Our vision</h2><p className="mt-4 leading-8 text-slate-600">To grow into a trusted African technology partner known for practical innovation, excellent delivery and lasting client relationships.</p></article>
          </div>
        </div>
      </section>

      <section className="sf-section bg-white">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="max-w-3xl"><span className="sf-eyebrow">How we think</span><h2 className="mt-5 text-3xl font-black text-slate-950 md:text-5xl">Values that show up in the work.</h2></div>
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{values.map(([Icon, title, text]) => <article className="sf-card p-7" key={title}><Icon className="text-2xl text-blue-600" /><h3 className="mt-5 text-xl font-extrabold">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div>
        </div>
      </section>

      <section className="sf-section bg-slate-950 text-white">
        <div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1fr_auto] lg:items-center lg:px-8"><div><span className="sf-eyebrow bg-white/10 text-cyan-300">Registered business</span><h2 className="mt-5 text-3xl font-black md:text-4xl">SEEFUTURE TECH HUB</h2><p className="mt-3 text-slate-300">Corporate Affairs Commission registration number: 9680560.</p></div><a className="sf-btn sf-btn-light" href="/cac-certificate.png" target="_blank" rel="noopener noreferrer">View CAC certificate</a></div>
      </section>
    </>
  );
}
export default About;
