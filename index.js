// require needed modules
let express = require('express')
let app = express()
let db = require('./models')

// Middleware, settings
app.set('view engine', 'ejs')
app.use(express.urlencoded({ extended: false }))

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

app.get('/new', (req, res) => {
  res.render('new')
})

app.get('/:id', (req, res) => {
  if (parseInt(req.params.id)) {
    db.dino.findByPk(req.params.id)
    .then(foundDino => {
      res.render('show', { foundDino })
    })
    .catch(err => {
      console.log(err)
      res.send('An error happened')
    })
  }
  else {
    res.send('Something went wrong')
  }
})

app.post('/dinos', (req, res) => {
  db.dino.create(req.body)
  .then(createdDino => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.send('Uh oh sorry')
  })
})

// Listen!
app.listen(3000)
