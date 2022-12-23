import express, { Application, Request, Response, NextFunction } from "express";
import path from "path";

const PORT: number = 8000;
const app: Application = express();

app.use(express.static(path.join(__dirname)));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Logic

const post = async (
  req: express.Request,
  res: express.Response,
  next: NextFunction
) => {
  const name = await req.body;
  res.send(name);
  console.log(name);
  next();
};

app.get("/", (req: Request, res: Response) => {
  res.send("Hello");
});

app.post("/", post);

app.listen(PORT, (): void => {
  console.log(`App running on port : ${PORT}`);
});
