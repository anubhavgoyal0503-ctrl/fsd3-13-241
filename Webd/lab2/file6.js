import readline from "readline/promises";
import { writeFile, readFile } from "fs/promises";

import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs";

const FILE="products.json"
const saveCart=()=>{
await writeFile(File,JSON.stringify(CaretPosition,null,2))
const FILE = "products.json";

const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

const getCart=()=>{
const data= await readFile(FILE,"utf-8")
return JSON.parse(data);
const getCart = async () => {
  const data = await readFile(FILE, "utf-8");
  return JSON.parse(data);
};