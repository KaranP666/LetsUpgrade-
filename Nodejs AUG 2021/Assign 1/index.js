const express = require("express");

// Library used for filtering data
const _ = require("lodash");

// Create an instance of express app
const app = express();

// To convert incoming request data to JSON
app.use(express.json());

// Dummy Users Data
const users = [
    {
        id: 1,
        username: "john2021",
        name: "John Smith",
        age: 21,
    },
    {
        id: 2,
        username: "steve2021",
        name: "Steve Taylor",
        age: 25,
    },
];

// Dummy Products Data
const products = [
    {
        id: 1,
        name: "Parle-G",
        price: 5,
    },
    {
        id: 2,
        name: "Hide & Seek",
        price: 10,
    },
    {
        id: 3,
        name: "50-50",
        price: 5,
    },
];

// Test GET endpoint
app.get("/test", (req, res) => {
    res.send("Test");
});

// Endpoint to get all users
app.get("/users", (req, res) => {
    res.send(users);
});

// Endpoint to fetch post data
app.post("/users", (req, res) => {
    let user = req.body;
    console.log(user);
    res.send({ status: "success" });
});

// Endpoint to get user with specific id
app.get("/users/:id", (req, res) => {
    let id = parseInt(req.params.id);
    let user = _.find(users, { id: id });
    res.send(user);
});

// Endpoint to get all products
app.get("/products", (req, res) => {
    res.send(products);
});

// Run the express server
app.listen(3000, () => {
    console.log("Server Running at port 3000");
});
