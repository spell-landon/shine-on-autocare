import type { Route } from "./+types/blog._index";
import { Link } from "react-router";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import {
  ArrowRightIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
} from "~/components/icons";
import { blogPosts } from "~/data/blog-posts";
import { SITE_URL, BUSINESS_NAME, SOCIAL_LINKS } from "~/data/constants";
import { WaveDivider } from "~/components/wave-divider";
import { Breadcrumb } from "~/components/breadcrumb";

export const meta: Route.MetaFunction = () => {
  const title = "Blog | Shine On Autocare | Detailing Tips & News";
  const description =
    "Stay up to date with detailing tips, car care advice, and news from Shine On Autocare. Serving Pleasanton, San Antonio, and South Texas.";
  const url = `${SITE_URL}/blog`;

  return [
    { title },
    { name: "description", content: description },
    {
      name: "keywords",
      content:
        "auto detailing blog, car care tips, ceramic coating advice, interior detailing tips, mobile detailing news, Shine On Autocare blog",
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

export default function BlogIndex() {
  const [featured, ...rest] = blogPosts;

  return (
    <>
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section data-hero className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
          <div className="max-w-3xl">
            <Breadcrumb items={[{ label: "Blog" }]} />

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              Detailing Tips, News &amp; More
            </h1>
            <p className="mt-4 text-lg text-gray-300 leading-relaxed max-w-2xl">
              Practical car care advice, behind-the-scenes looks at our work,
              and updates from the Shine On Autocare team.
            </p>
          </div>
        </div>
        <WaveDivider />
      </section>

      {/* Featured Post */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            to={`/blog/${featured.slug}`}
            className="group grid lg:grid-cols-2 gap-6 lg:gap-10 bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <div className="aspect-video lg:aspect-auto lg:min-h-[340px] overflow-hidden">
              <img
                src={featured.image}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="eager"
              />
            </div>
            <div className="p-6 sm:p-8 lg:py-10 flex flex-col justify-center">
              <div className="flex items-center gap-3 text-sm text-gray-500 mb-4">
                <span className="bg-primary-100 text-primary-700 font-semibold text-xs uppercase tracking-wider px-3 py-1 rounded-full">
                  Latest
                </span>
                <time>{featured.date}</time>
                <span className="text-gray-300">|</span>
                <span>{featured.readTime}</span>
              </div>
              <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight group-hover:text-primary-600 transition leading-tight">
                {featured.title}
              </h2>
              <p className="mt-3 text-gray-500 leading-relaxed">
                {featured.excerpt}
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-sm">
                  N
                </div>
                <span className="text-sm font-medium text-gray-700">
                  {featured.author}
                </span>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-8 sm:py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-8 sm:mb-10">
            All Posts
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {rest.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>

                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <time>{post.date}</time>
                    <span className="text-gray-300">|</span>
                    <span>{post.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition">
                    {post.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-500 leading-relaxed line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 flex items-center gap-2">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center text-primary-700 font-bold text-xs">
                      N
                    </div>
                    <span className="text-xs font-medium text-gray-600">
                      {post.author}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 sm:py-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-accent-400 font-semibold text-sm uppercase tracking-wider">
            Stay in the Loop
          </span>
          <h2 className="font-display mt-3 text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Get Detailing Tips in Your Inbox
          </h2>
          <p className="mt-4 text-lg text-gray-300 leading-relaxed">
            Sign up for our newsletter and get car care tips, exclusive offers,
            and new blog posts delivered straight to your email.
          </p>

          <form
            className="mt-8 flex flex-col sm:flex-row gap-3 max-w-lg mx-auto"
            onSubmit={(e) => e.preventDefault()}
          >
            <label htmlFor="newsletter-email" className="sr-only">
              Email address
            </label>
            <input
              type="email"
              id="newsletter-email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 rounded-xl border-0 bg-white/10 text-white placeholder-gray-400 px-5 py-3.5 text-base focus:outline-none focus:ring-2 focus:ring-accent-500"
            />
            <button
              type="submit"
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-3.5 rounded-xl transition whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>

          <p className="mt-4 text-sm text-gray-400">
            No spam, ever. Unsubscribe anytime.
          </p>
        </div>
      </section>

      {/* Social CTA */}
      <section className="py-16 sm:py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Follow Us for More
          </h2>
          <p className="mt-4 text-lg text-gray-500 leading-relaxed">
            See before-and-after photos, detailing tips, special offers, and
            more on our social channels.
          </p>
          <div className="mt-8 flex items-center justify-center gap-4">
            {[
              {
                icon: FacebookIcon,
                href: SOCIAL_LINKS.facebook,
                label: "Facebook",
              },
              {
                icon: InstagramIcon,
                href: SOCIAL_LINKS.instagram,
                label: "Instagram",
              },
              {
                icon: TikTokIcon,
                href: SOCIAL_LINKS.tiktok,
                label: "TikTok",
              },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="w-12 h-12 bg-white border border-gray-200 hover:border-primary-300 hover:shadow-md rounded-xl flex items-center justify-center text-gray-500 hover:text-primary-600 transition"
              >
                <social.icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
            Ready to Get Your Vehicle Detailed?
          </h2>
          <p className="mt-4 text-gray-500">
            From quick interior refreshes to full ceramic coatings, we do it
            all. Get in touch for a free quote.
          </p>
          <div className="mt-6">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-bold px-8 py-4 rounded-xl transition shadow-lg shadow-primary-600/25"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
