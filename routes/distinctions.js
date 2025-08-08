import express from "express";
export { getDistinctions, getDistinction, createDistinction, updateDistinction, deleteDistinction , deleteDistinctions };
const router = express.Router();

router.get("/", getDistinctions);
router.get("/:id", getDistinction);
router.post("/", createDistinction);
router.put("/:id", updateDistinction);
router.delete("/:id", deleteDistinction);
router.delete("/", deleteDistinctions);
export default router;
