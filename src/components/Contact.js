import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spinner from 'react-bootstrap/Spinner'; // Import Spinner component

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send');
  const [status, setStatus] = useState({});
  const [loading, setLoading] = useState(false); // New state for loading
  const form = useRef(); // Using useRef to handle the form data

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value
    });
  };

  const sendFormData = async (e) => {
    e.preventDefault();

    if (!formDetails.firstName || !formDetails.email || !formDetails.message) {
      setStatus({ success: false, message: 'Please fill in all required fields.' });
      return;
    }

    setButtonText("Sending...");
    setLoading(true); // Start loading

    try {
      const response = await fetch('http://localhost:5001/api/contact/send', { // Ensure the correct API endpoint
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formDetails) // Send form data to backend
      });

      const result = await response.json();

      if (result.success) {
        setStatus({ success: true, message: 'Message saved successfully' });
        setFormDetails(formInitialDetails); // Clear form fields
      } else {
        setStatus({ success: false, message: 'Failed to save message.' });
      }
    } catch (error) {
      console.error("Error saving form data:", error);
      setStatus({ success: false, message: 'Something went wrong. Please try again later.' });
    } finally {
      setButtonText("Send");
      setLoading(false); // Stop loading
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us" />
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>Get In Touch</h2>
                  <form ref={form} id="contact-form" onSubmit={sendFormData}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.firstName}
                          placeholder="First Name"
                          onChange={(e) => onFormUpdate('firstName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          value={formDetails.lastName}
                          placeholder="Last Name"
                          onChange={(e) => onFormUpdate('lastName', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={(e) => onFormUpdate('email', e.target.value)}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formDetails.phone}
                          placeholder="Phone No."
                          onChange={(e) => onFormUpdate('phone', e.target.value)}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={(e) => onFormUpdate('message', e.target.value)}
                        ></textarea>
                        <button type="submit">
                          {loading ? <Spinner animation="border" /> : <span>{buttonText}</span>}
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};