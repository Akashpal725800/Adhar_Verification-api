import { adharuser, getall,updateadhar,adhardelete} from "../Controller/UserController.js"
import express from 'express'
const Routes = express.Router()
Routes.post("/api/user/adhar", adharuser)
Routes.get("/api/user/adhar/getall",getall)
Routes.put("/api/user/adhar/update/:_id",updateadhar)
Routes.delete("/api/user/delete/:_id",adhardelete)

export default Routes
