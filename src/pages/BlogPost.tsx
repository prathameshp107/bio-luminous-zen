import { useParams, Link, Navigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Clock,
  User,
  Tag,
  Share2,
  BookOpen,
  CheckCircle2,
  Lightbulb,
} from "lucide-react";
import AnimatedSection from "@/components/AnimatedSection";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { getBlogBySlug, getRelatedPosts } from "@/data/blogData";
import { getAuthor, authorColors } from "@/data/blogAuthors";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogBySlug(slug) : undefined;

  if (!post) return <Navigate to="/blog" replace />;

  const relatedPosts = getRelatedPosts(post.slug, 3);

  // Generate table of contents from headings
  const toc = post.content.filter((s) => s.type === "heading" && s.text);

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <PageHero
        title={post.title}
        subtitle={`${post.category} · ${post.readTime} min read · ${post.date}`}
        breadcrumb={`Blog » ${post.title}`}
      />

      {/* ─── Content ─────────────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <FloatingText text={post.category.toUpperCase()} className="top-20" direction={1} />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-[280px_1fr] gap-10">
            {/* Sidebar - Table of Contents */}
            <aside className="order-2 lg:order-1">
              <div className="lg:sticky lg:top-28 space-y-6">
                {/* Author Card */}
                {(() => {
                  const author = post.authorId ? getAuthor(post.authorId) : null;
                  const ac = author ? authorColors[author.color] : "";
                  return (
                    <div className="glass-card p-5 rounded-xl space-y-3">
                      <div className="flex items-center gap-3">
                        <div className={`w-12 h-12 rounded-full flex items-center justify-center text-sm font-bold shrink-0 border ${ac || "bg-primary/10 text-primary border-primary/20"}`}>
                          {author ? author.initials : <User className="w-5 h-5" />}
                        </div>
                        <div className="min-w-0">
                          <p className="text-sm font-semibold text-foreground">
                            {author?.name || post.authorId}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {author?.role || "Cryst Bio Solutions"}
                          </p>
                        </div>
                      </div>
                      {author?.bio && (
                        <p className="text-xs text-muted-foreground leading-relaxed pt-2 border-t border-border/40">
                          {author.bio}
                        </p>
                      )}
                    </div>
                  );
                })()}

                {/* Meta Card */}
                <div className="glass-card p-5 rounded-xl space-y-3">
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 text-primary" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 text-primary" />
                    <span>{post.readTime} min read</span>
                  </div>
                  <div className="flex items-center gap-3 text-sm text-muted-foreground">
                    <BookOpen className="w-4 h-4 text-primary" />
                    <span>{post.content.length} sections</span>
                  </div>
                </div>

                {/* Table of Contents */}
                <div className="glass-card p-5 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-4">
                    In this article
                  </h4>
                  <nav className="space-y-2">
                    {toc.map((heading, i) => (
                      <a
                        key={i}
                        href={`#section-${i}`}
                        className="block text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1 border-l-2 border-transparent hover:border-primary pl-3"
                      >
                        {heading.text}
                      </a>
                    ))}
                  </nav>
                </div>

                {/* Tags */}
                <div className="glass-card p-5 rounded-xl">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3 flex items-center gap-2">
                    <Tag className="w-3 h-3" />
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2.5 py-1 rounded-full bg-primary/5 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Share */}
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                  }}
                  className="w-full glass-card p-4 rounded-xl flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-primary hover:border-primary/30 transition-all duration-300"
                >
                  <Share2 className="w-4 h-4" />
                  Copy Link
                </button>
              </div>
            </aside>

            {/* Main Content */}
            <article className="order-1 lg:order-2">
              <AnimatedSection>
                <div className="glass-card p-8 md:p-12 rounded-2xl">
                  {/* Category Badge */}
                  <div className="flex items-center gap-3 mb-6">
                    <Badge className="bg-primary/10 text-primary border-primary/20">
                      {post.category}
                    </Badge>
                  </div>

                  {/* Featured Image */}
                  {post.image && (
                    <div className="relative -mx-8 md:-mx-12 -mt-8 md:-mt-12 mb-8 overflow-hidden">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-64 md:h-80 object-cover"
                        loading="eager"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
                    </div>
                  )}

                  {/* Content */}
                  <div>
                    {post.content.map((section, i) => {
                      if (section.type === "heading") {
                        return (
                          <div key={i} id={`section-${i}`}>
                            {section.level === 2 ? (
                              <h2 className="text-2xl md:text-3xl font-bold font-display text-foreground mt-12 mb-5 scroll-mt-28">
                                {section.text}
                              </h2>
                            ) : (
                              <h3 className="text-xl font-bold font-display text-foreground mt-8 mb-4 scroll-mt-28">
                                {section.text}
                              </h3>
                            )}
                          </div>
                        );
                      }

                      if (section.type === "list") {
                        return (
                          <ul
                            key={i}
                            className="space-y-3 my-6"
                          >
                            {section.items?.map((item, j) => (
                              <li
                                key={j}
                                className="flex items-start gap-3 text-muted-foreground leading-relaxed"
                              >
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-1" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        );
                      }

                      if (section.type === "callout") {
                        return (
                          <div
                            key={i}
                            className="my-8 p-6 rounded-2xl bg-primary/5 border border-primary/20 relative overflow-hidden"
                          >
                            <div className="absolute top-0 left-0 w-1 h-full bg-primary" />
                            <div className="flex items-start gap-4">
                              <div className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                                <Lightbulb className="w-5 h-5 text-primary" />
                              </div>
                              <div>
                                <p className="text-sm font-bold text-primary mb-1 uppercase tracking-wider">
                                  Expert Insight
                                </p>
                                <p className="text-sm text-foreground/80 leading-relaxed">
                                  {section.text}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      }

                      return (
                        <p
                          key={i}
                          className="text-muted-foreground leading-relaxed text-base mb-5"
                        >
                          {section.text}
                        </p>
                      );
                    })}
                  </div>

                  {/* Tags Bottom */}
                  <div className="mt-10 pt-8 border-t border-border/40">
                    <div className="flex flex-wrap items-center gap-2">
                      <Tag className="w-4 h-4 text-muted-foreground" />
                      {post.tags.map((t) => (
                        <span
                          key={t}
                          className="text-xs px-3 py-1.5 rounded-full bg-primary/5 text-primary border border-primary/20"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>

              {/* Navigation */}
              <div className="flex justify-between mt-8">
                <Link
                  to="/blog"
                  className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                >
                  <ArrowLeft className="w-4 h-4" /> Back to Blog
                </Link>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* ─── Related Posts ───────────────────────────────────── */}
      {relatedPosts.length > 0 && (
        <section className="section-padding bg-card/30">
          <div className="container mx-auto px-4">
            <SectionHeader
              label="Continue Reading"
              title={
                <RevealText>
                  <span>Related Articles</span>
                </RevealText>
              }
              description="Explore more insights from our scientific team."
            />

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp, i) => (
                <AnimatedSection key={rp.slug} delay={i * 0.05}>
                  <Link
                    to={`/blog/${rp.slug}`}
                    className="group block glass-card p-6 rounded-2xl hover-glow h-full transition-all duration-500"
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Badge
                        variant="outline"
                        className="text-[10px] uppercase border-primary/20 text-primary"
                      >
                        {rp.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">
                        {rp.readTime} min
                      </span>
                    </div>
                    <h3 className="text-base font-bold font-display text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                      {rp.title}
                    </h3>
                    <p className="text-sm text-muted-foreground line-clamp-2">
                      {rp.excerpt}
                    </p>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Need Expert Guidance?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our team of experienced toxicologists and study directors can
                help you design the right study for your research objectives.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="font-semibold gap-2 shadow-lg shadow-primary/20"
                  >
                    Contact Us <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/services">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold gap-2"
                  >
                    Explore Services <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default BlogPost;
