// require needed modules
let app = require('express')()

// Middleware, settings
// app.set('view engine', 'ejs')

// Routes
app.get('/', (req, res) => {
  res.send('STUB - HOME')
})

// Listen!
app.listen(3000)
