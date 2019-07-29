import * as express from "express";
import {UsersRouter} from '@routes/users';
import morgan = require("morgan");
import { ShopsRouter } from "@routes/shops";
import { CategoriesRouter } from "@routes/categories";
import { HotelsRouter } from "@routes/hotels";

const app = express();

app.use(morgan("dev"));


app.use("/users", UsersRouter);
app.use("/categories", CategoriesRouter);
app.use("/hotels", HotelsRouter);


export {app};