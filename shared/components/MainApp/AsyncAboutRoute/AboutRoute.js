import React from "react";
import Helmet from "react-helmet";
import Remarkable from "remarkable";

function AboutRoute() {
  const md = new Remarkable();

  return (
    <div>
      <Helmet>
        <title>About</title>
      </Helmet>

      <h2>Latency Reduction</h2>
      <p>
        There have been numerous studies about the effect on latency on user
        experience and the potential loss in revenue.
      </p>

      <h2>Bandwidth Reduction</h2>
      <p />
    </div>
  );
}

export default AboutRoute;
