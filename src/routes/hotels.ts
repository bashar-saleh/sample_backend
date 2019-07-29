import * as express from"express";
import {HotelsController} from "@controllers/hotels_controller"


const HotelsRouter = express.Router();


HotelsRouter.get("/", HotelsController.index);



export {HotelsRouter}