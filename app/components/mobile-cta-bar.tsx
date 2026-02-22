import { useState, useEffect } from "react";
import { Link } from "react-router";
import { PhoneIcon } from "./icons";
import { PHONE_HREF } from "~/data/constants";

export function MobileCTABar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-hero]");
    if (!hero) {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setVisible(!entry.isIntersecting);
      },
      { threshold: 0 }
    );

    observer.observe(hero);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-50 sm:hidden bg-white border-t border-gray-200 shadow-[0_-4px_12px_rgba(0,0,0,0.1)] pb-[env(safe-area-inset-bottom)] transition-transform duration-300 ease-out ${
        visible ? "translate-y-0" : "translate-y-full"
      }`}
    >
      <div className="grid grid-cols-2 gap-2 p-3">
        <a
          href={PHONE_HREF}
          className="flex items-center justify-center gap-2 bg-gray-100 text-gray-800 font-semibold py-3 rounded-xl text-sm transition active:bg-gray-200"
        >
          <PhoneIcon className="w-4 h-4" />
          Call Now
        </a>
        <Link
          to="/contact"
          className="flex items-center justify-center bg-primary-600 active:bg-primary-700 text-white font-semibold py-3 rounded-xl text-sm transition"
        >
          Free Quote
        </Link>
      </div>
    </div>
  );
}
