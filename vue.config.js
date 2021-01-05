/* eslint-disable @typescript-eslint/camelcase */

module.exports = {
  productionSourceMap: false,
  css: {
    loaderOptions: {
      sass: {
        additionalData: `@import "~@/assets/styles/bulma.scss";`
      }
    }
  },
  pwa: {
    name: "Richard Zille | Web Developer",
    themeColor: "#009688",
    msTileColor: "#009688",
    appleMobileWebAppCapable: true,
    manifestOptions: {
      short_name: "Richard Zille",
      background_color: "#121212",
      icons: [
        {
          src: "img/android-chrome-512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        },
        {
          src: "img/android-chrome-192.png",
          sizes: "192x192",
          type: "image/png",
          purpose: "any maskable"
        }
      ]
    },
    iconPaths: {
      favicon32: "img/favicon.png",
      favicon16: null,
      appleTouchIcon: "img/apple-touch-icon.png",
      maskIcon: "img/safari-pinned-tab.svg",
      msTileImage: "img/mstile.png"
    }
  }
};
