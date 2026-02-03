const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/twitter', (req, res) => {
  res.send('bhavyaztwt')
})

app.get('/login', (req, res)=> {
  res.send('<h1> login at bhavyaztwt</h1>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
 