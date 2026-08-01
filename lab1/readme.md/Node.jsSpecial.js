console.log("Start");

process.nextTick(() => {
  console.log("nextTick");
});

Promise.resolve().then(() => {
  console.log("Promise");
});

setTimeout(() => {
  console.log("Timeout");
}, 0);

console.log("End");


// Theory:

// process.nextTick → sabse high priority (microtask se bhi pehle).

// Order: synchronous → nextTick → Promise → Timeout.

// Output:  
// Start
// End
// nextTick
// Promise
// Timeout