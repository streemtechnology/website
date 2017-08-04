import React from "react";
import Helmet from "react-helmet";

import Row from "react-bootstrap/lib/Row";
import Col from "react-bootstrap/lib/Col";

function TechnologyRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>Technology</title>
      </Helmet>

      <Row>
        <Col md={12}>
          <h1>Adaptive Bandwidth Optimisation</h1>
          <p>
            Using the latest developments in Artificial Intelligence and Deep
            Learning, our bandwidth optimisation methods adapt to each user's
            needs. The more data that is optimised the more tailored the
            algorithms become.
          </p>
          <p>
            For AR and VR, this means streams will shift and adapt to reduce
            bandwidth as the user moves around and interacts with their
            environment.
          </p>
          <p>
            For video-on-demand (VOD), this means the content is adapted to suit
            the changing network and the changing video content. We take a
            scene-by-scene approach to analyse and determine the optimum
            resolution for each scene based on the bandwidth requirements. As
            the video is sent, we collect data about network load, latency and
            bandwidth consumption, and feed this data back into our models to
            improve them for the next video. In this way, we are able to reduce
            bandwidth for VOD by up to 70%.
          </p>
          <p>
            Autonomous vehicles and drones send a steady stream of data back to
            data centres to interact with and make decisions about their
            environment. A continuous stream of HD video results in massive
            bandwidth consumption. To mitigate this, many vendors are either
            building their own fibre networks (at massive cost) or spending
            enormous amounts on high-quality networks that are often not as
            reliable as they should be. Our algorithms are able to adapt to
            changing video feeds and determine what you should be sent in HD and
            what can be reduced. This happens in realtime, so any vehicle or
            drone can have adaptive video streaming onboard to reduce bandwidth
            as they stream data.
          </p>
        </Col>
      </Row>
    </section>
  );
}

export default TechnologyRoute;
