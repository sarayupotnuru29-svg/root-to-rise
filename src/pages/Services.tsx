// import Layout from "@/components/Layout";
// import AnimatedSection from "@/components/AnimatedSection";
// import { Check, Star, Clock, HeartHandshake, Truck, RefreshCcw, User, ShieldCheck } from "lucide-react";
// import subscriptionBox from "@/assets/subscription-box.jpg";

// const plans = [
//   {
//     name: "Trial Pack",
//     duration: "5 Days",
//     price: "₹999",
//     originalPrice: null,
//     features: ["Millet Power Bowl", "Cold-Pressed Juice", "Health Laddus"],
//     popular: false,
//   },
//   {
//     name: "Cold Pressed Juices",
//     duration: "20 Days",
//     price: "₹1,999",
//     originalPrice: null,
//     features: ["Daily Vitality Juice", "100% Natural & Fresh", "Detox & Refresh"],
//     popular: false,
//   },
//   {
//     name: "Students Plan",
//     duration: "22 Days",
//     price: "₹2,500",
//     originalPrice: "₹2,999",
//     features: ["Meal or Bowl Box", "Millet Java", "15% Discount Applied"],
//     popular: true,
//   },
//   {
//     name: "Professionals Plan",
//     duration: "22 Days",
//     price: "₹2,975",
//     originalPrice: "₹3,499",
//     features: ["Meal or Bowl Box", "Detox Water", "Healthy Dry Fruit Seeds Laddu", "15% Discount Applied"],
//     popular: false,
//   },
//   {
//     name: "Diabetic Care",
//     duration: "22 Days",
//     price: "₹3,399",
//     originalPrice: "₹3,999",
//     features: ["Meal or Bowl Box", "Millet Java", "Healthy Seeds Laddu", "15% Discount Applied"],
//     popular: false,
//   },
// ];

// const Services = () => (
//   <Layout>
//     {/* Hero Section */}
//     <section className="py-16 lg:py-24 bg-[#1A3C34] text-[#FDFCF0]">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//         <AnimatedSection>
//           <span className="text-[#EAB308] text-sm font-medium uppercase tracking-wider">Our Plans</span>
//           <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
//             Select Your <span className="text-[#EAB308]">Plan</span>
//           </h1>
//           <p className="text-[#FDFCF0]/80 text-lg max-w-2xl mx-auto">
//             22-Day Rotational Millet Bowl Plan — no bowl repeated more than twice. Delivered fresh every morning.
//           </p>
//         </AnimatedSection>
//       </div>
//     </section>

//     {/* Pricing Cards */}
//     <section className="py-16 lg:py-24 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
//           {plans.map((plan, i) => (
//             <AnimatedSection key={i} delay={i * 0.1}>
//               <div
//                 className={`relative rounded-2xl p-8 h-full flex flex-col bg-white border-2 border-[#1A3C34]/10 shadow-lg ${
//                   plan.popular ? "ring-2 ring-[#EAB308] border-transparent" : ""
//                 }`}
//               >
//                 {plan.popular && (
//                   <div className="absolute -top-3 left-1/2 -translate-x-1/2">
//                     <span className="inline-flex items-center gap-1 bg-[#EAB308] text-[#1A3C34] px-4 py-1 rounded-full text-xs font-bold">
//                       <Star size={12} fill="currentColor" /> Most Popular
//                     </span>
//                   </div>
//                 )}
//                 <h3 className="font-display text-xl font-bold mb-1 text-[#1A3C34]">{plan.name}</h3>
//                 <p className="text-sm mb-5 text-slate-500">{plan.duration}</p>
//                 <div className="mb-6">
//                   <span className="text-3xl font-bold text-[#1A3C34]">{plan.price}</span>
//                   {plan.originalPrice && (
//                     <span className="text-sm line-through ml-2 text-slate-400">
//                       {plan.originalPrice}
//                     </span>
//                   )}
//                 </div>
//                 <ul className="space-y-3 mb-8 flex-1">
//                   {plan.features.map((f, j) => (
//                     <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
//                       <Check size={16} className="mt-0.5 shrink-0 text-[#EAB308]" />
//                       {f}
//                     </li>
//                   ))}
//                 </ul>
//                 <a
//                   href="https://wa.me/919381597312"
//                   className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all bg-[#1A3C34] text-white hover:bg-[#EAB308] hover:text-[#1A3C34]"
//                 >
//                   Start Subscription
//                 </a>
//               </div>
//             </AnimatedSection>
//           ))}
//         </div>
//       </div>
//     </section>

//     {/* Rules of Engagement Banner (Original Deep Green Style) */}
//     <section className="py-12 bg-white">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <AnimatedSection className="bg-[#1A3C34] rounded-3xl p-8 text-white shadow-xl">
//           {/* Header row: Founder and FSSAI */}
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-8 mb-8">
//             <div className="flex items-center gap-4">
//               <div className="bg-[#EAB308] p-3 rounded-full text-[#1A3C34]">
//                 <User size={24} />
//               </div>
//               <div>
//                 <p className="text-xs text-[#EAB308] uppercase font-bold tracking-widest">Founder</p>
//                 <h4 className="text-xl font-bold">Alekhya Satyanarayan Nelli</h4>
//               </div>
//             </div>
//             <div className="flex items-center gap-4">
//               <div className="bg-[#EAB308] p-3 rounded-full text-[#1A3C34]">
//                 <ShieldCheck size={24} />
//               </div>
//               <div>
//                 <p className="text-xs text-[#EAB308] uppercase font-bold tracking-widest">FSSAI Registration</p>
//                 <h4 className="text-xl font-bold font-mono">23625030006361</h4>
//               </div>
//             </div>
//           </div>

//           {/* Rules Content Grid */}
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
//             {/* Pause Policy */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Clock className="text-[#EAB308]" size={20} />
//                 <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">The "Pause" Policy</h3>
//               </div>
//               <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
//                 <li>Notify us via WhatsApp by <strong>7:00 PM</strong> the previous evening to pause.</li>
//                 <li>Paused days will be added as "Meal Credits" to the end of your billing cycle.</li>
//                 <li>Perfect for weekends away or unexpected "Life Happens" moments!</li>
//               </ul>
//             </div>

//             {/* Quality Guarantee */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <HeartHandshake className="text-[#EAB308]" size={20} />
//                 <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">Quality Guarantee</h3>
//               </div>
//               <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
//                 <li>Report quality issues within <strong>2 hours</strong> of delivery with a photo.</li>
//                 <li>We provide a 100% replacement or a Meal Credit immediately.</li>
//                 <li><strong>Allergy Note:</strong> Kitchen handles nuts, dairy, and gluten.</li>
//               </ul>
//             </div>

//             {/* Delivery Protocol */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <Truck className="text-[#EAB308]" size={20} />
//                 <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">Delivery Protocol</h3>
//               </div>
//               <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
//                 <li>Riders wait for a maximum of <strong>10 minutes</strong> at your PG/Office reception.</li>
//                 <li>If unreachable, the meal is marked "Delivered" to maintain schedules.</li>
//                 <li>Fresh morning delivery slots: 7:00 AM to 12:00 PM.</li>
//               </ul>
//             </div>

//             {/* Refunds */}
//             <div>
//               <div className="flex items-center gap-2 mb-4">
//                 <RefreshCcw className="text-[#EAB308]" size={20} />
//                 <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">Refunds & Transfers</h3>
//               </div>
//               <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
//                 <li><strong>Cancellations:</strong> 100% refund (minus 5% fee) if cancelled 48hrs before start.</li>
//                 <li><strong>Transferable:</strong> Subscriptions are transferable to friends within our zone.</li>
//                 <li>No cash refunds once the fresh service has started.</li>
//               </ul>
//             </div>
//           </div>
//         </AnimatedSection>
//       </div>
//     </section>

//     {/* Feature Highlight Section */}
//     <section className="py-16 lg:py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
//           <AnimatedSection>
//             <img src={subscriptionBox} alt="Subscription box" className="rounded-2xl shadow-xl w-full" />
//           </AnimatedSection>
//           <AnimatedSection delay={0.15}>
//             <h2 className="font-display text-3xl font-bold text-[#1A3C34] mb-6">What You Get Every Day</h2>
//             <ul className="space-y-4 text-slate-600">
//               {[
//                 "Fresh millet power bowl from a rotating menu of 22 varieties",
//                 "Cold-pressed vitality juice or detox water",
//                 "Signature health laddus made with natural jaggery",
//                 "Eco-friendly hygienic packaging",
//                 "Delivered fresh every morning to your doorstep"
//               ].map((item, index) => (
//                 <li key={index} className="flex items-start gap-3">
//                   <Check size={20} className="text-[#EAB308] mt-0.5 shrink-0" />
//                   <span>{item}</span>
//                 </li>
//               ))}
//             </ul>
//           </AnimatedSection>
//         </div>
//       </div>
//     </section>
//   </Layout>
// );

// export default Services;





import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Check, Star, Clock, HeartHandshake, Truck, RefreshCcw, User, ShieldCheck } from "lucide-react";
import subscriptionBox from "@/assets/subscription-box.jpg";

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
    name: "Cold Pressed Juices",
    duration: "20 Days",
    price: "₹1,999",
    originalPrice: null,
    features: ["Daily Vitality Juice", "100% Natural & Fresh", "Detox & Refresh"],
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
    {/* Hero Section */}
    <section className="py-16 lg:py-24 bg-[#1A3C34] text-[#FDFCF0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-[#EAB308] text-sm font-medium uppercase tracking-wider">Our Plans</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Select Your <span className="text-[#EAB308]">Plan</span>
          </h1>
          <p className="text-[#FDFCF0]/80 text-lg max-w-2xl mx-auto">
            22-Day Rotational Millet Bowl Plan — no bowl repeated more than twice. Delivered fresh every morning.
          </p>
        </AnimatedSection>
      </div>
    </section>

    {/* Pricing Cards */}
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
          {plans.map((plan, i) => (
            <AnimatedSection key={i} delay={i * 0.1}>
              <div
                className={`relative rounded-2xl p-8 h-full flex flex-col bg-white border-2 border-[#1A3C34]/10 shadow-lg ${
                  plan.popular ? "ring-2 ring-[#EAB308] border-transparent" : ""
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="inline-flex items-center gap-1 bg-[#EAB308] text-[#1A3C34] px-4 py-1 rounded-full text-xs font-bold">
                      <Star size={12} fill="currentColor" /> Most Popular
                    </span>
                  </div>
                )}
                <h3 className="font-display text-xl font-bold mb-1 text-[#1A3C34]">{plan.name}</h3>
                <p className="text-sm mb-5 text-slate-500">{plan.duration}</p>
                <div className="mb-6">
                  <span className="text-3xl font-bold text-[#1A3C34]">{plan.price}</span>
                  {plan.originalPrice && (
                    <span className="text-sm line-through ml-2 text-slate-400">
                      {plan.originalPrice}
                    </span>
                  )}
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-sm text-slate-600">
                      <Check size={16} className="mt-0.5 shrink-0 text-[#EAB308]" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="/get-started"
                  className="inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition-all bg-[#1A3C34] text-white hover:bg-[#EAB308] hover:text-[#1A3C34]"
                >
                  Start Subscription
                </a>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>

    {/* Rules of Engagement Banner */}
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <AnimatedSection className="bg-[#1A3C34] rounded-3xl p-8 text-white shadow-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center border-b border-white/10 pb-8 mb-8">
            <div className="flex items-center gap-4">
              <div className="bg-[#EAB308] p-3 rounded-full text-[#1A3C34]">
                <User size={24} />
              </div>
              <div>
                <p className="text-xs text-[#EAB308] uppercase font-bold tracking-widest">Founder</p>
                <h4 className="text-xl font-bold">Alekhya Satyanarayan Nelli</h4>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <div className="bg-[#EAB308] p-3 rounded-full text-[#1A3C34]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <p className="text-xs text-[#EAB308] uppercase font-bold tracking-widest">FSSAI Registration</p>
                <h4 className="text-xl font-bold font-mono">23625030006361</h4>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Clock className="text-[#EAB308]" size={20} />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">The "Pause" Policy</h3>
              </div>
              <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
                <li>Notify us via WhatsApp by <strong>7:00 PM</strong> the previous evening to pause.</li>
                <li>Paused days will be added as "Meal Credits" to the end of your billing cycle.</li>
                <li>Perfect for weekends away or unexpected "Life Happens" moments!</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <HeartHandshake className="text-[#EAB308]" size={20} />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">Quality Guarantee</h3>
              </div>
              <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
                <li>Report quality issues within <strong>2 hours</strong> of delivery with a photo.</li>
                <li>We provide a 100% replacement or a Meal Credit immediately.</li>
                <li><strong>Allergy Note:</strong> Kitchen handles nuts, dairy, and gluten.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <Truck className="text-[#EAB308]" size={20} />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">Delivery Protocol</h3>
              </div>
              <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
                <li>Riders wait for a maximum of <strong>10 minutes</strong> at your PG/Office reception.</li>
                <li>If unreachable, the meal is marked "Delivered" to maintain schedules.</li>
                <li>Fresh morning delivery slots: 7:00 AM to 12:00 PM.</li>
              </ul>
            </div>

            <div>
              <div className="flex items-center gap-2 mb-4">
                <RefreshCcw className="text-[#EAB308]" size={20} />
                <h3 className="text-lg font-bold uppercase tracking-tight text-[#EAB308]">Refunds & Transfers</h3>
              </div>
              <ul className="text-sm space-y-2 list-disc pl-5 font-medium text-white/90">
                <li><strong>Cancellations:</strong> 100% refund (minus 5% fee) if cancelled 48hrs before start.</li>
                <li><strong>Transferable:</strong> Subscriptions are transferable to friends within our zone.</li>
                <li>No cash refunds once the fresh service has started.</li>
              </ul>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>

    {/* Feature Highlight Section */}
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <AnimatedSection>
            <img src={subscriptionBox} alt="Subscription box" className="rounded-2xl shadow-xl w-full" />
          </AnimatedSection>
          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-3xl font-bold text-[#1A3C34] mb-6">What You Get Every Day</h2>
            <ul className="space-y-4 text-slate-600">
              {[
                "Fresh millet power bowl from a rotating menu of 22 varieties",
                "Cold-pressed vitality juice or detox water",
                "Signature health laddus made with natural jaggery",
                "Eco-friendly hygienic packaging",
                "Delivered fresh every morning to your doorstep"
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check size={20} className="text-[#EAB308] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Services;