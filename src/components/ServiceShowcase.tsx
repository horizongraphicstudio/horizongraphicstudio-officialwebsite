import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Palette, ChevronLeft, ChevronRight, Layers, Video, PenTool, Package, FileText, CreditCard, Sparkles } from "lucide-react";

const services = [
  {
    image: "/Images/Business Advertisement Video Production-1.png",
    title: "Business Advertisement Videos",
    category: "Video Production & Marketing",
    description: "Horizon Graphic Studio creates business advertisement videos to showcase your company, services, offers, and brand story. Ideal for business introductions, promotional campaigns, and service launches, our videos combine clear messaging with engaging visuals and purposeful editing.",
    icon: Video,
  },
  {
    image: "/Images/Instagram Reels & YouTube Shorts-2.png",
    title: "Instagram Reels & YouTube Shorts",
    category: "Video Production & Marketing",
    description: "Create engaging short-form content with Horizon Graphic Studio. We design and edit Instagram Reels and YouTube Shorts for product highlights, business promotions, announcements, and brand stories. Each video is tailored to your message and vertical viewing format.",
    icon: Video,
  },
  {
    image: "/Images/Logo design & brand identity-3.png",
    title: "Logo Design & Brand Identity",
    category: "Logo Design & Branding",
    description: "Build a consistent visual identity with Horizon Graphic Studio. This service brings together logo design, brand colours, typography, and visual guidelines to help your business maintain a recognisable appearance across print and digital materials.",
    icon: PenTool,
  },
  {
    image: "/Images/Graphic design & marketing creatives-4.png",
    title: "Graphic Design & Marketing Creatives",
    category: "Graphic & Marketing Design",
    description: "Communicate your offers and ideas through professionally designed marketing creatives. We create promotional posters, advertising banners, campaign graphics, and other business visuals with clear layouts and consistent branding.",
    icon: Palette,
  },
  {
    image: "/Images/Luxury product promotional video shoot-5.png",
    title: "Product Promotional Videos",
    category: "Video Production & Marketing",
    description: "Put your products in focus with promotional videos from Horizon Graphic Studio. We create visual content that showcases product features, design details, and key benefits for launches, online promotions, and social media campaigns.",
    icon: Video,
  },
  {
    image: "/Images/Social Media Creative Design-6.png",
    title: "Social Media Creative Design",
    category: "Social Media Design",
    description: "Give your social media pages a consistent and professional appearance. We design static posts, carousel layouts, stories, promotional announcements, and branded social graphics tailored to your content, brand style, and platform format.",
    icon: Layers,
  },
  {
    image: "/Images/Packaging & illustration design-7.png",
    title: "Packaging & Illustration Design",
    category: "Packaging & Illustration",
    description: "Give your products a distinctive presentation with packaging and illustration design. We create artwork for boxes, labels, shopping bags, and other packaging, with custom illustrations to complement your brand.",
    icon: Package,
  },
  {
    image: "/Images/Print and digital media design-8.png",
    title: "Print & Digital Media Design",
    category: "Print & Digital Design",
    description: "Keep your business visuals consistent across paper and screen. We design flyers, posters, banners, and digital promotional materials, adapting layouts to the required dimensions and medium.",
    icon: FileText,
  },
  {
    image: "/Images/Corporate collateral on an executive desk-9.png",
    title: "Corporate & Marketing Collateral",
    category: "Corporate & Stationery Design",
    description: "Present your business consistently with corporate and marketing collateral. We design letterheads, envelopes, presentation folders, sales sheets, and corporate presentation materials that reflect your brand identity.",
    icon: FileText,
  },
  {
    image: "/Images/Brochure and company profile design-10.png",
    title: "Brochure & Company Profile Design",
    category: "Brochure & Publication Design",
    description: "Introduce your business through a professionally designed brochure or company profile. We combine structured layouts, thoughtful typography, and relevant visuals to present your company overview, services, strengths, and portfolio.",
    icon: FileText,
  },
  {
    image: "/Images/Luxury Business Card Design Showcase-11.png",
    title: "Business Card Design",
    category: "Corporate & Stationery Design",
    description: "Make a professional introduction with a custom business card from Horizon Graphic Studio. We create layouts that reflect your brand while keeping your name, role, and contact information clear and readable.",
    icon: CreditCard,
  },
  {
    image: "/Images/Premium Business Logo Design Showcase-12.png",
    title: "Business Logo Design",
    category: "Logo Design & Branding",
    description: "Create a distinctive visual signature for your business with Horizon Graphic Studio. This service focuses on a custom logo shaped around your business name, industry, personality, and intended use.",
    icon: Sparkles,
  },
];

export default function ServiceShowcase() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % services.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [isPaused, next]);

  const service = services[current];
  const Icon = service.icon;

  return (
    <section
      id="services-showcase"
      className="relative py-20 md:py-28 bg-[#070d18] overflow-hidden border-t border-white/[0.04]"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Ambient glow orbs */}
      <div
        className="absolute top-1/3 right-0 w-[600px] h-[600px] rounded-full opacity-10 blur-[160px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(43 85% 54% / 0.5), transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full opacity-8 blur-[140px] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(195 100% 42% / 0.35), transparent 70%)" }}
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
            <Palette className="w-3.5 h-3.5" />
            What We Create
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            Our Creative{" "}
            <span className="bg-gradient-to-r from-[#e5c158] via-[#ffd166] to-[#e5c158] bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="mt-3 text-sm md:text-base text-white/50 max-w-2xl mx-auto">
            From brand identity to motion graphics &mdash; 12 specialized design disciplines under one studio roof.
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
                key={service.image}
                src={service.image}
                alt={service.title}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.7, ease: "easeInOut" }}
                className="absolute inset-0 w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#070d18]/80 via-transparent to-[#070d18]/20" />

            {/* Bottom bar with counter + arrows */}
            <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between z-10">
              <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10">
                <span className="text-sm font-bold text-[#e5c158] font-mono">
                  {String(current + 1).padStart(2, "0")}
                </span>
                <span className="text-xs text-white/40">/</span>
                <span className="text-xs text-white/40 font-mono">
                  {String(services.length).padStart(2, "0")}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Previous service"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={next}
                  className="w-10 h-10 rounded-xl bg-black/50 backdrop-blur-xl border border-white/10 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/10 transition-all"
                  aria-label="Next service"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Progress bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
              <motion.div
                key={"sp-" + current + "-" + isPaused}
                className="h-full bg-gradient-to-r from-[#e5c158] to-[#00b4d8]"
                initial={{ width: "0%" }}
                animate={{ width: isPaused ? undefined : "100%" }}
                transition={{ duration: 5, ease: "linear" }}
              />
            </div>
          </motion.div>

          {/* Right: Service Info */}
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
                {/* Category badge */}
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#00b4d8]/10 border border-[#00b4d8]/20">
                  <Icon className="w-3.5 h-3.5 text-[#00b4d8]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#00b4d8] font-semibold">
                    {service.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-sm md:text-base text-white/50 leading-relaxed">
                  {service.description}
                </p>

                {/* CTA */}
                <div className="flex flex-wrap gap-3 pt-2">
                  <a
                    href="#contact"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-[#e5c158] to-[#ffd166] text-[#070d18] font-bold text-sm hover:shadow-lg hover:shadow-[#e5c158]/25 active:scale-[0.98] transition-all"
                  >
                    Get a Quote
                  </a>
                  <a
                    href="tel:+917518077446"
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-white/[0.06] border border-white/[0.1] text-white font-semibold text-sm hover:bg-white/[0.1] transition-all"
                  >
                    Call Studio
                  </a>
                </div>

                {/* Thumbnail strip */}
                <div className="pt-4 border-t border-white/[0.06]">
                  <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-thin scrollbar-track-transparent scrollbar-thumb-white/10">
                    {services.map((s, i) => (
                      <button
                        key={i}
                        onClick={() => setCurrent(i)}
                        className={"flex-shrink-0 w-14 h-10 rounded-lg overflow-hidden border-2 transition-all duration-300 " +
                          (i === current
                            ? "border-[#e5c158] shadow-md shadow-[#e5c158]/20 scale-105"
                            : "border-transparent opacity-40 hover:opacity-70")
                        }
                        aria-label={"Go to service " + (i + 1)}
                      >
                        <img src={s.image} alt={s.title} className="w-full h-full object-cover" />
                      </button>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
