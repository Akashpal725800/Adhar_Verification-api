import { Adharservece } from "../service/AdharService.js";
export const AdharRepository = {
    createAdhar: Adharservece.createadhar,
    getAllAdhar: Adharservece.getall,
    updateAdhar: Adharservece.updateadhar,
    deleteAdhar: Adharservece.deleteadhar
};
