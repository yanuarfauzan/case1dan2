"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/index.ts
const express_1 = __importDefault(require("express"));
const case1_1 = require("./case1");
const case2_1 = require("./case2");
const comments_1 = require("./data/comments");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.get('/case1/soal1', (req, res) => {
    res.json((0, case1_1.getAllFruits)());
});
app.get('/case1/soal2', (req, res) => {
    res.json((0, case1_1.getFruitsByType)());
});
app.get('/case1/soal3', (req, res) => {
    res.json((0, case1_1.getTotalStockByType)());
});
app.get('/case2/soal1', (req, res) => {
    res.json((0, case2_1.countComments)(comments_1.comments));
});
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
