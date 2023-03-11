const express = require('express')
const { getContacts } = require('../controllers/contact-controller')

const router = express.Router()

router.get('/contacts', getContacts)

// app.get('/about-us', (req, res) => {
//   res.redirect('/contacts')
// })

module.exports = router
