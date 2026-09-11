import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { FaLaptopCode, FaUsers, FaGraduationCap, FaGlobeAfrica, FaArrowRight } from "react-icons/fa";

const benefits = [[FaLaptopCode,"Modern stack","Work with contemporary web, mobile, AI, cloud and security technologies."],[FaUsers,"Team culture","Collaborate with people who care about learning, delivery and useful outcomes."],[FaGraduationCap,"Keep learning","Grow through projects, mentorship, experimentation and continuous improvement."],[FaGlobeAfrica,"Real-world impact","Build technology for businesses, institutions and communities across Africa."]];
const jobs = [
  ["Frontend React Developer","Full time / Remote-friendly","Build accessible, responsive interfaces and reusable components."],
  ["Flutter Mobile Developer","Full time / Remote-friendly","Create polished cross-platform mobile experiences backed by reliable data."],
  ["Cybersecurity Analyst","Full time / Kaduna","Support security reviews, awareness initiatives and practical risk reduction."],
];

function Careers() {
  return <>
    <SEO title="Careers | SeeFuture Tech Hub" description="Explore career opportunities at SeeFuture Tech Hub across software development, mobile applications and cybersecurity." keywords="SeeFuture Tech Hub careers, React developer, Flutter developer, cybersecurity jobs Nigeria" />
    <PageHero eyebrow="Careers" title="Do meaningful technology work with us." description="We are interested in people who are curious, dependable and excited about building useful digital products and helping others grow." action="Send your interest" />

    <section className="sf-section bg-slate-50"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><span className="sf-eyebrow">Why join</span><h2 className="mt-5 text-3xl font-black md:text-5xl">A place to learn while you deliver.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">{benefits.map(([Icon,title,text])=><article className="sf-card p-7" key={title}><Icon className="text-2xl text-blue-600"/><h3 className="mt-5 text-xl font-black">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p></article>)}</div></div></section>

    <section className="sf-section bg-white"><div className="mx-auto max-w-5xl px-5 lg:px-8"><div className="text-center"><span className="sf-eyebrow">Open opportunities</span><h2 className="mt-5 text-3xl font-black md:text-5xl">Roles we are interested in.</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-600">Availability can change. Contact us to confirm the current opening and application process before sending your CV.</p></div><div className="mt-12 space-y-5">{jobs.map(([title,type,text])=><article className="sf-card p-7 md:flex md:items-center md:justify-between md:gap-8" key={title}><div><h3 className="text-xl font-black">{title}</h3><p className="mt-2 text-sm font-bold text-blue-600">{type}</p><p className="mt-3 leading-7 text-slate-600">{text}</p></div><Link to="/contact" className="sf-btn sf-btn-light mt-6 shrink-0 md:mt-0">Apply / enquire <FaArrowRight size={11}/></Link></article>)}</div></div></section>

    <section className="sf-section bg-slate-950 text-white"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><span className="sf-eyebrow bg-white/10 text-cyan-300">Open application</span><h2 className="mt-5 text-3xl font-black md:text-5xl">Don't see your exact role?</h2><p className="mt-5 leading-8 text-slate-300">Tell us what you do, what you are learning and what kind of work you want to contribute to. We can keep your interest in mind for future opportunities.</p><Link to="/contact" className="sf-btn sf-btn-primary mt-8">Contact SeeFuture <FaArrowRight size={12}/></Link></div></section>
  </>;
}
export default Careers;
