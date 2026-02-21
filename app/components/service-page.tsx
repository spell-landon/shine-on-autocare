import { Link } from "react-router";
import { CheckCircleIcon, ArrowRightIcon, StarIcon, PhoneIcon } from "./icons";
import { QuoteForm } from "./quote-form";

interface ServiceFeature {
  title: string;
  description: string;
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
}: ServicePageProps) {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link to="/services" className="hover:text-white transition">
                Services
              </Link>
              <span>/</span>
              <span className="text-gray-300">{title}</span>
            </nav>

            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {title}
            </h1>
            <p className="mt-2 text-lg sm:text-xl text-primary-400 font-semibold">
              {subtitle}
            </p>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
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
                href="tel:+18305699054"
                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition border border-white/20"
              >
                <PhoneIcon className="mr-2 w-5 h-5" />
                Call (830) 569-9054
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" aria-hidden="true" fill="none" className="w-full">
            <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill="white" />
          </svg>
        </div>
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

      {/* Our Process */}
      <section className="py-16 sm:py-20 bg-gray-50">
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
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-6 h-6 text-star-500" />
            ))}
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
