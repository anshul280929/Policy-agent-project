const mongoose = require("mongoose");

const policyDocumentSchema = new mongoose.Schema(
  {
    versionId: {
      type: String,
      required: true,
      index: true,
    },

    basics: Object,
    eligibility: Object,
    riskParameters: Object,
    decisionLogic: Object,
    clauses: Object,

    simulation: Object,

    completion: {
      step1: { type: Boolean, default: false },
      step2: { type: Boolean, default: false },
      step3: { type: Boolean, default: false },
      step4: { type: Boolean, default: false },
      step5: { type: Boolean, default: false },
    },

    lastSavedAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model(
  "PolicyDocument",
  policyDocumentSchema
);