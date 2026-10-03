import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Phone, Mail, Globe2, Clock, Building2, ChevronLeft, ChevronRight } from "lucide-react";

const slides = [
  {
    image: "/Images/Carousel-Images (2).png",
    office: "India",
    title: "Varanasi Studio HQ",
    subtitle: "Our Creative Headquarters",
    address: "Maqbool Alam Road, Varanasi, Uttar Pradesh 221002, India",
    phone: "+91-7518077446",
    email: "hello@horizongraphicstudio.co.in",
    hours: "Mon - Sat: 9:30 AM - 7:30 PM IST",
    description:
      "Rooted in the artistic soul of Varanasi \u2014 where centuries of craftsmanship meet cutting-edge digital design. Our India HQ is the creative nerve center powering brand identities, packaging systems, and digital flagships for clients worldwide.",
    flag: "\uD83C\uDDEE\uD83C\uDDF3",
    tagline: "Where Heritage Meets Innovation",
  },
  {
    image: "/Images/Carousel-Images (1).png",
    office: "United Kingdom",
    title: "London Design Bureau",
    subtitle: "European Operations Hub",
    address: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, UK",
    phone: "+44-20-7946-0958",
    email: "hello@horizongraphicstudio.co.uk",
    hours: "Mon - Fri: 9:00 AM - 6:00 PM GMT",
    description:
      "Our London bureau serves as the gateway to European and global enterprise clients. From luxury brand consulting to large-scale digital transformation, we bring Indian craftsmanship to the world's most demanding markets.",
    flag: "\uD83C\uDDEC\uD83C\uDDE7",
    tagline: "Global Reach, Local Excellence",
  },
];

export default function OfficeCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const slide = slides[current];

  return (
    <section
      className="relative py-20 md:py-28 bg-[#070d18] overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full opacity-15 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 85% 54% / 0.4), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full opacity-10 blur-[120px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(195 100% 42% / 0.4), transparent 70%)" }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/[0.04] border border-white/[0.08] text-xs font-mono uppercase tracking-widest text-[#e5c158] mb-4">
            <Globe2 className="w-3.5 h-3.5" />
            Our Global Presence
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Two Studios,{" "}
            <span className="bg-gradient-to-r from-[#e5c158] via-[#ffd166] to-[#e5c158] bg-clip-text text-transparent">
              One Vision
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/50 max-w-xl mx-auto">
            Delivering world-class creative solutions from India and the United Kingdom.
          </p>
        </motion.div>

        {/* Carousel Content */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Left: Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative rounded-3xl overflow-hidden aspect-[4/3] lg:aspect-auto lg:min-h-[480px] group"
          >
            <AnimatePresence mode="wait">
              <motion.img
                key={slide.image}
                src={slide.image}
                alt={slide.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d18]/80 via-transparent to-[#070d18]/30" />

            {/* Image bottom badge */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10">
                <span className="text-xl">{slide.flag}</span>
                <span className="text-sm font-semibold text-white">{slide.office}</span>
              </div>

              {/* Nav arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Previous slide"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Next slide"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                key={"progress-" + current + "-" + isPaused}
                className="h-full bg-gradient-to-r from-[#e5c158] to-[#00b4d8]"
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{ duration: 6, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right: Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-center"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="space-y-6"
              >
                {/* Office badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#e5c158]/10 border border-[#e5c158]/20">
                  <Building2 className="w-3.5 h-3.5 text-[#e5c158]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#e5c158] font-semibold">
                    {slide.subtitle}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {slide.title}
                </h3>

                {/* Tagline */}
                <p className="text-base md:text-lg text-[#e5c158]/80 font-medium italic">
                  &quot;{slide.tagline}&quot;
                </p>

                {/* Description */}
                <p className="text-sm md:text-base text-white/50 leading-relaxed">
                  {slide.description}
                </p>

                {/* Contact details grid */}
                <div className="grid gap-4 pt-2">
                  <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                    <div className="w-9 h-9 rounded-xl bg-[#e5c158]/10 border border-[#e5c158]/20 flex items-center justify-center shrink-0">
                      <MapPin className="w-4 h-4 text-[#e5c158]" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white/80 uppercase tracking-wider">Address</p>
                      <p className="text-sm text-white/50 mt-0.5">{slide.address}</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-[#00b4d8]/10 border border-[#00b4d8]/20 flex items-center justify-center shrink-0">
                        <Phone className="w-4 h-4 text-[#00b4d8]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/80 uppercase tracking-wider">Phone</p>
                        <p className="text-sm text-white/50 mt-0.5 font-mono">{slide.phone}</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-3 p-4 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] transition-colors">
                      <div className="w-9 h-9 rounded-xl bg-[#e5c158]/10 border border-[#e5c158]/20 flex items-center justify-center shrink-0">
                        <Mail className="w-4 h-4 text-[#e5c158]" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-white/80 uppercase tracking-wider">Email</p>
                        <p className="text-sm text-white/50 mt-0.5 font-mono">{slide.email}</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-xl bg-white/[0.02] border border-white/[0.05]">
                    <Clock className="w-4 h-4 text-[#e5c158] shrink-0" />
                    <span className="text-xs text-white/40">{slide.hours}</span>
                  </div>
                </div>

                {/* Slide indicator dots */}
                <div className="flex items-center gap-2 pt-2">
                  {slides.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrent(i)}
                      className={"h-2 rounded-full transition-all duration-500 " +
                        (i === current
                          ? "w-8 bg-gradient-to-r from-[#e5c158] to-[#00b4d8]"
                          : "w-2 bg-white/20 hover:bg-white/40")
                      }
                      aria-label={"Go to slide " + (i + 1)}
                    />
                  ))}
                  <span className="ml-3 text-[11px] text-white/30 font-mono">
                    {String(current + 1).padStart(2, "0")} / {String(slides.length).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



