"use strict";
const mongoose = require('mongoose');
const { Schema, model } = mongoose;
const postSchema = Schema({
    title: {
        type: String,
        required: true,
        unique: true,
    },
    description: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
});
module.exports = model('Post', postSchema);
//# sourceMappingURL=Post.js.map