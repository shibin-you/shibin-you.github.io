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
app.use(router)


app.listen(port, () => {
  console.log(`Server listening on http://localhost:${port}, Ctrl+C to stop`)
})
