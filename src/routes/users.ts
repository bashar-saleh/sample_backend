import * as express from "express";

const UsersRouter = express.Router();

UsersRouter.get("/", (req, res) => {
  console.log("Love is Love");
  res.send();
});

export { UsersRouter };
