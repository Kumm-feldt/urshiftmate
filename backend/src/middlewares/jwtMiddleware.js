const jwt = require('jsonwebtoken');

exports.verifyJWT = (req, res, next) => {
  const authHeader = req.headers.authorization;
  const token = authHeader && authHeader.split(' ')[1]; // Bearer TOKEN

  if (!token) {
    return res.status(401).json({ error: "Access token required" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Attach user info to request object (similar to how session worked)
    req.userInfo = {
      googleId: decoded.googleId,
      name: decoded.name,
      email: decoded.email
    };
    
    next();
  } catch (error) {
    return res.status(403).json({ error: "Invalid or expired token" });
  }
};