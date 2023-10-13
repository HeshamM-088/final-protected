import React, { useContext, useEffect } from "react";
import MainStore from "../context/MainStore";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cart = () => {
  const { cartItems, decrement, increment } = useContext(MainStore);

  // console.log(cartItems);
  return (
    <div className="text-center">
      <h1 className="text-success text-decoration-underline p-4">Cart</h1>
      <div className="container">
        <div className="row gap-5 justify-content-center align-items-baseline">
          {cartItems.length > 0 ? (
            cartItems.map((item) => (
              <Card
                key={item.id}
                style={{ width: "18rem" }}
                className="col-lg-4 col-md-6 col-sm-12 max"
              >
                <Card.Img
                  variant="top"
                  src={`${item.img}`}
                  width={300}
                  height={300}
                  loading="lazy"
                />
                <Card.Body>
                  <Card.Title>
                    {item.sort} || {item.price}$
                  </Card.Title>
                  <Card.Text>{item.name}</Card.Text>
                  <div className="d-flex w-100 justify-content-evenly align-items-center">
                    <Button
                      variant="outline-warning"
                      onClick={() => decrement(item)}
                    >
                      -
                    </Button>
                    <Card.Title>Items : {item.count}</Card.Title>
                    <Button
                      variant="outline-success"
                      onClick={() => increment(item)}
                    >
                      +
                    </Button>
                  </div>

                  <Card.Text>
                    Total Amount : {item.count * item.price}$
                  </Card.Text>
                </Card.Body>
              </Card>
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;
