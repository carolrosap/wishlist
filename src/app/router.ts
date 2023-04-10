import { Router } from "express";
import { homeController } from "./controller/HomeController";

//import express from "express";
import path from "path"; 
const express = require("express");
const router: Router = Router();

router.use('/css',express.static('public/css'))

router.get("/", homeController.home);
router.get("/wishlist", homeController.home);

export { router };
