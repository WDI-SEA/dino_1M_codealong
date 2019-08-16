// require needed modules
let express = require('express')
let app = express()
let db = require('./models')

// Middleware, settings
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

// Controller
app.use('/dinos', require('./controllers/dinos'))
app.use('/outfits', require('./controllers/outfits'))

// Routes
app.get('/', (req, res) => {
  db.dino.findAll()
  .then(dinosArr => {
    res.render('home', { dinosArr })
  })
  .catch(err => {
    console.log(err)
    res.send('An error happened')
  })
})

// Listen!
app.listen(3000)
