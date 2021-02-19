module.exports = {
  future: {
    webpack5: true,
  },
  webpack: (config) => {
    config.module.rules.push(
      {
        test: /\.md$/,
        type: 'asset/source',
      }
    )

    return config
  },
}

