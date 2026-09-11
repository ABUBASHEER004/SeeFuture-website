import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { FaSearch, FaCalendarAlt, FaArrowRight } from "react-icons/fa";

const posts = [
  [1,"Why Every Business Needs a Professional Website in 2026","Web Development","July 14, 2026","/blog/web-development.jpg","A professional website can build trust, clarify your offer and make it easier for customers to take the next step."],
  [2,"The Future of Artificial Intelligence in Africa","Artificial Intelligence","July 12, 2026","/blog/ai.jpg","AI is creating new opportunities for education, business operations, customer service and digital products across Africa."],
  [3,"Top Cybersecurity Tips for Small Businesses","Cybersecurity","July 10, 2026","/blog/cybersecurity.jpg","Simple security habits can reduce avoidable risk. Here are practical areas every small business should review."],
  [4,"Flutter vs React Native: Which Should You Choose?","Mobile Development","July 8, 2026","/blog/flutter.jpg","A practical comparison of two popular cross-platform approaches and the questions that should guide your decision."],
];

function Blog() {
  const [search,setSearch] = useState("");
  const filtered = useMemo(() => posts.filter(p => `${p[1]} ${p[2]}`.toLowerCase().includes(search.toLowerCase())), [search]);
  return <>
    <SEO title="Technology Blog | SeeFuture Tech Hub" description="Technology insights from SeeFuture Tech Hub covering web development, AI, cybersecurity and mobile applications." keywords="technology blog Nigeria, web development, AI, cybersecurity, Flutter" />
    <PageHero eyebrow="Insights & ideas" title="Technology explained with a practical point of view." description="Useful articles for business owners, learners and teams making decisions about digital products and technology." action="Contact the team" />

    <section className="border-b border-slate-200 bg-white py-6"><div className="mx-auto max-w-4xl px-5 lg:px-8"><label className="relative block"><FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400"/><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search articles by title or topic..." className="w-full rounded-2xl border border-slate-200 bg-slate-50 py-4 pl-11 pr-4 outline-none transition focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10"/></label></div></section>

    <section className="sf-section bg-slate-50"><div className="mx-auto max-w-7xl px-5 lg:px-8">{filtered.length===0 ? <div className="rounded-3xl border border-dashed border-slate-300 bg-white p-12 text-center"><h2 className="text-2xl font-black">No matching articles</h2><p className="mt-3 text-slate-600">Try another keyword.</p></div> : <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">{filtered.map(([id,title,category,date,image,excerpt],i)=><article className={`sf-card overflow-hidden ${i===0 ? "md:col-span-2 lg:col-span-2" : ""}`} key={id}><div className={`overflow-hidden ${i===0?"h-64":"h-48"}`}><img src={image} alt="" className="h-full w-full object-cover transition duration-500 hover:scale-105"/></div><div className="p-7"><span className="sf-eyebrow">{category}</span><h2 className={`${i===0?"text-2xl md:text-3xl":"text-xl"} mt-5 font-black leading-tight`}>{title}</h2><div className="mt-4 flex items-center gap-2 text-sm text-slate-500"><FaCalendarAlt/>{date}</div><p className="mt-4 leading-7 text-slate-600">{excerpt}</p><Link to="/contact" className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-blue-600">Discuss this topic <FaArrowRight size={11}/></Link></div></article>)}</div>}</div></section>
  </>;
}
export default Blog;
