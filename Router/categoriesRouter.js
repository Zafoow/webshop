const express = require("express");
const { Router } = express;
const Categories = require("../models").categorie;
const Products = require("../models").product;

const router = new Router();

router.get("/categories", async (req, res, next) => {
  try {
    const getCategories = await Categories.findAll();
    res.json(getCategories);
  } catch (e) {
    next(e);
  }
});

router.get("/categories/:id", async (req, res, next) => {
  try {
    const id = parseInt(req.params.id);
    const getCategorieByTitle = await Categories.findByPk(id, {
      include: [Products],
    });
    res.json(getCategorieByTitle);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
