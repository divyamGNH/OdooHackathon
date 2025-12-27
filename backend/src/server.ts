import express, { Request, Response } from "express";
import cors from "cors";

const app = express();

const PORT = 3000;

app.use(cors());
app.use(express.json());

app.listen(PORT, () => {
  console.log(`🚀 Server listening on PORT:${PORT}`);
});
