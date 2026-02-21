import type { Route } from "./+types/about";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import {
  ShieldIcon,
  SparkleIcon,
  ThumbsUpIcon,
  MapPinIcon,
  StarIcon,
  ArrowRightIcon,
} from "~/components/icons";

export const meta: Route.MetaFunction = () => {
  const title =
    "About Us | Shine On Autocare | Veteran-Owned Mobile Detailing";
  const description =
    "Learn about Shine On Autocare, a veteran-owned mobile auto detailing business serving Pleasanton, San Antonio, and South Texas. Built on integrity, precision, and community.";
  const url = "https://www.shineonautocare.com/about";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "about Shine On Autocare, veteran-owned detailing, mobile detailing Pleasanton TX, auto detailing San Antonio, veteran detailing business Texas",
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

const values = [
  {
    icon: ShieldIcon,
    title: "Integrity",
    description:
      "We do what we say we're going to do. Honest pricing, honest work, no surprises. If something isn't right, we make it right.",
  },
  {
    icon: SparkleIcon,
    title: "Precision",
    description:
      "Every vehicle gets the same careful attention, whether it's a daily driver or a weekend show car. Details matter, and we don't cut corners.",
  },
  {
    icon: ThumbsUpIcon,
    title: "Customer First",
    description:
      "Your schedule, your preferences, your satisfaction. We work around you and we won't leave until you're happy with the results.",
  },
  {
    icon: MapPinIcon,
    title: "Community",
    description:
      "We live and work here in South Texas. Supporting our neighbors and building real relationships is what keeps us going.",
  },
];

export default function About() {
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
              <span className="text-gray-300">About</span>
            </nav>

            <div className="inline-flex items-center gap-2 bg-primary-500/10 border border-primary-500/20 rounded-full px-4 py-1.5 mb-6">
              <StarIcon className="w-4 h-4 text-primary-300" />
              <span className="text-primary-300 text-sm font-semibold">
                Veteran-Owned &amp; Operated
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              About Shine On Autocare
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
              We're a small, veteran-owned mobile detailing team that believes
              your vehicle deserves more than a quick rinse. We bring real
              craftsmanship right to your driveway.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" aria-hidden="true" fill="none" className="w-full">
            <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Our Story
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                Shine On Autocare started the way a lot of good things do: with
                someone who cared a little too much about keeping their own ride
                looking sharp. After years of military service, we brought that
                same discipline, attention to detail, and work ethic into
                building something of our own.
              </p>
              <p>
                We're proud to be veteran-owned and rooted right here in
                Pleasanton, TX. This isn't a side hustle or a franchise. It's our
                livelihood, and we treat every vehicle like it belongs to
                someone we know, because most of the time it does.
              </p>
            </div>

            {/* Photos */}
            <div className="mt-8 mb-8 grid sm:grid-cols-2 gap-4 sm:gap-6">
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://static.wixstatic.com/media/da9245_9f82acb57d764c14a016fe0c9d58f2b4~mv2.jpg/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_9f82acb57d764c14a016fe0c9d58f2b4~mv2.webp"
                  alt="Shine On Autocare mobile detailing van fully equipped and ready to serve"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                />
              </div>
              <div className="rounded-2xl overflow-hidden shadow-lg">
                <img
                  src="https://static.wixstatic.com/media/da9245_b697eafca1f64c44937791682972702d~mv2.jpg/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_b697eafca1f64c44937791682972702d~mv2.webp"
                  alt="Shine On Autocare team at work detailing a vehicle"
                  className="w-full h-64 sm:h-72 object-cover"
                  loading="lazy"
                />
              </div>
            </div>

            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              <p>
                We serve the Pleasanton and San Antonio communities with mobile
                detailing and ceramic coating services. That means we come to
                you, fully equipped and ready to work, so you can go about your
                day while we handle the rest. From a quick interior refresh to a
                full ceramic coating, we do it all with the same level of care.
              </p>
              <p>
                Our goal is simple: do great work, charge fair prices, and earn
                customers for life. No gimmicks, no shortcuts, just honest
                results you can see and feel.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
              What We Stand For
            </span>
            <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Values
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              These aren't just words on a wall. They're the standard we hold
              ourselves to on every single job.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white rounded-2xl p-6 sm:p-8 border border-gray-100 shadow-sm text-center"
              >
                <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-5">
                  <value.icon className="w-7 h-7 text-primary-600" />
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900 mb-2">
                  {value.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-br from-navy-950 to-navy-900 rounded-2xl p-8 sm:p-12 shadow-xl">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { value: "5.0", label: "Star Rating" },
                { value: "50mi", label: "Service Radius" },
                { value: "$65", label: "Starting Price" },
                { value: "6+", label: "Service Options" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-4xl sm:text-5xl font-extrabold text-primary-400">
                    {stat.value}
                  </p>
                  <p className="text-sm text-gray-400 mt-1 font-medium">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
            Ready to See the Difference?
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            We'd love the chance to show you what proper detailing looks like.
            Reach out for a free quote and let's get your vehicle looking its
            best.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
            <a
              href="tel:+18305699054"
              className="inline-flex items-center justify-center bg-white hover:bg-gray-50 text-gray-700 font-semibold text-lg px-8 py-4 rounded-xl transition border border-gray-200 shadow-sm"
            >
              Call (830) 569-9054
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
