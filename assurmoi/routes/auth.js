const express = require("express");
const router = express.Router();
const authMiddleware = require("../middlewares/auth");

const {
  login,
  logout,
  getProfile,
  forgotPassword,
  resetPassword,
} = require("../services/auth");

router.post("/login", login);
router.post("/logout", authMiddleware, logout);
router.get("/profil", authMiddleware, getProfile);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

module.exports = router;
