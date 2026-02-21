import { useState } from "react";
import { Link, useLocation } from "react-router";
import { PhoneIcon, MenuIcon, XIcon } from "./icons";

const navLinks = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services", label: "All Services" },
  { href: "/about", label: "About Us" },
  { href: "/reviews", label: "Reviews" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-gray-100 shadow-sm">
      <nav aria-label="Main navigation" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center shrink-0">
          <img
            src="/images/logo.png"
            alt="Shine On Autocare"
            className="h-12 sm:h-14 w-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`text-sm font-medium transition ${
                location.pathname === link.href ||
                (link.href !== "/" && location.pathname.startsWith(link.href))
                  ? "text-primary-600"
                  : "text-gray-600 hover:text-primary-600"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+18305699054"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition"
          >
            <PhoneIcon className="w-4 h-4" />
            (830) 569-9054
          </a>
          <Link
            to="/contact"
            className="hidden sm:inline-flex bg-primary-600 hover:bg-primary-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition shadow-sm hover:shadow-md"
          >
            Free Quote
          </Link>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
          >
            {mobileOpen ? (
              <XIcon className="w-6 h-6" />
            ) : (
              <MenuIcon className="w-6 h-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div id="mobile-menu" className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setMobileOpen(false)}
                className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                  location.pathname === link.href ||
                  (link.href !== "/" && location.pathname.startsWith(link.href))
                    ? "bg-primary-50 text-primary-700"
                    : "text-gray-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-3">
              <a
                href="tel:+18305699054"
                className="flex items-center gap-3 px-4 py-3 text-base font-medium text-gray-700"
              >
                <PhoneIcon className="w-5 h-5 text-primary-600" />
                (830) 569-9054
              </a>
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
                className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl transition mx-4"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
