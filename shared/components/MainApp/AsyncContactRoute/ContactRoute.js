import React from "react";
import Helmet from "react-helmet";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

function ContactRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Row>
        <Col md={6}>
          <a
            href="mailto:info@streemtechnologies.com"
            title="contact-us"
            className="btn btn-default"
          >
            Email Us
          </a>
        </Col>
        <Col md={6}>Tel: +447952154417</Col>
      </Row>
    </section>
  );
}

export default ContactRoute;
