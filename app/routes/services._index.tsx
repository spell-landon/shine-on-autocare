import type { Route } from "./+types/services._index";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { WaveDivider } from "~/components/wave-divider";
import { Breadcrumb } from "~/components/breadcrumb";
import { ArrowRightIcon, PhoneIcon } from "~/components/icons";
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "Our Services | Shine On Autocare | Mobile Detailing Pleasanton & San Antonio TX";
  const description =
    "Explore our full range of mobile detailing services: interior detailing, exterior detailing, full detail, ceramic coating, paint correction, and odor removal. Serving Pleasanton, San Antonio, and South Texas.";
  const url = `${SITE_URL}/services`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "auto detailing services Pleasanton TX, mobile detailing San Antonio, ceramic coating, paint correction, interior detailing, exterior detailing, odor removal, full detail, car detailing near me",
    },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: BUSINESS_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};

const services = [
  {
    title: "Interior Detailing",
    description:
      "Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Stain removal, leather conditioning, and a fresh, clean cabin you'll actually want to sit in.",
    price: "Starting @ $65",
    image: "/images/service-interior.jpg",
    href: "/services/interior-detailing",
  },
  {
    title: "Interior & Exterior",
    description:
      "The full package without the premium add-ons. A thorough interior clean plus a hand wash, clay bar, and wax to get your vehicle looking great inside and out.",
    price: "Starting @ $130",
    image: "/images/service-interior-exterior.jpg",
    href: "/services/exterior-detailing",
  },
  {
    title: "Full Detailing Premium",
    description:
      "Our top-tier detail. Everything in the interior and exterior package, plus paint decontamination, single-stage polish, premium sealant, and meticulous finishing touches.",
    price: "Starting @ $330",
    image: "/images/service-full-detail.jpg",
    href: "/services/full-detail",
  },
  {
    title: "Ceramic Coating",
    description:
      "Professional-grade ceramic coating that bonds to your paint for years of protection. Hydrophobic finish, UV resistance, and a deep gloss that lasts. Includes paint correction.",
    price: "Starting @ $1,500",
    image: null,
    gradient: "from-primary-600 to-primary-800",
    href: "/services/ceramic-coating",
  },
  {
    title: "Paint Correction",
    description:
      "Multi-stage paint correction to remove swirl marks, scratches, and oxidation. We restore your vehicle's original depth and clarity so the paint looks the way it should.",
    price: "By Quote",
    image: null,
    gradient: "from-navy-800 to-navy-950",
    href: "/services/paint-correction",
  },
  {
    title: "Odor Removal",
    description:
      "Stubborn smells from smoke, pets, food, or mildew? We don't just cover them up. Our deep-cleaning process eliminates odors at the source so your cabin smells fresh again.",
    price: "By Quote",
    image: "/images/service-odor-removal.jpg",
    href: "/services/odor-removal",
  },
  {
    title: "RV & Trailer Detailing",
    description:
      "Full exterior wash, roof treatment, black streak removal, interior deep clean, and protective coatings for your RV, motorhome, or travel trailer.",
    price: "By Quote",
    image: null,
    gradient: "from-emerald-700 to-emerald-900",
    href: "/services/rv-detailing",
  },
  {
    title: "Motorcycle Detailing",
    description:
      "Chrome polish, paint protection, engine detailing, and full bike wash. We treat every component with the care your ride deserves.",
    price: "By Quote",
    image: null,
    gradient: "from-gray-700 to-gray-900",
    href: "/services/motorcycle-detailing",
  },
];

export default function ServicesIndex() {
  return (
    <>
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: "Services" }]} />

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Our Detailing Services
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
              From a quick interior refresh to a full ceramic coating, we've got
              a service for every vehicle and every budget. All of our work is
              mobile, which means we come to you.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
              >
                Get a Free Quote
                <ArrowRightIcon className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition border border-white/20"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                Call {PHONE}
              </a>
            </div>
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* Services Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service) => (
              <Link
                key={service.title}
                to={service.href}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300 block"
              >
                {/* Image or Gradient Placeholder */}
                {service.image ? (
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ) : (
                  <div
                    className={`aspect-video bg-gradient-to-br ${
                      (service as { gradient?: string }).gradient ||
                      "from-primary-600 to-primary-800"
                    } flex items-center justify-center`}
                  >
                    <div className="text-center">
                      <div className="w-14 h-14 bg-white/10 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <svg
                          className="w-7 h-7 text-white/70"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={1.5}
                            d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                          />
                        </svg>
                      </div>
                      <p className="text-sm text-white/50 font-medium">
                        {service.title}
                      </p>
                    </div>
                  </div>
                )}

                <div className="p-6">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="font-display text-lg font-bold text-gray-900 group-hover:text-primary-600 transition">
                      {service.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-primary-600 font-bold text-sm">
                      {service.price}
                    </span>
                    <span className="inline-flex items-center text-sm font-semibold text-primary-600 group-hover:text-primary-700 transition">
                      Learn More
                      <ArrowRightIcon className="ml-1 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Note */}
          <div className="mt-12 text-center">
            <div className="inline-block bg-gray-50 rounded-xl px-6 py-4 border border-gray-100">
              <p className="text-gray-600">
                We also detail trucks, SUVs, RVs, and motorcycles.{" "}
                <Link
                  to="/contact"
                  className="text-primary-600 font-semibold hover:text-primary-700 transition"
                >
                  Contact us for a custom quote
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Not Sure Which Service You Need?
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            No worries. Tell us about your vehicle and what you're looking for,
            and we'll recommend the right package at the right price. No
            pressure, just honest advice.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition border border-white/20"
            >
              Call {PHONE}
            </a>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
