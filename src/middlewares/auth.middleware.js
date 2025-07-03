import jwt from "jsonwebtoken";
import asyncHandler from "express-async-handler";
import User from "../models/user.model.js";

const protect = asyncHandler(async (req, res, next) => {
  const authHeader = req.headers.authorization;
  const JWT_SECRET = process.env.JWT_SECRET;

  if (!JWT_SECRET) {
    res.status(500);
    throw new Error("JWT secret not defined");
  }

  if (authHeader && authHeader.startsWith("Bearer ")) {
    try {
      const token = authHeader.split(" ")[1];

      const decode = jwt.verify(token, JWT_SECRET);

      const user = await User.findById(decode.id).select("-password");

      if (!user) {
        res.status(404);
        throw new Error("User not found");
      }

      req.user = user;
      next();
    } catch (error) {
      if (error.name === "TokenExpiredError") {
        res.status(401);
        throw new Error("Token expired. Please log in again.");
      }

      res.status(403);
      throw new Error("Invalid token. Not authorized");
    }
  } else {
    res.status(403);
    throw new Error("Token unavailable. Not authorized");
  }
});

export default protect;
