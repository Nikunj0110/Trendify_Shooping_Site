import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import clothes from "../../assets/about/clothes.avif"
import Footwears from "../../assets/about/footwear.avif"
import iphones from "../../assets/about/iphones.avif"


//Mock data cards dynamically
const mockdata = [
  {
    image: clothes,
    title: "Clothes",
    paragraph:
      "Our clothing collection is designed to keep you looking stylish and feeling confident.",
  },
  {
    image: Footwears,
    title: "Footwears",
    paragraph:
      " Our footwear collection blends comfort, durability, and fashion-forward design to keep you moving with confidence.",
  },
  {
    image: iphones,
    title: "Smart Phones",
    paragraph:
      "We bring you the latest smartphones that combine cutting-edge technology with sleek, modern design.",
  },
];

function Section2() {
  return (
    <>
      <section className="about_section">
        <Container>
          <Row>
            <Col lg={{ span: 8, offset: 2 }} className="text-center">
              <h2>Welcome to Trendify !</h2>
              <p>
                Discover the latest trends, unbeatable deals, and fast shipping.
                Shop now and upgrade your lifestyle!
              </p>
              <Link to="/" className="btn order-now btn-red">
                Explore Menu
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
      <section className="about_wrapper">
        <Container>
          <Row className="justify-content-md-center">
            {mockdata.map((carddata, index) => (
              <Col md={6} lg={4} className="mb-4 mb-md-0" key={index}>
                <div className="about_box text-center">
                  <div className="about_icon">
                    <img
                      src={carddata.image}
                      className="img-fluid"
                      alt="icon"
                    />
                  </div>
                  <h4>{carddata.title}</h4>
                  <p>{carddata.paragraph}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
     
    </>
  );
}

export default Section2;
