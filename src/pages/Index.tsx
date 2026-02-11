import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Package, Leaf, Utensils, Recycle, IndianRupee, Clock, Truck } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import milletBowl from "@/assets/millet-bowl.jpg";
import juice from "@/assets/juice.jpg";
import laddus from "@/assets/laddus.jpg";
import millets from "@/assets/millets.jpg";
import subscriptionBox from "@/assets/subscription-box.jpg";

const WHATSAPP = "https://wa.me/919381597312";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src={heroBg} alt="Organic millet bowls" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-section-dark/90 via-section-dark/70 to-section-dark/40" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
          <AnimatedSection className="max-w-2xl">
            <span className="inline-block bg-accent/20 text-accent px-4 py-1.5 rounded-full text-sm font-medium mb-6 border border-accent/30">
              🌱 100% Organic Millet Nutrition
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-cream leading-tight mb-6">
              Fuel Your Rise with{" "}
              <span className="text-accent">Pure Nutrition</span>
            </h1>
            <p className="text-lg text-cream/80 mb-10 max-w-xl leading-relaxed">
              We deliver 100% organic millet-based health bowls straight to your campus and hostel. Fresh every morning, designed for your wellness journey.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href="/get-started"
                className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
              >
                Subscribe Now
              </a>
              <a
                href="/services"
                className="inline-flex items-center justify-center rounded-full border-2 border-cream/30 px-8 py-3.5 text-base font-semibold text-cream hover:bg-cream/10 transition-colors"
              >
                Explore Plans
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* What's Inside the Box */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              🎁 What's Inside the Box?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Every morning, you receive a carefully curated nutrition box delivered fresh to your doorstep.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { img: milletBowl, title: "1x Millet Power Bowl", desc: "Rotating menu with 22 different bowls — never boring!" },
              { img: juice, title: "1x Cold-Pressed Vitality Juice", desc: "Fresh cold-pressed juice for natural energy and immunity." },
              { img: laddus, title: "2x Signature Health Laddus", desc: "Made with seeds, nuts, dry fruits and natural jaggery." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.15}>
                <div className="bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow group">
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-display text-xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection className="text-center">
            <div className="inline-block bg-accent/10 border border-accent/30 rounded-2xl px-8 py-5 mb-6">
              <p className="text-lg font-semibold text-accent">🎉 Get 10% OFF on your first month subscription</p>
            </div>
            <br />
            <a
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              Subscribe Now 🚀
            </a>
          </AnimatedSection>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-16 lg:py-24 bg-section-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection>
              <span className="text-accent text-sm font-medium uppercase tracking-wider">Our Purpose</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold mt-3 mb-6">
                Our Vision & Mission
              </h2>
              <p className="text-cream/80 leading-relaxed mb-6">
                At Root to Rise, we aren't just serving meals; we are leading a <strong className="text-accent">Nutrition Movement</strong>. Our mission is to build a healthier world by reconnecting the modern generation with the purity of nature.
              </p>
              <p className="text-cream/80 leading-relaxed mb-6">
                We aim to empower every individual to stop the cycle of processed addiction. The solution to modern health problems is not in a laboratory, but in our roots.
              </p>
              <p className="text-cream/80 leading-relaxed">
                We look back at the <strong className="text-accent">Ancient Powerhouses of India</strong> — resilient millets, vibrant fruits, and pure natural ingredients — to fuel the body without harming it.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <img
                src={millets}
                alt="Organic millets"
                className="rounded-2xl shadow-2xl w-full"
              />
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* The Root to Rise Story */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <AnimatedSection delay={0.1} className="order-2 lg:order-1">
              <img
                src={subscriptionBox}
                alt="Subscription box"
                className="rounded-2xl shadow-xl w-full"
              />
            </AnimatedSection>
            <AnimatedSection className="order-1 lg:order-2">
              <span className="text-accent text-sm font-medium uppercase tracking-wider">Our Story</span>
              <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mt-3 mb-4">
                The Realization
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-5">
                It started with a simple observation by our founder, <strong className="text-foreground">Alekhya</strong>.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                In the rush to build careers, pass exams, and chase dreams, we noticed a heartbreaking trend: the most ambitious generation was fueling itself with <strong className="text-foreground">"Slow Poison."</strong>
              </p>
              <p className="text-muted-foreground leading-relaxed mb-5">
                We saw students surviving on instant noodles, professionals crashing after sugary snacks, and a world where "convenience" meant chemicals, preservatives, and refined waste.
              </p>
              <p className="text-muted-foreground leading-relaxed font-medium text-foreground">
                We were rising in our careers, but our health was sinking.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section id="services" className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-12 lg:mb-16">
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              Why Choose Us?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">The pillars that make Root to Rise your healthiest choice.</p>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Leaf size={32} />, title: "Zero Policy", desc: "0% Preservatives. 0% Refined Sugar. 0% Artificial Colors." },
              { icon: <Utensils size={32} />, title: "Millet Foundation", desc: "We use Ragi, Jowar, and Bajra for sustained 6-hour energy." },
              { icon: <Package size={32} />, title: "Freshness First", desc: "Prepared daily using cold-pressed oils and natural jaggery." },
              { icon: <Recycle size={32} />, title: "Eco-Friendly Packaging", desc: "Hygienic, sustainable packaging for every delivery." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
            {[
              { icon: <Utensils size={32} />, title: "22 Nutrition Bowls", desc: "Not repeating more than twice in a month. Endless variety!" },
              { icon: <IndianRupee size={32} />, title: "Affordable & Student-Friendly", desc: "Premium nutrition at prices that fit student budgets." },
              { icon: <Truck size={32} />, title: "Campus Delivery", desc: "Delivered fresh every morning to your campus and hostel." },
            ].map((item, i) => (
              <AnimatedSection key={i} delay={i * 0.1}>
                <div className="bg-background rounded-2xl p-8 text-center shadow-md hover:shadow-lg transition-shadow h-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 text-accent mb-5">
                    {item.icon}
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Business Info */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="relative rounded-3xl p-10 lg:p-16 text-primary-foreground text-center overflow-hidden">
            <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
            <div className="absolute inset-0 bg-primary/85" />
            <div className="relative">
            <Clock size={48} className="mx-auto mb-6 text-accent" />
            <h2 className="font-display text-3xl lg:text-4xl font-bold mb-4">Business Hours</h2>
            <p className="text-xl mb-2">Morning 7:00 AM – 12:00 PM</p>
            <p className="text-lg opacity-80 mb-6">Monday to Friday Only</p>
            <div className="inline-flex items-center gap-2 bg-accent/20 border border-accent/30 rounded-full px-6 py-3 text-accent font-semibold mb-8">
              <Truck size={20} /> Campus & Hostel Delivery Available
            </div>
            <br />
            <a
              href="/get-started"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              Start Your Subscription
            </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
