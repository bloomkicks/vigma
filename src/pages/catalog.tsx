import { catalogTitle, catalogDescription } from "@/data/meta";
import MetaHead from "@/components/head-components/MetaHead";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductList from "@/components/catalog-page/ProductList";
import CatalogHeroSection from "@/components/catalog-page/CatalogHeroSection";
import ModalRoot from "@/components/popups/ModalRoot";

const CatalogPage = () => {
  const router = useRouter();
  const [sortCategory, setSortCategory] = useState(
    router.asPath.split("#")[1] || "all",
  );
  function onSort(category: string) {
    setSortCategory(category);
  }

  return (
    <>
      <MetaHead title={catalogTitle} description={catalogDescription} />
      <main className="pt-16">
        <CatalogHeroSection onSort={onSort} selected={sortCategory} />
        <ProductList sortCategory={sortCategory} />
      </main>
      <ModalRoot />
    </>
  );
};

export default CatalogPage;
