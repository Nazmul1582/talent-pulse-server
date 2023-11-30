const express = require("express");
const { getUsers, createUser, verifyUser, getSingleUser, paySalary, getSalaries, firedUser } = require("../../api/users/controllers");
const verifyToken = require("../../middlewares/verifyToken");
const verifyAdmin = require("../../middlewares/verifyAdmin");
const verifyHR = require("../../middlewares/verifyHR");
const router = express.Router();

router.get("/users", verifyToken, getUsers);
router.get("/users/:id", verifyToken, getSingleUser)
router.get("/users/employee/salaries", verifyToken, getSalaries)

router.post("/users", createUser)
router.post("/users/employee/pay-salary", verifyToken, verifyHR, paySalary)

router.patch("/users/:id", verifyToken, verifyUser)
router.patch("/users/admin/:id", verifyToken, verifyAdmin, firedUser)

module.exports = router;