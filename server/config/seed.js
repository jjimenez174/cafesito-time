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
      name: "Artisan Blend - 250g",
      description:
        "A natural processed, organic produced, estate grown coffee. Offering a medium-soft body, light acidity and a mellow delicate sweetness, with mellow caramel and subtle sweet fruit flavours.",
      image: "artisan-blend.png",
      category: categories[0]._id,
      price: 29.0,
      quantity: 500,
    },
    {
      name: "Biz Blend - 500g",
      description:
        "A Natural full flavoured arabica with a typical wine-like and fruity over tones. The intense flavour is highlighted in the dark roast.",
      image: "biz-blend.png",
      category: categories[0]._id,
      price: 30.99,
      quantity: 500,
    },
    {
      name: "Impressa Blend - 500g",
      description:
        "Complex blend of high grown Arabicas that combined give both delicate nuttiness with bitter sweet chocolate overtones. Full bodied syrup with bright acid & pungent floral overtones.",
      image: "impressa-blend.png",
      category: categories[0]._id,
      price: 24.99,
      quantity: 500,
    },
    {
      name: "Lavazza Blend - 1kg",
      description:
        "Colombian coffees, grown in the Medellin region of central Colombia, are very versatile. This bean is particularly well suited to being served as a single origin espresso.",
      image: "lavazza-blend.png",
      category: categories[0]._id,
      price: 50.0,
      quantity: 500,
    },
    {
      name: "Maverick Blend - 250g",
      description:
        "A Natural full flavoured arabica with a typical wine-like and fruity over tones. The intense flavour is highlighted in the dark roast.",
      image: "maverick-blend.png",
      category: categories[0]._id,
      price: 14.99,
      quantity: 500,
    },
    {
      name: "Tag Blend - 340g",
      description:
        "Fully Certified Rain Forest Alliance, organic water processed decaffeinated coffee with medium body and aromatic flavour. Suitable for medium to dark roasts.",
      image: "tag-blend.png",
      category: categories[0]._id,
      price: 16.99,
      quantity: 500,
    },
    {
      name: "Hario Cold Brew Pot 1L - Black",
      category: categories[1]._id,
      description:
        "Brew cold brew coffee the easy way with the Hario Cold Brew Pot 1 L. Built with a heatproof Hario glass carafe and a BPA-Free plastic filter and lid, it doesn’t get much simpler that this. The permanent mesh filter has 60 micron holes, too small to allow coffee grounds to enter your final brew. It’s easy to clean and should last a lifetime.",
      image: "hario-cold-brew-pot.png",
      price: 36.9,
      quantity: 20,
    },
    {
      name: "Bialetti Moka Express - 600ml",
      category: categories[1]._id,
      description:
        "The Bialetti Moka Express is the classic stovetop espresso maker. To produce fine espresso, you only need coffee, water, and a stove. You can take your beverage a step further by steaming some milk and making yourself a latte or flat white.",
      image: "bialetti-moka-express-600.png",
      price: 39.99,
      quantity: 20,
    },
    {
      name: "Fellow Stagg EKG Electric Kettle",
      category: categories[1]._id,
      description:
        "Brew better coffee with the gold standard of water kettles: the Fellow Stagg EKG Electric Kettle. Featuring a control-enhancing gooseneck spout, variable temperature control, and a matte black or white facade that looks stunning in any kitchen or cafe, this kettle has taken the coffee industry by storm as a world-favorite.",
      image: "fellow-stagg-ekg-electric-kettle.png",
      price: 239.99,
      quantity: 20,
    },
    {
      name: "Fellow Ode Brew Coffee Grinder",
      category: categories[1]._id,
      description:
        "The Fellow Ode Brew Grinder enters a whole new class for home Filter Coffee grinders. Fellow Industries have reimagined what a grinder should look like and completed the package to optimise performance for precision and consistency in grinding fresh coffee. Now you can go from roasted bean to final brew all with using a Fellow product.",
      image: "fellow-ode-brew-coffee-grinder.png",
      price: 589.99,
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
