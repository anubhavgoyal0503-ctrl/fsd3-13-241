console.log("Start");

setTimeout(() => {
  console.log("Timeout");
}, 0);

Promise.resolve().then(() => {
  console.log("Promise");
});

console.log("End");


// Theory:

// Pehle synchronous code → Start, End.

// Phir microtask → Promise.

// Phir macrotask → Timeout.

// Output:  
// Start
// End
// Promise
// Timeout