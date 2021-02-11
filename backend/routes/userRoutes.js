import express from "express";
import { authUser, getUserProfile } from "../controllers/userController.js";
//instantiate express
const router = express.Router();

router.post("/login", authUser);
router.route("/profile").get(getUserProfile);

export default router;
