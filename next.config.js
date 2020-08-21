module.exports = {
  webpack: (config) => {
    config.node = {
      fs: 'empty'
    }
    return config
  },
  // assetPrefixでルートの変更
  // nojekyllファイル（空）を表示ルート（static配下）に置く
  // でgithub pages 表示完了

  // TODO local/dev でつけるつけない分けるようにする
  // assetPrefix: '/nabekura_website'
};
