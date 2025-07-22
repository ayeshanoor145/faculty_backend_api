import express from 'express';
import morgan from 'morgan';    // Importing morgan for logging HTTP requests
import dotenv from 'dotenv'; // Importing dotenv to manage environment variables
import {products , categories} from './sample/products.js'; // Importing sample products data



dotenv.config(); // Load environment variables from .env file
const app = express();
app.use(express.json()); // Middleware to parse JSON request bodies
app.use(morgan('common')); // Using morgan to log HTTP requests in 'dev' format


app.get("/", (req, res) => {
    res.send(`Hello World!`);
})

app.get("/products", (req, res) => {
    res.send(products);
})


app.get("/products/:id", (req, res) => {
    let id = req.params.id;
    res.json(
        {
            id: id,
            name: "Laptop",

        })

})


app.delete("/products/:id", (req, res) => {
    let id = req.params.id;
    res.status(404).json({
        id: id,
        message: `Product not found`,
        data: null,

    });
});




app.put("/products/:id", (req, res) => {
    let id = req.params.id;
    let products = req.body; 
    console.log(products);
    res.status(200).json({
        message: "Product updated successfully",
        data: products,
        status: "success"
    });
})


app.get("/categories", (req, res) => {
    let categories = [
        { id: 1, name: "Electronics" },
        { id: 2, name: "Clothing" },
        { id: 3, name: "Home Appliances" },
        { id: 4, name: "Books" },
        { id: 5, name: "Sports" }
    ]
    // res.send(categories);
    // res.json(categories);


    res.status(200).json({
        message: "Categories fetched successfully",
        data: categories,
        status: "success"
    });


})

const port=process.env.PORT || 5000; // Use PORT from environment variables or default to 3000
const host=process.env.HOST || 'localhost'; // Use HOST from environment variables or default to 'localhost' ";


app.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}.`);
})