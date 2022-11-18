import express, { Router } from "express";
import menuRouter from "./menuRouter";
import cartRouter from "./cartRouter";

const router: Router = express.Router();

router.use("/menu", menuRouter);
router.use("/cart", cartRouter);

module.exports = router;