import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { FaGlobe, FaMobileAlt, FaShieldAlt, FaRobot, FaCloud, FaGraduationCap, FaChartBar, FaArrowRight } from "react-icons/fa";
import DataAnalyticsSection from "../components/DataAnalyticsSection";

const services = [
  [FaGlobe, "Web & software development", "Responsive websites and business platforms designed around your users, workflows and growth goals.", ["React", "Vite", "Tailwind CSS"]],
  [FaMobileAlt, "Mobile application development", "Cross-platform mobile experiences for services, communities, internal operations and customer-facing products.", ["Flutter", "Dart", "Firebase"]],
  [FaShieldAlt, "Cybersecurity", "Security reviews, awareness, risk reduction and practical protection for digital systems.", ["Security review", "Risk assessment", "Best practices"]],
  [FaRobot, "AI & automation", "Useful automation, intelligent assistants and AI-enabled workflows that reduce repetitive work.", ["AI workflows", "Automation", "Integrations"]],
  [FaCloud, "Cloud solutions", "Deployment, hosting, backups and infrastructure guidance for dependable digital products.", ["Cloud hosting", "Deployment", "Backups"]],
  [FaGraduationCap, "Technology training", "Hands-on learning paths for people building careers in software, AI, cybersecurity and digital technology.", ["Projects", "Mentorship", "Practical labs"]],
  [FaChartBar, "Data analytics & SPSS", "Professional data services covering entry, preparation, coding and recoding, statistical analysis, interpretation and visualization.", ["SPSS", "Statistics", "Reporting"]],
];

function ServicesPage() {
  return <>
    <SEO title="Services | SeeFuture Tech Hub" description="Explore SeeFuture Tech Hub services including web development, mobile apps, cybersecurity, AI, cloud, technology training, data analytics and SPSS statistical analysis." keywords="web development Nigeria, mobile app development, cybersecurity, AI, cloud, tech training, data analysis, SPSS analysis, statistical analysis" />
    <PageHero eyebrow="What we do" title="Digital solutions that are designed to be useful." description="From a polished public website to a custom internal platform, we combine thoughtful design, modern engineering and practical support." />

    <section className="sf-section bg-slate-50"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon,title,text,tags], index) => <article key={title} className="sf-card group p-7"><div className="flex items-center justify-between"><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={21}/></div><span className="text-sm font-black text-slate-200">0{index+1}</span></div><h2 className="mt-7 text-xl font-black text-slate-950">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p><div className="mt-5 flex flex-wrap gap-2">{tags.map(tag=><span key={tag} className="rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600">{tag}</span>)}</div><Link to="/contact" className="mt-7 inline-flex items-center gap-2 text-sm font-bold text-blue-600">Discuss this service <FaArrowRight size={11} className="transition group-hover:translate-x-1"/></Link></article>)}</div></div></section>

    <DataAnalyticsSection detailed />

    <section className="sf-section bg-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><span className="sf-eyebrow">Our process</span><h2 className="mt-5 text-3xl font-black md:text-5xl">Clear from first conversation to launch.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-4">{[["01","Discover","Understand the goal, audience, constraints and success criteria."],["02","Plan","Define scope, priorities, architecture and a practical delivery plan."],["03","Build","Design, develop, test and refine the solution in focused stages."],["04","Support","Launch confidently and keep improving as needs change."]].map(([n,t,d])=><div className="relative rounded-2xl border border-slate-200 p-6" key={n}><span className="text-sm font-black text-blue-600">{n}</span><h3 className="mt-4 text-xl font-black">{t}</h3><p className="mt-3 text-sm leading-7 text-slate-600">{d}</p></div>)}</div></div></section>

    <section className="sf-section bg-slate-950 text-white"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><span className="sf-eyebrow bg-white/10 text-cyan-300">Ready when you are</span><h2 className="mt-5 text-3xl font-black md:text-5xl">Have a problem worth solving?</h2><p className="mx-auto mt-5 max-w-2xl leading-8 text-slate-300">Tell us what you are trying to achieve. We can help shape the right technology approach before development begins.</p><Link to="/contact" className="sf-btn sf-btn-primary mt-8">Start a conversation <FaArrowRight size={12}/></Link></div></section>
  </>;
}
export default ServicesPage;
