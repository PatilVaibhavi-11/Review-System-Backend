import CompanyModel from "../models/Company.js"
export const createCompany = async(req,res)=>{
    try{
        const {name,location,industry,email}=req.body;

const CompanyObj = new CompanyModel({
        name,
        location,
        industry,
        email,
    })
 const savedCompanyObj = await CompanyObj.save();
res.json({
    savedCompanyObj,
    message:"Company created successfully"
})
    } catch(error){
        console.log(error)
        res.json({
            error:"Error ocurred"
        })
    }

};
export const getCompanies=async(req,res)=>{
    try {
      const getcompanies=await CompanyModel.find()
      res.json({
        getcompanies
      })
    } catch (error) {
      res.json({
        error:"Cannot fetch data"
      })
      console.log(error)
    }
  }