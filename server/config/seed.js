const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {

  const categories = await Category.insertMany([
    { name: "Coffee" },
    { name: "Accessories" },
  ]);

  console.log("categories seeded");

  const products = await Product.insertMany([
    {
      name: "Brazil Coffee",
      description:
        "Slow roasted coffee beans from Brazil with a rich bold flavour.",
      image: "Brazil.webp",
      price: 30,
      category: categories[0]._id,
    },
    {
      name: "Colombia Coffee",
      description:
        "Lightly roasted coffee sourced from Colombia.",
      image: "colombia.webp",
      price: 25,
      category: categories[0]._id,
    },
    {
      name: "Costa Rica Coffee",
      description:
        "Medium roasted coffee beans from the tropics of Costa Rica.",
      image: "costarica.webp",
      price: 25,
      category: categories[0]._id,
    },
    {
      name: "Guatemala Coffee",
      description:
        "Rich bold coffee flavour from the depths of Guatemala.",
      image: "guatemala.webp",
      price: 25,
      category: categories[0]._id,
    },
    {
      name: "Ethiopia Coffee",
      description:
        "Hearty dark roasted coffee beans from Ethiopia.",
      image: "Ethiopia.webp",
      price: 30,
      category: categories[0]._id,
    },
    {
      name: "India Coffee",
      description:
        "Spicy coffee from India.",
      image: "India.webp",
      price: 30,
      category: categories[0]._id,
    },
    {
      name: "Sumatra Coffee",
      description:
        "Lightly roasted coffee with a charcoal flavor from Indonesia.",
      image: "sumatra.webp",
      price: 30,
      category: categories[0]._id,
    },
    {
      name: "Coffee Grinder",
      description:
        "Sleek, modern designed coffee grinder to suit your home.",
      image: "coffee_grinder.jpeg",
      price: 80,
      category: categories[1]._id,
    },
    {
      name: "Filtered Coffee",
      description:
        "Coffee filters for a proper drip coffee experience.",
      image: "filtered_coffee.webp",
      price: 50,
      category: categories[1]._id,
    },
    {
      name: "Electric Kettle",
      description:
        "Electric kettle with a simple design to fit your home.",
      image: "electric_kettle.webp",
      price: 120,
      category: categories[1]._id,
    },
    {
      name: "Coffee Mug",
      description:
        "Cute coffee mug to brighten your morning.",
      image: "coffee_mugs.webp",
      price: 85,
      category: categories[1]._id,
    },
    {
      name: "Coffee Glass",
      description:
        "Fancy, sleek coffee glass to match your modern aesthetic.",
      image: "coffee_glass.webp",
      price: 65,
      category: categories[1]._id,
    },

  ]);

  console.log(products);
  console.log("products seeded");

  await User.create({
    firstName: "Jessy",
    lastName: "Castaneda",
    email: "jessyc.12@icloud.com",
    password: "admin",
  });

  console.log("users seeded");

  process.exit();
});
