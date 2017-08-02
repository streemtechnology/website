import React from 'react';

function Footer() {
    return (
        <footer className="footer">
          <aside className="bg-dark">
            <div className="container">
              <div className="row">
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box">
                    <i className="fa fa-4x fa-diamond text-primary sr-icons"></i>
                    <h3>Streem</h3>
                    <p className="text-muted"> </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box">

                    <h3>Links</h3>
                    <p className="text-muted"> </p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box">

                    <h3>About</h3>
                    <p className="text-muted"></p>
                  </div>
                </div>
                <div className="col-lg-3 col-md-6 text-center">
                  <div className="service-box">

                    <h3>Social</h3>
                    <p className="text-muted"> </p>
                  </div>
                </div>
              </div>
            </div>
          </aside>

        </footer>

    );
}

export default Footer;
