const fs = require("fs");

// CREATE
fs.writeFile("test.txt", "Hello World!", (err) => {
  if (err) throw err;
  console.log("File created!");

  // READ
  fs.readFile("test.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log("File content:", data);

    // UPDATE
    fs.appendFile("test.txt", "\nNew line added.", (err) => {
      if (err) throw err;
      console.log("File updated!");

      // DELETE
      fs.unlink("test.txt", (err) => {
        if (err) throw err;
        console.log("File deleted!");
      });
    });
  });
});
