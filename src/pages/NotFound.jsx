import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function NotFound() { return <section className="sf-shell flex min-h-[70vh] items-center bg-slate-950 text-white"><div className="mx-auto max-w-3xl px-5 py-24 text-center lg:px-8"><span className="text-sm font-black uppercase tracking-[.25em] text-cyan-300">404 error</span><h1 className="mt-5 text-7xl font-black tracking-[-.06em] md:text-9xl">404</h1><h2 className="mt-4 text-2xl font-black md:text-3xl">That page does not exist.</h2><p className="mx-auto mt-4 max-w-xl leading-7 text-slate-400">The address may have changed or the page may have been removed. Let's get you back to somewhere useful.</p><Link to="/" className="sf-btn sf-btn-primary mt-8"><FaArrowLeft size={12}/> Back home</Link></div></section>; }
export default NotFound;
