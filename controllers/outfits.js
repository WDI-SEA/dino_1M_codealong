const db = require('../models')
const router = require('express').Router()

router.get('/', (req, res) => {
  db.outfit.findAll()
  .then(outfits => {
    res.render('outfits/index', { outfits })
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Whoops')
  })
})

router.post('/', (req, res) => {
  db.outfit.create(req.body)
  .then(() => {
    res.redirect('/outfits')
  })
  .catch(err => {
    console.log('Error', err)
    res.send('Whoops')
  })
})

router.get('/new', (req, res) => {
  db.dino.findAll()
  .then(dinos => {
    res.render('outfits/new', { dinos })
  })
  .catch(err => {
    console.log('Oops', err)
    res.send('Something bad happened!')
  })
})

router.get('/:id', (req, res) => {
  db.outfit.findOne({
    where: { id: req.params.id },
    include: [db.dino]
  })
  .then(outfit => {
    res.render('outfits/show', { outfit })
  })
  .catch(err => {
    console.log('Oops', err)
    res.send('Something bad happened!')
  })
})

module.exports = router
