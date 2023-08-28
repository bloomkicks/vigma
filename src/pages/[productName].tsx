import MetaHead from "@/components/head-components/MetaHead";
import ProductHeroSection from "@/components/product-page/ProductHeroSection";
import PriceIncludesSection from "@/components/price-includes/PriceIncludesSection";
import KitchenConstructorSection from "@/components/kitchen-constructor/KitchenConstructorSection";
import OurMaterialsSection from "@/components/our-materials/OurMaterialsSection";
import OurServicesSection from "@/components/our-services/OurServicesSection";
import GetKitchenSection from "@/components/get-kitchen/GetKitchenSection";
import OurValuesSection from "@/components/our-values/OurValuesSection";
import QuizSection from "@/components/quiz/QuizSection";
import ContactUsSection from "@/components/contact-us/ContactUsSection";
import ModalRoot from "@/components/popups/ModalRoot";
import products from "@/data/products";

import type { GetStaticProps, GetStaticPaths } from "next";

const ProductPage = ({ productName }: { productName: string }) => {
  const neededProduct = products.find(
    (prd) => prd.name === productName
  )!;
  return (
    <>
      <MetaHead
        title={`${neededProduct.title} - ${neededProduct.subtitle} от фабрики ВИГМА Мебель`}
        description={`Кухня ${neededProduct.description}, которая станет украшением любого дома`}
      />
      <main className="pt-16">
        <ProductHeroSection {...neededProduct} />
        <PriceIncludesSection />
        <KitchenConstructorSection />
        <OurMaterialsSection />
        <OurServicesSection />
        <GetKitchenSection />
        <OurValuesSection />
        <QuizSection />
        <ContactUsSection />
      </main>
      <ModalRoot />
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: products.map((product) => ({
      params: { productName: product.name },
    })),
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  return {
    props: { productName: context.params!.productName },
  };
};

export default ProductPage;
