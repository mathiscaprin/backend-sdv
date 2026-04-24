const { User } = require("../models");
const bcrypt = require("bcrypt");

const BCRYPT_SALT_ROUNDS = Number(process.env.BCRYPT_SALT_ROUNDS) || 12;

const getAllUsers = async (req, res) => {
  const { role, active, email, username, firstname, lastname } = req.query;
  const where = {};
  if (role) where.role = role;
  if (active !== undefined) where.active = active === "true";
  if (email) where.email = email;
  if (username) where.username = username;
  if (firstname) where.firstname = firstname;
  if (lastname) where.lastname = lastname;
  const users = await User.findAll({ where });
  res.status(200).json({
    users,
  });
};

const getUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  res.status(200).json({
    user,
  });
};

const createUser = async (req, res) => {
  const { password, ...userData } = req.body;
  if (!password) {
    return res.status(400).json({ message: "Password is required" });
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
  const user = await User.create({ ...userData, password: hashedPassword });
  res.status(201).json({
    user: {
      ...user.get({ plain: true }),
      password: undefined,
    },
  });
};

const updateUser = async (req, res) => {
  // Assuming id is in body for PUT /api/users
  const { id, ...updateData } = req.body;
  const user = await User.findByPk(id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await user.update(updateData);
  res.status(200).json({
    message: "Successfully updated",
    user,
  });
};

const deleteUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await user.destroy();
  res.status(200).json({
    message: "Successfully deleted",
  });
};

const deactivateUser = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }
  await user.update({ active: req.body.active });
  res.status(200).json({
    message: "User status updated",
    user,
  });
};

const changePassword = async (req, res) => {
  const user = await User.findByPk(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const { password } = req.body;
  if (!password) {
    return res.status(400).json({ message: "New password is required" });
  }

  const hashedPassword = await bcrypt.hash(password, BCRYPT_SALT_ROUNDS);
  await user.update({ password: hashedPassword });

  res.status(200).json({
    message: "Password changed successfully",
  });
};

module.exports = {
  getAllUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
  deactivateUser,
  changePassword,
};
