import * as express from "express";
import { ShopsController } from "@controllers/shops_controller";

const ShopsRouter = express.Router();


ShopsRouter.get("/", ShopsController.getAllShops);
ShopsRouter.post("/", ShopsController.createShop);



export  {ShopsRouter};