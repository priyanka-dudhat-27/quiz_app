const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./db');
const app = express();
const quizRoutes = require('./routes/quizRoutes');

dotenv.config()
app.use(cors());
app.use(express.json({extended:true}));
connectDB()

app.use('/api', quizRoutes);

app.get('/', (req,res) => {
    return res.status(200).send({message:"Success"})
})
app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
