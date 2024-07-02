import { Prisma, PrismaClient } from "@prisma/client";
import { Request, Response } from 'express';

const prisma = new PrismaClient();


export async function createStudent(req: Request, res: Response) {
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
  } catch (error) {
    res.status(400).json({
      status: 'bad request',
      message: `${error}`,
    });
  } finally {
    await prisma.$disconnect();
  }
  
}

export async function getAllStudents(req: Request, res: Response) {
    try {
      const students = await prisma.students.findMany();
      res.status(200).json({
        status: 'successful',
        data: {
          length: students.length,
          students,
        },
      });
    } catch (error) {
      res.status(500).json({
        status: 'failed',
        message: `${error}`,
      });
    } finally {
      await prisma.$disconnect();
    }
}