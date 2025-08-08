import express from "express";
import { getPublications, getPublication, createPublication, updatePublication, deletePublication , deletePublications} from "../controllers/publications.js";
const router = express.Router();

router.get("/", getPublications);
router.get("/:id", getPublication);
router.post("/", createPublication);
router.put("/:id", updatePublication);
router.delete("/:id", deletePublication);
router.delete("/", deletePublications);

export default router;
