const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();


app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.Uri)
    .then(() => console.log('Connected to MongoDB'))
    .catch(err => console.log(err));

app.listen(process.env.Port, () => {
    console.log('Server is running on port 5000');
});
