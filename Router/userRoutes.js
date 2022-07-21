const express = require("express");
const { Router } = express;
const Users = require("../models").user;

const router = new Router();

// Find all Users
router.get("/users", async (req, res, next) => {
  try {
    const getUsers = await Users.findAll(req.body);
    res.json(getUsers);
  } catch (e) {
    next(e);
  }
});

// User login
router.post("/user/:login", async (req, res, next) => {
  try {
    const login = req.params.login;
    const getProductById = await Product.findByPk(login);
    res.send(getProductById);
  } catch (e) {
    next(e);
  }
});

module.exports = router;
