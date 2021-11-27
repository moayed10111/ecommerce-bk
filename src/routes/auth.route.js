const express = require('express');
const router = express.Router();
const generator =require('generate-password');



router.post('/register', (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;
        res.status(200).json({ fullName, email, password, message: "User registered successffully" })
    } catch (err) {
        next(err)
    }
});


router.post('/login', (req, res, next) => {
    try {
        const {email, password } = req.body;
        res.status(200).json({ email, message: "User Logged in" })
    } catch (err) {
        next(err)
    }
});

router.post('/otp', (req, res, next) => {
    try {
        const otp = Math.floor(1000+Math.random()*9000);
        const {phoneNumber} = req.body;
        res.status(200).json({otp, message:'Code Generated'})
    } catch (err) {
        next(err)
    }
});

router.post('/resetPassword', (req, res, next)=>{
    try {
        const password = generator.generate({
            length:10,
            numbers:true
        });
        const {email}= req.body;
        res.status(200).json({password, message:'password reset'})
    } catch (err){
        next(err)
    }
});

module.exports = router