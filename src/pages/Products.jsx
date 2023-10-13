import React, { useContext, useEffect } from "react";
import MainStore from "../context/MainStore";
import Loading from "./../components/Loading";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Products = () => {
  const { products, addToCart, cartItems } = useContext(MainStore);

  useEffect(() => {
    if (cartItems.length > 0) {
      localStorage.cartItems = JSON.stringify(cartItems);
    }
  }, [cartItems]);

  return (
    <div className="text-center">
      <h1>Products</h1>
      <div className="container">
        <div className="row gap-5">
          {products.length > 0 ? (
            products.map((product) => (
              <Card
                key={product.id}
                style={{ width: "18rem" }}
                className="col-lg-4 col-md-6 col-sm-12 max"
              >
                <Card.Img
                  variant="top"
                  src={`${product.img}`}
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <Card.Body>
                  <Card.Title>
                    {product.sort} || {product.price}$
                  </Card.Title>
                  <Card.Text>{product.name}</Card.Text>
                  <Button
                    variant="outline-primary"
                    onClick={() => addToCart(product)}
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            ))
          ) : (
            <Loading />
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
