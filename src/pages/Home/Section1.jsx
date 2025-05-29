import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import section from "../../assets/hero/section.png";
import { Link } from "react-router-dom";

function Section1() {
  return (
    <section className="hero_section">
      <Container>
        <Row>
          <Col lg={7} className="mb-5 mb-lg-0">
            <div className="position-relative">
              <img src={section} className="img-fluid" alt="Hero" />
              <div className="price_badge">
                <div className="badge_text">
                  <h4 className="h4_xs">Only</h4>
                  <h4 className="h4_lg">$6.99</h4>
                </div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero_text text-center">
              <h1 className="text-white">New Arrival's</h1>
              <h2 className="text-white">With Offer</h2>
              <p className="text-white pt-2 pb-4">
                This is the main topic of the year to main is the wait for all
                the main type of topic and it is a main topic of thunder
                practice.
              </p>
              <Link to="/" className="btn order-now">
                Shop Now
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section1;
