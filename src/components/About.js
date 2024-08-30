import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen'; // For visibility-based animation
import 'animate.css'; // Animation library
import aboutImg from '../assets/img/contact-img.svg'; // Your Bitmoji or image for about
import colorSharp2 from "../assets/img/banner-bg.png"; // Background image

export const About = () => {
  return (
    <section className="about" id="about" style={{ position: 'relative', overflow: 'hidden' }}>
      <Container>
        {/* Heading Section */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <h2 
                  className={`text-center font-weight-bold mb-4 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}
                >
                  About Us
                </h2>
              }
            </TrackVisibility>
          </Col>
        </Row>

        {/* Content Section: Divided into two parts */}
        <Row className="align-items-center">
          {/* Left Part: Image */}
          <Col xs={12} md={6} className="text-center mb-4 mb-md-0">
            <TrackVisibility>
              {({ isVisible }) => 
                <img 
                  src={aboutImg} 
                  alt="About Me Bitmoji" 
                  className={`about-img img-fluid ${isVisible ? 'animate__animated animate__zoomIn' : ''}`} 
                  style={{ maxWidth: '400px', borderRadius: '8px' }} // Medium size and responsive
                />
              }
            </TrackVisibility>
          </Col>

          {/* Right Part: Text */}
          <Col xs={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={isVisible ? 'animate__animated animate__fadeInRight' : ''}>
                  <p>
                  We are a passionate and dynamic team of web developers and designers dedicated to crafting high-quality web solutions from start to finish. Our expertise spans across frontend and backend development, cloud infrastructure, DevOps, and UI/UX design. By working collaboratively, we ensure every project we take on is not only functional but also aesthetically pleasing, scalable, and tailored to the client's unique needs.✨
                  
                  
                  From concept to deployment, we provide a seamless process to bring your vision to life. Whether you need a stunning website, a complex web application, or cloud-based solutions, our team is equipped with the tools and experience to deliver exceptional results. We pride ourselves on our attention to detail, creativity, and commitment to delivering the best user experience. 😄
                  
                  
                  If you're looking for a team that truly understands the intersection of development and design, you’ve found us. Let’s build something great together!
                  🍕🍣
                  </p>
                  <div className="text-center">
                    <Button  onClick={() => console.log('connect')}>
                      Let's Connect! <ArrowRightCircle size={25} />
                    </Button>
                  </div>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>

      {/* Background Image */}
      <img 
        className="background-image-right" 
        src={colorSharp2} 
        alt="bgimg"
        style={{ position: 'absolute', right: 0, bottom: 0, zIndex: -1, width: '40%' }} 
      />
    </section>
  );
}
