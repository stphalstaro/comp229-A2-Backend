const express = require('express');
const router = express.Router(); //how we manipulate the router on the server
const productController = require('../controllers/product'); //use implementation

//define the CRUD aPI ROUTES
//CRUD => REST API

//GET products (Read all Products) 
router.get('/', productController.getAllProducts);

//GET products (Read a Product by ID)
router.get('/:id', productController.getProductById);

//POST products (Create a new project)
router.post('/', productController.createProduct);

//PUT products (Update a Project)
router.put('/:id', productController.updateProduct);

//DELETE products (Delete a Project)
router.delete('/:id', productController.deleteProduct);

module.exports = router; //export the router to be used in the server.js file