import React from "react";

function HomeRoute() {
  return (
    <div>
      <header>
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading">LOW LATENCY LIVE VIDEO STREAMING</h1>
            <p>LOW LATENCY LIVE VIDEO STREAMING</p>
            <a href="/about" className="btn btn-primary btn-xl page-scroll">
              Find Out More
            </a>
          </div>
        </div>
      </header>

      <section className="bg-primary" id="about">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-lg-offset-2 text-center">
              <h2 className="section-heading">
                NEW VIDEO TECH ISN'T READY FOR STREAMING.
              </h2>
            </div>
            <div className="col-lg-4 col-md-8 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
                <h3>Latency</h3>
                <p className="text-faded">
                  {" "}Wired and wireless networks are capacity-constrained. 4K
                  UHD VR video uses 30-40 Mbps, yet even the best
                  fiber-optic, DOCSIS 3.x, 4G+/5G networks can only achieve ~20
                  Mbps. This will only get worse as newer VR camera rigs output
                  more demanding VR video streams such as 6K or 8K.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
                <h3>Resolution Demand</h3>
                <p className="text-faded">
                  {" "}To achieve the fully immersive experience that 360 VR,
                  4K, 6K and even 8K resolution can bring, there is a lot of
                  work to be done to make these formats functional on the
                  hardware capacity of today's viewing devices and existing
                  telecoms network bandwidth speeds, without sacrificing
                  quality.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-8 text-center">
              <div className="service-box">
                <i className="fa fa-4x fa-newspaper-o text-primary sr-icons" />
                <h3>Poor UX</h3>
                <p className="text-faded">
                  {" "}Due to huge file sizes and streaming demands, existing
                  360 VR and high resolution video can only be played on wired
                  headsets with in-built processing power. For the web, and for
                  untethered headsets, videos are pixellated, suffer huge
                  buffering and startup delays, and have streaming latency
                  causing nausea. This causes poor experience.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomeRoute;
