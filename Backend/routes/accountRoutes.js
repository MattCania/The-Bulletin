import express from 'express'

import accountHandler from '../controllers/accountController.js'

const router = express.Router()

router.post('/register', accountHandler.registerAccount)
router.post('/login', accountHandler.loginAccount)

router.post

export default router

