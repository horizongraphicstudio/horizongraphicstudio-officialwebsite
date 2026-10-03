import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Sparkles, Phone, ArrowRight } from "lucide-react";

export default function ExitIntentPopup() {
  const [show, setShow] = useState(false);
  const [hasShown, setHasShown] = useState(false);

  const triggerPopup = useCallback(() => {
    if (hasShown) return;
    const dismissed = sessionStorage.getItem("exit-popup-dismissed");
    if (dismissed) return;
    setShow(true);
    setHasShown(true);
  }, [hasShown]);

  useEffect(() => {
    // Desktop: mouse leaves viewport from top
    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        triggerPopup();
      }
    };

    // Mobile/Tab close: beforeunload
    const handleBeforeUnload = () => {
      triggerPopup();
    };

    // Visibility change (tab switch)
    const handleVisibilityChange = () => {
      if (document.visibilityState === "hidden") {
        triggerPopup();
      }
    };

    // Delay listeners so they don't fire immediately
    const timer = setTimeout(() => {
      document.addEventListener("mouseleave", handleMouseLeave);
      window.addEventListener("beforeunload", handleBeforeUnload);
      document.addEventListener("visibilitychange", handleVisibilityChange);
    }, 5000);

    return () => {
      clearTimeout(timer);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("beforeunload", handleBeforeUnload);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [triggerPopup]);

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("exit-popup-dismissed", "true");
  };

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[99998] bg-black/70 backdrop-blur-md"
            onClick={handleClose}
          />

          {/* Popup Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ duration: 0.5, type: "spring", bounce: 0.3 }}
            className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
          >
            <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-[#0a1124]/95 backdrop-blur-2xl shadow-2xl shadow-[#e5c158]/10">
              {/* Decorative top gold line */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#e5c158] to-transparent" />

              {/* Close button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:bg-white/10 transition-all"
                aria-label="Close popup"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Sparkle badge */}
              <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#e5c158]/15 border border-[#e5c158]/25">
                <Sparkles className="w-3.5 h-3.5 text-[#e5c158]" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-[#e5c158]">Limited Offer</span>
              </div>

              {/* Diwali Offer Image */}
              <div className="w-full aspect-[16/10] relative overflow-hidden">
                <img
                  src="/DiwaliOffer.png"
                  alt="Diwali Special Offer - Horizon Graphic Studio"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a1124] via-transparent to-transparent" />
              </div>

              {/* Content below image */}
              <div className="px-6 pb-6 pt-2 space-y-4">
                <div className="text-center">
                  <h3 className="text-xl md:text-2xl font-bold text-white">
                    Wait! Don&apos;t Miss Our{" "}
                    <span className="bg-gradient-to-r from-[#e5c158] via-[#ffd166] to-[#e5c158] bg-clip-text text-transparent">
                      Diwali Special
                    </span>
                  </h3>
                  <p className="text-sm text-white/50 mt-2 max-w-sm mx-auto leading-relaxed">
                    Celebrate the Festival of Lights with exclusive design packages at unbeatable prices. Limited slots available!
                  </p>
                </div>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+917518077446"
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#ffd166] text-[#070d18] font-bold text-sm hover:shadow-lg hover:shadow-[#e5c158]/25 active:scale-[0.98] transition-all"
                  >
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                  <a
                    href="#contact"
                    onClick={handleClose}
                    className="flex-1 flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all"
                  >
                    Get a Quote
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-center text-[10px] text-white/25 font-mono uppercase tracking-wider">
                  Offer valid for a limited time only &bull; T&amp;C Apply
                </p>
              </div>

              {/* Bottom gold accent */}
              <div className="absolute bottom-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#e5c158]/30 to-transparent" />
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
