
// fsとpathを読み込んでない場合は先頭に追記
const fs = require('fs');

module.exports = {
  // ここから
  server: {
    https: {
      key: fs.readFileSync('./certificates/localhost+1-key.pem'),
      cert: fs.readFileSync('./certificates/localhost+1.pem'),
    },
  },
  // ここまで
}

