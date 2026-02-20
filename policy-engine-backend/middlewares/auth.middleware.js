// Temporary auth middleware (DEV MODE)

const authMiddleware = (req, res, next) => {
  // Fake logged-in user for now
  req.user = {
    id: "11111111-1111-1111-1111-111111111111",
    role: "PolicyManager",
  };

  next();
};

module.exports = authMiddleware;