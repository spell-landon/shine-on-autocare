import type { Route } from "./+types/veteran-owned";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { WaveDivider } from "~/components/wave-divider";
import { Breadcrumb } from "~/components/breadcrumb";
import { StarRating } from "~/components/star-rating";
import {
  StarIcon,
  ArrowRightIcon,
  ShieldIcon,
  CheckCircleIcon,
  PhoneIcon,
} from "~/components/icons";
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "Veteran-Owned Auto Detailing | Shine On Autocare | Pleasanton & San Antonio TX";
  const description =
    "Shine On Autocare is a veteran-owned mobile auto detailing business serving Pleasanton, San Antonio, and South Texas. Military values, professional results. Support a veteran-owned business.";
  const url = `${SITE_URL}/veteran-owned`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "veteran owned auto detailing, veteran owned business Pleasanton TX, veteran owned detailing San Antonio, veteran owned car wash, military owned detailing, support veteran business Texas",
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

const militaryValues = [
  {
    title: "Discipline",
    description:
      "Every detail is performed with a systematic, disciplined approach. We follow a proven process for every vehicle, every time. No shortcuts, no skipped steps.",
  },
  {
    title: "Attention to Detail",
    description:
      "The military taught us that missing the small stuff costs you. We carry that same mindset into every job — checking and re-checking until it's right.",
  },
  {
    title: "Integrity",
    description:
      "We give you an honest quote, do honest work, and stand behind our results. If something isn't right, we make it right — no questions asked.",
  },
  {
    title: "Accountability",
    description:
      "We show up on time, communicate clearly, and take full responsibility for our work. You'll never have to chase us down or wonder about the status of your vehicle.",
  },
  {
    title: "Service Before Self",
    description:
      "The military taught us to put the mission first and take care of people. That's how we run this business — we take care of you and your vehicle the same way.",
  },
  {
    title: "Excellence",
    description:
      "Good enough isn't good enough. We want every customer to be genuinely surprised by how much better their vehicle looks when we're done.",
  },
];

export default function VeteranOwned() {
  return (
    <>
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section data-hero className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <Breadcrumb items={[{ label: "Veteran-Owned" }]} />

              <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-6">
                <StarIcon className="w-4 h-4 text-primary-300" />
                <span className="text-primary-300 text-sm font-semibold">
                  Proudly Veteran-Owned
                </span>
              </div>

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                Veteran-Owned Auto Detailing
                <span className="block text-primary-400">
                  in Pleasanton &amp; San Antonio
                </span>
              </h1>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
                Shine On Autocare is proudly veteran-owned and operated. We
                bring the same discipline, integrity, and attention to detail
                from our military service to every vehicle we touch.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
                >
                  Support a Veteran Business
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

        {/* Our Story */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              From Service to Service
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                After years of military service, we came home to South Texas
                with a simple goal: build something of our own that reflects the
                values we learned in uniform. Shine On Autocare was born from
                that mission.
              </p>
              <p>
                The military taught us that doing things right matters. That
                showing up on time matters. That the details matter. These
                aren't just slogans for us — they're the foundation of how we
                run our business every single day.
              </p>
              <p>
                We chose auto detailing because we're genuinely passionate about
                it. There's something deeply satisfying about taking a vehicle
                that's been through the ringer and transforming it back to
                showroom condition. It's honest work that produces visible,
                tangible results — and that resonates with our military
                background.
              </p>
              <p>
                Based in Pleasanton, TX, we serve our local community and the
                greater San Antonio area with mobile detailing and ceramic
                coating services. We're not a franchise or a side gig — this is
                our livelihood, and we stake our reputation on every job.
              </p>
            </div>
          </div>
        </section>

        {/* Military Values */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Our Foundation
              </span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Military Values, Professional Results
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                The principles we learned in service shape everything we do.
                Here's what that means for your vehicle.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {militaryValues.map((value) => (
                <div
                  key={value.title}
                  className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <ShieldIcon className="w-6 h-6 text-primary-600 shrink-0" />
                    <h3 className="font-display text-lg font-bold text-gray-900">
                      {value.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What We Offer */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                  Our Services
                </span>
                <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                  Full-Service Mobile Detailing
                </h2>
                <p className="mt-4 text-lg text-gray-500 leading-relaxed">
                  We offer a complete range of professional detailing services,
                  all performed at your location. From a quick interior refresh
                  to full ceramic coating, we do it all.
                </p>
                <ul className="mt-8 space-y-3">
                  {[
                    "Interior Detailing — starting at $65",
                    "Interior & Exterior — starting at $130",
                    "Full Detail Premium — starting at $330",
                    "Ceramic Coating — starting at $1,500",
                    "Paint Correction — by quote",
                    "Odor Removal — by quote",
                    "Truck, SUV, RV & Motorcycle Detailing",
                  ].map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-gray-700"
                    >
                      <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Link
                    to="/services"
                    className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition"
                  >
                    View All Services
                    <ArrowRightIcon className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>

              <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl p-8 sm:p-10 shadow-xl">
                <div className="text-center">
                  <div className="flex justify-center mb-4">
                    <StarRating size="w-7 h-7" color="text-star-400" />
                  </div>
                  <p className="text-3xl font-extrabold text-white mb-2">
                    5.0 Star Rating
                  </p>
                  <p className="text-gray-400 mb-8">
                    Trusted by customers across South Texas
                  </p>
                  <div className="grid grid-cols-2 gap-6">
                    {[
                      { value: "50mi", label: "Service Radius" },
                      { value: "$65", label: "Starting Price" },
                    ].map((stat) => (
                      <div key={stat.label}>
                        <p className="text-3xl font-extrabold text-primary-400">
                          {stat.value}
                        </p>
                        <p className="text-sm text-gray-400 mt-1">
                          {stat.label}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Support a Veteran-Owned Business
            </h2>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed">
              When you choose Shine On Autocare, you're not just getting a great
              detail — you're supporting a veteran-owned small business in your
              community. Get in touch for a free, no-obligation quote.
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
