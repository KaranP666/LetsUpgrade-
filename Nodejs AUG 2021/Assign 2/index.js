const express = require("express");
const mongoose = require("mongoose");
// Create an instance of express app
const app = express();

// To convert incoming request data to JSON
app.use(express.json());

// Connection to local MongoDB server and after connection run the express server
mongoose.connect("mongodb://localhost/shop", { useNewUrlParser: true }, () => {
    console.log("Database connected successfully");
    // Run the express server
    app.listen(3000, () => {
        console.log("Server Running at port 3000");
    });
});

// Create User Schema
userSchema = new mongoose.Schema({
    username: String,
    name: String,
    age: Number,
});

// Create Product Schema
productSchema = new mongoose.Schema({
    name: String,
    price: Number,
});

// Connect schemas with collections
userModel = new mongoose.model("user", userSchema);
productModel = new mongoose.model("product", productSchema);

// Endpoint to get all users
app.get("/users", (req, res) => {
    userModel.find((err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send(data);
        }
    });
});

// Endpoint to save a new user
app.post("/users", (req, res) => {
    user = req.body;
    new_user = new userModel(user);
    new_user.save();
    res.send({ status: "success" });
});

// Endpoint to get user with specific id
app.get("/users/:id", (req, res) => {
    let id = req.params.id;
    userModel.find({ _id: id }, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send(data);
        }
    });
});

// Endpoint to get user with specific username
app.get("/users/username/:username", (req, res) => {
    let username = req.params.username;
    userModel.find({ username: username }, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send(data);
        }
    });
});

// Endpoint to delete user with specific id
app.delete("/users/:id", (req, res) => {
    let id = req.params.id;
    userModel.deleteOne({ id: id }, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send({ status: "success" });
        }
    });
});

// Endpoint to update user with specific id & if it doesn't exist add it
app.put("/users/:id", (req, res) => {
    let id = req.params.id;
    let user = req.body;
    userModel.updateOne({ id: id }, user, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send({ status: "success" });
        }
    });
});

// Endpoint to get all product
app.get("/products", (req, res) => {
    productModel.find((err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send(data);
        }
    });
});

// Endpoint to save a new product
app.post("/products", (req, res) => {
    product = req.body;
    new_product = new productModel(product);
    new_product.save();
    res.send({ status: "success" });
});

// Endpoint to get product with specific id
app.get("/products/:id", (req, res) => {
    let id = req.params.id;
    productModel.find({ _id: id }, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send(data);
        }
    });
});

// Endpoint to delete product with specific id
app.delete("/products/:id", (req, res) => {
    let id = req.params.id;
    productModel.deleteOne({ _id: id }, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send({ status: "success" });
        }
    });
});

// Endpoint to update product with specific id
app.put("/products/:id", (req, res) => {
    let id = req.params.id;
    let product = req.body;
    productModel.updateOne({ _id: id }, product, (err, data) => {
        if (err) {
            console.log("You have an error:" + err);
        } else {
            res.send({ status: "success" });
        }
    });
});
