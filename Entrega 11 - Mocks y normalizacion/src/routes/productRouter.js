import { Router } from "express";
import { getHome } from "../controllers/productController.js";

const router = Router();

router.get("/api", getHome);

export default router;
