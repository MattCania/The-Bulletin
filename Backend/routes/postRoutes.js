import express from 'express'

import contentHandler from '../controllers/postController.js'

const router = express.Router()

router.get('/fetch_posts', contentHandler.fetchPosts)
router.post('/get_likes', contentHandler.getLikes)
router.post('/like_post', contentHandler.likePost)
router.post("/post_content", contentHandler.postContent)

// router.put('/edit_content', (req, res) => {
	
// })

// router.delete('/delete_content', (req, res) => {

// })

export default router 