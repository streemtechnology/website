import React from 'react';

function Header() {
  return (
            <nav id="mainNav" className="navbar navbar-default navbar-fixed-top">
              <div className="container-fluid">
                <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                    <span className="sr-only">Toggle navigation</span> Menu <i className="fa fa-bars"></i>
                  </button>
                  <a className="navbar-brand page-scroll" href="#page-top">Streem</a>
                </div>
                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <ul className="nav navbar-nav navbar-right">
                    <li>
                      <a className="page-scroll" href="#about">About</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#services">Next-Gen Video</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#portfolio">Technology</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#contact">Partners</a>
                    </li>
                    <li>
                      <a className="page-scroll" href="#demo">Demo</a>
                    </li>
                  </ul>
                </div>
              </div>
            </nav>
  );
}

export default Header;
