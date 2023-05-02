import CatalogHead from "../components/layout/head-components/CatalogHead";
import SectionHero from "../components/pages/catalog/hero/SectionHero";
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
      <SectionHero />
      <ProductList />
    </Container>
  );
};

export default CatalogPage;
