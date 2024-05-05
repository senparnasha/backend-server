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

router.post('/login', async (req, res)=>{
    const userId = uuidv4()
    const loginUser=`INSERT INTO resturent_user VALUES('${userId}', '${req.body.name}', '${req.body.email}', '${req.body.password}')`
    const login = await client.query(loginUser)
    
    res.send(login)
})

module.exports = router;
