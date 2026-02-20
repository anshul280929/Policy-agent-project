const mongoose = require('mongoose');

const policyRuleSchema = new mongoose.Schema({
  policyId: { type: String, required: true },
  eligibilityTree: { type: Object },
  scoringConfig: { type: Object },
  decisionTree: { type: Object },
  clauses: { type: Object },
  documents: { type: Object },
  impactAnalysis: { type: Object }
}, { timestamps: true });

module.exports = mongoose.model('PolicyRule', policyRuleSchema);
