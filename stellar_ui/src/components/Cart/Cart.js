import './Cart.css';
import React from 'react';
import { Col, Row, Card, Button, Container, DropdownButton, Dropdown } from "react-bootstrap";

const Cart = () => {


    const ItemCard = (
      <Container>
        <Card className="Card-item">
          <Card.Body className="Card-Body">
            <Row>
              <Col xs={4}>
                <img
                  width={100}
                  height={100}
                  className="align-self-center mr-3"
                  src="https://i5.walmartimages.com/asr/e73e1252-642c-4473-93ea-fd3b564a7027_1.3e81ea58fa3042452fe185129a4a865f.jpeg?odnWidth=undefined&odnHeight=undefined&odnBg=ffffff"
                  alt="Generic placeholder"
                />
              </Col>
              <Col>
                <p className="header-font mb-0">
                  Dxracer Formula Gaming Chair (Black/Red)
                </p>
                <Row>
                  <p className="header-font">$48.99</p>
                </Row>
                <Row>
                  <Col xs={6}>Size</Col>
                  <Col xs={6}>Quantity</Col>
                </Row>
                <Row className = "mt-1">
                  <Col xs={6}>
                    <DropdownButton
                      id="dropdown-Size"
                      variant="secondary"
                      title="M"
                    >
                      <Dropdown.Item eventKey="1">S</Dropdown.Item>
                      <Dropdown.Item eventKey="2">M</Dropdown.Item>
                      <Dropdown.Item eventKey="3">L</Dropdown.Item>
                      <Dropdown.Item eventKey="4">XL</Dropdown.Item>
                    </DropdownButton>
                  </Col>
                  <Col xs={6}>
                    <Row>
                    <Col xs={4}>
                      <Button size="small" className="button-decrement">-</Button>
                     </Col> 
                     <Col xs={2}>
                      <p>1</p>
                      </Col>
                      <Col xs={3}>
                      <Button size="small" className="button-increment">+</Button>
                      </Col>
                      </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Card.Body>
        </Card>
      </Container>
    );

    // const CartItem = (
    //   <Card className="cart-item">
    //   <Card.Body image={item.media.source} alt={item.name} className={classes.media} />
    //   <CardContent className={classes.cardContent}>
    //     <Typography variant="h4">Name</Typography>
    //     <Typography variant="h5">{item.line_total.formatted_with_symbol}</Typography>
    //   </CardContent>
    //   <CardActions className={classes.cardActions}>
    //     <div className={classes.buttons}>
    //       <Button type="button" size="small">-</Button>
    //       <Typography>&nbsp;{"1"}&nbsp;</Typography>
    //       <Button type="button" size="small">+</Button>
    //     </div>
    //     <Button variant="contained" type="button" color="secondary">Remove</Button>
    //   </CardActions>
    // </Card>
    // );
    return (
        <Container className = 'cart-container'>
        {/* <SubTotal />
        <br />
        <PickupSavings />
        <br />
        <TaxesFees />
        <hr />
        <EstimatedTotal />
        <br /> */}
        {ItemCard}
      </Container>
    )
}

export default Cart
