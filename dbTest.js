let db = require('./models')

db.dino.create({
  name: 'Petrie',
  type: 'Pterodactyl'
})
.then((createdData) => {
  console.log('Yay, done!')
})
.catch(err => {
  console.log('Oh no, didnt work :(', err)
})
.finally(() => {
  process.exit()
})
