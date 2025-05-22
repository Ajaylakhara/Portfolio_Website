import express from "express";
import { submitContactForm } from "../controllers/contactControllers.js";

const router = express.Router();

router.post("/contact", submitContactForm);

export default router;
