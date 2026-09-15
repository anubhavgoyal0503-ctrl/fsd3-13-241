import {writeFile} from "fs/promises";

const f1 = () => {
    
    console.log("F1");
};

const f2 = () => {
    
    console.log("F2");
};

const f3 = () => {
    console.log("F3");
};
const writeData= async () => {
    await writeFile("note.txt","i am fs module");
    console.log("file written");
};
const main = () => {
    console.log("main");
    writeData();
    //f1();
    setTimeout(f2,0);
    f3();
    
    //setInterval(f2,1000);
    setImmediate(f3);
    process.nextTick(f1);

    
    console.log("end");
    new Promise((resolve,reject)=>{
        console.log("I am promise 1");
        
    });
    new Promise((resolve,reject)=>{
        console.log("I am promise 2");
    });
};

main();
