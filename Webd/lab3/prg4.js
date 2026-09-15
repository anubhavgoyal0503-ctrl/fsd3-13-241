import http from "http";
import {reviews} from "./data.js";

const server = http.createServer((req, res) => {
  const product={
    id:1,
    name:mobile,
    price:30000,
    review:225'
  };
  if (req.url === "/api/products") {
   // res.end(JSON.stringify(products));
   res.end(JSON.stringify(items));
  } 
  else if (req.url === "/api/reviews") {
    res.end(JSON.stringify(reviews));
  }
  else {
    res.statusCode = 404;
    res.end();
  }
});

server.listen(30000, () => console.log("prg4 is running..."));
