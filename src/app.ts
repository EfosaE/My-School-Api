import express from 'express';
import { PrismaClient } from '@prisma/client';
import studentRouter from './routes/studentRoute';
const app = express();

app.use(express.json());

app.use('/api/v1/student', studentRouter);

export default app;
