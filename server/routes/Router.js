import { Router } from "express";

import {
    create,
    getAll,
    getById,
    update,
    deleteOne,
    deleteAll,
} from "../controllers/Controller.js";

const router = Router();

// CRUD -----------

// CREATE 
router.post("/", create);
// READ all 
router.get("/", getAll);
// READ each 
router.get("/:id", getById);
// UPDATE 
router.patch("/:id", update);
// DELETE one
router.delete("/:id", deleteOne)
// DELETE all
router.delete("/", deleteAll)


export default router;