/**
 * Project Configuration.
 *
 * NOTE: All file/folder paths should be relative to the project root. The
 * absolute paths should be resolved during runtime by our build internal/server.
 */

import * as EnvVars from "./utils/envVars";

const values = {
  clientConfigFilter: {
    welcomeMessage: true,

    serviceWorker: {
      enabled: true
    },

    polyfillIO: true,
    htmlPage: true
  },

  host: EnvVars.string("HOST", "0.0.0.0"),
  port: EnvVars.number("PORT", 1337),

  clientDevServerPort: EnvVars.number("CLIENT_DEV_PORT", 7331),
  welcomeMessage: EnvVars.string("WELCOME_MSG", "Hello world!"),
  disableSSR: false,
  browserCacheMaxAge: "365d",

  polyfillIO: {
    enabled: true,
    url: "//cdn.polyfill.io/v2/polyfill.min.js",
    features: ["default", "es6"]
  },

  htmlPage: {
    titleTemplate: "Streem Technologies",
    defaultTitle: "Streem Technologies",
    description:
      "Streem Technologies builds tools for latency and bandwidth reduction for live and on demand data."
  },

  cspExtensions: {
    childSrc: [],
    connectSrc: [],
    defaultSrc: [],
    fontSrc: ["fonts.googleapis.com/css", "fonts.gstatic.com"],
    imgSrc: [],
    mediaSrc: [],
    manifestSrc: [],
    objectSrc: [],
    scriptSrc: ["cdn.polyfill.io"],
    styleSrc: [
      "cdn.rawgit.com/milligram/milligram/master/dist/milligram.min.css",
      "fonts.googleapis.com/css"
    ]
  },

  publicAssetsPath: "./public",
  buildOutputPath: "./build",
  includeSourceMapsForOptimisedClientBundle: false,
  bundleSrcTypes: ["js", "jsx", "json"],
  bundleAssetsFileName: "assets.json",
  nodeExternalsFileTypeWhitelist: [
    /\.(eot|woff|woff2|ttf|otf)$/,
    /\.(svg|png|jpg|jpeg|gif|ico)$/,
    /\.(mp4|mp3|ogg|swf|webp)$/,
    /\.(css|scss|sass|sss|less)$/
  ],

  serviceWorker: {
    enabled: true,
    fileName: "sw.js",
    includePublicAssets: ["./**/*"],
    offlinePageFileName: "offline.html"
  },

  bundles: {
    client: {
      srcEntryFile: "./client/index.js",
      srcPaths: ["./client", "./shared", "./config"],

      outputPath: "./build/client",
      webPath: "/client/",
      devVendorDLL: {
        enabled: true,
        include: [
          "react-async-component",
          "react",
          "react-dom",
          "react-helmet",
          "react-router-dom"
        ],

        name: "__dev_vendor_dll__"
      }
    },

    server: {
      srcEntryFile: "./server/index.js",
      srcPaths: ["./server", "./shared", "./config"],
      outputPath: "./build/server"
    }
  },

  additionalNodeBundles: {
    /*
    apiServer: {
      srcEntryFile: './api/index.js',
      srcPaths: [
        './api',
        './shared',
        './config',
      ],
      outputPath: './build/api',
    }
    */
  },

  plugins: {
    babelConfig: (babelConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;
      return babelConfig;
    },

    webpackConfig: (webpackConfig, buildOptions) => {
      // eslint-disable-next-line no-unused-vars
      const { target, mode } = buildOptions;

      // Example:
      /*
      if (target === 'server' && mode === 'development') {
        webpackConfig.plugins.push(new MyCoolWebpackPlugin());
      }
      */

      // Debugging/Logging Example:
      /*
      if (target === 'server') {
        console.log(JSON.stringify(webpackConfig, null, 4));
      }
      */

      return webpackConfig;
    }
  }
};

if (process.env.BUILD_FLAG_IS_CLIENT === "true") {
  throw new Error(
    "You shouldn't be importing the `<projectroot>/config/values.js` directly into code that will be included in your 'client' bundle as the configuration object will be sent to user's browsers. This could be a security risk! Instead, use the `config` helper function located at `<projectroot>/config/index.js`."
  );
}

export default values;
