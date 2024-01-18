const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import itemControllers module for handling item-related operations
const productControllers = require("./controllers/productControllers");

// Route to get a list of products
router.get("/product", productControllers.browse);

// Route to get a specific product by ID
router.get("/product/:id", productControllers.read);
// router.get("/product/:id/category", productControllers.read);

/* ************************************************************************* */

module.exports = router;
