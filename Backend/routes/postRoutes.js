import express from 'express'

import contentHandler from '../controllers/postController.js'

const router = express.Router()

router.post("/post_content", contentHandler.postContent)

// router.put('/edit_content', (req, res) => {
	
// })

// router.delete('/delete_content', (req, res) => {

// })

export default router 