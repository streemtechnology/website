import React from "react";
import Helmet from "react-helmet";
import Row from "react-bootstrap/lib/Row";

function ContactRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <Row>
        <a
          href="mailto:info@streemtechnologies.com"
          title="contact-us"
          className="btn btn-default"
        >
          Contact Us
        </a>
      </Row>
    </section>
  );
}

export default ContactRoute;
