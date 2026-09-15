
import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";
import { stdin, stdout } from "process";
import { log } from "console";

const FILE = "products.json";

const SaveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};
const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};

const addToCart = async (item) => {
  const products = await getCart();
  const productFound=product.find((p) => p.id===item.id);
  if(productFound){
    productFound.qty += item.qty;
    console.log("Product in cart updated");
  } else{
    products.push(item);
    console.log("product added");
  }
  }
  products.push(item);
  await SaveCart(products);
};

const saveCart = () => {
  console.log("show cart");
};

const updateCart = () => {
  console.log("update cart");
};

const deleteFromCart = () => {
  console.log("deleteCart");
};
const main = async () => {
  const cin = readline.createInterface({ input: stdin, output: stdout });
  let choice;
  do {
    console.log("welcome to shopping cart 🛍️"); //ctrl+i for emoji
    console.log("1-------Add to cart");
    console.log("2-------Show cart");
    console.log("3-------Remove item");
    console.log("4-------Update quantity");
    console.log("5-------Checkout");
    choice = await cin.question("Enter your choice:");
    console.log("Entered choice:", choice);
    switch (Number(choice)) {
      case 1:
        let data = await cin.question("Enter id, name, price, qty:");
        let p = data.split(",");
        

        console.table(p);
        let q=p.map((item) => item.trim());
        let[id,name,price,qty]=q;
        console.log(id,name,price,qty);
        console.log(id,name,price,qty);
        const product={
          id:Number(id),
          name,
          price:Number(price),
          qty:Number(qty)
        };
        await addToCart(product);
        break;
      case 2:
        showCart();
        break;
      case 3:
        deleteFromCart();
        break;
      case 4:
        console.log("update quantity");
        break;
      case 5:
        console.log("see you later...😀");
        process.exit();
        break;
      default:
        console.log("Invalid choice! try again 🔴");
    }
  } while (choice != "5");

  cin.close();
};

main();
