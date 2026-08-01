console.log("Start");

Promise.resolve().then(() => {
  console.log("Promise resolved");
});

console.log("End");


// Theory:

// Promise callbacks microtask queue me jaate hain.

// Microtasks hamesha macrotask (setTimeout) se pehle run hote hain.

// Output:  
// Start
// End
// Promise resolved