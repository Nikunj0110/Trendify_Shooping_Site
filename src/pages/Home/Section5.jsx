import React from "react";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import { Link } from "react-router-dom";
import ios from "../../assets/about/appstore.png";
import android from "../../assets/about/googleplay.png";
import eshop from "../../assets/about/eshop.png";
import image1 from "../../assets/brand/image1.svg";
import image2 from "../../assets/brand/image2.png";
import image3 from "../../assets/brand/image3.png";
import image4 from "../../assets/brand/image4.svg";
import image5 from "../../assets/brand/image5.png";
import image6 from "../../assets/brand/image6.png";
import image7 from "../../assets/brand/image7.png";
import image8 from "../../assets/brand/image8.png";


function Section5() {
  return (
    <>
      <section className="shop_section">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} className="text-center text-lg-start mb-5 mb-lg-0">
              <h4>Download Mobile App And</h4>
              <h2>Save Up To 20%</h2>
              <p>
                Nothing is impossible in this world.Nothing is impossible in
                this worldNothing is impossible in this world
              </p>
              <Link to="/">
                <img src={ios} alt="IOS" className="img-fluid store me-3" />
              </Link>
              <Link to="/">
                <img
                  src={android}
                  alt="Android"
                  className="img-fluid store me-3"
                />
              </Link>
            </Col>

            <Col lg={6}>
              <img src={eshop} alt="image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="brand_section">
        <Container>
          <Row>
            <Carousel>
              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img
                        src={image1}
                        className="img-fluid"
                        alt="image1"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image2}
                        className="img-fluid"
                        alt="image2"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image3}
                        className="img-fluid"
                        alt="image3"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image4}
                        className="img-fluid"
                        alt="image4"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image5}
                        className="img-fluid"
                        alt="image5"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image6}
                        className="img-fluid"
                        alt="image6"
                      />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>

              <Carousel.Item>
                <Carousel.Caption>
                  <div className="d-flex align-items-center justify-content-between">
                    <div className="brand_img">
                      <img src={image3} className="img-fluid" alt="image3" />
                    </div>
                    <div className="brand_img">
                      <img src={image4} className="img-fluid" alt="image4" />
                    </div>
                    <div className="brand_img">
                      <img src={image5} className="img-fluid" alt="image5" />
                    </div>
                    <div className="brand_img">
                      <img src={image6} className="img-fluid" alt="image6" />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image7}
                        className="img-fluid"
                        alt="image7"
                      />
                    </div>
                    <div className="brand_img">
                      <img
                        src={image8}
                        className="img-fluid"
                        alt="image8"
                      />
                    </div>
                  </div>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
}

export default Section5;
