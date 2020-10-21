"use strict";
const express = require('express');
const mongoose = require('mongoose');
const postRoutes = require('./routes/post');
const app = express();
const cors = require('cors');
require('dotenv').config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/post', postRoutes);
app.get('/', (req, res) => {
    res.send('We are on home');
});
app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.PORT}`));
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, () => console.log('Connected to DB'));
//# sourceMappingURL=server.js.map