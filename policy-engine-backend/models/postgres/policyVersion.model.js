const {pool} = require("../../config/postgres");

const createPolicyVersion = async (policy_id) => {
  const query = `
    INSERT INTO policy_versions (policy_id)
    VALUES ($1)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [policy_id]);

  return rows[0];
};

module.exports = {
  createPolicyVersion,
};