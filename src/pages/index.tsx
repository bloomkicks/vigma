import { mainTitle, mainDescription } from "../data/meta";

import MetaHead from "@/components/head-components/MetaHead";

import HeroSection from "@/components/hero/HeroSection";
import OurBenefitsSection from "@/components/our-benefits/OurBenefitsSection";
import MainProductsSection from "@/components/main-products/MainProductsSection";
import KitchenCategoriesSection from "@/components/kitchen-categories/KitchenCatergoriesSection";
import OurServicesSection from "@/components/our-services/OurServicesSection";
import OurMaterialsSection from "@/components/our-materials/OurMaterialsSection";
import OurValuesSection from "@/components/our-values/OurValuesSection";
import OurStaffSection from "@/components/our-staff/StaffSection";
import OurFactorySection from "@/components/our-factory/OurFactorySection";
import GetKitchenSection from "@/components/get-kitchen/GetKitchenSection";
import ReviewsSection from "@/components/reviews/ReviewsSection";
import QuizSection from "@/components/quiz/QuizSection";
import ContactUsSection from "@/components/contact-us/ContactUsSection";
import Popup from "@/components/popups/Popup";

const MainPage = () => {
  return (
    <>
      <MetaHead title={mainTitle} description={mainDescription} />
      <main className="pt-16">
        <HeroSection />
        <OurBenefitsSection />
        <MainProductsSection />
        <KitchenCategoriesSection />
        <OurServicesSection />
        <OurMaterialsSection />
        <OurValuesSection />
        <OurStaffSection />
        <OurFactorySection />
        <GetKitchenSection />
        <ReviewsSection />
        <QuizSection />
        <ContactUsSection />
      </main>
      <Popup />
    </>
  );
};

export default MainPage;
