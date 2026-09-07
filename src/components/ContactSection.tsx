import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Send,
  MapPin,
  Mail,
  Phone,
  MessageSquare,
  Sparkles,
  Clock,
  ShieldCheck,
  Check,
} from "lucide-react";
import { toast } from "sonner";

const budgetTiers = [
  "₹5,000 – ₹15,000",
  "₹15,000 – ₹35,000",
  "₹35,000 – ₹75,000",
  "₹75,000+ (Enterprise)",
];

const serviceInterests = [
  "Brand Identity",
  "Luxury Packaging",
  "Web & UI/UX",
  "3D CGI & Motion",
  "Visiting Cards & Print",
  "Monthly Retainer",
];

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    timeline: "Standard (3-4 Weeks)",
    message: "",
  });
  const [selectedBudget, setSelectedBudget] = useState(budgetTiers[1]);
  const [selectedServices, setSelectedServices] = useState<string[]>(["Brand Identity"]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const toggleService = (s: string) => {
    setSelectedServices((prev) =>
      prev.includes(s) ? (prev.length > 1 ? prev.filter((item) => item !== s) : prev) : [...prev, s]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("Project Brief Received! 🎉", {
        description: "Our Creative Director will review your requirements and send a customized deck within 6 hours.",
      });
      setFormData({
        name: "",
        email: "",
        company: "",
        timeline: "Standard (3-4 Weeks)",
        message: "",
      });
    }, 1000);
  };

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      "Hello Horizon Graphic Studio! I'm interested in commissioning a design project for my brand."
    );
    window.open(`https://wa.me/919450000000?text=${text}`, "_blank");
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-card relative overflow-hidden border-t border-white/[0.06]">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6" ref={ref}>
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Initiate Partnership</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Let’s Build Something <span className="text-gradient-accent">Iconic Together.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Tell us about your brand vision, product lineup, or market objectives. 
            We respond with a bespoke strategic concept deck within 6 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-12 max-w-6xl mx-auto items-start">
          {/* Left: Studio Information & Direct WhatsApp (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick WhatsApp Card */}
            <div className="p-6 rounded-3xl glass-panel border-primary/30 relative overflow-hidden">
              <div className="flex items-center gap-3.5 mb-3">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-foreground">Direct WhatsApp Line</h4>
                  <p className="text-xs text-muted-foreground">Instant conversation with Creative Lead</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mb-4">
                Prefer rapid mobile messaging? Connect directly with our art direction department.
              </p>
              <button
                type="button"
                onClick={openWhatsApp}
                className="w-full py-3 rounded-xl bg-emerald-500/20 hover:bg-emerald-500/30 text-emerald-300 font-semibold text-xs border border-emerald-500/40 flex items-center justify-center gap-2 transition-colors"
              >
                <span>Chat via WhatsApp</span>
                <MessageSquare className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Studio Locations & Details */}
            <div className="p-6 sm:p-8 rounded-3xl glass-panel border-white/[0.08] space-y-6">
              <h4 className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Studio Physical Presence
              </h4>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-primary">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Varanasi Studio HQ</p>
                  <p className="text-xs text-muted-foreground mt-0.5 leading-relaxed">
                    Maqbool Alam Road Varanasi, UP 221002 India
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Email Inquiries</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    customersupport@svsta.in
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 text-primary">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-sm font-bold text-foreground">Executive Telephone</p>
                  <p className="text-xs text-muted-foreground font-mono mt-0.5">
                    +91-7518077446
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-muted-foreground">
                <Clock className="w-4 h-4 text-primary shrink-0" />
                <span>Mon – Sat: 9:30 AM – 7:30 PM IST (24/7 VIP Retainers)</span>
              </div>
            </div>
          </motion.div>

          {/* Right: Rich Glass Inquiry Form (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="lg:col-span-7 glass-panel p-6 sm:p-10 rounded-3xl border-white/[0.08]"
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Service Modules Multiselect */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                  01 // Select Services You Need:
                </label>
                <div className="flex flex-wrap gap-2">
                  {serviceInterests.map((service) => {
                    const active = selectedServices.includes(service);
                    return (
                      <button
                        type="button"
                        key={service}
                        onClick={() => toggleService(service)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-1.5 ${
                          active
                            ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                            : "glass-pill text-muted-foreground hover:text-white"
                        }`}
                      >
                        {active && <Check className="w-3 h-3" />}
                        <span>{service}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tier Radio Selector */}
              <div>
                <label className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold block mb-3">
                  02 // Anticipated Investment Range:
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetTiers.map((b) => (
                    <button
                      type="button"
                      key={b}
                      onClick={() => setSelectedBudget(b)}
                      className={`p-2.5 rounded-xl text-xs font-mono text-center transition-all ${
                        selectedBudget === b
                          ? "bg-white/15 text-white border border-white/30 font-bold"
                          : "glass-pill text-muted-foreground hover:text-white"
                      }`}
                    >
                      {b}
                    </button>
                  ))}
                </div>
              </div>

              {/* Name & Email Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground font-medium block mb-1.5">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Alexander Wright"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground font-medium block mb-1.5">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="alex@company.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all"
                  />
                </div>
              </div>

              {/* Company & Timeline Row */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="text-xs text-muted-foreground font-medium block mb-1.5">
                    Company / Brand Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Lumina Luxury"
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all"
                  />
                </div>

                <div>
                  <label className="text-xs text-muted-foreground font-medium block mb-1.5">
                    Target Launch Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl glass-input text-sm text-foreground focus:outline-none transition-all"
                  >
                    <option value="Urgent (Under 2 Weeks)">Urgent (Under 2 Weeks)</option>
                    <option value="Standard (3-4 Weeks)">Standard (3-4 Weeks)</option>
                    <option value="Quarterly Rollout (2-3 Months)">Quarterly Rollout (2-3 Months)</option>
                  </select>
                </div>
              </div>

              {/* Message / Brief */}
              <div>
                <label className="text-xs text-muted-foreground font-medium block mb-1.5">
                  Project Brief & Objectives *
                </label>
                <textarea
                  rows={4}
                  required
                  placeholder="Tell us about your brand vision, target demographic, deliverables required, and any inspiration references..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl glass-input text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none transition-all resize-none"
                />
              </div>

              {/* Submit CTA */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-4 rounded-xl glass-button-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.01] transition-transform active:scale-[0.99] disabled:opacity-50"
              >
                {isSubmitting ? (
                  <span>Transmitting Brief to Studio...</span>
                ) : (
                  <>
                    <span>Submit Project Brief</span>
                    <Send className="w-4 h-4" />
                  </>
                )}
              </button>

              <div className="flex items-center justify-center gap-2 text-[11px] text-muted-foreground/80 pt-2">
                <ShieldCheck className="w-4 h-4 text-primary" />
                <span>Strict Non-Disclosure Guarantee. Your intellectual property is protected.</span>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

