import React from "react";
import Helmet from "react-helmet";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

function AboutRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>About</title>
      </Helmet>

      <Row>
        <Col md={12}>
          <h1>About Us</h1>
          <p>
            Streem Technologies is building adaptive tools to reduce latency for
            live data and minimise bandwidth for a variety of high-throughput
            applications. With our technologies, we're improving existing
            services such as live video and latency reduction for gaming, while
            laying the groundwork to let emergent technologies like AR, VR and
            self-driving cars be used today.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2>Latency Reduction</h2>
          <p>
            There have been numerous studies about the effect of latency on user
            experience and the potential loss in revenue for a business.
          </p>
          <p>
            Our tools work on top on a number of protocols, including Quic/RMTP
            to minimised latency via the use of UDP.
          </p>
        </Col>
      </Row>

      <Row>
        <Col md={12}>
          <h2>Bandwidth Reduction</h2>
          <p>
            Based on the latest academic research, we are able to reduce
            bandwitdh consumption for a number of different media types. Our
            primary areas of focus are: video, Augmented and Virtual Reality
            streaming data, and video feeds from self-driving cars or autonomous
            drones. A modern VR camera puts out 6k or 8k definitions video that
            quickly fills a network to its maximum capacity. Combine this
            always-on data stream from self-driving cars and autonomous drones,
            and it's clear the networks are going to reach capacity.
          </p>
          <p>
            We are building tools to reduce bandwidth, using adaptive video
            optimisation techniques based on Deep Learning models, for these
            emergent technologies to become usable today.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default AboutRoute;
