const { Sinister, Request, History, Document } = require("../models");

const getAllSinisters = async (req, res) => {
  const {
    validated,
    driver_is_insured,
    driver_responsability,
    driver_engaged_responsability,
    plate,
    driver_firstname,
    driver_lastname,
  } = req.query;
  const where = {};
  if (validated !== undefined) where.validated = validated === "true";
  if (driver_is_insured !== undefined)
    where.driver_is_insured = driver_is_insured === "true";
  if (driver_responsability !== undefined)
    where.driver_responsability = driver_responsability === "true";
  if (driver_engaged_responsability)
    where.driver_engaged_responsability = driver_engaged_responsability;
  if (plate) where.plate = plate;
  if (driver_firstname) where.driver_firstname = driver_firstname;
  if (driver_lastname) where.driver_lastname = driver_lastname;
  const sinisters = await Sinister.findAll({ where });
  res.status(200).json({ sinisters });
};

const getSinister = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id, {
    include: ["cniDriver", "vehicleRegCert", "insuranceCert"],
  });
  if (!sinister) return res.status(404).json({ message: "Sinister not found" });
  res.status(200).json({ sinister });
};

const createSinister = async (req, res) => {
  const {
    cni_driver,
    vehicle_registration_certificate,
    insurance_certificate,
  } = req.body;

  // Check if referenced documents exist
  if (cni_driver) {
    const cniDoc = await Document.findByPk(cni_driver);
    if (!cniDoc) {
      return res.status(400).json({
        message:
          "Création du sinistre impossible : le document CNI du conducteur n'existe pas",
      });
    }
  }

  if (vehicle_registration_certificate) {
    const vehicleDoc = await Document.findByPk(
      vehicle_registration_certificate,
    );
    if (!vehicleDoc) {
      return res.status(400).json({
        message:
          "Création du sinistre impossible : le certificat d'immatriculation n'existe pas",
      });
    }
  }

  if (insurance_certificate) {
    const insuranceDoc = await Document.findByPk(insurance_certificate);
    if (!insuranceDoc) {
      return res.status(400).json({
        message:
          "Création du sinistre impossible : le certificat d'assurance n'existe pas",
      });
    }
  }

  const sinister = await Sinister.create(req.body);
  res.status(201).json({ sinister });
};

const updateSinister = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id);
  if (!sinister) return res.status(404).json({ message: "Sinister not found" });

  const {
    cni_driver,
    vehicle_registration_certificate,
    insurance_certificate,
  } = req.body;

  // Check if referenced documents exist
  if (cni_driver) {
    const cniDoc = await Document.findByPk(cni_driver);
    if (!cniDoc) {
      return res.status(400).json({
        message:
          "Mise à jour du sinistre impossible : le document CNI du conducteur n'existe pas",
      });
    }
  }

  if (vehicle_registration_certificate) {
    const vehicleDoc = await Document.findByPk(
      vehicle_registration_certificate,
    );
    if (!vehicleDoc) {
      return res.status(400).json({
        message:
          "Mise à jour du sinistre impossible : le certificat d'immatriculation n'existe pas",
      });
    }
  }

  if (insurance_certificate) {
    const insuranceDoc = await Document.findByPk(insurance_certificate);
    if (!insuranceDoc) {
      return res.status(400).json({
        message:
          "Mise à jour du sinistre impossible : le certificat d'assurance n'existe pas",
      });
    }
  }

  await sinister.update(req.body);
  res.status(200).json({ sinister });
};

const deleteSinister = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id);
  if (!sinister) return res.status(404).json({ message: "Sinister not found" });
  await sinister.destroy();
  res.status(200).json({ message: "Sinister deleted" });
};

const validateSinister = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id);
  if (!sinister) return res.status(404).json({ message: "Sinister not found" });
  await sinister.update({ validated: req.body.validated });
  res.status(200).json({ sinister });
};

const updateDocuments = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id);
  if (!sinister) return res.status(404).json({ message: "Sinister not found" });

  const {
    cni_driver,
    vehicle_registration_certificate,
    insurance_certificate,
  } = req.body;

  // Check if referenced documents exist
  if (cni_driver) {
    const cniDoc = await Document.findByPk(cni_driver);
    if (!cniDoc) {
      return res.status(400).json({
        message:
          "Association des documents impossible : le document CNI du conducteur n'existe pas",
      });
    }
  }

  if (vehicle_registration_certificate) {
    const vehicleDoc = await Document.findByPk(
      vehicle_registration_certificate,
    );
    if (!vehicleDoc) {
      return res.status(400).json({
        message:
          "Association des documents impossible : le certificat d'immatriculation n'existe pas",
      });
    }
  }

  if (insurance_certificate) {
    const insuranceDoc = await Document.findByPk(insurance_certificate);
    if (!insuranceDoc) {
      return res.status(400).json({
        message:
          "Association des documents impossible : le certificat d'assurance n'existe pas",
      });
    }
  }

  await sinister.update(req.body);
  res.status(200).json({ sinister });
};

const getRequest = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id, {
    include: [{ model: Request, as: "request" }],
  });
  if (!sinister || !sinister.request)
    return res.status(404).json({ message: "Request not found" });
  res.status(200).json({ request: sinister.request });
};

const getHistory = async (req, res) => {
  const histories = await History.findAll({
    where: { sinister_id: req.params.id },
  });
  res.status(200).json({ histories });
};

const createRequest = async (req, res) => {
  const sinister = await Sinister.findByPk(req.params.id);
  if (!sinister) return res.status(404).json({ message: "Sinister not found" });
  const request = await Request.create({
    ...req.body,
    sinister_id: req.params.id,
  });
  res.status(201).json({ request });
};

module.exports = {
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
};
