import { useState } from "react";
import type { Route } from "./+types/faq";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { ArrowRightIcon, PhoneIcon } from "~/components/icons";

export const meta: Route.MetaFunction = () => {
  const title =
    "FAQ | Shine On Autocare | Mobile Detailing Questions Answered";
  const description =
    "Got questions about mobile detailing, ceramic coating, or our services? Find answers to the most common questions about Shine On Autocare in Pleasanton & San Antonio, TX.";
  const url = "https://www.shineonautocare.com/faq";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "auto detailing FAQ, mobile detailing questions, ceramic coating FAQ, car detailing Pleasanton TX, detailing San Antonio questions",
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

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQCategory {
  title: string;
  items: FAQItem[];
}

const faqCategories: FAQCategory[] = [
  {
    title: "General",
    items: [
      {
        question: "What is mobile detailing?",
        answer:
          "Mobile detailing means we come to you. We bring all the equipment, water, and products needed to detail your vehicle at your home, office, or wherever is most convenient. No need to drop your car off or wait at a shop.",
      },
      {
        question: "What areas do you serve?",
        answer:
          "We're based in Pleasanton, TX and serve a 50-mile radius including San Antonio, Jourdanton, Floresville, Poteet, Lytle, Devine, and surrounding South Texas communities.",
      },
      {
        question: "Are you a veteran-owned business?",
        answer:
          "Yes. Shine On Autocare is proudly veteran-owned and operated. We bring the same discipline, attention to detail, and commitment to excellence from our military service into every job.",
      },
      {
        question: "How do I schedule a service?",
        answer:
          "The best way is to call us at (830) 569-9054 or fill out the contact form on our website. We'll chat about what your vehicle needs and find a time that works for you. We typically respond within the hour.",
      },
    ],
  },
  {
    title: "Services",
    items: [
      {
        question: "What's the difference between interior and exterior detailing?",
        answer:
          "Interior detailing focuses on the inside of your vehicle: deep vacuuming, steam cleaning, leather conditioning, dashboard and console cleaning, and stain removal. Exterior detailing covers the outside: hand wash, clay bar treatment, polish, wax or sealant, tire and wheel cleaning, and trim restoration.",
      },
      {
        question: "What is ceramic coating and is it worth it?",
        answer:
          "Ceramic coating is a liquid polymer applied to your vehicle's exterior that chemically bonds with the paint. It creates a durable, hydrophobic layer that protects against UV damage, bird droppings, tree sap, and minor scratches. In Texas heat and sun, it's one of the best investments you can make to protect your paint long-term. Our coatings last several years with proper care.",
      },
      {
        question: "Do you detail trucks, SUVs, and larger vehicles?",
        answer:
          "Absolutely. We detail everything from sedans to full-size trucks, SUVs, RVs, and motorcycles. Pricing for larger vehicles may vary based on size and condition, so contact us for a free quote.",
      },
      {
        question: "What is paint correction?",
        answer:
          "Paint correction is the process of removing surface imperfections like swirl marks, light scratches, water spots, and oxidation from your vehicle's paint using specialized compounds and machine polishers. It restores the paint to a like-new finish and is often done before applying a ceramic coating.",
      },
      {
        question: "Do you offer RV and motorcycle detailing?",
        answer:
          "Yes. We offer full detailing services for RVs, travel trailers, and motorcycles. Whether it's a weekend road trip rig or a show bike, we'll get it looking its best. Contact us for pricing specific to your vehicle.",
      },
    ],
  },
  {
    title: "Pricing & Payment",
    items: [
      {
        question: "How much does detailing cost?",
        answer:
          "Our interior detailing starts at $65, interior and exterior starts at $130, and premium full detailing starts at $330. Ceramic coating starts at $1,500. Final pricing depends on your vehicle's size and condition. We always provide a free quote before any work begins.",
      },
      {
        question: "Do you offer free quotes?",
        answer:
          "Yes. Every quote is free with no obligation. Call us or fill out the form on our contact page and we'll give you an honest price based on your vehicle and the services you need. No surprises.",
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept cash, credit/debit cards, and digital payments. Payment is collected after the job is complete and you're satisfied with the results.",
      },
    ],
  },
  {
    title: "Process & Preparation",
    items: [
      {
        question: "How long does a detail take?",
        answer:
          "It depends on the service and your vehicle's condition. A basic interior detail usually takes 1-2 hours. A full interior and exterior detail can take 3-5 hours. Ceramic coating applications typically take a full day. We'll give you a time estimate when you book.",
      },
      {
        question: "Do I need to be home during the service?",
        answer:
          "Not necessarily. As long as we have access to the vehicle and a water source (if needed), you're free to go about your day. Many of our customers schedule us while they're at work.",
      },
      {
        question: "What do I need to provide?",
        answer:
          "We bring everything we need: equipment, products, and water in most cases. All we ask is that the vehicle is accessible and any personal belongings are removed from the interior before we start.",
      },
      {
        question: "How do I maintain my vehicle after a detail or ceramic coating?",
        answer:
          "We'll walk you through care instructions after every service. For ceramic-coated vehicles, we recommend regular hand washes (avoid automatic car washes with brushes), using pH-neutral car soap, and scheduling a maintenance detail every few months to keep the coating performing at its best.",
      },
    ],
  },
];

function FAQAccordion({ item }: { item: FAQItem }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden">
      <button
        type="button"
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-5 sm:px-6 py-4 sm:py-5 text-left hover:bg-gray-50 transition"
        aria-expanded={open}
      >
        <span className="font-bold text-gray-900 text-base sm:text-lg leading-snug">
          {item.question}
        </span>
        <span
          className={`shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-primary-100 text-primary-600 text-sm font-bold transition-transform ${
            open ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>
      {open && (
        <div className="px-5 sm:px-6 pb-5 sm:pb-6">
          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
        </div>
      )}
    </div>
  );
}

export default function FAQ() {
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
              <span className="text-gray-300">FAQ</span>
            </nav>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Frequently Asked Questions
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Everything you need to know about our mobile detailing services.
              Don't see your question? Give us a call — we're happy to help.
            </p>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" aria-hidden="true" fill="none" className="w-full">
            <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill="white" />
          </svg>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {faqCategories.map((category) => (
            <div key={category.title} className="mb-12 last:mb-0">
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-6">
                {category.title}
              </h2>
              <div className="space-y-3">
                {category.items.map((item) => (
                  <FAQAccordion key={item.question} item={item} />
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Still Have Questions CTA */}
      <section className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Still Have Questions?
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            We'd love to hear from you. Reach out and we'll get you an answer
            fast — usually within the hour.
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
              <PhoneIcon className="mr-2 w-5 h-5" />
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
