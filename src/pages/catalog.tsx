import CatalogHead from "../components/layout/head-components/CatalogHead";
import CatalogHero from "../components/pages/catalog/hero/CatalogHero";
import ProductList from "../components/pages/catalog/ProductList";
import Container from "@mui/material/Container";

const CatalogPage = () => {
  return (
    <Container
      component="main"
      sx={{
        width: "auto",
        maxWidth: { xs: "none" },
        px: 0.5,
        overflow: "hidden",
      }}
    >
      <CatalogHead />
      <CatalogHero />
      <ProductList />
    </Container>
  );
};

export default CatalogPage;
