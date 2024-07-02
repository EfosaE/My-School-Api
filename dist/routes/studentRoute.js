"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const studentController_1 = require("../controllers/studentController");
const studentRouter = (0, express_1.Router)();
studentRouter.route('/').post(studentController_1.createStudent);
studentRouter.route('/').get(studentController_1.getAllStudents);
exports.default = studentRouter;
