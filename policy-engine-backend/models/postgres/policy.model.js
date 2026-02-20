const { pool } = require("../../config/postgres");

const createPolicy = async ({ policy_name, created_by }) => {
  const query = `
    INSERT INTO policies (policy_name, created_by)
    VALUES ($1, $2)
    RETURNING *;
  `;

  const { rows } = await pool.query(query, [
    policy_name,
    created_by,
  ]);

  return rows[0];
};

const getPolicyById = async (id) => {
  const { rows } = await pool.query(
    "SELECT * FROM policies WHERE id=$1",
    [id]
  );
  return rows[0];
};

module.exports = {
  createPolicy,
  getPolicyById,
};