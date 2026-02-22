import type { Route } from "./+types/exterior-detailing";
import { ServicePage } from "~/components/service-page";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";

export const meta: Route.MetaFunction = () => {
  const title =
    "Exterior Detailing Pleasanton & San Antonio TX | Shine On Autocare";
  const description =
    "Professional exterior detailing including hand wash, clay bar, machine polish, and premium wax protection. Mobile service in Pleasanton and San Antonio, TX.";
  const url = `${SITE_URL}/services/exterior-detailing`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "exterior detailing Pleasanton TX, exterior detailing San Antonio, hand car wash, clay bar treatment, car polish, wax protection, mobile exterior detailing, auto exterior detail near me",
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
    title: "Hand Wash and Dry",
    description:
      "We wash your vehicle by hand using the two-bucket method and premium pH-neutral soap. No automated brushes or harsh chemicals. Every panel is carefully washed and dried with soft microfiber towels to avoid scratching.",
  },
  {
    title: "Clay Bar Decontamination",
    description:
      "After washing, we use a clay bar to pull out bonded contaminants like industrial fallout, brake dust, and tree sap that washing alone cannot remove. This leaves the paint perfectly smooth and ready for polishing.",
  },
  {
    title: "Machine Polish",
    description:
      "A machine polish brings out the true depth of your paint by removing light swirl marks, water spots, and minor surface imperfections. This step is what takes your finish from clean to like-new.",
  },
  {
    title: "Premium Wax Protection",
    description:
      "We apply a high-quality carnauba or synthetic wax that adds a rich, warm shine while protecting your paint from UV rays, rain, and road contaminants. The protection typically lasts 2 to 3 months depending on conditions.",
  },
  {
    title: "Tire and Wheel Detail",
    description:
      "Your wheels are degreased and scrubbed to remove brake dust and road grime. Tires are dressed with a UV-protectant that gives them a clean, rich look without being overly glossy.",
  },
  {
    title: "Trim and Plastic Restoration",
    description:
      "Faded exterior trim, plastic moldings, and rubber seals are treated with a restorer that brings back the deep black color and protects against further UV damage. It is a small detail that makes a big difference.",
  },
];

const process = [
  "We start with a thorough pre-rinse to loosen dirt, then hand wash every panel using the two-bucket method and pH-neutral soap to prevent scratching.",
  "The paint is decontaminated with a clay bar to remove embedded particles and bonded fallout, leaving the surface perfectly smooth.",
  "We machine polish the paint to remove light swirls and bring out a deep, glossy finish that you can see your reflection in.",
  "A premium wax or sealant is applied for lasting protection against the elements, giving your paint a warm, rich shine.",
  "Wheels, tires, and exterior trim are cleaned, dressed, and restored to complete the look from top to bottom.",
];

const relatedServices = [
  { href: "/services/ceramic-coating", label: "Ceramic Coating" },
  { href: "/services/interior-detailing", label: "Interior Detailing" },
  { href: "/services/paint-correction", label: "Paint Correction" },
  { href: "/services/truck-suv-detailing", label: "Truck & SUV Detailing" },
  { href: "/services/rv-motorcycle", label: "RV & Motorcycle Detailing" },
];

export default function ExteriorDetailing() {
  return (
    <>
      <Header />
      <main id="main-content">
      <ServicePage
        slug="exterior-detailing"
        price="130.00"
        title="Exterior Detailing"
        subtitle="Make Your Paint Look Showroom New"
        description="A drive-through car wash is not going to cut it. Our exterior detailing is a full, hands-on process that cleans, decontaminates, polishes, and protects every surface of your vehicle's exterior. We bring out the original depth and gloss of your paint and leave your wheels, tires, and trim looking their best."
        features={features}
        process={process}
        pricing="Starting at $185. Price varies by vehicle size and condition."
        formServiceValue="exterior"
        relatedServices={relatedServices}
        heroImage={{
          src: "/images/service-interior-exterior.jpg",
          alt: "2019 Ford Mustang GT gleaming after a full exterior detail",
        }}
        gallery={[
          {
            src: "https://static.wixstatic.com/media/da9245_dab9149ca8bc42ccb2aaee7c4d47a9c1~mv2.jpg/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_dab9149ca8bc42ccb2aaee7c4d47a9c1~mv2.webp",
            alt: "Vehicle exterior with a deep glossy shine after hand wash and wax",
          },
          {
            src: "https://static.wixstatic.com/media/da9245_82467032aae94df796e9652734e6608f~mv2.png/v1/fill/w_600,h_400,fp_0.50_0.50,q_85,enc_avif,quality_auto/da9245_82467032aae94df796e9652734e6608f~mv2.webp",
            alt: "Professional auto detail work on vehicle exterior paint",
          },
          {
            src: "/images/service-full-detail.jpg",
            alt: "2023 Ford F-250 with a clean exterior finish after professional detailing",
          },
        ]}
      />
      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
