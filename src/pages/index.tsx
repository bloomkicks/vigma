import MetaHead from "@/components/head-components/MetaHead";
import Skeleton from "@/components/ui/Skeleton";
import dynamic from "next/dynamic";

import Popup from "@/components/popups/Popup";
import QuizSection from "@/components/quiz/QuizSection";
import ContactsSection from "@/components/contacts/ContactsSection";
// import ReviewsSection from "@/components/reviews/ReviewsSection";
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
import { mainTitle, mainDescription } from "../data/meta";

const ReviewsSection = dynamic(
  () => import("@/components/reviews/ReviewsSection"),
  {
    loading: () => <Skeleton styles="section-light" />,
  }
);

const MainPage = () => {
  return (
    <>
      <MetaHead title={mainTitle} description={mainDescription} />
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
