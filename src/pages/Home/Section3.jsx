import React from "react";
import { Container, Row, Col, CardTitle } from "react-bootstrap";
import Cards from "../../components/Layout/Cards";
import { Link } from "react-router-dom";
import image1 from "../../assets/about/image1.png";
import image2 from "../../assets/about/image2.jpg";
import image3 from "../../assets/about/image3.avif";
import image4 from "../../assets/about/image4.jpg";

const mockdata = [
  {
    id: "0001",
    Image: image1,
    title: "Men's Shirt",
    paragraph: "U.S. Polo Assn. offers a wide range of men's shirts that combine classic American style with a sporty, sophisticated look.",
    reting: 5,
    price: 18.73,
  },
  {
    id: "0002",
    Image: image2,
    title: "Ladies T-shirt",
    paragraph: "Nike offers a diverse range of women's T-shirts that blend performance, comfort, and style and also.",
    reting: 4.5,
    price: 15.88,
  },
  {
    id: "0003",
    Image: image3,
    title: "Men's Footwear",
    paragraph: "Nike sneakers are known for their performance-driven design, cutting-edge technology, and fashion-forward appeal.",
    reting: 4,
    price: 35.13,
  },
  {
    id: "0004",
    Image: image4,
    title: "Ladies Footwear",
    paragraph: "Ladies' heel chappals are a versatile footwear choice that combines style and comfort, suitable for various occasions.",
    reting: 3.5,
    price: 12,
  },
 
];
// Rating logical data 
const renderRatingIcons=(reting)=>{
    const stars=[];

    for(let i=0;i<5;i++){
        if(reting>0.5){
            stars.push(<i key={i} className="bi bi-star-fill"></i>);
            reting--;
        }else if(reting>0 && reting<1){
            stars.push(<i key={"half"} className="bi bi-star-half"></i>);
            reting--;
        }else{
            stars.push(<i key={`empty${i}`} className="bi bi-star"></i>);
        }
    }
    return stars;

}

function Section3() {
  return (
    <section className="menu_section">
      <Container>
        <Row>
          <Col lg={{ span: 8, offset: 2 }} className="text-center mb-5">
            <h2>Our Fashion's</h2>
            <p className="para">
              Our collection blends comfort, durability, and
              fashion-forward design to keep you moving with confidence.
            </p>
          </Col>
        </Row>

        <Row>
          {mockdata.map((carddata, index) => (
            <Cards
              key={index}
              Image={carddata.Image}
              reting={carddata.reting}
              title={carddata.title}
              paragraph={carddata.paragraph}
              price={carddata.price}
              renderRatingIcons={renderRatingIcons}
            />
          ))}
        </Row>

        <Row className="pt-5">
          {/* <Col sm={6} lg={5}>
            <div className="ads_box ads_img1 mb-5 mb-md-0">
              <h4 className="mb-0 ">GET YOUR FREE</h4>
              <h5>bag item</h5>
              <Link to="/" className="btn btn-red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col> */}

          <Col sm={6} lg={7}>
            <div className="ads_box ads_img2">
              <h4 className="mb-0">GET OFfer</h4>
              <h5>WITH US</h5>
              <Link to="/" className="btn btn-red px-4 rounded-0">
                Learn More
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Section3;
