module.exports = {
  presets: [
    '@vue/cli-plugin-babel/preset',
  ],
  env: {
    lib: {
      presets: [
        ['@vue/cli-plugin-babel/preset', {
          useBuiltIns: false,
        }],
      ],
    },
  },
};
