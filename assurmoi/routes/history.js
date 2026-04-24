const express = require("express");
const router = express.Router();

const {
  getAllHistories,
  getHistory,
  createHistory,
  getHistoryByRequest,
  getHistoryBySinister,
  getHistoryByUser,
} = require("../services/history");

router.get("/", getAllHistories);
router.post("/", createHistory);
router.get("/:id", getHistory);
router.get("/request/:id", getHistoryByRequest);
router.get("/sinister/:id", getHistoryBySinister);
router.get("/user/:id", getHistoryByUser);

module.exports = router;
