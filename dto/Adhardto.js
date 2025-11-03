export class Adhardto{
constructor(data)
{
    this.Full_Name=data.Full_Name
    this.Gender=data.Gender
    this.Address=data.Address
    this.State=data.State
    this.Adhar_Number=data.Adhar_Number
    this.Pin_Code=data.Pin_Code
    
}
 validate() {
        if (!/^\d{12}$/.test(this.Adhar_Number)) {
            throw new Error("Adhar_Number must be exactly 12 digits");
        }
        if (!/^\d{6}$/.test(this.Pin_Code)) {
            throw new Error("Pin_Code must be exactly 6 digits");
        }
    }
}