const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const authRoutes = require('./routes/auth.routes');
const policyRoutes = require('./routes/policy.routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/auth', authRoutes);
app.use('/api/policies', policyRoutes);

app.get('/', (req, res) => {
  res.json({ message: "Policy Engine API Running" });
});

module.exports = app;
