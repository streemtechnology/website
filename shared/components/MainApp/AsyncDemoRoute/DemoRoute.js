import React from "react";
import Helmet from "react-helmet";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

function DemoRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>Demo</title>
      </Helmet>
      <Row>
        <Col md={12}>
          <p>We're stil finalising demos for each of our technologies.</p>
          <p>
            Please <a href="/contact">get in touch</a> for more information
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default DemoRoute;
