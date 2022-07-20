const express = require("express");
const productRouter = require("./Router/productRouter");
const cors = require("cors");
const app = express();
const User = require("./models").user;
const Product = require("./models").product;
const Categorie = require("./models").categorie;
const PORT = 4000;
app.use(express.json());
app.use(cors());

app.use("/", productRouter);

app.listen(PORT, () => console.log(`using port ${PORT}`));
