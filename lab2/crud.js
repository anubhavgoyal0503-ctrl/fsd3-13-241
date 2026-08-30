import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";

import { stdin, stdout } from "process";

const FILE = "products.json";

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addToCart = async (item) => {
  const products = await getCart();
  products.push(item);
  await saveCart(products);
};

const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("Welcome to shopping cart 🛍️");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");
    choice = await cin.question("Enter your choice:");
    switch (Number(choice)) {
      case 1:
        await addToCart({ id: 101, name: "Mobile", price: 15000, qty: 3 });
        console.log("add to cart");
        break;
      case 2:
        console.log("show cart items");
        break;
      case 3:
        console.log("remove items");
        break;
      case 4:
        console.log("update quantity");
        break;
      case 5:
        console.log("See you later...😃");
        process.exit();
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != "5");

  cin.close();
};

main();