import express from "express";
import { getUsers, getUser, updateUser, createUser, deleteUser } from "../controllers/users.controllers.js";

const router = express.Router();

router.get("/", getUsers);
router.get("/:id", getUser);
router.post("/", createUser);
router.put("/", updateUser);
router.delete("/:id", deleteUser);

export default router;
