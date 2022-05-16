const express = require('express')
const bodyParser = require('body-parser')
// corsポリシーに抵触するため、その対策としてcorsを利用する
const cors = require('cors')
const app = express()
const fs = require('fs')
const endpoints = require('./endpoints')

app.use(bodyParser.json())
app.use(cors())

endpoints.declareEndpoints(app);

app.listen(process.env.PORT || 3000)