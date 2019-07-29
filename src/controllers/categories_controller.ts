import { prisma } from "@prisma";
import { Request, Response } from "express";


const index = (req: Request, res: Response) => {
    prisma.categories().$fragment("{ iconCode en { name } }").then(categories => res.send(categories));
};



export const CategoriesController = {
    index
};
