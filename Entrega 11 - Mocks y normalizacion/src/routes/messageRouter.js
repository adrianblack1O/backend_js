import { Router } from "express";
import { getMessage } from "../controllers/messageController.js";

const router = Router();

router.get("/messages", getMessage);

export default router;
