import type { Route } from "./+types/motorcycle-detailing";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "Motorcycle Detailing | Shine On Autocare | Pleasanton & San Antonio TX";
  const description =
    "Expert motorcycle detailing: chrome polish, paint protection, engine cleaning, and full detail. Mobile service in Pleasanton and San Antonio, TX.";
  const url = `${SITE_URL}/services/motorcycle-detailing`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "motorcycle detailing Pleasanton TX, motorcycle detailing San Antonio, motorcycle chrome polish, motorcycle paint protection, Harley Davidson detailing, bike detail near me, mobile motorcycle detailing",
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

const features = [
  {
    title: "Full Bike Wash & Dry",
    description:
      "We start with a thorough hand wash using products that are safe for all motorcycle surfaces — paint, chrome, plastic, and rubber. No high-pressure blasting that can force water into electrical components or bearings.",
  },
  {
    title: "Chrome & Metal Polish",
    description:
      "Chrome exhaust pipes, handlebars, engine covers, and aluminum wheels are polished by hand until they shine. We remove tarnish, water spots, and light corrosion to bring back that mirror-like finish your bike deserves.",
  },
  {
    title: "Paint Correction & Protection",
    description:
      "Light swirl marks and scratches on your tank, fenders, and fairings are polished out. We then apply a protective sealant or wax to guard against UV damage and keep that deep gloss between rides.",
  },
  {
    title: "Engine & Exhaust Detailing",
    description:
      "The engine is degreased and detailed to remove road grime, oil residue, and bug splatter. Exhaust pipes are cleaned and polished. A clean engine runs cooler and lets you spot issues like leaks early.",
  },
  {
    title: "Leather & Vinyl Care",
    description:
      "Saddles, saddlebags, and grips are cleaned and conditioned to prevent cracking and fading from sun exposure. We use products designed specifically for motorcycle leather to keep it supple and protected.",
  },
  {
    title: "Wheel & Spoke Detail",
    description:
      "Wheels and spokes are cleaned individually to remove brake dust, chain lube, and road grime. We get into every spoke and every corner of the rim for a show-ready finish.",
  },
];

const process = [
  "We begin with a careful rinse and hand wash, paying attention to avoid forcing water into electrical connections, bearings, and air intakes.",
  "The engine and exhaust are degreased and detailed. We work around sensitive components carefully while removing accumulated grime and residue.",
  "Chrome, aluminum, and metal surfaces are polished by hand. Painted surfaces are inspected and any swirl marks or light scratches are corrected.",
  "Leather seats, bags, and accessories are cleaned and conditioned. Plastic and rubber components are treated with UV protectant.",
  "A protective sealant is applied to painted and chrome surfaces. Wheels and spokes are cleaned, and the bike gets a final inspection to make sure every detail is right.",
];

const relatedServices = [
  { href: "/services/rv-detailing", label: "RV Detailing" },
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
];

export default function MotorcycleDetailing() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        slug="motorcycle-detailing"
        title="Motorcycle Detailing"
        subtitle="Show-Quality Detail for Your Ride"
        description="Your motorcycle isn't just transportation — it's a statement. We detail bikes with the precision they deserve, from chrome polish to engine detailing to paint protection. Every component gets individual attention using products made for each specific material. Whether it's a Harley cruiser or a sport bike, we'll make it look its best."
        features={features}
        process={process}
        pricing="Pricing varies by motorcycle type and condition. Contact us for a personalized quote."
        formServiceValue="custom"
        relatedServices={relatedServices}
        heroImage={{
          src: "/images/hero-poster.jpg",
          alt: "Professional motorcycle detailing and ceramic coating hero shot",
        }}
        gallery={[
          {
            src: "https://static.wixstatic.com/media/da9245_be7c8a3aff304bfc8d60f019e53ad7ef~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_be7c8a3aff304bfc8d60f019e53ad7ef~mv2.webp",
            alt: "Detailed view of the professional detailing process on a motorcycle",
          },
          {
            src: "/images/about-garage.jpg",
            alt: "Shine On Autocare workspace set up for motorcycle detailing",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_760f586cd8664697bb3ae1a94bb80806~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_760f586cd8664697bb3ae1a94bb80806~mv2.webp",
            alt: "Chrome and paint polishing for a show-quality motorcycle finish",
          },
        ]}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
