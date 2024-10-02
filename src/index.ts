// src/index.ts
import express from 'express';
import { getAllFruits, getFruitsByType, getTotalStockByType } from './case1';
import { countComments } from './case2';
import { comments } from './data/comments'; 

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/case1/soal1', (req, res) => {
    res.json(getAllFruits());
});

app.get('/case1/soal2', (req, res) => {
    res.json(getFruitsByType());
})

app.get('/case1/soal3', (req, res) => {
    res.json(getTotalStockByType());
})

app.get('/case2/soal1', (req, res) => {
    res.json(countComments(comments));
})


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});


