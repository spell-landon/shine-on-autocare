import { Link } from "react-router";
import { CheckCircleIcon, ArrowRightIcon, PhoneIcon } from "./icons";
import { QuoteForm } from "./quote-form";
import { WaveDivider } from "./wave-divider";
import { Breadcrumb } from "./breadcrumb";
import { StarRating } from "./star-rating";
import { PHONE, PHONE_HREF, SITE_URL, BUSINESS_NAME } from "~/data/constants";
import { JsonLd } from "~/components/json-ld";
import { buildServiceSchema } from "~/data/schema";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ServiceImage {
  src: string;
  alt: string;
}

interface ServicePageProps {
  title: string;
  subtitle: string;
  description: string;
  features: ServiceFeature[];
  process: string[];
  pricing: string;
  formServiceValue: string;
  relatedServices: Array<{ href: string; label: string }>;
  slug: string;
  price?: string;
  heroImage?: ServiceImage;
  gallery?: ServiceImage[];
}

export function ServicePage({
  title,
  subtitle,
  description,
  features,
  process,
  pricing,
  formServiceValue,
  relatedServices,
  slug,
  price,
  heroImage,
  gallery,
}: ServicePageProps) {
  return (
    <>
      <JsonLd
        data={buildServiceSchema({
          name: title,
          description,
          url: `${SITE_URL}/services/${slug}`,
          price,
        })}
      />
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className={heroImage ? "grid lg:grid-cols-2 gap-12 lg:gap-16 items-center" : ""}>
            <div className={heroImage ? "" : "max-w-3xl"}>
              <Breadcrumb
                items={[
                  { label: "Services", href: "/services" },
                  { label: title },
                ]}
              />

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
                {title}
              </h1>
              <p className="mt-2 text-lg sm:text-xl text-primary-400 font-semibold">
                {subtitle}
              </p>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                {description}
              </p>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <a
                  href="#quote-form"
                  className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-500 text-white font-bold text-lg px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
                >
                  Get a Free Quote
                  <ArrowRightIcon className="ml-2 w-5 h-5" />
                </a>
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition border border-white/20"
                >
                  <PhoneIcon className="mr-2 w-5 h-5" />
                  Call {PHONE}
                </a>
              </div>
            </div>

            {heroImage && (
              <div className="hidden lg:block">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                  <img
                    src={heroImage.src}
                    alt={heroImage.alt}
                    className="w-full h-80 xl:h-96 object-cover"
                    loading="eager"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* What's Included */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              What's Included
            </h2>
            <p className="mt-4 text-lg text-gray-500">{pricing}</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-100"
              >
                <div className="flex items-center gap-3 mb-3">
                  <CheckCircleIcon className="w-5 h-5 text-green-500 shrink-0" />
                  <h3 className="font-bold text-gray-900">{feature.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      {gallery && gallery.length > 0 && (
        <section className="py-16 sm:py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
                Our Work
              </h2>
              <p className="mt-4 text-lg text-gray-500">
                Real results from real vehicles we've serviced across South Texas.
              </p>
            </div>
            <div className={`grid gap-4 sm:gap-6 ${gallery.length === 2 ? "sm:grid-cols-2" : gallery.length >= 3 ? "sm:grid-cols-2 lg:grid-cols-3" : ""}`}>
              {gallery.map((img, i) => (
                <div
                  key={i}
                  className="rounded-2xl overflow-hidden shadow-md border border-gray-100"
                >
                  <img
                    src={img.src}
                    alt={img.alt}
                    className="w-full h-56 sm:h-64 object-cover"
                    loading="lazy"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Our Process */}
      <section className={`py-16 sm:py-20 ${gallery && gallery.length > 0 ? "bg-white" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
              Our Process
            </h2>
            <p className="mt-4 text-lg text-gray-500">
              Here's what to expect when you book this service with us.
            </p>
          </div>
          <div className="max-w-3xl mx-auto space-y-6">
            {process.map((step, i) => (
              <div key={i} className="flex gap-4">
                <div className="w-10 h-10 bg-primary-600 rounded-xl flex items-center justify-center shrink-0 shadow-md shadow-primary-600/25">
                  <span className="text-sm font-bold text-white">{i + 1}</span>
                </div>
                <div className="pt-2">
                  <p className="text-gray-700 leading-relaxed">{step}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Review Snippet */}
      <section className={`py-12 sm:py-16 ${gallery && gallery.length > 0 ? "bg-gray-50" : "bg-white"}`}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <StarRating size="w-6 h-6" />
          </div>
          <p className="text-lg text-gray-600 italic leading-relaxed">
            "Veteran-owned, professional, on time, and the results speak for
            themselves. Highly recommend Shine On Autocare!"
          </p>
          <p className="mt-3 text-sm text-gray-400 font-medium">
            5-Star Rated on Yelp
          </p>
        </div>
      </section>

      {/* Quote Form */}
      <section
        id="quote-form"
        className="py-16 sm:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div className="lg:sticky lg:top-28">
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Ready to Get Started?
              </h2>
              <p className="mt-4 text-lg text-gray-300 leading-relaxed">
                Fill out the form and we'll get back to you with a free quote,
                usually within the hour. Or give us a call if you'd rather chat.
              </p>
              <div className="mt-8 p-4 bg-white/5 rounded-xl border border-white/10">
                <p className="text-sm text-gray-400 leading-relaxed">
                  <strong className="text-white">Prefer to talk?</strong> We find
                  the best results come from a quick conversation. Call us and
                  we'll walk through your options and give you an honest quote.
                  No pressure, no upselling.
                </p>
              </div>
            </div>
            <QuoteForm
              preselectedService={formServiceValue}
              heading={`Get a ${title} Quote`}
            />
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
            Other Services You Might Need
          </h2>
          <div className="flex flex-wrap justify-center gap-3">
            {relatedServices.map((service) => (
              <Link
                key={service.href}
                to={service.href}
                className="bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md text-gray-700 hover:text-primary-600 font-medium px-5 py-3 rounded-xl text-sm transition"
              >
                {service.label}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
