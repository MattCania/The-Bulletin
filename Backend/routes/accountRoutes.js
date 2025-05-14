import express from 'express'

const router = express.Router()

post('/login', (req, res) => {

	const {email, password} = req.body;

	if (!email) {
		console.log("Please enter a valid Email")
		res.json({message: "Please enter a valid email"})
	}
	if (!password){
		console.log("Please enter a valid password")
		res.json({message: "Please enter a valid password"})
	}
  res.json({ message: "Successful Log In" });
})

export default router

