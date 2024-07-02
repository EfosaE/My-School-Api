"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createStudent = createStudent;
exports.getAllStudents = getAllStudents;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function createStudent(req, res) {
    try {
        const { email, name } = req.body;
        const newStudent = await prisma.students.create({
            data: {
                email,
                name,
            },
        });
        res.status(201).json({
            status: 'successful',
            data: {
                student: newStudent,
            },
        });
    }
    catch (error) {
        res.status(400).json({
            status: 'bad request',
            message: `${error}`,
        });
    }
    finally {
        await prisma.$disconnect();
    }
}
async function getAllStudents(req, res) {
    try {
        const students = await prisma.students.findMany();
        res.status(200).json({
            status: 'successful',
            data: {
                length: students.length,
                students,
            },
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'failed',
            message: `${error}`,
        });
    }
    finally {
        await prisma.$disconnect();
    }
}
