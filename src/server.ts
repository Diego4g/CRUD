import cors from "cors";
import express, { Request, Response } from "express";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (request: Request, response: Response) => {
  return response.send("Hello world");
});

app.listen(3333, () => console.log("Server is running in PORT 3333"));
