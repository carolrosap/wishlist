import { Router } from "express";
import { homeController } from "./controller/HomeController";

const express = require("express")
const router: Router = Router()

router.use('/css',express.static('public/css'))
router.use('/icons',express.static('public/img/icons'))

router.get("/", homeController.home)
router.get("/wishlist", homeController.home)

export { router };
