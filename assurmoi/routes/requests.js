const express = require("express");
const router = express.Router();

const {
  getAllRequests,
  getRequest,
  createRequest,
  updateRequest,
  changeStatus,
  closeRequest,
  setDiagnostic,
  planExpertise,
  effectiveExpertise,
  receiveExpertiseReport,
  planService,
  pickupPlan,
  pickupEffective,
  serviceStart,
  serviceEnd,
  returnPlan,
  returnEffective,
  invoiceReceived,
  invoicePaid,
  thirdPartyInvoicePaid,
  estimatedCompensation,
  approvedCompensation,
  case2PickupPlan,
  rib,
  case2PickupEffective,
  compensationPayment,
  case2ThirdPartyInvoicePaid,
  getHistoryByRequest,
} = require("../services/requests");

router.get("/", getAllRequests);
router.post("/", createRequest);
router.get("/:id", getRequest);
router.put("/:id", updateRequest);
router.patch("/:id/status", changeStatus);
router.patch("/:id/close", closeRequest);
router.patch("/:id/diagnostic", setDiagnostic);
router.get("/:id/history", getHistoryByRequest);

// Expertise routes
router.patch("/:id/expertise/plan", planExpertise);
router.patch("/:id/expertise/effective", effectiveExpertise);
router.patch("/:id/expertise/report", receiveExpertiseReport);

// Case1 routes
router.patch("/:id/case1/service-plan", planService);
router.patch("/:id/case1/pickup-plan", pickupPlan);
router.patch("/:id/case1/pickup-effective", pickupEffective);
router.patch("/:id/case1/service-start", serviceStart);
router.patch("/:id/case1/service-end", serviceEnd);
router.patch("/:id/case1/return-plan", returnPlan);
router.patch("/:id/case1/return-effective", returnEffective);
router.patch("/:id/case1/invoice-received", invoiceReceived);
router.patch("/:id/case1/invoice-paid", invoicePaid);
router.patch("/:id/case1/third-party-invoice-paid", thirdPartyInvoicePaid);

// Case2 routes
router.patch("/:id/case2/estimated-compensation", estimatedCompensation);
router.patch("/:id/case2/approved-compensation", approvedCompensation);
router.patch("/:id/case2/pickup-plan", case2PickupPlan);
router.patch("/:id/case2/rib", rib);
router.patch("/:id/case2/pickup-effective", case2PickupEffective);
router.patch("/:id/case2/compensation-payment", compensationPayment);
router.patch("/:id/case2/third-party-invoice-paid", case2ThirdPartyInvoicePaid);

module.exports = router;
