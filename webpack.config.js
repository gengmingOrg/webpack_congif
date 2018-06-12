
const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
var con = {
  entry: {
    main: './src/script/main.js',
    main0: './src/script/main0.js',
    main1: './src/script/main1.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist/js'),
    // [name] 表示的是entry的名字[hash]表示加上hsah值 来区分生成的文件名称
    filename: 'bundle_[name].js',
  },
  plugins: [

    new htmlWebpackPlugin({
      //这是要输出的模版的地址
      filename: '../../indexoutput2.html',
      //这是要合并的页面
      template: 'index.html',
      //引进的 头部
      inject: 'head',
      //要引进的entry
      chunks: ['main', 'main0', 'main1'],
      //excludeChunks:[]
      title: '2'
    }),
  ]
}
module.exports = con
