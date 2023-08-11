import MetaHead from "@/components/head-components/MetaHead";
import ProductPageSection from "@/components/product-page/ProductPageSection";
import PriceExplainSection from "@/components/price-explain/PriceExplainSection";
import ConstructorSection from "@/components/constructor/ConstructorSection";
import MaterialsSection from "@/components/materials/MaterialsSection";
import ServicesSection from "@/components/services/ServicesSection";
import GetKitchenSection from "@/components/get-kitchen/GetKitchenSection";
import ValuesSection from "@/components/values/ValuesSection";
import QuizSection from "@/components/quiz/QuizSection";
import ContactsSection from "@/components/contacts/ContactsSection";
import Popup from "@/components/popups/Popup";
import products from "@/data/products";

import type {
  InferGetStaticPropsType,
  GetStaticProps,
  GetStaticPaths,
} from "next";

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
        <ProductPageSection {...neededProduct} />
        <PriceExplainSection />
        <ConstructorSection />
        <MaterialsSection />
        <ServicesSection />
        <GetKitchenSection />
        <ValuesSection />
        <QuizSection />
        <ContactsSection />
      </main>
      <Popup />
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
