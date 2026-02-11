import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Star } from "lucide-react";
import subscriptionBox from "@/assets/subscription-box.jpg";
import milletBowl from "@/assets/millet-bowl.jpg";

const WHATSAPP = "https://wa.me/919381597312";

const plans = [
  {
    name: "Trial Pack",
    duration: "5 Days",
    price: "₹999",
    originalPrice: null,
    features: ["Millet Power Bowl", "Cold-Pressed Juice", "Health Laddus"],
    popular: false,
  },
  {
    name: "Students Plan",
    duration: "22 Days",
    price: "₹2,500",
    originalPrice: "₹2,999",
    features: ["Meal or Bowl Box", "Millet Java", "15% Discount Applied"],
    popular: true,
  },
  {
    name: "Professionals Plan",
    duration: "22 Days",
    price: "₹2,975",
    originalPrice: "₹3,499",
    features: ["Meal or Bowl Box", "Detox Water", "Healthy Dry Fruit Seeds Laddu", "15% Discount Applied"],
    popular: false,
  },
  {
    name: "Diabetic Care",
    duration: "22 Days",
    price: "₹3,399",
    originalPrice: "₹3,999",
    features: ["Meal or Bowl Box", "Millet Java", "Healthy Seeds Laddu", "15% Discount Applied"],
    popular: false,
  },
];

const Services = () => (
  <Layout>
    {/* Hero */}
    <section className="py-16 lg:py-24 bg-section-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Our Plans</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Select Your <span className="text-accent">Plan</span>
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            22-Day Rotational Millet Bowl Plan — no bowl repeated more than twice. Delivered fresh every morning.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col bg-card text-card-foreground shadow-lg ${
                  plan.popular ? "ring-2 ring-accent" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-accent text-accent-foreground px-4 py-1 rounded-full text-xs font-bold">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl font-bold mb-1">{plan.name}</h3>
                <p className="text-sm mb-5 text-muted-foreground">
                  {plan.duration}
                </p>
                <div className="mb-6">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-sm line-through ml-2 text-muted-foreground">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm">
                      <Check size={16} className={`mt-0.5 shrink-0 ${plan.popular ? "text-accent" : "text-accent"}`} />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-opacity hover:opacity-90 bg-primary text-primary-foreground"
                >
                  Start Subscription
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Feature Highlight */}
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={subscriptionBox} alt="Subscription box" className="rounded-2xl shadow-xl w-full" />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">What You Get Every Day</h2>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <Check size={20} className="text-accent mt-0.5 shrink-0" />
                <span>Fresh millet power bowl from a rotating menu of 22 varieties</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-accent mt-0.5 shrink-0" />
                <span>Cold-pressed vitality juice or detox water</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-accent mt-0.5 shrink-0" />
                <span>Signature health laddus made with natural jaggery</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-accent mt-0.5 shrink-0" />
                <span>Eco-friendly hygienic packaging</span>
              </li>
              <li className="flex items-start gap-3">
                <Check size={20} className="text-accent mt-0.5 shrink-0" />
                <span>Delivered fresh every morning to your campus</span>
              </li>
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;
