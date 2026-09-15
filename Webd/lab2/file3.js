import { readFile,writeFile,appendFile,unlink } from "fs/promises";
const writeData = async (fname, contents) => {
    await writeFile(fname, contents);
    console.log("File written");
    



};
const readData = async (fname) => {
    const data = await readFile(fname, 'utf-8');
    console.log("file contents");
    console.log(data);
};
const appendData = async (fname, contents) => {
    await appendFile(fname, "\n" + contents);
};
const deleteData = async (fname) => {
    await unlink(fname);
    console.log(`${fname} File deleted`);
};
/*await writeData("happy.txt", "I am happy");
await readData("happy.txt");
await appendData("happy.txt", "I am also sad");
await readData("happy.txt");*/
await deleteData("happy.txt");
