
const express = require('express')
const router = express.Router()

const homeController = require('../controllers/homeController')

router.get('/', homeController.index)

router.post('/create', homeController.create)

router.get('/delete/:id', homeController.deleteProfile)

router.get('/edit/:id', homeController.editProfile)

router.post('/update/:id', homeController.updateProfile)



module.exports = router

