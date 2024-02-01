// routes/userRoutes.js

const express = require("express");
const router = express.Router();
const userController = require("../controllers/userController.js");

// Create
router.post("/users", userController.createUser);

// Read
router.get("/users", userController.getAllUsers);

// Update
router.put("/users/:id", userController.updateUser);

// Delete
router.delete("/users/:id", userController.deleteUser);

module.exports = router;
