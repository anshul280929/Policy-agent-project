process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";
require('dotenv').config();
const app = require('./app');
const {connectPostgres} = require('./config/postgres');
const connectMongo = require('./config/mongo');

const PORT = process.env.PORT || 5000;

(async () => {
  try {
    await connectPostgres();
    await connectMongo();

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });

  } catch (error) {
    console.error('Startup error:', error);
    process.exit(1);
  }
})();
