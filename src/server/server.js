const express = require("express");
const ProductModel = require("../models/product.model");
const port = 8888;

const app = express();

app.use(express.json());

app.set("view engine", "ejs");
app.set("views", "src/views");

// Views
app.get("/v/products", async (req, res) => {
  const products = await ProductModel.find({});
  res.render("index", { products });
});

// API
/*
 * List all product
 */
app.get("/products", async (req, res) => {
  try {
    const products = await ProductModel.find({});

    res.status(200).json(products);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/*
 * Get product by Id
 */

app.get("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/*
 * Create new product
 */

app.post("/products", async (req, res) => {
  try {
    const product = await ProductModel.create(req.body);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});
/*
 * Update product by id
 */
app.patch("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

/*
 * Delete product
 */

app.delete("/product/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const product = await ProductModel.findByIdAndRemove(id);

    res.status(200).json(product);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

app.listen(port, () => console.log(`Server listenning on port: ${port}`));
