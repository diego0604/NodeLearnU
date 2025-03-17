import express from 'express';
import cors from 'cors'; 
const app = require();

app.use(express,json());
app.use(cors());

import userRoutes from './routes/user.routes';
import authRoutes from './routes/auth.routes';
import projectRoutes from './routes/project.routes';

app.use('./api/v1', userRoutes);
app.use('./api/v1', authRoutes);
app.use('./api/v1', projectRoutes);

export default app;