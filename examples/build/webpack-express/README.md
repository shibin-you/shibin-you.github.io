# webpack结合express实现自动刷新

在我们开发的过程中，我们会使用```webpack-dev-server```实现自动刷新，```webpack-dev-server```会把编译后的文件全部保存在内存里，而不会写入到文件目录内。但当我们的开发是前端和后端在一个项目里的时候就不行了。我们可以使用webpack结合express实现自动编译刷新

* 配置webpack

首先就是配置webpack的配置。新建一个```webpack.config.js```文件
```js
const path = require('path')
const webpack = require('webpack')
var hotMiddlewareScript = 'webpack-hot-middleware/client'

module.exports = {
  entry: {
    main: ['./src/main.js', hotMiddlewareScript]
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}
```
我们这里需要关注的是，每个```entry```后都要增加一个```hotMiddlewareScript```，还有就是增加3个插件

首先新建一个```webpack.middleware```文件，这里我们需要用到```webpack-dev-middleware```和 ```webpack-hot-middleware```两个中间件。
``` js

const webpack = require('webpack')
const webpackDevMiddleware = require('webpack-dev-middleware')
const webpackHotMiddleware = require('webpack-hot-middleware')
const webpackConfig = require('./webpack.config')

module.exports = app => {
  let compiler = webpack(webpackConfig)

  app.use(webpackDevMiddleware(compiler, {
    publicPath: '/',
    stats: {
      colors: true,
      chunks: false
    }
  }))
  app.use(webpackHotMiddleware(compiler))  
}

```
注意：```webpack-dev-middleware```和```webpack-hot-middleware```的静态资源服务仅仅用于开发环境。到了生产环境，应该使用```express.static()```。

* 下面编写express代码
```js
const express = require('express')
const bodyParser = require('body-parser')
const {resolve} = require('path')
const webpackMiddleware=require('./webpack.middleware')

const router = express.Router()
const app=express()
const port = process.env.PORT || 3000

webpackMiddleware(app)

app.use(express.static(resolve(__dirname,'./public')))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// ...代码

app.use(router)


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})

```
这样，我们在开发的时候，前端和后端都在同一个服务里运行了
