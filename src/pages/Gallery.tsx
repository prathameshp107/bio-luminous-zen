import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";

type GalleryItem = {
  src: string;
  name: string;
  alt: string;
};

const imageModules = import.meta.glob("../assets/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

const galleryItems: GalleryItem[] = Object.entries(imageModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "image";
    const name = fileName.replace(/\.[^.]+$/, "");
    const alt = name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
    return { src, name, alt };
  })
  .filter((item) => {
    const normalized = item.name.toLowerCase();
    const isCertificationLogo =
      normalized.startsWith("cert-") || normalized.startsWith("logo-");
    const isCompanyLogo = normalized.includes("logo");
    return !isCertificationLogo && !isCompanyLogo;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

const Gallery = () => (
  <div>
    <PageHero
      title="Image Gallery"
      subtitle="Browse our complete collection of laboratory, facility, certification, and service visuals."
      breadcrumb="Gallery"
    />

    <section className="section-padding">
      <div className="container mx-auto px-4">
        <SectionHeader
          label="Visual Library"
          />

        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-5 [column-fill:_balance]">
          {galleryItems.map((item, index) => (
            <AnimatedSection key={item.name} delay={(index % 12) * 0.03}>
              <figure className="glass-card hover-glow mb-5 break-inside-avoid overflow-hidden group">
                <div className="relative">
                  <img
                    src={item.src}
                    alt={item.alt}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                {/* <figcaption className="px-4 py-3 text-sm text-muted-foreground border-t border-border/50">
                  {item.alt}
                </figcaption> */}
              </figure>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default Gallery;
