// Basic Express server with multiple routes

const express = require('express')
const app = express()
const port = 4000

// Home route
app.get('/', (req, res) => res.send('Hello World!'))

// Twitter route
app.get('/twitter', (req, res) => res.send('bhavyaztwt'))

// Login route
app.get('/login', (req, res) => res.send('<h1>Login at bhavyaztwt</h1>'))

// Start server
app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})
