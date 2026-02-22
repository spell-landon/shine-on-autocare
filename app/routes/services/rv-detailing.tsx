import type { Route } from "./+types/rv-detailing";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "RV & Travel Trailer Detailing | Shine On Autocare | Pleasanton & San Antonio TX";
  const description =
    "Professional RV and travel trailer detailing. Full exterior wash, roof treatment, interior deep clean, and protective coatings. Mobile service in Pleasanton and San Antonio, TX.";
  const url = `${SITE_URL}/services/rv-detailing`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "RV detailing Pleasanton TX, RV detailing San Antonio, travel trailer detailing, motorhome wash, RV roof treatment, RV exterior cleaning, mobile RV detailing, RV detail near me, fifth wheel detailing",
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
    title: "Full Exterior Wash",
    description:
      "RVs and trailers collect road film, bugs, and oxidation fast. We hand wash the entire exterior from top to bottom using products safe for fiberglass, aluminum, and painted surfaces. No automated brushes that can damage your finish.",
  },
  {
    title: "Roof Cleaning & Treatment",
    description:
      "The roof is the most neglected and most exposed part of any RV. We clean off mold, mildew, black streaks, and debris, then apply a protectant that helps prevent leaks and extends the life of your roof membrane.",
  },
  {
    title: "Interior Deep Clean",
    description:
      "RV interiors take a beating from road trips, cooking, and daily living. We deep clean all surfaces including upholstery, carpets, countertops, cabinets, and bathroom areas to make it feel like new inside.",
  },
  {
    title: "Black Streak Removal",
    description:
      "Those ugly dark streaks running down the sides of your RV are caused by oxidation and runoff from rubber seals. We safely remove them without damaging your gel coat or painted surface, restoring a clean, uniform appearance.",
  },
  {
    title: "Awning Cleaning",
    description:
      "Your awning collects mold, mildew, tree sap, and dirt over time. We clean both sides thoroughly and treat the fabric to help prevent future buildup and staining so it's ready for your next trip.",
  },
  {
    title: "Protective Coating",
    description:
      "After cleaning, we apply a UV-protective sealant or wax to your RV's exterior. This guards against sun damage, oxidation, and water spots, keeping your rig looking cleaner longer between washes.",
  },
];

const process = [
  "We rinse the entire exterior from top to bottom to remove loose dirt, then hand wash each section with products appropriate for your RV's surface material — fiberglass, aluminum, or painted steel.",
  "The roof is cleaned separately with a dedicated roof cleaner. We remove mold, mildew, and black streaks, then inspect seals and seams while we're up there.",
  "Black streaks and oxidation on the sidewalls are treated and removed. The exterior is clay barred if needed to remove embedded contaminants.",
  "The interior gets a full deep clean: vacuuming, surface cleaning, upholstery treatment, and sanitization of the kitchen and bathroom areas.",
  "A protective sealant or wax is applied to the exterior, tires are dressed, and we do a final walkthrough to make sure everything meets our standards.",
];

const relatedServices = [
  { href: "/services/motorcycle-detailing", label: "Motorcycle Detailing" },
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
];

export default function RvDetailing() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        slug="rv-detailing"
        title="RV & Travel Trailer Detailing"
        subtitle="Professional Care for Your Home on Wheels"
        description="Your RV or travel trailer is built for adventure, and it should look the part. Whether you're prepping for a road trip or cleaning up after one, we handle everything from roof to wheels with the right products for every surface. Our mobile service means we come to you — no need to haul your rig to a shop."
        features={features}
        process={process}
        pricing="Pricing varies by RV size and condition. Contact us for a personalized quote."
        formServiceValue="custom"
        relatedServices={relatedServices}
        heroImage={{
          src: "/images/about-van.jpg",
          alt: "Shine On Autocare mobile van equipped for RV and travel trailer detailing",
        }}
        gallery={[
          {
            src: "https://static.wixstatic.com/media/da9245_87ef88e773fe4360b6f51d45575778cb~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_87ef88e773fe4360b6f51d45575778cb~mv2.webp",
            alt: "Mobile detailing setup ready for RV exterior wash and treatment",
          },
          {
            src: "/images/about-team.jpg",
            alt: "Shine On Autocare team performing a detailed RV cleaning",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_b697eafca1f64c44937791682972702d~mv2.jpg/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_b697eafca1f64c44937791682972702d~mv2.webp",
            alt: "Team at work on a large vehicle detail in South Texas",
          },
        ]}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
