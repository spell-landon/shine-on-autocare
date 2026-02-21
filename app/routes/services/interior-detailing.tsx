import type { Route } from "./+types/interior-detailing";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";

export const meta: Route.MetaFunction = () => {
  const title =
    "Interior Detailing Pleasanton & San Antonio TX | Shine On Autocare";
  const description =
    "Professional interior detailing that deep cleans every surface inside your vehicle. Seat shampooing, leather conditioning, odor elimination, and more. Mobile service in Pleasanton and San Antonio, TX.";
  const url = "https://www.shineonautocare.com/services/interior-detailing";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "interior detailing Pleasanton TX, interior detailing San Antonio, car interior cleaning, seat shampooing, leather conditioning, odor removal, mobile interior detailing, auto interior detail near me",
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
    title: "Full Vacuum and Steam Clean",
    description:
      "Every inch of your interior gets vacuumed, from the seats and floor mats to the trunk and hard-to-reach crevices. We follow up with steam cleaning to break down grime and kill bacteria hiding in the fabric and surfaces.",
  },
  {
    title: "Seat Shampooing and Extraction",
    description:
      "Fabric and cloth seats get a deep shampoo with hot water extraction to pull out stains, dirt, and allergens. This process leaves your seats looking and smelling fresh, not just surface-level clean.",
  },
  {
    title: "Leather Cleaning and Conditioning",
    description:
      "Leather seats are cleaned with a pH-balanced solution to remove oils, dirt, and buildup. Then we apply a professional conditioner that restores moisture and prevents cracking or fading over time.",
  },
  {
    title: "Dashboard and Trim Restoration",
    description:
      "Your dashboard, center console, door panels, and all plastic or vinyl trim get cleaned and treated. We use UV-protective products that restore the original look without leaving a greasy or shiny residue.",
  },
  {
    title: "Odor Elimination",
    description:
      "We do not just cover up smells with air freshener. Our process targets odor at the source using steam and specialized treatments that neutralize pet smells, smoke, food odors, and more.",
  },
  {
    title: "Window and Mirror Cleaning",
    description:
      "All interior glass gets cleaned streak-free, including your windshield, side windows, mirrors, and rear glass. Clean glass makes a bigger difference than most people realize, both for looks and visibility.",
  },
];

const process = [
  "We begin by removing all floor mats and loose items, then vacuum the entire interior including seats, carpets, trunk, and every gap and crevice.",
  "Seats are shampooed and extracted (fabric) or cleaned and conditioned (leather). Stains get spot-treated with the right solution for the material.",
  "The dashboard, console, door panels, and all trim surfaces are steam cleaned and dressed with UV-protective product to restore their original finish.",
  "We eliminate odors at the source using steam and targeted odor-neutralizing treatments, not just a cover-up spray.",
  "All interior glass is cleaned streak-free, and we do a final walk-through to make sure everything looks and smells like new.",
];

const relatedServices = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
  { href: "/services/rv-motorcycle", label: "RV & Motorcycle Detailing" },
];

export default function InteriorDetailing() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        title="Interior Detailing"
        subtitle="Deep Clean Every Surface Inside Your Vehicle"
        description="Over time, your vehicle's interior collects dust, crumbs, spills, pet hair, and odors that regular cleaning just can not reach. Our interior detailing goes beyond a basic vacuum. We deep clean every surface, condition your leather, shampoo your seats, and eliminate odors so your cabin feels brand new again."
        features={features}
        process={process}
        pricing="Starting at $185. Price varies by vehicle size and condition."
        formServiceValue="interior"
        relatedServices={relatedServices}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
