module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  //TODO 変更されているのは確認できたので、github pageでソース確認
  // touch out/.nojekyll で_のファイルを読めるようにしないといけない
  assetPrefix: '/nabekura_website'
};
