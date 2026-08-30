import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";

const FILE = "products.json";

//  Save cart to file
const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

//  Get cart from file
const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");
    return JSON.parse(data);
  } catch {
    return []; // agar file empty ho to empty array return kare
  }
};

//  Add item to cart
const addToCart = async (item) => {
  const products = await getCart();
  products.push(item);
  await saveCart(products);
};

//  Show cart items
const showCart = async () => {
  const products = await getCart();
  if (products.length === 0) {
    console.log("🛒 Cart is empty!");
  } else {
    console.log("🛍️ Your Cart:");
    products.forEach((p) =>
      console.log(`ID:${p.id} | ${p.name} | Price:${p.price} | Qty:${p.qty}`)
    );
  }
};

//  Update quantity of item
const updateCart = async (id, newQty) => {
  const products = await getCart();
  const index = products.findIndex((p) => p.id === id);
  if (index !== -1) {
    products[index].qty = newQty;
    await saveCart(products);
    console.log("✅ Quantity updated!");
  } else {
    console.log("❌ Item not found!");
  }
};

//  Delete item from cart
const deleteFromCart = async (id) => {
  let products = await getCart();
  const newProducts = products.filter((p) => p.id !== id);
  if (products.length === newProducts.length) {
    console.log("❌ Item not found!");
  } else {
    await saveCart(newProducts);
    console.log("🗑️ Item removed!");
  }
};

//  Main Menu
const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("\nWelcome to shopping cart 🛍️");
    console.log("1 ------- Add to cart");
    console.log("2 ------- Show Cart");
    console.log("3 ------- Remove Item");
    console.log("4 ------- Update Quantity");
    console.log("5 ------- Checkout");
    choice = await cin.question("Enter your choice: ");

    switch (Number(choice)) {
      case 1:
        await addToCart({ id: 101, name: "Mobile", price: 15000, qty: 3 });
        console.log("✅ Added to cart!");
        break;
      case 2:
        await showCart();
        break;
      case 3:
        const delId = Number(await cin.question("Enter product ID to remove: "));
        await deleteFromCart(delId);
        break;
      case 4:
        const updId = Number(await cin.question("Enter product ID to update: "));
        const newQty = Number(await cin.question("Enter new quantity: "));
        await updateCart(updId, newQty);
        break;
      case 5:
        console.log("💳 Checkout complete. See you later...😃");
        process.exit();
        break;
      default:
        console.log("Invalid choice! try again 🛑");
    }
  } while (choice != "5");

  cin.close();
};

main();
