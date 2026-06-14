import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Search,
  Calendar,
  Clock,
  User,
  Tag,
  BookOpen,
  TrendingUp,
} from "lucide-react";
import { motion } from "framer-motion";
import PageHero from "@/components/PageHero";
import AnimatedSection from "@/components/AnimatedSection";
import SectionHeader from "@/components/SectionHeader";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { blogPosts, blogCategories } from "@/data/blogData";
import { getAuthor, authorColors } from "@/data/blogAuthors";

const categoryIcons: Record<string, string> = {
  "Regulatory Deep-Dives": "📋",
  "Service Guides": "🔬",
  "Animal Model Selection": "🐭",
};

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const [visibleCount, setVisibleCount] = useState(6);

  const featured = useMemo(() => blogPosts.find((p) => p.featured), []);

  const filtered = useMemo(() => {
    let posts = blogPosts;
    if (activeCategory !== "All") {
      posts = posts.filter((p) => p.category === activeCategory);
    }
    if (searchTerm) {
      const q = searchTerm.toLowerCase();
      posts = posts.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      );
    }
    // Exclude featured post from grid if it's being shown
    const featuredSlug = featured?.slug;
    return posts.filter((p) => p.slug !== featuredSlug);
  }, [activeCategory, searchTerm, featured]);

  const visiblePosts = useMemo(
    () => filtered.slice(0, visibleCount),
    [filtered, visibleCount]
  );

  const hasMore = visibleCount < filtered.length;

  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { All: blogPosts.length };
    blogPosts.forEach((p) => {
      counts[p.category] = (counts[p.category] || 0) + 1;
    });
    return counts;
  }, []);

  const allCategories = ["All", ...blogCategories];

  return (
    <div>
      {/* ─── Hero ────────────────────────────────────────────── */}
      <PageHero
        title="Blog & Resources"
        subtitle="Expert insights on preclinical research, regulatory guidelines, animal models, and industry best practices."
        breadcrumb="Blog"
      />

      {/* ─── Featured Post ───────────────────────────────────── */}
      {featured && (
        <section className="relative overflow-hidden">
          <FloatingText text="FEATURED" className="top-10" direction={1} />
          <div className="container mx-auto px-4 relative z-10">
            <AnimatedSection>
              <Link
                to={`/blog/${featured.slug}`}
                className="group block relative overflow-hidden rounded-3xl glass-card hover-glow transition-all duration-500"
              >
                {/* Featured badge */}
                <div className="absolute top-6 left-6 z-20">
                  <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wider shadow-lg">
                    <TrendingUp className="w-3.5 h-3.5" />
                    Featured Article
                  </span>
                </div>

                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Visual side */}
                  <div className="relative h-64 lg:h-full min-h-[300px] overflow-hidden">
                    {featured.image ? (
                      <>
                        <img
                          src={featured.image}
                          alt={featured.title}
                          className="absolute inset-0 w-full h-full object-cover"
                          loading="eager"
                        />
                        <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-background/40 to-transparent" />
                      </>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/5 to-background">
                        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-background/60" />
                        <div className="absolute inset-0 flex items-center justify-center">
                          <div className="text-center">
                            <span className="text-6xl opacity-20 font-bold font-display text-primary">
                              {featured.category === "Regulatory Deep-Dives"
                                ? "OECD"
                                : featured.category === "Service Guides"
                                ? "ISO"
                                : "MODEL"}
                            </span>
                          </div>
                        </div>
                        {/* Decorative dots */}
                        <div
                          className="absolute inset-0 opacity-[0.04]"
                          style={{
                            backgroundImage:
                              "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                            backgroundSize: "30px 30px",
                          }}
                        />
                      </div>
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <span className="text-6xl opacity-20 font-bold font-display text-primary">
                          {featured.category === "Regulatory Deep-Dives"
                            ? "OECD"
                            : featured.category === "Service Guides"
                            ? "ISO"
                            : "MODEL"}
                        </span>
                      </div>
                    </div>
                    {/* Decorative dots */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "radial-gradient(hsl(var(--primary)) 1px, transparent 1px)",
                        backgroundSize: "30px 30px",
                      }}
                    />
                  </div>

                  {/* Content side */}
                  <div className="p-8 md:p-12 flex flex-col justify-center">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <Badge className="bg-primary/10 text-primary border-primary/20 hover:bg-primary/20">
                        {featured.category}
                      </Badge>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {featured.readTime} min read
                      </span>
                      <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <Calendar className="w-3 h-3" />
                        {featured.date}
                      </span>
                    </div>

                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold font-display text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {featured.title}
                    </h2>

                    <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3">
                      {featured.excerpt}
                    </p>

                    {(() => {
                      const author = featured.authorId ? getAuthor(featured.authorId) : null;
                      const ac = author ? authorColors[author.color] : "";
                      return (
                        <div className="flex items-center gap-3 mb-6">
                          <div className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold shrink-0 border ${ac || "bg-primary/10 text-primary border-primary/20"}`}>
                            {author ? author.initials : <User className="w-4 h-4" />}
                          </div>
                          <div>
                            <p className="text-sm font-medium text-foreground">
                              {author?.name || featured.authorId}
                            </p>
                            <p className="text-xs text-muted-foreground">
                              {author?.role || "Cryst Bio Solutions"}
                            </p>
                          </div>
                        </div>
                      );
                    })()}

                    <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                      Read Article <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* ─── Search & Filters ────────────────────────────────── */}
      <section className="section-padding relative overflow-hidden">
        <FloatingText text="ARTICLES" className="top-1/3" direction={-1} />
        <div className="container mx-auto px-4 relative z-10">
          <SectionHeader
            label="Browse Articles"
            title={
              <RevealText>
                <span>Latest Insights & Resources</span>
              </RevealText>
            }
            description="Expert-written articles on preclinical research, regulatory compliance, and laboratory best practices."
          />

          {/* Search */}
          <div className="max-w-xl mx-auto mb-10 relative">
            <Input
              type="text"
              placeholder="Search articles by title, topic, or keyword..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 rounded-xl border-border/60 focus:border-primary/40"
            />
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {allCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 border ${
                  activeCategory === cat
                    ? "bg-primary text-primary-foreground border-primary shadow-lg shadow-primary/20"
                    : "bg-card text-muted-foreground border-border/60 hover:border-primary/40 hover:text-foreground hover:bg-card/80"
                }`}
              >
                {cat !== "All" && <span>{categoryIcons[cat]}</span>}
                {cat}
                <span
                  className={`text-xs px-1.5 py-0.5 rounded-full ${
                    activeCategory === cat
                      ? "bg-primary-foreground/20 text-primary-foreground"
                      : "bg-muted text-muted-foreground"
                  }`}
                >
                  {categoryCounts[cat] || 0}
                </span>
              </button>
            ))}
          </div>

          {/* Blog Grid */}
          {visiblePosts.length === 0 ? (
            <div className="text-center py-20">
              <BookOpen className="mx-auto mb-4 w-12 h-12 text-muted-foreground" />
              <h3 className="text-xl font-semibold text-foreground mb-2">
                No articles found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search or filter to find what you're looking
                for.
              </p>
            </div>
          ) : (
            <>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                {visiblePosts.map((post, i) => (
                  <AnimatedSection key={post.slug} delay={i * 0.05}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group block h-full"
                    >
                      <div className="glass-card h-full p-6 rounded-2xl hover-glow transition-all duration-500 flex flex-col">
                        {/* Category + Read Time */}
                        <div className="flex items-center justify-between mb-4">
                          <Badge
                            variant="outline"
                            className="text-[11px] font-semibold uppercase tracking-wider border-primary/20 text-primary bg-primary/5"
                          >
                            {post.category}
                          </Badge>
                          <span className="flex items-center gap-1 text-[11px] text-muted-foreground">
                            <Clock className="w-3 h-3" />
                            {post.readTime} min
                          </span>
                        </div>

                        {/* Visual — real image or gradient fallback */}
                        <div className="w-full h-36 rounded-xl mb-5 overflow-hidden bg-gradient-to-br from-primary/10 via-primary/5 to-card">
                          {post.image ? (
                            <img
                              src={post.image}
                              alt={post.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-3xl opacity-30 font-bold font-display text-primary tracking-tighter">
                                {post.title.split(" ")[0].toUpperCase()}
                              </span>
                            </div>
                          )}
                        </div>

                        {/* Title */}
                        <h3 className="text-lg font-bold font-display text-foreground mb-3 group-hover:text-primary transition-colors duration-300 line-clamp-2">
                          {post.title}
                        </h3>

                        {/* Excerpt */}
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 line-clamp-3 flex-1">
                          {post.excerpt}
                        </p>

                        {/* Bottom row */}
                        <div className="space-y-3 mt-auto">
                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {post.tags.slice(0, 3).map((t) => (
                              <span
                                key={t}
                                className="text-[10px] px-2 py-0.5 rounded-full bg-muted text-muted-foreground"
                              >
                                {t}
                              </span>
                            ))}
                          </div>

                          {/* Author & Date */}
                          <div className="flex items-center justify-between pt-3 border-t border-border/40">
                            <div className="flex items-center gap-2">
                              {(() => {
                                const author = post.authorId ? getAuthor(post.authorId) : null;
                                const ac = author ? authorColors[author.color] : "";
                                return (
                                  <div className={`w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-bold shrink-0 border ${ac || "bg-primary/10 text-primary border-primary/20"}`}>
                                    {author ? author.initials : <User className="w-3 h-3" />}
                                  </div>
                                );
                              })()}
                              <span className="text-xs text-muted-foreground">
                                {post.authorId ? getAuthor(post.authorId)?.name || post.authorId : "Cryst Bio"}
                              </span>
                            </div>
                            <span className="text-xs text-muted-foreground flex items-center gap-1">
                              <Calendar className="w-3 h-3" />
                              {post.date}
                            </span>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </AnimatedSection>
                ))}
              </div>

              {/* Load More */}
              {hasMore && (
                <div className="text-center mt-12">
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    <Button
                      variant="outline"
                      size="lg"
                      onClick={() => setVisibleCount((c) => c + 6)}
                      className="rounded-full border-primary/30 text-primary hover:bg-primary/10 gap-2 px-10"
                    >
                      <BookOpen className="w-4 h-4" />
                      Load More Articles ({filtered.length - visibleCount} remaining)
                    </Button>
                  </motion.div>
                </div>
              )}
            </>
          )}
        </div>
      </section>

      {/* ─── CTA ──────────────────────────────────────────────── */}
      <section className="section-padding bg-card/40">
        <div className="container mx-auto px-4">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold font-display text-foreground mb-4">
                Have a Specific Question?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Our scientific team is ready to discuss your specific research
                requirements and provide expert guidance tailored to your
                project.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact">
                  <Button
                    size="lg"
                    className="font-semibold gap-2 shadow-lg shadow-primary/20"
                  >
                    Contact Our Team <ArrowRight className="w-4 h-4" />
                  </Button>
                </Link>
                <Link to="/faq">
                  <Button
                    size="lg"
                    variant="outline"
                    className="font-semibold gap-2"
                  >
                    Visit FAQ
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

export default Blog;
