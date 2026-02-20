const express = require("express");
const router = express.Router();

const policyController = require("../controllers/policy.controller");
const authMiddleware = require("../middlewares/auth.middleware");

// Create Policy Draft
router.post(
  "/",
  authMiddleware,
  policyController.createPolicy
);

module.exports = router;