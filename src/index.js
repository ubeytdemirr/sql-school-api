const express = require("express");

const server = express();

const cors = require("cors");

server.use(cors());

server.use(express.json());

server.listen(process.env.PORT || 5000, () => console.log(` 🚀 Server is running on port ${process.env.PORT} `));

server.on("error", () => console.log(" ❌ Server is not running!"));
