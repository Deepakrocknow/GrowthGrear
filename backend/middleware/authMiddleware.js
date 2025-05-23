// backend/middleware/authMiddleware.js
module.exports = (req, res, next) => {
    const token = req.headers['authorization'];
    if (token === 'Bearer mock-token') {
      next();
    } else {
      res.status(401).json({ message: 'Unauthorized' });
    }
  };