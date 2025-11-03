import Adhardata from "../Module/AdharModul.js"
export const Adharservece={
    createadhar:async(data)=>
    {
        if(!/^\d{12}$/.test(data.Adhar_Number))
        {
            throw new Error("adharnumber most be exactly 12 digits ")
        }

        if(!/^\d{6}$/.test(data.Pin_Code))
        {
            throw new Error("PinCode most be exactly 6 digits")
        }

        const adhar=await Adhardata.create(data)
        return adhar;
    },
    getall:async(data)=>
    {
        const alldata=await Adhardata.find()
        return alldata
    },
   

    updateadhar: async (_id, data) => {
    const update = await Adhardata.findByIdAndUpdate(_id, data, { 
        new: true,            // updated document return kare
        runValidators: true   // schema validation apply kare
    })
    if (!update) 
        {
            throw new Error("Adhar not found")
        }
    return update
},
deleteadhar:async(_id,data)=>{
    const deletes=await Adhardata.findByIdAndDelete(_id)
    if(!deletes)
    {
        throw new Error("Adhar not found")
    }
    return deletes;
}

}
