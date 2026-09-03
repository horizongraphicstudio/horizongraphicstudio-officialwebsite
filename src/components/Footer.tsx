import { useState } from "react";
import { ArrowRight, Sparkles, Send, Globe2, ShieldCheck } from "lucide-react";
import logo from "@/assets/logo.png";
import { toast } from "sonner";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    toast.success("Subscribed to Studio Dispatches!", {
      description: "You'll receive our monthly curation of typographic trends and packaging breakthroughs.",
    });
    setEmail("");
  };

  return (
    <footer className="relative bg-background border-t border-white/[0.08] overflow-hidden pt-20 pb-12">
      {/* Background radiant ambient glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-48 bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Top Newsletter & Brand Impact Row */}
        <div className="glass-panel p-8 sm:p-12 rounded-3xl mb-16 border-white/[0.08] flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl text-center lg:text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold flex items-center justify-center lg:justify-start gap-2 mb-2">
              <Sparkles className="w-3.5 h-3.5" /> Studio Dispatches & Insights
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
              Join 5,000+ Brand Leaders & Creative Directors
            </h3>
            <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
              Receive our exclusive private breakdowns of packaging psychology, typography curation, and design systems.
            </p>
          </div>

          <form onSubmit={handleNewsletter} className="w-full lg:w-auto flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              required
              placeholder="Enter your executive email..."
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="px-4 py-3.5 rounded-xl glass-input text-sm text-foreground placeholder:text-muted-foreground focus:outline-none min-w-[280px]"
            />
            <button
              type="submit"
              className="px-6 py-3.5 rounded-xl glass-button-primary text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 hover:scale-105 transition-transform"
            >
              <span>Subscribe</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>

        {/* 4 Column Directory */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 mb-16">
          {/* Col 1 & 2: Brand Identity */}
          <div className="col-span-2 space-y-4">
            <a href="#home" className="flex items-center gap-3">
              <img src={logo} alt="Horizon Graphic Studio" className="h-12 w-auto" />
              <div className="flex flex-col">
                <span className="text-sm font-bold text-foreground tracking-wide">
                  HORIZON GRAPHIC STUDIO
                </span>
                <span className="text-[10px] text-muted-foreground font-mono">
                  A Smart Vista IT Solutions Enterprise
                </span>
              </div>
            </a>
            <p className="text-xs text-muted-foreground leading-relaxed max-w-sm">
              Rooted in the artistic soul of Varanasi since 2009. We architect multi-million-dollar 
              brand identities, luxury packaging systems, and digital flagships for category-defining companies worldwide.
            </p>
            <div className="flex items-center gap-3 text-xs text-muted-foreground font-mono">
              <Globe2 className="w-4 h-4 text-primary" />
              <span>Varanasi, India • Global Client Retainers</span>
            </div>
          </div>

          {/* Col 2: Capabilities */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground font-bold mb-4">
              Capabilities
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li><a href="#services" className="hover:text-primary transition-colors">Brand Identity Architecture</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Luxury Packaging & Dielines</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Digital Flagships & UI/UX</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">3D CGI & Brand Motion</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Large Scale Billboards & Flex</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Visiting Cards & Foil Stationery</a></li>
            </ul>
          </div>

          {/* Col 3: Studio */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground font-bold mb-4">
              Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              <li><a href="#bento" className="hover:text-primary transition-colors">The Ecosystem</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Case Studies</a></li>
              <li><a href="#pinterest" className="hover:text-primary transition-colors">Creative Pinboard</a></li>
              <li><a href="#estimator" className="hover:text-primary transition-colors">Scope Estimator</a></li>
              <li><a href="#pricing" className="hover:text-primary transition-colors">Investment Tiers</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Varanasi Lineage</a></li>
            </ul>
          </div>

          {/* Col 4: Connect */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-widest text-foreground font-bold mb-4">
              Social Presence
            </h4>
            <ul className="space-y-2.5 text-xs text-muted-foreground">
              {["Behance Portfolio", "Dribbble Shots", "Instagram Studio", "LinkedIn Company", "Twitter / X"].map((s) => (
                <li key={s}>
                  <a href="#" className="hover:text-primary transition-colors flex items-center gap-1">
                    <span>{s}</span>
                    <ArrowRight className="w-2.5 h-2.5 opacity-60" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Legal & Credits */}
        <div className="pt-8 border-t border-white/[0.06] flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>
            © {new Date().getFullYear()} Horizon Graphic Studio. All rights reserved. A Company by{" "}
            <span className="text-foreground font-semibold">Smart Vista IT Solutions</span>, Varanasi.
          </p>

          <div className="flex gap-6 text-[11px] font-mono">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Commercial IP Assignment</a>
            <a href="#" className="hover:text-primary transition-colors">Security & NDA Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
