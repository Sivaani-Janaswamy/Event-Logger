import express from "express";
import {getEvent, createEvent, deleteEvent, updateEvent} from "../controllers/event.controller.js"

const router = express.Router();

router.get("/",getEvent);
router.post("/", createEvent);
router.delete("/:id", deleteEvent);
router.put("/:id", updateEvent);

export default router;