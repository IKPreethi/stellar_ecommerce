import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Container } from "react-bootstrap";
import ProductTile from "../ProductTile/ProductTile";
import "./ProductsGrid.css"

const ProductsGrid = () => {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    axios.get('https://localhost:5001/Product').then((response) => {
      setProductList(response.data);
    });
    axios.get('https://localhost:5001/Buyer').then((response) => {
      console.log(response.data);
    });
    // let tempData =  {
    //   id: "61210303c72fe2cdeb5da089",
    //   productName: "Anouk kurta set",
    //   productPrice: 799.0,
    //   category: "Kurta Set",
    //   productDescription:
    //     "A grey colored straight cut kurta set, with gold and pink embellishments. The sleeves extend until the wrist. Comes with a chiffon shawl of color grey",
    //   productImage:
    //     "https://i.pinimg.com/originals/a0/59/23/a05923a8ec8e3967a17f015f5c2d2314.jpg",
    // };

      // let product = Array(9).fill(tempData);
      //setProductList([tempData]);

  }, []);

  return (
    <Container className= "items-grid">
      {productList.map((item, idx) => (
        <Col>
        <ProductTile product={item} />
        </Col>
      ))}
    </Container>
  );
};

export default ProductsGrid;
