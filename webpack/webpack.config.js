
const path = require('path'); // node核心模块，专门用来处理路径问题

module.exports = {
  //入口
  entry: "./src/main.js", //相对路径
  // 输出
  output: {
    // 文件输出路径
    // __dirname node.js的变量，代表当前文件的文件夹目录
    path: path.resolve(__dirname, 'dist'),// 绝对路径
    // 文件名
    filename: 'main.js'
  },
  // 加载器
  module: {
    rules: [
      {
        test: /\.css$/,//正则只检测 .css 后缀的文件
        // 这里还可以使用loader，但是只能加载一个loader，如果像下面多个的形式还是要使用use数组形式
        use: [
          // 执行顺序，从右到左（从下到上）
          'style-loader', // 将js中css通过创建style标签添加html文件中生效
          'css-loader'// 将css资源编译成commonJs的模块到js中
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        type: 'asset',
        parser: {
          dataUrlCondition: { //图片小于多少进行转换
            maxSize: 10 * 1024 // 10kb
          }
        },
        generator: {// 图片输出文件路径
          filename: 'images/[hash:10][ext][query]'
        }
      },
      {
        test: /\.(ttf|woff2?)$/,
        type: 'asset/resource',
        generator: {// 图片输出文件路径
          filename: 'media/[hash:10][ext][query]'
        }
      }
    ]
  },
  // 插件
  plugins: [

  ],
  // 模式
  mode: 'development'
}
