// import Layout from "@/components/Layout";
// import AnimatedSection from "@/components/AnimatedSection";
// import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

// const Contact = () => {
//   const contactMethods = [
//     {
//       icon: <MapPin className="text-white" size={20} />,
//       iconBg: "bg-[#EAB308]", // Yellow
//       title: "Visit Us",
//       details: "Jubilee Hills, Hyderabad",
//       actionText: "OPEN MAPS →",
//       href: "https://maps.google.com",
//     },
//     {
//       icon: <Phone className="text-white" size={20} />,
//       iconBg: "bg-[#EAB308]", // Yellow
//       title: "Call Us",
//       details: "+91 9381597312",
//       subDetails: "MON - SAT: 9 AM - 6 PM",
//       actionText: "CALL NOW →",
//       href: "tel:+919381597312",
//     },
//     {
//       icon: <MessageCircle className="text-white" size={20} />,
//       iconBg: "bg-[#22C55E]", // Green
//       title: "WhatsApp",
//       details: "Direct course inquiries!",
//       actionText: "CHAT NOW →",
//       href: "https://wa.me/919381597312",
//     },
//     {
//       icon: <Instagram className="text-white" size={20} />,
//       iconBg: "bg-[#E1306C]", // Instagram Pink
//       title: "Instagram",
//       details: "@r2r.health",
//       actionText: "OPEN APP →",
//       href: "https://instagram.com/r2r.health",
//     },
//   ];

//   return (
//     <Layout>
//       <section className="py-16 lg:py-24 bg-white text-slate-900 overflow-hidden">
//         {/* Header Section */}
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
//           <AnimatedSection>
//             <h1 className="font-display text-5xl lg:text-7xl font-bold mt-4 mb-6 text-[#1A3C34]">
//               Contact <span className="text-[#EAB308] italic serif">Us</span>
//             </h1>
//             <p className="text-slate-600 text-base lg:text-lg max-w-2xl mx-auto font-normal">
//               Have questions or want to enroll? Reach out through any of our channels.
//             </p>
//           </AnimatedSection>
//         </div>

//         {/* Contact Cards Grid */}
//         <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
//             {contactMethods.map((method, index) => (
//               <AnimatedSection key={index} delay={index * 0.1}>
//                 <a
//                   href={method.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="group block h-full bg-white border-2 border-[#1A3C34] rounded-[1.5rem] p-6 text-center shadow-sm hover:shadow-md hover:bg-slate-50/50 transition-all duration-300"
//                 >
//                   {/* Reduced Icon Size */}
//                   <div className="flex justify-center mb-6">
//                     <div className={`${method.iconBg} w-14 h-14 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
//                       {method.icon}
//                     </div>
//                   </div>
                  
//                   <h3 className="text-xl font-bold mb-4 text-[#1A3C34]">
//                     {method.title}
//                   </h3>
                  
//                   <div className="min-h-[80px] flex flex-col items-center justify-start mb-6">
//                     <p className="text-sm text-slate-500 font-medium leading-relaxed">
//                       {method.details}
//                     </p>
//                     {method.subDetails && (
//                       <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-[0.05em] font-bold">
//                         {method.subDetails}
//                       </p>
//                     )}
//                   </div>

//                   {/* Action link */}
//                   <div className="pt-2">
//                     <span className="text-[#EAB308] text-xs font-black uppercase tracking-[0.1em] group-hover:underline">
//                       {method.actionText}
//                     </span>
//                   </div>
//                 </a>
//               </AnimatedSection>
//             ))}
//           </div>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default Contact;

import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => {
  const contactMethods = [
    {
      icon: <MapPin className="text-white" size={20} />,
      iconBg: "bg-[#EAB308]", // Yellow
      title: "Visit Us",
      details: "Jubilee Hills, Hyderabad",
      actionText: "OPEN MAPS →",
      href: "https://maps.google.com",
    },
    {
      icon: <Phone className="text-white" size={20} />,
      iconBg: "bg-[#EAB308]", // Yellow
      title: "Call Us",
      details: "+91 9381597312",
      subDetails: "MON - SAT: 9 AM - 6 PM",
      actionText: "CALL NOW →",
      href: "tel:+919381597312",
    },
    {
      icon: <MessageCircle className="text-white" size={20} />,
      iconBg: "bg-[#22C55E]", // Green
      title: "WhatsApp",
      details: "Direct course inquiries!",
      actionText: "CHAT NOW →",
      href: "https://wa.me/919381597312",
    },
    {
      icon: <Instagram className="text-white" size={20} />,
      iconBg: "bg-[#E1306C]", // Instagram Pink
      title: "Instagram",
      details: "@r2r.health",
      actionText: "OPEN APP →",
      href: "https://instagram.com/r2r.health",
    },
  ];

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-white text-slate-900 overflow-hidden">
        {/* Header Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <AnimatedSection>
            {/* Reduced size and unified font style for the heading */}
            <h1 className="font-display text-4xl lg:text-5xl font-bold mt-4 mb-6 text-[#1A3C34]">
              Contact <span className="text-[#EAB308]">Us</span>
            </h1>
            <p className="text-slate-600 text-sm lg:text-base max-w-2xl mx-auto font-normal">
              Have questions or want to enroll? Reach out through any of our channels.
            </p>
          </AnimatedSection>
        </div>

        {/* Contact Cards Grid */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactMethods.map((method, index) => (
              <AnimatedSection key={index} delay={index * 0.1}>
                <a
                  href={method.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block h-full bg-white border-2 border-[#1A3C34] rounded-[1.2rem] p-6 text-center shadow-sm hover:shadow-md hover:bg-slate-50 transition-all duration-300"
                >
                  <div className="flex justify-center mb-5">
                    <div className={`${method.iconBg} w-12 h-12 rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-lg font-bold mb-3 text-[#1A3C34]">
                    {method.title}
                  </h3>
                  
                  <div className="min-h-[70px] flex flex-col items-center justify-start mb-4">
                    <p className="text-xs text-slate-500 font-medium leading-relaxed">
                      {method.details}
                    </p>
                    {method.subDetails && (
                      <p className="text-[10px] text-slate-400 mt-2 uppercase tracking-tighter font-bold">
                        {method.subDetails}
                      </p>
                    )}
                  </div>

                  <div className="pt-2">
                    <span className="text-[#EAB308] text-[10px] font-black uppercase tracking-wider group-hover:underline">
                      {method.actionText}
                    </span>
                  </div>
                </a>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;