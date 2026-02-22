import { Link } from "react-router";
import {
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  YelpIcon,
} from "./icons";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  CITY_STATE_ZIP,
  SOCIAL_LINKS,
} from "~/data/constants";

export function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/5">
      {/* Social Media Bar */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-gray-400 font-medium">
              Follow us for detailing tips, before &amp; afters, and special
              offers
            </p>
            <div className="flex items-center gap-4">
              {[
                {
                  icon: FacebookIcon,
                  href: SOCIAL_LINKS.facebook,
                  label: "Facebook",
                },
                {
                  icon: InstagramIcon,
                  href: SOCIAL_LINKS.instagram,
                  label: "Instagram",
                },
                {
                  icon: TikTokIcon,
                  href: SOCIAL_LINKS.tiktok,
                  label: "TikTok",
                },
                {
                  icon: YelpIcon,
                  href: SOCIAL_LINKS.yelp,
                  label: "Yelp",
                },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 bg-white/5 hover:bg-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-white transition"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-1">
            <div className="mb-4">
              <img
                src="/images/logo.png"
                alt="Shine On Autocare"
                className="h-16 w-auto"
              />
            </div>
            <p className="text-sm text-gray-400 leading-relaxed">
              Veteran-owned mobile auto detailing and ceramic coating proudly
              serving Pleasanton, San Antonio, and surrounding South Texas
              communities.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Services
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["/services/ceramic-coating", "Ceramic Coating"],
                ["/services/interior-detailing", "Interior Detailing"],
                ["/services/exterior-detailing", "Exterior Detailing"],
                ["/services/paint-correction", "Paint Correction"],
                ["/services/truck-suv-detailing", "Truck & SUV Detail"],
                ["/services/rv-detailing", "RV Detailing"],
                ["/services/motorcycle-detailing", "Motorcycle Detail"],
                ["/services/odor-removal", "Odor Removal"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["/about", "About Us"],
                ["/reviews", "Reviews"],
                ["/blog", "Blog"],
                ["/faq", "FAQ"],
                ["/contact", "Contact"],
                ["/services", "All Services"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Service Areas
            </h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {[
                ["/areas/pleasanton-tx", "Pleasanton"],
                ["/areas/san-antonio-tx", "San Antonio"],
                ["/areas/jourdanton-tx", "Jourdanton"],
                ["/areas/floresville-tx", "Floresville"],
                ["/areas/poteet-tx", "Poteet"],
                ["/areas/lytle-tx", "Lytle"],
                ["/areas/devine-tx", "Devine"],
                ["/areas/atascosa-county", "Atascosa County"],
              ].map(([href, label]) => (
                <li key={href}>
                  <Link to={href} className="hover:text-white transition">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white mb-4 text-sm uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4 text-primary-400 shrink-0" />
                <a
                  href={PHONE_HREF}
                  className="hover:text-white transition"
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-start gap-2">
                <EmailIcon className="w-4 h-4 text-primary-400 shrink-0 mt-0.5" />
                <a
                  href={EMAIL_HREF}
                  className="hover:text-white transition break-all"
                >
                  {EMAIL}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <MapPinIcon className="w-4 h-4 text-primary-400 shrink-0" />
                {CITY_STATE_ZIP}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Shine On Autocare. All rights
            reserved.
          </p>
          <p className="text-xs text-gray-500">
            Mobile auto detailing and ceramic coating in Pleasanton, San
            Antonio, and South Texas.
          </p>
        </div>
      </div>
    </footer>
  );
}
