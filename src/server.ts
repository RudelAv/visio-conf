import express from "express";
import path from "path";

const server = express();

server.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, PATCH, OPTIONS");
    res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
    console.log(
        `[\x1b[36mLOGGER\x1b[0m][${new Date().toISOString()}] \x1b[31m${
          res.statusCode
        }\x1b[0m \x1b[32m${req.method}\x1b[0m \x1b[33m${req.url}\x1b[0m`
      );
    next();
});

server.use(express.static(path.join(__dirname, "public")));

server.use(express.json());

server.use(express.urlencoded({ extended: true }));

export default server;


