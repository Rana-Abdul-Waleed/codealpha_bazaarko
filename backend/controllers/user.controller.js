import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";

// test api
export const test = (req, res) => {
  res.json({ message: "API is working properly." });
};

// update user api
export const updateUser = async (req, res, next) => {
  const { username, email, password } = req.body;
  const userId = req.params.userId;

  if (req.user.id !== userId) {
    return next(errorHandler(403, "You are not allowed to update this user!"));
  }

  let hashedPassword = password;

  if (password) {
    if (password.length < 6) {
      return next(errorHandler(400, "Password must be at least 6 characters."));
    }
    hashedPassword = bcryptjs.hashSync(password, 10);
  }
  if (username) {
    if (username.length < 7 || username.length > 20) {
      return next(
        errorHandler(400, "Username must be between 7 and 20 characters.")
      );
    }
    if (username.includes(" ")) {
      return next(errorHandler(400, "Username cannot contain spaces."));
    }
    if (username !== username.toLowerCase()) {
      return next(errorHandler(400, "Username must be lowercase."));
    }
    if (!/^[a-zA-Z]/.test(username)) {
      return next(
        errorHandler(400, "Username must start with a letter (a-z or A-Z).")
      );
    }
    if (!username.match(/^[a-zA-Z0-9]+$/)) {
      return next(
        errorHandler(400, "Username can only contain letters and numbers.")
      );
    }
  }

  try {
    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        $set: {
          username,
          email,
          password: hashedPassword,
        },
      },
      { new: true }
    );
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json({
      message: "User account is updated successfully.",
      user: rest,
    });
  } catch (error) {
    next(error);
  }
};
