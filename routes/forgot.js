import express from 'express';
var router = express.Router();
import { checkUser, forgot } from "../controller/forgot.js";

router.post("/",checkUser);
router.put("/",forgot);

export default router;
