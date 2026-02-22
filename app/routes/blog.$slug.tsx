import { Link, data } from "react-router";
import type { Route } from "./+types/blog.$slug";
import { Header } from "~/components/header";
import { Footer } from "~/components/footer";
import { MobileCTABar } from "~/components/mobile-cta-bar";
import { ArrowRightIcon } from "~/components/icons";
import { getBlogPost, blogPosts, type BlogContentBlock } from "~/data/blog-posts";
import { SITE_URL, BUSINESS_NAME } from "~/data/constants";
import { WaveDivider } from "~/components/wave-divider";
import { JsonLd } from "~/components/json-ld";
import { buildArticleSchema } from "~/data/schema";

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
  const url = `${SITE_URL}/blog/${post.slug}`;

  return [
    { title: `${post.title} | Shine On Autocare Blog` },
    { name: "description", content: post.excerpt },
    { property: "og:type", content: "article" },
    { property: "og:url", content: url },
    { property: "og:title", content: post.title },
    { property: "og:description", content: post.excerpt },
    { property: "og:image", content: post.image },
    { property: "og:locale", content: "en_US" },
    { property: "og:site_name", content: BUSINESS_NAME },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: post.title },
    { name: "twitter:description", content: post.excerpt },
  ];
};

function renderContentBlock(block: BlogContentBlock, i: number) {
  switch (block.type) {
    case "heading":
      return block.level === 2 ? (
        <h2
          key={i}
          className="font-display text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight mt-10 mb-4"
        >
          {block.text}
        </h2>
      ) : (
        <h3
          key={i}
          className="font-display text-xl sm:text-2xl font-bold text-gray-900 tracking-tight mt-8 mb-3"
        >
          {block.text}
        </h3>
      );
    case "list":
      return block.ordered ? (
        <ol key={i} className="list-decimal list-inside space-y-2 mb-6 text-gray-600">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed">{item}</li>
          ))}
        </ol>
      ) : (
        <ul key={i} className="list-disc list-inside space-y-2 mb-6 text-gray-600">
          {block.items.map((item, j) => (
            <li key={j} className="leading-relaxed">{item}</li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          key={i}
          className="my-8 p-6 bg-primary-50 border border-primary-100 rounded-2xl"
        >
          <p className="text-primary-900 font-medium leading-relaxed">
            {block.text}
          </p>
        </div>
      );
    case "paragraph":
    default:
      return (
        <p key={i} className="text-gray-600 leading-relaxed mb-6">
          {block.text}
        </p>
      );
  }
}

export default function BlogPost({ loaderData }: Route.ComponentProps) {
  const { post } = loaderData;

  // Get related posts (next 3 posts, excluding current)
  const currentIndex = blogPosts.findIndex((p) => p.slug === post.slug);
  const relatedPosts = blogPosts
    .filter((_, i) => i !== currentIndex)
    .slice(0, 3);

  return (
    <>
      <JsonLd
        data={buildArticleSchema({
          title: post.title,
          description: post.excerpt,
          url: `${SITE_URL}/blog/${post.slug}`,
          image: post.image,
          datePublished: post.date,
          author: post.author,
        })}
      />
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
        <WaveDivider />
      </section>

      {/* Featured Image */}
      <section className="py-8 sm:py-10 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl overflow-hidden shadow-lg">
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
              {post.content.map((block, i) => renderContentBlock(block, i))}
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
