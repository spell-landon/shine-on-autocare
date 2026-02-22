import type { Route } from "./+types/rv-motorcycle";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "RV & Motorcycle Detailing Pleasanton & San Antonio TX | Shine On Autocare";
  const description =
    "Expert detailing for RVs and motorcycles. Full exterior wash, roof treatment, chrome polish, and protective coatings. Mobile service in Pleasanton and San Antonio, TX.";
  const url = `${SITE_URL}/services/rv-motorcycle`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "RV detailing Pleasanton TX, motorcycle detailing San Antonio, RV wash, RV roof treatment, motorcycle chrome polish, recreational vehicle detailing, mobile RV detailing, motorcycle detail near me",
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
    title: "Full RV Exterior Wash",
    description:
      "RVs pick up road film, bugs, and oxidation like nothing else. We hand wash the entire exterior from top to bottom using products safe for fiberglass, aluminum, and painted surfaces. No automated brushes, just careful, thorough cleaning.",
  },
  {
    title: "RV Roof Treatment",
    description:
      "The roof is one of the most neglected parts of any RV, and it is also the most exposed. We clean off mold, mildew, and debris, then apply a protectant that helps prevent leaks and extends the life of your roof membrane.",
  },
  {
    title: "Motorcycle Full Detail",
    description:
      "We detail motorcycles with the care they deserve. Every component gets attention, from the tank and fenders to the engine, exhaust, and spokes. We clean, polish, and protect each surface using products made for the specific material.",
  },
  {
    title: "Chrome and Metal Polish",
    description:
      "Chrome exhaust pipes, handlebars, engine covers, and aluminum wheels are polished by hand until they shine. We remove tarnish, water spots, and light corrosion to bring back that mirror-like finish.",
  },
  {
    title: "Vinyl and Leather Care",
    description:
      "RV interiors and motorcycle seats take a beating from sun exposure and regular use. We clean and condition vinyl, leather, and synthetic materials to keep them soft, protected, and looking good for the long haul.",
  },
  {
    title: "Protective Coating Application",
    description:
      "After detailing, we can apply a protective sealant or coating to your RV or motorcycle to guard against UV damage, water spots, and road grime. This keeps your vehicle looking cleaner longer and makes future washes much easier.",
  },
];

const process = [
  "We rinse and hand wash the entire exterior, working section by section with products matched to your vehicle's surface material, whether it is fiberglass, aluminum, or painted steel.",
  "For RVs, the roof is cleaned and treated separately to remove mold, mildew, and buildup. For motorcycles, the engine, exhaust, and mechanical components are degreased and detailed.",
  "Chrome, aluminum, and metal surfaces are polished by hand. Vinyl, leather, and interior surfaces are cleaned and conditioned to restore their original look and feel.",
  "A protective sealant or coating is applied to the exterior to lock in the shine and provide lasting defense against the Texas sun, road debris, and the elements.",
];

const relatedServices = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/exterior-detailing", label: "Exterior Detailing" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
];

export default function RvMotorcycleDetailing() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        slug="rv-motorcycle"
        title="RV & Motorcycle Detailing"
        subtitle="Expert Care for Your Recreational Vehicles"
        description="Your RV and motorcycle are built for good times, and they deserve to look the part. Whether you need your motorhome cleaned up after a long road trip or your bike polished for the weekend, we handle it with the same attention to detail we give every vehicle. We use the right products for each material and surface, so nothing gets damaged in the process."
        features={features}
        process={process}
        pricing="Pricing varies by vehicle type and size. Contact us for a personalized quote."
        formServiceValue="custom"
        relatedServices={relatedServices}
        heroImage={{
          src: "/images/about-van.jpg",
          alt: "Shine On Autocare mobile detailing van ready for RV and motorcycle service",
        }}
        gallery={[
          {
            src: "https://static.wixstatic.com/media/da9245_9f82acb57d764c14a016fe0c9d58f2b4~mv2.jpg/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_9f82acb57d764c14a016fe0c9d58f2b4~mv2.webp",
            alt: "Shine On Autocare mobile van arriving for an RV detailing appointment",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_87ef88e773fe4360b6f51d45575778cb~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_87ef88e773fe4360b6f51d45575778cb~mv2.webp",
            alt: "Mobile detailing setup for RV and motorcycle service in Pleasanton",
          },
          {
            src: "/images/about-garage.jpg",
            alt: "Shine On Autocare workspace equipped for recreational vehicle detailing",
          },
        ]}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
