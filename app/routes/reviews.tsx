import type { Route } from "./+types/reviews";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import {
  StarIcon,
  ArrowRightIcon,
  YelpIcon,
} from "~/components/icons";

export const meta: Route.MetaFunction = () => {
  const title =
    "Customer Reviews | Shine On Autocare | 5-Star Rated Detailing";
  const description =
    "Read real customer reviews for Shine On Autocare. 5-star rated mobile auto detailing and ceramic coating serving Pleasanton, San Antonio, and South Texas.";
  const url = "https://www.shineonautocare.com/reviews";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "Shine On Autocare reviews, auto detailing reviews Pleasanton TX, mobile detailing reviews San Antonio, ceramic coating reviews Texas, 5-star detailing",
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

const reviews = [
  {
    name: "Marcus T.",
    location: "San Antonio, TX",
    vehicle: "2022 Ford F-150",
    text: "Had them come out to SA for a ceramic coating on my F-150. Incredible work. My truck looks better than when I drove it off the lot. Worth every penny and the team was super professional.",
  },
  {
    name: "Sarah M.",
    location: "Pleasanton, TX",
    vehicle: "2021 Honda CR-V",
    text: "I've tried other detailers in the area and none compare. They were on time, professional, and the results speak for themselves. My interior hasn't looked this clean in years. Already booked my next appointment.",
  },
  {
    name: "David R.",
    location: "Jourdanton, TX",
    vehicle: "2020 Harley Davidson Softail",
    text: "These guys know what they're doing with motorcycles. My Harley has never looked this good. Chrome was gleaming, paint was flawless. Veteran-owned business that takes real pride in their work.",
  },
  {
    name: "Jessica L.",
    location: "San Antonio, TX",
    vehicle: "2023 Toyota 4Runner",
    text: "Full interior detail with two kids and a dog? I honestly didn't think it was possible to get my 4Runner looking new again. They got every crumb, every stain, every dog hair. I'm a customer for life.",
  },
  {
    name: "Carlos G.",
    location: "Pleasanton, TX",
    vehicle: "2019 Chevy Silverado 2500",
    text: "I use my truck for work so it takes a beating. These guys did a full interior and exterior detail and it looked like a different vehicle when they were done. Fair price too. Already referred two friends.",
  },
  {
    name: "Amanda K.",
    location: "Floresville, TX",
    vehicle: "2022 BMW X3",
    text: "Got the ceramic coating package and could not be happier. Water just rolls right off. Three months later and it still looks freshly washed after a quick rinse. The convenience of mobile service is a game changer.",
  },
  {
    name: "James P.",
    location: "Poteet, TX",
    vehicle: "2018 Ford Mustang GT",
    text: "I'm picky about who touches my Mustang. These guys earned my trust. Paint correction took out swirls I thought were permanent. The depth and gloss is unreal. Highly recommend if you care about your paint.",
  },
  {
    name: "Rachel W.",
    location: "San Antonio, TX",
    vehicle: "2021 Kia Telluride",
    text: "Scheduled a detail before a road trip and they squeezed me in same week. Interior smells amazing, exterior is spotless. They even got the car seats looking brand new. Will definitely be calling again.",
  },
];

export default function Reviews() {
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
              <span className="text-gray-300">Reviews</span>
            </nav>

            <div className="flex items-center gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <StarIcon key={i} className="w-7 h-7 text-star-400" />
              ))}
              <span className="ml-3 text-2xl font-extrabold text-white">
                5.0
              </span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              What Our Customers Say
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Real feedback from real people across South Texas. We let our work
              speak for itself, but it's always nice when our customers do the
              talking too.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" aria-hidden="true" fill="none" className="w-full">
            <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {reviews.map((review) => (
              <div
                key={review.name}
                className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm border border-gray-100 hover:shadow-md hover:border-gray-200 transition-all duration-300"
              >
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <StarIcon
                      key={i}
                      className="w-5 h-5 text-star-500"
                    />
                  ))}
                </div>
                <blockquote className="text-gray-600 leading-relaxed mb-5">
                  &ldquo;{review.text}&rdquo;
                </blockquote>
                <div className="border-t border-gray-100 pt-4">
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

      {/* Leave a Review */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Had a Great Experience? Leave Us a Review
          </h2>
          <p className="mt-4 text-gray-500 leading-relaxed">
            Your feedback means the world to us. If we did a good job, we'd
            really appreciate you taking a minute to share your experience.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.yelp.com/biz/shine-on-autocare-pleasanton"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-red-300 hover:shadow-md text-gray-700 hover:text-red-600 font-semibold px-6 py-3.5 rounded-xl transition"
            >
              <YelpIcon className="w-5 h-5" />
              Review on Yelp
            </a>
            <a
              href="https://g.page/shine-on-autocare/review"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-white border border-gray-200 hover:border-blue-300 hover:shadow-md text-gray-700 hover:text-blue-600 font-semibold px-6 py-3.5 rounded-xl transition"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
              Review on Google
            </a>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ready for Your Own 5-Star Experience?
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Join our growing list of happy customers. Get a free quote today and
            see what everyone's talking about.
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
              href="tel:+18305699054"
              className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 text-white font-semibold text-lg px-8 py-4 rounded-xl transition border border-white/20"
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
