import { Router } from "express";
import {
  getAll,
  getById,
  create,
  remove,
  update,
} from "../controllers/notesController.mjs";

const router = Router();

router.get("/", getAll);

router.post("/", create);

router.put("/:id", update);

router.delete("/:id", remove);

router.get("/:id", getById);

export default router;
