import http from "http";
import dotenv from "dotenv";
import path from "path";

import app from "./app";
import connectDatabase from "./utils/prisma-client";

dotenv.config({
  path: path.resolve(__dirname, "../.env"),
})

const PORT = process.env.port || 4000;

const server = http.createServer(app);

server.listen(PORT, async () => {
  await connectDatabase()
  console.log("server is running on port : ", PORT);
});

export default app;
