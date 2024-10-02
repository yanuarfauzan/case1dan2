"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTotalStockByType = exports.getFruitsByType = exports.getAllFruits = void 0;
const fruits_1 = require("./data/fruits");
const getAllFruits = () => {
    return fruits_1.fruits.map(fruit => fruit.fruitName);
};
exports.getAllFruits = getAllFruits;
const getFruitsByType = () => {
    const fruitGroups = {
        IMPORT: [],
        LOCAL: []
    };
    fruits_1.fruits.forEach(fruit => {
        fruitGroups[fruit.fruitType].push(fruit);
    });
    return fruitGroups;
};
exports.getFruitsByType = getFruitsByType;
const getTotalStockByType = () => {
    const totalStock = {
        IMPORT: 0,
        LOCAL: 0
    };
    fruits_1.fruits.forEach(fruit => {
        totalStock[fruit.fruitType] += fruit.stock;
    });
    return totalStock;
};
exports.getTotalStockByType = getTotalStockByType;
