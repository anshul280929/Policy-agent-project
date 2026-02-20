const { Pool } = require('pg');

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

const connectPostgres = async () => {
  await pool.query('SELECT NOW()');
  console.log('✅ PostgreSQL Connected');
};

module.exports = {
  connectPostgres,
  pool
};
