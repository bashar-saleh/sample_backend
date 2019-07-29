import * as express from "express";
import { CategoriesController } from "@controllers/categories_controller";

const CategoriesRouter = express.Router();


CategoriesRouter.get("/", CategoriesController.index);



export  {CategoriesRouter};