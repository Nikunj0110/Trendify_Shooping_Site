import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";

function Section6() {
  return (
    <>
      <section className="contact-section">
        <Container>
          <Row className="justify-content-center ">
            <Col sm={8} className="text-center">
              <h4>We Guarantee</h4>
              <h2>Fastest Delivery</h2>
              <p>
                At Trendify, we know that when you shop for fashion, you want it
                fast. That’s why we offer lightning-fast delivery across the
                city.
              
              </p>
              <Link to="/" className="btn btn-red px-4 py-2 rounded-0">
                Call: 999-888-7777
              </Link>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section6;
