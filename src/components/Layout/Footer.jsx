import React, { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

function Footer() {
  //Scroll State
  const [isvisible,setisvisible]=useState(false)
  const scrollTop=()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  }

const listen=()=>{
   let heighthidden=250;
   const windowscroll=document.body.scrollTop || document.documentElement.scrollTop;

   windowscroll>heighthidden ? setisvisible(true):setisvisible(false);
}

useEffect(()=>{
  window.addEventListener("scroll",listen)
})


  return (
    <>
      <footer>
        <Container>
          <Row>
            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Location</h5>
                <p>60 E Broadway</p>
                <p>Bloomington</p>
                <p>United States </p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Fast Delivery</h5>
                <p>Same day delivery cities</p>
                <p>Delivery partner info</p>
                <p>Estimated delivery times</p>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Shop Now</h5>
                <p>With Offer</p>
                <Link to="tel:9998887777" className="calling">
                  999-888-7777
                </Link>
              </div>
            </Col>

            <Col sm={6} lg={3} className="mb-4 mb-lg-0">
              <div className="text-center">
                <h5>Follow Us</h5>
                <p>With More Options</p>
                <ul className="list-unstyled text-center mt-2 icons">
                  <li>
                    <Link to="/">
                      <i className="bi bi-facebook"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-instagram"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-twitter"></i>
                    </Link>
                  </li>
                  <li>
                    <Link to="/">
                      <i className="bi bi-youtube"></i>
                    </Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
          <Row className="copyright">
            <Col>
              <div>
                <ul className="list-unstyled text-center mb-0 main">
                  <li>
                    <Link to="/" className="ok">
                       ©  2025 <span>Trendify</span>. All Rights Reserved
                    </Link>
                  </li>
                  <li>
                    <Link to="/" className="ok">About Us</Link>
                  </li>
                  <li>
                    <Link to="/" className="ok">Terms Of Use</Link>
                  </li>
                  <li>
                    <Link to="/" className="ok">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* scroll to top */}
      
      {isvisible && ( <div className="scroll-top" onClick={scrollTop}>
        <i className="bi bi-arrow-up"></i>
      </div>)}
     
    </>
  );
}

export default Footer;
