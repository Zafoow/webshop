const express = require("express");
const { Router } = express;
const Product = require("../models").product;

const router = new Router();

router.get("/products", async (req, res, next) => {
  try {
    const getProducts = await Product.findAll(req.body);
    res.json(getProducts);
  } catch (e) {
    next(e);
  }
});

router.get("/products/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const getProductById = await Product.findByPk(id);
    res.send(getProductById);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
