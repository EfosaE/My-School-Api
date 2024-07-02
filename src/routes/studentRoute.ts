import { Router } from 'express';
import { createStudent, getAllStudents } from '../controllers/studentController';
const studentRouter = Router();

studentRouter.route('/').post(createStudent);
studentRouter.route('/').get(getAllStudents);

export default studentRouter;
