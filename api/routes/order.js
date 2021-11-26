const router = require('express').Router();
const { findById } = require('../models/Orders');
const Orders = require('../models/Orders');
const Users = require('../models/Users');

router.post('/order', async (req,res)=>{

    try{
        const newOrder = new Orders({
            phone:req.body.phone,
            names:req.body.names,
            email:req.body.email,
            amount:req.body.amount
        })
        const order  = await newOrder.save();
        res.status(200).json(order);
    }catch(err){
     res.status(500).json(err)
    }
})

router.get('/:id',async(req,res)=>{
    try{
            const user = await Users.findById(req.params.id);
              const  email=user.email;
            const userOrder = await Orders.find({email});
            res.status(200).json(userOrder);
    }catch(err){
        res.status(500).json(err);
    }
})



module.exports=router;