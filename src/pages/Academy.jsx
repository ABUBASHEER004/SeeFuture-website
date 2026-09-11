import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { Link } from "react-router-dom";
import { FaCode, FaMobileAlt, FaShieldAlt, FaRobot, FaCloud, FaDatabase, FaArrowRight } from "react-icons/fa";

const courses = [
  [FaCode, "Full Stack Web Development", "24 weeks", "Beginner → Advanced", "Build responsive interfaces, APIs and production-ready web applications."],
  [FaMobileAlt, "Flutter Mobile Development", "16 weeks", "Beginner", "Learn how to design and build cross-platform mobile applications."],
  [FaShieldAlt, "Cybersecurity", "20 weeks", "Beginner", "Build practical security knowledge, safer habits and foundational assessment skills."],
  [FaRobot, "Artificial Intelligence", "24 weeks", "Beginner", "Understand modern AI concepts and turn them into useful projects and workflows."],
  [FaCloud, "Cloud Computing", "24 weeks", "Beginner", "Learn deployment, hosting, infrastructure concepts and cloud-first thinking."],
  [FaDatabase, "Database Management", "16 weeks", "Beginner", "Understand data modeling, queries, application data and reliable storage practices."],
];

function Academy() {
  return <>
    <SEO title="SeeFuture Tech Academy | Practical Technology Training" description="Practical technology training in web development, Flutter, cybersecurity, AI, cloud computing and database management." keywords="SeeFuture Tech Academy, tech training Nigeria, web development course, Flutter, cybersecurity, AI, cloud" />
    <PageHero eyebrow="SeeFuture Tech Academy" title="Learn by building, not just watching." description="Practical, project-oriented training designed to help learners develop useful technology skills and a portfolio they can talk about." action="Ask about enrollment" />

    <section className="sf-section bg-slate-50"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">{courses.map(([Icon,title,duration,level,text])=><article className="sf-card p-7" key={title}><div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={21}/></div><h2 className="mt-6 text-xl font-black">{title}</h2><p className="mt-3 leading-7 text-slate-600">{text}</p><div className="mt-5 grid grid-cols-2 gap-3 text-sm"><div className="rounded-xl bg-slate-50 p-3"><span className="block text-xs font-bold text-slate-400">Duration</span><strong>{duration}</strong></div><div className="rounded-xl bg-slate-50 p-3"><span className="block text-xs font-bold text-slate-400">Level</span><strong>{level}</strong></div></div><Link to="/contact" className="sf-btn sf-btn-primary mt-6 w-full">Ask about this course <FaArrowRight size={11}/></Link></article>)}</div></div></section>

    <section className="sf-section bg-white"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="max-w-3xl"><span className="sf-eyebrow">Learning experience</span><h2 className="mt-5 text-3xl font-black md:text-5xl">A practical path from curiosity to capability.</h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{[["01","Learn","Understand the concepts with clear explanations and guided exercises."],["02","Build","Apply each lesson to projects that grow in complexity."],["03","Present","Finish with work you can demonstrate, discuss and improve."]].map(([n,t,d])=><div className="rounded-2xl border border-slate-200 p-7" key={n}><span className="text-sm font-black text-blue-600">{n}</span><h3 className="mt-4 text-xl font-black">{t}</h3><p className="mt-3 leading-7 text-slate-600">{d}</p></div>)}</div></div></section>

    <section className="sf-section bg-slate-950 text-white"><div className="mx-auto max-w-4xl px-5 text-center lg:px-8"><span className="sf-eyebrow bg-white/10 text-cyan-300">Start learning</span><h2 className="mt-5 text-3xl font-black md:text-5xl">Ready to build your first serious project?</h2><p className="mt-5 leading-8 text-slate-300">Send us a message with the course you are interested in and we will guide you on the next step.</p><Link to="/contact" className="sf-btn sf-btn-primary mt-8">Contact the academy <FaArrowRight size={12}/></Link></div></section>
  </>;
}
export default Academy;
