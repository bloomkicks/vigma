import products from "@/data/products";

import ProductCard from "../product-card/ProductCard";

const ProductList = ({ sortCategory }: { sortCategory: string }) => {
  const filteredProducts = products.filter(
    (product) =>
      sortCategory === "all" ||
      !sortCategory ||
      product.categories.includes(sortCategory),
  );

  return (
    <section className="section-dark flex flex-col items-center justify-start space-y-10 lg:!space-y-14 !pt-[60px] lg:!pt-[72px] !pb-[70px] mb-[20px] lg:mb-[32px]">
      {filteredProducts.length > 0 ? (
        filteredProducts.map((product) => (
          <ProductCard {...product} key={product.title} isSlider />
        ))
      ) : (
        <p className="subtitle1">
          Проектов с такими параметрами не найдено. Но вы можете получить
          бесплатный дизайн-проект, вызвав дизайнера на сайте
        </p>
      )}
    </section>
  );
};

export default ProductList;
