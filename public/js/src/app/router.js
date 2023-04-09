"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
var express_1 = require("express");
var HomeController_1 = require("./controller/HomeController");
var express = require("express");
var router = (0, express_1.Router)();
exports.router = router;
console.log(__dirname + '../styles');
//Routes
router.use('/css', express.static(__dirname + '/view/styles/'));
router.get("/", HomeController_1.homeController.home);
router.get("/wishlist", HomeController_1.homeController.home);
