import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Palette,
  Globe,
  Printer,
  CreditCard,
  Image,
  FileText,
  Box,
  Video,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const services = [
  {
    icon: Palette,
    tag: "Strategy & Identity",
    title: "Brand Identity Architecture",
    description: "Holistic visual identities engineered for timeless impact. From geometric vector marks to comprehensive brand rulebooks.",
    deliverables: ["Vector Mastermarks & Monograms", "Typography & Hierarchy Systems", "Comprehensive Brand Guidelines PDF", "Complete Social & Digital Kit"],
    tools: ["Illustrator", "Glyphs", "Figma"],
    glowColor: "hsl(43 85% 54% / 0.2)",
  },
  {
    icon: Box,
    tag: "Physical & Tactile",
    title: "Luxury Packaging & Dielines",
    description: "Unboxing experiences that elevate product perceived value. Multi-sensory finishes with gold foil, blind debossing, and custom boxes.",
    deliverables: ["Custom Dieline Engineering", "Gold & Silver Foil Hot-Stamping", "3D Structural Photorealistic CGI", "Print Production Supervision"],
    tools: ["Cinema 4D", "Esko", "Illustrator"],
    glowColor: "hsl(194 95% 48% / 0.2)",
  },
  {
    icon: Globe,
    tag: "Digital Experiences",
    title: "Digital Flagships & UI/UX",
    description: "Bespoke digital flagships with fluid micro-interactions, dark glassmorphism, responsive fluidity, and sub-second load times.",
    deliverables: ["Interactive Prototype in Figma", "Full Responsive Breakpoints", "Design Token Library", "Development Hand-off Specs"],
    tools: ["Figma", "React", "Tailwind CSS"],
    glowColor: "hsl(218 65% 50% / 0.2)",
  },
  {
    icon: Video,
    tag: "Motion & Spatial",
    title: "3D CGI & Brand Motion",
    description: "Dynamic brand loops, 3D product animations, and cinema-grade visual effects for digital displays, billboards, and campaigns.",
    deliverables: ["4K Resolution 3D CGI Renders", "Brand Idents & Logo Motion", "Social Reel Micro-Animations", "Three.js / WebGL Assets"],
    tools: ["Blender", "After Effects", "Three.js"],
    glowColor: "hsl(194 95% 48% / 0.2)",
  },
  {
    icon: CreditCard,
    tag: "Corporate Collateral",
    title: "Bespoke Business Cards",
    description: "Ultra-heavyweight 600+ GSM cotton stock, edge gilding, thermal embossing, and magnetic NFC-embedded luxury business cards.",
    deliverables: ["600+ GSM Cotton Paper Specs", "Gold / Rose-Gold Edge Foiling", "Smart NFC Digital Integration", "Executive Stationery Suite"],
    tools: ["Indesign", "Pantone Match"],
    glowColor: "hsl(43 85% 54% / 0.2)",
  },
  {
    icon: Image,
    tag: "Outdoor & Environmental",
    title: "Large Format & Outdoor Flex",
    description: "Monumental outdoor hoardings, highway flex banners, exhibition facades, and transit graphics that capture eyeballs in Varanasi & beyond.",
    deliverables: ["High-DPI Large Scale Vectors", "Color-Calibrated Billboard Files", "Exhibition Booth Mockups", "Illuminated Backlit Signage"],
    tools: ["Photoshop Large Doc", "Illustrator"],
    glowColor: "hsl(194 95% 48% / 0.2)",
  },
  {
    icon: FileText,
    tag: "Editorial & Publications",
    title: "Lookbooks & Corporate Decks",
    description: "Sleek investor pitch decks, luxury coffee-table company profiles, product catalogs, and editorial layouts that close deals.",
    deliverables: ["Master InDesign Layouts", "Interactive Pitch Deck Slides", "Print-Ready CMYK Bindery Specs", "Digital Flipbook Versions"],
    tools: ["InDesign", "Keynote", "Figma"],
    glowColor: "hsl(43 85% 54% / 0.2)",
  },
  {
    icon: Printer,
    tag: "Commercial Printing",
    title: "Product Labels & Shrink Sleeves",
    description: "Eye-catching FMCG labels, cosmetic jar graphics, waterproof beverage wraps, and luxury bottle seals engineered to dominate shelves.",
    deliverables: ["Barcode & Regulatory Compliance", "Waterproof & Metallic Substrates", "Embossed Label Plates", "Full Range Flavor Variants"],
    tools: ["Illustrator", "Packaging Prep"],
    glowColor: "hsl(218 65% 50% / 0.2)",
  },
];

function ServiceCard({ service, index }: { service: (typeof services)[0]; index: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [isExpanded, setIsExpanded] = useState(false);
  const Icon = service.icon;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: (index % 4) * 0.1 }}
      className="group relative rounded-3xl glass-panel p-7 hover:border-primary/40 transition-all duration-500 flex flex-col justify-between overflow-hidden"
    >
      {/* Dynamic Hover Glow */}
      <div
        className="absolute -inset-1 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none blur-2xl"
        style={{ background: `radial-gradient(circle at 50% 0%, ${service.glowColor}, transparent 70%)` }}
      />

      <div className="relative z-10">
        {/* Top Header */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-13 h-13 w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary group-hover:scale-110 group-hover:border-primary/30 group-hover:bg-primary/10 transition-all duration-300">
            <Icon className="w-6 h-6" />
          </div>
          <span className="text-[10px] font-mono tracking-wider uppercase px-3 py-1 rounded-full bg-white/[0.04] text-muted-foreground border border-white/5">
            {service.tag}
          </span>
        </div>

        {/* Title & Desc */}
        <h3 className="text-xl font-bold text-foreground mb-2.5 group-hover:text-white transition-colors">
          {service.title}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
          {service.description}
        </p>

        {/* Deliverables Checklist */}
        <div className="space-y-2 mb-6 pt-4 border-t border-white/[0.06]">
          <p className="text-[11px] font-mono uppercase tracking-wider text-foreground/80 font-semibold mb-2">
            Standard Deliverables:
          </p>
          {service.deliverables.slice(0, isExpanded ? 4 : 2).map((item) => (
            <div key={item} className="flex items-start gap-2 text-xs text-muted-foreground">
              <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
              <span>{item}</span>
            </div>
          ))}
          {service.deliverables.length > 2 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="text-[11px] font-mono text-primary hover:underline pt-1"
            >
              {isExpanded ? "Show Less -" : `+ View ${service.deliverables.length - 2} More Deliverables`}
            </button>
          )}
        </div>
      </div>

      {/* Footer / Tools */}
      <div className="relative z-10 pt-4 border-t border-white/[0.06] flex items-center justify-between">
        <div className="flex items-center gap-1.5">
          {service.tools.map((tool) => (
            <span
              key={tool}
              className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/[0.04] text-muted-foreground/80 border border-white/5"
            >
              {tool}
            </span>
          ))}
        </div>
        <a
          href="#contact"
          className="text-xs font-semibold text-primary group-hover:translate-x-1 transition-transform flex items-center gap-1"
        >
          Book <ArrowRight className="w-3 h-3" />
        </a>
      </div>
    </motion.div>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Full-Service Creative Arsenal</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            World-Class Capabilities. <span className="text-gradient-accent">Zero Compromises.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            From strategic brand identities to tactile luxury packaging and 3D motion, we build coherent 
            creative ecosystems that command authority.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>

        {/* Bottom Callout Banner */}
        <div className="mt-16 p-8 rounded-3xl glass-panel max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 border-primary/20">
          <div>
            <h4 className="text-lg font-bold text-foreground mb-1">
              Have a custom or unconventional creative brief?
            </h4>
            <p className="text-sm text-muted-foreground">
              We frequently handle large multi-country rollouts, custom spatial design, and bespoke creative projects.
            </p>
          </div>
          <a
            href="#contact"
            className="px-6 py-3 rounded-xl glass-button-primary text-white font-semibold text-sm shrink-0 flex items-center gap-2 hover:scale-105 transition-transform"
          >
            <span>Request Custom Brief</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
