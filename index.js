const express = require('express')
const app = express()
const parser = require('body-parser')

const coins = require('./Routes/coinsRoutes.js')
const market = require('./Routes/marketRoutes.js')
const global = require('./Routes/globalRoutes.js')







app.use(parser.urlencoded({extended: true}))
app.use(parser.json())

app.use('/api/coins', coins)
app.use('/api/market', market)
app.use('/api/global', global)


app.listen(4000, () => console.log('listening on port 3000'))
