const express=require('express');
const axios=require('axios');
const router=express.Router();

// router.get('/info',async(req,res)=>{
//     const URL='https://aamras.com/dummy/EmployeeDetails.json';
//     const response=await axios.get(URL);
//     const data=response.data;
//     res.render('index',{data});
// })

router.get('/info',async(req,res)=>{
    const URL='https://aamras.com/dummy/EmployeeDetails.json';
    const response=await fetch(URL);
    const data=await response.json();
    res.render('index',{data});
})

module.exports=router;