import { Container, Row, Col } from "react-bootstrap";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const services = [
    { img: meter1, label: "Website Development" },
    { img: meter2, label: "DevOps" },
    { img: meter2, label: "SEO & Optimization" },
    { img: meter2, label: "UI/UX Design" },
    { img: meter3, label: "Logo Design" },
    { img: meter1, label: "Cloud Infrastructure" }
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col xs={12}>
            <div className="skill-bx wow zoomIn">
              <h2>Services</h2>
              <p>
                At CodeDploy, we offer comprehensive digital solutions, including responsive website development, cloud infrastructure on AWS and Azure, and streamlined DevOps for efficient deployments. Our expert team designs intuitive UI/UX, develops robust content management systems (CMS), and optimizes websites for performance and scalability. We also enhance online visibility through SEO and digital marketing strategies to help your business grow.
              </p>
              <Carousel responsive={responsive} infinite className="owl-carousel owl-theme skill-slider">
                {services.map((service, index) => (
                  <div key={index} className="item">
                    <img src={service.img} alt={service.label} />
                    <h5>{service.label}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Background" />
    </section>
  );
}
