import express from "express";
import cors from "cors";

const app = express();
app.use(express.json()); // for parsing application/json responses

if (process.env.FRONTEND_URL) {
  // If provided,only allow connections from the frontend website to be
  // specified in an environment variable file
  const corsOptions = {
    origin: process.env.FRONTEND_URL,
  };
  app.use(cors(corsOptions));
} else {
  // if a server is not specified in environment variables,
  // allow connections from all origins
  app.use(cors());
}

app.get("/api/helloworld", (req, res) => {
  res.send("Hello World! From the backend!");
});

app.get("/api/wake-up", (req, res) => {
  res.send("I am awake!");
});

const { PORT = 3000 } = process.env;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
