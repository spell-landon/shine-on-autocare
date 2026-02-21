import type { Route } from "./+types/truck-suv-detailing";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";

export const meta: Route.MetaFunction = () => {
  const title =
    "Truck & SUV Detailing Pleasanton & San Antonio TX | Shine On Autocare";
  const description =
    "Specialized detailing for trucks and SUVs. Truck bed cleaning, running board detail, full interior deep clean, and more. Mobile service in Pleasanton and San Antonio, TX.";
  const url = "https://www.shineonautocare.com/services/truck-suv-detailing";

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "truck detailing Pleasanton TX, SUV detailing San Antonio, truck bed cleaning, running board detail, large vehicle detailing, mobile truck detailing, truck wash near me, SUV detail South Texas",
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
    title: "Truck Bed Cleaning",
    description:
      "We clean out the bed completely, removing dirt, mud, leaves, and any debris that has built up. Whether you have a spray-in liner, drop-in liner, or bare bed, we treat it properly and leave it looking clean and well-maintained.",
  },
  {
    title: "Running Board Detail",
    description:
      "Running boards and side steps collect mud, salt, and road grime faster than any other part of the vehicle. We scrub them down, remove buildup from textured surfaces, and dress them so they look and grip like they should.",
  },
  {
    title: "Full Interior Deep Clean",
    description:
      "Trucks and SUVs see heavy use. Muddy boots, dog hair, kid messes, and work gear take a toll on the cabin. We deep clean every surface, shampoo the seats and carpets, and condition any leather or vinyl so the interior feels fresh again.",
  },
  {
    title: "Wheel Well and Undercarriage",
    description:
      "Wheel wells and the undercarriage collect mud, salt, and road debris that can cause rust and corrosion over time. We clean them out thoroughly and apply protectant to help keep things in good shape underneath.",
  },
  {
    title: "Exterior Wash and Wax",
    description:
      "Larger vehicles have more surface area, and we give every square inch the same attention. A full hand wash, decontamination, and wax application leaves your truck or SUV with a deep, protected shine from the roof down to the rocker panels.",
  },
  {
    title: "Tire Dressing and Chrome Polish",
    description:
      "We dress your tires with UV-protectant for a clean, natural finish and polish any chrome bumpers, grilles, exhaust tips, or accessories so they shine like they should. It ties the whole look together.",
  },
];

const process = [
  "We start by cleaning out the truck bed, wheel wells, and undercarriage to remove built-up mud, debris, and road grime before moving on to the rest of the vehicle.",
  "The exterior gets a full hand wash, clay bar decontamination, and wax application. Running boards, rocker panels, and all trim pieces get individual attention.",
  "Inside, we vacuum everything and deep clean the seats, carpets, and mats. Leather and vinyl surfaces are cleaned and conditioned, and all hard surfaces are wiped down and dressed.",
  "Tires are dressed, chrome is polished, and we do a final walk-around to make sure every inch of your truck or SUV looks its best.",
];

const relatedServices = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/rv-motorcycle", label: "RV & Motorcycle Detailing" },
];

export default function TruckSuvDetailing() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        title="Truck & SUV Detailing"
        subtitle="Specialized Care for Your Larger Vehicles"
        description="Trucks and SUVs need more than a standard detail. They are bigger, they work harder, and they get dirtier. Our truck and SUV detailing is built to handle everything from a muddy ranch truck to a family Suburban. We clean the bed, scrub the running boards, deep clean the interior, and make the exterior shine. If your truck or SUV has been through it, we will bring it back."
        features={features}
        process={process}
        pricing="Pricing based on vehicle size and services selected. Contact us for your custom quote."
        formServiceValue="custom"
        relatedServices={relatedServices}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
