import Layout from "@/components/Layout";
import AnimatedSection from "@/components/AnimatedSection";
import { Phone, Mail, MapPin, Instagram, MessageCircle } from "lucide-react";

const Contact = () => (
  <Layout>
    <section className="py-16 lg:py-24 bg-section-dark text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <AnimatedSection>
          <span className="text-accent text-sm font-medium uppercase tracking-wider">Get in Touch</span>
          <h1 className="font-display text-4xl lg:text-5xl font-bold mt-3 mb-6">
            Contact <span className="text-accent">Us</span>
          </h1>
          <p className="text-cream/80 text-lg max-w-2xl mx-auto">
            Have questions? We'd love to hear from you. Reach out via any channel below.
          </p>
        </AnimatedSection>
      </div>
    </section>

    <section className="py-16 lg:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <AnimatedSection>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Reach Out</h2>
            <div className="space-y-6">
              {[
                { icon: <Phone size={22} />, label: "Phone", value: "9381597312", href: "tel:+919381597312" },
                { icon: <Mail size={22} />, label: "Email", value: "root2rise.healthychoice@gmail.com", href: "mailto:root2rise.healthychoice@gmail.com" },
                { icon: <MapPin size={22} />, label: "Address", value: "Jubilee Hills, Hyderabad", href: null },
                { icon: <Instagram size={22} />, label: "Instagram", value: "@r2r.health", href: "https://instagram.com/r2r.health" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4 p-5 bg-card rounded-xl">
                  <div className="w-12 h-12 rounded-full bg-accent/10 text-accent flex items-center justify-center shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} target="_blank" rel="noopener noreferrer" className="text-foreground font-medium hover:text-accent transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <a
              href="https://wa.me/919381597312"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-8 rounded-full bg-accent px-8 py-3.5 text-base font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={20} /> Chat on WhatsApp
            </a>
          </AnimatedSection>

          <AnimatedSection delay={0.15}>
            <h2 className="font-display text-2xl font-bold text-foreground mb-8">Find Us</h2>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[400px] bg-muted">
              <iframe
                title="Root to Rise Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30452.29244522676!2d78.3929!3d17.4325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7be7792411b!2sJubilee%20Hills%2C%20Hyderabad!5e0!3m2!1sen!2sin!4v1700000000000"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  </Layout>
);

export default Contact;
