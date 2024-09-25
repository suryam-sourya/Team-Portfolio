import React, { useState } from 'react';
import { Container, Row, Col, Card, Button, Modal } from 'react-bootstrap';
import './Pricing.css'; // Add custom CSS for attractive design

const Pricing = () => {
  // State to control the modal visibility
  const [showModal, setShowModal] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState({});

  // Plan details for different types of websites
  const planDetails = {
    Informative: {
      Alpha: ['Single page website', 'Quarterly maintenance for 1 year', 'Free deployment - 1 time'],
      Beta: ['Three-page website', 'Two months Domain', 'Quarterly updates + maintenance'],
      Gamma: ['Up to 5 pages website', 'Six months Domain', 'Monthly maintenance + updates'],
    },
    Ecommerce: {
      Alpha: ['Basic E-commerce setup', 'Payment integration', 'Free deployment - 1 time'],
      Beta: ['Medium E-commerce setup', 'Two months support', 'Quarterly updates + maintenance'],
      Gamma: ['Advanced E-commerce setup', 'Six months support', 'Monthly updates + maintenance'],
    },
    Business: {
      Alpha: ['Single page business site', 'Quarterly maintenance for 1 year', 'Free deployment - 1 time'],
      Beta: ['Multi-page business site', 'Two months Domain', 'Quarterly updates + maintenance'],
      Gamma: ['Full business solution', 'Six months Domain', 'Monthly updates + maintenance'],
    },
    // Add more types of websites (Blog, Portfolio, Event, Personal, Membership, Nonprofit) here
  };

  // Handle opening and closing modal
  const handleOpenModal = (websiteType, planName, price) => {
    setSelectedPlan({
      planName,
      details: planDetails[websiteType][planName],
      price,
    });
    setShowModal(true);
  };

  const handleCloseModal = () => setShowModal(false);

  // Create a reusable plan card for each type and package
  const SubscriptionCard = React.memo(({ websiteType, planName, months, price }) => (
    <Col md={4} className="mb-4">
      <Card
        className={`pricing-card ${planName.toLowerCase()}`}
        onClick={() => handleOpenModal(websiteType, planName, price)}
      >
        <Card.Body>
          <Card.Title className="text-center">{planName} Package</Card.Title>
          <Card.Text className="text-center">{months} Months</Card.Text>
          <h3 className="text-center">${price}</h3>
          <div className="text-center">
            <Button variant="primary" className="buy-btn">
              Buy
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  ));

  const renderPlanSection = (websiteType, plans) => (
    <>
      <h3 className="subheading">{websiteType} Website</h3>
      <Row>
        {Object.keys(plans).map((planName) => (
          <SubscriptionCard
            key={`${websiteType}-${planName}`}
            websiteType={websiteType}
            planName={planName}
            months={planName === 'Alpha' ? 3 : planName === 'Beta' ? 6 : 12}
            price={planName === 'Alpha' ? (websiteType === 'Ecommerce' ? 199 : 99) : planName === 'Beta' ? (websiteType === 'Ecommerce' ? 349 : 179) : (websiteType === 'Ecommerce' ? 499 : 299)}
          />
        ))}
      </Row>
    </>
  );

  return (
    <section className="pricing-section">
      <Container>
        <h1 className="text-center mb-4">Subscribing Plans</h1>

        {/* Render sections for all website types */}
        {Object.keys(planDetails).map((websiteType) =>
          renderPlanSection(websiteType, planDetails[websiteType])
        )}

        {/* Modal for Package Details */}
        <Modal show={showModal} onHide={handleCloseModal} centered>
          <Modal.Header closeButton className="modal-header-custom">
            <Modal.Title className="modal-title-custom">
              {selectedPlan.planName} Package Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="modal-body-custom text-center">
            <h4 className="package-title">{selectedPlan.planName} Package</h4>
            <ul className="package-details">
              {selectedPlan.details?.map((detail, index) => (
                <li key={index}>
                  <i className="fas fa-check-circle"></i> {detail}
                </li>
              ))}
            </ul>
            <h5 className="package-price">
              Price: <span>${selectedPlan.price}</span>
            </h5>
          </Modal.Body>
          <Modal.Footer className="modal-footer-custom">
            <Button variant="primary" onClick={handleCloseModal} className="close-btn-custom">
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>
    </section>
  );
};

export default Pricing;
