import type { Route } from "./+types/odor-removal";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "Odor Removal | Smoke, Pet & Mildew | Shine On Autocare | Pleasanton & San Antonio TX";
  const description =
    "Professional odor removal for smoke, pets, mildew, and more. We eliminate odors at the source using ozone treatment and deep sanitization. Mobile service in Pleasanton and San Antonio, TX.";
  const url = `${SITE_URL}/services/odor-removal`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "odor removal car, smoke smell removal vehicle, pet odor removal auto, car odor elimination, ozone treatment car, mildew removal vehicle, mobile odor removal Pleasanton TX, car smell removal San Antonio",
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
    title: "Smoke Odor Elimination",
    description:
      "Cigarette and cigar smoke gets into everything: seats, headliner, carpet, vents. We use professional-grade treatments to break down smoke particles and eliminate the smell completely, not just cover it up with air freshener.",
  },
  {
    title: "Pet Odor Removal",
    description:
      "Dogs, cats, and other pets leave behind odors that regular cleaning can't touch. We deep clean and treat all surfaces where pet dander, saliva, and urine have penetrated to restore a fresh cabin.",
  },
  {
    title: "Mildew & Mold Treatment",
    description:
      "Water leaks, spills, and Texas humidity can cause mold and mildew to grow in your carpet, under seats, and in your HVAC system. We locate the source, clean it thoroughly, and treat the area to prevent regrowth.",
  },
  {
    title: "Ozone Treatment",
    description:
      "Our ozone generator produces activated oxygen that penetrates every surface in your vehicle's cabin. It destroys odor-causing bacteria and molecules at the molecular level, leaving your vehicle smelling truly clean.",
  },
  {
    title: "Deep Interior Sanitization",
    description:
      "We steam clean and sanitize all fabric, leather, and hard surfaces. This removes the organic matter that causes lingering odors and also eliminates bacteria and allergens for a healthier cabin.",
  },
  {
    title: "HVAC & Vent Cleaning",
    description:
      "Odors trapped in your vehicle's ventilation system recirculate every time you turn on the AC or heat. We treat the evaporator and ductwork to eliminate smells at the source so fresh air stays fresh.",
  },
];

const process = [
  "We start with a thorough inspection to identify the source and severity of the odor. Different odors require different treatment approaches, so this step is critical.",
  "All fabric surfaces, including seats, carpet, headliner, and floor mats, are deep cleaned and extracted to remove embedded organic matter causing the smell.",
  "Hard surfaces like the dashboard, console, and door panels are cleaned and sanitized. Leather surfaces are treated with products that neutralize odors without damaging the material.",
  "An ozone treatment is run for the appropriate duration based on odor severity. The vehicle is sealed during this process to allow the ozone to penetrate every surface.",
  "After treatment, the vehicle is ventilated and inspected to confirm the odor is fully eliminated. We walk you through any follow-up care recommendations.",
];

const relatedServices = [
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
];

export default function OdorRemoval() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        slug="odor-removal"
        title="Odor Removal"
        subtitle="Professional Odor Elimination for Smoke, Pets & More"
        description="Stubborn smells don't stand a chance. Whether it's cigarette smoke that's been building up for years, pet odors that won't go away, or mildew from a water leak, we eliminate odors at the source using ozone treatment and deep sanitization. No masking, no temporary fixes — just a genuinely fresh cabin."
        features={features}
        process={process}
        pricing="Pricing varies based on odor type and severity. Contact us for a free assessment and quote."
        formServiceValue="custom"
        relatedServices={relatedServices}
        heroImage={{
          src: "/images/service-odor-removal.jpg",
          alt: "Professional odor removal treatment for vehicle interiors",
        }}
        gallery={[
          {
            src: "/images/service-interior.jpg",
            alt: "Clean Jaguar interior after odor elimination and deep sanitization",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_28fa26aecb0643dcb26d8e2bb05220b3~mv2.jpg/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_28fa26aecb0643dcb26d8e2bb05220b3~mv2.webp",
            alt: "Vehicle cabin restored to a fresh and odor-free condition",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_497c408217c846bc9c858e14869b7c21~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_497c408217c846bc9c858e14869b7c21~mv2.webp",
            alt: "Interior detail after smoke and pet odor removal treatment",
          },
        ]}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
