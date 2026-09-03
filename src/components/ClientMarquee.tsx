import { motion } from "framer-motion";
import { Sparkles, Award, ShieldCheck, Crown } from "lucide-react";

const clientLogos = [
  { name: "Apex Luxury Automotives", category: "Automotive & Luxury", badge: "Brand Identity" },
  { name: "Lumina Labs AI", category: "DeepTech / Silicon Valley", badge: "Design System" },
  { name: "Kashi Silk Co.", category: "Varanasi Heritage", badge: "Packaging & 3D" },
  { name: "Veda Organics", category: "Luxury Botanicals", badge: "Complete Rebrand" },
  { name: "Zephyr Soundworks", category: "Audio Technology", badge: "Web & Digital" },
  { name: "Aethelgard Estates", category: "Private Real Estate", badge: "Editorial & Print" },
  { name: "Nectar Distilleries", category: "Spirits & Packaging", badge: "Bottle Architecture" },
  { name: "Chronos Haute Horlogerie", category: "Swiss Timepieces", badge: "3D CGI & Motion" },
];

export default function ClientMarquee() {
  return (
    <section className="relative py-12 border-y border-white/[0.06] overflow-hidden bg-background/50 backdrop-blur-md">
      {/* Background glow strip */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-accent/5 to-secondary/5 opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 mb-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-muted-foreground">
            <Sparkles className="w-3.5 h-3.5 text-primary" />
            <span>Trusted By 250+ Market Leaders & Category Creators</span>
          </div>

          <div className="flex items-center gap-6 text-xs text-muted-foreground/80">
            <span className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5 text-gold" /> 15+ International Awards
            </span>
            <span className="flex items-center gap-1.5 hidden sm:flex">
              <ShieldCheck className="w-3.5 h-3.5 text-primary" /> 99.8% On-Time Delivery
            </span>
            <span className="flex items-center gap-1.5">
              <Crown className="w-3.5 h-3.5 text-accent" /> 100% Bespoke Craft
            </span>
          </div>
        </div>
      </div>

      {/* Infinite marquee track */}
      <div className="relative flex overflow-x-hidden select-none mask-fade">
        <div className="flex min-w-full shrink-0 items-center justify-around gap-8 animate-marquee">
          {clientLogos.concat(clientLogos).map((client, index) => (
            <div
              key={`${client.name}-${index}`}
              className="flex items-center gap-4 px-6 py-3 rounded-xl glass-panel hover:border-primary/40 transition-all duration-300 group cursor-pointer"
            >
              <div className="w-2 h-2 rounded-full bg-gradient-to-r from-primary to-accent group-hover:scale-125 transition-transform" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground/90 tracking-wide group-hover:text-white transition-colors">
                  {client.name}
                </span>
                <span className="text-[10px] uppercase font-mono tracking-wider text-muted-foreground/70">
                  {client.category}
                </span>
              </div>
              <span className="text-[9px] uppercase px-2 py-0.5 rounded-full bg-white/[0.06] text-primary/90 font-mono tracking-wider border border-white/5">
                {client.badge}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
