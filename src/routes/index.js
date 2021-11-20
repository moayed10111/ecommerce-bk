const express = require('express');
const http = require('http');
const router = express.Router();

router.get ('/', (req, res, next)=>
res.send('<h1>Hello World</h1>'));

module.exports=router;