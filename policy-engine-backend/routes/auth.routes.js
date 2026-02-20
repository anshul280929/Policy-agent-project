const express = require('express');
const router = express.Router();

router.get('/health', (req, res) => {
  res.json({ status: "Auth route working" });
});

module.exports = router;
