import express from "express"
import { createNote, deletedNote, getAllNotes, updateNote } from "../controllers/notesController.js";

const router = express.Router();

router.get("/", getAllNotes);
router.post("/", createNote);
router.put("/:id", updateNote);
router.delete("/:id", deletedNote);

export default router;