import { Container } from "react-bootstrap";
import NavBar from "./NavBar/NavBar";
import ProductsGrid from "./ProductsGrid/ProductsGrid";

const Home = () => {

  return (
    <Container fluid>
      <NavBar/>
      <ProductsGrid/>
    </Container>
  );
};
export default Home;
