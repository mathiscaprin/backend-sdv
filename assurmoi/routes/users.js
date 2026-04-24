const express = require("express");
const router = express.Router();

const authMiddleware = require("../middlewares/auth");
const { validateUsername } = require("../middlewares/user");
const {
  getAllUsers,
  getUser,
  createUser,
  deleteUser,
  updateUser,
  deactivateUser,
  changePassword,
} = require("../services/users");

// require auth for all user management endpoints
router.use(authMiddleware);

router.get("/", getAllUsers);
router.post("/", validateUsername, createUser);
router.put("/", updateUser);
router.get("/:id", getUser);
router.delete("/:id", deleteUser);
router.patch("/:id/actif", deactivateUser);
router.patch("/:id/password", changePassword);

module.exports = router;
