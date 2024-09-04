import { Container, Row, Col, Button } from 'react-bootstrap';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import TrackVisibility from 'react-on-screen'; // For visibility-based animation
import 'animate.css'; // Animation library
import aman from '../assets/img/aman.png'
import abhi from "../assets/img/abhi.png"
import suryam from "../assets/img/suryam.png"
import { HashLink } from 'react-router-hash-link';
<<<<<<< HEAD
=======
// import aboutImg from '../assets/img/contact-img.svg'; // Main section image
// import colorSharp2 from "../assets/img/banner-bg.png"; // Background image
// import { Footer } from './Footer';
>>>>>>> a4650580e95f652096e66fa5aaff905d0ac79ffb

const teamMembers = [
  {
    name: "Abhishek Bajpai",
    title: "App Developer",
    description: "Our App Developers ensure your infrastructure is scalable, secure, and optimized for peak performance, leveraging their expertise in both web and mobile app development.",
    imgSrc: abhi,
    linkedIn: "https://www.linkedin.com/in/abhishek-bajpai1/",
  },
  {
    name: "Aman Joshi",
    title: "Fullstack Developer",
    description: "Our Fullstack Developers use the MERN stack to build and solve complex web solutions, with expertise in React, efficient data structure management, and end-to-end project development.",
    imgSrc: aman,
    linkedIn: "https://www.linkedin.com/in/aman-joshi-064433192/",
  },
  {
    name: "Suryam Sourya",
    title: "DevOps Engineer",
    description: "Our certified DevOps Engineers streamline your development processes, ensuring efficient deployment and system reliability, with expertise in AWS, Azure, and cloud engineering.",
    imgSrc: suryam,
    linkedIn: "https://www.linkedin.com/in/suryam-sourya/",
  },
];

export const About = () => {
  return (
    <section className="about" id="about">
      <div className="background-image" />
      <Container className="content">
        {/* Heading Section */}
        <Row className="justify-content-center">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <h2 className={`text-center font-weight-bold mb-4 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  About CodeDploy
                </h2>
              }
            </TrackVisibility>
          </Col>
        </Row>

        {/* Intro Section */}
        <Row className="justify-content-center mb-5">
          <Col xs={12} md={10}>
            <TrackVisibility>
              {({ isVisible }) => 
                <p className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  At Codedploy, we are a team of innovative web developers, cloud engineers, and design specialists dedicated to delivering top-tier digital solutions. Our mission is to transform your ideas into functional, visually stunning, and scalable websites that exceed expectations. We work collaboratively to integrate user-friendly design with cutting-edge web development, ensuring every project is crafted with precision, creativity, and ease of use.
                </p>
              }
            </TrackVisibility>
          </Col>
        </Row>

        {/* Expertise Section */}
        <Row className="mb-5">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <h3 className={`text-center mb-4 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  Our Expertise Spans Across:
                </h3>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  <h4>Web Development & CMS Solutions</h4>
                  <p>We build responsive, high-performance websites and offer easy-to-manage content management systems (CMS), empowering you to efficiently update and maintain your website with robust tools and streamlined workflows.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  <h4>Cloud Infrastructure & DevOps</h4>
                  <p>We ensure that your website is scalable and secure, offering reliable cloud hosting and seamless deployment. Our cloud solutions are designed to handle traffic spikes effortlessly, ensuring optimal performance even during peak demand.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  <h4>UI/UX Design</h4>
                  <p>We create intuitive and visually appealing designs that not only look great but also offer a smooth user experience, reflecting your brand’s identity.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} className="mb-4">
            <TrackVisibility>
              {({ isVisible }) => 
                <div className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  <h4>SEO & Optimization</h4>
                  <p>We help your website rank better on search engines, making it easier for your customers to find you online.</p>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>

       {/* Team Section */}
       <Row className="mb-5">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <h3 className={`text-center mb-4 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  Meet Our Team
                </h3>
              )}
            </TrackVisibility>
          </Col>
        </Row>

        <Row>
          {teamMembers.map((member, index) => (
            <Col key={index} xs={12} md={4} className="text-center mb-4">
              <TrackVisibility>
                {({ isVisible }) => (
                  <div className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                    <img src={member.imgSrc} alt={member.title} className="img-fluid mb-3" style={{ maxWidth: '150px' }} />
                    <a href={member.linkedIn} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
                      <h4>{member.name}</h4>
                    </a>
                    <h5>{member.title}</h5>
                    <p>{member.description}</p>
                  </div>
                )}
              </TrackVisibility>
            </Col>
          ))}
        </Row>

        {/* Why Choose Us Section */}
        <Row className="mb-5">
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <h3 className={`text-center mb-4 ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  Why Choose Us?
                </h3>
              }
            </TrackVisibility>
          </Col>
          <Col xs={12}>
            <TrackVisibility>
              {({ isVisible }) => 
                <p className={`text-center ${isVisible ? 'animate__animated animate__fadeIn' : ''}`}>
                  At Codedploy, we prioritize clear communication and client collaboration to ensure your vision is fully realized. From concept to deployment, we handle every step of the development process, providing personalized service and solutions tailored to your business needs.
                  <br/><br/>
                  Whether you're looking for a complete website overhaul, custom CMS, mobile-friendly design, or SEO services, we are ready to bring your vision to life. Let’s code, deploy, and succeed—together.
                </p>
              }
            </TrackVisibility>
          </Col>
        </Row>

        {/* Call to Action Section */}
        <Row className="justify-content-center">
          <Col xs={12} className="text-center">
          <HashLink to='/#connect'>
            <Button onClick={() => console.log('/#connect')}>
              Let's Connect! <ArrowRightCircle size={25} />
            </Button>
            </HashLink>
          </Col>
        </Row>
        
      </Container>
      
    </section>

);
}
