import express from "express";
import cors from "cors";
import bodyParser from "body-parser";

// middlewares
import errorMiddleware from "./middlewares/errorMiddleware";

// routes
import auth from "./routes/auth";

const app = express();

const options = {
  origin: "*",
  credentials: true,
};

app.use(cors(options));
app.use(bodyParser.json());

app.use("/api", auth);

app.get("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Not Found",
  });
})

app.use(errorMiddleware);

export default app;
