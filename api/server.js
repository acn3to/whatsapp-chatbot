const express = require('express')
const app = express()
require('dotenv').config()

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
  res.send('Home page!')
})

app.get('*', (req, res) => {
  res.send('Page not found')
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})
