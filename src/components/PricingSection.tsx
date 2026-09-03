import { useState } from "react";
import { Check, Sparkles, ArrowRight, HelpCircle, Shield, Zap, Crown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const pricingPlans = [
  {
    id: "starter",
    name: "Starter Identity",
    icon: Zap,
    tagline: "Tailored for ambitious Indian startups, local businesses, and new ventures.",
    projectPrice: "₹4,999",
    retainerPrice: "₹3,999",
    turnaround: "5-7 Business Days",
    popular: false,
    deliverables: [
      "Custom Vector Logo (3 Unique Concepts)",
      "Premium Visiting Card & Letterhead Dielines",
      "Official Color Palette & Font Hierarchy",
      "Social Media Display Kit (Avatar + Banner)",
      "High-Res Files (.AI, .EPS, .SVG, .PNG, .PDF)",
      "3 Comprehensive Rounds of Revisions",
      "100% Commercial Copyright Ownership",
    ],
  },
  {
    id: "growth",
    name: "Growth Studio Suite",
    icon: Sparkles,
    tagline: "Our most popular complete package. Brand identity, packaging, and digital assets.",
    projectPrice: "₹14,999",
    retainerPrice: "₹11,999",
    turnaround: "10-14 Business Days",
    popular: true,
    deliverables: [
      "Everything in Starter Identity Tier",
      "Luxury Product Packaging / Box Dielines / Label",
      "Brochure, Pamphlet & Outdoor Flex Graphics",
      "Social Media Ad Creatives (10 Custom Templates)",
      "Photorealistic 3D Product Mockups",
      "Complete Brand Style Guide Document (PDF)",
      "Direct Senior Art Director Collaboration",
      "Fast 24-Hour Revision Turnaround",
    ],
  },
  {
    id: "enterprise",
    name: "Enterprise 360° Partner",
    icon: Crown,
    tagline: "Full-service creative direction retainer for established brands and scaling companies.",
    projectPrice: "₹29,999",
    retainerPrice: "₹24,999",
    turnaround: "Priority 24/7 Delivery",
    popular: false,
    deliverables: [
      "Full 360° Studio Retainer & Agency Support",
      "Unlimited Marketing Collaterals & Campaign Assets",
      "3D CGI Visuals & Social Reel Motion Videos",
      "Large-Format Billboards & Exhibition Stalls",
      "Physical Print Supervision in Varanasi / UP",
      "Dedicated WhatsApp VIP Creative Group",
      "Complete Website / E-Commerce UI Design (Figma)",
      "Unlimited Revisions with Zero Friction",
    ],
  },
];

const faqs = [
  {
    q: "How does the design process work once we sign?",
    a: "Within 24 hours of onboarding, you receive access to your private studio portal. We conduct an intensive 90-minute strategic discovery session, review your competitive moat, and present initial concept directions within 72 hours.",
  },
  {
    q: "Do we own full commercial rights and vector source files?",
    a: "Absolutely. Upon final milestone payment, 100% of global copyright, intellectual property, and master source files (.AI, .SVG, .EPS, .FIG, .PSD, .C4D) are transferred to your company without licensing royalties.",
  },
  {
    q: "Can you manage physical printing and packaging manufacturing?",
    a: "Yes! Rooted in Varanasi with deep ties to high-grade textile mills, foil printers, and box manufacturers across India, we oversee paper stock selection (600+ GSM cotton, handmade silk papers), hot-foil plate tests, and vendor proofs.",
  },
  {
    q: "What if we need ongoing graphic design work each month?",
    a: "Our Monthly Retainer option allows you to reserve a guaranteed bandwidth of senior design talent each month with prioritized 48-hour turnarounds on collateral, social ads, packaging variants, and pitch decks.",
  },
];

export default function PricingSection() {
  const [billingType, setBillingType] = useState<"project" | "retainer">("project");

  return (
    <section id="pricing" className="py-24 md:py-32 bg-card relative overflow-hidden border-t border-white/[0.06]">
      {/* Background radiant orbs */}
      <div className="absolute top-1/4 right-1/4 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full glass-pill text-xs font-mono tracking-widest text-primary uppercase mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Transparent Investment Tiers</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold tracking-tight text-foreground mb-4">
            World-Class Design. <span className="text-gradient-accent">Guaranteed Outcomes.</span>
          </h2>
          <p className="text-muted-foreground text-base md:text-lg mb-8">
            Clear, transparent agency packages tailored for category creators. Zero hidden fees or endless retainers.
          </p>

          {/* Billing Cycle Switcher */}
          <div className="inline-flex items-center p-1.5 rounded-2xl glass-panel border-white/10">
            <button
              onClick={() => setBillingType("project")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all ${
                billingType === "project"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              Fixed Project Sprint
            </button>
            <button
              onClick={() => setBillingType("retainer")}
              className={`px-5 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                billingType === "retainer"
                  ? "bg-primary text-primary-foreground shadow-md shadow-primary/20"
                  : "text-muted-foreground hover:text-white"
              }`}
            >
              <span>Monthly Retainer</span>
              <span className="text-[10px] px-1.5 py-0.2 rounded bg-accent text-white uppercase font-mono">
                Save 15%
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto mb-20 items-stretch">
          {pricingPlans.map((plan) => {
            const Icon = plan.icon;
            const price = billingType === "project" ? plan.projectPrice : plan.retainerPrice;

            return (
              <div
                key={plan.id}
                className={`relative rounded-3xl p-8 flex flex-col justify-between transition-all duration-500 ${
                  plan.popular
                    ? "glass-modal border-primary/50 shadow-2xl shadow-primary/15 scale-[1.03] z-10"
                    : "glass-panel border-white/[0.08] hover:border-white/25"
                }`}
              >
                {/* Popular Highlight Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-primary to-accent text-white text-[11px] font-mono font-bold uppercase tracking-wider shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3.5 h-3.5" /> Most Popular Choice
                  </div>
                )}

                <div>
                  {/* Card Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-white/[0.05] border border-white/10 flex items-center justify-center text-primary">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-white/[0.04] text-muted-foreground border border-white/5">
                      {plan.turnaround}
                    </span>
                  </div>

                  <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed mb-6">
                    {plan.tagline}
                  </p>

                  {/* Price Block */}
                  <div className="mb-6 p-4 rounded-2xl bg-black/40 border border-white/[0.06]">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-extrabold text-foreground">{price}</span>
                      <span className="text-xs text-muted-foreground font-mono">
                        {billingType === "project" ? "/ flat sprint" : "/ month retainer"}
                      </span>
                    </div>
                    <div className="text-xs font-mono text-primary mt-1">
                      Complete Vector Masters & Commercial License Included
                    </div>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="space-y-3 mb-8">
                    <p className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground font-bold">
                      Included Deliverables:
                    </p>
                    {plan.deliverables.map((item) => (
                      <div key={item} className="flex items-start gap-2.5 text-xs text-foreground/90">
                        <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action */}
                <a
                  href={`#contact?plan=${plan.id}`}
                  className={`w-full py-4 rounded-xl font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-transform hover:scale-[1.02] active:scale-[0.98] ${
                    plan.popular
                      ? "glass-button-primary text-white"
                      : "glass-pill text-foreground hover:border-primary/40"
                  }`}
                >
                  <span>Select {plan.name}</span>
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            );
          })}
        </div>

        {/* FAQ Accordion */}
        <div className="max-w-4xl mx-auto pt-12 border-t border-white/[0.08]">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2 flex items-center justify-center gap-2">
              <HelpCircle className="w-5 h-5 text-primary" /> Frequently Asked Inquiries
            </h3>
            <p className="text-sm text-muted-foreground">
              Everything you need to know about partnering with Horizon Graphic Studio.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, idx) => (
              <AccordionItem
                key={idx}
                value={`item-${idx}`}
                className="glass-panel px-6 py-2 rounded-2xl border-white/[0.08] hover:border-white/20 transition-colors"
              >
                <AccordionTrigger className="text-base font-semibold text-foreground hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pt-2">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
}
