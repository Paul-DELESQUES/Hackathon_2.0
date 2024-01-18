const express = require("express");

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Import productControllers module for handling product-related operations
const productControllers = require("./controllers/productControllers");

// Route to get a list of products
router.get("/products", productControllers.browse);

// Route to get a specific product by ID
router.get("/products/:id", productControllers.read);

// Route to add a new product
router.post("/products", productControllers.add);

/* ************************************************************************* */

module.exports = router;
