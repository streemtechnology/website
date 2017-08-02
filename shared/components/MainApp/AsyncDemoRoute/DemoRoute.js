import React from "react";
import Helmet from "react-helmet";

function DemoRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>Demo</title>
      </Helmet>
      See a demo below
    </section>
  );
}

export default DemoRoute;
