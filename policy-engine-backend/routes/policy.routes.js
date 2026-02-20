const express = require('express');
const router = express.Router();

router.get('/health', (req,res)=>{
  res.json({ message: "Policy route working" });
});

module.exports = router;
