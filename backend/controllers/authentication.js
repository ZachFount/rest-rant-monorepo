const jwt = require("jsonwebtoken");
const User = require("../models/user");


exports.getCurrentUser = async (req, res) => {
  const token = req.headers.authorization?.split(" ")[1];
  if (!token) {
    return res.status(401).send({ message: "No token provided" });
  }
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decoded.id); 
    res.json({ user: { id: user.id, username: user.username } });
  } catch (error) {
    res.status(403).send({ message: "Invalid or expired token" });
  }
};