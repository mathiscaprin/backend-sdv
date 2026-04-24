const express = require("express");
const router = express.Router();

const {
  getAllDocuments,
  getDocument,
  createDocument,
  updateDocument,
  validateDocument,
  rejectDocument,
} = require("../services/documents");

router.get("/", getAllDocuments);
router.post("/", createDocument);
router.get("/:id", getDocument);
router.put("/:id", updateDocument);
router.patch("/:id/validate", validateDocument);
router.patch("/:id/rejected", rejectDocument);

module.exports = router;
