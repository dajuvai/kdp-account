module.exports = {
  type: 'react-app',
  babel: {
    "plugins": [
      ["import", { "libraryName": "antd", "libraryDirectory": "es", "style": "css" }] // `style: true` for less
    ]
  },
  devServer: {
    proxy: {
      '/api': 'http://localhost:7070'
    }
  }
};
