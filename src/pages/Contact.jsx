import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaArrowRight, FaCheckCircle } from "react-icons/fa";

const fieldClass = "w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 outline-none transition placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10";

function Contact() {
  const form = useRef();
  const [loading,setLoading] = useState(false);
  const [status,setStatus] = useState("");
  const [statusType,setStatusType] = useState("success");
  const sendEmail = (e) => {
    e.preventDefault(); setLoading(true); setStatus("");
    const serviceId=import.meta.env.VITE_EMAILJS_SERVICE_ID; const templateId=import.meta.env.VITE_EMAILJS_TEMPLATE_ID; const publicKey=import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if(!serviceId || !templateId || !publicKey){ setStatusType("error"); setStatus("The online form is not configured yet. Please email seefuture004@gmail.com directly."); setLoading(false); return; }
    emailjs.sendForm(serviceId,templateId,form.current,publicKey).then(()=>{setStatusType("success");setStatus("Thanks! Your message has been sent. We will get back to you soon.");form.current.reset();}).catch((error)=>{console.error(error);setStatusType("error");setStatus("We could not send the form right now. Please email seefuture004@gmail.com directly.");}).finally(()=>setLoading(false));
  };
  return <>
    <SEO title="Contact SeeFuture Tech Hub" description="Contact SeeFuture Tech Hub about websites, software, mobile apps, AI, cybersecurity, cloud and technology training." keywords="contact SeeFuture Tech Hub, technology company Nigeria, web development" />
    <PageHero eyebrow="Let's build something useful" title="Tell us what you are trying to achieve." description="Share the goal, challenge or idea. We will help you understand the next practical step." action="Email us directly" actionTo="mailto:seefuture004@gmail.com" />

    <section className="sf-section bg-slate-50"><div className="mx-auto grid max-w-7xl gap-8 px-5 lg:grid-cols-[1.05fr_.95fr] lg:px-8">
      <div className="sf-card p-7 md:p-10"><span className="sf-eyebrow">Project enquiry</span><h2 className="mt-5 text-3xl font-black">Start with a message.</h2><p className="mt-3 leading-7 text-slate-600">Give us enough context to understand what you need. We can discuss scope, timing and the right technical approach afterward.</p><form ref={form} onSubmit={sendEmail} className="mt-8 grid gap-4"><input type="hidden" name="to_email" value="seefuture004@gmail.com"/><input name="from_name" required placeholder="Full name" className={fieldClass}/><div className="grid gap-4 sm:grid-cols-2"><input type="email" name="from_email" required placeholder="Email address" className={fieldClass}/><input type="tel" name="phone" placeholder="Phone number" className={fieldClass}/></div><input name="company" placeholder="Company / organization" className={fieldClass}/><select name="subject" required defaultValue="" className={fieldClass}><option value="" disabled>Select enquiry type</option><option>Project Request</option><option>General Enquiry</option><option>Job Application</option><option>Training Enquiry</option></select><textarea name="message" required rows="6" placeholder="Tell us about your project or question..." className={`${fieldClass} resize-none`}/><button disabled={loading} className="sf-btn sf-btn-primary w-full disabled:cursor-not-allowed disabled:opacity-60">{loading?"Sending...":"Send message"}{!loading&&<FaArrowRight size={12}/>}</button>{status&&<div role="status" className={`rounded-2xl p-4 text-sm font-semibold ${statusType==="success"?"bg-emerald-50 text-emerald-800":"bg-rose-50 text-rose-800"}`}>{status}</div>}</form></div>
      <div><div className="rounded-3xl bg-slate-950 p-8 text-white md:p-10"><span className="sf-eyebrow bg-white/10 text-cyan-300">Contact details</span><h2 className="mt-5 text-3xl font-black">Prefer a direct conversation?</h2><p className="mt-4 leading-7 text-slate-300">Use any of the channels below and tell us what you need help with.</p><div className="mt-8 grid gap-5"><a href="mailto:seefuture004@gmail.com" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><FaEnvelope className="mt-1 text-cyan-300"/><span><strong className="block">Email</strong><span className="text-sm text-slate-400">seefuture004@gmail.com</span></span></a><a href="tel:+2348130262575" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><FaPhone className="mt-1 text-cyan-300"/><span><strong className="block">Phone</strong><span className="text-sm text-slate-400">+234 813 026 2575</span></span></a><div className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><FaMapMarkerAlt className="mt-1 text-cyan-300"/><span><strong className="block">Office</strong><span className="text-sm text-slate-400">Kaduna North, Kaduna State, Nigeria</span></span></div><a href="https://www.facebook.com/GidaServ" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"><FaFacebook className="mt-1 text-cyan-300"/><span><strong className="block">Facebook</strong><span className="text-sm text-slate-400">@Gida Serv</span></span></a></div></div><div className="sf-card mt-6 p-7"><h3 className="text-xl font-black">Office hours</h3><div className="mt-4 grid gap-2 text-sm leading-7 text-slate-600"><p><strong>Mon – Fri:</strong> 8:00 AM – 5:00 PM</p><p><strong>Saturday:</strong> 9:00 AM – 2:00 PM</p><p><strong>Sunday:</strong> Closed</p></div></div></div>
    </div></section>
    <section className="pb-24"><div className="mx-auto max-w-7xl px-5 lg:px-8"><div className="overflow-hidden rounded-3xl shadow-xl"><iframe title="SeeFuture Tech Hub location in Kaduna" src="https://www.google.com/maps?q=Kaduna,Nigeria&output=embed" className="h-[380px] w-full border-0" loading="lazy" allowFullScreen/></div></div></section>
  </>;
}
export default Contact;
