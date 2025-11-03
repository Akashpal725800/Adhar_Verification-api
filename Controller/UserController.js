import { Adharservece } from "../service/AdharService.js"

export const adharuser = async (req, res) => {
    try {
        const adhar = await Adharservece.createadhar(req.body)
        res.status(200).json({
            message: "Create Adhar successful",
            data: adhar
        })
    } catch (error) {
        res.status(500).json({
            message: "Create Adhar data error",
            error: error.message
        })
    }
}

export const getall=async(req,res)=>
{
   try {
    const getalldata=await Adharservece.getall()
    res.status(200).json({message:"featching adhardata successfull",data:getalldata})
    
   } catch (error) {
    res.status(500).json({message:"Featching data error",error})
    
   }
}

export const updateadhar = async (req,res) => {
    try {
        const {_id} = req.params
       const update = await Adharservece.updateadhar(_id, req.body)
        res.status(200).json({message: "Adhar update successful",data: update
        })
    } catch (error) {
        console.error(error)
 res.status(500).json({message: "Adhar update error",error: error.message})
    }
}
export const  adhardelete=async(req,res)=>
{
    try {
        const{_id}=req.params
        const deletes=await Adharservece.deleteadhar(_id)
        res.status(200).json({message:"Adhar data delete successfull",data:deletes})
        
    } catch (error) {
        
        res.status(500).json({message:"adhardelete error",error:error.message})
    }
}

