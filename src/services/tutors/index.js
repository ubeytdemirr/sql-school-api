const router = require('express').Router();
const db = require("../../db")
const generate = require("../../db/helpers") 



router.post("/",async(req,res,next)=>{
    try{
        //
        const insertQuery = generate.insert("tutors",req.body);
        const dbResponse = await db.query(insertQuery);
        res.send(dbResponse)
    }
    catch(e){
        res.status(500).send(e)
    }
})









module.exports = router;