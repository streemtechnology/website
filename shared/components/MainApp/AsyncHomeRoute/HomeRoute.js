import React from "react";

import Col from "react-bootstrap/lib/Col";
import Row from "react-bootstrap/lib/Row";
import Grid from "react-bootstrap/lib/Grid";

function HomeRoute() {
  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-content-inner">
            <h1>ADAPTIVE LATENCY AND BANDWIDTH OPTIMISATION</h1>
            <p>ADAPTIVE LATENCY AND BANDWIDTH OPTIMISATION</p>
            <a href="/about" className="btn btn-primary btn-xl page-scroll">
              Find Out More
            </a>
          </div>
        </div>
      </header>

      <section className="bg-primary" id="about">
        <Grid>
          <Row>
            <Col md={3} className="text-center">
              <h2 className="section-heading">
                NEW VIDEO TECH ISN'T READY FOR STREAMING.
              </h2>
            </Col>
          </Row>

          <Row>
            <Col md={3} className="text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
                <h3>Latency</h3>
                <p className="text-faded">
                  Wired and wireless networks are capacity-constrained. 4K UHD
                  VR video uses 30-40 Mbps, yet even the best fiber-optic,
                  DOCSIS 3.x, 4G+/5G networks can only achieve ~20 Mbps.
                  Emergent technogolgies such as VR and autonomous vehicles are
                  putting more pressure on these capacity-restricted networks,
                  and making them more expensive to manage and maintain.
                </p>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
                <h3>Resolution Demand</h3>
                <p className="text-faded">
                  As resolutions, such as 360 VR, 4K, 6k and 8k resolutions
                  start to be used, tools need to be used to reduce the pressure
                  on networks and improve the end user's experience. These
                  formats need to work on today's viewing devices, over existing
                  telecoms networks, without sacrificing quality.
                </p>
              </div>
            </Col>
            <Col md={3} className="text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
                <h3>Poor UX</h3>
                <p className="text-faded">
                  Nothing's worse for a user than firing up a new device, only
                  to find the network can't handle the demands of the streamed
                  data. AR and VR require hude file sizes and on an untethered
                  device users are left waiting for visuals to load, resulting
                  in nausea and sub-par experience. Excessive bandwidth and
                  latency can be the difference between a satisfied user and a
                  disgruntled one.
                </p>
              </div>
            </Col>
            <Col md={3}>
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />

                <h3>Critical Path Technologies</h3>
                <p className="text-faded">
                  Increasingly, newer technologies are relying on live video
                  data to tell operators about their environment and use cloud
                  computing to make decisions about how to act. Even at the
                  edge, the time it takes to process a high definition video can
                  be critical. Our adaptive algorithms will ensure the
                  essential, critical-path data, will be sent at the best
                  resolution while reducing bandwidth and optimising against
                  latency for the less important pieces.
                </p>
              </div>
            </Col>
          </Row>
        </Grid>
      </section>
    </div>
  );
}

export default HomeRoute;
