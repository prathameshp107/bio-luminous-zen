import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/contexts/ThemeContext";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { lazy, Suspense } from "react";
import WhatsAppButton from "@/components/WhatsAppButton";
import SEOManager from "@/components/SEOManager";
import SmoothScroll from "@/components/SmoothScroll";
import ScrollToTop from "@/components/ScrollToTop";

const queryClient = new QueryClient();

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Services = lazy(() => import("./pages/Services"));
const Facilities = lazy(() => import("./pages/Facilities"));
const AnimalSupply = lazy(() => import("./pages/AnimalSupply"));
const AnimalDetail = lazy(() => import("./pages/AnimalDetail"));
const Certifications = lazy(() => import("./pages/Certifications"));
const Contact = lazy(() => import("./pages/Contact"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Testimonials = lazy(() => import("./pages/Testimonials"));
const Gallery = lazy(() => import("./pages/Gallery"));
const FAQ = lazy(() => import("./pages/FAQ"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const TermsOfService = lazy(() => import("./pages/TermsOfService"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const PageLoader = () => (
  <div className="flex items-center justify-center min-h-[60vh]">
    <div className="flex flex-col items-center gap-3">
      <div className="w-8 h-8 border-2 border-primary/30 border-t-primary rounded-full animate-spin" />
      <p className="text-sm text-muted-foreground">Loading...</p>
    </div>
  </div>
);

const App = () => (
  <ThemeProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <SmoothScroll>
          <BrowserRouter>
            <SEOManager />
            <ScrollToTop />
            <Navbar />
            <main className="min-h-screen">
              <Suspense fallback={<PageLoader />}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/services" element={<Services />} />
                  <Route path="/services/:slug" element={<ServiceDetail />} />
                  <Route path="/facilities" element={<Facilities />} />
                  <Route path="/animal-supply" element={<AnimalSupply />} />
                  <Route path="/animal-supply/:slug" element={<AnimalDetail />} />
                  <Route path="/certifications" element={<Certifications />} />
                  <Route path="/gallery" element={<Gallery />} />
                  <Route path="/testimonials" element={<Testimonials />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                  <Route path="/terms-of-service" element={<TermsOfService />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </Suspense>
            </main>
            <Footer />
            <WhatsAppButton />
          </BrowserRouter>
        </SmoothScroll>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
