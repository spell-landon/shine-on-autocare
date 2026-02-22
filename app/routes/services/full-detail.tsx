import type { Route } from "./+types/full-detail";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "Full Detailing Premium | Shine On Autocare | Pleasanton & San Antonio TX";
  const description =
    "Our top-tier detail package starting at $330. Multi-stage paint correction, full interior restoration, and premium sealant for lasting protection. Mobile service in Pleasanton and San Antonio, TX.";
  const url = `${SITE_URL}/services/full-detail`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "full detail Pleasanton TX, premium detailing San Antonio, complete car detail, paint correction detail, full interior exterior detail, mobile detailing premium package, best auto detail near me",
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
    title: "Full Interior Restoration",
    description:
      "Every surface inside your vehicle gets attention. We deep clean seats, carpets, headliner, dashboard, console, and door panels. Leather is conditioned, fabric is extracted, and every crevice is detailed by hand.",
  },
  {
    title: "Paint Decontamination",
    description:
      "Before any polishing begins, we perform a full decontamination wash followed by a clay bar treatment. This removes bonded contaminants like brake dust, industrial fallout, and tree sap from your paint surface.",
  },
  {
    title: "Single-Stage Paint Correction",
    description:
      "We machine-polish your paint to remove swirl marks, light scratches, and water spots. This step restores clarity and depth to your paint before the sealant is applied, locking in a flawless finish.",
  },
  {
    title: "Premium Sealant Application",
    description:
      "A high-quality paint sealant is applied to protect your corrected paint. It creates a durable barrier against UV rays, water spots, and contaminants, keeping your vehicle looking sharp for months.",
  },
  {
    title: "Wheel & Tire Detail",
    description:
      "Wheels are cleaned inside and out, brake dust is removed, and tires are dressed for a deep, satin finish. Wheel wells are degreased and cleaned. Your wheels will look like new.",
  },
  {
    title: "Engine Bay Cleaning",
    description:
      "We degrease and detail your engine bay to remove grime, dust, and buildup. A clean engine bay makes maintenance easier, helps spot leaks early, and shows you take serious care of your vehicle.",
  },
];

const process = [
  "We begin with a thorough pre-wash and rinse to remove loose dirt and debris. Then a full hand wash using the two-bucket method to prevent swirl marks.",
  "The paint is decontaminated with a clay bar treatment to remove bonded contaminants, followed by an inspection under specialty lighting to assess paint condition.",
  "A single-stage machine polish is performed to correct swirl marks, light scratches, and oxidation. We work panel by panel to ensure consistent results.",
  "The interior receives a complete deep clean: vacuuming, extraction, steam cleaning, leather conditioning, and detail work on every surface and crevice.",
  "A premium paint sealant is applied and allowed to cure. Tires are dressed, trim is restored, glass is cleaned inside and out, and a final walkthrough is performed.",
];

const relatedServices = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
];

export default function FullDetail() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        slug="full-detail"
        price="330.00"
        title="Full Detailing Premium"
        subtitle="Our Top-Tier Detail — Inside, Outside, and Everything In Between"
        description="This is the works. Our Full Detailing Premium package covers every inch of your vehicle with the kind of attention most shops don't offer. From a complete interior restoration to paint decontamination, single-stage correction, and premium sealant, this is for owners who want their vehicle looking its absolute best."
        features={features}
        process={process}
        pricing="Starting at $330. Final pricing depends on vehicle size and condition."
        formServiceValue="full"
        relatedServices={relatedServices}
        heroImage={{
          src: "/images/service-interior-exterior.jpg",
          alt: "2019 Ford Mustang GT after a complete full detail service",
        }}
        gallery={[
          {
            src: "/images/service-interior.jpg",
            alt: "Spotless vehicle interior after full interior restoration and conditioning",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_82467032aae94df796e9652734e6608f~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_82467032aae94df796e9652734e6608f~mv2.webp",
            alt: "Exterior paint gleaming after decontamination and single-stage correction",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_7d1c4d12063f407c9b3794d24f74c11a~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_7d1c4d12063f407c9b3794d24f74c11a~mv2.webp",
            alt: "Full detailing experience with premium interior and exterior results",
          },
        ]}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
