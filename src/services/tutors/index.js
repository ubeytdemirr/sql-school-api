const router = require('express').Router();
const db = require("../../db")
const generate = require("../../db/helpers") 


router.get("/",async(req,res,next)=>{
    try{
        //
        const selectQuery =  generate.select("tutors",req.query);
        const {rows} = await db.query(selectQuery)
        res.send(rows)
    }
    catch(e){
        console.log(e)
        res.status(500).send(e)
    }
})


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


router.put("/:id",async(req,res,next)=>{
    try{
        //
        const updateQuery = generate.update('tutors',req.body,{id:parseInt(req.params.id)})
        const dbResponse = await db.query(updateQuery);
        res.send(dbResponse)
    }
    catch(e){
        res.status(500).send(e)
    }
})








module.exports = router;