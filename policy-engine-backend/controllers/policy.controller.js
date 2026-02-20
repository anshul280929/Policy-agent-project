const policyService = require("../services/policy.service");

const createPolicy = async (req, res) => {
  try {
    const { policyName } = req.body;

    const userId = req.user.id; // from auth middleware
    const result = await policyService.createPolicyDraft(
      userId,
      policyName
    );

    res.status(201).json({
      message: "Policy draft created",
      data: result,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to create policy",
    });
  }
};

module.exports = {
  createPolicy,
};