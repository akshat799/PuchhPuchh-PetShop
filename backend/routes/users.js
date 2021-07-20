const router = require('express').Router();
let User = require('../models/user.model.js');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

require ('dotenv').config();

router.route('/signin').post(async(req,res) =>{
    const {email , password} = req.body;

    try {
       const existingUser = await User.findOne({ email });
       
       if(!existingUser) return res.status(404).json({ message: "user doesn't exist"});

       const isPasswordCorrect = await bcrypt.compare(password , existingUser.password);

       if(!isPasswordCorrect) return res.status(400).json({messgae: "Invalid credentials"});

       const token = jwt.sign({email: existingUser.email , id: existingUser._id },'test' , {expiresIn: '1h'} );

       res.status(200).json({result: existingUser , token})
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"});
    }
});

router.route('/signup').post(async(req,res) =>{
    const { email, password , confirmPassword , firstName , lastName} = req.body;
    try {
       const existingUser = await User.findOne({ email });
       if(existingUser) return res.status(400).json({ message: "User already exists"});

       if(password !== confirmPassword) return res.status(400).json({ message: "Password Don't Match"});

       const hashPassword = await bcrypt.hash( password , 12);

       const result = await User.create({email , password: hashPassword , name: `${firstName} ${lastName}`});

       const token = jwt.sign({email: result.email , id: result._id },'test' , {expiresIn: '1h'} );

       res.status(200).json({result , token});
    } catch (error) {
        res.status(500).json({message: "Something went wrong!"});
    }
});

module.exports = router;