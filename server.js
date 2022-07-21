const express = require("express");
const productRouter = require("./Router/productRouter");
const categoriesRouter = require("./Router/categoriesRouter");
const userRoutes = require("./Router/userRoutes");
const cors = require("cors");
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());

// Routes
app.use("/", productRouter);
app.use("/", categoriesRouter);
app.use("/", userRoutes);

app.listen(PORT, () => console.log(`using port ${PORT}`));
