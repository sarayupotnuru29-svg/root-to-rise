import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/logo.jpg";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Services", path: "/services" },
  { label: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="Root to Rise logo" className="h-12 w-12 rounded-full object-cover" />
          <div className="font-display">
            <span className="text-xl font-bold text-primary">Root to Rise</span>
            <p className="text-[10px] tracking-widest uppercase text-muted-foreground">Healthy Organic World</p>
          </div>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link
                to={link.path}
                className={`text-sm font-medium transition-colors hover:text-accent ${
                  location.pathname === link.path ? "text-accent" : "text-foreground"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              to="/get-started"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground shadow-lg hover:opacity-90 transition-opacity"
            >
              Get Started
            </Link>
          </li>
        </ul>

        {/* Mobile toggle */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-background border-t border-border">
          <ul className="flex flex-col px-6 py-4 gap-4">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setOpen(false)}
                  className={`block text-base font-medium py-2 transition-colors hover:text-accent ${
                    location.pathname === link.path ? "text-accent" : "text-foreground"
                  }`}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                to="/get-started"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-2.5 text-sm font-semibold text-accent-foreground w-full"
              >
                Get Started
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
