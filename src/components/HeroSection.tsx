import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles, Award, Star, Compass, CheckCircle2 } from "lucide-react";
import HeroScene from "./HeroScene";

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-[100vh] flex flex-col justify-center overflow-hidden bg-gradient-hero pt-28 pb-16">
      {/* 3D Background Canvas */}
      <Suspense fallback={null}>
        <HeroScene />
      </Suspense>

      {/* Radiant Glass Ambient Orbs - Matching Logo Gold & Cyan Palette */}
      <div
        className="absolute top-1/4 left-1/6 w-[520px] h-[520px] rounded-full opacity-25 blur-[120px] pointer-events-none animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(43 85% 54% / 0.45), transparent 70%)" }}
      />
      <div
        className="absolute bottom-1/4 right-1/6 w-[480px] h-[480px] rounded-full opacity-25 blur-[130px] pointer-events-none animate-pulse-glow"
        style={{ background: "radial-gradient(circle, hsl(194 95% 48% / 0.4), transparent 70%)" }}
      />
      <div
        className="absolute top-1/3 right-1/3 w-[360px] h-[360px] rounded-full opacity-20 blur-[100px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(218 55% 25% / 0.5), transparent 70%)" }}
      />

      {/* Floating Glass Accent Badges (Desktop) */}
      <div className="hidden lg:block absolute left-10 top-1/3 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.6 }}
          className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 shadow-2xl max-w-xs pointer-events-auto hover:border-primary/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-amber-500/20 to-yellow-500/30 flex items-center justify-center text-primary shrink-0 border border-primary/30">
            <Award className="w-5 h-5 text-primary" />
          </div>
          <div>
            <div className="flex items-center gap-1 text-primary text-xs font-semibold">
              <Star className="w-3 h-3 fill-primary" />
              <Star className="w-3 h-3 fill-primary" />
              <Star className="w-3 h-3 fill-primary" />
              <Star className="w-3 h-3 fill-primary" />
              <Star className="w-3 h-3 fill-primary" />
            </div>
            <p className="text-xs font-bold text-foreground mt-0.5">Awwwards & Red Dot</p>
            <p className="text-[10px] text-muted-foreground">Recognized Design Standard</p>
          </div>
        </motion.div>
      </div>

      <div className="hidden lg:block absolute right-10 top-1/3 z-20 pointer-events-none">
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="glass-panel p-4 rounded-2xl flex items-center gap-3.5 shadow-2xl max-w-xs pointer-events-auto hover:border-accent/50 transition-colors"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-500/30 flex items-center justify-center text-accent shrink-0 border border-accent/30">
            <Sparkles className="w-5 h-5 text-accent" />
          </div>
          <div>
            <span className="text-[10px] font-mono uppercase tracking-wider text-accent font-semibold">
              Rapid Execution
            </span>
            <p className="text-xs font-bold text-foreground">14-Day Sprint Ready</p>
            <p className="text-[10px] text-muted-foreground">From Brief to Global Launch</p>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center max-w-5xl">
        {/* Eyebrow Pill */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-pill mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
          </span>
          <span className="text-xs md:text-sm font-semibold tracking-wider text-primary uppercase font-mono">
            A Smart Vista IT Solutions Company
          </span>
          <span className="hidden sm:inline text-xs text-muted-foreground">• Varanasi Heritage • Est. 2009</span>
        </motion.div>

        {/* Hero Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.85, delay: 0.15 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.02] mb-8"
        >
          <span className="text-foreground">Architecting Brands</span>
          <br />
          <span className="text-gradient-accent">That Dominate Markets.</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed font-light"
        >
          Horizon Graphic Studio combines ancient Varanasi craftsmanship with high-voltage modern 
          design. We build bespoke visual identities, luxury packaging systems, 3D CGI, and digital 
          experiences for category creators worldwide.
        </motion.p>

        {/* Action Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14"
        >
          <a
            href="#contact"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-button-primary text-white font-semibold text-base flex items-center justify-center gap-3 transition-transform hover:scale-[1.03] active:scale-[0.98]"
          >
            <span>Start Your Project</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          <a
            href="#portfolio"
            className="w-full sm:w-auto px-8 py-4 rounded-xl glass-panel text-foreground font-semibold text-base hover:border-primary/40 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <span>Explore Portfolio</span>
          </a>

          <a
            href="#estimator"
            className="w-full sm:w-auto px-5 py-4 rounded-xl glass-pill text-xs font-mono tracking-wider uppercase text-muted-foreground hover:text-primary transition-colors flex items-center justify-center gap-2"
          >
            <Compass className="w-4 h-4 text-primary" />
            <span>Scope Estimator</span>
          </a>
        </motion.div>

        {/* Hero Features Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-white/[0.08]"
        >
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>15+ Years Mastery</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>500+ Delivered Works</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>100% Bespoke Vectors</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
            <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
            <span>Direct Art Director Access</span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="hidden md:flex justify-center mt-12"
      >
        <a
          href="#bento"
          className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors text-xs font-mono uppercase tracking-widest"
        >
          <span>Scroll to Discover</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/20 flex justify-center pt-1.5">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.6, repeat: Infinity }}
              className="w-1 h-1.5 rounded-full bg-primary"
            />
          </div>
        </a>
      </motion.div>
    </section>
  );
}
