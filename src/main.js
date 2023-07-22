import * as dotenv from "dotenv";
dotenv.config();

import express from 'express';
import userRouter from "./user/user.route.js"
import courseRouter from "./courses/course.route.js"
import cors from 'cors';

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/v1/user', userRouter);
app.use('/api/v1/course', courseRouter);


const PORT = process.env.PORT || 3002;
app.listen(PORT, ()=> {
    console.log(`Server is running on port ${PORT}.`)
});