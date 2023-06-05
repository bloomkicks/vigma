import ProductsSection from "@/components/products/ProductsSection";
import BenefitsSection from "@/components/benefits/BenefitsSection";
import HeroSection from "@/components/hero/HeroSection";

const MainPage = () => {
  return (
    <main className="pt-16 pb-12">
      <HeroSection />
      <BenefitsSection />
      <ProductsSection />
    </main>
  );
};

export default MainPage;
