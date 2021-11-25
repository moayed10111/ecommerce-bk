const express = require('express');
const router = express.Router();



router.post('/register', (req, res, next) => {
    try {
        const { fullName, email, password } = req.body;
        res.status(200).json({ fullName, email, password, message: "User registered successffully" })
    } catch (err) {
        next(err)
    }
});



module.exports = router