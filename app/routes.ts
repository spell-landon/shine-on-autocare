import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("about", "routes/about.tsx"),
  route("contact", "routes/contact.tsx"),
  route("reviews", "routes/reviews.tsx"),
  route("faq", "routes/faq.tsx"),
  route("blog", "routes/blog._index.tsx"),
  route("blog/:slug", "routes/blog.$slug.tsx"),
  route("services", "routes/services._index.tsx"),
  route("services/ceramic-coating", "routes/services/ceramic-coating.tsx"),
  route("services/interior-detailing", "routes/services/interior-detailing.tsx"),
  route("services/exterior-detailing", "routes/services/exterior-detailing.tsx"),
  route("services/paint-correction", "routes/services/paint-correction.tsx"),
  route("services/truck-suv-detailing", "routes/services/truck-suv-detailing.tsx"),
  route("services/rv-motorcycle", "routes/services/rv-motorcycle.tsx"),
] satisfies RouteConfig;
