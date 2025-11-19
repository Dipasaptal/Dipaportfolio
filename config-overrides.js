module.exports = function override(config, env) {
  // Add PDF to asset handling
  config.module.rules.push({
    test: /\.(pdf)$/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: '[name].[ext]',
        },
      },
    ],
  });
  return config;
};