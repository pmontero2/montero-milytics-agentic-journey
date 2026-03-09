import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { Link, useParams, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPostBySlug, isBlogApiConfigured } from "@/lib/blog-api";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { AlertCircle, ArrowLeft, FileText } from "lucide-react";

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

  const notConfigured = !isBlogApiConfigured();
  const notFound = isFetched && !isLoading && !post && !isError;

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
      {post && (
        <SEO
          title={post.title}
          description={post.excerpt}
          canonical={`https://www.bmontero.com/blog/${post.slug}`}
          keywords={post.title}
        />
      )}
      {!post && !notFound && (
        <SEO title="Blog" canonical="https://www.bmontero.com/blog" />
      )}
      <Navbar />

      <main className="flex-1 pt-24 pb-16 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6 max-w-3xl">
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

          {post && !isLoading && (
            <article>
              <header className="mb-8">
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 leading-tight">
                  {post.title}
                </h1>
                <p className="text-white/50 text-sm">
                  {post.publishedAt
                    ? format(new Date(post.publishedAt), "d MMMM yyyy", {
                        locale: es,
                      })
                    : ""}
                  {post.author ? ` · ${post.author}` : ""}
                </p>
              </header>
              {post.coverImage && (
                <div className="rounded-xl overflow-hidden mb-8 border border-white/10">
                  <img
                    src={post.coverImage}
                    alt=""
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
              <div
                className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-white/80 prose-a:text-accent prose-strong:text-white prose-blockquote:border-accent prose-blockquote:text-white/70"
                dangerouslySetInnerHTML={{ __html: post.body }}
              />
            </article>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BlogPost;
