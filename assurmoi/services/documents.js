const { Document } = require("../models");

const getAllDocuments = async (req, res) => {
  const { type, validated } = req.query;
  const where = {};
  if (type) where.type = type;
  if (validated !== undefined) where.validated = validated === "true";
  const documents = await Document.findAll({ where });
  res.status(200).json({ documents });
};

const getDocument = async (req, res) => {
  const document = await Document.findByPk(req.params.id);
  if (!document) return res.status(404).json({ message: "Document not found" });
  res.status(200).json({ document });
};

const createDocument = async (req, res) => {
  const document = await Document.create(req.body);
  res.status(201).json({ document });
};

const updateDocument = async (req, res) => {
  const document = await Document.findByPk(req.params.id);
  if (!document) return res.status(404).json({ message: "Document not found" });
  await document.update(req.body);
  res.status(200).json({ document });
};

const validateDocument = async (req, res) => {
  const document = await Document.findByPk(req.params.id);
  if (!document) return res.status(404).json({ message: "Document not found" });
  await document.update({ validated: req.body.validated });
  res.status(200).json({ document });
};

const rejectDocument = async (req, res) => {
  const document = await Document.findByPk(req.params.id);
  if (!document) return res.status(404).json({ message: "Document not found" });
  await document.update({ validated: req.body.validated });
  res.status(200).json({ document });
};

module.exports = {
  getAllDocuments,
  getDocument,
  createDocument,
  updateDocument,
  validateDocument,
  rejectDocument,
};
