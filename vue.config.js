module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/sdvx/'
    : '/',
  outputDir: 'docs',
  devServer: {
    port: 8888,
    host: "0.0.0.0",
    disableHostCheck: true,
    proxy: {
      "/api/": {
        target: "https://nearnoah.net/",
      }
    }
  },
  transpileDependencies: [
    "vuetify"
  ],
}