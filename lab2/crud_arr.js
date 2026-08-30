import readline from 'readline/promises';
import { writeFile, readFile } from 'fs/promises';
import { stdin, stdout } from 'process';

const FILE = "product.json";

const saveCart = async (cart) => {
    await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart = async () => {
    try {
        const data = await readFile(FILE, "utf-8");
        return JSON.parse(data);
    } catch {
        return [];
    }
};

const addToCart = async (item) => {
    const products = await getCart();
    products.push(item);
    await saveCart(products);
};

const ShowCart = async () => {
    const products = await getCart();
    console.log(products);
};

const updateCart = async (id, quantity) => {
    const products = await getCart();
    const index = products.findIndex(item => item.id == id);

    if (index != -1) {
        products[index].quantity = quantity;
        await saveCart(products);
    }
};

const deleteFromCart = async (id) => {
    const products = await getCart();
    const index = products.findIndex(item => item.id == id);

    if (index != -1) {
        products.splice(index, 1);
        await saveCart(products);
    }
};

async function main() {
    const cin = readline.createInterface({
        input: stdin,
        output: stdout
    });

    let choice;

    do {
        console.log("\nwelcome to Anubhav da dhaaba 😃");
        console.log("1  add to cart ➕");
        console.log("2  show cart 🛒");
        console.log("3  remove items 🫠");
        console.log("4  update quantity 😉");
        console.log("5  checkout 😎");

        choice = await cin.question("enter your choice: ");
        console.log("your choice is:", choice);

        switch (choice) {
            case '1':
               let data=await cin.question("enter product id, name, price, quantity separated by commas: ");
               let [id, name, price, quantity] = data.split(",");
               await addToCart({ id: parseInt(id), name, price: parseFloat(price), quantity: parseInt(quantity) });
               console.log("added to cart");
            
                break;

            case '2':
                await ShowCart();
                break;

            case '3':
                let remove = await cin.question("entger the product to be removed ");
                await deleteFromCart(remove);
                console.log("removed items");
                break;

            case '4':
                await updateCart(101, 5);
                console.log("updated quantity");
                break;

            case '5':
                console.log("checkout ready ma boiii 😎");
                break;

            default:
                console.log("invalid choice chal aab doobara try maar 😠");
        }

    } while (choice != '5');

    cin.close();
}

main();