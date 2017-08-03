import React from "react";
import Helmet from "react-helmet";

function ContactRoute() {
  return (
    <section className="bg-primary">
      <Helmet>
        <title>Contact</title>
      </Helmet>
      <a href="mailto:info@streemtechnologies.com" title="contact-us">
        Contact Us
      </a>
    </section>
  );
}

export default ContactRoute;
