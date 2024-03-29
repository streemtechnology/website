import "normalize.css/normalize.css";

import React from "react";
import Switch from "react-router-dom/Switch";
import Route from "react-router-dom/Route";
import Helmet from "react-helmet";

import config from "../../../config";

import Error404 from "./Error404";
import Header from "./Header";
import Footer from "./Footer";

import AsyncHomeRoute from "./AsyncHomeRoute";
import AsyncAboutRoute from "./AsyncAboutRoute";
import AsyncTechnologyRoute from "./AsyncTechnologyRoute";
import AsyncDemoRoute from "./AsyncDemoRoute";
import AsyncContactRoute from "./AsyncContactRoute";

function MainApp() {
  return (
    <div>
      <Helmet>
        <html lang="en" />
        <title>
          {config("htmlPage.defaultTitle")}
        </title>
        <meta
          name="application-name"
          content={config("htmlPage.defaultTitle")}
        />
        <meta name="description" content={config("htmlPage.description")} />
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="msapplication-TileColor" content="#2b2b2b" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/mstile-144x144.png"
        />
        <meta name="theme-color" content="#2b2b2b" />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="152x152"
          href="/favicons/apple-touch-icon-152x152.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="144x144"
          href="/favicons/apple-touch-icon-144x144.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="120x120"
          href="/favicons/apple-touch-icon-120x120.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="114x114"
          href="/favicons/apple-touch-icon-114x114.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="76x76"
          href="/favicons/apple-touch-icon-76x76.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="72x72"
          href="/favicons/apple-touch-icon-72x72.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="57x57"
          href="/favicons/apple-touch-icon-57x57.png"
        />
        <link
          rel="apple-touch-icon-precomposed"
          sizes="60x60"
          href="/favicons/apple-touch-icon-60x60.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon-180x180.png"
        />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#00a9d9"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-196x196.png"
          sizes="196x196"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-128.png"
          sizes="128x128"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-96x96.png"
          sizes="96x96"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicons/favicon-32x32.png"
          sizes="32x32"
        />
        <link rel="icon" sizes="16x16 32x32" href="/favicon.ico" />
        <meta name="msapplication-TileColor" content="#2b2b2b" />
        <meta
          name="msapplication-TileImage"
          content="/favicons/mstile-144x144.png"
        />
        <meta
          name="msapplication-square70x70logo"
          content="/favicons/mstile-70x70.png"
        />
        <meta
          name="msapplication-square150x150logo"
          content="/favicons/mstile-150x150.png"
        />
        <meta
          name="msapplication-wide310x150logo"
          content="/favicons/mstile-310x150.png"
        />
        <meta
          name="msapplication-square310x310logo"
          content="/favicons/mstile-310x310.png"
        />
        <link rel="manifest" href="/manifest.json" />

        <link href="vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link
          href="vendor/font-awesome/css/font-awesome.min.css"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,300,600,700,800"
          rel="stylesheet"
          type="text/css"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Merriweather:400,300,300italic,400italic,700,700italic,900,900italic"
          rel="stylesheet"
          type="text/css"
        />

        <link rel="stylesheet" href="/css/creative.css" />
      </Helmet>
      <Header />
      <div>
        <Switch>
          <Route exact path="/" component={AsyncHomeRoute} />
          <Route path="/about" component={AsyncAboutRoute} />
          <Route path="/technology" component={AsyncTechnologyRoute} />
          <Route path="/contact" component={AsyncContactRoute} />
          <Route path="/demo" component={AsyncDemoRoute} />
          <Route component={Error404} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default MainApp;
