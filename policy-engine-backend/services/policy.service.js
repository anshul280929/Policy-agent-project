const { createPolicy } = require("../models/postgres/policy.model");
const { createPolicyVersion } = require("../models/postgres/policyVersion.model");
const PolicyDocument = require("../models/mongo/policyDocument.model");

const createPolicyDraft = async (userId, policyName) => {
  // 1️⃣ Create policy
  const policy = await createPolicy({
    policy_name: policyName,
    created_by: userId,
  });

  // 2️⃣ Create version
  const version = await createPolicyVersion(policy.id);

  // 3️⃣ Create Mongo Draft Document
  const draft = await PolicyDocument.create({
    versionId: version.id,
    basics: {},
    eligibility: {},
    riskParameters: {},
    decisionLogic: {},
    clauses: {},
  });

  return {
    policy,
    version,
    draft,
  };
};

module.exports = {
  createPolicyDraft,
};