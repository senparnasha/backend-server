const express=require("express")
const client = require("../config")
const router=express.Router()
const { v4: uuidv4 } = require('uuid');




router.post("/register", async (req,res)=>{
    const newId = uuidv4()
    const userRegister=`INSERT INTO swiggy_user VALUES ('${newId}','${req.body.name}','${req.body.phn_no}','${req.body.password}')`
    const register= await client.query(userRegister)
    
    res.send(register)
})


module.exports = router;
