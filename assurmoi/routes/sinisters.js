const express = require("express");
const router = express.Router();

const {
  getAllSinisters,
  getSinister,
  createSinister,
  updateSinister,
  deleteSinister,
  validateSinister,
  updateDocuments,
  getRequest,
  getHistory,
  createRequest,
  createSinisterDocument,
  getSinisterDocuments,
} = require("../services/sinisters");

router.get("/", getAllSinisters);
router.post("/", createSinister);
router.get("/:id", getSinister);
router.put("/:id", updateSinister);
router.delete("/:id", deleteSinister);
router.patch("/:id/validate", validateSinister);
router.patch("/:id/documents", updateDocuments);
router.get("/:id/request", getRequest);
router.get("/:id/history", getHistory);
router.post("/:id/create-request", createRequest);
router.post("/:id/documents", createSinisterDocument);
router.get("/:id/documents", getSinisterDocuments);

module.exports = router;
