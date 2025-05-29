import React from "react";
import { Container, Row, Col, CardTitle } from "react-bootstrap";
import promotionimage from "../../assets/about/demo.jpg";

function Section4() {
  return (
    <>
      <section className="promotion-section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center mb-5 mb-lg-0">
              <img src={promotionimage} className="img-fluid" alt="promotion" />
            </Col>

            <Col lg={6} className="px-5">
              <h2>Shopping with Trendify – Where Fashion Moves Fast.</h2>
              <p>
                Discover what’s now and what’s next. From statement streetwear
                to lowkey luxury, Trendify is your style-forward destination. We
                spotlight bold looks, exclusive drops, and global trends.
              </p>
              <ul>
                <li>
                  <p>
                   Highlight seasonal fashion !
                  </p>
                </li>
                <li>
                  <p>
                   Curated picks from influencers & stylists !
                  </p>
                </li>
                <li>
                  <p>
                    “What’s Trending Now” carousel !
                  </p>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      {/* BG PARALLAX SCROLL EFECTS */}
      <section className="bg_parallax_scroll"></section>
    </>
  );
}

export default Section4;
