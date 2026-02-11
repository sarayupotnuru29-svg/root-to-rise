import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, Instagram } from "lucide-react";
import logo from "@/assets/logo.jpg";

const Footer = () => (
  <footer className="bg-primary text-primary-foreground">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logo} alt="Root to Rise logo" className="w-10 h-10 rounded-full object-cover" />
            <h3 className="font-display text-2xl font-bold">Root to Rise</h3>
          </div>
          <p className="text-sm opacity-80 leading-relaxed">
            100% organic millet-based nutrition delivered fresh to your campus and hostel every morning.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm opacity-80">
            {[
              { label: "Home", path: "/" },
              { label: "About", path: "/about" },
              { label: "Services", path: "/services" },
              { label: "Contact", path: "/contact" },
              { label: "Get Started", path: "/get-started" },
            ].map((l) => (
              <li key={l.path}>
                <Link to={l.path} className="hover:text-accent transition-colors">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Contact</h4>
          <ul className="space-y-3 text-sm opacity-80">
            <li className="flex items-center gap-2"><Phone size={14} /> 9381597312</li>
            <li className="flex items-center gap-2"><Mail size={14} /> root2rise.healthychoice@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin size={14} /> Jubilee Hills, Hyderabad</li>
            <li className="flex items-center gap-2"><Instagram size={14} /> @r2r.health</li>
          </ul>
        </div>

        {/* Hours */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-4">Business Hours</h4>
          <p className="text-sm opacity-80">Morning 7:00 AM – 12:00 PM</p>
          <p className="text-sm opacity-80">Monday to Friday</p>
          <a
            href="https://wa.me/919381597312"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex mt-4 items-center gap-2 rounded-full bg-accent px-5 py-2 text-sm font-semibold text-accent-foreground hover:opacity-90 transition-opacity"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>

      <div className="border-t border-primary-foreground/20 mt-12 pt-8 text-center text-sm opacity-60">
        © {new Date().getFullYear()} Root to Rise. All rights reserved.
      </div>
    </div>
  </footer>
);

export default Footer;
