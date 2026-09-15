import { EventEmitter } from "node:events";
const task = new EventEmitter();
const sayHi = (name) => {
  console.log(`logged in ${name}`);
};
const starts=() =>{
    console.log("system started");
}
task.once("greet",starts);
task.on("greet", sayHi);
task.on("greet", (name) => {
  console.log(` ${name} starts shopping`);
});
task.on("greet", (name) => {
    console.log(` ${name} log out`);
});
task.emit("greet", "ananya");
task.emit("greet", "wow");