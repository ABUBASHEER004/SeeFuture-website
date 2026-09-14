import { Link } from "react-router-dom";
import {
  FaArrowRight,
  FaChartBar,
  FaClipboardCheck,
  FaDatabase,
  FaFileAlt,
  FaProjectDiagram,
  FaTable,
  FaUsers,
} from "react-icons/fa";

const analyticsServices = [
  [FaDatabase, "Data Entry", "Accurate, fast and reliable data entry for surveys, research projects, programmes and business records."],
  [FaTable, "Data Preparation", "Clean, organize, code and prepare datasets so they are ready for meaningful analysis."],
  [FaProjectDiagram, "Coding & Recoding", "Transform raw responses into structured variables and analysis-ready datasets for your specific study."],
  [FaChartBar, "Data Analysis", "Descriptive and inferential analysis including frequency, mean, mode, reliability tests, t-tests, ANOVA, correlation and linear regression."],
  [FaFileAlt, "Data Interpretation", "Turn statistical output into clear findings, practical insights and well-structured reports."],
  [FaClipboardCheck, "Data Visualization", "Present results with clean, easy-to-understand charts and visuals that support better decisions."],
];

const analysisTypes = [
  "Descriptive statistics",
  "Reliability testing",
  "Frequency, mean & mode",
  "Independent / paired t-tests",
  "ANOVA",
  "Correlation analysis",
  "Linear regression",
  "SPSS data processing & reporting",
];

function DataAnalyticsSection({ detailed = false }) {
  return (
    <section className={`sf-section relative overflow-hidden ${detailed ? "bg-slate-50" : "bg-white"}`}>
      <div className="pointer-events-none absolute -right-32 top-10 h-80 w-80 rounded-full bg-cyan-300/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-72 w-72 rounded-full bg-blue-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid items-end gap-8 lg:grid-cols-[1fr_auto]">
          <div className="max-w-4xl">
            <span className="sf-eyebrow">Data solutions & digital innovation</span>
            <h2 className="mt-5 text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              From raw data to <span className="sf-gradient-text">better decisions.</span>
            </h2>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">
              We turn your data into insights and ideas that can drive real impact. From data entry and preparation to statistical analysis, interpretation and visualization, our team helps you make informed decisions with confidence.
            </p>
          </div>
          <div className="hidden rounded-3xl border border-blue-100 bg-slate-950 p-5 text-white shadow-2xl lg:block">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/15 text-cyan-300"><FaChartBar size={22} /></div>
              <div><p className="text-xs font-bold uppercase tracking-[.18em] text-cyan-300">Statistical support</p><p className="mt-1 font-extrabold">SPSS • Analysis • Reporting</p></div>
            </div>
          </div>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {analyticsServices.map(([Icon, title, text], index) => (
            <article key={title} className="sf-card group p-7">
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600"><Icon size={21} /></div>
                <span className="text-sm font-black text-slate-200">0{index + 1}</span>
              </div>
              <h3 className="mt-7 text-xl font-black text-slate-950">{title}</h3>
              <p className="mt-3 leading-7 text-slate-600">{text}</p>
            </article>
          ))}
        </div>

        <div className="mt-8 overflow-hidden rounded-[28px] bg-slate-950 text-white shadow-[0_25px_70px_rgba(15,23,42,.16)]">
          <div className="grid gap-0 lg:grid-cols-[1.05fr_.95fr]">
            <div className="p-8 md:p-10 lg:p-12">
              <span className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-2 text-xs font-black uppercase tracking-[.16em] text-cyan-300"><FaUsers /> Expert data analysts</span>
              <h3 className="mt-5 text-3xl font-black tracking-tight md:text-4xl">Professional SPSS analysis for research, NGOs, students and more.</h3>
              <p className="mt-5 max-w-2xl leading-8 text-slate-300">
                Our data analysts support NGOs, students, researchers, organizations and project teams with SPSS-based data processing and statistical analysis. We can help from dataset cleaning and coding through analysis, interpretation and presentation of results.
              </p>
              <div className="mt-7 flex flex-wrap gap-2">
                {analysisTypes.map((item) => <span key={item} className="rounded-full border border-white/10 bg-white/[.06] px-3 py-2 text-xs font-bold text-slate-200">{item}</span>)}
              </div>
              <Link to="/contact" className="sf-btn sf-btn-primary mt-8">Discuss your data project <FaArrowRight size={12} /></Link>
            </div>
            <div className="relative flex min-h-[320px] items-center justify-center overflow-hidden border-t border-white/10 bg-gradient-to-br from-blue-700/30 via-slate-950 to-cyan-500/10 p-8 lg:border-l lg:border-t-0">
              <div className="absolute h-64 w-64 rounded-full border border-cyan-300/15" />
              <div className="absolute h-48 w-48 rounded-full border border-blue-400/20" />
              <div className="relative z-10 w-full max-w-sm rounded-3xl border border-white/10 bg-white/[.07] p-6 backdrop-blur-xl">
                <div className="flex items-center justify-between"><span className="text-xs font-bold uppercase tracking-[.18em] text-slate-400">Analysis workflow</span><FaChartBar className="text-cyan-300" /></div>
                <div className="mt-6 space-y-3">
                  {["Clean & prepare dataset", "Run SPSS analysis", "Interpret findings", "Present decision-ready results"].map((step, index) => (
                    <div key={step} className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/[.05] p-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-cyan-400/15 text-xs font-black text-cyan-300">0{index + 1}</span>
                      <span className="text-sm font-semibold text-slate-200">{step}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {!detailed && (
          <div className="mt-7 grid gap-3 sm:grid-cols-4">
            {["Accuracy", "On-time delivery", "Confidentiality", "Expert support"].map((item) => <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4 text-center text-sm font-extrabold text-slate-700"><span className="mr-2 inline-block h-2 w-2 rounded-full bg-cyan-400" />{item}</div>)}
          </div>
        )}
      </div>
    </section>
  );
}

export default DataAnalyticsSection;
