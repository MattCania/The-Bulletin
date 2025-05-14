import dotenv from 'dotenv'
import express, { response } from 'express'
import helmet from 'helmet'
import hpp from 'hpp'
import cors from 'cors'
import initializeApp from './utils/databaseSetup.js'

dotenv.config()
const app = express()

app.use(express.json()) 
app.use(hpp())
app.use(helmet())
app.use(cors());

initializeApp()

app.listen(5000, ()=> {
	console.log("Server Running on Port 5000")
})