import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { FaArrowRight, FaCheckCircle, FaCode, FaShieldAlt, FaBrain, FaChartBar, FaStar } from "react-icons/fa";

const capabilities = [
  [FaCode, "Software & Web"], [FaShieldAlt, "Cybersecurity"], [FaBrain, "AI & Automation"], [FaChartBar, "Data & SPSS"],
];

function Hero() {
  return (
    <section className="sf-shell sf-grid bg-slate-950 text-white">
      <div className="pointer-events-none absolute -left-24 top-20 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl sf-orb" />
      <div className="pointer-events-none absolute right-0 top-0 h-96 w-96 rounded-full bg-cyan-400/15 blur-3xl sf-orb" />
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 py-20 lg:grid-cols-[1.08fr_.92fr] lg:px-8 lg:py-28">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: .7 }}>
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[.12em] text-blue-100 backdrop-blur-md">
            <FaCheckCircle className="text-cyan-300" /> Nigeria-based technology partner
          </span>
          <h1 className="mt-7 max-w-4xl text-5xl font-black leading-[1.03] tracking-[-.045em] md:text-6xl lg:text-7xl">
            We turn ambitious ideas into <span className="sf-gradient-text">digital products.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-8 text-slate-300 md:text-lg">
            SeeFuture Tech Hub combines software engineering, data analytics and digital innovation to help businesses, NGOs, researchers and organizations turn ideas and information into practical results.
          </p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link to="/contact" className="sf-btn sf-btn-primary">Start your project <FaArrowRight size={13} /></Link>
            <Link to="/portfolio" className="sf-btn border border-white/20 bg-white/5 text-white hover:bg-white/10">Explore our work</Link>
          </div>
          <div className="mt-12 grid max-w-2xl gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map(([Icon, text]) => <div key={text} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.04] p-4"><Icon className="text-cyan-300" /><span className="text-sm font-semibold text-slate-200">{text}</span></div>)}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, scale: .94, x: 30 }} animate={{ opacity: 1, scale: 1, x: 0 }} transition={{ duration: .8, delay: .1 }} className="relative mx-auto w-full max-w-[520px]">
          <div className="absolute -inset-8 rounded-[40px] bg-gradient-to-br from-blue-500/20 to-cyan-400/10 blur-2xl" />
          <div className="sf-glass relative overflow-hidden rounded-[32px] border-white/10 bg-white/[.07] p-6 text-white">
            <div className="flex items-center justify-between border-b border-white/10 pb-5"><div><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Digital transformation</p><h2 className="mt-1 text-2xl font-bold">Built for what comes next.</h2></div><FaStar className="text-yellow-300" /></div>
            <div className="relative flex min-h-[320px] items-center justify-center py-8">
              <div className="absolute h-64 w-64 rounded-full border border-cyan-300/20" />
              <div className="absolute h-48 w-48 rounded-full border border-blue-400/20" />
              <img src="/logo.png" alt="SeeFuture Tech Hub" className="sf-float relative z-10 w-48 drop-shadow-[0_25px_50px_rgba(0,0,0,.45)]" />
              <div className="absolute left-3 top-8 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"><span className="block text-xs text-slate-300">Focus</span><strong className="text-sm">Real business value</strong></div>
              <div className="absolute bottom-5 right-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur-md"><span className="block text-xs text-slate-300">Approach</span><strong className="text-sm">Data-driven & scalable</strong></div>
            </div>
            <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-5 text-center"><div><strong className="block text-xl">Web</strong><span className="text-xs text-slate-400">Platforms</span></div><div><strong className="block text-xl">Apps</strong><span className="text-xs text-slate-400">Mobile</span></div><div><strong className="block text-xl">Data</strong><span className="text-xs text-slate-400">Analytics</span></div></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
