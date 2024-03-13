import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRoutes from './routes/user.route.js';
import authRoutes from './routes/auth.routes.js';

dotenv.config();

mongoose.connect(process.env.MONGO) .then(() => {
    console.log('mongoDB is connected');
}).catch(err => {
    console.log(err);
});

const app = express();

app.use(express.json());

app.listen(3000, () => {
    console.log('server is running on port 3000');
});

/**creating test api  */
app.use('/api/user', userRoutes);

/* app.get('/test', (req, res) => {
    res.json({ message: 'api is connected'})
})*/


/**signup routing */
app.use('/api/auth', authRoutes);

/**middle ware for errors */
app.use((err, req, res, next) =>{
    const statusCode = err.statusCode || 500;
    const message = err.massage || 'internal server error';
    res.status(statusCode).json({
        success: false,
        statusCode,
        message
    });
});