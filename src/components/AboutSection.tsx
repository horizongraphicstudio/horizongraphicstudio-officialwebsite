import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Sparkles, Shield, Compass, Feather, Award, ArrowRight } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="about" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Radiant Glows */}
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-accent/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center max-w-7xl mx-auto">
          {/* Left Column: Visual Composition (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 relative"
          >
            {/* Main Visual Glass Card */}
            <div className="relative rounded-3xl glass-panel p-3 border-white/10 overflow-hidden shadow-2xl">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden relative bg-black/60">
                <img
                  src="https://images.unsplash.com/photo-1542744094-24638eff58bb?q=80&w=1200&auto=format&fit=crop"
                  alt="Horizon Graphic Studio Creative Team in Studio"
                  className="w-full h-full object-cover object-center filter contrast-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

                {/* Overlay Text */}
                <div className="absolute bottom-6 left-6 right-6">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-primary font-bold block mb-1">
                    The Varanasi Creative Sanctum
                  </span>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Where Ancient Aesthetics Meet Modern Precision
                  </h3>
                </div>
              </div>
            </div>

            {/* Floating Glass Badge 1: 15+ Years Lineage */}
            <div className="absolute -bottom-6 -right-4 sm:-right-6 glass-modal p-5 rounded-2xl border-primary/30 shadow-2xl flex items-center gap-3.5 z-10">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white shadow-lg shrink-0">
                <Award className="w-6 h-6" />
              </div>
              <div>
                <p className="text-2xl font-extrabold text-foreground leading-none">15+</p>
                <p className="text-xs font-mono text-muted-foreground uppercase tracking-wider mt-1">
                  Years of Design Lineage
                </p>
              </div>
            </div>

            {/* Floating Glass Badge 2: Parent Company */}
            <div className="hidden sm:flex absolute -top-5 -left-4 glass-panel px-4 py-2 rounded-full border-white/10 items-center gap-2 z-10">
              <span className="w-2 h-2 rounded-full bg-primary" />
              <span className="text-[11px] font-mono text-muted-foreground">
                A Division of <strong className="text-foreground">Smart Vista IT Solutions</strong>
              </span>
            </div>
          </motion.div>

          {/* Right Column: Studio Narrative (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              <span>The Studio Manifesto</span>
            </div>

            <h2 className="text-3xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Rooted in <span className="text-gradient-accent">Varanasi's Sacred Artistry</span>, Engineered for the Global Vanguard.
            </h2>

            <p className="text-muted-foreground text-base sm:text-lg leading-relaxed mb-6 font-light">
              Founded over 15 years ago in the cultural and spiritual heart of India, Horizon Graphic Studio 
              was built on a singular premise: that the world's most enduring brands are forged at the intersection 
              of timeless cultural soul and mathematical design rigor.
            </p>

            <p className="text-muted-foreground text-sm sm:text-base leading-relaxed mb-8">
              Today, operating as a flagship creative unit under <strong>Smart Vista IT Solutions</strong>, our multidisciplinary 
              collective of typographers, packaging engineers, 3D CGI artists, and brand strategists partners with founders 
              across London, Zurich, New York, Dubai, and Mumbai. We do not chase fleeting design gimmicks — we architect 
              visual legacies.
            </p>

            {/* Three Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
              <div className="p-4 rounded-2xl glass-card border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-3">
                  <Feather className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Artisanal Depth</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Every vector curve is drawn with golden ratio mathematical harmony.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-accent/10 flex items-center justify-center text-accent mb-3">
                  <Compass className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Tactile Mastery</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Deep mastery of foil dies, 600+ GSM cotton stock, and packaging dielines.
                </p>
              </div>

              <div className="p-4 rounded-2xl glass-card border-white/[0.06]">
                <div className="w-9 h-9 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-3">
                  <Shield className="w-4 h-4" />
                </div>
                <h4 className="text-sm font-bold text-foreground mb-1">Direct Access</h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Work directly with senior creative directors, not junior intermediaries.
                </p>
              </div>
            </div>

            {/* Studio Metrics Counter Row */}
            <div className="p-6 rounded-2xl glass-panel border-white/[0.08] flex flex-wrap items-center justify-between gap-6">
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">20+</p>
                <p className="text-xs font-mono text-muted-foreground">In-House Designers</p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">14</p>
                <p className="text-xs font-mono text-muted-foreground">Countries Served</p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <div>
                <p className="text-2xl sm:text-3xl font-bold text-foreground">500+</p>
                <p className="text-xs font-mono text-muted-foreground">Completed Works</p>
              </div>
              <div className="w-px h-8 bg-white/10 hidden sm:block" />
              <a
                href="#contact"
                className="px-5 py-2.5 rounded-xl glass-button-primary text-white text-xs font-semibold flex items-center gap-1.5"
              >
                <span>Partner With Us</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
