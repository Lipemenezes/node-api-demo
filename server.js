const app = require('express')()
require('express-async-errors')
const bodyParser = require('body-parser')
const productRoutes = require('./app/routes/products')
const mongoose = require('mongoose')

const connectDb = () => {
  mongoose.connect('mongodb://localhost:27017/senac_db')
  console.info('Connected to DB')
}

connectDb()

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use('/products', productRoutes)

app.get('/', (req, res) => {
  return res.send('Hello World!')
})

app.use(function (err, req, res, next) {
  console.error(err.stack)
  res.status(500).json({ error: 'Internal Server Error' })
})

const port = 3000

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
