import { Link } from "react-router-dom";
import { FaGlobe, FaMobileAlt, FaShieldAlt, FaRobot, FaCloud, FaChalkboardTeacher, FaArrowRight } from "react-icons/fa";

const services = [
  [FaGlobe, "Website Development", "Fast, responsive websites that make your brand credible and easier to discover online."],
  [FaMobileAlt, "Mobile App Development", "Cross-platform Android and iOS apps built around a clear user experience and business goal."],
  [FaShieldAlt, "Cybersecurity", "Practical security assessments and protection strategies that reduce digital risk."],
  [FaRobot, "AI & Automation", "Useful AI systems that automate repetitive work, improve decisions and create better experiences."],
  [FaCloud, "Cloud Solutions", "Deployment, hosting and scalable infrastructure for dependable digital products."],
  [FaChalkboardTeacher, "Tech Training", "Hands-on learning in software development, Flutter, cybersecurity, AI and modern digital skills."],
];

function Services() {
  return <section className="sf-section bg-slate-50">
    <div className="mx-auto max-w-7xl px-5 lg:px-8">
      <div className="max-w-3xl"><span className="sf-eyebrow">What we do</span><h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">Technology services with a purpose.</h2><p className="mt-5 text-lg leading-8 text-slate-600">From your first idea to launch and beyond, we focus on clean execution, useful technology and experiences people enjoy using.</p></div>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {services.map(([Icon, title, text], i) => <article key={title} className="sf-card group p-7">
          <div className="flex items-start justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={21} /></div><span className="text-sm font-black text-slate-200">0{i + 1}</span></div>
          <h3 className="mt-7 text-xl font-extrabold text-slate-950">{title}</h3><p className="mt-3 leading-7 text-slate-600">{text}</p>
          <Link to="/services" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">Learn more <FaArrowRight size={11} className="transition group-hover:translate-x-1" /></Link>
        </article>)}
      </div>
    </div>
  </section>;
}
export default Services;
