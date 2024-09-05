import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logoCodeDploy.png";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer" style={{ backgroundColor: '#1d1f21', padding: '40px 0', color: '#fff' }}>
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={4} className="text-center text-md-start mb-4 mb-md-0">
            <img src={logo} alt="CodeDploy Logo" style={{ width: '150px', marginBottom: '20px' }} />
            <p>CodeDploy offers end-to-end website development and design solutions that empower businesses to grow online.</p>
          </Col>

          <Col size={12} md={4} className="text-center text-md-center mb-4 mb-md-0" id="quicklink">
            <h5>Quick Links</h5>
            <ul className="list-unstyled" style={{ padding: 0 }}>
              <li><a href="#home" style={{  textDecoration: 'none' }}>Home</a></li>
              <li><a href="#projects" style={{  textDecoration: 'none' }}>Projects</a></li>
              <li><a href="#skills" style={{ textDecoration: 'none' }}>Services</a></li>
              <li><a href="#connect" style={{  textDecoration: 'none' }}>Contact</a></li>
            </ul>
          </Col>

          <Col size={12} md={4} className="text-center text-md-end">
            <h5>Contact Us</h5>
          <p>Email: <a className="email-link" href="mailto:contact@codedeploy.com" style={{ color: "#f39c12;", textDecoration: 'none' }}>contact@codedeploy.com</a></p>
            <div className="social-icon">
              <a href="https://www.linkedin.com/company/codedeploy/" target="_blank" rel="noopener noreferrer">
                <img src={navIcon1} alt="LinkedIn" style={{ margin: '0 10px' }} />
              </a>
              <a href="https://www.instagram.com/codedeploy_?igsh=NHcxejk2eDM0YW02" target="_blank" rel="noopener noreferrer">
                <img src={navIcon3} alt="Instagram" style={{ margin: '0 10px' }} />
              </a>
            </div>
          </Col>
        </Row>
        <Row className="pt-4">
          <Col size={12} className="text-center">
            <p>&copy; 2024 CodeDploy. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
