import { NextFunction, Request, Response } from "express";
import Developing from "../../models/developing";

export async function getAllDevelopings(req: Request, res: Response, next: NextFunction) {
    try {
        const developings = await Developing.findAll()
        res.json(developings)
        next()
        
    } catch (e) {
        next(e)
    }
}
