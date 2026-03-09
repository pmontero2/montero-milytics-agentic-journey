import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { SEO } from "@/components/SEO";
import { useQuery } from "@tanstack/react-query";
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import { fetchPostsList, isBlogApiConfigured } from "@/lib/blog-api";
import { useScrollToTop } from "@/hooks/use-scroll-to-top";
import { format } from "date-fns";
import { es } from "date-fns/locale";
import { AlertCircle, FileText, RefreshCw } from "lucide-react";

const Blog = () => {
  useScrollToTop();

  const {
    data: posts,
    isLoading,
    isError,
    error,
    refetch,
  } = useQuery({
    queryKey: ["blog", "posts"],
    queryFn: fetchPostsList,
    enabled: isBlogApiConfigured(),
  });

  const notConfigured = !isBlogApiConfigured();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO
        title="Blog"
        description="Artículos y reflexiones sobre IA, automatización empresarial y transformación digital."
        canonical="https://www.bmontero.com/blog"
        keywords="blog, IA, automatización, Brian Montero, artículos"
      />
      <Navbar />

      <main className="flex-1 pt-24 pb-16 gradient-primary">
        <div className="container mx-auto px-4 sm:px-6">
          <section className="text-center mb-12 md:mb-16">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
              Blog
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Artículos y reflexiones sobre IA, automatización y transformación digital.
            </p>
          </section>

          {notConfigured && (
            <div className="max-w-md mx-auto text-center py-12 px-4 rounded-2xl bg-white/5 border border-white/10">
              <AlertCircle className="h-12 w-12 text-amber-400 mx-auto mb-4" />
              <p className="text-white/80 mb-2">API del blog no configurada.</p>
              <p className="text-sm text-white/50">
                Configura <code className="text-accent">VITE_BLOG_API_URL</code> en el entorno.
              </p>
            </div>
          )}

          {!notConfigured && isLoading && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {[1, 2, 3].map((i) => (
                <Card
                  key={i}
                  className="bg-zinc-900/20 border-white/5 overflow-hidden"
                >
                  <Skeleton className="aspect-video w-full rounded-none bg-white/5" />
                  <CardHeader>
                    <Skeleton className="h-6 w-3/4 bg-white/10" />
                    <Skeleton className="h-4 w-1/2 mt-2 bg-white/5" />
                  </CardHeader>
                  <CardContent className="pt-0">
                    <Skeleton className="h-4 w-full bg-white/5" />
                    <Skeleton className="h-4 w-full mt-2 bg-white/5" />
                    <Skeleton className="h-4 w-2/3 mt-2 bg-white/5" />
                  </CardContent>
                </Card>
              ))}
            </div>
          )}

          {!notConfigured && isError && (
            <div className="max-w-md mx-auto text-center py-12 px-4 rounded-2xl bg-white/5 border border-white/10">
              <AlertCircle className="h-12 w-12 text-red-400 mx-auto mb-4" />
              <p className="text-white/80 mb-4">
                No se pudieron cargar los posts. {(error as Error)?.message}
              </p>
              <Button
                variant="outline"
                onClick={() => refetch()}
                className="border-white/20 text-white hover:bg-white/10"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Reintentar
              </Button>
            </div>
          )}

          {!notConfigured && !isLoading && !isError && (!posts || posts.length === 0) && (
            <div className="max-w-md mx-auto text-center py-12 px-4 rounded-2xl bg-white/5 border border-white/10">
              <FileText className="h-12 w-12 text-white/40 mx-auto mb-4" />
              <p className="text-white/80">Aún no hay posts publicados.</p>
            </div>
          )}

          {!notConfigured && !isLoading && !isError && posts && posts.length > 0 && (
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
              {posts.map((post) => (
                <Link key={post.slug} to={`/blog/${post.slug}`}>
                  <Card className="h-full bg-zinc-900/20 border-white/5 hover:bg-zinc-900/40 hover:border-accent/20 transition-all duration-300 overflow-hidden group">
                    {post.coverImage ? (
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.coverImage}
                          alt=""
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        />
                      </div>
                    ) : (
                      <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 flex items-center justify-center">
                        <FileText className="h-12 w-12 text-accent/50" />
                      </div>
                    )}
                    <CardHeader className="pb-2">
                      <h2 className="text-lg font-semibold text-white group-hover:text-accent transition-colors line-clamp-2">
                        {post.title}
                      </h2>
                      <p className="text-sm text-white/50">
                        {post.publishedAt
                          ? format(new Date(post.publishedAt), "d MMM yyyy", {
                              locale: es,
                            })
                          : ""}
                        {post.author ? ` · ${post.author}` : ""}
                      </p>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-sm text-white/60 line-clamp-3">
                        {post.excerpt}
                      </p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
