import asyncHandler from 'express-async-handler';
import User from '../../models/user.model.js';
import hashPassword from '../../utils/hashPassword.js';
import generateToken from '../../utils/generateToken.js';
import validatePassword from '../../utils/validatePassword.js';

// @desc    Get current user
// @route   GET /api/v1/users/me
// @access  Private
const getMe = asyncHandler(async (req, res) => {
  const user = req.user;

  res.status(200).json({
    successful: true,
    message: 'User successfully fetched',
    data: user,
  });
});

// @desc    Register a user
// @route   POST /api/v1/auth/users/register
// @access  Public
const createUser = asyncHandler(async (req, res) => {
  const { fullName, email, password } = req.body;

  if (!fullName || !email || !password) {
    res.status(400);
    throw new Error('Full name, email and password are required');
  }

  const normalizedEmail = email.trim().toLowerCase();

  const existingUser = await User.findOne({ email: normalizedEmail });

  if (existingUser) {
    res.status(400);
    throw new Error('Email already registered');
  }

  // Encrypt password
  const hashedPassword = await hashPassword(password);

  const createdUser = await User.create({
    fullName,
    email: normalizedEmail,
    password: hashedPassword,
  });

  if (!createdUser) {
    res.status(400);
    throw new Error('User unsuccessfully created');
  }

  const { password: _, ...userData } = createdUser.toObject();

  // Create token
  const token = generateToken(createdUser._id);

  res.status(201).json({
    successful: true,
    message: 'User successfully created',
    token,
    userData,
  });
});

// @desc    Sign in a user
// @route   POST /api/v1/auth/users/login
// @access  Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400);
    throw new Error('Email and password are required');
  }

  const normalizedEmail = email.trim().toLowerCase();

  const user = await User.findOne({ email: normalizedEmail });

  if (!user) {
    res.status(404);
    throw new Error('User not found');
  }

  // Verify password
  const isValidPassword = await validatePassword(password, user.password);

  if (!isValidPassword) {
    res.status(403);
    throw new Error('Invalid credentials');
  }

  const { password: _, ...userData } = user.toObject();

  // Create token
  const token = generateToken(user._id);

  res.status(200).json({
    successful: true,
    message: 'User successfully logged in',
    token,
    data: userData,
  });
});

export { getMe, createUser, loginUser };
