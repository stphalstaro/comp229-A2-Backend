const express = require('express');
const mongoose = require('mongoose')

//Instatiate my database
mongoose.connect('mongodb://localhost:27017/Marketplace');

//Instatiate the application
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

//Importing routes
const productRoutes = require('./routes/product');

app.use('/api/product', productRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});