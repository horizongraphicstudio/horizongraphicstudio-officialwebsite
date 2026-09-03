import { useState } from "react";
import { motion } from "framer-motion";
import {
  Layers,
  Sparkles,
  Zap,
  Globe2,
  Trophy,
  Palette,
  Check,
  ArrowUpRight,
  ShieldCheck,
  Copy,
} from "lucide-react";
import { toast } from "sonner";

const palettes = [
  {
    name: "Horizon Signature",
    tag: "Official Logo Palette (Gold & Azure)",
    colors: ["#e5c158", "#00b4d8", "#0284c7", "#070d18"],
  },
  {
    name: "Champagne Luxury",
    tag: "Faceted Gold & Brass",
    colors: ["#fef08a", "#e5c158", "#d4af37", "#13243d"],
  },
  {
    name: "Ocean Wave Azure",
    tag: "Fluid Marine Cyan",
    colors: ["#38bdf8", "#00b4d8", "#0369a1", "#081020"],
  },
  {
    name: "Obsidian Slate",
    tag: "Editorial & Architecture",
    colors: ["#ffffff", "#cbd5e1", "#475569", "#090d16"],
  },
];

const capabilityTabs = [
  {
    id: "identity",
    title: "Brand Systems",
    desc: "Complete visual rulebooks, vector precision marks, and typography hierarchies built for 50-year longevity.",
    specs: ["Golden Ratio Math", "Dynamic SVG Masters", "Pantone Spec Guides", "Global Copyright Ready"],
  },
  {
    id: "packaging",
    title: "Luxury Packaging",
    desc: "Unboxing rituals engineered with micro-embossing, gold hot-stamping, and sustainable FSC substrates.",
    specs: ["Dieline Engineering", "Foil & Spot UV Specs", "3D Structural CGI", "Vendor Print Supervision"],
  },
  {
    id: "motion",
    title: "3D & Motion CGI",
    desc: "Cinema 4D & Three.js visual assets, holographic brand loops, and high-impact digital billboard videos.",
    specs: ["4K Resolution Renders", "Physics Simulation", "Web3D Integration", "Social Micro-Reels"],
  },
  {
    id: "web",
    title: "Digital Ecosystems",
    desc: "Bespoke digital flagships combining fluid micro-interactions, dark glassmorphism, and instant response.",
    specs: ["Framer / React Code", "Sub-second Load Speeds", "SEO Domination", "Custom WebGL Scenes"],
  },
];

export default function BentoGridSection() {
  const [activeTab, setActiveTab] = useState(0);
  const [selectedPalette, setSelectedPalette] = useState(0);
  const [copiedColor, setCopiedColor] = useState<string | null>(null);

  const copyColor = (hex: string) => {
    navigator.clipboard.writeText(hex);
    setCopiedColor(hex);
    toast.success(`Copied ${hex} to clipboard!`);
    setTimeout(() => setCopiedColor(null), 2000);
  };

  return (
    <section id="bento" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Studio Ecosystem</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-5">
            Engineered For <span className="text-gradient-accent">Unrivaled Market Impact</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            We don't do cookie-cutter design. Every asset is mathematically calculated, culturally rooted, 
            and digitally optimized for maximum conversion and brand prestige.
          </p>
        </div>

        {/* Bento Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {/* Card 1: 360° Visual Architecture (Large 2 Cols) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border-white/[0.08] group hover:border-primary/40 transition-all duration-500">
            <div className="absolute -top-24 -right-24 w-60 h-60 bg-gradient-to-br from-primary/20 to-transparent rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-6">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <Layers className="w-4 h-4" /> 360° Studio Architecture
                </span>
                <span className="text-xs px-2.5 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-mono">
                  Multi-Disciplinary
                </span>
              </div>

              <h3 className="text-2xl font-bold text-foreground mb-3">
                Precision Craft Across Every Medium
              </h3>
              <p className="text-sm text-muted-foreground mb-6">
                Switch between our core engineering verticals to inspect our standard deliverables and specifications:
              </p>

              {/* Tab Selector */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-6">
                {capabilityTabs.map((tab, idx) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(idx)}
                    className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all text-center ${
                      activeTab === idx
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/20 scale-[1.02]"
                        : "glass-pill text-muted-foreground hover:text-white"
                    }`}
                  >
                    {tab.title}
                  </button>
                ))}
              </div>

              {/* Active Tab Preview Box */}
              <div className="p-5 rounded-2xl bg-black/40 border border-white/[0.08] mb-6">
                <p className="text-sm text-foreground/90 font-medium mb-4">
                  {capabilityTabs[activeTab].desc}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {capabilityTabs[activeTab].specs.map((spec) => (
                    <div key={spec} className="flex items-center gap-2 text-xs text-muted-foreground font-mono">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-4 border-t border-white/[0.06] text-xs text-muted-foreground">
              <span>Full vector master suites provided with every contract</span>
              <a href="#services" className="text-primary font-semibold flex items-center gap-1 hover:underline">
                View Services <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Card 2: Varanasi Roots, Global Horizon (1 Col) */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-accent/40 transition-all duration-500">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <Globe2 className="w-6 h-6" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                Heritage & Reach
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-3">
                Varanasi Legacy, Global Stage
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Rooted in India's spiritual design capital, our studio fuses 3,000 years of aesthetic philosophy 
                with high-precision Swiss minimalism for brands in New York, London, Dubai, and Mumbai.
              </p>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06]">
              <div className="flex justify-between items-center text-xs font-mono">
                <span className="text-muted-foreground">Studio Coords</span>
                <span className="text-accent font-semibold">25.3176° N, 82.9739° E</span>
              </div>
            </div>
          </div>

          {/* Card 3: Production Velocity (1 Col) */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-gold/40 transition-all duration-500">
            <div className="absolute bottom-0 right-0 w-32 h-32 bg-gold/15 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                Rapid Velocity
              </span>
              <h3 className="text-3xl font-bold text-foreground mt-2 mb-1">
                14-Day <span className="text-gradient-gold">Sprints</span>
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mt-2">
                No 6-month bureaucratic agency lags. Our streamlined studio delivers concept decks in 72 hours 
                and final asset repositories within two weeks.
              </p>

              {/* Progress Steps */}
              <div className="mt-6 space-y-2">
                <div className="flex justify-between text-[11px] font-mono">
                  <span className="text-muted-foreground">Sprint Phase</span>
                  <span className="text-gold font-semibold">4 Checkpoints</span>
                </div>
                <div className="w-full h-1.5 rounded-full bg-white/[0.08] overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-amber-500 to-orange-500 w-full rounded-full" />
                </div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-white/[0.06] flex items-center gap-2 text-xs text-muted-foreground">
              <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
              <span>Guaranteed milestone deliverables</span>
            </div>
          </div>

          {/* Card 4: Interactive Chromatic Lab (2 Cols) */}
          <div className="md:col-span-2 lg:col-span-2 glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border-white/[0.08] group hover:border-primary/40 transition-all duration-500">
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center gap-2">
                  <Palette className="w-4 h-4" /> Interactive Chromatic Lab
                </span>
                <span className="text-[10px] uppercase font-mono px-2.5 py-0.5 rounded-full bg-white/[0.06] text-muted-foreground">
                  Click Hex To Copy
                </span>
              </div>

              <h3 className="text-xl font-bold text-foreground mb-2">
                Curated Color Architectures
              </h3>
              <p className="text-sm text-muted-foreground mb-5">
                Test our studio-crafted color harmonies. We construct custom chromatic systems for every client identity.
              </p>

              {/* Palette Switcher */}
              <div className="flex flex-wrap gap-2 mb-6">
                {palettes.map((p, idx) => (
                  <button
                    key={p.name}
                    onClick={() => setSelectedPalette(idx)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                      selectedPalette === idx
                        ? "bg-white/15 text-white border border-white/30"
                        : "glass-pill text-muted-foreground hover:text-white"
                    }`}
                  >
                    {p.name}
                  </button>
                ))}
              </div>

              {/* Live Color Swatches */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {palettes[selectedPalette].colors.map((hex) => (
                  <div
                    key={hex}
                    onClick={() => copyColor(hex)}
                    className="p-3 rounded-2xl glass-card border-white/10 hover:border-white/30 transition-all cursor-pointer group/swatch"
                  >
                    <div
                      className="w-full h-16 rounded-xl mb-3 shadow-inner transition-transform group-hover/swatch:scale-105"
                      style={{ backgroundColor: hex }}
                    />
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-mono font-bold text-foreground uppercase">{hex}</span>
                      {copiedColor === hex ? (
                        <Check className="w-3.5 h-3.5 text-primary" />
                      ) : (
                        <Copy className="w-3.5 h-3.5 text-muted-foreground/60 group-hover/swatch:text-primary transition-colors" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/[0.06] flex items-center justify-between text-xs text-muted-foreground">
              <span>{palettes[selectedPalette].tag}</span>
              <span className="font-mono text-[11px] text-primary">sRGB & CMYK Calibrated</span>
            </div>
          </div>

          {/* Card 5: Industry Honors & Accolades (1 Col) */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-gold/40 transition-all duration-500">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-amber-500/10 border border-gold/20 flex items-center justify-center text-gold mb-6">
                <Trophy className="w-6 h-6 text-gold" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-gold font-bold">
                Global Recognition
              </span>
              <h3 className="text-xl font-bold text-foreground mt-2 mb-4">
                Award-Winning Standard
              </h3>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs font-medium text-foreground">Awwwards SOTD</span>
                  <span className="text-[10px] font-mono text-gold">Honorable Mention</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs font-medium text-foreground">Red Dot Award</span>
                  <span className="text-[10px] font-mono text-gold">Brand Identity</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white/[0.03] border border-white/5">
                  <span className="text-xs font-medium text-foreground">IDA Design</span>
                  <span className="text-[10px] font-mono text-gold">Gold Trophy</span>
                </div>
              </div>
            </div>

            <p className="text-[11px] text-muted-foreground pt-4 border-t border-white/[0.06]">
              Judged against 5,000+ studios globally
            </p>
          </div>

          {/* Card 6: Client Satisfaction Metric (1 Col) */}
          <div className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between group hover:border-accent/40 transition-all duration-500">
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center text-accent mb-6">
                <ShieldCheck className="w-6 h-6 text-accent" />
              </div>
              <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold">
                Flawless Delivery
              </span>
              <h3 className="text-4xl font-bold text-foreground mt-2 mb-1">
                99.4%
              </h3>
              <p className="text-xs text-primary font-semibold font-mono mb-3">
                First-Round Approval Rate
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Because our initial discovery process is so thorough, 9 out of 10 clients approve our primary concept direction with minor adjustments.
              </p>
            </div>

            <div className="pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-muted-foreground">
              <span className="w-2 h-2 rounded-full bg-accent" />
              <span>Zero boilerplate templates</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
