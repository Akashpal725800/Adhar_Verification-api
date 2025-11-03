import express from 'express'
import dotenv from 'dotenv'
import mongoose from "mongoose"
import Routes from './Routes/UserRoutes.js'
dotenv.config()
const app=express()
app.use(express.json())
app.use(Routes)
mongoose.connect(process.env.MONGODB_URL)
.then(()=>console.log("Database is connected successfull"))
.catch((errror)=>console.log("DB error",errror))
const port=process.env.PORT ||8000
app.listen(port,()=>console.log(`Server is runing on ${port}..`))