import { fruits } from "./data/fruits";
import { IFruit } from "./types/fruitTypes";

export const getAllFruits = (): string[] => {
    return fruits.map(fruit => fruit.fruitName);
};

export const getFruitsByType = (): Record<string, IFruit[]> => {
    const fruitGroups: Record<string, IFruit[]> = {
        IMPORT: [],
        LOCAL: []
    };

    fruits.forEach(fruit => {
        fruitGroups[fruit.fruitType].push(fruit);
    });

    return fruitGroups;
};

export const getTotalStockByType = (): Record<string, number> => {
    const totalStock: Record<string, number> = {
        IMPORT: 0,
        LOCAL: 0
    };

    fruits.forEach(fruit => {
        totalStock[fruit.fruitType] += fruit.stock;
    });

    return totalStock;
};