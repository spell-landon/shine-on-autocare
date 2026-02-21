import { Link, data } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { ArrowRightIcon } from "~/components/icons";
import { getBlogPost, blogPosts } from "~/data/blog-posts";

export const loader = ({ params }: Route.LoaderArgs) => {
  const post = getBlogPost(params.slug);
  if (!post) {
    throw data(null, { status: 404 });
  }
  return { post };
};

export const meta = ({ data }: Route.MetaArgs) => {
  if (!data?.post) return [{ title: "Post Not Found | Shine On Autocare" }];

  const { post } = data;
  const url = `https://www.shineonautocare.com/blog/${post.slug}`;

  return [
    { title: `${post.title} | Shine On Autocare Blog` },
    { name: "description", content: post.excerpt },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:image", content: post.image },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: "Shine On Autocare" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.excerpt },
  ];
};

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  // Get related posts (next 3 posts, excluding current)
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = blogPosts
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  return (
    <>
      <Header />
      <main id="main-content">

      {/* Hero */}
      <section className="relative pt-20 sm:pt-24 bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-gray-400 mb-6">
              <Link to="/" className="hover:text-white transition">
                Home
              </Link>
              <span>/</span>
              <Link to="/blog" className="hover:text-white transition">
                Blog
              </Link>
              <span>/</span>
              <span className="text-gray-300 truncate max-w-[200px]">
                {post.title}
              </span>
            </nav>

            <div className="flex items-center gap-3 text-sm text-gray-400 mb-4">
              <time>{post.date}</time>
              <span className="text-gray-600">|</span>
              <span>{post.readTime}</span>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight tracking-tight">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-500/20 rounded-full flex items-center justify-center text-primary-300 font-bold">
                N
              </div>
              <div>
                <p className="text-white font-medium">{post.author}</p>
                <p className="text-gray-400 text-sm">
                  Shine On Autocare
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" aria-hidden="true" fill="none" className="w-full">
            <path d="M0 60h1440V30C1200 60 240 0 0 30v30z" fill="white" />
          </svg>
        </div>
      </section>

      {/* Featured Image */}
      <section className="bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg -mt-4">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-64 sm:h-80 lg:h-96 object-cover"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          {post.content.length > 0 ? (
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-6"
                >
                  {paragraph}
                </p>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-gray-500 leading-relaxed mb-2">
                {post.excerpt}
              </p>
              <p className="text-sm text-gray-400 mt-6">
                Full article coming soon. Check back for the complete post!
              </p>
            </div>
          )}

          {/* CTA within article */}
          <div className="mt-12 p-6 sm:p-8 bg-gray-50 rounded-2xl border border-gray-100 text-center">
            <h3 className="font-display text-xl sm:text-2xl font-extrabold text-gray-900 tracking-tight">
              Ready to Get Your Vehicle Detailed?
            </h3>
            <p className="mt-2 text-gray-500">
              Professional mobile detailing in Pleasanton &amp; San Antonio, TX.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex items-center justify-center bg-primary-600 hover:bg-primary-700 text-white font-bold px-6 py-3 rounded-xl transition shadow-lg shadow-primary-600/25"
            >
              Get a Free Quote
              <ArrowRightIcon className="ml-2 w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="py-12 sm:py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mb-8">
            More from the Blog
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.slug}
                to={`/blog/${related.slug}`}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-400 mb-3">
                    <time>{related.date}</time>
                    <span className="text-gray-300">|</span>
                    <span>{related.readTime}</span>
                  </div>
                  <h3 className="font-display text-lg font-bold text-gray-900 leading-snug group-hover:text-primary-600 transition">
                    {related.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      </main>
      <Footer />
      <MobileCTABar />
    </>
  );
}
