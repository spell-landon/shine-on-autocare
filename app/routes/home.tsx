import { Link } from "react-router";
import type { Route } from "./+types/home";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { QuoteForm } from "~/components/quote-form";
import { WaveDivider } from "~/components/wave-divider";
import { StarRating } from "~/components/star-rating";
import {
  StarIcon,
  ArrowRightIcon,
  PhoneIcon,
  ShieldIcon,
  TruckIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  SparkleIcon,
  ThumbsUpIcon,
  EmailIcon,
} from "~/components/icons";
import {
  PHONE,
  PHONE_HREF,
  EMAIL,
  EMAIL_HREF,
  SITE_URL,
  BUSINESS_NAME,
  ADDRESS,
  CITY_STATE_ZIP,
  SOCIAL_LINKS,
} from "~/data/constants";

// ─── SEO Meta Tags ───────────────────────────────────────────────────────────
export const meta: Route.MetaFunction = () => {
  const title =
    "Shine On Autocare | Mobile Auto Detailing & Ceramic Coating | Pleasanton & San Antonio, TX";
  const description =
    "Veteran-owned mobile auto detailing serving Pleasanton, San Antonio and surrounding areas. Ceramic coating, paint correction, interior and exterior detailing. We come to you. Call for a free quote!";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "auto detailing Pleasanton TX, mobile detailing San Antonio, ceramic coating San Antonio, ceramic coating Pleasanton TX, paint correction, interior detailing, exterior detailing, veteran-owned detailing, mobile car detailing near me, RV detailing, truck detailing South Texas",
    },

    // Open Graph
    { property: "og:type", content: "website" },
    { property: "og:url", content: SITE_URL },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: BUSINESS_NAME },

    // Twitter Card
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
  ];
};

// ─── JSON-LD Structured Data ─────────────────────────────────────────────────
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "AutoRepair",
  name: BUSINESS_NAME,
  description:
    "Veteran-owned mobile auto detailing and ceramic coating service serving Pleasanton, San Antonio, and surrounding areas in South Texas.",
  url: SITE_URL,
  telephone: "+1-830-569-9054",
  email: EMAIL,
  address: {
    "@type": "PostalAddress",
    streetAddress: ADDRESS,
    addressLocality: "Pleasanton",
    addressRegion: "TX",
    postalCode: "78064",
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 28.9683,
    longitude: -98.4786,
  },
  areaServed: [
    {
      "@type": "City",
      name: "Pleasanton",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "City",
      name: "San Antonio",
      containedInPlace: { "@type": "State", name: "Texas" },
    },
    {
      "@type": "GeoCircle",
      geoMidpoint: {
        "@type": "GeoCoordinates",
        latitude: 28.9683,
        longitude: -98.4786,
      },
      geoRadius: "80467",
    },
  ],
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Auto Detailing Services",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior Detailing",
        },
        price: "65.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Interior & Exterior Detailing",
        },
        price: "130.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Full Detailing Premium",
        },
        price: "330.00",
        priceCurrency: "USD",
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Ceramic Coating",
        },
        price: "1500.00",
        priceCurrency: "USD",
      },
    ],
  },
  serviceType: [
    "Ceramic Coating",
    "Mobile Auto Detailing",
    "Interior Detailing",
    "Exterior Detailing",
    "Paint Correction",
    "Odor Removal",
  ],
  priceRange: "$$",
  sameAs: [
    SOCIAL_LINKS.facebook,
    SOCIAL_LINKS.instagram,
    SOCIAL_LINKS.tiktok,
    SOCIAL_LINKS.yelp,
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: [
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
      ],
      opens: "08:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "09:00",
      closes: "16:00",
    },
  ],
};

// ─── Page Component ──────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header />
      <main id="main-content">
        <Hero />
        <TrustBar />
        <Services />
        <CeramicCoating />
        <WhyChooseUs />
        <HowItWorks />
        <Testimonials />
        <ServiceArea />
        <CTASection />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}

// ─── Hero Section ────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative pt-20 sm:pt-24 overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/images/hero-poster.jpg"
          className="absolute inset-0 w-full h-full object-cover"
          aria-hidden="true"
        >
          <source src="/videos/hero-bg.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-navy-950/75" />
      </div>
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(ellipse_at_top_right,_var(--color-primary-600)_0%,_transparent_60%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36">
        <div className="max-w-3xl">
          {/* Badge */}
          <Link
            to="/veteran-owned"
            className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 hover:bg-primary-500/20 rounded-full px-4 py-1.5 mb-6 transition"
          >
            <StarIcon className="w-4 h-4 text-primary-300" />
            <span className="text-primary-300 text-sm font-semibold">
              Veteran-Owned &amp; Operated
            </span>
          </Link>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-tight tracking-tight">
            Mobile Auto Detailing
            <span className="block text-primary-400">&amp; Ceramic Coating</span>
            <span className="block text-2xl sm:text-3xl lg:text-4xl font-semibold text-gray-300 mt-2">
              Serving Pleasanton &amp; San Antonio, TX
            </span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-gray-300 max-w-2xl leading-relaxed">
            Professional auto detailing that comes to you. From a fresh wash to
            premium ceramic coating protection, we bring showroom-quality
            results to your driveway. Cars, trucks, RVs, and motorcycles.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25 hover:shadow-primary-500/30"
            >
              Get Your Free Quote
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

          <div className="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-gray-400">
            <div className="flex items-center gap-1">
              <StarRating color="text-star-400" />
              <span className="ml-2 text-white font-semibold">5.0</span>
            </div>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span>Trusted by Local Customers</span>
            <span className="text-gray-500 hidden sm:inline">|</span>
            <span>50-Mile Service Radius</span>
          </div>
        </div>
      </div>

      <WaveDivider />
    </section>
  );
}

// ─── Trust Bar ───────────────────────────────────────────────────────────────
function TrustBar() {
  const items = [
    { icon: ShieldIcon, label: "Veteran-Owned", sub: "& Operated" },
    { icon: TruckIcon, label: "Mobile Service", sub: "We Come to You" },
    { icon: MapPinIcon, label: "SA & Pleasanton", sub: "50-Mile Radius" },
    { icon: ClockIcon, label: "Same-Week", sub: "Availability" },
  ];

  return (
    <section className="relative -mt-1 bg-white pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="flex flex-col items-center text-center sm:flex-row sm:items-center sm:text-left bg-gray-50 rounded-xl p-5 sm:p-6 border border-gray-100"
            >
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-3 sm:mb-0 sm:mr-4 shrink-0">
                <item.icon className="w-6 h-6 text-primary-600" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-sm sm:text-base">
                  {item.label}
                </p>
                <p className="text-xs sm:text-sm text-gray-500">{item.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Services Section ────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      title: "Interior Detailing",
      price: "Starting @ $65",
      description:
        "Deep cleaning of seats, carpets, dashboard, and all interior surfaces. Stain removal, leather conditioning, and odor elimination.",
      image: "/images/service-interior.jpg",
      imageAlt: "Clean Jaguar interior after detailing",
      features: ["Vacuuming & Shampooing", "Leather Care", "Dashboard Detail"],
      href: "/services/interior-detailing",
    },
    {
      title: "Interior & Exterior",
      price: "Starting @ $130",
      description:
        "Complete inside-and-out detail. Full hand wash, clay bar treatment, interior deep clean, and premium wax protection.",
      image: "/images/service-interior-exterior.jpg",
      imageAlt: "2019 Ford Mustang GT after full detail",
      features: ["Full Interior Clean", "Hand Wash & Dry", "Wax Protection"],
      href: "/services/exterior-detailing",
    },
    {
      title: "Full Detailing Premium",
      price: "Starting @ $330",
      description:
        "Our top-tier detail package. Multi-stage paint correction, full interior restoration, and premium sealant for lasting protection.",
      image: "/images/service-full-detail.jpg",
      imageAlt: "2023 Ford F-250 premium detail",
      features: ["Paint Correction", "Full Interior", "Premium Sealant"],
      href: "/services/full-detail",
    },
    {
      title: "Odor Removal",
      price: "Available by Quote",
      description:
        "Professional-grade odor elimination for smoke, pet smells, mildew, and more. We neutralize odors at the source, not just mask them.",
      image: "/images/service-odor-removal.jpg",
      imageAlt: "Professional odor removal equipment",
      features: ["Smoke & Pet Odors", "Ozone Treatment", "Deep Sanitization"],
      href: "/services/odor-removal",
    },
    {
      title: "Ceramic Coating",
      price: "Starting @ $1,500",
      description:
        "Professional-grade ceramic coating for years of paint protection. Includes full paint decontamination and single-stage correction.",
      image: "/images/hero-poster.jpg",
      imageAlt: "Vehicle receiving professional ceramic coating application",
      features: ["Paint Decontamination", "Ceramic Application", "Multi-Year Warranty"],
      href: "/services/ceramic-coating",
    },
    {
      title: "Custom Packages",
      price: "Quote Based",
      description:
        "Don't see exactly what you need? We build custom detailing packages tailored to your vehicle and budget. Just ask!",
      image: "/images/service-interior-exterior.jpg",
      imageAlt: "Custom auto detailing package options",
      features: ["Mix & Match Services", "Fleet Pricing", "Recurring Plans"],
      href: "/contact",
    },
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Professional Detailing for Every Vehicle
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Starting at just $65. From daily drivers to weekend toys, we deliver
            showroom-quality results at your doorstep.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {services.map((service) => (
            <Link
              to={service.href}
              key={service.title}
              className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50 transition-all duration-300"
            >
              {service.image && (
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.imageAlt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <div className="p-6 sm:p-8">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-display text-xl font-bold text-gray-900">
                    {service.title}
                  </h3>
                </div>
                <p className="text-primary-600 font-semibold text-sm mb-3">
                  {service.price}
                </p>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li
                      key={f}
                      className="flex items-center gap-2 text-sm text-gray-600"
                    >
                      <CheckCircleIcon className="w-4 h-4 text-green-500 shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/contact"
            className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
          >
            Get a Free Quote for Any Service
            <ArrowRightIcon className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

// ─── Ceramic Coating (Featured Service) ──────────────────────────────────────
function CeramicCoating() {
  const highlights = [
    {
      title: "Years of Protection",
      description:
        "A single ceramic coating application shields your paint for 2-5 years, far outlasting traditional wax.",
    },
    {
      title: "Hydrophobic Finish",
      description:
        "Water beads and rolls right off, keeping your vehicle cleaner longer and making washes effortless.",
    },
    {
      title: "UV & Chemical Resistant",
      description:
        "Blocks UV fading, bird droppings, tree sap, and road salt from damaging your paint.",
    },
    {
      title: "Showroom Gloss",
      description:
        "Deep, mirror-like shine that makes your vehicle look freshly detailed every single day.",
    },
  ];

  const included = [
    "Full vehicle wash & clay bar",
    "Paint correction (swirl & scratch removal)",
    "Professional ceramic coating application",
    "Interior detail included",
    "2-5 year protection warranty",
    "Hydrophobic water-repellent finish",
  ];

  return (
    <section
      id="ceramic-coating"
      className="py-16 sm:py-24 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left — Description & Highlights */}
          <div>
            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-4">
              <span className="text-primary-600 text-sm font-bold uppercase tracking-wider">
                Featured Service
              </span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Professional Ceramic Coating
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              The ultimate protection for your vehicle's paint. Our
              professional-grade ceramic coating creates an invisible, rock-hard
              layer that repels water, dirt, and contaminants &mdash; keeping
              your vehicle looking brand new for years.
            </p>

            <div className="mt-8 grid sm:grid-cols-2 gap-4">
              {highlights.map((b) => (
                <div key={b.title} className="flex gap-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-display font-bold text-gray-900 text-sm">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mt-0.5">
                      {b.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — What's Included Card */}
          <div className="bg-gradient-to-br from-navy-900 to-navy-950 rounded-2xl p-8 sm:p-10 text-white shadow-2xl">
            <div className="flex items-center gap-3 mb-6">
              <ShieldIcon className="w-10 h-10 text-primary-400" />
              <div>
                <h3 className="font-display text-xl font-extrabold">
                  What's Included
                </h3>
                <p className="text-sm text-gray-400">
                  Full ceramic coating package
                </p>
              </div>
            </div>
            <ul className="space-y-3 mb-8">
              {included.map((item) => (
                <li
                  key={item}
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <CheckCircleIcon className="w-4 h-4 text-primary-400 shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
            <div className="flex flex-col sm:flex-row items-center gap-4">
              <Link
                to="/services/ceramic-coating"
                className="w-full sm:w-auto text-center bg-primary-600 hover:bg-primary-500 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
              >
                Get a Ceramic Coating Quote
              </Link>
              <span className="text-sm text-gray-400">
                Starting at $1,500
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Why Choose Us ───────────────────────────────────────────────────────────
function WhyChooseUs() {
  const reasons = [
    {
      title: "Veteran Values",
      description:
        "Discipline, integrity, and attention to detail. The values we learned in service drive everything we do.",
      icon: ShieldIcon,
    },
    {
      title: "We Come to You",
      description:
        "No drop-offs, no waiting rooms. Our fully-equipped mobile unit arrives at your home or office on your schedule.",
      icon: TruckIcon,
    },
    {
      title: "Premium Products Only",
      description:
        "We use professional-grade detailing products that protect your vehicle while being safe for the environment.",
      icon: SparkleIcon,
    },
    {
      title: "100% Satisfaction",
      description:
        "Not happy with the results? We'll re-detail any area at no extra charge. Your satisfaction is our mission.",
      icon: ThumbsUpIcon,
    },
  ];

  return (
    <section id="why-us" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Detailing Done Right,{" "}
              <br className="hidden sm:block" />
              By Those Who Served
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              At Shine On Autocare, we bring military precision to every detail.
              Our veteran team treats your vehicle with the same care and respect
              we gave to our service equipment, now proudly serving the San Antonio
              and Pleasanton communities.
            </p>

            <div className="mt-8 space-y-6">
              {reasons.map((reason) => (
                <div key={reason.title} className="flex gap-4">
                  <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center shrink-0 mt-1">
                    <reason.icon className="w-5 h-5 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-display font-bold text-gray-900">{reason.title}</h3>
                    <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats card */}
          <div className="bg-white rounded-2xl p-8 sm:p-10 shadow-sm border border-gray-100">
            <div className="grid grid-cols-2 gap-8">
              {[
                { value: "5.0", label: "Star Rating" },
                { value: "50mi", label: "Service Radius" },
                { value: "$65", label: "Starting Price" },
                { value: "6+", label: "Service Options" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="font-display text-4xl sm:text-5xl font-extrabold text-primary-600">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-500 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-8 pt-8 border-t border-gray-100">
              <div className="flex items-center gap-3 justify-center">
                <StarRating />
                <span className="text-sm text-gray-600 font-medium">
                  5-Star Rated on Yelp
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── How It Works ────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    {
      step: "1",
      title: "Call or Request a Quote",
      description:
        "Give us a call or fill out our quick form. Tell us about your vehicle, location, and what services you need.",
    },
    {
      step: "2",
      title: "We Come to You",
      description:
        "We schedule a time that works and bring our fully-equipped mobile detailing unit to your home or office.",
    },
    {
      step: "3",
      title: "Enjoy the Shine",
      description:
        "Sit back and relax while we transform your vehicle. We won't leave until you're 100% satisfied with the results.",
    },
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            How It Works
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Getting Started Is Easy
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Three simple steps to a showroom-quality vehicle, no drop-offs needed.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 sm:gap-12">
          {steps.map((item) => (
            <div key={item.step} className="text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg shadow-primary-600/25">
                <span className="font-display text-2xl font-extrabold text-white">
                  {item.step}
                </span>
              </div>
              <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                {item.title}
              </h3>
              <p className="text-gray-500 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Testimonials ────────────────────────────────────────────────────────────
function Testimonials() {
  const reviews = [
    {
      name: "Marcus T.",
      location: "San Antonio, TX",
      vehicle: "2022 Ford F-150",
      text: "Had them come out to SA for a ceramic coating on my F-150. Incredible work. My truck looks better than when I drove it off the lot. Worth every penny!",
    },
    {
      name: "Sarah M.",
      location: "Pleasanton, TX",
      vehicle: "2021 Honda CR-V",
      text: "I've tried other detailers in the area and none compare to Shine On. They were professional, on time, and the results speak for themselves. My car is spotless!",
    },
    {
      name: "David R.",
      location: "Jourdanton, TX",
      vehicle: "2020 Harley Davidson",
      text: "These guys know what they're doing. My Harley has never looked this good. Veteran-owned business that takes real pride in their work. Will be a repeat customer.",
    },
  ];

  return (
    <section id="reviews" className="py-16 sm:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Testimonials
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            What Our Customers Say
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            Real results from real customers across the San Antonio &amp;
            Pleasanton area.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100"
            >
              <div className="mb-4">
                <StarRating />
              </div>
              <blockquote className="text-gray-600 leading-relaxed mb-4">
                &ldquo;{review.text}&rdquo;
              </blockquote>
              <div>
                <p className="font-bold text-gray-900">{review.name}</p>
                <p className="text-sm text-gray-400">
                  {review.vehicle} &middot; {review.location}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Service Area ────────────────────────────────────────────────────────────
function ServiceArea() {
  const areas = [
    { name: "San Antonio", slug: "san-antonio-tx" },
    { name: "Pleasanton", slug: "pleasanton-tx" },
    { name: "Jourdanton", slug: "jourdanton-tx" },
    { name: "Poteet", slug: "poteet-tx" },
    { name: "Floresville", slug: "floresville-tx" },
    { name: "Karnes City", slug: null },
    { name: "Pearsall", slug: null },
    { name: "Devine", slug: "devine-tx" },
    { name: "Lytle", slug: "lytle-tx" },
    { name: "Somerset", slug: null },
    { name: "Atascosa County", slug: "atascosa-county" },
    { name: "Wilson County", slug: null },
  ];

  return (
    <section id="service-area" className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              Service Area
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Mobile Detailing in San Antonio,{" "}
              <br className="hidden sm:block" />
              Pleasanton &amp; Beyond
            </h2>
            <p className="mt-4 text-lg text-gray-500 leading-relaxed">
              Based in Pleasanton, TX, we provide mobile auto detailing and
              ceramic coating services within a 50-mile radius, including the
              greater San Antonio area. Additional mileage fees may apply for
              distances over 50 miles.
            </p>

            <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 gap-3">
              {areas.map((area) =>
                area.slug ? (
                  <Link
                    key={area.name}
                    to={`/areas/${area.slug}`}
                    className="flex items-center gap-2 text-sm text-gray-600 hover:text-primary-600 transition"
                  >
                    <MapPinIcon className="w-4 h-4 text-primary-500 shrink-0" />
                    {area.name}
                  </Link>
                ) : (
                  <div
                    key={area.name}
                    className="flex items-center gap-2 text-sm text-gray-600"
                  >
                    <MapPinIcon className="w-4 h-4 text-primary-500 shrink-0" />
                    {area.name}
                  </div>
                )
              )}
            </div>

            <p className="mt-6 text-sm text-gray-400">
              Don't see your area? Contact us. We may still be able to serve you.
            </p>
          </div>

          <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-square lg:aspect-auto lg:h-[450px] flex items-center justify-center border border-gray-200">
            <div className="text-center p-8">
              <MapPinIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <p className="text-gray-400 font-medium">Google Maps Embed</p>
              <p className="text-gray-300 text-sm mt-1">
                {CITY_STATE_ZIP} &middot; 50-Mile Radius
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── CTA / Contact Section ───────────────────────────────────────────────────
function CTASection() {
  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800 relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className="lg:sticky lg:top-28">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Ready for a Showroom Shine?
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              Get a free, no-obligation quote in minutes. Tell us what you need
              and we'll get back to you fast, usually within the hour.
            </p>

            <div className="mt-8 space-y-4">
              <a
                href={PHONE_HREF}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <PhoneIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{PHONE}</p>
                  <p className="text-xs text-gray-500">Call or text anytime</p>
                </div>
              </a>
              <a
                href={EMAIL_HREF}
                className="flex items-center gap-3 text-gray-300 hover:text-white transition"
              >
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <EmailIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{EMAIL}</p>
                  <p className="text-xs text-gray-500">
                    We respond within 1 hour
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 text-gray-300">
                <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                  <MapPinIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium">{CITY_STATE_ZIP}</p>
                  <p className="text-xs text-gray-500">
                    Serving SA &amp; surrounding areas
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400 leading-relaxed">
                <strong className="text-white">Prefer to talk?</strong> We find
                the best results come from a quick conversation. Call us and
                we'll walk through your options and give you an honest quote,
                no pressure and no upselling.
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <QuoteForm />
        </div>
      </div>
    </section>
  );
}
