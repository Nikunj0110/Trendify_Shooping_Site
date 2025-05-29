import React, { useState } from "react";
import "../../styles/HeaderStyle.css";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

function Header() {
  const [nav, setnav] = useState(false);

  const changeValueOnScroll = () => {
    const scrollvalue = document?.documentElement?.scrollTop;
    scrollvalue > 100 ? setnav(true) : setnav(false);
  };

window.addEventListener("scroll",changeValueOnScroll)




  return (
    <header>
      <Navbar collapseOnSelect expand="lg" className={`${nav===true ? "sticky":""}`}>
        <Container>
          <Navbar.Brand className="header">
            <h4><img src="./images.png" alt="Logo" className="img-fluid" />Trendify</h4>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                {" "}
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/shop">
                {" "}
                Shop
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                {" "}
                Contact
              </Nav.Link>

              <Nav.Link as={Link} to="/">
                <div className="cart">
                  <i className="bi bi-bag fs-5"></i>
                  <em className="roundpoint">2</em>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;
