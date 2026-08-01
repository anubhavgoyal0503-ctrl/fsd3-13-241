console.log("Start");

setTimeout(() => {
  console.log("Timeout callback");
}, 1000);

console.log("End");


// Theory:

// setTimeout background me chala jata hai (Web API).

// Event loop 1 sec baad callback ko queue se uthata hai.

// Pehle synchronous code run hota hai, baad me timeout callback.

// Output:  
// Start
// End
// Timeout callback