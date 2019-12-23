

module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/vue-h-dialog/' : '',
  lintOnSave: false,
  runtimeCompiler: true,
  chainWebpack: (config) => {
    config.module
      .rule('md')
      .test(/\.md$/)
        .use('raw-loader')
          .loader('raw-loader')
          .end()
  },
};
