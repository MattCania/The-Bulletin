import express from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import cors from 'cors'


const app = express()

app.use(express.json()) 
app.use(hpp())
app.use(helmet())
app.use(cors());

app.get("/", (req, res) => {
	console.log("Called Default")
	res.json({message: "Hello"})
})

app.post('/login', (req, res) => {

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

app.listen(5000, ()=> {
	console.log("Server Running on Port 5000")
})