import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { PhoneIcon, MenuIcon, XIcon, StarIcon } from "./icons";
import { PHONE, PHONE_HREF } from "~/data/constants";

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

  // Lock body scroll when drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
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
              href={PHONE_HREF}
              className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-700 hover:text-primary-600 transition"
            >
              <PhoneIcon className="w-4 h-4" />
              {PHONE}
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
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 -mr-2 text-gray-600 hover:text-gray-900 transition"
              aria-label="Open menu"
            >
              <MenuIcon className="w-6 h-6" />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Side Drawer */}
      <div
        className={`fixed inset-0 z-[60] lg:hidden transition-opacity duration-300 ${
          mobileOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
          aria-hidden="true"
        />

        {/* Drawer panel */}
        <div
          className={`absolute top-0 right-0 h-full w-[300px] max-w-[85vw] bg-white shadow-2xl transition-transform duration-300 ease-out flex flex-col ${
            mobileOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {/* Drawer header */}
          <div className="flex items-center justify-between px-6 h-16 border-b border-gray-100 shrink-0">
            <span className="font-display text-lg font-bold text-gray-900">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setMobileOpen(false)}
              className="p-2 -mr-2 text-gray-500 hover:text-gray-900 transition"
              aria-label="Close menu"
            >
              <XIcon className="w-6 h-6" />
            </button>
          </div>

          {/* Nav links */}
          <div className="flex-1 overflow-y-auto py-4 px-4">
            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`block px-4 py-3 rounded-lg text-base font-medium transition ${
                    location.pathname === link.href ||
                    (link.href !== "/" &&
                      location.pathname.startsWith(link.href))
                      ? "bg-primary-50 text-primary-700"
                      : "text-gray-700 hover:bg-gray-50"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mt-4 pt-4 border-t border-gray-100">
              <Link
                to="/veteran-owned"
                onClick={() => setMobileOpen(false)}
                className="flex items-center gap-2 px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                <StarIcon className="w-4 h-4 text-primary-500" />
                Veteran-Owned
              </Link>
              <Link
                to="/faq"
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-lg text-base font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                FAQ
              </Link>
            </div>
          </div>

          {/* Drawer footer */}
          <div className="shrink-0 px-4 pb-6 pt-4 border-t border-gray-100 space-y-3">
            <a
              href={PHONE_HREF}
              className="flex items-center justify-center gap-2 bg-gray-50 text-gray-700 font-semibold py-3 rounded-xl transition hover:bg-gray-100"
            >
              <PhoneIcon className="w-5 h-5 text-primary-600" />
              {PHONE}
            </a>
            <Link
              to="/contact"
              onClick={() => setMobileOpen(false)}
              className="block text-center bg-primary-600 hover:bg-primary-700 text-white font-bold py-3.5 rounded-xl transition shadow-lg shadow-primary-600/25"
            >
              Get a Free Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
