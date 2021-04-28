const express = require("express");

const getProducts = require("./getProducts");
const getProduct = require("./getProduct");
const app = express();
app.get("/api/products", getProducts);

app.get("/api/products/:id", getProduct);

const port = 3080;

app.listen(port, () => console.log(`We'll get a ${port} someday!`));
