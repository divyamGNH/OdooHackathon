import express from "express";
import {addTicketsToDb} from "../controllers/ticketController.js";

const router = express.Router();

router.post("/",addTicketsToDb);

export default router;