const path = require("path");

const express = require("express");

const adminController = require("../controllers/admin");

const router = express.Router();
router.post("/add-expense", adminController.postExpenseDetails);
router.get("/get-expense", adminController.getExpenseDetails);

router.delete("/delete-expense/:id", adminController.deleteExpenseDetails);

module.exports = router;
