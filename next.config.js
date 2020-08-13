module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  //TODO 変更されているのは確認できたので、github pageでソース確認
  // CSSファイル→/nabekura_website/_next/static
  // /nabekura_website/_next/static/css/954dcc3934232109335e.css
  // 画像ファイル→/nabekura_website/static

  assetPrefix: '/nabekura_website/docs'
};
