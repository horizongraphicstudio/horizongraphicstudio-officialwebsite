import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.png";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Ecosystem", href: "#bento" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pinboard", href: "#pinterest" },
  { label: "Pricing", href: "#pricing" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-4 sm:top-5 left-1/2 -translate-x-1/2 w-[94%] max-w-7xl z-50 transition-all duration-500">
      <nav
        className={`rounded-2xl px-5 py-3 transition-all duration-500 ${
          scrolled
            ? "glass-modal shadow-2xl border-white/[0.12] backdrop-blur-2xl"
            : "glass-panel border-white/[0.08]"
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Logo & Parent Company */}
          <a href="#home" className="flex items-center gap-3 group">
            <img
              src={logo}
              alt="Horizon Graphic Studio"
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="text-xs sm:text-sm font-bold tracking-tight text-foreground group-hover:text-primary transition-colors">
                HORIZON GRAPHIC STUDIO
              </span>
              <span className="text-[9px] sm:text-[10px] text-primary/90 font-medium tracking-wide">
                A Smart Vista IT Solutions Company
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs font-semibold text-muted-foreground hover:text-white transition-colors duration-200 tracking-wide uppercase font-mono relative py-1 group"
              >
                <span>{link.label}</span>
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            ))}
          </div>

          {/* Right Action & Availability */}
          <div className="hidden md:flex items-center gap-4">
            <div className="hidden xl:flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 text-[10px] font-mono text-primary">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              <span>Q3/Q4 Booking Open</span>
            </div>

            <a
              href="#contact"
              className="px-5 py-2.5 rounded-xl glass-button-primary text-xs font-bold uppercase tracking-wider flex items-center gap-1.5 hover:scale-105 transition-transform"
            >
              <span>Start Project</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile menu hamburger */}
          <button
            aria-label="Toggle navigation menu"
            className="lg:hidden text-foreground p-2 rounded-xl bg-white/[0.04] border border-white/10 hover:bg-white/[0.08] transition-colors"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Glass Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden mt-2 p-5 rounded-2xl glass-modal border-white/15 shadow-2xl overflow-hidden"
          >
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between pb-2 border-b border-white/10 text-xs">
                <span className="font-semibold text-primary">A Smart Vista IT Solutions Company</span>
                <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              </div>

              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-sm text-muted-foreground hover:text-white transition-colors py-1.5 font-medium flex items-center justify-between border-b border-white/[0.04]"
                >
                  <span>{link.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-primary opacity-60" />
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 w-full py-3 rounded-xl glass-button-primary text-white text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2"
              >
                <span>Initiate Project Brief</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
