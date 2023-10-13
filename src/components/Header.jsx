import React, { useContext } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { BsFillCartPlusFill } from "react-icons/bs";
import MainStore from "../context/MainStore";
import { UseUser } from "../context/UserContext";

const Header = () => {
  const { cartItems, setProductToCart, productToCart, setCartItems } =
    useContext(MainStore);
  const { user, setUser } = UseUser();

  const logOut = () => {
    localStorage.clear();
    setUser(null);
    setCartItems([]);
    setProductToCart(!productToCart);
  };

  return (
    <div>
      <Navbar expand="lg" className="bg-dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>
            Project
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={NavLink} to={"/"}>
                Home
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/about"}>
                About
              </Nav.Link>
              <Nav.Link as={NavLink} to={"/products"}>
                Products
              </Nav.Link>

              {user && (
                <Nav.Link as={NavLink} to={"/"} onClick={logOut}>
                  Logout
                </Nav.Link>
              )}
              {user && user.role === "admin" && (
                <Nav.Link as={NavLink} to={"/admin"}>
                  DashBoard
                </Nav.Link>
              )}

              <Nav.Link as={NavLink} to={"/cart"}>
                <BsFillCartPlusFill className="text-warning fs-5" />
                <span className="text-warning fs-5">{cartItems.length}</span>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
