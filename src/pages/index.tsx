import Popup from "@/components/popups/Popup";
import QuizSection from "@/components/quiz/QuizSection";
import ContactsSection from "@/components/contacts/ContactsSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import GetKitchenSection from "@/components/get-kitchen/GetKitchenSection";
import FactorySection from "@/components/factory/FactorySection";
import StaffSection from "@/components/staff/StaffSection";
import ValuesSection from "@/components/values/ValuesSection";
import MaterialsSection from "@/components/materials/MaterialsSection";
import ProductsSection from "@/components/products/ProductsSection";
import BenefitsSection from "@/components/benefits/BenefitsSection";
import HeroSection from "@/components/hero/HeroSection";
import CategoriesSection from "@/components/categories/CatergoriesSection";
import ServicesSection from "@/components/services/ServicesSection";

const MainPage = () => {
  return (
    <>
      <main className="pt-16">
        <HeroSection />
        <BenefitsSection />
        <ProductsSection />
        <CategoriesSection />
        <ServicesSection />
        <MaterialsSection />
        <ValuesSection />
        <StaffSection />
        <FactorySection />
        <GetKitchenSection />
        <ReviewsSection />
        <QuizSection />
        <ContactsSection />
      </main>
      <Popup />
    </>
  );
};

export default MainPage;
