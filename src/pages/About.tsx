// import Layout from "@/components/Layout";
// import AnimatedSection from "@/components/AnimatedSection";
// import aboutTeam from "@/assets/about-team.jpg";
// import millets from "@/assets/millets.jpg";

// const About = () => (
//   <Layout>
//     {/* Hero */}
//     <section className="py-16 lg:py-24 bg-section-dark text-cream">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="max-w-3xl mx-auto text-center">
//           <span className="text-accent text-sm font-medium uppercase tracking-wider">About Us</span>
//           <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
//             From Roots to <span className="text-accent">Revolution</span>
//           </h1>
//           <p className="text-cream/80 text-lg leading-relaxed">
//             Root to Rise is a nutrition-focused food brand built to address the growing health challenges caused by processed and convenience-based diets. We provide clean, balanced meals made from natural ingredients that support energy, immunity, and long-term well-being.
//           </p>
//         </AnimatedSection>
//       </div>
//     </section>

//     {/* Brand Story */}
//     <section className="py-16 lg:py-24 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <AnimatedSection>
//             <img src={aboutTeam} alt="Our team at work" className="rounded-2xl shadow-xl w-full" />
//           </AnimatedSection>
//           <AnimatedSection delay={0.15}>
//             <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Brand Story</h2>
//             <p className="text-muted-foreground leading-relaxed mb-5">
//               Designed for students and working professionals, Root to Rise prioritizes quality, transparency, and sustainable nutrition — helping people move away from quick fixes toward healthier daily habits.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-5">
//               It started with a simple observation by our founder, <strong className="text-foreground">Alekhya</strong>. In the rush to build careers, pass exams, and chase dreams, the most ambitious generation was fueling itself with "Slow Poison."
//             </p>
//             <p className="text-muted-foreground leading-relaxed">
//               Students surviving on instant noodles. Professionals crashing after sugary snacks. We were rising in careers, but our health was sinking. Root to Rise was born to change that.
//             </p>
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>

//     {/* Mission */}
//     <section className="py-16 lg:py-24 bg-card">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
//           <AnimatedSection>
//             <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
//             <p className="text-muted-foreground leading-relaxed mb-5">
//               To build a healthier world by reconnecting the modern generation with the purity of nature. We aim to empower every individual to stop the cycle of processed addiction.
//             </p>
//             <p className="text-muted-foreground leading-relaxed mb-5">
//               The solution to modern health problems is not in a laboratory, but in our roots. We look back at the Ancient Powerhouses of India — resilient millets, vibrant fruits, and pure natural ingredients.
//             </p>
//             <a
//               href="https://wa.me/919381597312"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
//             >
//               Join the Movement
//             </a>
//           </AnimatedSection>
//           <AnimatedSection delay={0.15}>
//             <img src={millets} alt="Organic millets" className="rounded-2xl shadow-xl w-full" />
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default About;
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import aboutTeam from "@/assets/about-team.jpg";
import millets from "@/assets/millets.jpg";
import { ShieldCheck, Truck, Award } from "lucide-react";

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="py-16 lg:py-24 bg-section-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="max-w-3xl mx-auto text-center">
          <span className="text-accent text-sm font-medium uppercase tracking-wider">About Us</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
            From Roots to <span className="text-accent">Revolution</span>
          </h1>
          <p className="text-cream/80 text-lg leading-relaxed">
            Root to Rise is a nutrition-focused food brand built to address the growing health challenges caused by processed and convenience-based diets. We provide clean, balanced meals made from natural ingredients that support energy, immunity, and long-term well-being.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Brand Story & Founder */}
    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <img src={aboutTeam} alt="Our team at work" className="rounded-2xl shadow-xl w-full" />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Brand Story</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              Designed for students and working professionals, Root to Rise prioritizes quality, transparency, and sustainable nutrition — helping people move away from quick fixes toward healthier daily habits.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              It started with a simple observation by our founder, <strong className="text-foreground text-lg italic">Alekhya Satyanarayan Nelli</strong>. In the rush to build careers, pass exams, and chase dreams, the most ambitious generation was fueling itself with "Slow Poison."
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Students surviving on instant noodles. Professionals crashing after sugary snacks. We were rising in careers, but our health was sinking. Root to Rise was born in Jubilee Hills, Hyderabad, to change that narrative.
            </p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Values & Delivery Section */}
    <section className="py-12 bg-accent/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <AnimatedSection className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <ShieldCheck className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-display font-bold text-lg mb-2">FSSAI Certified</h3>
            <p className="text-sm text-muted-foreground">Operating under License No: 23625030006361, ensuring the highest food safety standards.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.1} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <Truck className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-display font-bold text-lg mb-2">Home Delivery</h3>
            <p className="text-sm text-muted-foreground">Freshly prepared millet nutrition delivered straight to your campus or home doorstep every morning.</p>
          </AnimatedSection>

          <AnimatedSection delay={0.2} className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm">
            <Award className="w-12 h-12 text-accent mb-4" />
            <h3 className="font-display font-bold text-lg mb-2">100% Organic</h3>
            <p className="text-sm text-muted-foreground">No preservatives. No hidden sugars. Just the ancient power of millets and natural ingredients.</p>
          </AnimatedSection>
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 lg:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <AnimatedSection>
            <h2 className="font-display text-3xl font-bold text-foreground mb-6">Our Mission</h2>
            <p className="text-muted-foreground leading-relaxed mb-5">
              To build a healthier world by reconnecting the modern generation with the purity of nature. We aim to empower every individual to stop the cycle of processed addiction.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-5">
              The solution to modern health problems is not in a laboratory, but in our roots. We look back at the Ancient Powerhouses of India — resilient millets, vibrant fruits, and pure natural ingredients.
            </p>
            <a
              href="https://wa.me/919381597312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              Order for Delivery
            </a>
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <img src={millets} alt="Organic millets" className="rounded-2xl shadow-xl w-full" />
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default About;