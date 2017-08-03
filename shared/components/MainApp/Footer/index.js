import React from "react";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";
import Grid from "react-bootstrap/lib/Grid";

function Footer() {
  return (
    <footer className="footer">
      <aside className="bg-dark">
        <Grid>
          <Row>
            <Col lg={3} md={6} className="text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-diamond text-primary sr-icons" />
                <h3>Streem</h3>
                <p className="text-muted" />
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center">
              <div className="service-box">
                <h3>Links</h3>
                <p className="text-muted" />
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center">
              <div className="service-box">
                <h3>About</h3>
                <p className="text-muted" />
              </div>
            </Col>
            <Col lg={3} md={6} className="text-center">
              <div className="service-box">
                <h3>Social</h3>
                <p className="text-muted" />
              </div>
            </Col>
          </Row>
        </Grid>
      </aside>
    </footer>
  );
}

export default Footer;
