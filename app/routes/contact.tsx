import type { Route } from "./+types/contact";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { QuoteForm } from "~/components/quote-form";
import {
  PhoneIcon,
  EmailIcon,
  MapPinIcon,
  ClockIcon,
  ArrowRightIcon,
} from "~/components/icons";

export const meta: Route.MetaFunction = () => {
  const title =
    "Contact Us | Shine On Autocare | Pleasanton & San Antonio TX";
  const description =
    "Get in touch with Shine On Autocare for a free detailing or ceramic coating quote. Call, email, or fill out our form. Serving Pleasanton, San Antonio, and surrounding areas.";
  const url = "https://www.shineonautocare.com/contact";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "contact Shine On Autocare, auto detailing quote Pleasanton TX, mobile detailing San Antonio contact, free detailing quote, ceramic coating quote Texas",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Shine On Autocare" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};

export default function Contact() {
  return (
    <>
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <span className="text-gray-300">Contact</span>
            </nav>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Get in Touch
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Whether you have a quick question or you're ready to schedule your
              detail, we'd love to hear from you. Reach out by phone, email, or
              just fill out the form below.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" aria-hidden="true" fill="none" className="w-full">
            <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left: Contact Details */}
            <div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
                Let's Talk
              </h2>
              <p className="text-gray-500 leading-relaxed mb-8">
                We're a small team that takes pride in being responsive. Call or
                text us and you'll hear back quickly, usually within the hour.
                No call centers, no runaround.
              </p>

              <div className="space-y-5">
                {/* Phone 1 */}
                <a
                  href="tel:+18305699054"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition">
                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-primary-600 transition">
                      (830) 569-9054
                    </p>
                    <p className="text-sm text-gray-400">Call or text anytime</p>
                  </div>
                </a>

                {/* Phone 2 */}
                <a
                  href="tel:+12103744429"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition">
                    <PhoneIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-primary-600 transition">
                      (210) 374-4429
                    </p>
                    <p className="text-sm text-gray-400">Call or text anytime</p>
                  </div>
                </a>

                {/* Email */}
                <a
                  href="mailto:shineonautocare@gmail.com"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0 group-hover:bg-primary-200 transition">
                    <EmailIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 group-hover:text-primary-600 transition">
                      shineonautocare@gmail.com
                    </p>
                    <p className="text-sm text-gray-400">
                      We respond within 1 hour
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <MapPinIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">
                      1240 W Oaklawn Rd
                    </p>
                    <p className="text-sm text-gray-400">
                      Pleasanton, TX 78064
                    </p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center shrink-0">
                    <ClockIcon className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 mb-1">
                      Business Hours
                    </p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li className="flex justify-between gap-8">
                        <span>Mon - Sat</span>
                        <span className="font-medium text-gray-700">
                          8am - 6pm
                        </span>
                      </li>
                      <li className="flex justify-between gap-8">
                        <span>Sunday</span>
                        <span className="font-medium text-gray-700">
                          Closed
                        </span>
                      </li>
                    </ul>
                    <p className="text-xs text-gray-400 mt-2">
                      By Appointment Only
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-gray-50 rounded-xl border border-gray-100">
                <p className="text-sm text-gray-500 leading-relaxed">
                  <strong className="text-gray-900">Prefer to talk?</strong> We
                  find the best results come from a quick conversation. Call us
                  and we'll walk through your options and give you an honest
                  quote. No pressure, no upselling.
                </p>
              </div>
            </div>

            {/* Right: Quote Form */}
            <QuoteForm heading="Request a Free Quote" />
          </div>
        </div>
      </section>

      {/* Google Maps Placeholder */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
              Where to Find Us
            </h2>
            <p className="mt-4 text-gray-500">
              Based in Pleasanton, TX, we provide mobile detailing within a
              50-mile radius, including the greater San Antonio area.
            </p>
          </div>
          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video max-w-4xl mx-auto flex items-center justify-center border border-gray-200">
            <div className="text-center p-8">
              <MapPinIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">Google Maps Embed</p>
              <p className="text-gray-300 text-sm mt-1">
                1240 W Oaklawn Rd, Pleasanton, TX 78064
              </p>
            </div>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
