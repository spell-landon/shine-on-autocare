import type { Route } from "./+types/paint-correction";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";

export const meta: Route.MetaFunction = () => {
  const title =
    "Paint Correction Pleasanton & San Antonio TX | Shine On Autocare";
  const description =
    "Professional paint correction to remove swirl marks, scratches, and oxidation. Restore your vehicle's original shine. Mobile service in Pleasanton and San Antonio, TX.";
  const url = "https://www.shineonautocare.com/services/paint-correction";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "paint correction Pleasanton TX, paint correction San Antonio, swirl mark removal, scratch removal, oxidation removal, paint restoration, mobile paint correction, auto paint correction near me",
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
    title: "Paint Assessment",
    description:
      "Before we touch a polisher, we inspect your paint under specialty lighting to map out every swirl, scratch, and defect. This lets us build a plan specific to your vehicle rather than using a one-size-fits-all approach.",
  },
  {
    title: "Swirl Mark Removal",
    description:
      "Those spider-web patterns you see in direct sunlight are caused by improper washing and drying. We use multi-stage machine polishing with the right pad and compound combination to safely remove them without thinning your clear coat.",
  },
  {
    title: "Scratch and Scuff Repair",
    description:
      "Light to moderate scratches and scuffs from door dings, keys, and everyday wear get polished down and blended in. If a scratch is too deep for correction, we will be honest about it rather than over-promise.",
  },
  {
    title: "Oxidation Removal",
    description:
      "Sun-damaged, chalky, or faded paint gets revived through careful compounding that strips away the oxidized layer and reveals the good paint underneath. This is especially common on red, black, and white vehicles in the Texas sun.",
  },
  {
    title: "Color Depth Restoration",
    description:
      "After correction, your paint's true color comes back to life. Blacks look deeper, reds look richer, and whites look crisp and clean. The difference between before and after is dramatic, and you will notice it right away.",
  },
  {
    title: "Sealant Application",
    description:
      "Once the paint is corrected, we lock in the results with a high-quality sealant that protects against UV damage and contamination. This keeps your freshly corrected paint looking great for months to come.",
  },
];

const process = [
  "We wash and decontaminate the vehicle with a clay bar to create a perfectly clean surface before any polishing begins.",
  "Under specialty lighting, we assess the paint condition and identify every swirl, scratch, and area of oxidation so we can plan the correction process.",
  "Using a dual-action or rotary polisher with the appropriate compound and pad, we work through each panel methodically to remove defects while preserving clear coat thickness.",
  "A finishing polish refines the surface to a mirror-like gloss, and we inspect under lights again to confirm all defects have been addressed.",
  "We apply a protective sealant to lock in the corrected finish and provide lasting defense against UV rays and environmental contaminants.",
];

const relatedServices = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
  { href: "/services/rv-motorcycle", label: "RV & Motorcycle Detailing" },
];

export default function PaintCorrection() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        title="Paint Correction"
        subtitle="Remove Swirls, Scratches, and Oxidation"
        description="If your paint is covered in swirl marks, fine scratches, or has started to look dull and faded, paint correction is what you need. This is not a quick polish. It is a careful, multi-step process that removes defects from your clear coat and restores the true depth and clarity of your paint. The results speak for themselves."
        features={features}
        process={process}
        pricing="Pricing depends on vehicle size and paint condition. Contact us for a custom quote."
        formServiceValue="paint-correction"
        relatedServices={relatedServices}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
