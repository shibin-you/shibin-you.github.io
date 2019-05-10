# webpack结合koa实现自动刷新

在我们开发的过程中，我们会使用```webpack-dev-server```实现自动刷新，```webpack-dev-server```会把编译后的文件全部保存在内存里，而不会写入到文件目录内。但当我们的开发是前端和后端在一个项目里的时候就不行了。我们可以除了可以使用webpack结合express实现自动编译刷新，还可以使用webpack结合koa实现自动编译刷新


* 配置webpack

首先就是配置webpack的配置。新建一个```webpack.config.js```文件
```js
const path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: {
    main: ['./src/main.js']
  },
  mode: 'development',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'js/[name].js',
    publicPath: '/'
  },
  resolve: {
    extensions: ['.js']
  }
}
```
这里和我们平常使用webpack的配置一样


* 下面编写服务端koa代码
这里我们用到了```koa-webpack```这个模块，我们无需再设置```koa-webpack-middleware```，使用起来非常简单
```js
const Koa = require('koa')
const serve = require('koa-static')
const webpack = require('webpack')
const config = require('./webpack.config.js')
const koaWebpack = require('koa-webpack')
const {
  resolve
} = require('path')

const app = new Koa()
const port = process.env.PORT || 3000

async function start() {
  const compiler = webpack(config)
  try {
    const middleware = await koaWebpack({
      compiler
    })
    app.use(middleware)
    app.use(serve(resolve(__dirname, './public')))
    app.listen(3000)
  } catch (e) {
    console.log(e)
  }
}
start()

```
这样，我们在开发的时候，前端和后端都在同一个服务里运行了
