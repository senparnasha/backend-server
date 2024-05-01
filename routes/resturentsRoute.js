const express=require("express")
const client=require("../config")
const router=express.Router()


router.get("/view/all", async(req,res)=>{
    const text="SELECT * FROM resturents";
    const resturent = await client.query(text);
    
    res.send(resturent)
})

router.post("/menu", async(req,res)=>{
    const text = `SELECT * FROM menu where res_id=${req.body.res_id}`
    const menu = await client.query(text);
    
    res.send(menu.rows)

})


module.exports = router;
