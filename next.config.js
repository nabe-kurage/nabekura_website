const withSass = require('@zeit/next-sass')

// SCSS
module.exports = withSass({
  cssModules: true
})

module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  }
};
