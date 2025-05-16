import BlogPosts from '../models/blogPosts.js'

async function postContent (req, res) {
	console.log("Uploading Content")
	const {title, content, userId, username} = req.body;

	try {
		const postResult = await BlogPosts.create({
			accountId: userId,
			blogTitle: title,
			blogContent: content,
			blogImage: null,
			author: username
		})

		if (!postResult) {
			throw new Error("Error Uploading Blog")
		}

		res.status(200).json({message: "Blog Upload Successful!"})
		console.log("Uploading Successful")
		

	} catch (error) {
		console.log("Uploading Unsuccessful")
		res.status(500).json({error: error.message})
	}
}

export default {
	postContent
}