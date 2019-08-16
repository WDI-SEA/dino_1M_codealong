let db = require('../models')

db.dino.bulkCreate([{
  name: 'Littlefoot',
  type: 'Apatosaurus'
}, {
  name: 'Spike',
  type: 'Stegasaurus'
}])
.then((createdData) => {
  console.log('Yay, done!')
})
.catch(err => {
  console.log('Oh no, didnt work :(', err)
})
.finally(() => {
  process.exit()
})
