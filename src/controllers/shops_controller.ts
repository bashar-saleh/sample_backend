import { prisma } from "@prisma";
import { Request, Response } from "express";
import { assertValidSDL } from "graphql/validation/validate";
import { ASTValidationContext } from "graphql/validation/ValidationContext";


const getAllShops = (req: Request, res: Response) => {
    prisma.shops().$fragment("{ name owner { name } }").then(shops => res.send(shops));
}

const createShop = (req: Request, res: Response) => {
    prisma.createShop({
        name: "Malaki",
        owner: {
            create: {
                name: "Mazen",
                email: "mazen@gmail.com"
            }
        }
    }).then(shop => {
        res.send("Shop with Owner is created.")
    });
}


export const ShopsController = {
    getAllShops,
    createShop
}
