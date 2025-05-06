
import Header from "@/components/layout/Header";
import Hero from "@/components/home/Hero";
import MapSection from "@/components/home/MapSection";
import Features from "@/components/home/Features";
import PopularServices from "@/components/home/PopularServices";
import Testimonials from "@/components/home/Testimonials";
import DownloadApp from "@/components/home/DownloadApp";
import FAQ from "@/components/home/FAQ";
import CTASection from "@/components/home/CTASection";
import Footer from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen font-tajawal">
      <Header />
      <main>
        <Hero />
        <Features />
        <MapSection />
        <PopularServices />
        <Testimonials />
        <DownloadApp />
        <FAQ />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
