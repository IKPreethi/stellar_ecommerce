import "./ProductTile.css";
import React, { useState } from "react";
import { Col, Container, Image, Row, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
// import { Button } from "bootstrap";

const ProductTile = (props) => {
  const { product } = props;
  const[displayWishList, setDisplayWishlist] = useState(false);
  const onMouseEnter = () => {
    setDisplayWishlist(true)
  }
  const onMouseLeave = () => {
    setDisplayWishlist(false)
  }
  return (
    <div
      className="cards_tile cards-fl-center m-2"
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <Link to={`/product-description/${product.id}`}>
        <>
          <Col className="text-center">
            <Image
              className="center-block"
              src={`${product.productImage}`}
              alt="Card image cap"
              height="100%"
              width="100%"
            />
          </Col>
          <div className="align_items card_body">
            <Row className="title_row">
              <Col className="align_items">
                <h2 className="title_font text-ellip">{product.productName}</h2>
              </Col>
            </Row>
            <Row className="title_row">
              <Col className="align_items">
                <label className="desc_font">{product.category}</label>
              </Col>
            </Row>
          </div>
        </>
      </Link>
      {displayWishList ? (
        <Row className="title_row">
          <Col className="align_items">
            <Button className="save-btn popup-cancel-btn">Wishlist</Button>
          </Col>
        </Row>
      ) : (
        <Row className="title_row">
          <Col className="align_items">
            <label className="desc_font">{"Rs." + product.productPrice}</label>
          </Col>
        </Row>
      )}
    </div>
  );
};

export default ProductTile;
