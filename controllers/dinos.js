const db = require('../models')
const router = require('express').Router()

router.post('/', (req, res) => {
  db.dino.create(req.body)
  .then(createdDino => {
    res.redirect('/')
  })
  .catch(err => {
    console.log(err)
    res.send('Uh oh sorry')
  })
})

router.get('/new', (req, res) => {
  res.render('new')
})

router.get('/:id', (req, res) => {
  if (parseInt(req.params.id)) {
    db.dino.findOne({
      where: { id: req.params.id },
      include: [db.outfit]
    })
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


module.exports = router
