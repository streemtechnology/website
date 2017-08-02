import React from "react";
import Helmet from "react-helmet";

function AboutRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>About</title>
      </Helmet>

      <h1>About Us</h1>
      <p>
        Streem Technologies is building tools to reduce latency for live data
        and minimise bandwidth for a variety of high-throughput applications.
        With our technologies, we're improving existing services such as live
        video and latency reduction for gaming, while laying the groundwork to
        let emergent technologies like AR, VR and self-driving cars be used
        today.
      </p>

      <h2>Latency Reduction</h2>
      <p>
        There have been numerous studies about the effect on latency on user
        experience and the potential loss in revenue.
      </p>

      <h2>Bandwidth Reduction</h2>
      <p>
        Based on the latest academic research, we are able to reduce bandwitdh
        consumption for a number of different media types. Our primary areas of
        focus are: video, Augmented and Virtual Reality streaming data, and
        video feeds from self-driving cars or autonomous drones.
      </p>
    </section>
  );
}

export default AboutRoute;
