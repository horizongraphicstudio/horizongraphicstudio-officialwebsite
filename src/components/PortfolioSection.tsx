import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, X, Sparkles, CheckCircle2, Copy, Layers, ExternalLink, Calendar, Tag } from "lucide-react";
import { toast } from "sonner";

export interface Project {
  id: string;
  title: string;
  client: string;
  category: "Brand Identity" | "Luxury Packaging" | "Digital & UI" | "3D & Motion" | "Print & Editorial";
  year: string;
  image: string;
  featuredMockup: string;
  description: string;
  challenge: string;
  solution: string;
  deliverables: string[];
  colors: string[];
  typography: string[];
  metrics: string;
}

const projects: Project[] = [
  {
    id: "veda-organics",
    title: "Veda Ayurvedic Botanicals",
    client: "Veda Organics Luxury",
    category: "Luxury Packaging",
    year: "2024",
    image: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?q=80&w=1200&auto=format&fit=crop",
    featuredMockup: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1200&auto=format&fit=crop",
    description: "End-to-end luxury cosmetic bottle dielines, tactile gold-embossed unboxing systems, and bespoke amber glass graphics.",
    challenge: "Elevate traditional Indian ayurvedic formulations into a global ultra-luxury beauty tier competing alongside Le Labo and Aesop.",
    solution: "Engineered bespoke debossed cylindrical boxes, paired with matte gold hot foil and hand-drawn botanical Sanskrit calligraphy.",
    deliverables: ["12 Custom Cosmetic Dielines", "3D Photorealistic CGI Renders", "Cold-Foil Amber Bottle Wraps", "Brand Identity Bible"],
    colors: ["#d97706", "#78350f", "#fef3c7", "#1c1917"],
    typography: ["Playfair Display", "Space Grotesk", "Cormorant"],
    metrics: "+340% Sales Velocity in Harrods & Sephora UK",
  },
  {
    id: "lumina-ai",
    title: "Lumina Intelligence Flagship",
    client: "Lumina Labs Inc.",
    category: "Brand Identity",
    year: "2024",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=1200&auto=format&fit=crop",
    featuredMockup: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=1200&auto=format&fit=crop",
    description: "A generative iridescent design system for a Silicon Valley autonomous intelligence research organization.",
    challenge: "Translate abstract deep mathematical neural networks into an accessible yet undeniably elite visual identity.",
    solution: "Developed a dynamic algorithmic generative vector mark that alters its refractive angles depending on viewport dimensions.",
    deliverables: ["Dynamic Generative Logo Engine", "Dark-Mode Glass Design System", "Investor Pitch Deck Architecture", "Executive Swag Collection"],
    colors: ["#6366f1", "#a855f7", "#ec4899", "#09090b"],
    typography: ["Space Grotesk", "JetBrains Mono", "Inter Display"],
    metrics: "Secured ₹230 Crore Series A Funding Post-Launch",
  },
  {
    id: "kashi-heritage",
    title: "Kashi Royal Silk Guild",
    client: "Kashi Handlooms Varanasi",
    category: "Print & Editorial",
    year: "2023",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1200&auto=format&fit=crop",
    featuredMockup: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1200&auto=format&fit=crop",
    description: "Centennial archival monograph and gold foil lookbook preserving Varanasi's ancient Banarasi silk heritage.",
    challenge: "Document over 100 years of handwoven silk patterns in a museum-grade archival publication.",
    solution: "Custom thread-bound hardcover book wrapped in genuine raw silk with dual-tone foil debossing and French fold pages.",
    deliverables: ["240-Page Hardcover Monograph", "Archival Photography Curation", "Gold Leaf Box Enclosure", "VIP Collector Certificate"],
    colors: ["#b45309", "#831843", "#fef08a", "#020617"],
    typography: ["Cinzel Decorative", "Plus Jakarta Sans", "Prata"],
    metrics: "Recognized by National Craft Council & IDA Awards",
  },
  {
    id: "apex-hypercar",
    title: "Apex Aerodynamics 3D",
    client: "Apex Electric Motors",
    category: "3D & Motion",
    year: "2024",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop",
    featuredMockup: "https://images.unsplash.com/photo-1542282088-72c9c27ed0cd?q=80&w=1200&auto=format&fit=crop",
    description: "Cinema-grade 3D CGI hypercar reveal sequence, interactive WebGL configurator, and launch film.",
    challenge: "Produce ultra-realistic automotive simulations before physical manufacturing prototypes were assembled.",
    solution: "Sub-surface scattering paint shaders and aerodynamic wind-tunnel particle simulations rendered in 8K resolution.",
    deliverables: ["60s 4K Cinema Launch Film", "Three.js WebGL Interactive Model", "Global Auto Expo Billboards", "Motion Audio Sound Design"],
    colors: ["#f97316", "#38bdf8", "#475569", "#030712"],
    typography: ["Syne", "Space Grotesk", "Orbitron"],
    metrics: "4.2M Organic Impressions in First 48 Hours",
  },
  {
    id: "urban-roasters",
    title: "Urban Roasters Artisanal Coffee",
    client: "Urban Coffee Roasters",
    category: "Brand Identity",
    year: "2023",
    image: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?q=80&w=1200&auto=format&fit=crop",
    featuredMockup: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=1200&auto=format&fit=crop",
    description: "Complete retail identity, compostable degassing pouch packaging, and cafe spatial signage system.",
    challenge: "Carve out an iconic aesthetic in an overcrowded specialty coffee landscape without resorting to generic hipster tropes.",
    solution: "Minimalist Swiss typography merged with warm terracotta color palettes and custom line-art origin maps.",
    deliverables: ["Comprehensive Retail Identity", "Compostable Coffee Pouches", "Neon & Cast Iron Cafe Signage", "Staff Uniform Apparel System"],
    colors: ["#ea580c", "#7c2d12", "#fcd34d", "#18181b"],
    typography: ["Cabinet Grotesk", "Space Grotesk", "General Sans"],
    metrics: "Expanded to 8 Locations within 14 Months",
  },
  {
    id: "chronos-watch",
    title: "Chronos Haute Horlogerie",
    client: "Chronos Swiss SA",
    category: "Digital & UI",
    year: "2024",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200&auto=format&fit=crop",
    featuredMockup: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1200&auto=format&fit=crop",
    description: "Dark luxury digital boutique with 3D dial configurator and VIP concierge reservation system.",
    challenge: "Deliver an online purchase journey matching the prestige of a private Geneva penthouse boutique.",
    solution: "Ultra-high-fidelity dark glassmorphic interface with haptic feedback cues, bespoke fluid animations, and encrypted client portal.",
    deliverables: ["E-Commerce Digital Flagship", "3D Watch Interactive Customizer", "VIP Client Mobile App UI", "Motion Interaction Design"],
    colors: ["#f59e0b", "#e2e8f0", "#334155", "#020617"],
    typography: ["Italiana", "Space Grotesk", "Plus Jakarta Sans"],
    metrics: "Over ₹25 Lakhs in High-Value Pre-orders",
  },
];

const categories = ["All", "Brand Identity", "Luxury Packaging", "Digital & UI", "3D & Motion", "Print & Editorial"] as const;

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState<string>("All");
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const copyColorHex = (hex: string) => {
    navigator.clipboard.writeText(hex);
    toast.success(`Copied color ${hex}`);
  };

  return (
    <section id="portfolio" className="py-24 md:py-32 bg-background relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
      <div className="absolute bottom-1/3 left-0 w-[500px] h-[500px] bg-accent/10 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Curated Masterpieces</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Proof of <span className="text-gradient-accent">Creative Mastery</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A selective exhibition of identity systems, luxury packaging, and digital flagships 
            crafted for world-class founders and visionary institutions.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-14">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-semibold transition-all duration-300 ${
                activeCategory === cat
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 scale-[1.03]"
                  : "glass-pill text-muted-foreground hover:text-foreground hover:bg-white/[0.08]"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setSelectedProject(project)}
              className="group relative rounded-3xl glass-panel overflow-hidden border-white/[0.08] hover:border-primary/50 transition-all duration-500 cursor-pointer flex flex-col justify-between"
            >
              {/* Image Preview Container */}
              <div className="relative aspect-[16/11] overflow-hidden bg-black/40">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-90 group-hover:brightness-100"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Top Floating Badge */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-[10px] uppercase font-mono tracking-wider px-3 py-1 rounded-full glass-panel text-white/90 font-medium">
                    {project.category}
                  </span>
                  <span className="text-[11px] font-mono text-white/70 px-2 py-0.5 rounded bg-black/50 backdrop-blur-md">
                    {project.year}
                  </span>
                </div>

                {/* Hover Quick Trigger */}
                <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-xl">
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
              </div>

              {/* Card Meta Content */}
              <div className="p-6">
                <p className="text-xs font-mono text-primary font-semibold uppercase tracking-wider mb-1">
                  {project.client}
                </p>
                <h3 className="text-xl font-bold text-foreground group-hover:text-white transition-colors mb-2">
                  {project.title}
                </h3>
                <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Deliverables Snippet */}
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/[0.06]">
                  {project.deliverables.slice(0, 2).map((del) => (
                    <span
                      key={del}
                      className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted-foreground border border-white/5"
                    >
                      {del}
                    </span>
                  ))}
                  {project.deliverables.length > 2 && (
                    <span className="text-[10px] font-mono px-1.5 py-0.5 text-primary">
                      +{project.deliverables.length - 2}
                    </span>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Full-Screen Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/85 backdrop-blur-xl"
            />

            {/* Modal Body */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.35 }}
              className="relative w-full max-w-5xl max-h-[90vh] glass-modal rounded-3xl overflow-y-auto z-10 border border-white/15 p-6 sm:p-10 shadow-2xl"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Modal Header */}
              <div className="mb-8">
                <div className="flex flex-wrap items-center gap-3 mb-3">
                  <span className="text-xs font-mono uppercase tracking-widest px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30 font-semibold">
                    {selectedProject.category}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" /> {selectedProject.year}
                  </span>
                  <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
                    <Tag className="w-3.5 h-3.5" /> Client: {selectedProject.client}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-4xl font-bold text-foreground mb-4">
                  {selectedProject.title}
                </h2>
                <p className="text-base sm:text-lg text-muted-foreground max-w-3xl leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              {/* Dual Hero Showcase Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black/50 border border-white/10">
                  <img
                    src={selectedProject.image}
                    alt="Case study main mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden aspect-[16/10] bg-black/50 border border-white/10">
                  <img
                    src={selectedProject.featuredMockup}
                    alt="Case study secondary mockup"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Case Study Deep Dive: Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-widest text-primary font-bold mb-2 block">
                    01 // The Strategic Challenge
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.challenge}
                  </p>
                </div>

                <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <span className="text-xs font-mono uppercase tracking-widest text-accent font-bold mb-2 block">
                    02 // The Studio Solution
                  </span>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {selectedProject.solution}
                  </p>
                </div>
              </div>

              {/* Deliverables & Measurable Impact */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
                {/* Deliverables */}
                <div className="md:col-span-2 p-6 rounded-2xl bg-white/[0.03] border border-white/[0.08]">
                  <h4 className="text-sm font-mono font-bold uppercase tracking-wider text-foreground mb-4 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-primary" /> Key Assets Produced
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedProject.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-2.5 text-xs text-muted-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Measurable Business Outcome */}
                <div className="p-6 rounded-2xl bg-gradient-to-br from-primary/15 to-accent/10 border border-primary/30 flex flex-col justify-center">
                  <span className="text-xs font-mono uppercase tracking-wider text-primary font-bold mb-2">
                    Business Result
                  </span>
                  <p className="text-xl font-bold text-foreground leading-snug">
                    {selectedProject.metrics}
                  </p>
                </div>
              </div>

              {/* Color System & Typography Specs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-6 border-t border-white/[0.08]">
                {/* Color Swatches */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                    Bespoke Chromatic System (Click to Copy):
                  </p>
                  <div className="flex gap-3">
                    {selectedProject.colors.map((hex) => (
                      <div
                        key={hex}
                        onClick={() => copyColorHex(hex)}
                        className="group flex flex-col items-center cursor-pointer"
                      >
                        <div
                          className="w-10 h-10 rounded-xl border border-white/20 shadow-md group-hover:scale-110 transition-transform mb-1"
                          style={{ backgroundColor: hex }}
                        />
                        <span className="text-[10px] font-mono text-muted-foreground uppercase group-hover:text-white">
                          {hex}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Typography Stack */}
                <div>
                  <p className="text-xs font-mono uppercase tracking-wider text-muted-foreground font-semibold mb-3">
                    Typography Pairing Architecture:
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.typography.map((font) => (
                      <span
                        key={font}
                        className="text-xs px-3 py-1.5 rounded-lg bg-white/[0.05] border border-white/10 text-foreground font-medium"
                      >
                        {font}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Modal CTA */}
              <div className="mt-8 pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-muted-foreground">
                  Ready to achieve similar results for your upcoming brand launch?
                </p>
                <a
                  href="#contact"
                  onClick={() => setSelectedProject(null)}
                  className="px-6 py-3 rounded-xl glass-button-primary text-white text-xs font-bold uppercase tracking-wider"
                >
                  Commission This Level of Craft
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
