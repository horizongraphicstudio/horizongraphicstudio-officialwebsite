import { useState } from "react";
import { Calculator, Check, ArrowRight, Sparkles, Clock, ShieldAlert } from "lucide-react";

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  days: number;
  desc: string;
}

const serviceOptions: ServiceOption[] = [
  {
    id: "identity",
    name: "Brand Identity Architecture",
    basePrice: 4999,
    days: 6,
    desc: "Logo mark (3 concepts), typography rules, color system, and vector source files.",
  },
  {
    id: "packaging",
    name: "Luxury Packaging & Dielines",
    basePrice: 5999,
    days: 7,
    desc: "Bespoke box dielines, label wraps, foil specs, and print-ready files.",
  },
  {
    id: "web",
    name: "Digital Flagship UI/UX",
    basePrice: 8999,
    days: 10,
    desc: "Custom high-converting dark glass web design & mobile responsive layouts.",
  },
  {
    id: "motion",
    name: "3D CGI & Social Reel Video",
    basePrice: 4499,
    days: 5,
    desc: "Photorealistic 3D product renders, video loops, and Instagram reel animations.",
  },
  {
    id: "print",
    name: "Visiting Cards & Print Suite",
    basePrice: 1999,
    days: 3,
    desc: "Luxury visiting cards, letterheads, envelopes, and flyer templates.",
  },
];

const timelineTiers = [
  { label: "Standard Sprint (Recommended)", multiplier: 1.0, bonus: "Highest creative iteration depth" },
  { label: "Priority Expedited (-30% Days)", multiplier: 1.25, bonus: "Dedicated art director round-the-clock" },
  { label: "Relaxed Milestone (+20% Days)", multiplier: 0.95, bonus: "Budget-friendly phased rollout" },
];

export default function ProjectEstimator() {
  const [selectedServices, setSelectedServices] = useState<string[]>(["identity", "packaging"]);
  const [timelineIndex, setTimelineIndex] = useState<number>(0);

  const toggleService = (id: string) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? (prev.length > 1 ? prev.filter((s) => s !== id) : prev) : [...prev, id]
    );
  };

  // Calculate totals
  const rawTotal = selectedServices.reduce((sum, sId) => {
    const s = serviceOptions.find((item) => item.id === sId);
    return sum + (s ? s.basePrice : 0);
  }, 0);

  const rawDays = selectedServices.reduce((sum, sId) => {
    const s = serviceOptions.find((item) => item.id === sId);
    return sum + (s ? s.days : 0);
  }, 0);

  const multiplier = timelineTiers[timelineIndex].multiplier;
  const estimatedPrice = Math.round(rawTotal * multiplier);
  const estimatedDays = Math.max(7, Math.round((rawDays * 0.7) * (timelineIndex === 1 ? 0.7 : timelineIndex === 2 ? 1.2 : 1)));

  return (
    <section id="estimator" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>Real-Time Investment Planner</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Scope & <span className="text-gradient-accent">Budget Calculator</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Transparent pricing without agency smoke and mirrors. Customize your project scope to receive 
            an instant ballpark investment range and projected delivery schedule.
          </p>
        </div>

        {/* Interactive Estimator Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-6xl mx-auto items-start">
          {/* Left: Scope Selection (7 Cols) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-3xl space-y-6 border-white/[0.08]">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-1">
                01 // Select Desired Creative Modules
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                Choose the deliverables required for your brand launch or overhaul:
              </p>

              <div className="space-y-3">
                {serviceOptions.map((service) => {
                  const isChecked = selectedServices.includes(service.id);
                  return (
                    <div
                      key={service.id}
                      onClick={() => toggleService(service.id)}
                      className={`p-4 rounded-2xl border transition-all cursor-pointer flex items-center justify-between gap-4 ${
                        isChecked
                          ? "bg-primary/[0.08] border-primary/40 shadow-md shadow-primary/10"
                          : "bg-white/[0.02] border-white/[0.06] hover:border-white/20"
                      }`}
                    >
                      <div className="flex items-start gap-3">
                        <div
                          className={`w-5 h-5 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-colors ${
                            isChecked ? "bg-primary text-primary-foreground" : "border border-white/20"
                          }`}
                        >
                          {isChecked && <Check className="w-3.5 h-3.5" />}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-foreground">{service.name}</h4>
                          <p className="text-xs text-muted-foreground">{service.desc}</p>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-semibold text-primary shrink-0">
                        +₹{service.basePrice.toLocaleString("en-IN")}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Timeline Speed Selector */}
            <div className="pt-6 border-t border-white/[0.08]">
              <h3 className="text-lg font-bold text-foreground mb-1">
                02 // Select Execution Speed
              </h3>
              <p className="text-xs text-muted-foreground mb-4">
                How fast do you need the brand assets ready for production?
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {timelineTiers.map((tier, idx) => (
                  <button
                    key={tier.label}
                    onClick={() => setTimelineIndex(idx)}
                    className={`p-3.5 rounded-xl text-left border transition-all ${
                      timelineIndex === idx
                        ? "bg-white/10 border-primary text-white shadow-lg"
                        : "glass-pill text-muted-foreground border-white/5 hover:text-white"
                    }`}
                  >
                    <p className="text-xs font-bold mb-1 text-foreground">{tier.label.split(" ")[0]} Speed</p>
                    <p className="text-[10px] text-muted-foreground leading-tight">{tier.bonus}</p>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Real-time Output & Estimate Card (5 Cols) */}
          <div className="lg:col-span-5 glass-modal p-8 rounded-3xl border-primary/30 relative overflow-hidden shadow-2xl sticky top-28">
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/25 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold">
                Live Investment Quote
              </span>
              <span className="text-[10px] font-mono uppercase px-2.5 py-0.5 rounded-full bg-primary/20 text-primary border border-primary/30">
                Fixed-Scope Guarantee
              </span>
            </div>

            {/* Estimated Price Display */}
            <div className="mb-6">
              <span className="text-xs text-muted-foreground font-mono">Estimated Investment Range:</span>
              <div className="text-4xl sm:text-5xl font-extrabold text-foreground tracking-tight mt-1 mb-2">
                ₹{estimatedPrice.toLocaleString("en-IN")}{" "}
                <span className="text-xs font-normal text-muted-foreground font-mono">INR (Flat Sprint)</span>
              </div>
              <p className="text-xs text-primary font-mono flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> Projected Turnaround: {estimatedDays} Business Days
              </p>
            </div>

            {/* Included Value Points */}
            <div className="p-4 rounded-2xl bg-black/40 border border-white/[0.08] mb-6 space-y-2">
              <p className="text-[11px] font-mono text-muted-foreground uppercase tracking-wider font-semibold">
                What’s Guaranteed in this Quote:
              </p>
              <div className="flex items-center gap-2 text-xs text-foreground/90">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>Full commercial IP & copyright ownership</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/90">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>All source vector formats (.AI, .SVG, .EPS, .PDF)</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/90">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>2 Comprehensive rounds of aesthetic revision</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-foreground/90">
                <Check className="w-3.5 h-3.5 text-primary" />
                <span>Direct Slack/WhatsApp creative director access</span>
              </div>
            </div>

            {/* Action Button */}
            <a
              href={`#contact?scope=${selectedServices.join(",")}&est=${estimatedPrice}`}
              className="w-full py-4 rounded-xl glass-button-primary text-white font-semibold text-sm flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform active:scale-[0.98]"
            >
              <span>Lock in This Estimate & Scope</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <p className="text-[10px] text-center text-muted-foreground mt-4">
              *Estimates are binding for 14 days upon formal proposal submission.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
