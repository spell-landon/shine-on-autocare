import type { Route } from "./+types/ceramic-coating";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";

export const meta: Route.MetaFunction = () => {
  const title =
    "Ceramic Coating Pleasanton & San Antonio TX | Shine On Autocare";
  const description =
    "Professional ceramic coating with 2-5 years of protection. Hydrophobic finish, UV resistance, and showroom gloss. Veteran-owned mobile service in Pleasanton and San Antonio, TX.";
  const url = "https://www.shineonautocare.com/services/ceramic-coating";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "ceramic coating Pleasanton TX, ceramic coating San Antonio, professional ceramic coating, paint protection, hydrophobic coating, UV protection, car ceramic coating near me, mobile ceramic coating Texas",
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

const features = [
  {
    title: "Paint Decontamination",
    description:
      "We start with a thorough wash and clay bar treatment to pull out embedded contaminants, brake dust, and industrial fallout. This gives the coating a perfectly clean surface to bond to.",
  },
  {
    title: "Single-Stage Paint Correction",
    description:
      "Light swirl marks and minor scratches get polished out before the coating goes on. This step makes sure you're locking in a clean, smooth finish rather than sealing in imperfections.",
  },
  {
    title: "Ceramic Coating Application",
    description:
      "We apply a professional-grade ceramic coating by hand, panel by panel. The coating chemically bonds to your paint and creates a durable, protective layer that lasts for years.",
  },
  {
    title: "Hydrophobic Finish",
    description:
      "Once cured, the coating creates an ultra-slick surface that causes water to bead up and roll off. Dirt and grime have a much harder time sticking, so your vehicle stays cleaner between washes.",
  },
  {
    title: "UV and Chemical Protection",
    description:
      "The coating acts as a barrier against UV rays, bird droppings, tree sap, road salt, and other chemicals that break down your paint over time. Your color stays deep and vibrant for years.",
  },
  {
    title: "Multi-Year Warranty",
    description:
      "Every ceramic coating we apply comes with a warranty for your peace of mind. Depending on the package, you get 2 to 5 years of guaranteed protection backed by our commitment to quality.",
  },
];

const process = [
  "We start with a full decontamination wash, including a clay bar treatment, to remove every bit of embedded dirt and fallout from your paint.",
  "Next, we perform a single-stage paint correction to polish out swirl marks and light scratches so the surface is smooth and ready for coating.",
  "The ceramic coating is applied by hand, one panel at a time, and allowed to cure properly for maximum bond strength.",
  "After curing, we do a final inspection under specialty lighting to confirm full coverage and an even, flawless finish.",
  "We walk you through aftercare instructions so you know exactly how to maintain that hydrophobic shine for years to come.",
];

const relatedServices = [
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
  { href: "/services/rv-motorcycle", label: "RV & Motorcycle Detailing" },
];

export default function CeramicCoating() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        title="Professional Ceramic Coating"
        subtitle="Long-Lasting Protection for Your Vehicle's Paint"
        description="Your vehicle's paint takes a beating every day from UV rays, road grime, bird droppings, and more. Our professional ceramic coating creates an invisible shield that keeps your paint looking fresh for 2 to 5 years. You get a deep, glossy finish with a hydrophobic surface that repels water and contaminants. It is the best long-term investment you can make for your vehicle's appearance."
        features={features}
        process={process}
        pricing="Starting at $1,500. Exact pricing depends on vehicle size and condition."
        formServiceValue="ceramic"
        relatedServices={relatedServices}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
