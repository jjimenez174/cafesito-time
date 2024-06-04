const db = require("./connection");
const { User, Product, Category } = require("../models");

db.once("open", async () => {
  await Category.deleteMany();

  const categories = await Category.insertMany([
    { name: "Coffee" },
    { name: "Supplies" },
  ]);

  console.log("categories seeded");

  await Product.deleteMany();

  const products = await Product.insertMany([
    {
      name: "Horiguchi Coffee - 500g",
      description:
        "Green coffee beans sourced from Yokohama, Japan.",
      image: "horiguchi.png",
      category: categories[0]._id,
      price: 30.0,
      quantity: 500,
    },
    {
      name: "Sapporo Coffee Kan - 500g",
      description:
        "Rich, smoky coffee roasted using a rare Japanese technique called Sumiyaki (Charcoal) Coffee Roasting.",
      image: "sapporo-kan.png",
      category: categories[0]._id,
      price: 31.99,
      quantity: 500,
    },
    {
      name: "Komeda Blend - 500g",
      description:
        "Azuki Coffee with sweet red bean paste integrated with the coffee.",
      image: "Komeda.png",
      category: categories[0]._id,
      price: 25.99,
      quantity: 500,
    },
    {
      name: "Precious Memory Blend - 1kg",
      description:
        "Hoshiyama Café in-house coffee blend is created exclusively in Japan.",
      image: "preciousmemory.png",
      category: categories[0]._id,
      price: 60.0,
      quantity: 500,
    },
    {
      name: "Step Blend - 250g",
      description:
        "Kenya Washed, Guatemala Washed, Ethiopia Washed.",
      image: "stepblend.png",
      category: categories[0]._id,
      price: 15.99,
      quantity: 500,
    },
    {
      name: "Koffee Mameya - 340g",
      description:
        "Japanese Third-wave coffee blend.",
      image: "koffeemameya.png",
      category: categories[0]._id,
      price: 17.99,
      quantity: 500,
    },
    {
      name: "Amanai Pot 1L - Silver",
      category: categories[1]._id,
      description:
        "Japanese drip pot specialized for extracting coffee. It's a good size and fits comfortably in your hand.",
      image: "amanaipot.png",
      price: 37.9,
      quantity: 20,
    },
    {
      name: "Labour and Wait Coffee Pot - 600ml",
      category: categories[1]._id,
      description:
        "Japanese Coffee Pot in Black by Labour and Wait",
      image: "labourandwaitpot.png",
      price: 38.99,
      quantity: 20,
    },
    {
      name: "Epeios Drip Kettle",
      category: categories[1]._id,
      description:
        "Epeios Drip Kettle in Black or White. Electric Kettle made in Japan.",
      image: "epeioskettle.png",
      price: 219.99,
      quantity: 20,
    },
    {
      name: "Collar Coffee Grinder",
      category: categories[1]._id,
      description:
        "Collar Coffee Grinder by Daniel Debiasi and Federico Sandri.",
      image: "collargrinder.png",
      price: 489.99,
      quantity: 20,
    },
  ]);

  console.log(products);
  console.log("products seeded");

  await User.deleteMany();

  await User.create({
    firstName: "Jessy",
    lastName: "Castaneda",
    email: "jessyc.12@icloud.com",
    password: "admin",
    orders: [
      {
        // products: [products[0]._id, products[0]._id, products[1]._id]
      },
    ],
    admin: true,
  });

  await User.create({
    firstName: "jane",
    lastName: "doe",
    email: "janedoe123@gmail.com",
    password: "obUser",
    orders: [
      {
        // products: [products[0]._id, products[0]._id, products[1]._id]
      },
    ],
    admin: false,
  });

  console.log("users seeded");

  process.exit();
});
