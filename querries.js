const Product = require("./models").product;
const User = require("./models").user;
const Categorie = require("./models").categorie;

// async function getProducts(id) {
//   try {
//     const allProducts = await Product.findByPk(id);
//     console.log("Do I get product", allProducts);
//   } catch (e) {
//     console.log(e.message);
//   }
// }

// getProducts(2);

// async function getUsers() {
//   const allUsers = await Product.findAll();
//   return allUsers.map((product) => product.get({ plain: true }));
// }

// // getUsers().then((users) => console.log(users));

// async function getCategories() {
//   const allUsers = await Categorie.findAll();
//   return allUsers.map((categorie) => categorie.get({ plain: true }));
// }

// // getCategories().then((categories) => console.log(categories));

// // async function categoryProducts() {
// //   const catPro = await Categorie.findOne({
// //     where: { title: "Electronics" },
// //     include: [Product],
// //   });
// //   return catPro();
// // }

// // // categoryProducts().then((categories) => console.log(categories));
