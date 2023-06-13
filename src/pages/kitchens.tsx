import { kitchensTitle, kitchensDescription } from "@/data/meta";
import MetaHead from "@/components/head-components/MetaHead";
import { useRouter } from "next/router";
import { useState } from "react";
import ProductList from "@/components/kitchens-page/ProductList";
import KitchensPageSection from "@/components/kitchens-page/KitchensPageSection";
import Popup from "@/components/popups/Popup";

const KitchensPage = () => {
  const router = useRouter();
  const [sortCategory, setSortCategory] = useState(
    router.asPath.split("#")[1] || "all"
  );
  function onSort(category: string) {
    setSortCategory(category);
  }

  return (
    <>
      <MetaHead
        title={kitchensTitle}
        description={kitchensDescription}
      />
      <main className="pt-16">
        <KitchensPageSection
          onSort={onSort}
          selected={sortCategory}
        />
        <ProductList sortCategory={sortCategory} />
      </main>
      <Popup />
    </>
  );
};

export default KitchensPage;
