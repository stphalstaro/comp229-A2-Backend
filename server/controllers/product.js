const Product = require('../models/product');

//GET /api /products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//GET /api/product/id:
exports.getProductById = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(product == null){
            return res.status(404).json({message: "Product was not found"});
        }
        res.json(product);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//POST/api/products
exports.createProduct = async (req, res) => {
    const product = new Product({
        name: req.body.name,
        description: req.body.description,
        price: req.body.price,
        quantity: req.body.quantity,
        category: req.body.category
    });

    try {
        const newProduct = await product.save();
        res.status(201).json(newProduct);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

//PUT /api/products/id
exports.updateProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(product === null){
            return res.status(404).json({message: "Product was not found"});
        }
        if(product.name != null){
            product.name = req.body.name;
        }
        if(product.description != null){
            product.description = req.body.description;
        }
        if(product.price != null){
            product.price = req.body.price;
        }
        if(product.quantity != null){
            product.quantity = req.body.quantity;
        }
        if(product.category != null){
            product.category = req.body.category;
        }
        const updatedProduct = await product.save();
        res.json(updatedProduct);

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

//DELETE one /api/products/id
exports.deleteProduct = async (req, res) => {
    try {
        const product = await Product.findById(req.params.id);

        if(product === null){
            return res.status(404).json({message: "Product was not found"});
        }
        await Product.findByIdAndDelete(req.params.id);
        res.json({ message: "Product was deleted successfully" });

    } catch (error) {
        res.status(500).json({ message: error.message});
    }
}

// DELETE /api/products
exports.deleteAllProducts = async (req, res) => {
    try {
        const result = await Product.deleteMany({}); // This will delete all products
        res.status(200).json({ message: `${result.deletedCount} products deleted successfully.` });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

