import { Router } from "express";
import { getAllDevelopings } from "../controllers/developing/controller";

const router = Router()

router.get('/', getAllDevelopings)

export default router