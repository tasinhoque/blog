"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
router.get('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const posts = yield Post.find();
        res.status(200).send(posts);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
router.get('/:postId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = yield Post.findById(req.params.postId);
        res.status(200).send(post);
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
router.post('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const post = new Post(req.body);
        yield post.save();
        res.status(200).send({ post });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
router.delete('/all', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedback = yield Post.deleteMany({});
        feedback
            ? res.status(200).send({ message: 'Success' })
            : res.status(400).send({ message: 'Post not found' });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
router.delete('/:postId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const feedback = yield Post.findByIdAndDelete(req.params.postId);
        feedback
            ? res.status(200).send({ message: 'Success' })
            : res.status(400).send({ message: 'Post not found' });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
router.patch('/:postId', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield Post.findByIdAndUpdate(req.params.postId, { $set: req.body });
        res.status(200).send({ message: 'Success' });
    }
    catch (error) {
        res.status(400).send({ message: error.message });
    }
}));
module.exports = router;
//# sourceMappingURL=post.js.map