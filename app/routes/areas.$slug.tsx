import { Link, data } from "react-router";
import type { Route } from "./+types/areas.$slug";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { WaveDivider } from "~/components/wave-divider";
import { Breadcrumb } from "~/components/breadcrumb";
import { StarRating } from "~/components/star-rating";
import { QuoteForm } from "~/components/quote-form";
import {
  ArrowRightIcon,
  PhoneIcon,
  MapPinIcon,
  CheckCircleIcon,
} from "~/components/icons";
import { getLocation } from "~/data/locations";
import {
  PHONE,
  PHONE_HREF,
  SITE_URL,
  BUSINESS_NAME,
} from "~/data/constants";
import { JsonLd } from "~/components/json-ld";
import { buildLocationSchema } from "~/data/schema";

export const loader = ({ params }: Route.LoaderArgs) => {
  const location = getLocation(params.slug);
  if (!location) {
    throw data(null, { status: 404 });
  }
  return { location };
};

export const meta = ({ data }: Route.MetaArgs) => {
  if (!data?.location) return [{ title: "Area Not Found | Shine On Autocare" }];

  const { location } = data;
  const url = `${SITE_URL}/areas/${location.slug}`;

  return [
    { title: location.metaTitle },
    { name: "description", content: location.metaDescription },
    { name: "keywords", content: location.keywords },
    { property: "og:type", content: "website" },
    { property: "og:url", content: url },
    { property: "og:title", content: location.metaTitle },
    { property: "og:description", content: location.metaDescription },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: BUSINESS_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: location.metaTitle },
    { name: "twitter:description", content: location.metaDescription },
  ];
};

export default function AreaPage({ loaderData }: Route.ComponentProps) {
  const { location } = loaderData;

  return (
    <>
      <JsonLd
        data={buildLocationSchema({
          city: location.city,
          state: location.state,
          url: `${SITE_URL}/areas/${location.slug}`,
          description: location.heroDescription,
        })}
      />
      <Header />
      <main id="main-content">
        {/* Hero */}
        <section className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
            <div className="max-w-3xl">
              <Breadcrumb
                items={[
                  { label: "Service Areas", href: "/#service-area" },
                  { label: location.city },
                ]}
              />

              <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                {location.h1}
              </h1>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
                {location.heroDescription}
              </p>

              <div className="mt-6 flex items-center gap-4 text-sm text-gray-400">
                <div className="flex items-center gap-1.5">
                  <MapPinIcon className="w-4 h-4 text-primary-400" />
                  <span>{location.distanceFromBase}</span>
                </div>
              </div>

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

        {/* About This Area */}
        <section className="py-16 sm:py-24 bg-white">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight mb-6">
              Auto Detailing in {location.city}
              {location.county ? `, ${location.county}` : ""}
            </h2>
            <div className="space-y-5 text-gray-600 leading-relaxed text-lg">
              {location.aboutArea.map((paragraph, i) => (
                <p key={i}>{paragraph}</p>
              ))}
            </div>
          </div>
        </section>

        {/* Popular Services */}
        <section className="py-16 sm:py-24 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
                Our Services
              </span>
              <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Popular Services in {location.city}
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Full-service mobile detailing available at your {location.city} location.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {location.popularServices.map((service) => (
                <div
                  key={service}
                  className="flex items-center gap-3 bg-white rounded-xl p-4 border border-gray-100 shadow-sm"
                >
                  <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                  <span className="font-medium text-gray-900">{service}</span>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <Link
                to="/services"
                className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition"
              >
                View All Services
                <ArrowRightIcon className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </section>

        {/* Testimonial */}
        {location.testimonial && (
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="flex justify-center mb-4">
                <StarRating size="w-6 h-6" />
              </div>
              <blockquote className="text-lg text-gray-600 italic leading-relaxed">
                &ldquo;{location.testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-4">
                <p className="font-bold text-gray-900">
                  {location.testimonial.name}
                </p>
                <p className="text-sm text-gray-400">
                  {location.testimonial.vehicle}
                </p>
              </div>
            </div>
          </section>
        )}

        {/* Nearby Areas */}
        <section className="py-12 sm:py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Nearby Service Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {location.nearbyAreas.map((area) => (
                <Link
                  key={area.slug}
                  to={`/areas/${area.slug}`}
                  className="bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md text-gray-700 hover:text-primary-600 font-medium px-5 py-3 rounded-xl text-sm transition"
                >
                  {area.label}
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quote Form */}
        <section className="py-16 sm:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
              <div className="lg:sticky lg:top-28">
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  Get a Free Quote in {location.city}
                </h2>
                <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                  Tell us about your vehicle and we'll get back to you with a
                  free, no-obligation quote — usually within the hour.
                </p>
                <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-sm text-gray-400 leading-relaxed">
                    <strong className="text-white">Prefer to talk?</strong> Call
                    us at{" "}
                    <a href={PHONE_HREF} className="text-primary-400 hover:text-primary-300">
                      {PHONE}
                    </a>{" "}
                    and we'll walk through your options.
                  </p>
                </div>
              </div>
              <QuoteForm heading={`Get a Quote in ${location.city}`} />
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
