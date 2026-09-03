import { motion } from "framer-motion";
import { Star, Quote, CheckCircle2, Sparkles, Building2 } from "lucide-react";

interface Testimonial {
  name: string;
  role: string;
  company: string;
  location: string;
  avatar: string;
  content: string;
  rating: number;
  highlightMetric: string;
  projectTag: string;
}

const testimonials: Testimonial[] = [
  {
    name: "Aarav Singhania",
    role: "Founder & CEO",
    company: "Veda Organics Luxury",
    location: "Mumbai / London",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=400&auto=format&fit=crop",
    content: "Horizon Graphic Studio fundamentally transformed how our cosmetic line is perceived globally. Their tactile packaging dielines and gold hot-stamping helped us secure prime placement in Harrods and Sephora UK. An uncompromising eye for luxury.",
    rating: 5,
    highlightMetric: "+340% D2C Revenue Growth",
    projectTag: "Luxury Packaging Suite",
  },
  {
    name: "Elena Rostova",
    role: "VP of Product & Brand",
    company: "Lumina Labs AI",
    location: "San Francisco, CA",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
    content: "We needed a design studio capable of translating complex neural network architecture into an intuitive yet strikingly beautiful visual identity. Horizon delivered a generative vector system that directly helped us close our ₹230 Crore Series A round.",
    rating: 5,
    highlightMetric: "₹230 Cr Series A Secured",
    projectTag: "Brand Identity & Digital UI",
  },
  {
    name: "Vikramaditya Rao",
    role: "Chairman & Director",
    company: "Kashi Royal Silk Guild",
    location: "Varanasi / Zurich",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=400&auto=format&fit=crop",
    content: "Rooted here in Varanasi for over a century, we are fiercely protective of our heritage. Horizon understood how to preserve the sacred soul of Banarasi weaves while packaging them with Swiss minimalist poise. They have been our trusted agency for over a decade.",
    rating: 5,
    highlightMetric: "IDA Design Gold Winner",
    projectTag: "Archival Monograph & Print",
  },
  {
    name: "Julian Vance",
    role: "Global Marketing Director",
    company: "Apex Aerodynamics",
    location: "Munich, Germany",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=400&auto=format&fit=crop",
    content: "The 3D CGI and video reveal sequence Horizon engineered for our hypercar debut outshined European boutique agencies that quoted 5x their fees. Their speed, precision, and visual fidelity are simply world-class.",
    rating: 5,
    highlightMetric: "4.2M Video Impressions",
    projectTag: "3D Motion & CGI Visuals",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Radiant ambient glow */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Client Endorsements</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Trusted by the World's <span className="text-gradient-accent">Most Discerning Brands</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            Hear directly from the founders, venture executives, and category leaders who have scaled 
            their enterprises with Horizon Graphic Studio.
          </p>
        </div>

        {/* Testimonials 2x2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-16">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              className="glass-panel p-8 rounded-3xl relative overflow-hidden flex flex-col justify-between border-white/[0.08] hover:border-primary/40 transition-all duration-400 group"
            >
              {/* Background Quote Mark */}
              <Quote className="absolute top-6 right-6 w-20 h-20 text-white/[0.03] pointer-events-none group-hover:text-primary/[0.06] transition-colors" />

              <div>
                {/* Top Row: Stars & Metric Pill */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-1 text-gold">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20 font-bold">
                    {t.highlightMetric}
                  </span>
                </div>

                {/* Quote Content */}
                <p className="text-sm md:text-base text-foreground/90 leading-relaxed mb-6 font-light italic">
                  "{t.content}"
                </p>
              </div>

              {/* Author & Footer */}
              <div className="pt-6 border-t border-white/[0.06] flex items-center justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    className="w-12 h-12 rounded-full object-cover border border-white/20 shadow-md"
                  />
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="text-sm font-bold text-foreground">{t.name}</h4>
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                    </div>
                    <p className="text-xs text-muted-foreground">
                      {t.role} • <span className="text-foreground/80 font-medium">{t.company}</span>
                    </p>
                    <p className="text-[10px] font-mono text-muted-foreground/60">{t.location}</p>
                  </div>
                </div>

                <span className="hidden sm:block text-[10px] font-mono uppercase px-2.5 py-1 rounded bg-white/[0.03] text-muted-foreground border border-white/5">
                  {t.projectTag}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Badges Bar */}
        <div className="p-6 rounded-2xl glass-panel max-w-4xl mx-auto flex flex-wrap items-center justify-around gap-6 border-white/[0.06] text-center">
          <div>
            <p className="text-3xl font-extrabold text-foreground">99.4%</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">Client Satisfaction</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <p className="text-3xl font-extrabold text-foreground">500+</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">Projects Delivered</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <p className="text-3xl font-extrabold text-foreground">15+</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">Design Awards</p>
          </div>
          <div className="w-px h-10 bg-white/10 hidden sm:block" />
          <div>
            <p className="text-3xl font-extrabold text-foreground">100%</p>
            <p className="text-xs text-muted-foreground font-mono mt-1">IP Ownership Transferred</p>
          </div>
        </div>
      </div>
    </section>
  );
}
