// import { useState } from "react";
// import Layout from "@/components/Layout";
// import AnimatedSection from "@/components/AnimatedSection";
// import { toast } from "sonner"; 

// const GetStarted = () => {
//   const [form, setForm] = useState({
//     name: "",
//     phone: "",
//     location: "",
//     plan: "Students Plan (22 Days) - ₹2,500",
//     message: "",
//   });

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
//     const { name, value } = e.target;

//     // Strict numeric-only input for phone
//     if (name === "phone") {
//       const onlyNums = value.replace(/[^0-9]/g, "");
//       // Prevent typing more than 10 digits
//       if (onlyNums.length <= 10) {
//         setForm({ ...form, [name]: onlyNums });
//       }
//       return;
//     }

//     setForm({ ...form, [name]: value });
//   };

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     // STRICT VALIDATION: Form will not submit unless phone is exactly 10 digits
//     if (form.phone.length !== 10) {
//       toast.error("Invalid Phone Number", {
//         description: "Please enter exactly 10 digits to proceed.",
//       });
//       return; // Stops the function here
//     }

//     // If validation passes, proceed to WhatsApp
//     const msg = encodeURIComponent(
//       `Hi Root to Rise! 🌱\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nPlan: ${form.plan}\nMessage: ${form.message}`
//     );
//     window.open(`https://wa.me/919381597312?text=${msg}`, "_blank");
//   };

//   const inputClass =
//     "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all";

//   return (
//     <Layout>
//       <section className="py-16 lg:py-24 bg-section-dark text-cream">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
//           <AnimatedSection>
//             <span className="text-accent text-sm font-medium uppercase tracking-wider">Get Started</span>
//             <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
//               Start Your <span className="text-accent">Wellness Journey</span>
//             </h1>
//             <p className="text-cream/80 text-lg max-w-2xl mx-auto">
//               Fill out the form below and we'll connect with you on WhatsApp to set up your subscription.
//             </p>
//           </AnimatedSection>
//         </div>
//       </section>

//       <section className="py-16 lg:py-24 bg-background">
//         <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
//           <AnimatedSection>
//             <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 space-y-6">
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Name</label>
//                 <input
//                   type="text"
//                   name="name"
//                   required
//                   placeholder="Your full name"
//                   value={form.name}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>
              
//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">
//                   Phone Number (10 Digits)
//                 </label>
//                 <input
//                   type="tel"
//                   name="phone"
//                   required
//                   placeholder="e.g. 9876543210"
//                   value={form.phone}
//                   onChange={handleChange}
//                   className={`${inputClass} ${
//                     form.phone.length > 0 && form.phone.length < 10 
//                     ? "border-red-400 focus:ring-red-200" 
//                     : ""
//                   }`}
//                 />
//                 <div className="flex justify-between mt-1">
//                    <p className="text-xs text-muted-foreground">
//                     Only digits allowed
//                   </p>
//                   <p className={`text-xs font-medium ${form.phone.length === 10 ? "text-green-500" : "text-muted-foreground"}`}>
//                     {form.phone.length}/10 digits
//                   </p>
//                 </div>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Location (Campus / Hostel Name)</label>
//                 <input
//                   type="text"
//                   name="location"
//                   required
//                   placeholder="e.g., CBIT Hostel, Gachibowli"
//                   value={form.location}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Subscription Type</label>
//                 <select
//                   name="plan"
//                   value={form.plan}
//                   onChange={handleChange}
//                   className={inputClass}
//                 >
//                   <option>Trial Pack (5 Days) - ₹999</option>
//                   <option>Students Plan (22 Days) - ₹2,500</option>
//                   <option>Professionals Plan (22 Days) - ₹2,975</option>
//                   <option>Diabetic Care (22 Days) - ₹3,399</option>
//                 </select>
//               </div>

//               <div>
//                 <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
//                 <textarea
//                   name="message"
//                   rows={4}
//                   placeholder="Any special requests?"
//                   value={form.message}
//                   onChange={handleChange}
//                   className={inputClass}
//                 />
//               </div>

//               <button
//                 type="submit"
//                 className="w-full rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
//               >
//                 Send via WhatsApp 🚀
//               </button>
//             </form>
//           </AnimatedSection>
//         </div>
//       </section>
//     </Layout>
//   );
// };

// export default GetStarted;



import { useState } from "react";
import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { toast } from "sonner"; 

const GetStarted = () => {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    location: "",
    plan: "Students Plan (22 Days) - ₹2,500",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;

    // Strict numeric-only input for phone
    if (name === "phone") {
      const onlyNums = value.replace(/[^0-9]/g, "");
      // Prevent typing more than 10 digits
      if (onlyNums.length <= 10) {
        setForm({ ...form, [name]: onlyNums });
      }
      return;
    }

    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // STRICT VALIDATION: Form will not submit unless phone is exactly 10 digits
    if (form.phone.length !== 10) {
      toast.error("Invalid Phone Number", {
        description: "Please enter exactly 10 digits to proceed.",
      });
      return; // Stops the function here
    }

    // If validation passes, proceed to WhatsApp
    const msg = encodeURIComponent(
      `Hi Root to Rise! 🌱\n\nName: ${form.name}\nPhone: ${form.phone}\nLocation: ${form.location}\nPlan: ${form.plan}\nMessage: ${form.message}`
    );
    window.open(`https://wa.me/919381597312?text=${msg}`, "_blank");
  };

  const inputClass =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent/50 transition-all";

  return (
    <Layout>
      <section className="py-16 lg:py-24 bg-section-dark text-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection>
            <span className="text-accent text-sm font-medium uppercase tracking-wider">Get Started</span>
            <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
              Start Your <span className="text-accent">Wellness Journey</span>
            </h1>
            <p className="text-cream/80 text-lg max-w-2xl mx-auto">
              Fill out the form below and we'll connect with you on WhatsApp to set up your subscription.
            </p>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection>
            <form onSubmit={handleSubmit} className="bg-card rounded-2xl shadow-xl p-8 lg:p-12 space-y-6">
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Name</label>
                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Your full name"
                  value={form.name}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Phone Number (10 Digits)
                </label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="e.g. 9876543210"
                  value={form.phone}
                  onChange={handleChange}
                  className={`${inputClass} ${
                    form.phone.length > 0 && form.phone.length < 10 
                    ? "border-red-400 focus:ring-red-200" 
                    : ""
                  }`}
                />
                <div className="flex justify-between mt-1">
                   <p className="text-xs text-muted-foreground">
                    Only digits allowed
                  </p>
                  <p className={`text-xs font-medium ${form.phone.length === 10 ? "text-green-500" : "text-muted-foreground"}`}>
                    {form.phone.length}/10 digits
                  </p>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Location (Campus / Hostel Name)</label>
                <input
                  type="text"
                  name="location"
                  required
                  placeholder="e.g., CBIT Hostel, Gachibowli"
                  value={form.location}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Subscription Type</label>
                <select
                  name="plan"
                  value={form.plan}
                  onChange={handleChange}
                  className={inputClass}
                >
                  <option>Trial Pack (5 Days) - ₹999</option>
                  <option>Cold Pressed Juices (20 Days) - ₹1,999</option>
                  <option>Students Plan (22 Days) - ₹2,500</option>
                  <option>Professionals Plan (22 Days) - ₹2,975</option>
                  <option>Diabetic Care (22 Days) - ₹3,399</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Any special requests?"
                  value={form.message}
                  onChange={handleChange}
                  className={inputClass}
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity active:scale-[0.98]"
              >
                Send via WhatsApp 🚀
              </button>
            </form>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default GetStarted;