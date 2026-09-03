import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, Bookmark, Eye, Sparkles, X, Share2, ZoomIn } from "lucide-react";
import { toast } from "sonner";

interface Pin {
  id: string;
  title: string;
  category: "Typography" | "Packaging" | "Editorial" | "3D CGI" | "Brand Marks";
  aspect: string;
  image: string;
  likes: number;
  saves: number;
  tag: string;
  desc: string;
}

const pinsData: Pin[] = [
  {
    id: "pin-1",
    title: "Prism Holographic Foil Packaging",
    category: "Packaging",
    aspect: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1547949003-9792a18a2601?q=80&w=800&auto=format&fit=crop",
    likes: 428,
    saves: 182,
    tag: "#HoloFoil",
    desc: "Refractive hot-foil stamping on heavy 450 GSM black dyed paperboard.",
  },
  {
    id: "pin-2",
    title: "Swiss Grid Typographic Poster",
    category: "Typography",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?q=80&w=800&auto=format&fit=crop",
    likes: 612,
    saves: 304,
    tag: "#SwissGrid",
    desc: "Experimental grotesque typography exploring asymmetry and kinetic balance.",
  },
  {
    id: "pin-3",
    title: "Chronos Chrome 3D Fluid Type",
    category: "3D CGI",
    aspect: "aspect-[1/1]",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
    likes: 890,
    saves: 450,
    tag: "#Cinema4D",
    desc: "Liquid metal refraction shader exploring optical dispersion.",
  },
  {
    id: "pin-4",
    title: "Varanasi Silk Textile Archival Book",
    category: "Editorial",
    aspect: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=800&auto=format&fit=crop",
    likes: 315,
    saves: 120,
    tag: "#EditorialPrint",
    desc: "Cloth-bound gold leaf editorial catalog for royal Banarasi handlooms.",
  },
  {
    id: "pin-5",
    title: "Aura Botanical Glass Cosmetic Jar",
    category: "Packaging",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=800&auto=format&fit=crop",
    likes: 540,
    saves: 275,
    tag: "#GlassPackaging",
    desc: "Frosted dark amber glass with debossed wooden closure and organic seal.",
  },
  {
    id: "pin-6",
    title: "Golden Ratio Sacred Geometry Mark",
    category: "Brand Marks",
    aspect: "aspect-[1/1]",
    image: "https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?q=80&w=800&auto=format&fit=crop",
    likes: 720,
    saves: 390,
    tag: "#LogoGeometry",
    desc: "Vector precision monogram constructed using Fibonacci spiral mathematics.",
  },
  {
    id: "pin-7",
    title: "Noir Architecture Lookbook",
    category: "Editorial",
    aspect: "aspect-[4/5]",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    likes: 460,
    saves: 210,
    tag: "#MinimalBook",
    desc: "Monochrome architectural editorial spread with French gate-fold bindery.",
  },
  {
    id: "pin-8",
    title: "Cyberpunk High-Contrast Street Flex",
    category: "Typography",
    aspect: "aspect-[3/4]",
    image: "https://images.unsplash.com/photo-1508739773434-c26b3d09e071?q=80&w=800&auto=format&fit=crop",
    likes: 805,
    saves: 512,
    tag: "#NeonPosters",
    desc: "Ultra-vibrant high-voltage outdoor poster design for electronic arts festival.",
  },
];

const pinCategories = ["All", "Typography", "Packaging", "Editorial", "3D CGI", "Brand Marks"] as const;

export default function PinterestMasonrySection() {
  const [pins, setPins] = useState<Pin[]>(pinsData);
  const [activeFilter, setActiveFilter] = useState<string>("All");
  const [likedPins, setLikedPins] = useState<Record<string, boolean>>({});
  const [savedPins, setSavedPins] = useState<Record<string, boolean>>({});
  const [activeModalPin, setActiveModalPin] = useState<Pin | null>(null);

  const toggleLike = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setLikedPins((prev) => {
      const isLiked = !!prev[id];
      const next = { ...prev, [id]: !isLiked };
      setPins((currentPins) =>
        currentPins.map((p) => (p.id === id ? { ...p, likes: p.likes + (!isLiked ? 1 : -1) } : p))
      );
      if (!isLiked) {
        toast.success("Added to your liked inspirations!");
      }
      return next;
    });
  };

  const toggleSave = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedPins((prev) => {
      const isSaved = !!prev[id];
      const next = { ...prev, [id]: !isSaved };
      setPins((currentPins) =>
        currentPins.map((p) => (p.id === id ? { ...p, saves: p.saves + (!isSaved ? 1 : -1) } : p))
      );
      toast(isSaved ? "Removed from Pinboard" : "Saved to your Private Moodboard! 📌");
      return next;
    });
  };

  const filteredPins =
    activeFilter === "All" ? pins : pins.filter((p) => p.category === activeFilter);

  return (
    <section className="py-24 md:py-32 bg-card relative overflow-hidden border-t border-white/[0.06]">
      {/* Dynamic ambient glass backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-primary/5 via-accent/5 to-secondary/5 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Creative Canvas</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            Visual Pinboard & <span className="text-gradient-accent">Inspiration Feed</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg">
            A live feed of exploratory typography, print finish specimens, packaging mockups, 
            and moodboard artifacts straight from our Varanasi design studio desks.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {pinCategories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-4 py-2 rounded-full text-xs font-medium transition-all ${
                activeFilter === cat
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/30"
                  : "glass-pill text-muted-foreground hover:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Pinterest-Style Staggered Masonry Grid */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6 max-w-7xl mx-auto">
          {filteredPins.map((pin) => {
            const isLiked = !!likedPins[pin.id];
            const isSaved = !!savedPins[pin.id];

            return (
              <div
                key={pin.id}
                onClick={() => setActiveModalPin(pin)}
                className="break-inside-avoid group relative rounded-3xl glass-panel overflow-hidden border-white/[0.08] hover:border-primary/50 transition-all duration-400 cursor-pointer shadow-xl"
              >
                {/* Image Container */}
                <div className={`relative ${pin.aspect} w-full overflow-hidden bg-black/40`}>
                  <img
                    src={pin.image}
                    alt={pin.title}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-95 group-hover:brightness-100"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  {/* Top Pinterest-style Quick Actions */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full glass-panel text-white/90 font-medium">
                      {pin.category}
                    </span>

                    <button
                      onClick={(e) => toggleSave(pin.id, e)}
                      className={`px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1.5 transition-transform active:scale-95 shadow-lg ${
                        isSaved
                          ? "bg-accent text-white"
                          : "bg-primary hover:bg-primary/90 text-primary-foreground"
                      }`}
                    >
                      <Bookmark className="w-3.5 h-3.5" />
                      <span>{isSaved ? "Saved" : "Pin"}</span>
                    </button>
                  </div>

                  {/* Center Zoom Cue */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                    <div className="w-11 h-11 rounded-full bg-black/60 backdrop-blur-md border border-white/20 flex items-center justify-center text-white">
                      <ZoomIn className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Bottom Stats on Hover */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10">
                    <span className="text-xs font-mono text-primary font-semibold">
                      {pin.tag}
                    </span>

                    <button
                      onClick={(e) => toggleLike(pin.id, e)}
                      className={`flex items-center gap-1.5 px-2.5 py-1 rounded-full glass-panel text-xs transition-colors ${
                        isLiked ? "text-accent border-accent/40" : "text-white/80 hover:text-white"
                      }`}
                    >
                      <Heart className={`w-3.5 h-3.5 ${isLiked ? "fill-accent" : ""}`} />
                      <span className="font-mono text-[11px]">{pin.likes}</span>
                    </button>
                  </div>
                </div>

                {/* Card Meta */}
                <div className="p-4 bg-black/20">
                  <h4 className="text-sm font-bold text-foreground group-hover:text-white transition-colors mb-1">
                    {pin.title}
                  </h4>
                  <p className="text-xs text-muted-foreground line-clamp-2">
                    {pin.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox Zoom Modal */}
      <AnimatePresence>
        {activeModalPin && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-8 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveModalPin(null)}
              className="fixed inset-0 bg-black/90 backdrop-blur-xl"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative max-w-4xl w-full glass-modal rounded-3xl overflow-hidden z-10 border border-white/20 shadow-2xl flex flex-col md:flex-row"
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveModalPin(null)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors z-20"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Image Preview */}
              <div className="md:w-3/5 bg-black/70 flex items-center justify-center p-4">
                <img
                  src={activeModalPin.image}
                  alt={activeModalPin.title}
                  className="max-h-[70vh] w-auto object-contain rounded-2xl shadow-2xl"
                />
              </div>

              {/* Pin Meta Sidebar */}
              <div className="md:w-2/5 p-6 sm:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-mono uppercase tracking-wider px-3 py-1 rounded-full bg-primary/20 text-primary border border-primary/30">
                      {activeModalPin.category}
                    </span>
                    <span className="text-xs font-mono text-muted-foreground">
                      {activeModalPin.tag}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-3">
                    {activeModalPin.title}
                  </h3>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {activeModalPin.desc}
                  </p>

                  <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/[0.08] mb-6">
                    <p className="text-xs font-mono uppercase text-primary font-semibold mb-1">
                      Studio Architecture
                    </p>
                    <p className="text-xs text-muted-foreground">
                      Curated & Designed by Horizon Graphic Studio (Smart Vista IT Solutions), Varanasi.
                    </p>
                  </div>
                </div>

                <div className="pt-6 border-t border-white/[0.08] flex items-center justify-between gap-3">
                  <button
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      toast.success("Share link copied to clipboard!");
                    }}
                    className="p-2.5 rounded-xl glass-pill text-muted-foreground hover:text-white flex items-center gap-2 text-xs"
                  >
                    <Share2 className="w-4 h-4" /> Share
                  </button>

                  <a
                    href="#contact"
                    onClick={() => setActiveModalPin(null)}
                    className="px-5 py-2.5 rounded-xl glass-button-primary text-white text-xs font-bold uppercase tracking-wider"
                  >
                    Commission Similar
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
