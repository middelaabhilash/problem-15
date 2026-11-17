// Please do not change the prewritten code

import http from "http";
import fs from "fs";

const server = http.createServer((req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 405;
    res.setHeader("Allow", "POST");
    res.end("Only POST requests are allowed");
    return;
  }

  const chunks = [];
  req.on("data", (chunk) => {
    chunks.push(chunk);
  });

  req.on("end", () => {
    fs.appendFileSync("data.txt", Buffer.concat(chunks).toString());
    const content = fs.readFileSync("data.txt", "utf8");
    console.log(content);
    res.end("Data received");
  });
});

export default server;
