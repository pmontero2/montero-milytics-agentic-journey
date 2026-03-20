import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPostBySlug, fetchPostsList, isBlogApiConfigured } from "@/lib/blog-api";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { AlertCircle, ArrowLeft, ExternalLink, FileText, Linkedin } from "lucide-react";
import { Children, isValidElement, useMemo } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Helmet } from "react-helmet-async";

const extractTagsAndNormalizeBody = (raw: string) => {
  const extractedLinks = Array.from(
    new Set(
      [...raw.matchAll(/https?:\/\/[^\s)]+/g)]
        .map((m) => m[0]?.trim())
        .filter(Boolean) as string[]
    )
  );

  const extractedTags = Array.from(
    new Set(
      [...raw.matchAll(/(^|\s)#([^\s#]+)/g)]
        .map((m) => m[2]?.trim())
        .filter(Boolean) as string[]
    )
  );

  const normalizedBody = raw
    .replace(/🔗/g, "")
    .replace(/https?:\/\/[^\s)]+/g, "")
    .replace(/(^|\s)#([^\s#]+)/g, "$1")
    .replace(/(https?:\/\/[^\s)]+)/g, "<$1>");

  return {
    normalizedBody: normalizedBody
      .replace(/[ \t]{2,}/g, " ")
      .replace(/\n{3,}/g, "\n\n")
      .trim(),
    extractedTags,
    extractedLinks,
  };
};

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  useScrollToTop();

  const {
    data: post,
    isLoading,
    isError,
    isFetched,
    error,
  } = useQuery({
    queryKey: ["blog", "post", slug],
    queryFn: () => fetchPostBySlug(slug!),
    enabled: isBlogApiConfigured() && !!slug,
  });
  const { data: allPosts = [] } = useQuery({
    queryKey: ["blog", "posts", "sidebar"],
    queryFn: fetchPostsList,
    enabled: isBlogApiConfigured(),
  });

  const notConfigured = !isBlogApiConfigured();
  const notFound = isFetched && !isLoading && !post && !isError;
  const orderedPosts = [...allPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
  const sidebarPosts = orderedPosts.filter((item) => item.slug !== post?.slug);
  const featuredPost = sidebarPosts[0];
  const otherPosts = sidebarPosts.slice(1, 4);
  const normalizedPost = useMemo(() => {
    if (!post) return null;
    const { normalizedBody, extractedTags, extractedLinks } = extractTagsAndNormalizeBody(post.body || "");
    const mergedTags = Array.from(new Set([...(post.tags || []), ...extractedTags]));
    return {
      ...post,
      body: normalizedBody,
      tags: mergedTags,
      links: extractedLinks,
    };
  }, [post]);

  if (notConfigured || !slug) {
    return (
      <div className="min-h-screen flex flex-col">
        <SEO title="Blog" canonical="https://www.bmontero.com/blog" />
        <Navbar />
        <main className="flex-1 pt-24 pb-16 gradient-primary flex items-center justify-center">
          <div className="text-center">
            {notConfigured ? (
              <p className="text-white/80">API del blog no configurada.</p>
            ) : (
              <p className="text-white/80">Post no encontrado.</p>
            )}
            <Button
              variant="outline"
              className="mt-4 border-white/20 text-white hover:bg-white/10"
              onClick={() => navigate("/blog")}
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Volver al blog
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {normalizedPost && (
        <>
          <SEO
            title={normalizedPost.title}
            description={normalizedPost.excerpt}
            canonical={`https://www.bmontero.com/blog/${normalizedPost.slug}`}
            ogImage={normalizedPost.coverImage || undefined}
            keywords={normalizedPost.title}
            type="article"
          />
          <Helmet>
            <script type="application/ld+json">
              {JSON.stringify({
                "@context": "https://schema.org",
                "@type": "Article",
                headline: normalizedPost.title,
                description: normalizedPost.excerpt.slice(0, 160),
                datePublished: normalizedPost.publishedAt,
                dateModified: normalizedPost.publishedAt,
                image: normalizedPost.coverImage
                  ? [normalizedPost.coverImage]
                  : ["https://www.bmontero.com/assets/logo-bmontero-FltwS1tl.png"],
                author: {
                  "@type": "Person",
                  name: normalizedPost.author || "Brian Montero",
                  url: "https://www.bmontero.com",
                },
                publisher: {
                  "@type": "Organization",
                  name: "Brian Montero",
                  logo: {
                    "@type": "ImageObject",
                    url: "https://www.bmontero.com/assets/logo-bmontero-FltwS1tl.png",
                  },
                },
                mainEntityOfPage: {
                  "@type": "WebPage",
                  "@id": `https://www.bmontero.com/blog/${normalizedPost.slug}`,
                },
              }).replace(/</g, "\\u003c")}
            </script>
          </Helmet>
        </>
      )}
      {!post && !notFound && (
        <SEO title="Blog" canonical="https://www.bmontero.com/blog" />
      )}
      <Navbar />

      <main className="flex-1 pt-24 pb-16 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-7xl">
          <Link
            to="/blog"
            className="inline-flex items-center text-sm text-white/60 hover:text-accent transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Volver al blog
          </Link>

          {isLoading && (
            <article>
              <Skeleton className="h-10 w-3/4 mb-4 bg-white/10" />
              <Skeleton className="h-5 w-1/3 mb-8 bg-white/5" />
              <Skeleton className="h-4 w-full mb-2 bg-white/5" />
              <Skeleton className="h-4 w-full mb-2 bg-white/5" />
              <Skeleton className="h-4 w-2/3 bg-white/5" />
            </article>
          )}

          {isError && (
            <div className="text-center py-12 rounded-2xl bg-white/5 border border-white/10">
              <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <p className="text-white/80 mb-4">
                Error al cargar el post. {(error as Error)?.message}
              </p>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigate("/blog")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al blog
              </Button>
            </div>
          )}

          {notFound && (
            <div className="text-center py-12 rounded-2xl bg-white/5 border border-white/10">
              <FileText className="h-12 w-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/80 mb-4">Post no encontrado.</p>
              <Button
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10"
                onClick={() => navigate("/blog")}
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Volver al blog
              </Button>
            </div>
          )}

          {normalizedPost && !isLoading && (
            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,2fr)_minmax(280px,1fr)] gap-8 items-start">
              <article className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-6 sm:p-8 lg:p-10 shadow-2xl">
                <header className="mb-8 border-b border-white/10 pb-6">
                  <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                    {normalizedPost.title}
                  </h1>
                  <p className="text-white/50 text-sm">
                    {normalizedPost.publishedAt
                      ? format(new Date(normalizedPost.publishedAt), "d MMMM yyyy", {
                          locale: es,
                        })
                      : ""}
                    {normalizedPost.author ? ` · ${normalizedPost.author}` : ""}
                  </p>
                </header>
                {normalizedPost.coverImage && (
                  <div className="rounded-xl overflow-hidden mb-8 border border-white/10 shadow-xl">
                    <img
                      src={normalizedPost.coverImage}
                      alt=""
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/85 prose-p:leading-8 prose-li:text-white/85 prose-strong:text-white prose-blockquote:border-accent prose-blockquote:text-white/75 prose-blockquote:bg-white/5 prose-blockquote:rounded-r-lg prose-blockquote:px-4 prose-pre:bg-zinc-900 prose-pre:border prose-pre:border-white/10">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ children, ...props }) => (
                        <a
                          {...props}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Abrir fuente: ${String(children)}`}
                          title={String(children)}
                          className="inline-flex items-center justify-center align-middle rounded-full border border-accent/30 bg-accent/10 p-1.5 text-accent hover:bg-accent/20 hover:border-accent/50 transition-colors"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      ),
                      h2: ({ ...props }) => (
                        <h2
                          {...props}
                          className="mt-10 mb-4 text-2xl font-semibold text-white"
                        />
                      ),
                      h3: ({ ...props }) => (
                        <h3
                          {...props}
                          className="mt-8 mb-3 text-xl font-semibold text-white"
                        />
                      ),
                    p: ({ children, ...props }) => {
                      const meaningfulChildren = Children.toArray(children).filter((child) => {
                        return !(typeof child === "string" && child.trim() === "");
                      });
                      const paragraphHasOnlyLinks =
                        meaningfulChildren.length > 0 &&
                        meaningfulChildren.every(
                          (child) => isValidElement(child) && child.type === "a"
                        );

                      if (paragraphHasOnlyLinks) {
                        return (
                          <p
                            {...props}
                            className="mb-4 flex flex-wrap items-center gap-2 text-white/85"
                          >
                            {children}
                          </p>
                        );
                      }

                      return (
                        <p {...props} className="mb-6 text-white/85 leading-8">
                          {children}
                        </p>
                      );
                    },
                      ul: ({ ...props }) => (
                        <ul {...props} className="my-6 list-disc pl-6 space-y-2" />
                      ),
                      ol: ({ ...props }) => (
                        <ol {...props} className="my-6 list-decimal pl-6 space-y-2" />
                      ),
                      code: ({ ...props }) => (
                        <code
                          {...props}
                          className="rounded bg-white/10 px-1.5 py-0.5 text-[0.9em] text-accent"
                        />
                      ),
                    }}
                  >
                  {normalizedPost.body}
                  </ReactMarkdown>
                </div>
                {normalizedPost.links && normalizedPost.links.length > 0 && (
                  <div className="mt-6 flex flex-wrap items-center gap-2">
                    {normalizedPost.links.map((link) => (
                      <a
                        key={link}
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Abrir fuente: ${link}`}
                        title={link}
                        className="inline-flex items-center justify-center align-middle rounded-full border border-accent/30 bg-accent/10 p-1.5 text-accent hover:bg-accent/20 hover:border-accent/50 transition-colors"
                      >
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ))}
                  </div>
                )}
                {normalizedPost.tags && normalizedPost.tags.length > 0 && (
                  <div className="mt-10 pt-6 border-t border-white/10">
                    <div className="flex flex-wrap gap-2">
                      {normalizedPost.tags.map((tag) => (
                        <span
                          key={tag}
                          className="inline-flex items-center rounded-full border border-accent/30 bg-accent/10 px-3 py-1 text-xs sm:text-sm font-medium text-accent"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>

              <aside className="space-y-4">
                {featuredPost && (
                  <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-5">
                    <p className="text-xs uppercase tracking-wider text-accent/80 mb-3">Siguiente lectura</p>
                    <Link to={`/blog/${featuredPost.slug}`} className="group block">
                      {featuredPost.coverImage && (
                        <div className="mb-3 rounded-lg overflow-hidden border border-white/10">
                          <img
                            src={featuredPost.coverImage}
                            alt={featuredPost.title}
                            className="w-full h-36 object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>
                      )}
                      <h3 className="text-lg font-semibold text-white group-hover:text-accent transition-colors line-clamp-3">
                        {featuredPost.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/60 line-clamp-2">{featuredPost.excerpt}</p>
                      <p className="mt-3 text-xs text-white/40">
                        {featuredPost.publishedAt
                          ? format(new Date(featuredPost.publishedAt), "d MMM yyyy", { locale: es })
                          : ""}
                      </p>
                    </Link>
                  </div>
                )}

                <a
                  href="https://www.linkedin.com/in/bmonterop"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-2xl border border-[#0A66C2]/40 bg-[#0A66C2]/10 p-5 flex items-center justify-between hover:bg-[#0A66C2]/20 transition-colors"
                >
                  <div>
                    <p className="text-xs uppercase tracking-wider text-white/70">Conecta conmigo</p>
                    <p className="text-white font-semibold">LinkedIn</p>
                  </div>
                  <Linkedin className="h-5 w-5 text-[#0A66C2]" />
                </a>

                {otherPosts.length > 0 && (
                  <div className="rounded-2xl border border-white/10 bg-black/30 backdrop-blur-sm p-5">
                    <p className="text-xs uppercase tracking-wider text-white/70 mb-3">Otras noticias</p>
                    <div className="space-y-3">
                      {otherPosts.map((item) => (
                        <Link
                          key={item.slug}
                          to={`/blog/${item.slug}`}
                          className="group block rounded-lg border border-white/10 overflow-hidden"
                        >
                          {item.coverImage ? (
                            <div className="relative h-28">
                              <img
                                src={item.coverImage}
                                alt={item.title}
                                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/20" />
                              <div className="absolute inset-0 p-3 flex flex-col justify-end">
                                <p className="text-sm font-semibold text-white line-clamp-2">
                                  {item.title}
                                </p>
                                <p className="mt-1 text-[11px] text-white/75">
                                  {item.publishedAt
                                    ? format(new Date(item.publishedAt), "d MMM yyyy", { locale: es })
                                    : ""}
                                </p>
                              </div>
                            </div>
                          ) : (
                            <div className="p-3 bg-white/5 hover:bg-white/10 transition-colors">
                              <p className="text-sm font-medium text-white line-clamp-2">{item.title}</p>
                              <p className="mt-1 text-xs text-white/50">
                                {item.publishedAt
                                  ? format(new Date(item.publishedAt), "d MMM yyyy", { locale: es })
                                  : ""}
                              </p>
                            </div>
                          )}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </aside>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
